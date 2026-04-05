---
layout: post
title: "Speedup ActiveRecord::LogSubscriber#sql_color and more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-04-05
---


Hi, it’s [Vipul](https://www.saeloun.com/team/vipul/). Let’s explore this week’s
changes in the Rails codebase.

---

[Remove fast_string_to_time workaround in ActiveModel::Type::Helpers::TimeValue](https://github.com/rails/rails/pull/57126)  
Ruby 3.2.0 had a bug where `Time.new(..., in: "UTC")` could return an invalid Time object.
With the minimum supported Ruby now at 3.3.1, the runtime probe and workaround are dead code and have been removed.

[Add `prepend: true` option to `ActiveSupport::Notifications.subscribe`](https://github.com/rails/rails/pull/57115)  
A new prepend: true option on ActiveSupport::Notification.subscribe ensures a subscriber runs before all others
enabling payload mutation before any downstream handler sees it.

[ActiveSupport::Cache add a fast path for string keys](https://github.com/rails/rails/pull/57108)  
Since most cache keys are already strings, this PR short-circuits the #expanded_key normalization,
making every cache operation slightly faster.

[Speedup ActiveRecord::LogSubscriber#sql_color](https://github.com/rails/rails/pull/57105)  
SQL queries can be very long, and unanchored regexps even with linear performance may take longer than Regexp.timeout.
This PR fix anchors the regexp patterns used to determine SQL color in the log subscriber.

[Update ActiveRecord::Associations::Preloader::Association.owners_by_key to handle composite keys](https://github.com/rails/rails/pull/57103)  
`owners_by_key` was skipping nil key checks for composite keys since they are Arrays. A targeted is_a?(Array)
check is added to handle this correctly.

[Delay engine route building](https://github.com/rails/rails/pull/57094)  
Engines calling routes do directly were eagerly allocating route objects before lazy loading could kick in.
Route blocks are now deferred until after `route_set_class` is configured, so lazy loading works as intended.

[Deprecate schema_order option in PostgreSQL database configurations](https://github.com/rails/rails/pull/57080)  
`schema_order` is an old alias for `schema_search_path` that predates the current naming. Use `schema_search_path` instead.

[Deprecate the strict option in MySQL database configurations](https://github.com/rails/rails/pull/57077)  
The strict option for MySQL introduced in Rails 4.2 is now deprecated. The same behavior can be achieved directly via variables: { sql_mode: "..." }

[Fix titleize to capitalize unicode lowercase letters](https://github.com/rails/rails/pull/57071)  
`Inflector#titleize` used `[a-z]` in its regex, silently skipping Unicode lowercase letters like đ, é, ü, ñ, ć.
Replacing it with `\p{Lower}` fixes capitalization for the full Unicode lowercase category.

[Allow skipping individual SET queries in PostgreSQL and MySQL configure_connection](https://github.com/rails/rails/pull/57070)  
PostgreSQL and MySQL `configure_connection` now allows individual `SET` queries to be skipped by setting them to false in `database.yml`,
useful when connecting through a load balancer or proxy that manages session settings itself.

[Fix parallel test shutdown hang when workers die during Server#shutdown](https://github.com/rails/rails/pull/57053)  
Fixed a shutdown hang where wait_for_active_workers would wait forever for workers that had already died unexpectedly.
A new reap_dead_workers method is now called inside the loop to detect and clean up any exited workers before waiting on them.

[Combine per-validator and top-level :if/:unless/:on in validates](https://github.com/rails/rails/pull/57050)  
`:if`, `:unless`, and `:on` are now merged into arrays when specified at both the validator and top level, rather than the top-level silently overriding the per-validator option.

```
validates :title, presence: { if: :local? }, if: :global?
# Now equivalent to:
validates_presence_of :title, if: [:global?, :local?]
```

[Predefine the well-known Postgres type OIDs](https://github.com/rails/rails/pull/57013)  
Rails previously queried pg_type on every new connection to resolve type OIDs. Since built-in Postgres types have statically allocated OIDs, Rails now ships its own mapping and loads it for free on connect, deferring the query until an unknown type is actually encountered.

[Fix inverse_of on composite keys in ActiveRecord::Associations::Association#inversable?](https://github.com/rails/rails/pull/56664)  
Composite keys were failing the `read_attribute` and `_has_attribute?` checks in `inversable?` because an array was being passed where a string was expected. Each key component is now read one-by-one.

[Add AGENTS.md with Rails codebase guide for AI coding agents](https://github.com/rails/rails/pull/55991)  
A comprehensive AGENTS.md guide has been added to help AI coding agents contribute effectively to the Rails codebase.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-03-27%7D...main@%7B2026-04-03%7D)._  
_We had [16 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260327-20260403) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
