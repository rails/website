---
layout: post
title: "This week in Rails: Security releases and getting closer to Rails 5 RC"
categories: news
author: _cha1tanya
published: true
date: 2016-01-29 12:15:13 -0800
---

This is [Prathamesh](https://twitter.com/_cha1tanya) bringing the latest news from this eventful week of security releases and getting closer to Rails 5 RC.

## Featured

### [Security releases!](https://rubyonrails.org/2016/1/25/Rails-5-0-0-beta1-1-4-2-5-1-4-1-14-1-3-2-22-1-and-rails-html-sanitizer-1-0-3-have-been-released)

New Rails versions are released with many important security fixes. If you have not done already, upgrade as soon as possible.

### [This weeks contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160124-20160129)

This week 44 people contributed to Rails. We also got 11 first time contributors. Welcome aboard folks and keep it going!

## New Stuff

### [Drop Action Cable dependency on EventMachine](https://github.com/rails/rails/pull/23305)

Action Cable no longer depends on EventMachine. A lot of work is done to make sure that this change works properly. Hat tip to [Matthew Draper](https://twitter.com/_matthewd) for all the great work!

### [New welcome page for Rails 5](https://github.com/rails/rails/pull/23237)

Do you remember the old `Welcome aboard` page? It's now replaced by `Yay! You are on Rails!` The welcome page got a big facelift in Rails 5, gone are the needless links and extra data. It's compact and mentions only relevant things.

### [Generate index for referenced columns by default](https://github.com/rails/rails/pull/23179)

Rails will now generate indexes for referenced columns by default without mentioning it in migrations. That's what we want in 90% of the cases anyways!

## Fixed

### [Issues with `ActiveRecord::Relation#cache_key` fixed](https://github.com/rails/rails/pull/23080)

Lots of corner cases with using `cache_key` with loaded and unloaded collections and with selecting specific columns are fixed.

### [Fix issue with `has_many: through` STI association](https://github.com/rails/rails/pull/23221)

An issue with incorrect `source_type` getting used in case of `has_many: through` associations with STI models is fixed.

## Wrapping Up

That's all for This week in Rails. As always, there are plenty of things we're not able to cover here, so take a peek at the [changes](https://github.com/rails/rails/compare/master@%7B2016-01-24%7D...@%7B2016-01-29%7D) yourself.

Until next time!

