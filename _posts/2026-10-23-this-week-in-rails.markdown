---
layout: post
title: "Safer secrets, ZJIT, and more!"
categories: news
author: Emmanuel Hayford
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-10-23
---


New apps stop falling back to Marshal for signed messages, the local secret file is no longer world-readable, and SQLite finally renames columns the way the database intended. Here's what's new in Rails:

[Default `config.active_support.message_serializer` to `:json` for 8.2](https://github.com/rails/rails/pull/59156)
With `config.load_defaults 8.2`, messages from `MessageVerifier` and `MessageEncryptor` no longer fall back to deserializing Marshal payloads. That covers signed IDs, signed GlobalIDs, Active Storage keys, and the rest. Apps on 7.1 through 8.1 keep `:json_allow_marshal`. Confirm nothing still arrives as Marshal via the `message_serializer_fallback.active_support` notification before you switch.

[Create `tmp/local_secret.txt` with owner-only permissions](https://github.com/rails/rails/pull/59247)
The development and test `secret_key_base` file was created with the process umask, often `022`, so it was world-readable. It is now written as `0600`, and an existing file is tightened on read on non-Windows platforms, matching `config/master.key`.

[Keep route redirects from a string template on the request host](https://github.com/rails/rails/pull/59218)
`redirect("/%{path}")` could turn `GET /old/%2Finjected.example` into `//injected.example`, which browsers follow to another host. When interpolation would give the target a scheme or host the template does not name, the delimiter is now percent-encoded. Templates that already name a host, such as `redirect("//cdn.example.com/%{path}")`, are unchanged.

[Add `config.zjit`](https://github.com/rails/rails/pull/59183)
Like `config.yjit`, this enables the JIT after boot so code that only runs while starting the app is not compiled. When ZJIT is available it takes precedence over YJIT, since only one JIT can be on.

```ruby
config.zjit = true
```

[Use native `RENAME COLUMN` for `rename_column` on SQLite](https://github.com/rails/rails/pull/59204)
`rename_column` used to rebuild the table and copy index, check constraint, and virtual column SQL as written, so it failed when that SQL used the old column name. The rebuild also dropped triggers, broke foreign keys from other tables, and lost a string primary key. SQLite's own `ALTER TABLE ... RENAME COLUMN` updates all of those.

[Fix `in_order_of` returning no records after a second serialize](https://github.com/rails/rails/pull/59207)
Types whose serialized value changes when serialized again, such as deterministic encryption, `json` columns, and `serialize` coders, made `in_order_of` match nothing. Values are serialized once now.

[Fix numericality on a decimal attribute with implicit scale](https://github.com/rails/rails/pull/59246)
A database-backed `decimal` column without an explicit scale stores integers, but the validator treated the original float as if no rounding happened. Validation now uses the value the attribute actually holds.

```ruby
# t.decimal :unscaled_bank_balance, precision: 10
subject = NumericData.new(unscaled_bank_balance: 10_000_000.121)
subject.unscaled_bank_balance # => 10000000
subject.valid?                # => true
```

[Allow Active Record objects in the tuple `where` syntax](https://github.com/rails/rails/pull/59248)
The single-column form already accepted records. A record in a column tuple is now expanded to its primary key values. The same change fixes arrays of objects that delegate `#id`: only a one-element array was expanded before, so a longer list compared against `NULL`.

```ruby
Cpk::Book.where([:author_id, :id] => book)
Author.where(id: [decorator.new(one), decorator.new(two)])
```

[Raise when `deliver_all_later` is called with an already accessed message](https://github.com/rails/rails/pull/59192)
`deliver_later` already raised in that situation. `ActionMailer.deliver_all_later` used to enqueue anyway and silently drop local changes.

[Truncate tables shadowed on the PostgreSQL search path](https://github.com/rails/rails/pull/59101)
`db:truncate_all` and the reset of parallel test databases truncated the table a bare name resolves to twice and left the shadowed one untouched. They also failed on a table whose name contains a dot. Truncation now uses schema-qualified names from the catalog.

[Bump the minimum supported MySQL version to 5.7.9](https://github.com/rails/rails/pull/59175)
That is the version where `innodb_default_row_format` defaults to `DYNAMIC`, so the old `ROW_FORMAT=DYNAMIC` workaround for indexing `utf8mb4` `varchar(255)` columns is gone. Tables are created without an explicit `ROW_FORMAT`.

[Add a `before_ractorize` load hook](https://github.com/rails/rails/pull/59026)
`Rails::Application#ractorize!` now runs `ActiveSupport.on_load(:before_ractorize)` so frameworks, engines, and gems can prepare their own state before the app is made shareable. Framework ractorizing moved into each railtie instead of living inside `ractorize!`.

```ruby
ActiveSupport.on_load(:before_ractorize) do
  MyGem.make_shareable!
end
```

[Base deprecation proxies on `BasicObject`](https://github.com/rails/rails/pull/59325)
`DeprecatedObjectProxy` and `DeprecatedInstanceVariableProxy` now inherit from `BasicObject`. Methods added to `Object` after Active Support loads, such as `to_json`, `to_param`, `blank?`, or `in?`, are forwarded to the deprecated object with a warning instead of running on the proxy.

[`ParameterFilter#filter_param` passes a one-pair hash to Proc filters](https://github.com/rails/rails/pull/59190)
The third argument is now `{ key => value }`, the same hash `filter` would pass for that pair, instead of `nil`.

[Check `ActiveModel::Attributes` methods without building the attributes hash](https://github.com/rails/rails/pull/59206)
`respond_to?` for a method that is not defined no longer calls `attributes`. A key that an `attributes` override adds, without an attribute or a method, no longer makes the model respond to it. Active Record already worked this way.

[Deprecate `ssl_default_redirect_status:`](https://github.com/rails/rails/pull/59181), [`raise_on_assign_to_attr_readonly`](https://github.com/rails/rails/pull/59191), and [drop two PostgreSQL adapter checks](https://github.com/rails/rails/pull/59232)
A few cleanups landed this week:

- `ActionDispatch::SSL`'s `ssl_default_redirect_status:` is deprecated. The default has been 308 since Rails 6.1, and using the middleware without the argument now uses 308 instead of 307.
- `config.active_record.raise_on_assign_to_attr_readonly` has been a framework default since 7.1. It will be removed in 9.0 so attribute writers can be optimized further.
- `supports_identity_columns?` and `supports_native_partitioning?` always returned true since PostgreSQL 10. They are gone.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-10-16%7D...main@%7B2026-10-23%7D)._
_We had [40 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20261016-20261023) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
