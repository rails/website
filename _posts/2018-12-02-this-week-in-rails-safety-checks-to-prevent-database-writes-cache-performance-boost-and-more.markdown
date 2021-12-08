---
layout: post
title: "Safety checks to prevent database writes, cache performance boost and more"
categories: news
author: kirshatrov
published: true
date: 2018-12-02
---

Cheers for the first day of December! This is [Kir](https://twitter.com/kirshatrov) bringing you the latest news from the Rails world.

### [Use raw time string from DB to generate ActiveRecord#cache_version](https://github.com/rails/rails/pull/33835)

The PR skips unnecessary attribute casting when generating cache version, which gives a great performance boost for apps that rely on caching.

### [Add ability to block writes to a database](https://github.com/rails/rails/pull/34505)

A brand new _while\_preventing\_writes_ method on Active Record connection allows you to add safety checks for code that's not supposed to write to a database.

### [Bump the minimum version of PostgreSQL to 9.3](https://github.com/rails/rails/pull/34520)

PostgreSQL 9.1 and 9.2 have been declared EOL more than a year ago.

[28 people](https://contributors.rubyonrails.org/contributors/in-time-window/20181125-20181201)contributed to Rails last week. If you want to be part of that, check out the [issues list](https://github.com/rails/rails/issues).  
Until next time!
