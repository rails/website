---
layout: post
title: "This Week in Rails: 5.1.0.rc1, GSoC and more!"
categories: news
author: repinel
published: true
date: 2017-03-24
---

Hello everyone! This is [Roque](https://twitter.com/repinel) bringing the latest from the last two weeks.  
  
The last couple of weeks have been very busy with the releasing of [Rails 5.1.0.rc1](https://rubyonrails.org/2017/3/20/Rails-5-1-rc1) and the starting of [Rails 5.2](https://github.com/rails/rails/commit/6c08d480f13d3332c878ca8a120a03fcd78f7ba2) 🎉  
  
Congratulations to all involved!!

## Featured

### [Rails 5.1.0.rc1 has been released!](https://rubyonrails.org/2017/3/20/Rails-5-1-rc1)

Please check it out and help the community by reporting issues before 5.1 is released.  
  
If you are already using encrypted secrets, make sure to run [this script](https://gist.github.com/kaspth/bc37989c2f39a5642112f28b1d93f343) to upgrade your app.

### [Google Summer of Code 2017](https://rubyonrails.org/2017/3/22/google-summer-of-code-2017-application-period)

Are you a student, or know someone who would love to contribute to Rails? Our GSoC students application is now open! Check out [our ideas page](https://github.com/railsgsoc/ideas/wiki/2017-Ideas) and join us on the [mailing list](https://groups.google.com/forum/#!forum/rubyonrails-gsoc) for discussion.

### [The RailsConf 2017 schedule is live!](http://railsconf.com/schedule)

Have you also been waiting for this? No more. The schedule is live and looks awesome!

## New

### [Add default option to belongs\_to](https://github.com/rails/rails/pull/28453)

The _:default_ option adds a _before\_validation_ callback that initializes the association with the given lambda’s return value:  
_belongs\_to :person, default: -\> {​ Current.person }​_

### [Add support to duplicable Rational and Complex](https://github.com/rails/rails/pull/28544)

This is a work ahead of the upcoming [Ruby changes](https://github.com/ruby/ruby/commit/31ef3124a9db534abcc3e323f5d3cb696eda3bf5).

## Fixed

### [Allow Time#to\_time on frozen objects](https://github.com/rails/rails/pull/28147)

This fixes an issue with frozen that has been around since Rails 4.

### [Allow order to be given expressions as hash keys](https://github.com/rails/rails/pull/28191)

The Active Record _order_ method is no longer restricted to attribute names. It now accepts expressions like:  
_Post.order("LENGTH(title)" =\> :asc).last_

There were many other great [pull requests](https://github.com/rails/rails/compare/master@%7B2017-03-12%7D...@%7B2017-03-24%7D) this week from [45 contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20170312-20170324), including 8 first-timers. Thank you all!

Until next week!

