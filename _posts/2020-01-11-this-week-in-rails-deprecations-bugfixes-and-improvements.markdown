---
layout: post
title: "This week in Rails - Deprecations, bugfixes and improvements!"
categories: news
author: gregmolnar
published: true
date: 2020-01-11
---

Hello, this is [Greg](https://twitter.com/gregmolnar), bringing you the latest news from the Ruby on Rails world!

### [38 contributors to Rails in past week](https://contributors.rubyonrails.org/contributors/in-time-window/20190101-20191231)

There have been 38 contributors to Rails in the first week of the year!&nbsp;

### [Deprecate "primary" as a connection_specification_name for ActiveRecord::Base](https://github.com/rails/rails/pull/38190)

This PR deprecates the use of the name "primary" as the
_connection\_specification\_name_ for _ActiveRecord::Base_ in favor of
using "ActiveRecord::Base" to avoid confusion as earlier the classname was used in any other case.



### [Deprecate using `Range#include?` to check the inclusion of a value in a date time range](https://github.com/rails/rails/pull/38186)

The usage of the _Range#include?_ method to check the inclusion of an argument in date-time with zone range is deprecated in Ruby and since Rails extends it, the deprecation needs to be carried forward.
As a replacement, it is recommended to use _Range#cover?_

### [Restore previous behavior of parallel test databases](https://github.com/rails/rails/pull/38179)

Before this bugfix, if an app called _establish\_connection_ with no arguments or doesn't call
_connects\_to_ in _ApplicationRecord_ and uses parallel testing
databases, the application could've picked up the wrong configuration.



### [Reduce number of created objects in Hash#as_json](https://github.com/rails/rails/pull/38197)

The improvement is highly coupled to the size of the hash but can be quite a bit for medium sized nested hashes.

That's it for this week, till next time!&nbsp;
