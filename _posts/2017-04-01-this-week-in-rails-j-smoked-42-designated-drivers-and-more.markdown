---
layout: post
title: "This Week in Rails: -j smoked, 42, designated drivers and more!"
categories: news
author: kaspth
published: true
date: 2017-04-01
---

Yo folks! Your noble editor [Kasper](https://twitter.com/kaspth) here with the latest and greatest from Rails.  
  
Check the fine print 📰

## Featured

### [Remove rails new --javascript](https://github.com/rails/rails/pull/28546)

The _--javascript_ option for new Rails apps could install any gem ending in _-rails._ From now you'll have to add jquery-rails to your Gemfile manually.

### [Properly sourced fourty\_two](https://github.com/rails/rails/pull/28598)

The new documentation now has _the answer to life the universe and everything._

## New

### [Per subclass system testing driver overrides](https://github.com/rails/rails/pull/28586)

Your system testing test case subclasses all have a designated driver. Now you can designate another driver in case the test case calls for it.

### [reverse\_merge aliased to with\_defaults](https://github.com/rails/rails/pull/28603)

One for the aesthetics department: _with\_defaults_ has emerged as an alias for_reverse\_merge_. So now_options.with\_defaults(creator: @current\_user)_makes your intent clearer.

## Fixed

### [Fixed rails-ujs.js module support](https://github.com/rails/rails/pull/28617)

Once Rails 5.1 ships proper you'll be able to require rails-ujs from your JS again.

There were many other great [pull requests](https://github.com/rails/rails/compare/master@%7B2017-03-25%7D...@%7B2017-04-01%7D) this week from [45 contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20170325-20170401), including 8 first-timers. Thank you all!

Until next week!

