---
layout: post
title: "This week in Rails: Rails 5 - The Beta Awakens"
categories: news
author: toddbealmear
published: true
date: 2015-12-19 11:48:35 -0800
---

I hear you're looking for a pilot. Name's [Todd](https://twitter.com/toddbealmear) Solo, captain of This Week in Rails. She may not look like much, but this bucket of bolts did the Kessel Run in less than twelve parsecs. She's more than capable of smuggling all of the latest Rails intelligence to you.

I've got a very Special Edition™ for you this week - we're celebrating the release of the [very first beta](https://rubyonrails.org/2015/12/18/Rails-5-0-beta1) of Rails 5! We're going to be covering all of the big additions made since the release of Rails 4.2 in this issue. Don't worry - no Bothans died to bring you this information.

## Featured

### [This Release's Contributors](http://contributors.rubyonrails.org/edge/contributors)

We had 790 scruffy-looking nerf herders contribute to this release. That's over 7000 commits in a little over a year! Give all of these folks a big round of applause!

### [Rails 5 Only Supports Ruby 2.2.2+](https://github.com/rails/rails/commit/32f7491808d2c4e097ed7b3ee875e4d1cea8c442#diff-73ac7236f7a8247a9cd61d338ef49cda)

This is important - Rails 5 will only support versions of Ruby greater than 2.2.2. Ruby 2.2 introduces a number of new features and performance enhancements that the Rails team wants to capitalize on. You can read more about Ruby 2.2 in the [release announcement](https://www.ruby-lang.org/en/news/2014/12/25/ruby-2-2-0-released).

## New Stuff

### [Action Cable](https://github.com/rails/rails/tree/master/actioncable)

In case you haven't heard, Rails 5 is bringing WebSocket support along with it! Action Cable is a completely integrated solution for building WebSocket apps in Rails. Give it a spin!

### [Rails API](https://github.com/rails/rails/pull/19832)

Rails 5 introduces support for API-only apps. Based on the wonderful work done by the [Rails API project](https://github.com/rails-api/rails-api), you can now generate apps that strip out parts of Rails not needed for pure backends.

### [New Command Router](https://github.com/rails/rails/issues/18878)

Why do you start a console with `rails console`, but run migrations with `rake db:migrate`? That doesn't make any sense. Starting in Rails 5, many of these old `rake` commands can be run with `rails` instead.

### [Attributes API](https://github.com/rails/rails/blob/8c752c7ac739d5a86d4136ab1e9d0142c4041e58/activerecord/lib/active_record/attributes.rb)

Your models are getting a new `attribute` class method in Rails 5, allowing you to easily define a relationship between the model and a non-Active Record type. No more misusing `serialize`!

### [ApplicationRecord](https://github.com/rails/rails/pull/22567)

Just like `ApplicationController`, we're getting an `ApplicationRecord` model superclass in Rails 5. Now you don't have to monkeypatch `ActiveRecord::Base` to add functionality!

### [ActiveRecord::Relation#or](https://github.com/rails/rails/pull/16052)

A long requested feature, `ActiveRecord::Relation` is finally getting the `#or` method we've all wanted.

## Wrapping Up

That's all for This week in Rails. As always, there are plenty of things we're not able to cover here, so I highly recommend you take a peek at the release announcement and CHANGELOGs.

We'll be back to our regularly scheduled program next week.

Until next time - may the Force be with you!

