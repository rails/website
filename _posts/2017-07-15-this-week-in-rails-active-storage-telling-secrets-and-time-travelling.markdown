---
layout: post
title: "This Week in Rails: Active Storage, telling secrets and time travelling!"
categories: news
author: repinel
published: true
date: 2017-07-15
---

Hello everyone! This is [Roque](https://twitter.com/repinel) bringing you the latest news from the Rails world.

It's been two weeks, so let's begin!

## Featured

### [Active Storage is coming to Rails 5.2](https://twitter.com/dhh/status/882965074767474688)

A brand-new framework for managing user uploads is coming to Rails ecosystem.
The [TODO](https://github.com/rails/activestorage#todos) list is full of ideas, and it's a great opportunity to send a PR and improve the library.

### [This Week's Rails contributors!](http://contributors.rubyonrails.org/contributors/in-time-window/20170707-20170715)

We had 24 people who helped make the Rails better this week. Two of them contributed for the first time ever! If you would like to help out, check the issues list.

## New

### [`rails secrets:show` will tell secrets!](https://github.com/rails/rails/pull/29695)

The command will the decrypt encrypted secrets and display them in your console if you have the key file.

### [Protect from forgery by default](https://github.com/rails/rails/pull/29742)

You no longer need to enable the [CSRF](http://guides.rubyonrails.org/security.html#cross-site-request-forgery-csrf) protection when creating new apps. They will be more secure by default.

### [Add time helper method `freeze_time`](https://github.com/rails/rails/pull/29681)

The new helper method will `travel_to Time.now` freezing time. You can call it with a block or not.

## Fixed

### [Prevent invalid PostgreSQL UUIDs](https://github.com/rails/rails/pull/29715)

The UUID validation was allowing mismatched curly braces.
The fix requires both a leading and a trailing curly brace, or neither.

### [Fix long Action Cable channel names for PostgreSQL](https://github.com/rails/rails/pull/29297)

Action Cable will hash channel names with SHA-1 if they reach the limit of 63 bytes.

## Improved

### [Change SQLite 3 boolean serialization to use `1` and `0`](https://github.com/rails/rails/pull/29699)

This change in serialization requires a migration of stored boolean data to use `1` and `0` , instead of `'t'` and `'f'`.
You can use this change by enabling the configuration:
`ActiveRecord::ConnectionAdapters::SQLite3Adapter.represent_boolean_as_integer = true`

That's it for this week, as always, we couldn't cover all of the changes, but feel free to check the [commits](https://github.com/rails/rails/compare/master@%7B2017-07-07%7D...@%7B2017-07-15%7D) if you are interested. Until next week!
