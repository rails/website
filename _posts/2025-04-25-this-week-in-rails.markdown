---
layout: post
title: "Continuously improving the framework"
categories: news
author: Claudio Baccigalupo
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-04-25
---


Hi, it's [Claudio Baccigalupo](https://github.com/claudiob).
Let's explore this week's changes in the Rails codebase.

[Add --reset option to bin/setup](https://github.com/rails/rails/pull/54952)  
Makes it easier to zero out a database and load seeds during development.


[Add assert_in_body/assert_not_in_body](https://github.com/rails/rails/pull/54938)  
Lets test checking a response body for a piece of text without going through DOM manipulation.

[Add a load hook for ActiveRecord::DatabaseConfigurations](https://github.com/rails/rails/pull/54959)  
Offers a way to use an initializer to register a database config handler before database tasks were defined.

[Ensure all railties tests require strict_warnings](https://github.com/rails/rails/pull/54620)  
Prevents warnings from getting merged without being notified about them.

[Sort schema cache columns and indexes per table in the cache file](https://github.com/rails/rails/pull/54960)  
Completes the work to make sure the content of `db/schema_cache.yml` has a stable order where tables, columns, and indexes are sorted by name.

[Pass existing connection to #arel in #to_sql](https://github.com/rails/rails/pull/54941)  
Improves the performance of `update_all` and `delete_all` queries that include `GROUP BY` or `HAVING`.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-04-18%7D...main@%7B2025-04-25%7D)._
_We had [16 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250418-20250425) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
