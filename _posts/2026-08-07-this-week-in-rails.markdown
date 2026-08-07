---
layout: post
title: "`alias_attribute` is back, pluck on unsaved records, and more!"
categories: news
author: Emmanuel Hayford
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-08-07
---


Some things that should have worked all along finally do... like `alias_attribute` in associations, `pluck` on unsaved records, `search_field` with `autosave: true`. The rest of the week went into sharper SQL logs, sturdier job continuations, and more Ractor-ready registries. Here's what's new in Rails:

[Matz is coming to Rails World 2026!](https://rubyonrails.org/world/2026/)  
Ruby creator Yukihiro "Matz" Matsumoto is coming to Rails World 2026! He'll join DHH, Aaron Patterson, Robby Russell, and the rest of the lineup in Austin this September, and the full conference agenda is now live. If you've been waiting to see what's planned before grabbing a ticket or planning your schedule, now's the time to take a look.

[Fix `pluck` ignoring records assigned to a new record's association](https://github.com/rails/rails/pull/58372)   
When the parent is unsaved, `CollectionProxy#pluck` read the null scope instead of in-memory records assigned to the association. After a regression that made `ids` delegate to `pluck`, both returned empty on a new record even with tags already assigned. `pluck` now reads the target records directly, so `post.tags.pluck(:name)` works before save — and `ids` follows along.

```ruby
post = Post.new
post.tags = [Tag.create!(name: "ruby")]

post.tags.pluck(:name) # => ["ruby"]
```

[Restore `alias_attribute` support in associations](https://github.com/rails/rails/pull/58348)  
Since Rails 4.2, association reads bypassed `read_attribute` for an internal fast path that skipped alias resolution. An `alias_attribute` on the owner's foreign key or the target's primary key was silently ignored; production apps worked around it by overriding `_read_attribute` itself. The performance gap has closed enough that associations honor aliases again.

```ruby
class Post < ApplicationRecord
  alias_attribute :writer_id, :author_id
  belongs_to :author, foreign_key: :writer_id
end

post.author # reads FK via alias
```

[Add query predicate hooks for Active Record types](https://github.com/rails/rails/pull/58135)  
Types can override `transforms_query_predicates?`, `query_attribute`, and `query_value` to customize how hash `where` predicates are built, without changing normal casting or serialization. That lets a MySQL UUID column stored in `binary(16)` accept readable UUID strings while rendering `id = UUID_TO_BIN(?)`, or compare text through a normalized expression such as `lower(name) = lower(?)`.

[Fix `search_field` raising `NameError` when passed `autosave: true`](https://github.com/rails/rails/pull/58336)  
The documented `autosave: true` option never worked. `SearchField#render` called `request` directly, but tag objects have no access to the request, so every call raised `NameError`. It now reads from `@template_object.request`, so the reversed host lands in the `autosave` attribute as documented.

[Fix continuation step cursors losing their type when a job is interrupted and resumed](https://github.com/rails/rails/pull/58045)  
Cursors were persisted as raw JSON, so a `Date`, `Time`, or GlobalID cursor came back as a `String` after interrupt and resume — breaking resume logic such as `cursor.beginning_of_day`. Cursors now serialize through `ActiveJob::Arguments`, the same path job arguments use, so the resumed step sees the same object it set before the interruption.

[Allow prepared statements with query log tags](https://github.com/rails/rails/pull/58274)  
Query log tags previously forced prepared statements off. To keep them enabled alongside tagged queries, set `config.active_record.disable_prepared_statements = false`.

[Show parameter markers for casted binds in SQL logs and EXPLAIN](https://github.com/rails/rails/pull/58312)  
Casted binds — plain arrays of values rather than `ActiveModel::Attribute`s — logged as `[[nil, "abcd"]]` because there was no column name to pair with each value. They now show positional markers such as `[["$1", "abcd"]]`, matching the `$1` placeholder in the SQL.

[Make `CommandRecorder#record` and `#inverse_of` private](https://github.com/rails/rails/pull/58254)  
These are internal APIs on `ActiveRecord::Migration::CommandRecorder`. Callers should use the public migration methods (`create_table`, `add_column`, and so on) directly, and combine them with `revert` to record inverted commands.

[Make Mime types ractor-shareable](https://github.com/rails/rails/pull/57994)  
The `Mime::Type` registry is frozen at eager load, with types initialized as frozen objects. Registering or unregistering MIME types after application initialization is now deprecated — do that in an initializer instead.

[Make the Action View dependency tracker registry Ractor-shareable](https://github.com/rails/rails/pull/57948)  
The dependency tracker registry can be shared across Ractors when the application opts in via `Rails.application.ractorize!`. Registering trackers after initialization is deprecated; wrap registration in `ActiveSupport.on_load(:action_view)` during boot instead.


A few deprecations landed this week:

[Deprecate `write_attribute(:id, value)`](https://github.com/rails/rails/pull/58347), [positional `#insert` arguments](https://github.com/rails/rails/pull/58297), and [passing `binds` to `#insert`, `#update`, and `#delete`](https://github.com/rails/rails/pull/58323)

- `write_attribute(:id, value)` still routed to the primary key column. Use `#id=` on models whose primary key is not named `id`, matching the read-side deprecation from Rails 7.1.
- The positional `pk`, `id_value`, and `sequence_name` arguments to `#insert` are deprecated. Pass `returning:` in place of `pk`.
- The separate `binds` positional on `#insert`, `#update`, and `#delete` is deprecated. Pass `Arel.sql("... ?", *binds)` instead:

```ruby
connection.insert(Arel.sql("INSERT INTO topics (title) VALUES (?)", "hello"))
```

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-07-31%7D...main@%7B2026-08-07%7D)._
_We had [28 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260731-20260807) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
