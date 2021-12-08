---
layout: post
title: "Parallel tests on Windows, query cache with multiple databases and more!"
categories: news
author: GregMolnar
published: true
date: 2018-11-25
---

Hello fellow Rubyists. This is [Greg](https://twitter.com/GregMolnar) bringing you the latest updates from Rails.

### [Fix parallel tests on Windows](https://github.com/rails/rails/pull/34410)

This pull request fixes an issue with running tests in parallel on Windows.

### [Allow using queue prefix with a default queue name](https://github.com/rails/rails/pull/34376)

In Active Job, now if you define a _queue\_name\_prefix_ it will be applied to the queue name set by _default\_queue\_name_ as well.



### [Fix query cache for multiple connections](https://github.com/rails/rails/pull/34491)

Active Records query cache now supports multiple database connections.

[30 people](https://contributors.rubyonrails.org/contributors/in-time-window/20181116-20181125)contributed to Rails last week. If you want to be part of that, check out the [issues list](https://github.com/rails/rails/issues).
Until next time.
