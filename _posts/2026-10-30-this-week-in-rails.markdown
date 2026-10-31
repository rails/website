---
layout: post
title: "No tricks, just treats"
categories: news
author: Claudio Baccigalupo
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-10-30
---


Hi, it's [Claudio Baccigalupo](https://claudiob.github.io/). Don't be scared 🎃 this week's changes to the Rails codebase are all treats. Let's explore them.

[New guide to multiple databases in Active Record](https://github.com/rails/rails/pull/57747)   
As part of the Rails Foundation effort, the [refreshed guide](https://edgeguides.rubyonrails.org/active_record_multiple_databases.html) is live, tackling the three-tier production configuration that new apps get by default.

[Tuning performance for deployment guide open for review](https://github.com/rails/rails/pull/59387)   
A PR that updates the guide to performance tuning is open. Your feedback is helpful, especially if you have experience tuning Rails apps in production.

[Don't load Capybara and Selenium on boot in new applications](https://github.com/rails/rails/pull/59408)   
The generated `Gemfile` now declares `capybara` and `selenium-webdriver` with `require: false`. `ActionDispatch::SystemTestCase` already requires both when a system test is loaded, so test processes that don't run system tests boot faster.

[Don't render authenticity tokens under the :header_only CSRF strategy](https://github.com/rails/rails/pull/59370)   
`:header_only` verifies requests by their `Sec-Fetch-Site` header and never reads a token, yet forms, `button_to` and `csrf_meta_tags` were still generating one on every render. Now they render none, so a page's bytes no longer change from one request to the next.

[Process each Action Cable connection's commands in order](https://github.com/rails/rails/pull/59371)   
Commands from the same connection could previously run at the same time or out of order.

[Scope immutable_strings_by_default to string columns](https://github.com/rails/rails/pull/59351)   
The setting applied to every column whose type subclassed `ActiveModel::Type::String`, so `text` columns and PostgreSQL's `xml`, `citext`, `ltree`, `tsvector` and `macaddr` columns were inferred as `:string`, losing their type.

[Render hidden="until-found" as is](https://github.com/rails/rails/pull/59340)   
A string or symbol value of the `hidden` attribute is no longer replaced by `"hidden"`:
```ruby
tag.div(hidden: "until-found")
# Before: <div hidden="hidden"></div>
# After:  <div hidden="until-found"></div>
```

[Fix preloading has_many :through associations with source_type and conditions](https://github.com/rails/rails/pull/59448)   
There were [four](https://github.com/rails/rails/pull/59448) [PRs](https://github.com/rails/rails/pull/59446) [this](https://github.com/rails/rails/pull/59444) [week](https://github.com/rails/rails/pull/59443) fixing preloading of `:through` associations:
```ruby
Post.preload(:tags, :inactive_tags).first.inactive_tags
# => no longer includes active tags
```

[Fix left_joins and eager_load dropping an intermediate join](https://github.com/rails/rails/pull/59318)   
When the same through association was joined from different parent paths, the second path reused the join of the first, silently returning values from the wrong records.

[Exclude default_order from exists? and calculations](https://github.com/rails/rails/pull/59415)   
`exists?` and [calculations](https://github.com/rails/rails/pull/59436) such as `count` already removed explicit ordering. Now they also remove `default_order`, which avoids invalid SQL on PostgreSQL.

[Keep query block scoped optimizer hints on the subquery for MySQL](https://github.com/rails/rails/pull/59386)   
For `count` with `limit`, `offset` or `distinct`, all optimizer hints used to move to the outer query, while table-level hints like `INDEX(posts idx)` were silently ignored.

[Deprecate ActiveRecord::Validations::NumericalityValidator](https://github.com/rails/rails/pull/59305)   
Active Record now uses `ActiveModel::Validations::NumericalityValidator` directly. The old constant still works with a deprecation warning.

[Deprecate the option accessors on ColumnDefinition](https://github.com/rails/rails/pull/59299)   
Use `options` instead, for example `column.options[:limit]` instead of `column.limit`.

[Fix CurrentAttributes defaults for attribute names given as strings](https://github.com/rails/rails/pull/59347)   
```ruby
class Current < ActiveSupport::CurrentAttributes
  attribute "currency", default: "USD"
end

Current.currency
# Before: nil
# After:  "USD"
```

[Match URL-decoded query parameter names when filtering logs](https://github.com/rails/rails/pull/59314)   
A parameter such as `%70assword` is now matched by a `:password` filter in request and redirect logs.

[Add Northwest Territories to ActiveSupport::TimeZone::MAPPING](https://github.com/rails/rails/pull/59221)   
They no longer shares winter clocks with US Mountain time. Prefer `Northwest Territories` (or `America/Inuvik`) for users in that region.

[Use Markdown as the default API docs markup](https://github.com/rails/rails/pull/59339)   
Xavier Noria spent months converting RDoc to Markdown across the frameworks, including the README files of [Railties](https://github.com/rails/rails/pull/59345), [Active Support](https://github.com/rails/rails/pull/59344), [Action View](https://github.com/rails/rails/pull/59343) and [Action Pack](https://github.com/rails/rails/pull/59342).

[Decode and encode PostgreSQL integer arrays in C](https://github.com/rails/rails/pull/59399)   
Reading or writing an `integer[]` or `bigint[]` column no longer allocates one String per element.
Other performance PRs that landed this week: [cache the keyed HMAC in MessageVerifier](https://github.com/rails/rails/pull/59430), speed up [Time.zone.today](https://github.com/rails/rails/pull/59421) and [Date](https://github.com/rails/rails/pull/59437), [unroll the form builder helpers](https://github.com/rails/rails/pull/59407), call [render_in optimistically](https://github.com/rails/rails/pull/59403), [reduce allocations when building URLs](https://github.com/rails/rails/pull/59316), and make [Symbol#to_param](https://github.com/rails/rails/pull/59356) return the frozen `Symbol#name`.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-10-23%7D...main@%7B2026-10-30%7D)._
_We had [33 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20261023-20261030) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
