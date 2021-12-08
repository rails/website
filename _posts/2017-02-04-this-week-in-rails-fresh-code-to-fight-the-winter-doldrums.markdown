---
layout: post
title: "This Week in Rails: Fresh code to fight the Winter doldrums"
categories: news
author: andatki
published: true
date: 2017-02-04
---

Hello! This is your host [Andy](https://twitter.com/andatki), bringing you another edition of This Week in Rails.  
  
I'm in a cold Northern climate ❄️️ and we're in the middle of Winter right now. To me, it's the best time of the year to stay inside and dive into some new code. Let's take a look at some of the latest changes made to Ruby on Rails in the past week.

## Featured

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20170128-20170203)

We had 31 contributors this week. There are lots of PRs for bug fixes which are nice to see. Many thanks to all of the contributors!

## New

### [Add warnings option to test runner](https://github.com/rails/rails/pull/27784)

This change provides an option to enable Ruby's warnings in tests.

## Improved

### [Refactor Active Record reflections](https://github.com/rails/rails/pull/27851)

This PR refactors reflections such that we can iterate over each reflection and ask the reflection object what scopes should be applied to the query we are currently building.

### [Report the attribute on ActiveRecord::SerializationTypeMismatch](https://github.com/rails/rails/pull/27773)

When a _ActiveRecord::SerializationTypeMismatch_ error occurs, we will now know which attribute caused the error.

### [Simplify query in column\_definitions() for Postgres](https://github.com/rails/rails/pull/27743)

This patch updates how column\_definitions() for Postgres is calculated. The author has a nice usage of the EXPLAIN tool, to show that the new implementation is more efficient.

## Fixes

### [Reload `through_record` that has been destroyed](https://github.com/rails/rails/commit/e09da8bf7853f8f4f1ebb5c52f9b688a32b4dfaa)

For _has\_one :through_ associations, if _through\_proxy_ is not reset, setting a new record causes the runtime error _Can't modify frozen hash_.

## Wrapping up

That's it from This Week in Rails. There were many other great contributions, too numerous to list here, but feel free to [check them out](https://github.com/rails/rails/compare/master@%7B2017-01-29%7D...@%7B2017-02-03%7D)!  
  
Catch you next week!

