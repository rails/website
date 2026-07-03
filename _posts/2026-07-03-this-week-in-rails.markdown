---
layout: post
title: "ProxyLogger, MIME deprecations, and more fixes"
categories: news
author: Emmanuel Hayford
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-07-03
---

Hi, it's [Emmanuel Hayford](https://hayford.dev/). Let's explore this week's changes in the Rails codebase.

[Make `add_foreign_key(if_not_exists: true)` reversible](https://github.com/rails/rails/pull/57895)  
Inverting `add_foreign_key ..., if_not_exists: true` produced `remove_foreign_key ..., if_not_exists: true`:

```ruby
recorder.inverse_of(:add_foreign_key, [:articles, :authors, if_not_exists: true])
# => [:remove_foreign_key, [:articles, :authors, {if_not_exists: true}], nil]
```

`remove_foreign_key` does not understand `:if_not_exists`, so rolling back such a migration was not the idempotent inverse of the addition. The fix translates `:if_not_exists` into `:if_exists` when inverting, exactly as `invert_add_check_constraint` already does:

```ruby
# => [:remove_foreign_key, [:articles, :authors, {if_exists: true}], nil]
```

[Use the float value for `:wait` if passed to `ActiveJob.retry_on`](https://github.com/rails/rails/pull/57817)  
`retry_on` now accepts a Float for `:wait`, consistent with `ActiveJob.set(wait: 1.5)`. Previously the value was converted to an Integer, so durations like `1.5.seconds` were truncated. Passing an unsupported `:wait` type will now also raise when loading the job class rather than failing silently at runtime.

[Implement ActiveSupport::ProxyLogger](https://github.com/rails/rails/pull/57931)  
The proxy logger is a logger that forwards all received logs to another logger, but has its own independent severity level. This is useful when you want some library you have no control over to use the same logger as the rest of your application, but at a different severity level because it is logging too much:

```ruby
SomeLibrary.logger = ActiveSupport::ProxyLogger.new(Rails.logger, :error)
```

Almost all of the standard Logger interface is supported.

[Deprecate Mime::SET, Mime::LOOKUP and Mime::EXTENSION_LOOKUP](https://github.com/rails/rails/pull/57826)  
These constants expose the MIME type registries directly, leaking mutable internal state. Everything they're used for is already covered by the public API, so they are deprecated in favor of:

    Mime::SET              -> Mime.symbols / Mime[...] / Mime::Type.lookup
    Mime::LOOKUP           -> Mime::Type.lookup
    Mime::EXTENSION_LOOKUP -> Mime.extensions / Mime::Type.lookup_by_extension / Mime[...]

Enumerating every registered extension (including synonyms) was previously only possible through `Mime::EXTENSION_LOOKUP`, so `Mime.extensions` is added as the public counterpart to `Mime.symbols` to cover that case.

[Include call options in `Cache#exist?` instrumentation payload](https://github.com/rails/rails/pull/57915)  
The `cache_exist?.active_support` notification payload omits the options passed to the call, so keys such as `:namespace`, `:version`, and `:expires_in` are missing from it.

```ruby
ActiveSupport::Notifications.subscribe("cache_exist?.active_support") do |event|
  event.payload[:namespace]
  # Before: nil   - options not passed through
  # After:  "foo" - consistent with read, write, and delete
end

Rails.cache.exist?("key", namespace: "foo")
```

The `read`, `write`, `delete`, and `fetch_hit` cache operations all include options in their instrumentation payloads. `exist?` now does too.

[Report PostgreSQL default timestamp/time precision as 6](https://github.com/rails/rails/pull/57845)  
Bare PostgreSQL `timestamp` and `time` columns now use their effective microsecond precision in Active Record type metadata, matching the database's persisted precision. Previously, Active Record parsed the formatted SQL type string to extract precision; it now reads the typmod value passed through the type map directly. When `fmod == -1` (no typmod), Active Record reports precision `6`, otherwise it uses the explicit typmod precision. This keeps column metadata and type casting aligned with PostgreSQL's effective behavior for `timestamp`, `timestamptz`, `time`, and `timetz` columns.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-06-26%7D...main@%7B2026-07-03%7D)._  
_We had [26 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260626-20260703) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
