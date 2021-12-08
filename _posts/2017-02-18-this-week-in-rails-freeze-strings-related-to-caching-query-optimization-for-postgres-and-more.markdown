---
layout: post
title: "This Week in Rails: Freeze strings related to caching, query optimization for Postgres and more!"
categories: news
author: prathamesh
published: true
date: 2017-02-18
---

Hey everyone 👋

[Prathamesh](https://twitter.com/_cha1tanya) here with the latest from the world of Rails.

## Featured

### [⚡️This week's Rails contributors ⚡️](http://contributors.rubyonrails.org/contributors/in-time-window/20170212-20170219)

This week was full of improvements and bug fixes. We have 24 awesome people contributing to Rails with 3 first-timers!

## Improved

### [Freeze fragment caching related strings](https://github.com/rails/rails/pull/27926)

This change freezes the common strings used for fragment caching reducing the string allocations every time a read/write operation is performed on the fragment cache. The patch showed proper object allocation benchmarks showing a noticeable improvement, so it was accepted.

### [Optimize query for finding primary keys of a Postgres table](https://github.com/rails/rails/pull/27961)

This change simplifies and optimizes the query used to determine the primary keys of a PostgreSQL table improving the overall setup time.

## Fixes

### [Fix generator command for namespaced Rails engines](https://github.com/rails/rails/pull/27605)

This change fixes the default generators to create proper namespaced resources for a namespaced Rails engine. For e.g. if we have a namespaced engine **_bukkits-admin_** , then

**_bin/rails g scaffold User name:string age:integer_**

will now correctly create

**_admin/app/controllers/bukkits/admin/users\_controller.rb._**

### [remove\_index method can remove expression indexes now](https://github.com/rails/rails/pull/26655)

Now, **_remove\_index_** method can also be used to remove expression indexes apart from simple column indexes.

That's it from This Week in Rails. There were many other great contributions, too numerous to list here, but feel free to [check them out](https://github.com/rails/rails/compare/master@%7B2017-02-12%7D...@%7B2017-02-19%7D)!&nbsp;

See ya next week 👣
