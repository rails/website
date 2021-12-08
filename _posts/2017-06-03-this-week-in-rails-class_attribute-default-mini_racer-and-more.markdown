---
layout: post
title: "This Week in Rails: class_attribute default, mini_racer and more!"
categories: news
author: repinel
published: true
date: 2017-06-03
---

Hello everyone! This is [Roque](https://twitter.com/repinel) bringing you the latest news from the Rails world.

## Featured

### [This Week's Rails contributors!](http://contributors.rubyonrails.org/contributors/in-time-window/20170527-20170603)

We had 32 people who helped make Rails better this week.
Three of them contributed for the first time ever!
If you would like to help out, check the [issues list](https://github.com/rails/rails/issues).

### [Allow a default value to be declared for `class_attribute`](https://github.com/rails/rails/pull/29270)

Rails will now make it easier to set default values to class attributes like `class_attribute :timeout, default: 5`

### [Replace therubyracer with mini_racer](https://github.com/rails/rails/pull/29285)

New apps generated with JavaScript and Sprockets support will use `mini_racer` for the Ruby platform. A faster and more reliable interpreter.

## New

### [Add previous and next day of week API to Active Support](https://github.com/rails/rails/pull/26600)

The methods `prev_occurring` and `next_occurring` expect a day of the week and return the appropriate value based on the `DateTime`, e.g. `DateTime.now.prev_occurring(:monday)`.

## Fixed

### [Fix `number_to_human` round calculation](https://github.com/rails/rails/pull/26628)

This fix a regression introduced in Rails 5, where a case like `number_to_human(1_000_000, units: { unit: 'meter', thousand: 'kilometer' })` would return `"1"` instead of `"1000 kilometer"`.

### [Fix pluralization of uncountable expressions when given a locale](https://github.com/rails/rails/commit/7c45146b15e682de11251180eaa4e75ac50e07cd)

Previously, methods like `pluralize` and `singularize` would only use the English uncountable rules rather then the ones for the locale that was passed.

### [Rename primary key index from `rename_table`](https://github.com/rails/rails/pull/29248)

Formerly, `rename_table` would only rename primary key index if the column's data type was sequential. Tables with primary keys with types like UUID would still keep the old name.

## Improved

### [Allow additional options for poltergeist or capybara-webkit in System Tests](https://github.com/rails/rails/pull/29315)

If using `poltergeist` or `capybara-webkit`, `driven_by` will register it as the driver and set additional options passed via `:options` param.

Please refer to drivers documentation to learn what options can be passed.

That's it for this week, as always, we couldn't cover all of the changes, but feel free to check the [commits](https://github.com/rails/rails/compare/master@%7B2017-05-27%7D...@%7B2017-06-03%7D) if you are interested.
Until next week!
