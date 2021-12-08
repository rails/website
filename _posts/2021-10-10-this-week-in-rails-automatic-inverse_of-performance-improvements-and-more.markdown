---
layout: post
title: "Automatic inverse_of, performance improvements and more!"
categories: news
author: greg
published: true
date: 2021-10-10
---

Hi, this is [Greg](https://twitter.com/gregmolnar), bringing you the latest news about Ruby on Rails!

This week we switched our newsletter delivery platform to HEY, if you are reading this email, you already confirmed your subscription and there is no other action needed on your end.

### [Avoid instance_exec for controller callbacks](https://github.com/rails/rails/pull/43335)
This change brings some performance improvements, by avoiding to create the extra controller singleton classes, created by instance_exec, when :only or :except are passed to a callback.

### [Automatically infer inverse_of with scopes](https://github.com/rails/rails/pull/43358)
This PR changes can_find_inverse_of_automatically to allow us to automatically detect inverse_of when there is a scope on the association, but not when there is a scope on the potential inverse association.
Since this is a breaking change, it is placed behind the automatic_scope_inversing configuration flag, which is set to true for new applications via framework defaults.

### [Add ability to lazily load the schema cache on connection](https://github.com/rails/rails/pull/43372)
A new a configuration option enables lazy loading of the schema cache on the connection. If config.active_record.lazily_load_schema_cache is set to true then the schema cache will be loaded when the connection is established rather than on boot.

[31 people](https://contributors.rubyonrails.org/contributors/in-time-window/20210926-20211010) contributed to Rails since last time. All the changes can be checked [here](https://github.com/rails/rails/compare/@%7B2021-09-26%7D...main@%7B2021-10-10%7D). Until next week!

