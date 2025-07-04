---
layout: post
title: "Deprecating Associations, Cleaner Backtraces, and Smarter Defaults"
categories: news
author: Emmanuel Hayford
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-07-04
---


Hi! [Emmanuel Hayford](https://x.com/siaw23) with some cool updates for you.

[Deprecated associations](https://github.com/rails/rails/pull/55285)  

You can now mark associations as deprecated using:

`has_many :posts, deprecated: true`

Active Record will report any usage of the deprecated association. Three reporting modes are supported: `:warn (default)`, `:raise`, and `:notify`. You can also enable or disable backtraces (disabled by default).

[Add locale options to PostgreSQL adapter DB create](https://github.com/rails/rails/pull/55030) . 

PostgreSQL adapter create DB now supports `locale_provider` and `locale`.


[Fix `annotate` comments to propagate to `update_all`/`delete_all`](https://github.com/rails/rails/pull/55269) . 

This PR fixes annotate comments to work with `update_all` and `delete_all`.


[Rails New: Only add browser restrictions when using importmap](https://github.com/rails/rails/pull/55263) . 

When you generate a new Rails application right now, it will block older browsers. This behavior makes sense if you are using [`importmap-rails`](https://github.com/rails/importmap-rails), but if you for example use jsbundling-rails, it does not. This PR suggests only adding this blocker when you are using importmap, and not for all Rails applications.


[Implement ActiveSupport::BacktraceCleaner#clean_locations](https://github.com/rails/rails/pull/55255)  

A new method `ActiveSupport::BacktraceCleaner#clean_locations` allows cleaning an array of `Thread::Backtrace::Location objects`:

`clean_locations = backtrace_cleaner.clean_locations(caller_locations)`

Filters and silencers still receive string representations, while the returned array retains the original `path` attributes, since `Location` objects are immutable.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-06-27%7D...main@%7B2025-07-04%7D)._
_We had [18 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250627-20250704) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
