---
layout: post
title: "Rails Luminary 2025, dynamic rate-limiting options, performance optimizations and more!"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-11-14
---


Happy Friday! This is [Greg](https://greg.molnar.io), bringing you the latest changes from the Rails codebase.

[The 2025 Rails Luminary nominations are open.](https://rubyonrails.org/2025/11/14/2025-rails-luminary-nominations)  
If you know of someone who has consistently gone above and beyond to contribute to the framework, triaging bugs, improving performance, adding helpful features or documentation, creating or maintaining gems, etc. please nominate them for the 2025 Rails Luminary Award by Dec 3.

[Remove explicit _--config_ from RuboCop binstub templates](https://github.com/rails/rails/pull/56154)  
By removing the explicit config flag from the RuboCop binstub templates, this
change allows RuboCop's cascading config feature to work properly, enabling
subdirectory-specific configurations.

[Enhance rate limiting to support dynamic _to:_ and _within:_ options](https://github.com/rails/rails/pull/56128)  
This pull request changes the `to` and `within` options of the rate limiter to
accept static values(as before), instance method names as symbols, and
callables(lambdas/procs) that are evaluated in the controller context.

[Optimize _String#strip_heredoc_](https://github.com/rails/rails/pull/56126)  
This pull request speeds up `String#strip_heredoc` by 1.5x to 5x when yjit is enabled. 
The new version doesn't allocate any strings to find the `minimum_indent` to be stripped. Instead uses `StringScanner#skip` per each line to count whitespace char length.

[Reset parallel test tables by deleting](https://github.com/rails/rails/pull/56097)  
With this change, on MySQL parallel test database table reset will use `DELETE` instead of `TRUNCATE`. Truncating on MySQL is very slow even on empty or nearly empty tables.
As a result of this change auto increment counters are now no longer reset between test runs on MySQL and the `SKIP_TEST_DATABASE_TRUNCATE` environment variable no longer has any effect.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-11-07%7D...main@%7B2025-11-14%7D)._  
_We had [22 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20251107-20251114) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
