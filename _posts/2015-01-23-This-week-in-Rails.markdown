---
layout: post
title: "This week in Rails: model error details, drop table if exists and more!"
categories: news
author: claudiob
published: true
date: 2015-01-23 17:01:58 -0800
---

It's Friday! Gotta get down on This Week in Rails!

This is [Claudio](http://claudiob.github.io), rushing to get you the weekly updates on interesting commits and pull requests from [Rails](https://github.com/rails/rails).

## Featured

### [This week's Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/this-week)

25 contributors helped Rails become a better framework. Keep the patches coming, and Rails 5 will be ready before you know it.

## New Stuff

### [ActiveModel::Errors#details](https://github.com/rails/rails/pull/18322)

Given a user without an email, `user.errors.details` will return `{email: [{error: :blank}]}`. In some cases, this is more useful than the message `{email: ["can't be blank"]}` provided by `user.errors.messages`.  
There's a good usage example [in this blog post](https://cowbell-labs.com/2015-01-22-active-model-errors-details.html).

### [:if\_exists option for drop\_table](https://github.com/rails/rails/pull/16366)

Writing `drop_table(:users, if_exists: true)` in a migration ensures that the migration will run without exceptions, whether or not the "users" table exists.

### [ActionController::Renderer](https://github.com/rails/rails/pull/18546)

The `ActionController::Base#render` method can now output a template anywhere, even outside of a controller!

### [ActiveRecord::Base#accessed\_fields](https://github.com/rails/rails/commit/be9b680)

Calling `@users = User.all` to list all users works, but you can get better performance by indicating the exact fields you intend to access, for instance with `@users = User.select(:name, :email)`.

The new `@users.accessed_fields` method will give you the list of fields accessed from the model, so you can easily optimize your queries using `.select` rather than `.all`.

## Improved

### [Speed up ActionController::Renderer](https://github.com/rails/rails/pull/18643)

Everyone loves a pull request that speeds up Rails,
especially if the performance gain is documented and verifiable.  
When in doubt, always use [benchmark/ips](https://github.com/evanphx/benchmark-ips) to provide benchmark results for comparison.

## Wrapping up

That's all for _This week in Rails_. As always, there are more changes than we have room to cover here, but feel free to [check them out](https://github.com/rails/rails) yourself!

P.S. If you enjoyed this newsletter, why not [share it with your friends](https://rails-weekly.ongoodbits.com)? :) If you wish to be part of this project please don't hesitate to contact [Godfrey](mailto:godfrey@brewhouse.io) – there're a lot of ways you could help make this newsletter more awesome!

