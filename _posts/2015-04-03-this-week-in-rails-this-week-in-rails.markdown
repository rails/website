---
layout: post
title: "This week in Rails"
categories: news
author: gregmolnar
published: true
date: 2015-04-03 16:15:25 -0700
---

Happy Good Friday Everyone!

Here comes the gist of last week's interesting commits from Rails. Stay tuned!

## Featured

### [This week's Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20150328-201504032300)

We had 30 amazing contributors this week, big thanks to all them!

## New Stuff

### [Explicit base class for Active Job jobs](https://github.com/rails/rails/pull/19034)

It is [recommended](https://github.com/rails/rails/issues/16976#issuecomment-56244353) to not change settings on `ActiveJob::Base` directly so from now on every generated `Job` will inherit from `ApplicationJob` and you can tweak that for your needs.

### [Rails uses Sprockets 3 now!](https://github.com/rails/rails/pull/19587)

[Sprockets 3](https://github.com/rails/sprockets/issues/16) will be released soon and the Rails team decided to give the release candidate a try.

## Deprecated

### [Deprecate the :tokenizer option in validates_length_of](https://github.com/rails/rails/pull/19585)

This option only served an extremely specific use case hence became deprecated. If you rely on this functionality, you can implement it with a plain Ruby method.

## Improved

### [Only coerce time in comparison if necessary](https://github.com/rails/rails/pull/19604)

In the development environment `ActiveSupport::FileUpdateChecker#max_mtim` triggers many time comparison and there were many unnecessary `to_time` calls. With this patch `Rails` saves around 100ms per request!

### [Reduce memory usage when loading types in Postgres](https://github.com/rails/rails/commit/445c12f7dfa345b86e05dc610d665f9afde14c26)

The `PG::Result` object were never cleared when the application queries the types. By clearing that object Rails use less memory.

## Fixed

### [Return super in ActionController::Parameters.const_missing](https://github.com/rails/rails/pull/19544)

With this pull request `ActionController::Parameters.const_missing`'s `super` is always returned whereas before it was only called and its return value was mistakenly discarded.

## Wrapping up

That's all for _This week in Rails_. As always, there are more changes than we have room to cover here, but feel free to [check them out](https://github.com/rails/rails/commits/master) yourself!

P.S. If you enjoyed this newsletter, why not [share it with your friends](https://rails-weekly.ongoodbits.com)? :) If you wish to be part of this project please don't hesitate to contact [Godfrey](mailto:godfrey@brewhouse.io) – there're a lot of ways you could help make this newsletter more awesome!

