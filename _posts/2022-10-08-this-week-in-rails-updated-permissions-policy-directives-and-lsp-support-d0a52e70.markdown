---
layout: post
title: "Updated Permissions-Policy directives and LSP support?"
categories: news
author: petrik
published: true
date: 2022-10-08
---

Hi, this is [Petrik](https://twitter.com/four54) with this weeks updates in the Rails world.  
  

[Support more Permissions-Policy directives](https://github.com/rails/rails/pull/45427)  
With the [Permissions-Policy header](https://edgeguides.rubyonrails.org/security.html#feature-policy-header) you can allow or block the use of browser features.  
This pull request adds support for directives for the following features: _hid_, _idle-detection, screen-wake-lock, serial, sync-xhr_ and _web-share_.

  

[Deprecate obsolete Permissions-Policy directives](https://github.com/rails/rails/pull/46199)  
The _speaker_, _vibrate_, and _vr_ permissions policy directives are now deprecated. There is no browser support for these directives, and no plan for browser support in the future. You can just remove these directives from your application.  
  

[Allow direct uploads to work within engines](https://github.com/rails/rails/pull/45992)  
Calling direct uploads from inside a Rails Engine failed because _rails\_direct\_uploads\_url_ was looked up in the engine's routes instead of the application's routes. It now uses the _main\_app_ helper to verify if the _rails\_direct\_uploads\_url_ exists.   
  
[Language Server support for Rails apps (WIP)](https://twitter.com/tenderlove/status/1573459777354862592)  
This is very much a work in progress but it looks very promising. [Refreshing](https://github.com/tenderlove/refreshing) is a Language Server that refreshes the Rails app every time you save your buffer. It also communicates errors back to the editor.  
  
This week we had [14](https://contributors.rubyonrails.org/contributors/in-time-window/20221001-20221007) contributors.  
  
Bye!

<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
