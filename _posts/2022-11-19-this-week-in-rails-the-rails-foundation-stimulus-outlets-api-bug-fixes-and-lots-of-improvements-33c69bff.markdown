---
layout: post
title: "The Rails Foundation, Stimulus Outlets API, bug fixes and lots of improvements!"
categories: news
author: Emmanuel Hayford
published: true
date: 2022-11-19
---

Boa noite! This is [Emmanuel](https://twitter.com/siaw23), bearer of good tidings.

[Introducing: The Rails Foundation](https://rubyonrails.org/2022/11/14/the-rails-foundation)
In case you missed it, with eight founding members, Rails has started The Rails Foundation! Together, the founding members have contributed a total sum of $1,000,000 that will aid the foundation's mission to improve the documentation, education, marketing, and events in our ecosystem. More [here](https://rubyonrails.org/2022/11/14/the-rails-foundation).

[Raise on assignment to readonly attributes
](https://github.com/rails/rails/pull/46105)Attributes that are marked as _attr\_readonly_ would previously fail silently, meaning data won't be written to the database when you tried to assign new values—with this PR, read-only attributes will raise an _ActiveRecord::ReadonlyAttributeError_ when an attempt is made to write to that read-only attribute.

[Allow unscoping of preload and eager\_load associations](https://github.com/rails/rails/pull/45147)
This PR adds the ability to unscope _preloaded_ and _eager loaded_ associations, adding to the list of valid "unscoping" values like _where_, _select_ among others.

[Add filtering of encrypted attributes in #inspect
](https://github.com/rails/rails/pull/46453)Previously, encrypted attributes could be added to an application's _filter\_parameters_ which would filter the attribute values from logs. This commit adds an additional config to enable adding encrypted attributes to records' _filter\_attributes_, which allows them to be filtered when models are inspected (such as in the console).

[Initialize encrypted attributes when using #first\_or\_create or #first\_or\_initialize](https://github.com/rails/rails/pull/46493)
This fixes a bug where one would expect that encrypted values are initialized with the values provided but instead, the encrypted values were _nil_.

[Stimulus gets an Outlets API](https://github.com/hotwired/stimulus/pull/576)
Around Hotwire, this PR received a warm welcome. I reached out to the author, [Marco Roth](https://twitter.com/marcoroth_),&nbsp; who whipped out a documentation that perfectly summarises the Outlet API:

The Outlets API lets you reference Stimulus Controller instances and their _controller element_ from within another Stimulus Controller by using CSS selectors. The use of Outlets helps with cross-controller communication and coordination as an alternative to dispatching custom events on controller elements.

Ruby on Rails saw [22 generous contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20221111-20221118) in the last 7 days.

Talk to you next week.


<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
