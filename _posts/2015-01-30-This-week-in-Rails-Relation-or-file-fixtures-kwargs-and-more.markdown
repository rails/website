---
layout: post
title: "This week in Rails: Relation#or, file fixtures, kwargs and more!"
categories: news
author: gregmolnar
published: true
date: 2015-01-30 18:13:16 -0800
---

It is that time of the week again!

This is [Greg](https://github.com/gregmolnar), bringing you this week's interesting commits and pull requests from [Rails](https://github.com/rails/rails).

## Featured

### [This week's Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/this-week)

Let's start with a big thank you for all the people who helped this week to make Rails better!

## New Stuff

### [Added #or to ActiveRecord::Relation](https://github.com/rails/rails/pull/16052)

A long waited feature is added to Active Record and from now on you can combine two Active Record relations with the `or` operator.

### [ActiveSupport::Testing::FileFixtures](https://github.com/rails/rails/pull/18658)

With this addition to `ActiveSupport::Testing` there is no need to write custom helpers for testing features requiring a sample file (i.e. file uploads).

### [Use kwargs in the test's HTTP methods](https://github.com/rails/rails/pull/18323)

Support for keyword arguments is added to the HTTP methods of the controller tests. An example of the new syntax:

```ruby
post :create, params: { y: x }, format: :json
```

## Improved

### [Improved performance of integration tests](https://github.com/rails/rails/commit/1fb9e6eff71eb84b6cb620282c15b7b89d8e70c1)

`delegate` turned out to be a bottleneck at the URL generation in the integration tests. With this patch the integration tests of the applications should have a speedup.

### [Allow hyphenated names for plugins](https://github.com/rails/rails/pull/13601)

From now on you can generate a Rails plugin with a hyphenated name (i.e. namespaced engines).

## Deprecated

### [\*\_via\_redirect integration test methods are deprecated](https://github.com/rails/rails/pull/18693)

The `*_via_redirect` methods are deprecated but do not fear, you can use `follow_redirect!` in your test suite for the same behaviour.

## Fixed

### [Fixed HTTP basic authentication nil issue](https://github.com/rails/rails/pull/18666)

When `request.authorization` returned `nil`, Rails raised a `NoMethodError`, but this is fixed now.

### [AR::Relation#group accepts SQL reserved keywords](https://github.com/rails/rails/pull/18722)

This patch allows you to group by SQL reserved keywords with the `group` method of Active Record.

## One More Thing™

### [Arthur Nogueira Neves is a Rails Committer](https://twitter.com/rails/status/561240742199586816)

Please welcome our newest Rails Committer!

## Wrapping up

That's all for _This week in Rails_. As always, there are more changes than we have room to cover here, but feel free to [check them out](https://github.com/rails/rails) yourself!

P.S. If you enjoyed this newsletter, why not [share it with your friends](https://rails-weekly.ongoodbits.com)? :) If you wish to be part of this project please don't hesitate to contact [Godfrey](mailto:godfrey@brewhouse.io) – there're a lot of ways you could help make this newsletter more awesome!
