---
layout: post
title: "This Year in Rails! A summary of 2021 in the Rails world"
categories: news
author: debug
published: true
date: 2021-12-31
---

Hi there, this is Greg, bringing you a summary of what happened in the Rails world in 2021.   
There were so many changes, it is difficult to decide which one to mention, but I tried my best to find a few notable changes  
  
[Find and assert the presence of exactly one record](https://github.com/rails/rails/pull/40768)  
Add _FinderMethods#sole and #find\_sole\_by_ to find and assert the presence of exactly one record. [Based on this, _Enumerable#sole_&nbsp;returns the sole item of the enumerable](https://github.com/rails/rails/pull/40914). If there are no items, or more than one item it will raise an exception.  
  
[Add ActionController::Live#send\_stream](https://github.com/rails/rails/pull/41488)  
Adds the ability to live stream binary data to the browser like _send\_data_ does for static files.  
  
[Add Model.update! that is similar to Model.update but raises exceptions](https://github.com/rails/rails/pull/42423)  
You may be familiar with the instance method _Model#update!_, but now you can do that on the class!  
  
 [Active Record destroy\_all performs in batches](https://github.com/rails/rails/pull/40445)  
By default it will load records in batches of 100 and allow to specify the custom batch size.  
  
[Add possibility to configure Active Storage for Action Mailbox](https://github.com/rails/rails/pull/42634)  
It is now possible to configure Active Storage service for storing email raw source via _config.action\_mailbox.storage\_service._  
  
[Raise error on unpermitted open redirects](https://github.com/rails/rails/commit/5e93cff83599833380b4cb3d99c020b5efc7dd96)  
Add _allow\_other\_host\_ options_ to _redirect\_to_. One can opt in to this behaviour with _ActionController::Base.raise\_on\_open\_redirects = true_.  
  
[Update Capybara drivers](https://github.com/rails/rails/pull/42790)  
Deprecate _poltergeist_ and _webkit_ (capybara-webkit) driver registration for system testing (they will be removed in Rails 7.1) and add _cuprite_ instead.  
  
[Create database via UI when ActiveRecord::NoDatabaseError](https://github.com/rails/rails/pull/39723)  
This PR adds the possibility to create the database via the UI when database has not been created in development mode.  
  
[Add ActiveRecord::QueryMethods#in\_order\_of](https://github.com/rails/rails/pull/42061)  
_#in\_order\_of_ allows you to specify an explicit order that you'd like records returned in based on a SQL expression, for instance: _Post.in\_order\_of(:id, [3, 5, 1])_  
  
[Support for byte ranges in Active Storage](https://github.com/rails/rails/pull/41437)  
This PR allows serving uploads in chunks in order to stream buffered files as is required e.g. audio podcasts from S3 to an iPhone.  
  
[Replace Byebug with ruby/debug](https://github.com/rails/rails/pull/43187)  
Ruby 3.1 will launch with a new first-class [debugger](https://github.com/ruby/debug) that works great with Rails.&nbsp;   
Let's all appreciate the many years Byebug has helped us ship software.  
  
[Add SSL support for postgresql in "bin/rails dbconsole"](https://github.com/rails/rails/pull/43118)  
This PR fixes the _dbconsole_ command when used with PostgreSQL to support encrypted connections.  
  
[Introduce ActiveModel::API](https://github.com/rails/rails/pull/43223)  
Make _ActiveModel::API_ the minimum API to talk with Action Pack and Action View. This will allow adding more functionality to _ActiveModel::Model_.  
  
[GitHub Codespaces configuration](https://github.com/rails/rails/pull/43061)  
This PR adds support for [GitHub Codespaces](https://github.com/features/codespaces), which allows contributors to easily boot a fully functional environment to create patches and test changes to Rails.  
  
[Standardised error reporting interface](https://github.com/rails/rails/pull/43625)  
_Rails.error_ is a new error reporting interface, with two block based methods. _handle_, which swallows errors and forwards them to the subscribers:  
&nbsp; &nbsp;_Rails.error.handle do 1 + '1' # raises TypeError end 1 + 1 # This will be executed_  
  
and _record_, which forwards the errors to the subscribes but lets it continue rewinding the call stack:  
&nbsp; &nbsp; _Rails.error.record do 1 + '1' # raises TypeError end 1 + 1 # This won't be executed._  
  
For cases where the blocked based API isn't suitable, the lower level _report_ method can be used:  
  
&nbsp; &nbsp; _Rails.error.report(error, handled: true / false)_  
  
[529 amazing people](https://contributors.rubyonrails.org/contributors/in-time-window/20210101-20211231) contributed 3716 commits to Rails this year! A [new major version of Rails](https://rubyonrails.org/2021/12/15/Rails-7-fulfilling-a-vision) has been released recently, including features like At-Work Encryption with Active Record, Async Query Loading, Zeitwerk code loader better CSS and Javascript bundling, and Rails also got a new website and booting screen!  
Thanks for everyone and see you next year!

