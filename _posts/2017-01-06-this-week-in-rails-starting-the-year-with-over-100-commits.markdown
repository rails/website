---
layout: post
title: "This Week in Rails: Starting the year with over 100 commits"
categories: news
author: claudiob
published: true
date: 2017-01-06
---

Happy new year! How was your holiday break? Did you receive nice presents?
In case you missed it, Ruby 2.4.0 was released on Christmas day so if you haven't done it yet… `rbenv install 2.4.0` right now!   
  
The first week of 2017 has seen [more than 100 commits to rails/rails](https://github.com/rails/rails/compare/master@%7B2016-12-31%7D...@%7B2017-01-06%7D). 
Congratulations to all the [32 contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20161231-20170106), in particular to the 8 people who contributed for the first time. Keep up the good work!  
  
Here are the most relevant changes to rails master for this week.

## New

### [Allow to set custom content type for email attachments](https://github.com/rails/rails/pull/27227)

With Action Mailer it's now easy to specify the content type of your attachments. E.g.: `mail(body: "\<h1\>Hello\</h1\>", content_type: "text/html")`.

### [Added option to ActiveRecord::CounterCache methods](https://github.com/rails/rails/commit/bf77e641ce807857fcf804250c4f8ce817ae66be)

You can now ask Active Record to update specific timestamp columns when incrementing, decrementing, resetting, or updating counter caches.

### [Default Rails.env to development when missing](https://github.com/rails/rails/pull/27399)

If your app does not set `RAILS_ENV` or `RACK_ENV` then the value of `Rails.env` will fall back to `development` rather than just being an empty string.

## Improved

### [Improve Array#sum with Ruby refinements](https://github.com/rails/rails/pull/27363)

Array#sum was defined in Rails with a monkey-patch. Ruby 2.0 introduced refinements for better encapsulation. This is the first PR where they are being used in rails/rails.

### [Ensure Rails 4.2 works with Ruby 2.4](https://github.com/rails/rails/pull/27473)

Some tests and code have been fixed and backported to 4-2-stable so that running Rails 4.2 on Ruby 2.4 will not raise any error.&nbsp;

### [Change return value of `duplicable?`](https://github.com/rails/rails/pull/27293)

In Ruby 2.4, NilClass, FalseClass, TrueClass, Symbol and Numeric all support `dup`. For consistency, `duplicable?` will now return `true` for all these classes.

## Fixed

### [Serialize JSON attribute value nil as SQL NULL](https://github.com/rails/rails/pull/25670)

The way in which a `nil` JSON payload is stored in a database was inadvertently changed in Rails 5.0. This fix maps `nil` to SQL `NULL`, exactly as how it was in Rails 4.x.

### [Fix generator command for nested namespaced rails engines](https://github.com/rails/rails/pull/27550)

If the name of your Rails engine has a hyphen then this PR (fixing the path of namespaced controllers) is for you!&nbsp;

### [Update `cookies` helper on all HTTP requests](https://github.com/rails/rails/pull/27586)

This fixes a regression by which cookies were only updated on GET requests. Now we will update the helper for all requests.

## Removed

### [Remove support for MySQL](https://github.com/rails/rails/pull/27435)

MySQL 5.0 reached "end of life" more than five years ago. Rails now requires at least version 5.1.10.

### [Remove previously deprecated code](https://github.com/rails/rails/commit/e229580b4b1d4001b5a9450e0a50e0c33a779fe1)

By now, you should have already dropped any reference to Rake's `db:test:clone`, Configuration's `serve_static_files` and `static_cache_control` and ActiveRecord's `uniq`, `uniq!`, `uniq_value`, `insert_sql`, `update_sql`, `delete_sql`.

## Wrapping up

That's it from [Claudio](https://github.com/claudiob). I hope you enjoyed this issue. And now… let me go back to writing my RailsConf proposal… I only have 14 days left to [submit a good talk](http://cfp.railsconf.com/events/railsconf2017)!  
  
See you all in Phoenix at the end of April!

