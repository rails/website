---
layout: post
title: "This week in Rails"
categories: news
author: gregmolnar
published: true
date: 2015-02-27 17:56:33 -0800
---

Another week went by and here we are again, this is [Greg](https://github.com/gregmolnar) with the latest news from the Rails community.

## Featured

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/this-week)

36 amazing people helped to make Rails even better this week! Thanks everyone!

### [Interview with Carlos Antonio and Rafael França](http://podcast.rubyindia.org/rubyindia/8)

Interview with Rails Core team members about early days of their Rails contribution, Rails team, Brazil Rails community, their day to day tools of choice and workflow, and how everyone can help out with Rails.

## New Stuff

### [Default belongs_to validation](https://github.com/rails/rails/pull/18937)

`belongs_to` relations will now trigger a validation error by default if the association is not present.
If you wish, you can turn this off with the `optional: true` option per association.

### [Move the validate! method to ActiveModel::Validations](https://github.com/rails/rails/pull/19018)

`validate!` was part of Active Record, but with this commit you can use it on any Active Model object!

### [Allow limit option for MySQL bigint primary keys](https://github.com/rails/rails/pull/17631)

From now on, you can set a `limit` for your `bigint` type primary keys in MySQL.

## Improved

### [Faster template partial caching](https://github.com/rails/rails/pull/18948)

Collections automatically use a `read_multi` for partials starting with a cache call from now on, which makes them faster.

## Fixed

### [Fixed ActiveModel.model_name.to_json](https://github.com/rails/rails/pull/19055)

Previously, calling `User.model_name.to_json` would result in an infinite recursion, because `.model_name` inherited `.as_json` from Object.
This commit delegates `as_json` to the correct handler to fix that.

### [Fixed mysql's schema.rb dumper](https://github.com/rails/rails/pull/19066)

MySQL doesn't have a `boolean` datatype, it uses a `tinyint` with a `limit` option, so if we dumped the schema from MySQL we couldn't load it to Postgres since `limit` is invalid for Postgres booleans. This patch fixes that by not adding the `limit` to `schema.rb`.

## Deprecated

### [skip_action_callback is deprecated](https://github.com/rails/rails/pull/19060)

In future `skip_before_action`, `skip_after_action` and `skip_around_action` will raise an `ArgumentError` if the callback doesn't exist, so using `skip_action_callback`, which calls all three methods will probably fail, therefore it became deprecated.

## One More Thing™

### [Richard Schneeman is a Rails Committer!](https://twitter.com/rails/status/570714059819122688)

Please welcome our newest Rails Committer [@schneems](https://github.com/schneems)!

## Wrapping up

That's all for _This week in Rails_. As always, there are more changes than we have room to cover here, but feel free to [check them out](https://github.com/rails/rails/commits/master) yourself!

P.S. If you enjoyed this newsletter, why not [share it with your friends](https://rails-weekly.ongoodbits.com)? :) If you wish to be part of this project please don't hesitate to contact [Godfrey](mailto:godfrey@brewhouse.io) – there're a lot of ways you could help make this newsletter more awesome!

