---
layout: post
title: "Rails World tickets waiting list, caching improvements and more!"
categories: news
author: greg
published: true
date: 2023-05-05
---


Hi, it's [Greg](https://greg.molnar.io), bringing you this week's changes in the Rails codebase.  

[Rails World tickets waiting list](https://ti.to/rails-world/rails-world-2023)  
Many of you asked if there is a waiting list where you can be informed when Rails World tickets go on sale, and the Rails Foundation listened. Sign up here to be alerted when we release Early Bird tickets: [https://ti.to/rails-world/rails-world-2023)](https://ti.to/rails-world/rails-world-2023))

[Use configured pk type in Action Mailbox migration](https://github.com/rails/rails/pull/48126)  
This pull request adds the missing support to Action Mailbox migration generators to handle the primary key configuration of the application.

[Support _:message_pack_ as a cache serializer format ](https://github.com/rails/rails/pull/48104)  
This commit adds support for `:message_pack` as an option for `config.active_support.cache_format_version`.
This new format can reduce cache entry sizes and improve performance but requires the [msgpack gem](https://rubygems.org/gems/msgpack).

[Improve cache performance for bare string values](https://github.com/rails/rails/pull/48122)  
A new `7.1` cache format and the aforementioned `:message_pack` cache format both got a performance optimization for bare string values(such as view fragments).

[Allow passing nil to rewhere](https://github.com/rails/rails/pull/48120)  
Active Record's `rewhere` will accept `nil` for the conditions parameter, and when calling it with `nil`, it will remove all conditions. This inlines the behavior with `reorder`.

[Update migration examples to showcase database-agnostic raw SQL execution](https://github.com/rails/rails/pull/48085)  
This pull request updates the raw SQL example in the migration code examples of the Rails Guides. 
The previous example would error out in SQLite due to SQLite not supporting adding constraints in the `ALTER TABLE` command.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-04-28%7D...main@%7B2023-05-05%7D)._  
_We had [16 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230428-20230505) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
