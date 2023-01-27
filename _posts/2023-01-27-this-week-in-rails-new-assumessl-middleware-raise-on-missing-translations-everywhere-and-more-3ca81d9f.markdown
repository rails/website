---
layout: post
title: "New AssumeSSL middleware, raise on missing translations everywhere, and more"
categories: news
author: morgoth85
published: true
date: 2023-01-27
---

Hi, it's [Wojtek](https://twitter.com/morgoth85). Let's explore this week's changes in the Rails codebase.  
  
[**Rails 7.0.4.2 and 6.1.7.2 have been released**](https://rubyonrails.org/2023/1/24/Rails-7-0-4-2-and-6-1-7-2-have-been-released)  
Released 7.0.4.2 and 6.1.7.2 versions addressing a compatibility issue with the 7.0.4.1 and 6.1.7.1 security releases from last week.  
  
[**Allow use of SSL-terminating reserve proxy that doesn't set headers**](https://github.com/rails/rails/pull/47139)  
Add _ActionDispatch::AssumeSSL_ middleware that can be turned on via _config.assume\_ssl_. It makes the application believe that all requests are arriving over _SSL_. This is useful when proxying through a load balancer that terminates _SSL_, the forwarded request will appear as though it's _HTTP_ instead of _HTTPS_ to the application. This makes redirects and cookie security target _HTTP_ instead of _HTTPS_. This middleware makes the server assume that the proxy already terminated _SSL_, and that the request really is _HTTPS_.  
  
[**Control log level with RAILS\_LOG\_LEVEL in production**](https://github.com/rails/rails/pull/47143)

Makes it easier to switch to debug mode when needed without changing the code.  
  
[**Make raise\_on\_missing\_translations raise on any missing translation**](https://github.com/rails/rails/pull/47105)

Previously it would only raise when called in a view or controller. Now it will raise anytime _I18n.t_ is provided with an unrecognized key.  
  
[**Active Record's explain method now accepts options**](https://github.com/rails/rails/pull/47043)  
For databases and adapters which support them (currently _PostgreSQL_ and _MySQL_), options can be passed to _explain_ to provide more a detailed query plan analysis.  
  
[**Update Action Text's Trix dependency**](https://github.com/rails/rails/pull/46447)  
The bundled version of Trix was updated from version 1.3 to [version 2.0](https://github.com/basecamp/trix/releases/tag/v2.0.0).  
  
You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-01-20%7D...main@%7B2023-01-27%7D). We had [24 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230120-20230127) to the Rails codebase this past week!  
Until next time!

<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
