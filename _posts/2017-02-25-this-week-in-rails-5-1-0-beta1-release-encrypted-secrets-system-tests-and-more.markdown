---
layout: post
title: "This Week in Rails: 5.1.0.beta1 release, Encrypted Secrets, System Tests and more!"
categories: news
author: gregmolnar
published: true
date: 2017-02-25
---

Hi everyone,  
  
 [Greg](https://twitter.com/gregmolnar) here with the latest from the world of Rails. It was a busy week with new releases and many improvements!

## Featured

### [New Rails releases](https://rubyonrails.org/2017/2/23/Rails-5-1-beta1)

The first beta release for [5.1.0](https://rubyonrails.org/2017/2/23/Rails-5-1-beta1) is out with some love towards JavaScript, System Tests, Encrypted Secrets and more!   
There is also a new stable release for [4.2.8](https://rubyonrails.org/2017/2/21/Rails-4-2-8-has-been-released) and a release candidate for [5.0.2](https://rubyonrails.org/2017/2/25/Rails-5-0-2-rc1-has-been-released)

### [Eileen joins Rails core](https://rubyonrails.org/2017/2/22/Eileen-joins-Rails-core)

We’re proud to welcome Eileen M. Uchitelle to Rails core!

### [This week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20170219-20170225)

33 developers contributed to Rails this week. If you want to be part of this team, look at the [issues list](https://github.com/rails/rails/issues) and make a contribution!

## New

### [Custom url helpers and polymorphic mapping](https://github.com/rails/rails/pull/23138)

This pull request introduces support for custom url helpers and defining custom polymorphic mappings in routes.rb

### [Capybara Integration with Rails (AKA System Tests)](https://github.com/rails/rails/pull/26703)

Rails has a built in integration with Capybara now which makes writing system tests easier, since all the setup is handled by Rails. For more details read the write-up on the pull request.

### [Encrypted secrets support](https://github.com/rails/rails/pull/28038)

Rails introduces secrets encryption which is inspired by the [Sekrets](https://github.com/ahoward/sekrets) gem.  
It worth noting here that, some [improvements to the crypto](https://github.com/rails/rails/pull/28139) is on the way too.

## Improved

### [Include JobID in all Active Job info logs](https://github.com/rails/rails/pull/28112)

Earlier the JobID wasn't logged when a job started or ended performing, but that's not the case anymore, making debugging of job related issues easier.

### [Add missing gzip footer check in ActiveSupport::Gzip.decompress](https://github.com/rails/rails/pull/28158)

From now on ActiveSupport::Gzip.decompress checks the CRC in the gzip footer.

### [Allow 3-level configs to group database connections by environment](https://github.com/rails/rails/pull/28095)

If you have multiple database connection per environment, you can group your config by the environment. [Check this comment](https://github.com/rails/rails/pull/28095#issuecomment-281449457) for an example.

### [Delegate to `scope` rather than `merge!` for collection proxy](https://github.com/rails/rails/pull/25877)

A performance improvement by not using merge! when it is not necessary.

## Fixed

### [Preload to\_datetime before freezing a TimeWithZone instance](https://github.com/rails/rails/pull/28104)

After freezing an ActiveSupport::TimeWithZone instance, it is not possible to call to\_datetime because the value is cached in an instance variable. To avoid this issue, the instance variable is preloaded before the freeze occurs.

### [HashWithIndifferentAccess#compat nil issue fix](https://github.com/rails/rails/pull/28138)

HashWithIndifferentAccess#compact returned nil earlier when the hash didn't contain nil values in it. This PR fixed the problem.

## Deprecated

### [Deprecate using `quoted_id` in quoting / type casting](https://github.com/rails/rails/pull/27962)

Originally quoted\_id was used in legacy quoting mechanism. Now we use type casting mechanism for that hence quoted\_id is deprecated.

That's it from This Week in Rails. There were many other great contributions, too numerous to list here, but feel free to [check them out](https://github.com/rails/rails/compare/master@%7B2017-02-12%7D...@%7B2017-02-19%7D)!&nbsp;  
  
Until next week 👣

