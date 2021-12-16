---
layout: post
title: "New releases, bugfixes and more!"
categories: news
author: gregmolnar
published: true
date: 2017-07-22
---

Hello everyone! This is [Greg](https://twitter.com/gregmolnar) with the latest news from the Rails world.

### [Rails 5.1.3.rc1 and 5.0.5.rc1 released](https://rubyonrails.org/2017/7/19/Rails-5-1-3-rc1-and-5-0-5-rc1-released)

Two new release candidates has been released this week, if there are no regressions found, the final releases are coming next week!

### [This Week's Rails contributors!](http://contributors.rubyonrails.org/contributors/in-time-window/20170715-20170722)

28 people helped to make Rails better this week. If you want to be one of them, checkout the [issues](https://github.com/rails/rails/issues) list, help is always welcomed!  
  


### [Add bootsnap to default Gemfile](https://github.com/rails/rails/pull/29313)

The [bootsnap](https://github.com/Shopify/bootsnap) gem helps to boot a Rails application faster, and the gem is now part of the Rails default Gemfile.

### [Allow to pass a connection to the `dbconsole` command](https://github.com/rails/rails/pull/29358)

With this change the dbconsole command can except a connection parameter, so if you are using a 3 level database connection configuration you can specify the connection you want to use.

### [Fix `where` with a custom table name](https://github.com/rails/rails/pull/29796)

With this week the select clause will use the custom table name if you have a table alias set up.  
  


### [Scrub the invalid parameter value before using it in the error](https://github.com/rails/rails/pull/29793)

When Rack::Utils::InvalidParameterError is raised the exception message now scrubs the parameter value to make it possible to use it in error messages.

### [Make `rails yarn:install` ignore dev dependencies](https://github.com/rails/rails/pull/29851)

With this change rails yarn:install won't install the development dependencies, so in deployment when the assets are precompiled they are ignored. bin/yarn still installs everything in your development environment.

That's all for this week, as always, we couldn't cover all of the changes, but feel free to check the [commits](https://github.com/rails/rails/compare/master@%7B2017-07-07%7D...@%7B2017-07-15%7D) if you are interested. Until next week!
