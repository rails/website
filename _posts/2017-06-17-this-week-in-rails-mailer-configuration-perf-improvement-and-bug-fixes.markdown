---
layout: post
title: "This Week in Rails: mailer configuration, perf improvement, and bug fixes!"
categories: news
author: andatki
published: true
date: 2017-06-17
---

Hi there! This is [Andy](https://twitter.com/andatki), bringing you another edition of This Week in Rails. Let's dive in.

## Featured

### [🎉 This Week's Rails contributors! 🎉](http://contributors.rubyonrails.org/contributors/in-time-window/20170610-20170616)

We had 23 awesome people who helped make Rails better this week, with 4 first-time contributors! Would you like to help as well? Head over to the 👉 [issues list](https://github.com/rails/rails/issues).

## New

### [Allow mailers to configure their delivery job](https://github.com/rails/rails/pull/29457)

In some situations, a user may want to configure the delivery job in order to have better control over errors. This adds an option to make that possible.

## Perf

### [Improve performance of mass assignments](https://github.com/rails/rails/pull/29447)

This change makes a small improvement to the performance of initializing an ActiveModel instance. The other interesting thing I learned about was the "magic comment" `# frozen_string_literal: true`. Check the PR for details.

## Fixed

### [Don't map id to primary key in raw_write_attribute](https://github.com/rails/rails/pull/29464)

The hash provided to update\_columns is turned into an UPDATE query. Passing an id key resulted in an update to the id column, even if the model uses a different primary key. This fixes that!

## Docs

### [Docs for #delegate_missing_to](https://github.com/rails/rails/pull/29268)

A newer feature, now with documentation explaining how and when to use `delegate`, and `delegate_missing_to`.

That's it for this week, as always, we couldn't cover all of the changes, but feel free to check all the [commits](https://github.com/rails/rails/compare/master@%7B2017-06-11%7D...@%7B2017-06-16%7D) from this week.  

Until next week! 👋👋
