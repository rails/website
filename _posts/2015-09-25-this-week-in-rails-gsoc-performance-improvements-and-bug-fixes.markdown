---
layout: post
title: "This week in Rails: GSoC, performance improvements and bug fixes!"
categories: news
author: marcelmorgan
published: true
date: 2015-09-25 17:37:03 -0700
---

Hello everyone! This is [Marcel](https://twitter.com/marcelmorgan) with help from [Andy](https://twitter.com/andatki) (welcome!) bringing news from yet another week of Rails.

## Featured

### [Google Summer of Code 2015](https://rubyonrails.org/2015/9/25/gsoc-2015-wrapping-up)

The fourth year of participation in Google Summer of Code 2015 is over with excellent work done in the areas of Asset Pipeline (performance and... source maps!), Web Console (browser extension), the Rails test suite (Regression Test Selection), development setup (evented file system monitoring) and internals refactoring (cookies). Special thanks to Google, mentors and students who made this all possible.

### [This weeks Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20150918-201509025)

46 people contributed to Rails this week, including 7 first-time contributors! If you are interested in becoming a contributor, you can have a look at the [issues](https://github.com/rails/rails/issues) list.

## New Stuff

### [Introduce Active Record `ignored_columns`](https://github.com/rails/rails/pull/21720)

A use case for this would be ignoring columns that are transient. This may happen when using online schema change tools like [lhm](https://github.com/soundcloud/lhm) or [pt-online-schema-change](https://www.percona.com/doc/percona-toolkit/2.1/pt-online-schema-change.html).

### [Foreign keys are now supported in `create_table` DSL](https://github.com/rails/rails/pull/20009)

Not only is it more convenient to pass in the `foreign_key` as an option to the `references` method of the `create_table` DSL, it generates slightly more efficient SQL.

## Improved

### [Improve the performance of Active Record `save` and friends](https://github.com/rails/rails/commit/136fc65c9b8b66e1fb56f3a17f0d1fddff9b4bd0)

By taking advantage of internal code improvements (the `MutationTracker` object), Active Record's `save` and similar methods have received a noteworthy performance improvement.

### [Change `assert_difference` to return the result of the yielded block](https://github.com/rails/rails/pull/21754)

With this we can perform new assertions on the returned value without assigning it to an outer variable or otherwise wrapping subsequent assertions inside the `assert_difference` block.

## Fixed

### [Fix arguments of `AR::Calculations#sum`](https://github.com/rails/rails/pull/21725)

The arguments and behavior of `#sum` are now consistent with the other aggregate methods (`count`, `average`, `minimum`, and `maximum`) defined in `ActiveRecord::Calculations`.

### [Fix silent failure when MySQL is not running](https://github.com/rails/rails/pull/20569)

Nothing is more frustrating than a silent failure. This fix handles an error when `rake db:structure:load` is run and MySQL is not installed. Previously there were no output.

### [Active Record: Use database precision when assigning a value to a timestamp attribute](https://github.com/rails/rails/pull/20317)

Timestamp columns can have less precision than Ruby timestamps. This affects how a fraction of a second can be stored in the database. To fix this, the precision of the column was used when assigning a value to the timestamp attribute.

### [Fix ignored usages of `unscoped` when preloading Active Record models](https://github.com/rails/rails/pull/21550)

Preloading an association that is using `unscoped` was dropping the `unscoped` part.

## Wrapping Up

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-09-19%7D...@%7B2015-09-25%7D).

Until next time!

