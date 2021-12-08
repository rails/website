---
layout: post
title: "Time column improvements and bugfixes!"
categories: news
author: gregmolnar
published: true
date: 2018-03-18
---

Hello everyone! This is [Greg](https://twitter.com/gregmolnar) bringing you the latest news from the Rails world.

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20180310-20180317)

15 people contributed to Rails this week! If you'd like to join them, why not check out the list of [open issues](https://github.com/rails/rails/issues)?

### [Time column improvements](https://github.com/rails/rails/pull/32220)

This commit applies precision when assigning values to time columns, fixes issues with time columns not being normalised on SQLite and ensures that the date component from a time is stripped for MySQL and PostgreSQL.

### [RedisCacheStore configuration fix](https://github.com/rails/rails/pull/32233)

When RedisCacheStore is initialised it&nbsp; should take a redis instance but it didn't before this patch.

### [Fix multiline expression indexes for postgresql](https://github.com/rails/rails/pull/31621)

This commit fixes an issue with Active Record's PostgreSQL adapter when an index is defined by an expression.

That's it for this week. Many more changes were introduced to Rails than were featured here, check out the [full week of commit activity](https://github.com/rails/rails/compare/master@%7B2018-03-10%7D...@%7B2018-03-17%7D) to learn more!  
  
Until next time!
