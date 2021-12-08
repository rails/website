---
layout: post
title: "This Week in Rails: yarn, webpack, BIGINT PKs and more!"
categories: news
author: chancancode
published: true
date: 2016-12-10
---

Hello everyone, this is [Godfrey](https://twitter.com/chancancode) reporting from Portland, OR. This week has been a mix bag for me – on one hand, Portland had a pretty miserable week due to [the storm](http://www.oregonlive.com/weather/index.ssf/2016/12/portland_winter_weather_decemb.html); on the other hand, a lot of exciting changes landed in Rails. Does that make things even? I guess we'll go through the changes and you can decide for yourself!

## Featured

### ["Yarn is good. Yarn works."](https://github.com/rails/rails/pull/27300)

Last week, we mentioned that [Rails 5.1 is gaining a **--yarn** &nbsp;option](https://github.com/rails/rails/pull/26836). This option is now promoted to be the default: every new Rails app will be set up to use yarn out-of-the-box. It's also worth noting that yarn packages [are now installed into the **vendor/node_modules** directory](https://github.com/rails/rails/pull/27245).

### [Basic webpack integration](https://github.com/rails/rails/pull/27288)

While we are talking about JavaScript, the asset bundling side of things is also getting some love. Rails 5.1 will gain first-class support for webpack via the **--webpack** option. This is still a pretty early spike, so definitely try it out and [help improve it](https://github.com/rails/webpacker#work-left-to-do).

### [Change default primary keys to BIGINTs](https://github.com/rails/rails/pull/26266)

[Friends don't let friends use INT as a primary key](https://twitter.com/schneems/status/731167572096253952) – your app might hit Webscale™ before you know it, resulting in much sadness when your primary key column overflows. To help put you on the right path, Rails 5.1 will default to using BIGINTs for primary key columns in MySQL and PostgreSQL.

## New

### [Introduce `ActiveRecord::NotNullViolation` error](https://github.com/rails/rails/pull/25451)

As of this pull request, if your model failed to save due to a NOT NULL constraint, Rails will raise a **NotNullViolation** error (instead of a generic **StatementInvalid** error) so you could rescue the error and handle it appropriately.

## Improved

### [Speeding up RSpec integration tests by 40%](https://github.com/rails/rails/pull/27271)

This patch fixes an issue where templates are needlessly recompiled between integration test, resulting in a significant speedup.

## Fixed

### [Idempotent `after_commit` callbacks](https://github.com/rails/rails/pull/27248)

Previously, certain race conditions could cause your **after_commit** callbacks to fire more often than expected. This patch attempts to more accurately track the work that actually happened in the database to ensure your hooks are triggered only when appropriate.

### [Allow variales named `block` in templates](https://github.com/rails/rails/pull/27303)

Have you tried using variables named **block** &nbsp;in your templates? If you did, you might have seen a pretty strange error from Rails. Not anymore! With this patch, you would be able to do that without issues.

### [Exclude singleton classes from `subclasses` and `descendants`](https://github.com/rails/rails/commit/4e73ffa9b45904492815f8f67d4695ef719e0350)

[A change in Ruby 2.3.0](https://bugs.ruby-lang.org/issues/11360)unexpectedly changed the behavior of Active Support's **Class#subclasses** and **Class#descendants** &nbsp;methods to include singleton classes. This patch restores the previous behavior and made things consistent across different versions of Ruby (again).

## Wrapping up

That's it from This Week in Rails! There were many other great contributions, so please feel free to [check them out](https://github.com/rails/rails/compare/master@%7B2016-11-19%7D...@%7B2016-11-25%7D)&nbsp;yourself!

Until next week!

