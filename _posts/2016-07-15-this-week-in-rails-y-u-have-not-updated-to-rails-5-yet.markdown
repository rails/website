---
layout: post
title: "This Week in Rails: Y U have not updated to Rails 5 yet?!"
categories: news
author: chancancode
published: true
date: 2016-07-15
---

Hello from [Claudio](http://claudiob.github.io).

This week saw some small fixes applied to Rails 5. Nothing major. Nothing that should stop **you** from upgrading all your apps from Rails 4.2 to Rails 5. So get onboard! You can do it!

## Featured

### [Rails 4.2.7 and 4.1.16 have been released!](https://rubyonrails.org/2016/7/13/Rails-4-2-7-and-4-1-16-have-been-released)

Check the blog post for links to all the CHANGELOGs. As [Rails 5 was released](https://rubyonrails.org/2016/6/30/Rails-5-0-final), this is probably going to be the last release of Rails 4.1. Please take some time to upgrade your application to Rails 4.2 or Rails 5.

### [This week's Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160709-201607015)

32 people contributed to Rails this week, including 6 first-timers. Congratulations! Don't hesitate to check all the [changes merged into master](https://github.com/rails/rails/compare/master@%7B2016-07-09%7D...@%7B2016-07-15%7D) this week.&nbsp;

## New

### [Add support for limits in batch processing](https://github.com/rails/rails/commit/451437c6f57e66cc7586ec966e530493927098c7)

Active Record's batch processing methods now support `limit`, so you can write statements like `Post.limit(10_000).find_each { ​|post| … }​`.

## Fixed

### [Fix AR::to_param to maximize content](https://github.com/rails/rails/pull/23636)

The documentation states that `AR::to_param` should truncate values longer than 20 characters by words. This commit enforces this behavior, using as many characters as possible to maximize the information included in the URL.

### [AS::Duration to serialize empty values correctly](https://github.com/rails/rails/pull/25656)

`ActiveSupport::Duration::ISO8601Serializer` will not fail when asked to serialize zero-length durations such as `ActiveSupport::Duration.parse(0.minutes.iso8601)`.

### [AS::TimeZone#strptime to raise the correct error](https://github.com/rails/rails/pull/25793)

Trying to parse an invalid date such as in `strptime('1999-12-31', '%Y/%m/%d')` will now raise `ArgumentError` rather than the confusing `NoMethodError: undefined method empty?`.

### [Check `request.path_parameters` encoding when they're set in env](https://github.com/rails/rails/pull/25816)

The encoding of path parameters is now checked earlier in the dispatch process so that routes that go directly to a Rack app, or skip controller instantiation, don't have to defend themselves against non-UTF8 characters.

## Improved

### [Speed up RDoc generation](https://github.com/rails/rails/pull/25690)

Every commit to rails/master automatically updates the [Rails docs](http://edgeapi.rubyonrails.org). The RDoc generation has gotten faster by only including files that contain changes since the last generation.

## Wrappin' Up

Repeat after me: “Next week I will upgrade all my projects to Rails 5.”

💬 “Next week I will upgrade all my projects to Rails 5” 💬

I hope you do! And finally, if you happen to travel to sunny California this summer, come say hi at the [Los Angeles Ruby meetup](http://www.meetup.com/laruby/events/232604411). 🌇😎🏄

–Claudio

