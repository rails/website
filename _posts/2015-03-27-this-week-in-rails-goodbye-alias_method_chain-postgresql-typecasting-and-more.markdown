---
layout: post
title: "This week in Rails: Goodbye alias_method_chain, PostgreSQL typecasting and more"
categories: news
author: _cha1tanya
published: true
date: 2015-03-27 15:13:15 -0700
---

Hey all!

This is [Prathamesh](https://twitter.com/_cha1tanya) with this week's recap from [Rails](https://github.com/rails/rails). Lets see which issues got fixed, which features got added. Ready, steady, go!

## Featured

### [This week's Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20150321-20150327)

This week 40 people contributed to Rails, 7 out of them are new. Do you also want to help? Check out the [issue tracker](https://github.com/rails/rails/issues) and start making Rails better.

By the way, [Xavier](https://github.com/fxn) and [Kasper](https://github.com/kaspth) added the [permalink feature](https://github.com/fxn/rails-contributors/pull/61) to the link of weekly contributors. So each weekly contributors link is forever to stay!

## New Stuff

### [Warning if the query fetches more than fixed number of records](https://github.com/rails/rails/pull/18846)

Faced problem with queries fetching thousands of records and slowing everything? Now you will get a nice warning if the query fetches more number of records than configured value by using `active_record.warn_on_records_fetched_greater_than` config option.

## Deprecated

### [Deprecate alias_method_chain in favor of Module#prepend](https://github.com/rails/rails/pull/19434)

Do you remember the old friend `alias_method_chain`? It had a good run. But now it will be deprecated in Rails 5 in favor of `Module#prepend` which was introduced in Ruby 2.0.

## Improved

### [Moving type casting for PostgreSQL out of Active Record](https://github.com/rails/rails/pull/17650)

We just got [two](https://github.com/rails/rails/commit/cd09261846053bb40f8c859b8644b28208b6d7b9) [steps](https://github.com/rails/rails/commit/3b50a7a3e18e1ae5ea1d76927e37021f50389abc) closer to moving type casting of various data types for PostgreSQL from Active Record to PostgreSQL adapter.

### [Friendlier access to request variants](https://github.com/rails/rails/pull/18939)

With this patch, you can now check the current request's variant using `request.variant.phone?`, `request.variant.tablet?` and so on.

## Fixed

### [Pass name of the wrapped job class to Sidekiq for logging](https://github.com/rails/rails/pull/19482)

If you were missing your job class in the Sidekiq logs and instead seeing some weird `ActiveJob::JobWrapper`, don't worry. Now you will get your job class back in the logs because ActiveJob will pass the wrapped class name back to Sidekiq.

### [Use actual table name while joining tables with has\_many :through](https://github.com/rails/rails/pull/19452)

Previously, while joining tables having `has_many :through` association, Active Record was not using the actual table name. It was generating wrong SQL and resulting into `ActiveRecord::InvalidStatement` error when used with calculation methods like `#count`. No need to worry, its fixed now!

### [Generate fixture file with singular name for singular tables](https://github.com/rails/rails/pull/19540)

Previously if the table name was made singular using `ActiveRecord::Base.pluaralize_table_names = false`, name of the fixture file getting generated was still pluralized. No longer true! Get singular fixture file for singular table name now onwards.

## Summer Opportunity

### [Rails Girls Summer of Code](http://railsgirlssummerofcode.org)

Checkout [Rails Girls summer of code](http://railsgirlssummerofcode.org). You can submit your [open source project](http://railsgirlssummerofcode.org/guide/projects) to be included. Also you can help [fund](http://railsgirlssummerofcode.org/campaign) the campaign.

## Wrapping up

That's all for _This week in Rails_. As always, there are more changes than we have room to cover here, but feel free to [check them out](https://github.com/rails/rails/commits/master) yourself!

P.S. If you enjoyed this newsletter, why not [share it with your friends](https://rails-weekly.ongoodbits.com)? :) If you wish to be part of this project please don't hesitate to contact [Godfrey](mailto:godfrey@brewhouse.io) – there're a lot of ways you could help make this newsletter more awesome!

