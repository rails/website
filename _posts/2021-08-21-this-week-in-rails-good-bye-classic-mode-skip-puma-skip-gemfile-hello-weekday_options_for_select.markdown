---
layout: post
title: "Good-bye classic mode, --skip-puma, --skip-gemfile.. hello weekday_options_for_select!"
categories: news
author: zzak
published: true
date: 2021-08-21
---

Hello, [zzak](https://github.com/zzak) again with the latest changes in Rails this week!

### [DHH previews modern web apps without JavaScript bundling or transpiling](https://www.youtube.com/watch?v=PtxZvFnL2i0)

In this YouTube, DHH goes through the latest changes planned for Rails 7 and how the face of front-end development has evolved.

### [Rails 6.0.4.1 and 6.1.4.1 have been released](https://rubyonrails.org/2021/8/19/Rails-6-0-4-1-and-6-1-4-1-have-been-released)

A reminder to upgrade to the latest stable versions of Rails which includes a critical security fix for Action Pack.

### [Dropping support for classic mode]()

There's an ongoing epic to delete the [classic](https://guides.rubyonrails.org/v6.1/autoloading_and_reloading_constants_classic_mode.html) autoloader that [started months ago](https://github.com/rails/rails/commit/0d523d83657ce7066f25d87f6f094e804590e1e8). Let's do a checkpoint in this newsletter.  
  
You can no longer opt-in to classic mode using config.autoloader=, this setter has been deleted, Rails 7 has only one autoloading backend: [Zeitwerk](https://github.com/fxn/zeitwerk).  
  
During application initialization, you can autoload classes and modules from [config.autoload\_once\_paths](https://edgeguides.rubyonrails.org/autoloading_and_reloading_constants.html#config-autoload-once-paths), but autoloading reloadable constants doesn't work anymore. That has been deprecated and issuing warnings since Rails 6.0. Check the [documentation](https://edgeguides.rubyonrails.org/autoloading_and_reloading_constants.html#autoloading-when-the-application-boots) for valid ways to do that.  
  
Additionally, a lot of private APIs and orphan code fall in cascade. Check for example [#43048](https://github.com/rails/rails/pull/43048) and [#43058](https://github.com/rails/rails/pull/43058), and there's more to come.

### [Add new form builder "weekday_options_for_select" ](https://github.com/rails/rails/pull/42979)

This PR adds a helper for weekday select which even includes i18n!

### [Support for byte ranges in Active Storage](https://github.com/rails/rails/pull/41437)

This PR allows serving uploads in chunks in order to stream buffered files as is required e.g. audio podcasts from S3 to an iphone.

### [Add database config option to turn off tasks like db:migrate](https://github.com/rails/rails/pull/42794)

In a multidb configuration you may have a database that you want to connect to, such as a replica, but don't want to accidentally run any db tasks on it.  
  
The "database\_task: false" config flag ensures you don't accidentally "rails db:drop" your backup database.

### [Remove legacy --skip-gemfile option](https://github.com/rails/rails/pull/42996)

"Don't have to keep all the monuments to old skirmishes around forever."

### [Remove --skip-puma option](https://github.com/rails/rails/pull/42998)

Since puma is the only option available for the web server, it doesn't make sense to allow removing it as a configuration option.

[15 people](https://contributors.rubyonrails.org/contributors/in-time-window/20210814-20210821) contributed to Rails since last time. All the changes can be checked [here](https://github.com/rails/rails/compare/@%7B2021-08-14%7D...main@%7B2021-08-21%7D). Until next week!
