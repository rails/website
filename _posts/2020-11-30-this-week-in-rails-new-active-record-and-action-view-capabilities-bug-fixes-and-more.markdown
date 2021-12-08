---
layout: post
title: "New Active Record and Action View capabilities, bug fixes and more!"
categories: news
author: andyatkinson
published: true
date: 2020-11-30
---

Hello! [Andy](https://github.com/andyatkinson) here, highlighting some of the contributions to Ruby on Rails over the last week. Let's dive in!

### [Add where.associated to check association presence](https://github.com/rails/rails/pull/40696)

The Changelog covers how to use _where.associated_ to check for the presence of an association. This also mirrors _where.missing_.

### [Include stylesheets, JS and ERB in stats](https://github.com/rails/rails/pull/40597)

With this change, stats from the _app/views_ and _app/assets/stylesheets_ directories are now included with _rails stats_.

### [Add support for eager loading all rich text associations](https://github.com/rails/rails/pull/39397)

Add the _with\_all\_rich\_text_ method to eager load all rich text associations on a model at once.

### [Bugfix: Preserve application time zone with travel_to](https://github.com/rails/rails/pull/40694)

When parsing a time value as a string with _travel\_to_, preserve the application's time zone.

### [Transform Hash into HTML attributes for ERB](https://github.com/rails/rails/pull/40657)

This change adds a new method to create HTML attributes from a Ruby Hash. Check the Changelog for an example.

We're thankful for the contributions from [21 people](https://contributors.rubyonrails.org/contributors/in-time-window/20201121-20201128) to Rails over the last week. Have a look at the [open issues](https://github.com/rails/rails/issues) and become a contributor. Until next time!
