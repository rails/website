---
layout: post
title: "This Week in Rails: DB adapters, Git, Action Cable and more!"
categories: news
author: repinel
published: true
date: 2017-01-20
---

Hello everyone! This is [Roque](https://twitter.com/repinel) bringing the latest news from the Rails community.

Remember, today is the last day to submit your RailsConf proposal. You have until 11:59 p.m. MST!

Now, let's get started!

## Featured

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20170114-20170120)

This week 33 people contributed to Rails. We also got 4 first time contributors. Welcome aboard folks and keep it going!

### [SQL Server adapter released for Rails 5](https://github.com/rails/rails/pull/27695)

The `5.0.x` version of the adapter is only for the latest `5.0` version of Rails. If you need the adapter for an older version of Rails, just install the latest version of the adapter that matches your Rails version (`3.2.x` to `4.1.x`).

### [Git repo in new Rails projects](https://github.com/rails/rails/pull/27632)

New projects will now be generated with a Git repo by default. Please use the option `--skip-git` if you choose to skip it.

### [Foreign Key Support for SQLite](https://github.com/rails/rails/pull/24743)

Adds foreign key support for SQLite `3.6.19` (or greater) in create statements.

## Improved

### [Improve the `AS::NumericWithFormat#to_s` memory allocation](https://github.com/rails/rails/pull/27736)

Thanks to some good profiling, `ActiveSupport::NumericWithFormat#to_s` should behave better and not allocate too many objects. 🔎

## Fixed

### [Add channel prefix support to Action Cable Redis adapter](https://github.com/rails/rails/pull/27425)

Without channel prefix in Redis, apps using the same Redis server could have their communication compromised. You can now set the option `channel_prefix` in your `cable.yml` file. Please check the [PR](https://github.com/rails/rails/pull/27425) for details.

### [Make all Rails commands work in engines](https://github.com/rails/rails/pull/27601)

The following commands are now working in engines: `server`, `console`, `dbconsole` and `runner`.

### [Generate migrations at custom path](https://github.com/rails/rails/pull/27674)

New database migrations will be generated at the path set by `config.paths["db/migrate"]` if the option is defined.

### [Fix `Module#parent_name` on a frozen module](https://github.com/rails/rails/pull/27713)

The method would throw a runtime error when called for a frozen module.

## Wrapping up

That's it from This Week in Rails! There were many other great contributions, too numerous to list here, but feel free to [check them out!](https://github.com/rails/rails/compare/master@%7B2017-01-14%7D...@%7B2017-01-20%7D)

Until next week!

