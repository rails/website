---
layout: post
title: "This Week in Rails: expiring counters, flush db connections, connection fork safety and more!"
categories: news
author: _cha1tanya
published: true
date: 2017-11-26
---

Hi! [Prathamesh](https://twitter.com/_cha1tanya) here! Let's see what we have in store today from the Rails world.

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20171119-20171126)

This week we had 25 contributors. 8 of them were first time contributors!!!! 🎉

### [Support expiring counters for Memcached Store](https://github.com/rails/rails/commit/b22ee64b5b30c6d5039c292235e10b24b1057f6d)

This change adds supports for passing **expires\_in** options to the **#increment** and **#decrement** methods of the Memcached&nbsp; store.

### [Flush idle database connections automatically](https://github.com/rails/rails/pull/31221)

A new configuration to flush the idle database connections after a specified period. Defaults to 300 seconds. This change will ensure that you don't have idle database connections hanging around in your connection pool.

### [Improve Active Record connection fork safety](https://github.com/rails/rails/pull/31173)

This change ensures that forked children don't send quit/shutdown/goodbye messages to the server on connections that belonged to their parent. It will prevent the [connection leakage](https://github.com/rails/rails/pull/31173)that might happen when connections are not closed when workers are forked from parent process.

### [Generate ids by default for form_with helper](https://github.com/rails/rails/commit/d3893ec38ec61282c2598b01a298124356d6b35a)

When **form\_with** was introduced the auto generation of _ids_ was disabled. Labels don't play well in such cases when the inputs don't have ids and it also made it harder to test the forms. This change enables the auto-generation of ids by default and allows to disable it using a config.

### [Pass informative arguments to all calls of ActiveRecord::RecordNotFound error](https://github.com/rails/rails/pull/31184)

 **ActiveRecord::RecordNotFoundError** accepts arguments such as **primary\_key,**  **model\_name** and the arguments besides the error message. This change makes all the calls to this error uniform by passing these arguments wherever they were missing.

### [Make secure_compare method not leak length information](https://github.com/rails/rails/pull/24510/files)

This change makes sure that even in case of variable length strings, the **ActiveSupport::SecurityUtils.secure\_compare** doesn't leak the length information.

That's all we've got for this week, but do check out the [full list of changes](https://github.com/rails/rails/compare/master@%7B2017-11-19%7D...@%7B2017-11-26%7D) yourself. Over and out! See you next week ✌️
