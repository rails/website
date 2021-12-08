---
layout: post
title: "This week in Rails: Performance, Test Helper Changes, Mailer Preview Improvements and More!"
categories: news
author: toddbealmear
published: true
date: 2015-10-09 23:46:57 +0200
---

#### 

_tap tap_

Is this thing on?

Hey, everyone! Welcome to the latest edition of This Week in Rails - your one stop shop for all the goings-on in the [Rails](https://github.com/rails/rails) universe. My name is [Todd](https://www.twitter.com/toddbealmear) and I'll be your guide. Let's get this party started!

## Featured

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20151002-20151009)

We had 41 extraordinary people commit to Rails this past week, including 15 (!) newcomers. Wanna see your name on this list? Check out the list of [issues](https://github.com/rails/rails/issues).

## New Stuff

### [Add Equality Comparison for AttributeSet](https://github.com/rails/rails/commit/9e25e0e1735f2ccca69679243aa8cf0885104164)

Exposes an equality comparison method (`==`) for comparing `ActiveRecord::AttributeSet` objects to each other.

## Improved

### [Persist Format in Mailer Previews](https://github.com/rails/rails/pull/20983)

Have you ever changed the format for a mailer preview, made a code change, and reloaded the preview only to have the desired format change back to the default? How annoying! This change utilizes JavaScript's `history.pushState` to persist your desired format across refreshes. Nifty!

### [Performance Improvement for Active Record preload](https://github.com/rails/rails/pull/21033)

This patch conditionally skips an expensive method call unless it's explicitly required when calling `preload` on an `ActiveRecord::Relation`. The net benefit is an overall reduction in allocated objects and ~40% increase in speed.

### [Support Arrays in Active Job's assert\_enqueued\_jobs](https://github.com/rails/rails/pull/21852)

This brings Active Job's `assert_enqueued_jobs` into parity with `assert_performed_jobs`. Specifically, the `:only` option now accepts `Array`s.

## Fixed

### [Fix Mounted Engine Route Regression](https://github.com/rails/rails/pull/21804)

A regression in 4.2.3 would cause the `relative_url_root` and `script_name` to each be included in routes for mounted Engines (the expected behavior is for one, not both to be used). This patch resolves that issue on master and 4-2-stable.

### [Fix Test Helper Casting for Active Job](https://github.com/rails/rails/pull/21854)

Fixes an issue where the `at:` argument wouldn't be cast properly for `assert_enqueued_with` and `assert_performed_with`, causing tests to fail.

## Removed

### [Remove pk\_and\_sequence\_for for MySQL Adapters](https://github.com/rails/rails/pull/21686)

`pk_and_sequence_for` is not used by MySQL adapters and is being removed. There won't be a deprecation cycle for this change, so note that your implementation may break if you're overriding this method anywhere.

## Wrapping Up

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-10-02%7D...@%7B2015-10-09%7D).

Until next time!

