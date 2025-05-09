---
layout: post
title: "New Guides PR, Rails World Updates and more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-05-09
---

Hi, it's [Vipul!](https://www.saeloun.com/team/vipul/). Let's explore this week's changes in the Rails codebase.

**New Guides Pull Request for review**  
A new guides [Pull Request](https://github.com/rails/rails/pull/55020) is up, which updates the Rails Application Template Guide and also merges it with Rails Generators Guide.
If you are well versed in these areas, please review and submit your feedback on the PR!

[Rails World updates!](https://rubyonrails.org/2025/5/6/rails-world-2025-two-big-updates)  
Check out the latest updates on schedule, new ticket types and availability and a new [Rails at Scale](https://rubyonrails.org/world/2025/rails_at_scale) event!

[Defer ActiveJob enqueue callbacks until after commit when `enqueue_after_transaction_commit` enabled](https://github.com/rails/rails/pull/55004)  
Active Job's `around_enqueue` callbacks are deferred until after the database transaction commits, but only when the `enqueue_after_transaction_commit` option is enabled. 
This ensures that job enqueue logic, including handling Sidekiq connectivity issues, occurs only after a successful transaction commit, preventing premature job execution.

[Enable passing retryable `SqlLiteral`s to `#where`](https://github.com/rails/rails/pull/54951)  
This update ensures that when a retryable `SqlLiteral` is provided to `#where`, its retryable status is preserved. The modification adjusts the internal handling within `#build_where_clause` and WhereClause to maintain the retryable attribute of the original `SqlLiteral`.

[Use TRUE and FALSE for more SQLite queries](https://github.com/rails/rails/pull/55015)  
This change updates Active Record's SQLite adapter to represent boolean values as `TRUE` and `FALSE` instead of 1 and 0. This enhances SQL readability and aligns with standard SQL boolean literals.

[Make the executor hooks in AR::QueryCache private](https://github.com/rails/rails/pull/55007)  
`ActiveRecord::QueryCache` has been refactored to make its executor hooks private, ensuring they're not accessible or overrideable externally. Additionally, it reorganizes these hooks for improved clarity, aligning with the structure used in the connection pool.

[Rescue connection related errors in MemCacheStore#read_multi_entries](https://github.com/rails/rails/pull/55000)  
This change enhances the `MemCacheStore#read_multi_entries` method by adding error handling for connection-related issues. Previously, network interruptions during bulk reads from Memcached could cause failures; such errors are now properly rescued, improving resilience in distributed caching scenarios.

[Fix spec ERROR launcher.sauce - Cannot start safari latest](https://github.com/rails/rails/pull/55013)  
The Safari browser version used in Sauce Labs tests for Action Cable was updated, fixing issues preventing test execution with the latest Safari.

[Support selenium-webdriver 4.32.0](https://github.com/rails/rails/commit/8819ab5ba521ed93504a0797e2a5ef74081e4c0c)  
This change updates and adds support for some breaking changes on `selenium-webdriver` 4.32.0 version.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-05-02%7D...main@%7B2025-05-09%7D)._  
_We had [11 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250502-20250509) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
