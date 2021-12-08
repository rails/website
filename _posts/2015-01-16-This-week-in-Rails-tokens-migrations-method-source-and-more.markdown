---
layout: post
title: "This week in Rails: tokens migrations, method_source and more"
categories: news
author: kaspth
published: true
date: 2015-01-16 14:30:42 -0800
---

Live from our servers, it's This Week in Rails!

As always we're your inside scoop of interesting commits, pull requests and more from [Rails](https://github.com/rails/rails).

This is [Kasper](https://twitter.com/kaspth), and I'm ready to serve you this scoop. I tapped keys on the board in front of me to make words appear. It's quite the tapestry.

Let's get to it!

## Featured

### [This week's Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/this-week)

33 contributors made this week happen. Pull Requests were merged, new friendships were made... I think I even heard someone say they saw a cat online. That's a rare sight, and part of what made this week special. Thanks everyone!

### [Tokens in migrations and model generators](https://github.com/rails/rails/pull/18448)

As a follow up to last week's `has_secure_token`, both the migration and model generators can create `token` attributes.  
`rails g migration add_auth_token_to_users auth_token:token`. `rails g model user auth_token:token`.  
The model generator automatically adds `has_secure_token :auth_token` to your new model file.

## New Stuff

### [`method_source` added to the default Gemfile](https://github.com/rails/rails/commit/0b2e0528df36bcef4aca62b86f55e1ea85604cd8)

On Rails 5 when you generate a new app, you'll find 'method_source' in your Gemfile. This gem extends the `Method` class with `source` and `comment` methods to aid your debugging. There's a good usage example in [this comment](https://github.com/rails/rails/issues/18473#issuecomment-69682891).

## Fixed

### [Allow '1' or true for acceptance validation](https://github.com/rails/rails/pull/18439)

Previously `validates_acceptance_of` would only accept '1' as a valid attribute value. Now you can assign `true` to an attribute and the validation will pass.

### [Time columns will be aware of application time zone](https://github.com/rails/rails/pull/15726)

In Rails 5.1 your time columns will adhere to the time zone of your Rails application. To make the upgrade path smoother, the `config.active_record.time_zone_aware_types` option has been added. See the deprecation warning [here](https://github.com/rails/rails/blob/5cd3bbbb832b58d2a0092f527d83312df4271de7/activerecord/lib/active_record/attribute_methods/time_zone_conversion.rb#L74-L86) for help.

## One More Thing™

### [Validation callbacks tested with contexts](https://github.com/rails/rails/pull/18454)

A feature you might not have heard about is validation contexts, which allow you to specify a context a callback should only be run for. Like this: `before_validation callback, on: :create`. The link shows a few tests being for this on `before/after_validation`. [Here](https://gist.github.com/dhh/9672827) is a more advanced example.

## Wrapping up

That's all for _This week in Rails_. As always, there are more changes than we have room to cover here, but feel free to [check them out](https://github.com/rails/rails) yourself!

P.S. If you enjoyed this newsletter, why not [share it with your friends](http://rails-weekly.goodbits.io)? :) If you wish to be part of this project please don't hesitate to contact [Godfrey](mailto:godfrey@brewhouse.io) – there're a lot of ways you could help make this newsletter more awesome!



