---
layout: post
title: "This Week in Rails: 5.0.2 released, stronger Encrypted Secrets and more"
categories: news
author: claudio
published: true
date: 2017-03-04
---

Hello!   
  
It's [Claudio](http://railsconf.com/2017/program#session-125) from sunny Los Angeles bringing you the latest news from the world of Ruby on Rails. So many improvements this week so… let’s get to it!

## Featured

### [Rails 5.0.2 has been released!](https://rubyonrails.org/2017/3/1/Rails-5-0-2-has-been-released)

Go on and update your Rails 5 app to the latest release!  
v5.0.2 is fully backward-compatible with v5.0.1 and v5.0.0.

### [Google Summer of Code 2017](https://rubyonrails.org/2017/3/2/google-summer-of-code-2017)

We’re very happy to announce that Ruby on Rails has been accepted as an organization for the Google Summer of Code (GSoC) 2017 edition!

## Improved

### [Update secrets to use modern crypto](https://github.com/rails/rails/pull/28139)

As announced last week, Rails 5.1 will include encrypted secrets. Thanks to this PR, the secrets will use a stronger cryptographic algorithm for enhanced security.

## New

### [Add iso8601 and rfc3339 parsing to timezones](https://github.com/rails/rails/pull/28272)

_ActiveSupport::TimeZone_ now has a new _rfc3339_ method to get an RFC 3339 timestamp in a specific time zone.

### [Use webpacker 1.0 in new applications](https://github.com/rails/rails/pull/28212)

In case you missed it, [rails/webpacker](https://github.com/rails/webpacker) is out of beta development and has recently released v1.0.

## Fixed

### [Only load SystemTestCase if Puma is defined](https://github.com/rails/rails/pull/28160)

System test cases (Capybara) are one of the new features in Rails 5.1.&nbsp;Since they only support Puma, they are skipped if Puma is not present.

### [Do not evaluate :if arguments when :on is not satisfied for transaction callbacks](https://github.com/rails/rails/pull/28063)

Understanding when callbacks are run can be tricky. This PR smartly avoids running them as soon as one of the preconditions is not met.

### [Update DateTime#change to support usec and nsec](https://github.com/rails/rails/pull/28242)

If you need to change a timestamp by a matter of microseconds and nanoseconds, now you can do it!

## Deprecated

### [Soft-deprecate the HashWithIndifferentAccess constant](https://github.com/rails/rails/pull/28157)

If you use _HashWithIndifferentAccess_ in your code, you might want to look at using _ActiveSupport::HashWithIndifferentAccess_&nbsp; instead.

### [Deprecate implicit coercion of ActiveSupport::Duration](https://github.com/rails/rails/pull/28204)

A snippet of code like _2 \* 1.day_ will display a warning, inviting you not to coerce a Duration into a Numeric since it can be confusing, because adding/subtracting a value from a date treats integers as a day and not a second.

There were many other great [pull requests](https://github.com/rails/rails/compare/master@%7B2017-02-26%7D...@%7B2017-03-04%7D) this week from [35 contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20170226-20170304), including 12 first-timers. Thank you all!  
  
Outside of code changes, we had many more good news this week.

Until next week!

