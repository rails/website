---
layout: post
title: "🎃 Halloween Edition: Zeitwerk migration guide, selenium-webdriver, and some Ruby 3.1 snacks"
categories: news
author: zzak
published: true
date: 2021-10-31
---

🍭 Trick or treat, [zzak](https://github.com/zzak) here after a week off with lots of goodies! 🍬

  

[Rails Autoloader Migration Guide: From Classic to Zeitwerk](https://edgeguides.rubyonrails.org/classic_to_zeitwerk_howto.html)

This new guide has all you need to know to switch the autoloader for Rails 6.x and 7.0 applications!

  

[Add ActiveRecord::Base.prohibit\_shard\_swapping](https://github.com/rails/rails/pull/43485)

This new method prohibits swapping shards within the given block. This can be useful if you're using sharding to provide database isolation on a per-request basis.

  

[Add support for setting the schema/structure dump filepath in the config](https://github.com/rails/rails/pull/43530)

This PR adds the ability to specify the path used for schema dump files. For those using horizontal sharding, previously a schema file would be created for every shard which makes sharing the same migrations across shards more difficult.

  

[Rails 7.0 requires selenium-webdriver \>= 4.0.0](https://github.com/rails/rails/pull/43498)

Previously, Rails generated a Gemfile with an alpha release for selenium-webdriver due to an incompatibility with Ruby 3.0

  

[Replace Concurrent.monotonic\_time with Process.clock\_gettime](https://github.com/rails/rails/pull/43502)

Since all modern Rubies support this interface a small optimization can be made to reduce method calls in Active Record connection adapters.

  

[Enable eager loading by default on CI systems](https://github.com/rails/rails/pull/43508)

When running your Rails app test suite inside of a CI environment that sets ENV["CI"] it's recommended to turn on eager loading to help identify errors that may only occur in production. This will be the default for newly generated apps.

  

[Support RFC 4122 strings for namespace UUIDs](https://github.com/rails/rails/pull/37682)

You can now effectively use an RFC 4122 compliant string by default in newly generated apps, or by enabling the new `config.active_support.use_rfc4122_namespaced_uuids` setting.

  

[Use the native Class#descendants if available](https://github.com/rails/rails/pull/43481)

With the addition of Class#descendants in Ruby 3.1, we can avoid iterating over every object in ObjectSpace to achieve the same feature. Also, check out #43548 for some additional refactoring of DescendantsTracker.

  

[Call Executor#wrap around each test](https://github.com/rails/rails/pull/43550)

`Rails.application.executor` hooks are now called around every tests which helps prevent state to leak from one test to another.

  

[Add :day\_format option to date\_select](https://github.com/rails/rails/pull/43567)

Similar to :year\_format, this new option for date\_select allows you to pass a lambda for setting the format to display days select options.

  
[38 people](https://contributors.rubyonrails.org/contributors/in-time-window/20211016-20211031) contributed to Rails since the last time. All the changes can be checked [here](https://github.com/rails/rails/compare/@%7B2021-10-15%7D...main@%7B2021-10-31%7D). Until next week!

