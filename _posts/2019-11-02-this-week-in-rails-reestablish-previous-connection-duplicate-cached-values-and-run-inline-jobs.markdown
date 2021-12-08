---
layout: post
title: "Reestablish previous connection, duplicate cached values and run inline jobs"
categories: news
author: repinel
published: true
date: 2019-11-02
---

Hello! This is [Roque](https://twitter.com/repinel) bringing the latest news from the Rails community.

### [Reestablish connection to previous database after migrating](https://github.com/rails/rails/pull/37601)

The migrate task iterates and establish a connection over each database. That resulted in the last connection being used by subsequent rake tasks. This fix will restore the previous connection before the migrate task had started.

### [Duplicate the cached value before writing to the local cache](https://github.com/rails/rails/pull/37587)

This fixed the following issue:

```
my_string = "foo"
cache.write('key', my_string)
my_string << "bar"
cache.read('key') # => "foobar"
```

### [Run inline jobs in separate threads](https://github.com/rails/rails/pull/37568)

Run inline jobs in separate threads so that thread locals (_e.g._ current attributes) are properly scoped and reset when running jobs inline.  

[17 people](https://contributors.rubyonrails.org/contributors/in-time-window/20191026-20191102) contributed to Rails since last time. Check out [the detailed list of all changes](https://github.com/rails/rails/compare/master@%7B2019-10-26%7D...@%7B2019-11-02%7D).  
Until next time.
