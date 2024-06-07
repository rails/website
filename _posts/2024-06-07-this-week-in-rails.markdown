---
layout: post
title: "Global strict loading mode setting, route draw deferring and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-06-07
---


Hi, [Wojtek](https://x.com/morgoth85) here. Let's explore this week's changes in the Rails codebase.

[Rails security releases](https://rubyonrails.org/2024/6/4/Rails-Versions-6-1-7-8-7-0-8-4-and-7-1-3-4-have-been-released)  
Rails Versions 6.1.7.8, 7.0.8.4, 7.1.3.4, and 7.2.0.beta2 have been released with a security issue fix.

[The CFP for RubyConf is open](https://sessionize.com/rubyconf-2024)  
Submissions on all *Ruby Web Frameworks*, including Rails, will be considered, so get your Rails related submissions ready!

[Allow to set strict_loading_mode globally](https://github.com/rails/rails/pull/51339)  
Sets the mode via *config.active_record.strict_loading_mode* in which strict loading is reported. Defaults to *:all*. It can be changed to *:n_plus_one_only* to only report when loading associations that will lead to an "N + 1 query". This can be set globally or within a model.

[Defer route drawing to the first request, or when url_helpers called](https://github.com/rails/rails/pull/52012)  
Executes the first routes reload in middleware, or when a route set's *url_helpers* receives a route call / asked if it responds to a route.
Previously, this was executed unconditionally on boot, which slowed down boot time unnecessarily for larger apps with lots of routes.

[Add an explicit dependency on the logger gem](https://github.com/rails/rails/pull/52024)  
It is a bundled gem candidate for Ruby 3.5, thus it would start to warn without it.

[Re-roll deprecation of to_time_preserves_timezone](https://github.com/rails/rails/pull/51994)  
The previous deprecation hadn't been warning for all users, so proceeding to removal could cause an un-warned change in behaviour.

[Include the current transaction in sql.active_record event payloads](https://github.com/rails/rails/pull/51965)  
Use case is to allow tracing database activity including the ability to group queries by transaction, thanks to the recently added *ActiveRecord::Transaction#uuid*.
Enhanced later with [nil handling change](https://github.com/rails/rails/pull/52007)

[Fix IDs reader on preloaded associations for composite primary keys](https://github.com/rails/rails/pull/51167)  
Now calling an example association with composite primary keys *author.books.ids* works as expected.
  
_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-05-31%7D...main@%7B2024-06-07%7D)._
_We had [30 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240531-20240607) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
