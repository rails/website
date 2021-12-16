---
layout: post
title: "This Week in Rails: Ruby 2.4 on Rails 4.2"
categories: news
author: chancancode
published: true
date: 2017-02-11
---

Hello! This is [Tim](https://twitter.com/imtayadeway) , bringing you another edition of This Week in Rails.

## Featured

### [This week's Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20170204-20170211)

This week saw contributions from 26 contributors, including 4 for the first time! What a fantastic bunch!

### [Rails 4.2.8.rc1 has been released!](https://rubyonrails.org/2017/2/10/Rails-4-2-8-rc1-has-been-released)

If you're using Rails 4.2, you may want to get a head start by trying out the release candidate for the latest patch release. It's the first Rails 4 release to support Ruby 2.4, so see if you can give it a try to help us iron out any kinks!

## Improved

### [Deprecate locking of dirty records](https://github.com/rails/rails/pull/25873)

`ActiveRecord::Base#lock!` and `#with_lock` reload the record before doing the actual locking. If there were any unsaved changes, they will be discarded without any warning. When this work is completed in Rails 5.2, an exception will be raised when trying to lock a dirty object. Until then, support for this has been deprecated, so keep an eye out for warnings like these!

### [Remove support for strings in callback conditions](https://github.com/rails/rails/pull/27608)

If you've seen deprecation notices concerning strings used in `if` and `unless` conditions in callbacks, listen up! Support for these have now been officially removed. Time to update, if you haven't already!

## Fixes

### [Allow ActiveRecord::Base.as_json to accept a frozen Hash](https://github.com/rails/rails/pull/27945)

As you may know, `ActiveRecord::Base.as_json` takes an (optional) options hash. That hash is modified internally, but Rails is nice enough to clone it first so that it doesn't change the thing you passed to it. If your thing was frozen however, it would cause it to blow up! How can this be so, I hear you ask. Well, when you `clone` an object, you also clone its frozen-ness. `dup` , on the other hand, does not do this, which turned out to be the solution. Case closed!

That's it from This Week in Rails. There were many other great contributions, too numerous to list here, but feel free to [check them out](https://github.com/rails/rails/compare/master@%7B2017-02-04%7D...@%7B2017-02-11%7D)!

See you next week!
