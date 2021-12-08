---
layout: post
title: "Improvements, bug fixes and more!"
categories: news
author: gregmolnar
published: true
date: 2018-06-09
---

Hello everyone! This is [Greg](https://twitter.com/gregmolnar), with the latest news about Ruby on Rails!

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20180602-20180608)

13 awesome people contributed to Rails this past week!  
If you'd like to be included here, why not check out the list of [open issues](https://github.com/rails/rails/issues)?

### [Raise exception when column is already defined](https://github.com/rails/rails/pull/33029)

With this change, migrations will raise an exception when defining an already defined column.

### [Align Time.zone.at method signature with that of Time::at](https://github.com/rails/rails/pull/33020)

_ActiveSupport::TimeZone#at_ now accepts an optional second argument, containing (fractional) microseconds, just like Ruby's _Time::at_ does.  
  


### [Avoid allocating column names where possible](https://github.com/rails/rails/pull/33051)

When requesting columns names from database adapters, _ActiveRecord:Result_ used to dup/freeze column names. This change prefers using _fstrings,_ which cuts down on repeat allocations.

### [Parent record should not get saved with duplicate children records](https://github.com/rails/rails/pull/32952)

Before this fix a duplicated child relations validation error didn't propagate to the parent record, but now it is all fixed.

As always, there were many more changes to the Rails codebase than we can cover here - if you're interested, you can check out [the full listing of commits from this past weeks](https://github.com/rails/rails/compare/master@%7B2018-06-02%7D...@%7B2018-06-08%7D). Until next week!
