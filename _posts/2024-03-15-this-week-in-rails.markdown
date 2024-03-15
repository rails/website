---
layout: post
title: "Active Record Basics Guide Refresh, Encrypted Attributes Re-Optimization, and more..."
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-03-15
---


Hi, it's [zzak](https://github.com/zzak). Let's explore this week's changes in the Rails codebase.

The [Rails World CFP](https://sessionize.com/rails-world/) will close in just one week on March 21.  
Submit your talk in time!

[Active Record Basics Guide](https://github.com/rails/rails/pull/51226)  
This PR refreshes the guide covering the basics of Active Record.

[Do not try to alias on key update when raw SQL is supplied](https://github.com/rails/rails/pull/51325)  
A bug was found when updating duplicates with raw SQL.

[Memoize "key_provider" from "key" or deterministic "key_provider" if any](https://github.com/rails/rails/pull/51324)  
Previously, this memoization was removed which lead to a performance hit for encrypted attributes.

[Updating Astana with a Western Kazakhstan timezone](https://github.com/rails/rails/pull/51317)  
On March 1, 2024, Kazakhstan (all parts) switched to a single time zone UTC+5.  
Using the latest [tzinfo-data](https://github.com/tzinfo/tzinfo-data/releases/tag/v1.2024.1) that updated the Kazakhstan timezones, ActiveSupport still showed the incorrect offset because it was pointing to the `Asia/Dhaka` Bangladesh timezone, which will not get the same TZ offset change.

[Preserve encoding on "truncate_bytes"](https://github.com/rails/rails/pull/51313)  
This PR addressed an issue where `String#truncate_bytes` can return a string with a different encoding than the one being truncated.

[Support custom blob key in ActiveStorage::Blob.compose](https://github.com/rails/rails/pull/51299)  
Since Rails 6.1, Active Storage has allowed to provide a custom `key` when attaching a new file.  
This PR adds support when using the `compose` class method to customize the name of the underlying service object.

[Fix MySQL adapter for inserts with aliases](https://github.com/rails/rails/pull/51286)  
This pull request addresses errors that occur when using MySQL 8.0.18 or lower version of MySQL 8.0.

[Railties configure sanitizer vendor in 7.1 defaults more robustly](https://github.com/rails/rails/pull/51267)  
In order to avoid an issue where Rails::HTML::Sanitizer is not yet loaded, which resulted in the sanitizer vendor remaining as `Rails::HTML4` and not be set to `Rails::HTML5` as intended in Rails 7.1.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-03-08%7D...main@%7B2024-03-15%7D)._
_We had [20 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240308-20240315) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
