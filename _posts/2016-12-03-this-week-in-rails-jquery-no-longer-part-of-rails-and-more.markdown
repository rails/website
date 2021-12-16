---
layout: post
title: "This Week in Rails: jQuery no longer part of Rails and more!"
categories: news
author: chancancode
published: true
date: 2016-12-03
---

Hello everyone!   
  
 [Prathamesh](https://twitter.com/_cha1tanya) and [Greg](https://twitter.com/gregmolnar) here, bringing you all the latest from This Week in Rails.....  
Which is actually "Past 2 weeks in Rails" because we missed to send last week's issue due to illness. But we are back now, so let's see what happened in the Rails world since the last issue.

## Featured

### [This week's Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20161119-20161202)

The past 2 weeks 38 awesome people contributed to Rails. Want to be part of the show? Head to the [issues](https://github.com/rails/rails/issues) list and make a contribution!

### [jQuery is no longer a dependency of Rails](https://github.com/rails/rails/pull/27113)

The Rails javascript helpers has been rewritten in a new gem called _rails-ujs_ and they use vanilla javascript, so jQuery is not a dependency of Rails anymore.

### [Rails 5.0.1.rc1 has been released!](https://rubyonrails.org/2016/11/30/Rails-5-0-1-rc1-has-been-released)

The first release candidate for 5.0.1 has been released and if no issues found, the final will be release on the 6th of December.

## Improved

### [form\_with helper to unify form\_tag and form\_for](https://github.com/rails/rails/pull/26976)

The _form\_for_ and _form\_tag_ helpers serve a very similar use-case so they been unified with the new _form\_with_ helper.

### [Make the second argument to attribute optional](https://github.com/rails/rails/commit/1bdc395d956f789b6612796ac6f130cde90d3066)

A default for the&nbsp;_cast\_type_&nbsp;option of the attribute method has been added to enable calling this method with just the attribute name.

### [Active Record connections improvement](https://github.com/rails/rails/pull/27108)

Active Record distributed the connection to previously blocked threads on when it cleared the reloadable connections, but with this change the same happens on disconnect too.

### [Use gen\_random\_uuid() for PostgreSQL >= 9.4](https://github.com/rails/rails/pull/25395)

With this change, Active Record uses the recommended UUID function depending on the underlying PostgreSQL server's version, while maintaining uuid\_generate\_v4() in older migrations.

## New

### [Add Yarn support in new apps using --yarn option by Liceth · Pull Request #26836 · rails/rails · GitHub](https://github.com/rails/rails/pull/26836)

yarn, the javascript package manager is supported in Rails now! You can pass the --yarn option when you generate a new rails app and Rails will create the necessary config files and run yarn install after bundle install automatically.

### [Introduce `reload\_` reader for singular associations](https://github.com/rails/rails/pull/27133)

This patch introduced _Model#reload\_<association>_ to bring back force reloading of the association reader.

## Fixed

### [update\_all and delete\_all is fixed when chained with left\_joins](https://github.com/rails/rails/pull/27193)

These batch methods didn't use the left outer joins before, but with this fix they behave properly now.

### [Fix a force ssl redirection bug](https://github.com/rails/rails/pull/27140)

This PR fixes a bug with the force ssl redirection when the session\_store is disabled.

## Wrapping up

That's it from This Week in Rails! There were many other great contributions, too numerous to list here, but feel free to [check them out](https://github.com/rails/rails/compare/master@%7B2016-11-19%7D...@%7B2016-11-25%7D)!  
  
Until next week!

