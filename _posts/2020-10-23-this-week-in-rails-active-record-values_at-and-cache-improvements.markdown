---
layout: post
title: "Active Record values_at and cache improvements"
categories: news
author: morgoth85
published: true
date: 2020-10-23
---

Hi, it's&nbsp;[Wojtek](https://twitter.com/morgoth85)&nbsp;bringing you the latest changes summary from Ruby on Rails codebase.

### [Add values_at method to Active Record](https://github.com/rails/rails/pull/36481)

Simplifies retrieving values of specific attributes on Active Record model instance, ie _person.values\_at(:name, :age)._

### [Use environment variable MEMCACHE_SERVERS by default](https://github.com/rails/rails/pull/40420)

When no specific configuration is provided, _MEMCACHE\_SERVERS_ environment variable will be checked first before falling back to localhost _127.0.0.1:11211_ address in _ActiveSupport::Cache::MemCacheStore_.

### [Add store name to cache instrumentation](https://github.com/rails/rails/pull/40425)

When subscribing to a "cache" instrumentation events, additional parameter with store name is provided to ease recognizing the context.

[12 people](https://contributors.rubyonrails.org/contributors/in-time-window/20201018-20201023) contributed to Rails since the last week. Check out [the detailed list of all changes](https://github.com/rails/rails/compare/@%7B2020-10-18%7D...master@%7B2020-10-23%7D). Until next week!
