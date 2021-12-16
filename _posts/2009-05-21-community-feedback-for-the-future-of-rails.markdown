---
layout: post
title: Community feedback for the future of Rails
categories:
- activism
author: Matt Aimonetti
published: true
date: 2009-05-21 16:38:00.000000000 +01:00
---
A few months ago, we announced the creation of a ["forum"](http://rails.uservoice.com) to discuss the future of Rails and what the community is interested in. Since then, many important suggestions/topics were addressed, many features were completed or started.
My goal in this post is to give you a quick overview on the status of the [uservoice forum](http://rails.uservoice.com).

[![rails uservoice](/assets/2009/5/20/Customer_Feedback___Ideas_for_Rails_1_1.jpg)](http://rails.uservoice.com)

##Suggestions mentioned and completed:

* [Nested Model forms](http://rails.uservoice.com/pages/10012-rails/suggestions/99641-nested-model-forms)
  This is something that was actually started before we put the forum together and this feature is now available since Rails 2.3.x

* [Rails magazine](http://rails.uservoice.com/pages/10012-rails/suggestions/98699-have-a-rails-magazine)
  Olimpiu Metiu already released two issues of his [Rails Magazine](http://railsmagazine.com). The PDF versions are available for free but you can also purchase the print version.

* [Better Wiki](http://rails.uservoice.com/pages/10012-rails/suggestions/97471-have-a-better-wiki-)
  A lot of people have put efforts in building [the new wiki](http://wiki.rubyonrails.org) and I'm sure a lot more content will be provided. We have also made the wiki available for translation.
 
##Accepted/started suggestions:

 - [Improved performance](http://rails.uservoice.com/pages/10012-rails/suggestions/98494-improve-performance)
 This is something that already started in [the Rails3 branch](http://github.com/rails/rails/tree/3-0-unstable), go check the work done by Josh, Yehuda, Carl and others to make Rails perform even better.
 
 - [Public and plugin API](http://rails.uservoice.com/pages/10012-rails/suggestions/97465-have-a-public-and-plugin-api-)
 This is something that's particularly important for 3rd party developers and therefore plugin users. There is still a lot of work to be done with 3rd party developers and "advanced users" before we can get a fixed API. However, once we will have this API, Rails updates and plugin compatibility should be much smoother.
 
 - [Slices/Engine](http://rails.uservoice.com/pages/10012-rails/suggestions/98483-slices-engines)
 Rails 2.3 came with the ability to have engines in your plugins and if you were at RailsConf, you might have attended Yehuda and Carl's talk on mountable apps. Thanks to some work done on the router and Action Controller, you should be able to mount a Rails app inside another one sometime in the future.
 
 - [Easier to read code](http://rails.uservoice.com/pages/10012-rails/suggestions/98512-have-less-overly-clever-code-in-the-core)
 The refactoring has already started and the internal code should be cleaner and easier to read. Remember that Rails is 5 years old, such a task isn't easy.
 
 - [Better support for non relational databases](http://rails.uservoice.com/pages/10012-rails/suggestions/98492-better-support-for-non-relational-databases)
 Thanks to Action ORM and some more refactoring, non RDBMS and other data stores will be better supported.
 
 - [Unbind Test::Unit and Prototype](http://rails.uservoice.com/pages/10012-rails/suggestions/99489-unbind-the-framework-from-test-unit-and-prototype)
 Agnosticism is a big theme in Rails 3. Even though, Test::Unit and prototype will be the default, Rails won't make any assumptions about users using one framework or the other. Watch [David's keynote at RailsConf](http://railsconf.blip.tv/file/2081411) for more information.
 
 - [Make Action Mailer consistent with regular controllers](http://rails.uservoice.com/pages/10012-rails/suggestions/98442-make-actionmailer-consistent-with-regular-controllers)
 This task was started as part of the [work done on Abstract Controller](http://github.com/rails/rails/tree/3-0-unstable).
 
 
Don't forget that you can still [make your suggestions](http://rails.uservoice.com) and/or pick one that is already listed and start working on it!