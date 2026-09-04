---
layout: post
title: "Ractor-ready Rails, ordered cache fetches, and more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-09-04
---


Hi, it's [Vipul](https://github.com/vipulnsward). Let's explore this week's changes in the Rails codebase.

[Agents on Rails: Claude Fable 5.1 and GLM 5.3 Flash](https://rubyonrails.org/2026/9/2/agents-on-rails-claude-fable-5-1-and-glm-5-3-flash)  
Claude Fable 5.1 matched Opus 5 at the top of the Agents on Rails leaderboard with 58 of 63 successful runs, while costing less and finishing faster. The formerly unnamed `ox-alpha` model is GLM 5.3 Flash, which completed 52 of 63 runs for $3.31.

[On Rails: Rate Limiting For Your Customers](https://rubyonrails.org/2026/9/1/on-rails-kagen-hearn-and-eddie-galindo-ascend)  
Robby Russell spoke with Eddie Galindo and Kagen Hearn from Ascend about scaling one Rails monolith as larger customers arrived, finding the limits of its data ingestion pipeline, and shipping software that moves money.

[Rails keeps moving toward Ractor support](https://github.com/rails/rails/pull/58647)  
Rails made controller configuration, [Action View settings](https://github.com/rails/rails/pull/58620), [Active Record commit callbacks](https://github.com/rails/rails/pull/58653), and [time zone configuration](https://github.com/rails/rails/pull/58642) shareable across Ractors.

Active Record's schema context also [no longer deadlocks when initializing attributes](https://github.com/rails/rails/pull/58651), while [event reporters](https://github.com/rails/rails/pull/58599) now use per-Ractor storage on non-main Ractors.

[Fix TypeCaster sometimes leaking a connection](https://github.com/rails/rails/pull/58645)  
`TypeCaster` now uses `with_connection`, so it checks the connection back into the pool immediately instead of relying on executor cleanup. This fixes a connection leak seen in `ActionController::Live` actions.

[Preserve fetch_multi key order with a local cache](https://github.com/rails/rails/pull/58639)  
`ActiveSupport::Cache::Strategy::LocalCache#fetch_multi` used to return local hits before misses, changing the order requested by the caller. It now returns keys in the original order, matching `Store#fetch_multi`.

[Configure PostgreSQL error verbosity](https://github.com/rails/rails/pull/58638)  
The PostgreSQL adapter now accepts an `error_verbosity` option in `database.yml` and applies it when each connection is configured.

```yaml
production:
  adapter: postgresql
  error_verbosity: <%= PG::PQERRORS_TERSE %>
```

[Re-enable PostgreSQL triggers when disable_referential_integrity raises](https://github.com/rails/rails/pull/58635)  
Rails now restores disabled triggers from an `ensure` block. Raising inside `disable_referential_integrity` no longer risks leaving triggers disabled after the block exits.

[Avoid a redundant join in scoped through associations](https://github.com/rails/rails/pull/58625)  
Active Record now removes duplicate joins when merging a scoped `has_many :through` association. The generated query keeps the joins it needs without adding the same table twice.

[Shuffle unordered Active Record query results in tests](https://github.com/rails/rails/pull/58548)  
A new configuration can shuffle results from most `SELECT` queries without an `ORDER BY`, making accidental order dependencies easier to catch in the test suite.

```ruby
config.active_record.shuffle_unordered_selects = true
```

[Upgrade Active Storage to Marcel 2](https://github.com/rails/rails/pull/58549)  
Active Storage now depends on Marcel 2 for broader MIME type detection and additional hardening. Some newly analyzed files may receive canonical content types where Marcel 1 returned aliases; existing blobs keep their stored content types. Check any code that compares content type strings before upgrading.

[Fix JSON 3.0 compatibility](https://github.com/rails/rails/pull/58601)  
Active Support now passes options to `JSON.parse` as keyword arguments, which is required by JSON 3.0. Rails also fixed [custom encode options in `ActiveRecord::Coders::JSON`](https://github.com/rails/rails/pull/58612) and [encrypted fixtures backed by JSON columns](https://github.com/rails/rails/pull/58606). Apps testing JSON 3.0 should no longer hit the argument errors these paths raised.

[Add timeouts to generated GitHub Actions jobs](https://github.com/rails/rails/pull/58595)  
New Rails applications now set a 15-minute timeout on each generated GitHub Actions job. Applications with longer test suites can raise or remove the limit.

[Two new guides are up for review](https://github.com/rails/rails/pull/58617)  
The much anticipated [Hotwire guide](https://github.com/rails/rails/pull/58617) and a [rewrite of the Securing Rails guide](https://github.com/rails/rails/pull/58618) are open for review. Take a look and share your feedback!

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-08-28%7D...main@%7B2026-09-04%7D)._  
_We had [25 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260828-20260904) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
