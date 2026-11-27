---
layout: post
title: "credentials:keys, bulk Action Text, and more!"
categories: news
author: Emmanuel Hayford
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-11-27
---


You can now list credential keys without printing their values, Action Text stops querying once per attachment, and Action Mailer boots without Active Job. Here's what's new in Rails:

[Add bin/rails credentials:keys](https://github.com/rails/rails/pull/59772)   
Lists every key in the credentials file without the secrets. Paths use the same dot notation as `credentials:fetch`, so you can check what is set in production without revealing anything.

```bash
$ bin/rails credentials:keys --environment production
aws.access_key_id
aws.secret_access_key
secret_key_base
```

[Check the encrypted file key length when decrypting](https://github.com/rails/rails/pull/59954)   
A key of the wrong length used to raise only on write. Reading now raises `ActiveSupport::EncryptedFile::InvalidKeyLengthError` too. The credentials and encrypted commands print that error and exit 1, and `edit` fails before opening the editor.

[Only draw Action Mailbox conductor routes in local environments](https://github.com/rails/rails/pull/59950)   
The inbox inspector at `/rails/conductor` is now prepended only when `Rails.env.local?`, the same way `/rails/mailers` already works. Production no longer exposes those routes.

[Let Action Mailer load without Active Job](https://github.com/rails/rails/pull/59987), and [fix TestCase when Active Job is missing](https://github.com/rails/rails/pull/60013)   
`config.load_defaults` no longer sets `config.action_mailer.delivery_job`, which loaded Active Job as soon as Action Mailer loaded. Apps that send mail without the `activejob` gem now boot. `ActionMailer::TestCase` and the synchronous email assertions work in those apps too. The Active Job railtie still wires up helpers for enqueued emails automatically.

[Don't run deliver callbacks when no email was built](https://github.com/rails/rails/pull/59952)   
If a mailer action never called `mail`, or a `before_action` halted it, `deliver_now` and `deliver_later` still ran the deliver callbacks. They now skip those callbacks unless an email was actually built.

[Locate Action Text attachables in bulk](https://github.com/rails/rails/pull/58173)   
Rendering rich text with N attachments used to cost N queries, one SGID lookup each. Attachables, galleries included, are now located in bulk, one query per model class, and memoized per content instance. Saving a body with many attachments no longer re-renders the body once per attachment either.

[Locate an Array of records passed to a job with one query per model](https://github.com/rails/rails/pull/59961)   
`MyJob.perform_later(users)` used to run one query per record when the job ran. Deserialization now loads each model class once. If a record appears more than once in the array, each position gets the same instance.

[Don't share the query cache with Live streams](https://github.com/rails/rails/pull/59989), and [give Live actions the request's event reporter context](https://github.com/rails/rails/pull/59957)   
Two `ActionController::Live` thread-isolation fixes landed together:

- The streaming thread inherited the request's query cache, so repeated reads inside a stream returned stale results. Live streams no longer reuse that cache.
- Live actions run on a pooled thread that kept another request's `Rails.event` context and tags. Events now carry the context of the request that started the stream.

[Add enforced: to add_check_constraint](https://github.com/rails/rails/pull/59796), and [change_check_constraint for PostgreSQL 19+](https://github.com/rails/rails/pull/59988)   
`add_check_constraint` accepts `enforced: false` on PostgreSQL 18+ to create a `NOT ENFORCED` constraint. On PostgreSQL 19+, `change_check_constraint` toggles a constraint between `ENFORCED` and `NOT ENFORCED`. Changing it to `ENFORCED` checks all existing rows.

```ruby
add_check_constraint :products, "price > 0", name: "price_check", enforced: false
change_check_constraint :products, name: "price_check", enforced: true
```

[Rename default_order to fallback_order](https://github.com/rails/rails/pull/60019)   
The query method that supplies an order only when none is set is now `fallback_order`. `reorder` also clears it, so `Post.fallback_order(:title).reorder(nil)` is unordered.

[Fix disable_joins associations ignoring the rest of their scope](https://github.com/rails/rails/pull/59982)   
Lazily loading a `disable_joins` association applied only the conditions and order. `select`, `limit`, `includes`, `readonly`, and `strict_loading` from the scope are now applied too.

[Raise ActionController::BadRequest for every Rack::BadRequest](https://github.com/rails/rails/pull/58677)   
Malformed request bodies that Rack tags with `Rack::BadRequest`, such as `BoundaryTooLongError` or `MultipartPartLimitError`, escaped as 500s. They are now 400s, matching the other parameter parse errors.

[Handle escaped quotes in Accept header parameters](https://github.com/rails/rails/pull/59931)   
Quoted parameters in an `Accept` header can contain escaped characters. Parsing now recognizes those, so a header that used to fail as malformed is accepted.

[Return a plain String when truncate_bytes cuts an html_safe string](https://github.com/rails/rails/pull/59915)   
Truncating a `SafeBuffer` escaped its markup and could return more bytes than requested. Cutting now returns a plain `String`, matching `truncate`.

[Ignore a schema cache dump that can't be deserialized](https://github.com/rails/rails/pull/59876)   
A dump can reference classes that no longer exist. Loading it used to raise at boot. Rails now skips that dump and rebuilds the cache instead.

[Honor DATE_FORMATS overrides of built-in formats](https://github.com/rails/rails/pull/59992)   
Assigning `Time::DATE_FORMATS[:short]` had no effect because `to_fs(:short)` kept the frozen built-in. An override now applies. `ActiveSupport::TimeFormats.register` still replaces a built-in format.

[Bump the minimum supported SQLite version to 3.37.0](https://github.com/rails/rails/pull/60008)   
The adapter has used `pragma_table_list` since Rails 8.0. On SQLite 3.35 and 3.36, table listing failed with "no such table: pragma_table_list". That requirement is now explicit.

[Fix db:system:change Dockerfile packages](https://github.com/rails/rails/pull/59970), and [replace build-essential in generated Dockerfiles](https://github.com/rails/rails/pull/55189)   
`rails db:system:change` now updates Dockerfile packages for current and older generated apps. New Dockerfiles install `gcc`, `g++`, and `make` instead of the heavier `build-essential` metapackage.

[Update the default Node.js version for new apps to 26.13.1](https://github.com/rails/rails/pull/58389)   
The `.node-version` file generated for new applications now pins Node 26.13.1.

[Deprecate a positional table name in Arel::Table.new](https://github.com/rails/rails/pull/59574)   
Pass `name:` instead. `Arel::Table.new(:users)` still works, with a deprecation warning.

```ruby
Arel::Table.new(name: :users)
```

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-11-20%7D...main@%7B2026-11-27%7D)._
_We had [48 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20261120-20261127) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
