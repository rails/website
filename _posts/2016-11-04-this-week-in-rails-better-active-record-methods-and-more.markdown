---
layout: post
title: "This Week in Rails: better Active Record methods and more!"
categories: news
author: repinel
published: true
date: 2016-11-04
---

Hello everyone! This is [Roque](https://twitter.com/repinel) bringing latest news from the Rails community. Stay tuned!

## Featured

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20161029-20161104)

This week 22 people contributed to Rails. We also got 6 first time contributors. Welcome aboard folks and keep it going!

## Improved

### [Deprecate the behavior of `ActiveRecord::Dirty` in callbacks](https://github.com/rails/rails/pull/25337)

The behavior of `Dirty` methods inside of `after_(create|update|save)` callbacks will be changing in the next version of Rails. [Click here](https://github.com/rails/rails/pull/25337#issuecomment-225166796) to check out the API details.

### [Allow Active Record `slice` to take an array of methods](https://github.com/rails/rails/pull/26838)

No more having to expand an array with `*` when passing it to the `slice` method of a model. Something like `user.slice(keys)` will Just Work™.

## Fixed

### [Fix the issue with duration of time varying for DST changes](https://github.com/rails/rails/commit/8931916f4a1c1d8e70c06063ba63928c5c7eab1e)

Previously, `ActiveSupport::Duration.parse` would try to be consistent across DST boundaries, and either the duration would be shorter or longer depending on the time of year.
Now it uses an absolute reference point in UTC that is not subject to DST transitions.

### [Remove Active Record tasks from bin scripts if it is skipped](https://github.com/rails/rails/pull/26950)

`bin/setup` and `bin/update` will no longer include `db:setup` and `db:migrate` if Active Record is skipped in the application.

## Wrapping up

That's it from This Week in Rails! There were many other great contributions, too numerous to list here, but feel free to [check them out](https://github.com/rails/rails/compare/master@%7B2016-10-29%7D...@%7B2016-11-04%7D)!

Until next week!

