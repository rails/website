---
layout: post
title: "This week in Rails: 4000 Subscribers, File Server Headers Config and More!"
categories: news
author: repinel
published: true
date: 2015-10-17 00:42:41 +0200
---

#### 

Hello everyone! This is [Roque](https://www.twitter.com/repinel) with the latest from the Rails world.

## Featured

### [Sending out to over 4000 subscribers!](http://rails-weekly.ongoodbits.com)

This Week in Rails just crossed 4000 subscribers. Thanks to all subscribers and collaborators! Stay tuned!

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20151009-20151016)

26 people contributed to Rails this week, including 5 first-time contributors! If you are interested in becoming a contributor, you can have a look at the [issues](https://github.com/rails/rails/issues) list.

## New Stuff

### [Create a config for file server headers](https://github.com/rails/rails/pull/19135)

Rails now allows any static file header to be defined using the configuration option `config.public_file_server.headers`.  
This also deprecates the former option `static_cache_control` that would only apply the header `Cache-Control`.

### [Force SSL in mails](https://github.com/rails/rails/pull/17388)

The `config.force_ssl` option will now force mails to use the protocol `https` for the `host` setup in `config.action_mailer.default_url_options`.

### [Allow multiple root routes in same scope level](https://github.com/rails/rails/pull/20940)

Lets say your application has multiple root endpoints depending on a constraint. You can now describe them using `root` entries in your `config/routes.rb` file instead of having to use `get` statements.

## Improved

### [Make Active Record increment! and decrement! concurency safe](https://github.com/rails/rails/pull/11410)

This will prevent issues when performing updates from different instances of a same record.

### [The where method will now let you know when an argument type is unsupported](https://github.com/rails/rails/pull/21944)

`where` will raise `ArgumentError` on unsupported types.

## Wrapping Up

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-10-09%7D...@%7B2015-10-16%7D).

Until next time!

