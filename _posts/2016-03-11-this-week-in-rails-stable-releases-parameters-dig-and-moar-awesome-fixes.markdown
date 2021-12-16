---
layout: post
title: "This week in Rails: stable releases, `Parameters#dig` and moar awesome fixes"
categories: news
author: huoxito
published: true
date: 2016-03-11
---

Hey there!

This is [Washington](https://twitter.com/huoxito) with the latest news from [Rails](https://github.com/rails/rails)!

## Featured

### [This week's Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160305-20160311)

Again we start pointing to the 40 people who took some time to improve the framework this week!

### [Rails 4.2.6 and 4.1.15 have been released](https://rubyonrails.org/2016/3/11/Rails-4-2-6-and-4-1-15-have-been-released)

After a round of release candidates here goes the latest stable releases. Hopefully a quite easy upgrade if you've been following the latest security patches.

## New Stuff

### [Introduced `ActionController::Parameters#dig`](https://github.com/rails/rails/commit/5cd2beb0135faf18c978507a4be272dfc1499bb8)

Similar to `Hash#dig`, this easter egg for Ruby 2.3.0 users was introduced this week and should land with Rails 5.

## Improved

### [Symmetric job payload across JSON dump/load](https://github.com/rails/rails/pull/24123)

One last piece of a non-native JSON data type, aka Ruby symbols, was normalized so that one can make successful run time checks.

### [Default rendering behavior on `respond_to` collector](https://github.com/rails/rails/pull/22854)

This is done so that actions using `respond_to` blocks go hand in hand with Rails 5 default `:no_content` response for missing templates.

### [Prevent `Marshal.load` from looping infinitely](https://github.com/rails/rails/pull/24150)

Improved compatibility for marshalled objects between Rails versions, e.g. Rails 4.0.x and 4.2.x

### [Execute `default_scope` within the scope of subclass](https://github.com/rails/rails/pull/23666)

Give a proper context to queries involving a `default_scope` triggered from a subclass of `ActiveRecord#Base.abstract_class`.

## Wrapping Up

That's all for This week in Rails. As always, there are plenty of things we're not able to cover here, so take a look at the [changes](https://github.com/rails/rails/compare/master@%7B2016-03-04%7D...@%7B2016-03-11%7D) yourself.

Until next time!
