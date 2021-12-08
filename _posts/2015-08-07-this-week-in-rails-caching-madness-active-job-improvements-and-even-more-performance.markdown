---
layout: post
title: "This week in Rails: caching madness, Active Job improvements, and even more performance!"
categories: news
author: toddbealmear
published: true
date: 2015-08-07 14:42:05 -0700
---

What's up, gang? [Todd](https://twitter.com/toddbealmear) here with another edition of This Week in Rails. It was a bit of a quiet week in [Railsland](https://github.com/rails/rails), but I think we've got some quality contributions here. Read on for the deets!

## Featured

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20150801-201508072100)

We had 39 awesome contributors to the Rails codebase this week. Check out the active [issues](https://github.com/rails/rails/issues) over on GitHub if you'd like to see your name here.

## New Stuff

### [Add #cache\_key to ActiveRecord::Relation](https://github.com/rails/rails/pull/20884)

This addition bakes a strategy for generating collection cache keys directly into `ActiveRecord::Relation`. Using `#cache_key`, it's now possible to automagically generate a unique key on relations for use with Rails' fragment cache.

### [Development Server Caching Toggle](https://github.com/rails/rails/pull/20961)

Per a [request from DHH](https://github.com/rails/rails/issues/18875), this change adds the ability to enable or disable caching in a development environment. There are two ways to toggle it - on server start with `--[no-]dev-caching` or with the `dev:cache` rake task.

## Improved

### [Active Job and Locales](https://github.com/rails/rails/pull/20800)

Active Jobs queued with `#perform_later` previously wouldn't honor the context's locale. This patch rectifies that by storing it on the job directly.

### [Even More Performance Improvements!](https://github.com/rails/rails/pull/21100)

By using `#start_with?` instead of matching on a regex, 765.5 ms have been shaved off of the total aggregate request time per 1000 requests. In conjunction with other performance work recently completed, this knocks a whopping 1.5 _seconds_ off over the course of 1000 requests.

## That's a wrap

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-08-01%7D...@%7B2015-08-07%7D)!

Have you been thinking about writing for us, but you're scared of putting yourself out there? Don't worry, you can help our editors improve their writing with thoughtful critique and general grammar policing.

You up for that? Tell [Godfrey](mailto:godfreykfc@gmail.com) today.

