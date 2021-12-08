---
layout: post
title: "This week in Rails: RailsConf program, on_weekday? and more!"
categories: news
author: chancancode
published: true
date: 2016-02-20
---

Hello, this is [Godfrey](https://twitter.com/chancancode) and [Prathamesh](https://twitter.com/_cha1tanya) bringing you the latest developments from [Rails](https://github.com/rails/rails)!

## Featured

### [RailsConf 2016 program announced](http://railsconf.com/program)

The conference is looking pretty awesome, with a good mix of talks on various topics. I hope you are as excited as I am!

### [This week's Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160213-20160219)

This week, we have recorded 136 commits from 37 contributors (including 8 first-time contributors)! Thank you for making Rails better for everyone!

## New Stuff

### [`#on_weekday?` method to `Date`, `Time`, and `DateTime`](https://github.com/rails/rails/pull/23687)

Along with [`#on_weekend?`](https://github.com/rails/rails/pull/18335), you can now easily find out if a certain day falls on a weekday (M-F). The question is, do you _really_ want to know?

## Fixed

### [Fix incorrect behavior with unsubscribing to channels](https://github.com/rails/rails/pull/23715)

Saying goodbye is certainly hard, but having to listen for one might just be worse. Luckily for us, all of these are abstracted deep inside Action Cable, so we will never have to go through that ourselves.

## Improved

### [Inject Rails configurations through Railtie](https://github.com/rails/rails/pull/23505)

Dependency injection might not be a virtue, but in this case, it certainly helps keeping things neatly isolated from each other.

### [Tagged errors in logs](https://github.com/rails/rails/pull/23203)

A while ago, tagged logging [became the default on production](https://github.com/rails/rails/pull/22949) on Rails 5. Now the tags are included in the logs for errors too!

### [Automatically reset `ActionMailer::Base.deliveries` in integration tests](https://github.com/rails/rails/commit/9d378747326d26cf1afdac4433ead22967af0984)

With this patch, Rails 5 will automatically clear the `ActionMailer::Base.deliveries` array in between your integration tests.

### [Support nested params in `button_to` helper](https://github.com/rails/rails/pull/17043)

We can now pass nested hashes or arrays to `button_to` helpers's params option.

## Wrapping Up

That's all for This week in Rails. As always, there are plenty of things we're not able to cover here, so take a look at the [changes](https://github.com/rails/rails/compare/master@%7B2016-02-13%7D...@%7B2016-02-19%7D) yourself.

Until next time!

