---
layout: post
title: "Rails 5 beta 2, RailsConf 2016 registration and more!"
categories: news
author: repinel
published: true
date: 2016-02-05
---

#### 

Hello everyone! This is [Roque](https://twitter.com/repinel) bringing the latest from the Rails world. Stay tuned!

## Featured

### [Rails 5.0.0.beta2 has been released!](https://rubyonrails.org/2016/2/2/Rails-5-0-beta2)

Please give Rails 5.0 a try on your app. Spotting bugs and upgrade issues ahead helps big releases like this.

### [This week's contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160129-20160205)

This week 54 people contributed to Rails. We also got 10 first time contributors. Welcome aboard folks and keep it going!

### [RailsConf 2016 registration is open](http://railsconf.com)

All aboard! The next train is leaving to Kansas City. Don't miss it! Tickets sales ends April 3rd.

### [Rails 5 only supports PostgreSQL 9.1+](https://github.com/rails/rails/pull/23434)

Rails 5 will only support versions of PostgreSQL greater than or equal to 9.1. Older versions are no longer supported by the PostgreSQL team. You can read more on their [official page](http://www.postgresql.org/support/versioning).

## New Stuff

### [Add default Puma config and option to skip it](https://github.com/rails/rails/pull/23057)

A default config has been added for Puma. It sets the default Puma thread count to 5 to mach Active Record's default, and prevent connection timeout errors.  
Puma can now be skipped when generating new apps with the `--skip-puma` option.

### [Rails command now runs Rake tasks in Engines](https://github.com/rails/rails/pull/23169)

Just like in Rails apps, it is now possible to use the `rails` command to execute `rake` tasks in Engines.

## Fixed

### [Fix corrupt transaction state caused by before\_commit exceptions](https://github.com/rails/rails/pull/23407)

This makes Active Record aware that a database was rolled back when a `before_commit` callback raises an exception.  
Before, Active Record would think the connection was active, and fail.

## Wrapping Up

That's all for This week in Rails. As always, there are plenty of things we're not able to cover here, so take a peek at the [changes](https://github.com/rails/rails/compare/master@%7B2016-01-29%7D...@%7B2016-02-05%7D) yourself.

Until next time!

