---
layout: post
title: "Rails Foundation Docs, Query Logs source_location, Dockerfile gets jemalloc"
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-02-09
---


Hi, it's [zzak](https://github.com/zzak). Let's explore this week's changes in the Rails codebase.

[Rails Foundation Docs](https://github.com/rails/rails/pulls?q=is%3Apr+is%3Aopen+label%3A%22rails+foundation%22)  
A team has been [formed](https://rubyonrails.org/2024/2/6/documentation-update-work-has-begun) to improve the existing Rails documentation. PRs from this project will stay open for one week for community review. Open this week:
* ActiveJob.perform_all_later
* Action Text
* Action Mailbox

More to come!

[Properly synchronize `Mysql2Adapter#active?` and `TrilogyAdapter#active?`](https://github.com/rails/rails/pull/51012)  
As well as `disconnect!` and `verify!`.  
This generally isn't a big problem as connections must not be shared between threads, but is required when running transactional tests or system tests and could lead to a SEGV.

[Implement "Rails::TestUnitReporter#prerecord"](https://github.com/rails/rails/pull/50984)  
By adding this method to Rails TestUnitReporter class, Minitest will pick it up and invoke it before invoking the test, allowing to print the test name in advance.  
This is useful to debug slow and stuck tests by turning on verbose mode. This way the stuck test name is printed before the process deadlocks.

[Fix JSON-encoding ActiveStorage::Filename](https://github.com/rails/rails/pull/50982)  
This PR fixes a bug where quotes were missing from the filename, generating invalid json.

```ruby
JSON.generate(foo: ActiveStorage::Filename.new("bar.pdf")) # => '{"foo":bar.pdf}'
```

[Support `:source_location` tag option for query log tags](https://github.com/rails/rails/pull/50969)  
This PR adds support for showing where a query is defined the Rails logs when using [Active Record Query Logs](https://api.rubyonrails.org/classes/ActiveRecord/QueryLogs.html).

```ruby
# application.rb
config.active_record.query_log_tags_enabled = true
config.active_record.query_log_tags = [ :source_location ]
```

[Setup jemalloc in default Dockerfile to optimize memory allocation](https://github.com/rails/rails/pull/50943)  
Ruby's use of `malloc` can create [memory fragmentation problems](https://www.speedshop.co/2017/12/04/malloc-doubles-ruby-memory.html), especially when using multiple threads like Puma does.  
Switching to an allocator that uses different patterns to avoid fragmentation can decrease memory usage by a substantial margin.  


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-02-02%7D...main@%7B2024-02-09%7D)._
_We had [18 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240202-20240209) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
