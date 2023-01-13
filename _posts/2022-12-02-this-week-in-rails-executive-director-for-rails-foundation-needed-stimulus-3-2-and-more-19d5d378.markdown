---
layout: post
title: "Executive Director for Rails Foundation needed, Stimulus 3.2 and more"
categories: news
author: morgoth85
published: true
date: 2022-12-02
---

Hi, [Wojtek](https://twitter.com/morgoth85) here with this week's news from the Rails world.  
  
[The Rails Foundation is hiring an Executive Director](https://rubyonrails.org/2022/11/30/rails-foundation-executive-director)  
The Rails Foundation is looking for a full-time executive director to run day-to-day operations, and implement the Rails Core Team's mission to improve the documentation, education, marketing, and events in the Rails ecosystem.  
  
[Improve case sensitivity uniqueness validation for "citext" columns](https://github.com/rails/rails/pull/46592)  
Stop using _LOWER()_ for case-insensitive queries on _citext_ columns. This helps in using database indexes for searching.  
  

[Improve "transliterate" method performance](https://github.com/rails/rails/pull/46586)  
_ActiveSupport::Inflector.transliterate_ does not need to perform any work when the string that is passed to it is already in _ASCII_. This has an impact on the _parameterize_ method as well.  
  
[Make "AbstractAdapter#lock" thread local by default](https://github.com/rails/rails/pull/46553)  
An interesting thread about using a fiber inside a database transaction.  
  
[1.27 million requests per second!](https://twitter.com/rails/status/1598004114591739905)  
When in doubt if Rails scales...
 
[Stimulus 3.2.0 released](https://github.com/hotwired/stimulus/releases/tag/v3.2.0)  
With two big new features - [outlets API](https://github.com/hotwired/stimulus/pull/442) and [keyboard events filter](https://github.com/hotwired/stimulus/pull/442)  
  
You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2022-11-25%7D...main@%7B2022-12-02%7D). We had [29 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20221125-20221202) to the Rails codebase this past week!  
Until next time.

<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
