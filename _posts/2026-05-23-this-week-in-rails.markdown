---
layout: post
title: "Safer to_i coercion, custom to_fs formats, and more!"
categories: news
author: Emmanuel Hayford
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-05-23
---


Hi, I'm [Emmanuel Hayford](https://hayford.dev/). Rails had a busy week, so grab a tea and let's get into it.

[The 2026 Ruby on Rails Community Survey is open](https://railsdeveloper.com/survey/)
Open through July 3rd. Anonymous, and takes about 10 to 12 minutes, results published free. This year goes deeper on tools, deployment, team shape, and how AI is (or isn't) showing up in your workflow.

[Limit the size of strings we call `to_i` on in ActiveRecord](https://github.com/rails/rails/pull/57368)
Calling `to_i` on a very long string can be a DoS vector. Active Model now caps auto-integer coercion to the first `_limit * 4` bytes of the input, where `_limit` is the column's storage size: 16 bytes for a default 4-byte integer, 32 bytes for an 8-byte bigint. That's comfortably more than the digits any in-range value can have, with room left for a sign or a typical slug suffix. Without the multiplier, slug-style routes (`Post.where(id: params[:id])` where the id arrives as `123-hello-world`) would break.

[Introduce `ActiveSupport::TimeFormats` and `ActiveSupport::DateFormats`](https://github.com/rails/rails/pull/57345)
Custom `to_fs` formats can now be registered without mutating the global `Time::DATE_FORMATS` and `Date::DATE_FORMATS` hashes. The old constants still work for backward compatibility, but they're deprecated and slated for removal in the next version of Rails.

```ruby
ActiveSupport::TimeFormats.register(:month_and_year, "%B %Y")
ActiveSupport::DateFormats.register(:short_ordinal, ->(date) { date.strftime("%B #{date.day.ordinalize}") })

Time.now.to_fs(:month_and_year)  # => "February 2024"
Date.today.to_fs(:short_ordinal) # => "February 21st"
```

[Add ActionController::Parameters#deep_transform_values](https://github.com/rails/rails/pull/57340)
Mirrors the Hash method, including a bang variant and propagation of `permitted?`.

```ruby
params = ActionController::Parameters.new(
  user: {
    email: "  ALICE@EXAMPLE.COM  ",
    profile: { bio: "  Hello world  " }
  }
)

params.deep_transform_values { |v| v.is_a?(String) ? v.strip.downcase : v }
```

[Don't bump lock_version on records during blob analysis](https://github.com/rails/rails/pull/57284)
A new block helper, `ActiveRecord::Locking::Optimistic.preserve_lock_version_on_touch`, suppresses the `lock_version` bump (and the matching `WHERE lock_version = X` constraint) on touches fired inside it. `updated_at` still updates so cache keys keep invalidating. `ActiveStorage::Blob#touch_attachments` now wraps its cascade with the helper, since blob analysis doesn't actually modify any parent field and the bump was a frequent source of `StaleObjectError` on concurrent uploads.

[Reset `lock_version` after a nested savepoint rollback](https://github.com/rails/rails/pull/57400)
`restore_transaction_record_state` short-circuited on every nested savepoint rollback, leaving the optimistic locking column at the value `_update_row` had bumped it to inside the savepoint. The next save would then raise `StaleObjectError`. The PR adds a locking-aware branch that rebuilds `lock_version` from the snapshot's `original_value`, so both the WHERE clause and the dirty tracking on the next save behave as if the savepoint's increment never happened. Two regression tests in `OptimisticLockingRollbackTest` cover the inner-rollback and outer-commit cases.

[Fix label `for` not matching input `id` when a collection value is nil](https://github.com/rails/rails/pull/57209)
With a `nil` entry in the collection, `collection_radio_buttons` and `collection_check_boxes` produced an input with `id="user_active"` but a label with `for="user_active_"`, so clicking the label didn't select the radio. `sanitize_attribute_name` now skips the underscore separator when the sanitized value is empty, so the IDs line up. The bug had been there since the helper was first introduced in 2012.

[Add `enforced:` option for foreign keys on PostgreSQL 18.4+](https://github.com/rails/rails/pull/57377)
`add_foreign_key` accepts `enforced: false` to create a `NOT ENFORCED` constraint, useful for bulk DML that loads the referenced and referencing tables in arbitrary order. PostgreSQL marks `NOT ENFORCED` constraints as `NOT VALID` internally, so the schema dumper outputs both `enforced: false` and `validate: false`. A new `change_foreign_key` toggles enforcement on an existing constraint, replacing raw `ALTER TABLE ... ALTER CONSTRAINT` SQL. Rails requires PostgreSQL 18.4+ here because earlier 18.x versions lost deferrability on these constraints.

[Use NOT ENFORCED in disable_referential_integrity on PostgreSQL 18.4+](https://github.com/rails/rails/pull/57378)
On PostgreSQL 18.4 and later, `disable_referential_integrity` toggles `NOT ENFORCED` and `ENFORCED` instead of `DISABLE TRIGGER ALL` and `ENABLE TRIGGER ALL`. That requires only table ownership rather than superuser privileges. The toggle and restore are wrapped in a single transaction so a failure inside the block can't leave originally-enforced constraints stuck in a `NOT ENFORCED` state. `check_all_foreign_keys_valid!` skips `NOT ENFORCED` constraints, since `VALIDATE CONSTRAINT` doesn't apply to them.

[Allow array values for `.in_order_of`](https://github.com/rails/rails/pull/52871)
Passing an array of values inside `.in_order_of` groups records together in the resulting `CASE` expression, so a single ranking can collapse multiple states into the same bucket and still combine with later `order` clauses.

```ruby
Post.in_order_of(:state, [[:published, :canceled], :archived]).order(created_at: :desc)
```

[Support proc and symbol for `NumericalityValidator`'s `:in` option](https://github.com/rails/rails/pull/46262)
`validates_numericality_of :price, in: ...` now accepts a proc or a symbol, in addition to a literal range, so the bound can depend on the record's own state.

```ruby
validates_numericality_of :price, in: ->(o) { 0..o.max_price }

validates_numericality_of :price, in: :price_range

def price_range
  0..max_price
end
```

[Load image processing backend upfront](https://github.com/rails/rails/pull/57393)
`image_processing` autoloads the configured backend on demand, so the first variant after every deploy paid the cost of loading it. The backend is now loaded at boot, which removes that first-request penalty and improves copy-on-write sharing for preforking servers. About 19MB of `image_processing/vips` now lives in shared memory across forked workers.

[Parallelize exist? checks and uploads in MirrorService#mirror](https://github.com/rails/rails/pull/57171)
Both phases now run on the existing thread pool via `Concurrent::Promise`. The file is read once into a frozen string and each mirror gets its own `StringIO`, with `io.rewind` guarding against EOF on yield. With a simulated 50ms cloud round-trip, mirroring to five backends drops from roughly 250ms to 50ms.

[Allow create_join_table to accept a primary key](https://github.com/rails/rails/pull/56195)
`create_join_table` now accepts a `:primary_key` option. When provided, `id` is automatically set to `:primary_key` so the join table actually has one. Default behavior is unchanged.

```ruby
create_join_table :assemblies, :parts, primary_key: [:assembly_id, :part_id]
```

[Add `exclusion_constraint_exists?` and `unique_constraint_exists?` helpers](https://github.com/rails/rails/pull/50431)
The same idempotency check that has long existed for check constraints, foreign keys, and indexes is now available for exclusion and unique constraints.

[Accept Tempfile as ActiveStorage attachable](https://github.com/rails/rails/pull/50862)
`File` was already accepted as an attachable, so `Tempfile` joins it.

[`http_cache_forever` accepts an optional `last_modified:`](https://github.com/rails/rails/pull/57388)
The default is still January 1st 2011, but you can pass a more relevant time when one exists. Active Storage's `ProxyController` now uses the new keyword so its responses report a meaningful Last-Modified header.

[Fix duplicate `where` conditions in `create_or_find_by`](https://github.com/rails/rails/pull/57223)
On a relation that already has `where` conditions, when `create_or_find_by` catches a `RecordNotUnique` inside a transaction it retries the lookup with `where(attributes).find_by!(attributes)`, applying the same attributes twice. If the prior scope and the `create_or_find_by` argument disagree on a column (for example a polluted `CollectionProxy`), the retry matches nothing and raises `RecordNotFound`. The retry now only applies the attributes once.

[Preserve attachment changes when converting a record to another class via STI](https://github.com/rails/rails/pull/46486)
Calling `record.becomes(SubclassName)` on an unsaved record with pending Active Storage attachments dropped those attachments on the new instance, because `@attachment_changes` wasn't carried over (and still pointed at the original record). `becomes` now copies `@attachment_changes` to the new instance and rewires each change's owning record, so a `comment.becomes(ModeratedComment)` keeps its attached image. Persisted records weren't affected.

[Fix bulk job and email enqueueing methods with no arguments](https://github.com/rails/rails/pull/57267)
`ActionMailer.deliver_all_later` and `ActiveJob.perform_all_later` are defined inside files that only autoload once a mailer or job class is referenced, so calling either with an empty array in code that didn't otherwise touch a mailer or job raised `NoMethodError`. The definitions now live where they get loaded eagerly enough for the empty-array call to work, so a dynamically-built (and possibly empty) batch enqueues cleanly.

[Prevent the development welcome route from duplicating on route reload](https://github.com/rails/rails/pull/57367)
The internal welcome route's append block is now registered once per application boot, while keeping the existing `append` ordering so app-defined root routes still take precedence over the welcome page.

[Expose all `BatchEnumerator` attributes](https://github.com/rails/rails/pull/54587)
`cursor`, `order`, and `use_ranges` are now readable on `BatchEnumerator`, useful for gems that want to inspect or mirror the enumerator's configuration.

[Fix ShareLock ownership under :fiber isolation](https://github.com/rails/rails/pull/57423)
`ActiveSupport::Concurrency::ShareLock` now keys ownership on `ActiveSupport::IsolatedExecutionState.context`, the same notion of "current execution" that `CurrentAttributes` and the rest of the framework already use. Behavior under the default `:thread` isolation is unchanged. `@exclusive_thread` becomes `@exclusive_owner`, the `:thread` key in the `# :nodoc:` raw state becomes `:owner`, and `ActionDispatch::DebugLocks` is updated to match (with a small fix so `/rails/locks` no longer crashes on `Fiber#status`).

[Release reloader share on rack hijack in ActionDispatch::Executor](https://github.com/rails/rails/pull/57425)
The executor now detects hijacked responses inside `Executor#call` (HTTP 101 upgrades and `rack.hijack_io`) and completes the executor state eagerly, instead of waiting for body close. The three direct `state.complete!` call sites are folded into a single idempotent `finalize` closure so the eager hijack path doesn't double-complete alongside `rack.response_finished`. Long-lived hijack consumers like Action Cable already manage reload via `before_class_unload`, so releasing the share at hijack time is safe.

[Use `...` and anonymous splats where possible](https://github.com/rails/rails/pull/57386)
A small refactor across the framework. Slightly fewer allocations, slightly nicer code.

[\[RF Docs\] Active Record Query Interface](https://github.com/rails/rails/pull/56341)
This pull request is open for review: a substantial pass over the Active Record Query Interface guide. It works through dozens of review comments, links out to related guides (composite primary keys, security, the Rails API), uses booleans instead of `0` and `1` in examples, expands on `create_or_find_by`, mentions `except` alongside `only`, and reorganizes a few sections. Locking, transactions, eager loading and `EXPLAIN` are flagged as candidates for a future Performance guide. If you use these guides or care how Rails is taught to newcomers, take a look and leave feedback on the PR.

[Escape "API" for the strong_parameters doc](https://github.com/rails/rails/pull/57399)
A small docs fix: escape "API" with a backslash so it isn't rendered as a link.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-05-16%7D...main@%7B2026-05-23%7D)._
_We had [47 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260516-20260523) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
