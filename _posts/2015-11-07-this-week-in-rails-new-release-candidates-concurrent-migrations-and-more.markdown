---
layout: post
title: "This week in Rails: new release candidates, concurrent migrations and more!"
categories: news
author: huoxito
published: true
date: 2015-11-07 00:24:53 +0100
---

#### 

Hi there everyone o/

[Washington](https://twitter.com/huoxito) here putting together another weekly Rails issue for the most awesome community.

## Featured

### [Rails 4.2.5.rc2 and Rails 4.1.14.rc2 are out](https://rubyonrails.org/2015/11/6/Rails-4-2-5-rc2-and-4-1-14-rc2-have-been-released)

Please take a minute or two to update your project Gemfile and run the build on the RCs. Spotting regressions now means they're fixed in another RC rather than a new point release some month(s) away.

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20151031-20151106)

As of 17h15min, UTC -3, 28 contributors made their commits to Rails master. Some of those for the very first time. Welcome!

### [Make migrations concurrent safe (using advisory locks)](https://github.com/rails/rails/pull/22122)

MySQL and Postgres Active Record adapters were enhanced to avoid confusing behaviour or exceptions when running migrations on multi-instance clusters. See the [issue](https://github.com/rails/rails/issues/22092) as well for more details.

## New Stuff

### [Add enabled flag to `public_file_server` settings](https://github.com/rails/rails/pull/22173)

Good old `serve_static_files` is being deprecated as of Rails 5 in favor of `public_file_server.enabled` so we have all static asset options under the same `public_file_server` key.

## Improved

### [Deprecate exception#original\_exception in favor of exception#cause](https://github.com/rails/rails/pull/18774)

Exception wrapping implementation got a bit simpler this week by using Ruby's built in [Exception#cause](http://ruby-doc.org/core-2.2.0/Exception.html#method-i-cause), available since version 2.1.

### [Require only necessary concurrent-ruby classes](https://github.com/rails/rails/pull/22185)

Another concurrent-ruby bump and related load time improvements.

### [Don’t allow arbitrary data in `:back` urls](https://github.com/rails/rails/pull/22180)

This was reported [quite a while ago](https://github.com/rails/rails/issues/14444), but now someone stepped up to the plate and followed it through. Rails got a bit safer again, thanks to the community. ❤️

### [Allow passing an env to `config_for`](https://github.com/rails/rails/pull/22128)

Sanity checking configuration files in other environments just got easier as well.

## Wrapping Up

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-10-31%7D...@%7B2015-11-06%7D).

Until next time!

