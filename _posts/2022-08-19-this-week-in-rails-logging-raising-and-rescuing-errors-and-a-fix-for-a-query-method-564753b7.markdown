---
layout: post
title: "Logging, raising and rescuing errors and a fix for a query method."
categories: news
author: siaw23
published: true
date: 2022-08-19
---

Cześć! I'm [Emmanuel](https://manny.codes), and I have some updates for you from Rails.  
  
[Log a warning if ActiveSupport::Cache is given an expiration in the past](https://github.com/rails/rails/pull/45842)  
Imagine trying to write/fetch to/from a cache and the operation fails silently because *expires_at* is in the past... a debugger's nightmare. This PR helps. You won't get an error raised, instead, you'll get "Cache expiration is in the past" in your logs.  
  
[Define and raise error if legacy\_connection\_handling= is called from an app](https://github.com/rails/rails/pull/45835)  
[In Rails 6.0](https://github.com/rails/rails/pull/40370) if you switched to a role, say *reading*, then all database connections would also switch to that role. In Rails 6.1 however, you could set *legacy_connection_handling* to *false* to disable this behaviour. *legacy_connection_handling* was removed in Rails 7 without setting it to *false* by default, causing an error. This PR fixes that by redefining *legacy_connection_handling* and raising an error.  
  
[Fix ActiveRecord::QueryMethods#in\_order\_of to work with nils](https://github.com/rails/rails/pull/45670)  
This PR fixes an issue where an invalid SQL is generated when *nil* is passed to *in_order_of*.  
  
[Rescue EOFError error from rack on a multipart request](https://github.com/rails/rails/pull/45833)  
*EOFError* is added to the list of rescued errors that can arise from a multipart POST request, raising a *ActionController::BadRequest* exception and rendering a *400 Bad Request* instead of *500 Internal Server Error*.  
  
[Add description of breaking changes and the deprecation cycle to guides](https://github.com/rails/rails/pull/45831)  
This PR clarifies the deprecation cycle. This is mostly to help contributors but a good addition to the documentation nonetheless.  
  
We had [11 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20220812-20220817) since last week.  
  
That's it. Do zobaczenia!  
  
  
  
  

