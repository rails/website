---
layout: post
title: "YJIT enabled by default, Active Model improvements and much more"
categories: news
author: Wojtek
published: true
date: 2023-11-10
---


Hi, it's [Wojtek](https://twitter.com/morgoth85). This week, the documentary movie about the origins of Ruby on Rails premiered. You can see it on the [Honeypot YouTube channel](https://www.youtube.com/watch?v=HDKUEXBF3B4). Now, let's explore this week's changes in the Rails codebase.

[Enable YJIT by default if running Ruby 3.3+](https://github.com/rails/rails/pull/49947)  
There was many public reports of 15-25% latency improvements for Rails apps that did enable Ruby 3.2 YJIT, and in 3.3 it's even better.
Following the [change](https://github.com/ruby/ruby/pull/8705), in Ruby 3.3 YJIT is paused instead of disabled by default, allowing us to enable it from an initializer.

[Make the output of Active Records inspect configurable.](https://github.com/rails/rails/pull/49765)  
One can use *attributes_for_inspect* method:
```ruby
Post.attributes_for_inspect = [:id, :title]
Post.first.inspect #=> "#<Post id: 1, title: "Hello, World!">"
```
With the *attributes_for_inspect* set to _:all_, all record's attributes will be listed (default for development and test environment).
One can also call *full_inspect* to get an inspection with all the attributes.

[Port type_for_attribute to Active Model](https://github.com/rails/rails/pull/49910)  
Port the _type_for_attribute_ method to Active Model. Classes that include _ActiveModel::Attributes_ will now provide this method, which behaves the same as it does for Active Record.

[Port BeforeTypeCast module to Active Model](https://github.com/rails/rails/pull/44534)  
Classes that include _ActiveModel::Attributes_ will now automatically define methods such as _*\_before\_type\_cast_, _*\_for\_database_, etc, which behave the same as they do for Active Record.
  
[In Action Mailer previews, list inline attachments separately from normal attachments](https://github.com/rails/rails/pull/49828)  
Attachments that were previously listed like "Attachments: logo.png file.pdf" will now be listed like "Attachments: file.pdf (Inline: logo.png)".

[In Action Mailer previews, show date from Date header if present](https://github.com/rails/rails/pull/49790)  
Falls back to current time when the header is not present (as it was before).

[In Action Mailer previews, only show SMTP envelope recipient when relevant](https://github.com/rails/rails/pull/48782)  
Show _SMTP-To_ if it differs from the union of _To_, _Cc_ and _Bcc_.
 
[Fix using Action Text Javascript in Sprockets](https://github.com/rails/rails/pull/49952)  
Compile ESM package that can be used directly in the browser as _actiontext.esm.js_.

[Preload Selenium driver_path before parallelizing system tests](https://github.com/rails/rails/pull/49908)  
Fixes a race condition that could cause a "Text file busy - chromedriver" error with parallel system tests.

[Fix detecting changes on Active Model for infinity](https://github.com/rails/rails/pull/49904)  
Attribute with _Float::INFINITY_ value from now is not marked as changed when reassigning it to the same value.

[Fix Active Record queries for serialized values](https://github.com/rails/rails/pull/49050)  
Fixes queries like `where(field: values)` when _field_ is a serialized attribute or a JSON column).


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-11-03%7D...main@%7B2023-11-10%7D)._  
_We had [32 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20231103-20231110) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
