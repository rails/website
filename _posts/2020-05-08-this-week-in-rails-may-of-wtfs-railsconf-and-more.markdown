---
layout: post
title: "May of WTFs, RailsConf and more"
categories: news
author: morgoth85
published: true
date: 2020-05-08
---

This is [Greg](https://twitter.com/gregmolnar) and [Wojtek](https://twitter.com/morgoth85) bringing you the latest news about Rails in these crazy times.

### [A May of WTFs](https://rubyonrails.org/2020/5/7/A-May-of-WTFs)

Have you ever lost time on some strange Rails issue? Would you like to make it go away, so the others won't do the same?
It is an initiative running this month to improve Rails, especially for the first time users.
Check the details and help making Rails better!

### [RailsConf - Couch Edition](https://www.railsconf.com)

This year RailsConf took place online. You can already watch all the videos. Take a look at the official announcement or
jump straight to the playlist [here](https://www.youtube.com/playlist?list=PLE7tQUdRKcyZ-TzxlxdLvh6tDUfZHqm76).

### [Rails 6.0.3 has been released](https://rubyonrails.org/2020/5/6/Rails-6-0-3-has-been-released)

This version fixes warnings when used with Ruby 2.7 altogether with many other framework bug fixes.

### [Instrument layout rendering](https://github.com/rails/rails/pull/38999)

With this addition it is possible to listen on more specific action view layout rendering instrumentation.

### [Inspect time attributes with subsec](https://github.com/rails/rails/pull/39147)

Before:

`#<Knot id: 1, created_at: "2016-05-05 01:29:47">`

After:

`#<Knot id: 1, created_at: "2016-05-05 01:29:47.116928000">`

### [Test file patterns configurable via Environment variables](https://github.com/rails/rails/commit/a0f18e60900fc45eb3524ab3cdfe57be430d6016)

It is now possible to control which test files to execute by setting _DEFAULT_TEST_ or _DEFAULT_TEST_EXCLUDE_ environment variables.

### [Fix aggregate functions to return numeric value consistently even on custom attribute type](https://github.com/rails/rails/pull/39039)

Count and average always returns a numeric value, but _sum_, _maximum_, and _minimum_ did not always return a numeric value if aggregated on a custom attribute type.

### [Deprecate passing a column to type_cast](https://github.com/rails/rails/pull/39106)

The type information for type casting is entirely separated to type object, so if anyone does passing a column to type_cast in Rails 6, they are likely doing something wrong. See the PR for a more thorough explanation.

### [Deprecate allowed_index_name_length and in_clause_length in DatabaseLimits](https://github.com/rails/rails/pull/39083)

In the past, the SQLite3 adapter relied on _allowed_index_name_length_, but it is no longer needed so it got deprecated.
_in_clause_length_ also got deprecated in
https://github.com/rails/rails/pull/39057.


[38 people contributed](https://contributors.rubyonrails.org/contributors/in-time-window/20200427-20200508) since our last issue. You can check the [full list of changes](https://github.com/rails/rails/compare/master@%7B2020-04-27%7D...@%7B2020-05-08%7D). Keep safe out there!
