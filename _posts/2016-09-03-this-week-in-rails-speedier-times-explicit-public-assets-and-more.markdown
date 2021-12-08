---
layout: post
title: "This Week in Rails: Speedier Times, Explicit Public Assets and more!"
categories: news
author: imtayadeway
published: true
date: 2016-09-03
---

Oh, hello there!

This is [Tim](https://twitter.com/imtayadeway) here bringing you your latest installment of This Week in Rails. We had another corker this week chock full of great updates - read on for the full details!

## Featured

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160827-20160902)

This week saw 99 commits from 27 fantabulous people contributed to Rails, including an amazing 5 first-timers! If you'd like to see your name up there next week, why not take a gander at the [issues board](https://github.com/rails/rails/issues), or you may even consider the next item for inspiration....

### [Documentation Galore](https://github.com/rails/rails/pulls?q=is%3Apr+is%3Amerged+base%3Amaster+merged%3A%222016-08-27+..+2016-09-02%22+sort%3Acreated-desc+label%3Adocs)

This week saw a whopping 11 documentation PRs successfully merged. Improvements to the documentation are not only gratefully received, but are a great way to start getting involved.

## Improved

### [Make public asset use explicit](https://github.com/rails/rails/pull/26226)

When calling `asset_path` with an invalid file name, this method would simply pass the string that you gave it back to you. This revision adds a configurable flag called `unknown_asset_fallback` which when set to `false` will raise an error if the asset is not found. Setting it to `true` will preserve the current behavior, but will indicate that it is being deprecated.

### [Don't unnecessarily load a belongs_to when saving](https://github.com/rails/rails/pull/23498)

This change prevents an already-loaded model from being reloaded if its id gets assigned to another model in a `belongs_to` association and then saved.

## Fixed

### [Fix performance regression in TimeWithZone#to_time](https://github.com/rails/rails/pull/25880)

Up until Rails 4.0.0.beta1, `TimeWithZone#to_time` could return a cached instance attribute. Since that release it has been coercing the value to a `Time` on each call. This revision reverts the old behavior, which, according to the author's benchmarks, is over 5 times faster.

### [Allow send_file to declare a charset](https://github.com/rails/rails/pull/26317)

Previously, calling `send_file` with `type: "text/calendar; charset=utf-8"` , would result in the charset's being deleted - a bug that was fixed in this PR.

## Wrapping Up

Although I enjoyed reviewing all the commits from the last week, there were as usual too many to mention exhaustively. But do check them out yourself [here](https://github.com/rails/rails/compare/master@%7B2016-08-27%7D...@%7B2016-09-02%7D)!

Until next week!
