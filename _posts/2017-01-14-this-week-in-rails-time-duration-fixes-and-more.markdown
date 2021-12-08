---
layout: post
title: "This Week in Rails: Time, Duration fixes and more"
categories: news
author: vipulnsward
published: true
date: 2017-01-13
---

Happy new year (yet again) ! And a **_Friday the 13th_** 👻   
  
This is [Vipul](https://twitter.com/vipulnsward), bringing you the latest from just the second week of the year, which is shaping to be really [busy](https://github.com/rails/rails/compare/master@%7B2016-12-31%7D...@%7B2017-01-13%7D).  
  
Thanks to all the [27 contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20170107-20170113), in particular to the 4 people who contributed for the first time. Keep up the good work!  
  
Here are the most relevant changes to Rails master for this week.

## Improved

### [Constant look-up would no longer fall back to top-level constant since Ruby 2.5](https://github.com/rails/rails/commit/3d91649654ff5570d0cf26f96ec9f82f31fe32f6)

Since [top-level constant lookup](https://github.com/ruby/ruby/commit/44a2576f798b07139adde2d279e48fdbe71a0148) has been removed on Ruby 2.5, Rails takes care of relevant changes on its side, so that we rely on properly scoped constants, instead of relying on fallback lookup.

## Fixed

### [Fix pool\_from\_any\_process to use most recent specification](https://github.com/rails/rails/commit/e15a23fa355ed29d70c2ec573cd7b2418f7ac8db)

If a process is forked more than once, the Active Record connection pool was grabbing the oldest connection specification for a process, and not the most recent one.  
  
This issue is not seen for single processes, but if you are forking the process multiple times, the wrong specification will be returned and incorrect connection will be used.

This change fixes the issue by reversing the list of specification names so we can grab the most recent one rather than the oldest.

### [Make time travel work with subclasses of Time/Date/Datetime](https://github.com/rails/rails/pull/27616)

Previously when using time travel methods, travel\_to, etc, and calling `now` on a subclass of e.g. `Time`, it would return an instance of `Time` instead of returning an instance of the subclass.  
  
This change fixes the way we return the instance, so that we always return using the correct class.

### [Fix inconsistent parsing of Durations with both months and years](https://github.com/rails/rails/pull/27610)

Previously the following code may fail or succeed depending on the current time.  
  
```
ActiveSupport::Duration.parse(2.months.iso8601) == 2.months  
ActiveSupport::Duration.parse(3.years.iso8601) == 3.years
```
  
This change fixes the inconsistent parsing so that this comparison no longer fails.

## Removed

### [Deprecate reflection class\_name option to accept a class](https://github.com/rails/rails/commit/8312a0d22212798864f142b5a94805e0baa6c562)

The idea of `class_name` as an option of reflection is that passing a string would allow us to lazy autoload the class.  
  
Using the class directly, with something like   
  
```
belongs_to :client, class_name: Customer
```
  
is eagerloading models more than necessary and creating possible circular dependencies.  
  
This option is now deprecated, pass strings of the class names instead.

## Wrapping up

That's it from [Vipul](https://twitter.com/vipulnsward) . I hope you enjoyed this issue.&nbsp;   
  
If you haven't already, start working on those RailsConf proposals, you have only 6 days left to [submit a good talk](http://cfp.railsconf.com/events/railsconf2017)!

