---
layout: post
title: "This week in Rails: goodbye Rack::Lock, concurrent-ruby, better AC::Parameters and more"
categories: news
author: vipulnsward
published: true
date: 2015-07-17 15:25:27 -0700
---

####

Hello Everyone!

This is [Vipul](https://twitter.com/vipulnsward) from Pune, waiting to enjoy some sweet [Sheer khurma](http://www.wikiwand.com/en/Sheer_khurma), and delicious [Biryani](https://www.wikiwand.com/en/Biryani) with my friends, since Eid is just around the corner.

Hmm, Yum.

## Featured

### [This week's Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20150711-201507172200)

This week 28 people helped make Rails even more awesome than before. Big thank you to all these amazing people! If you'd like to chip in, there's always something you could [help work on](https://github.com/rails/rails/issues)!

## New Stuff

### [Remove `Rack::Lock`](https://github.com/rails/rails/pull/17102)

This is one of the many concurrency-related work that went into Rails this week.

Instead of forcing `Rack::Lock` when `eager_load` and `cache_classes` are off, this change just prevents actual race conditions.

It is achieved by means of a [(reentrant) shared-exclusive lock](https://en.wikipedia.org/wiki/Readers%E2%80%93writer_lock). This allows multiple concurrent requests but ensures any code-loading activity gets performed in isolation.

## Improved

### [Replace `ActiveSupport::Concurrency::Latch` with `Concurrent::CountDownLatch` from concurrent-ruby](https://github.com/rails/rails/pull/20866)

`ActiveSupport::Concurrency::Latch` was replaced with `Concurrent::CountDownLatch` from the [concurrent-ruby](https://github.com/ruby-concurrency/concurrent-ruby) gem.

This replaces concurrency related code cluttered in AS and offloads it to `concurrent-ruby` gem, which has many concurrency utilities with runtime-specific optimizations.

### [Deprecate force association reload by passing `true`](https://github.com/rails/rails/pull/20888)

This is to simplify the association API, as we can call reload on the association proxy or the parent object to get the same result.

So now to reload one would call `@user.posts.reload` instead of `@user.posts(true)` for collections and `@user.reload.profile` instead of `@user.profile(true)` for singular associations.

See also [this mailing list thread](https://groups.google.com/forum/#!msg/rubyonrails-core/6ZPPg1ZmjQA/ZCukF2YOzOAJ) for more background information.

## Fixed

### [Test runner now works correctly inside Engines](https://github.com/rails/rails/pull/20870)

The `bin/rails test` has now been extended to work properly instead engines, where previously we needed to do `rake test`.

### [`ActionController::Parameters` no longer inherits from `HashWithIndifferentAccess`](https://github.com/rails/rails/pull/20868)

Inheriting from `HashWithIndifferentAccess` allowed users to call any enumerable methods on `Parameters` object, resulting in a risk of losing the `permitted?` status or even getting back a pure `Hash` object instead of a `Parameters` object with proper sanitization.

This change fixes this behavior and makes sure all the methods defined on `Parameters` will return a `Parameters` object with the correct `permitted?` flag.

## That's a wrap

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-07-11%7D...@%7B2015-07-17%7D)!

Have you been thinking about writing for us, but you're scared of putting yourself out there? Don't worry, you can help our editors improve their writing with thoughtful critique and general grammar policing.

You up for that? Tell [Godfrey](mailto:godfreykfc@gmail.com) today.

