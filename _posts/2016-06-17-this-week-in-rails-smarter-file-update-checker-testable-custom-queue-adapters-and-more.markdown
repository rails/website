---
layout: post
title: "This Week In Rails: smarter file update checker, testable custom queue adapters and more!"
categories: news
author: repinel
published: true
date: 2016-06-17
---

Hello everyone! This is [Roque](https://twitter.com/repinel) bringing latest news from the Rails community.

## Featured

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160611-20160617)

This week 23 people contributed to Rails. We also got 4 first time contributors. Welcome aboard folks and keep it going!

## Fixed

### [Fix digesting non-HTML templates when name conflicts](https://github.com/rails/rails/pull/25411)

This fixes a scenario that caused incorrect template digests for `*/*` requests that render non-HTML (_e.g._ JSON) templates. The HTML template was being used to compute the cache instead of the requested type.

### [Prevent the `FinderMethods#exists?` from raising `RangeError`](https://github.com/rails/rails/pull/25271)

It will return a boolean value instead of going 💥 when value is out range.

## Improved

### [The file update checker will boot once per process](https://github.com/rails/rails/pull/25302)

The checker will now play nice with multi-threaded web servers like Puma. Please read the [pull request](https://github.com/rails/rails/pull/25302) for more details.

### [Custom queue adapters will now work with Active Job tests](https://github.com/rails/rails/pull/25367)

If you have a custom queue adapter for Active Job, you can override the method `queue_adapter_for_test` in your tests to take advantage of the test helpers provided.

## Wrapping Up

That's it from This Week in Rails! There were many other great contributions, too numerous to list here, but feel free to [check them out](https://github.com/rails/rails/compare/master@%7B2016-06-11%7D...@%7B2016-06-17%7D)!

Until next week!

