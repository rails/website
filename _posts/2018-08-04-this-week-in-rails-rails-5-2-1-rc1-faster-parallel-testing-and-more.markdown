---
layout: post
title: "Rails 5.2.1.rc1, faster parallel testing and more"
categories: news
author: repinel
published: true
date: 2018-08-04
---

Hello everyone! This is [Roque](https://twitter.com/repinel), with the latest news about Ruby on Rails!

### [Help test Rails 5.2.1.rc1](https://rubyonrails.org/2018/7/30/Rails-5-2-1-rc1-has-been-released)

Help us test this release candidate to have a solid and stable `5.2.1`.

### [Faster parallel testing](https://github.com/rails/rails/pull/33479)

Instead of running database migrations for each set of tests, Rails will load the schema to improve performance.

### [Raises exception when `respond_to` is called multiple times](https://github.com/rails/rails/pull/33446)

An exception will be raised when `respond_to` is called multiple times in an incompatible way. For example, when the `Content-Type` values do not match.

### [Set a default `Content-Type` for the method head](https://github.com/rails/rails/pull/28937)

The method `head` will have `Content-Type` as `text/html` when one is not provided.

### [Fix the IP address logged by Rails](https://github.com/rails/rails/pull/33489)

It will now log the remote IP address of clients behind a proxy instead of the IP of the proxy itself.

[23 people](https://contributors.rubyonrails.org/contributors/in-time-window/20180729-20180804) contributed to Rails this week. You can see all the changes [here](https://github.com/rails/rails/compare/master@%7B2018-07-29%7D...@%7B2018-08-04%7D). There might be some [open issues](https://github.com/rails/rails/issues) you can try tackling?

Stay tuned!
