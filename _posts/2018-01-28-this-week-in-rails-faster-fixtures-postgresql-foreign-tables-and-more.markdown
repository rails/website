---
layout: post
title: "Faster fixtures, PostgreSQL foreign tables and more!"
categories: news
author: _cha1tanya
published: true
date: 2018-01-28
---

Hi there! This is [Prathamesh](https://twitter.com/_cha1tanya), bringing you the latest edition of This Week in Rails, covering highlights from the Rails community, as well as changes recently made to the framework. Let's dive in!

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20180122-20180126)

This week there were 22 contributors to Rails including contributions from 4 first-timers. Thanks!

### [Multi-statement query for inserting fixtures](https://github.com/rails/rails/pull/31422)

This change constructs a single query for inserting fixtures from different tables. This change reduced the time to load around 700 fixtures from 15 seconds to 8 seconds! 🏎

### [Custom handling of exceptions that are discarded](https://github.com/rails/rails/pull/30622)

This change allows a job that is discarded to be handled by a custom handler. The **_retry\_on_** already provides the ability for a custom handler and now same has been added to **_discard\_on_** handler.

### [Support for PostgreSQL foreign tables](https://github.com/rails/rails/pull/31549)

With this change, it will be possible to work with models backed by foreign tables present in external PostgreSQL servers.

That's it for this week. Many more changes were introduced to Rails than were featured here, check out the [full week of commit activity](https://github.com/rails/rails/compare/master@%7B2018-01-22%7D...@%7B2018-01-26%7D) to learn more!  
  
Until next time!
