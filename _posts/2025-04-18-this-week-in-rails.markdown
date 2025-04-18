---
layout: post
title: "Improved leap year counting performance and more!"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-04-18
---


Hi, it's [Greg](greg.molnar.io). Let's explore this week's changes in the Rails codebase.

[Action Cable: Allow setting _nil_ as subscription connection identifier for Redis](https://github.com/rails/rails/pull/54931)
If Google Cloud Memorystore or another platform that blocks the command `CLIENT SETNAME` in Redis, previously you needed to overwrite the Redis connection factory. With this change, you can set the `id` of the connection to `nil` in the configuration.

[Improve leap years counting performance in _distance_of_time_in_words_](https://github.com/rails/rails/pull/54923)
Before this change, the `distance_of_time_in_words` method could've lead to a denial of service if the given `from_time` and `to_time` arguments are far apart. This pull request replaced the concerning code with a constant calculation.


[Allow to configure maximum cache key sizes](https://github.com/rails/rails/pull/54915)
This pull request adds the possibility to configure the maximum size for cache
keys. When the key exceeds the configured limit (250 bytes by default), it will be truncated and the digest of the rest of the key appended to it.
Note that previously `ActiveSupport::Cache::RedisCacheStore` allowed up to 1kb cache keys before truncation, which is now reduced to 250 bytes.
This is how you can set it:
```ruby
config.cache_store = :redis_cache_store, { max_key_size: 64 }
```

[Use `TRUE` and `FALSE` for booleans in SQLite](https://github.com/rails/rails/pull/54911)
SQLite 3.23.0 added support for TRUE and FALSE as aliases for 1/0 (similar to MySQL). [Another pull request](https://github.com/rails/rails/pull/54907) bumped the minimum required SQLite version in Active Record to 3.23.0, and this one updates the boolean query generation for SQLite to use TRUE and FALSE.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-04-11%7D...main@%7B2025-04-18%7D)._
_We had [12 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250411-20250418) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
