---
layout: post
title: "This week in Rails: Rails command infrastructure and more!"
categories: news
author: marcelmorgan
published: true
date: 2015-12-07 14:27:50 +0800
---

Hello everyone!

This is [Marcel](https://twitter.com/marcelmorgan), bringing you the latest news in [Rails](https://github.com/rails/rails).

## Featured

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20151128-20151204)

This week 28 fabulous people contributed to Rails. Check out the list of [issues](https://github.com/rails/rails/issues) if you'd like to see your name up there.

## New Stuff

### [Rails Command Infrastructure](https://github.com/rails/rails/pull/22457)

The infrastructure needed to support the movement of `rake` tasks to the `rails` command is now in place. This paves the way to make it easier to learn commands for persons new to Rails.

## Improved

### [Allow use of minitest-rails gem with test runner](https://github.com/rails/rails/pull/22456)

An explicit global namespace to `Rails::TestUnitReporter` has been added to resolve a namespace conflict between minitest-rails and Rails test runner.

## Fixed

### [Initialized STI models are now casted to the default type](https://github.com/rails/rails/pull/17169)

If a database default was specified for the `type` column used in Single Table Inheritance (STI), it did not cast new instances to default type on initialize. This is now fixed.

### [Replace `ActionMailer::Base.respond_to?` with `respond_to_missing?`](https://github.com/rails/rails/pull/22482)

This simple refactor utilizes the `respond_to_missing?` hook introduced in Ruby 1.9. This prevents the usage of the method `method` from raising a `NameError`.

### [Clarify connection pool error message](https://github.com/rails/rails/pull/22449/files)

The previously error message whenever all connections in the pool were used up, did not mention that.

## Wrapping Up

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-11-28%7D...@%7B2015-12-04%7D).

Until next time!

