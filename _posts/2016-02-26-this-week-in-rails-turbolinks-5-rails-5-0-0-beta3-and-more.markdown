---
layout: post
title: "This week in Rails: Turbolinks 5, Rails 5.0.0.beta3 and more!"
categories: news
author: gregmolnar
published: true
date: 2016-02-26
---

#### 

Hello, this is [Greg](https://twitter.com/gregmolnar) bringing you the latest news about the [Rails](https://github.com/rails/rails) framework!

## Featured

### [This week's Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160219-20160226)

This week 51 great developer helped to move Rails forward! Want to be one of them? Look at the [issues](https://github.com/rails/rails/issues) list and make a contribution!

### [Rails 5.0.0.beta3 has been released](https://github.com/rails/rails/compare/v5.0.0.beta2...v5.0.0.beta3)

Rails 5 is getting closer to the release candidate. The new beta brings many improvements and fixes.

## New Stuff

### [Turbolinks 5 compatibility changes](https://github.com/rails/rails/pull/23836)

This commit made Rails compatible with Turbolinks 5 and master uses the beta release of Turbolinks 5 now.

### [rake test now respects TESTOPTS](https://github.com/rails/rails/commit/7a36686c115f1c6c60ac0a51bc4991c3d32b6e5d)

With this change, we can now pass options to minitest via the TESTOPTS environment variable.

## Fixed

### [Fixed primary key uniqueness issue](https://github.com/rails/rails/pull/23628)

This commit reverted some earlier changes which caused an issue with the uniqueness validation of a primary key field, when the primary key field is called something other than `id`.

### [Fixed CSRF issue with button\_to tag](https://github.com/rails/rails/pull/23752)

There was an issue with the CSRF token generated when `button_to` was called with the `delete` method, but it is all fixed now!

## Improved

### [Improved Action Cable reconnection reliability](https://github.com/rails/rails/pull/23813)

This pull request improved the Action Cable reconnections by treating `closing` state as `closed` and by calling `ActionCable.ConnectionMonitor#connected()` on the client side upon successful connection. It also introduced client side logging to make debugging easier.

## Wrapping Up

That's all for This week in Rails. As always, there are plenty of things we're not able to cover here, so take a look at the [changes](https://github.com/rails/rails/compare/master@%7B2016-02-19%7D...@%7B2016-02-26%7D) yourself.

Until next time!

