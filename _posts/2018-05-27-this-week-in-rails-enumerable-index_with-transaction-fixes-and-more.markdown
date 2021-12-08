---
layout: post
title: "Enumerable#index_with, transaction fixes, and more!"
categories: news
author: eugeneius
published: true
date: 2018-05-27
---

Hello everyone! This is [Eugene](https://twitter.com/eugeneius), with a roundup of the last two weeks of activity in the Rails world. Let's get started!

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20180513-20180526)

In the last two weeks, Rails saw contributions from 29 people, including 10 first-time contributors. Thank you all!

If you'd like to be included here, why not check out the list of [open issues](https://github.com/rails/rails/issues)?

### [Add `Enumerable#index_with`](https://github.com/rails/rails/pull/32523)

This new method converts an enumerable to a hash, where the keys are the enumerable's elements and the values are determined by the provided block or argument.

### [Action Mailer now eager loads the mail gem](https://github.com/rails/rails/pull/32808)

Loading the mail gem during boot avoids burdening the first request with the responsibility, and conveniently sidesteps a deadlock that the author encountered in their application.

### [Allow `Range#===` and `Range#cover?` on `Range`](https://github.com/rails/rails/pull/32938)

Active Support extends `Range#===` to match other ranges, but a change to the native Ruby implementation broke it. This patch ensures that the behaviour will work on Ruby 2.6, and also adds it to `Range#cover?` for good measure.

### [Speed up `xor_byte_strings` by 70%](https://github.com/rails/rails/pull/32931)

The benchmark included with this performance patch shows that it saves a cool 5 microseconds whenever Rails generates a CSRF token. 🐎

### [Roll back parent transaction when children fail to save](https://github.com/rails/rails/pull/32796)

If a record's associations contains valid but unsaveable data, it will now correctly fail to save and roll back its transaction.

### [Finalize transaction record state after real transaction](https://github.com/rails/rails/pull/32911)

When a record was saved multiple times in the same transaction, its previous state wasn't always immediately restored if the transaction was later rolled back.

### [Disable foreign keys during `alter_table` for SQLite3 adapter](https://github.com/rails/rails/pull/32865)

Tables that are referenced by foreign keys can now be successfully altered when using the SQLite3 adapter.

In related news, [Rails 6.0 will require a minimum SQLite version of 3.8.0](https://github.com/rails/rails/pull/32923).

As always, there were many more changes to the Rails codebase than we can cover here - if you're interested, you can check out [the full listing of commits from the last two weeks](https://github.com/rails/rails/compare/master@%7B2018-05-13%7D...@%7B2018-05-26%7D). Until next week!
