---
layout: post
title: "This Week in Rails: New APIs, bug fixes, #Rio2016 🇧🇷"
categories: news
author: chancancode
published: true
date: 2016-08-05
---

Hello! This is [Andy](https://twitter.com/andatki) bringing you another week's worth of highlights from Rails. Today also marks the official start of the #Rio2016 Olympic Games 🇧🇷 . [New events](http://bleacherreport.com/articles/1294490-2016-olympics-golf-rugby-and-kitesurfing-events-debuting-in-rio)&nbsp;this time around include golf, sevens rugby and kitesurfing, so check those out!

## Featured

### [Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160729-20160805)

This week we'd like to thank 18 contributors to Rails and extend a welcome to this week's only [first-time contributor](http://contributors.rubyonrails.org/contributors/kyatul/commits)!

### [New exception handling APIs for ActiveJob](https://github.com/rails/rails/pull/25991)

New APIs _retry\_on_ and _discard\_on_ have been added to ActiveJob. These provide hooks for a job class to perform some additional functionality when exceptions occur. The PR for this feature has some nice discussion, check it out!

### [New ActiveRecord transaction error classes](https://github.com/rails/rails/pull/25107)

ActiveRecord can now distinguish between serialization failures and deadlocks. A more specific error in the case of deadlocks is now returned where supported (currently only PostgreSQL). Check the PR for an analysis of other database adapters and the latest code as the class names may have changed.

## Fixed

### [Activesupport::Duration inconsistencies around daylight saving time](https://github.com/rails/rails/commit/0e762ecdc3026d0c2191e42fbca8021da9ec34cc)

Since [this commit from December](https://github.com/rails/rails/commit/434df0016e228a7d51f1ad0c3d1f89faeffbed9a), "week" durations are no longer converted to days. This means we need to add _:weeks_ to the parts that ActiveSupport::TimeWithZone will consider being of variable duration to take account of DST transitions.

## Improved

### [YAML Parameters backwards compatibility](https://github.com/rails/rails/commit/31448f2b7fa6f3920485229e5710d9fcf87f190d)

This change provides backwards compatibility for Rails 4.2 based on YAML serialization changes made in Rails 5.

## Wrapping Up 

That's it from This Week in Rails! There were many other great contributions and investigations too numerous to list here, but feel free to [check them out](https://github.com/rails/rails/compare/master@%7B2016-07-29%7D...@%7B2016-08-05%7D)!

Until next week!

