---
layout: post
title: "This week in Rails: Speed improvements, database comments and more!"
categories: news
author: _cha1tanya
published: true
date: 2016-04-23
---

Hello everyone! [Prathamesh](https://twitter.com/_cha1tanya) here bringing you This Week in Rails. Let's get started.

## Featured

### [🏆 This week's Rails Contributors 🏆](http://contributors.rubyonrails.org/contributors/in-time-window/20160416-201604022)

Thank you to 32 awesome people who contributed to Rails this week, including 5 first-timers! Want to join the party? Get started with the [issues](https://github.com/rails/rails/issues) page.

### [🏇 `String#blank?` just became faster 🏇](https://github.com/rails/rails/commit/697384df36a939e565b7c08725017d49dc83fe40)

This speed optimization will improve the performance of `blank?` calls against empty strings by about 3.5x. It was [further improved](https://github.com/rails/rails/pull/24658) to about 30% faster!! BOOM 💪

## New Stuff

### [Ability to add database comments](https://github.com/rails/rails/pull/22911)

It is possible to specify comments for tables, columns, and indexes in the database itself now with this addition. It currently works for MySQL and PostgreSQL adapters.

## Improved

### [`create_join_table` works with non-integer column types](https://github.com/rails/rails/pull/24221)

Creating a join table with `create_join_table` helper used to always create the columns with integer type. But now if you want to have `uuid` columns or any other type, it's possible!

## Fixed

### [Do not attempt to return connection with open transaction to pool](https://github.com/rails/rails/pull/24610)

This fixed issues with intermittent test failures related to the Active Record connection pool trying to return connections at the wrong time.

### [Fix issues with inserting schema information on SQLite](https://github.com/rails/rails/pull/24685)

Rails recently [improved performance](https://github.com/rails/rails/commit/42dd2336b31a8d98776d039a2b9fd7f834156a78) for inserting schema information using `multi-row-insert`. But some SQLite versions do not support the `multi-row-insert` feature which resulted into errors. Now Rails will gracefully handle this situation without an error.

## Wrapping Up

That's all for This Week in Rails. There were many more improvements than we have room to cover here, so don't hesitate to jump in and [check them out yourself](https://github.com/rails/rails/compare/master@%7B2016-04-16%7D...@%7B2016-04-22%7D)!

See you next week!
