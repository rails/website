---
layout: post
title: "Better guides, better framework"
categories: news
author: Claudio Baccigalupo
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-06-05
---


Hi, it's [Claudio](https://less.info/more.slides/). Let's explore this week's changes in the Rails codebase.

[The revamped Active Job guide is live](https://github.com/rails/rails/pull/57592)  
Check out the new [Active Jobs Basics guide](https://guides.rubyonrails.org/active_job_basics.html) to learn everything about background jobs in Rails, from Solid Queue to bulk enqueueing, from testing to debugging.

[The API-only guide is ready for community review](https://github.com/rails/rails/pull/57573)  
Using Rails for API-only applications? Leave your feedback on this PR which is bound to update the [existing API-only guide](https://guides.rubyonrails.org/api_app.html).

[Update Active Storage for ImageProcessing 2.0](https://github.com/rails/rails/pull/57403)  
The new version requires adding `ruby-vips` and/or `mini_magick` gems to the Gemfile and [blocks untrusted formats](https://www.libvips.org/2022/05/28/What's-new-in-8.13.html#blocking-of-unfuzzed-loaders) by default on libvips 8.13+ (BPM, PSD and ICO among others).

[Reimplement Action Cable redis adapter with redis-client](https://github.com/rails/rails/pull/57533)  
This allows Rails to no longer depend on the much larger `redis` gem, and the subscription API in `redis-client` is much simpler.

[Add sql_notifications connection config option](https://github.com/rails/rails/pull/56899)  
Instrumentation for SQL notifications can now be disabled per connection:

```yml
    cache:
      adapter: postgresql
      database: myapp_cache
      sql_notifications: false
```

[Replace US/Eastern timezone with America/New_York](https://github.com/rails/rails/pull/57587)  
`US/Eastern` was removed as a valid PostgreSQL timezone causing errors on systems with updated PostgreSQL builds. `America/New_York` is the canonical IANA name and is universally supported.

[Reverse default_order in reverse_order instead of discarding it](https://github.com/rails/rails/pull/57539)  
On a relation ordered only by `default_order`, `reverse_order` was dropping the default order entirely:

```ruby
Model.default_order("name ASC").reverse_order.to_sql # => "... ORDER BY \"models\".\"id\" DESC" (before — order dropped)
Model.default_order("name ASC").reverse_order.to_sql # => "... ORDER BY \"models\".\"name\" DESC" (after — order reversed)
```

[Make Action Cable unsubscribe idempotent](https://github.com/rails/rails/pull/56375)  
Action Cable previously raised a RuntimeError when a client attempted to unsubscribe from a subscription that no longer existed on the server.

[Make Active Record more Ractor-safe](https://github.com/rails/rails/pull/57475)  
Changes various Active Record modules to freeze and constantize as much as possible so that they can be used in Ractorized context.

[Resolve attribute aliases in update_attribute readonly check](https://github.com/rails/rails/pull/57576)  
`update_attribute` is documented to raise an error when the attribute is marked as readonly, but the readonly check was previously not resolving attribute aliases.

[Clear Postgres warnings as they get handled](https://github.com/rails/rails/pull/57584)  
The warnings were only cleared in plain `execute`, so a series of other queries could generate warnings, report them, and leave them to be seen again by the next query.

[Clear the type column when removing a polymorphic has_one](https://github.com/rails/rails/pull/57575)  
Replacing or clearing a polymorphic has_one (`owner.thing = other` → `owner.thing = nil`) previously nullified the foreign key but left the polymorphic type column to its old value.

[Enable per-pool query log tags formatter](https://github.com/rails/rails/pull/57570)  
A `query_log_tags_format` key can now be added in `database.yml` so different databases can emit either `:legacy` or `:sqlcommenter` formatted comments.

[Fix MessagePack serialization of records with a time column](https://github.com/rails/rails/pull/57566)  
Serializing any record with a populated `time` column through `ActiveRecord::MessagePack` previously raised undefined method 'to_msgpack' error for an instance of ActiveRecord::Type::Time::Value

[Fix in_order_of dropping nil elements when filter: false](https://github.com/rails/rails/pull/57553)  
`Enumerable#in_order_of` with `filter: false` is documented to keep elements that aren't named in the series, but a stray `compact` was silently removing `nil` elements:

```ruby
[3, nil, 1, 2].in_order_of(:itself, [1, 2, 3], filter: false)
# => [1, 2, 3]        (before — nil dropped)
# => [1, 2, 3, nil]   (after  — nil preserved)
```

[Respect PostgreSQL schema_search_path in rails dbconsole](https://github.com/rails/rails/pull/55388)  
`rails dbconsole` will now respect custom search path sets rather than ignoring them.

[Skip Proc and Regexp filter_attributes when syncing to filter_parameters](https://github.com/rails/rails/pull/57580)  
`filter_attributes` (added in [#55251](https://github.com/rails/rails/pull/55251)) accepts Procs and Regexps. Stringifying them produced filters that could never match a parameter key:

```ruby
class User < ApplicationRecord
  self.filter_attributes += [:token, ->(key, value) { value.reverse! }]
end

Rails.application.config.filter_parameters # => ["user.token", "user.#<Proc:0x000000010a3c5d68 ...>"]
```

[Fix nested attributes :limit miscounting a single-record hash](https://github.com/rails/rails/pull/57560)  
`accepts_nested_attributes_for ..., limit: N` was raising a spurious `TooManyRecords` when updating a single record through a bare id-keyed attributes hash.

[Fix find returning [] for composite primary key ids passed as strings](https://github.com/rails/rails/pull/57530)  
For a composite primary key model, calling `find` with two or more ids whose components are strings wrongly returned an empty array.

```ruby
class Book < ApplicationRecord
  self.primary_key = [:author_id, :id]
end

Book.find([[1, 10], [1, 20]])         # => # integers work: [#<Book...>, #<Book...>]
Book.find([["1", "10"], ["1", "20"]]) # => # strings did not: []
```

[Parse all HTTP-date formats in If-Modified-Since](https://github.com/rails/rails/pull/57505)  
`If-Modified-Since` carries an **HTTP-date**, which [RFC 9110 §5.6.7](https://www.rfc-editor.org/rfc/rfc9110#section-5.6.7) requires to accept in three formats (IMF-fixdate, RFC 850, and asctime).
Action Dispatch only parsed the IMF-fixdate format correctly swallowing the remaining parse failures.

[Rate limiting calls cache_key on by: if the object responds to it](https://github.com/rails/rails/pull/55555)  
Changes the `to:` argument of `rate_limit` to allow any kind of object to be returned. If the object responds to `cache_key`, the rate limit will call that method when constructing the cache key.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-05-29%7D...main@%7B2026-06-05%7D)._  
_We had [28 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260529-20260605) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
