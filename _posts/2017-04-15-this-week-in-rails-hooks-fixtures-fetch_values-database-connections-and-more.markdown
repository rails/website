---
layout: post
title: "This Week in Rails: hooks, fixtures, fetch_values, database connections and more!"
categories: news
author: andatki
published: true
date: 2017-04-15
---

Hi there! This is [Andy](https://twitter.com/andatki) with another edition of This Week in Rails. This week we're covering two weeks worth of changes, so let's dive right in.

## New

### [Hooks for `action_controller_base` and `action_controller_api` ](https://github.com/rails/rails/pull/28402)

This change breaks out two Action Controller hooks, where there was one before. `action_controller_base` and `action_controller_api`. These can be used to load less code at boot time.

### [Fixture accessor with no arguments](https://github.com/rails/rails/pull/28692)

Do you need to load all the fixtures of a particular type? Calling a fixture accessor method with no arguments returns all fixtures.

### [ Implement `fetch_values` for `HashWithIndifferentAccess`](https://github.com/rails/rails/pull/28316)

Add `fetch_values` for `HashWithIndifferentAccess` in Rails, added to Ruby in 2.3.0. Support was added conditionally by using `method_defined?`.

## Fixed

### [Clear active connections after initialization](https://github.com/rails/rails/pull/28057)

If your app uses a lot of database connections, this one is worth a look. The author said that after deploying this change, they reduced their peak open database connection count by 13%.

### [Fix mistake in JS response parser](https://github.com/rails/rails/pull/28748)

This change restores the ability to accept ecmascript for parsing. The author also declares that the JS response should not modify the DOM. Take a look!

## Improved

### [Doc improvement for `before_destroy`](https://github.com/rails/rails/pull/28680)

Did you know that `before_destroy` hooks should be set \*before\* `dependent: destroy` for it to work correctly? This documents that.

### [Don't freeze input strings](https://github.com/rails/rails/pull/28729)

Check this out if you're curious about changes around frozen strings and usages of Immutable String (Matz said "All String literals are immutable (frozen) on Ruby 3").

Whew! That covers just some of the changes in the first couple of weeks of April. Many other great [pull requests](https://github.com/rails/rails/compare/master@%7B2017-04-01%7D...@%7B2017-04-14%7D) are available to browse, from [27 contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20170401-20170414) including 5 first-timers. Nice work!  

Until next week!
