---
layout: post
title: "This Week in Rails: 5.1.2.rc1 released and faster fixtures"
categories: news
author: kirs
published: true
date: 2017-06-24
---

Hi there! This is [Kir](http://github.com/kirs)&nbsp;from chilling Ottawa, bringing you another edition of This Week in Rails. Let's dive in.

## Featured

### [🎉 This Week's Rails contributors! 🎉](http://contributors.rubyonrails.org/contributors/in-time-window/20170617-20170623)

We had 21 awesome people who helped make Rails better this week, with one first-time contributor! Would you like to help as well? Head over to the 👉 [issues list](https://github.com/rails/rails/issues).

## New

### [🎉 Rails 4.2.9.rc2, 5.0.4 and 5.1.2rc1 have been released 🎉](https://rubyonrails.org/2017/6/20/Rails-5-1-2-rc1-has-been-released)

It's your chance to help us discover bugs in 4.2.9 and 5.1.2 release candidates. Also, Rails 4.2.9 will be the last release in 4.2 series, so it's time to upgrade if your app is still running on Rails 4.

## Perf

### [Use bulk INSERT to insert fixtures](https://github.com/rails/rails/pull/29504)

Inserting fixtures in test environment became significantly faster by using one bulk INSERT query instead of many single INSERTs.

## Fixed

### [current_page? helper now works from within a Rails Engine](https://github.com/rails/rails/pull/29503)

Due a bug related to a trailing slash, _current\_page?_&nbsp;helper always returned false while it was supposed to return true when it was called from a Rails Engine route.

### [Keep INNER JOIN when merging relations](https://github.com/rails/rails/pull/27063)

Now you can safely merge two ActiveRecord relations both having a JOIN. Previously, that would to query with LEFT OUTER JOIN instead of INNER JOIN.

That's it for this week, as always, we couldn't cover all of the changes, but feel free to check all the [commits](https://github.com/rails/rails/compare/master@%7B2017-06-17%7D...@%7B2017-06-23%7D) from this week.

Until next week! 👋👋
