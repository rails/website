---
layout: post
title: "This week in Rails: new releases, exciting Rails 5 stuff and more!"
categories: news
author: imtayadeway
published: true
date: 2015-11-13 18:53:09 -0800
---

Hey everyone - [Tim](https://twitter.com/imtayadeway) here with another monster update with all the exciting Rails-related goings-on from this week.

## Featured

### [Riding Rails: Snappier Development Mode in Rails 5](https://rubyonrails.org/2015/11/11/snappier-development-mode-in-rails-5)

One of the nicest things about development mode in Rails has to be the sheer convenience of running on your latest revision on each request. This of course comes at a performance cost but is about to change: instead the filesystem will notify Rails asynchronously of any changes.

### [Rails 4.2.5 and 4.1.14 are here!](https://rubygems.org/gems/rails)

This week saw the release of both 4.2.5 and 4.1.14 versions of Rails. Go upgrade while they're still hot!

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20151107-20151113)

This week 33 fabulous people contributed to Rails. Check out the list of [issues](https://github.com/rails/rails/issues) if you'd like to see your name up there.

## New Stuff

### [New! days_in_year method added to Time](https://github.com/rails/rails/pull/22244)

Now you can can call `Time.days_in_year` and, at the time of writing it will return `365`. Call it next year and it will give you `366`. Nice!

### [String#parameterize gets a preserve_case option](https://github.com/rails/rails/pull/21897)

This change adds an option to Preserve-the-CASE of the string instead of casting-everything-to-lowercase when generating parameters.

## Improved

### [Improve support for non Active Record associations on validation](https://github.com/rails/rails/pull/22224)

Support for non-Active Record associations just got better by skipping `marked_for_destruction?` when going through validations if it's not implemented, making it easier to define virtual associations.

### [Return a sized Enumerator from Hash#transform_values](https://github.com/rails/rails/pull/21806)

You can now discover the size of a hash whose values have been transformed.

## Fixed

### [Exclude views when fetching tables on all the connection adapters](https://github.com/rails/rails/pull/21601)

This brings more consistency across the adapters where those for MySQL and SQLite would return views in addition to tables when calling `#tables`, where PostgreSQL would not. Now they all return tables, and no views.

## Wrapping Up

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-11-07%7D...@%7B2015-11-13%7D).

Until next time!
