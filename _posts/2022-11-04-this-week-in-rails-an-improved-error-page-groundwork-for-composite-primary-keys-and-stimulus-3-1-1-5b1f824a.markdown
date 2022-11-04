---
layout: post
title: "An improved error page, groundwork for composite primary keys and Stimulus 3.1.1 "
categories: news
author: petrik
published: true
date: 2022-11-04
---

Hi, Petrik here with this week's news from the Rails world.  
  

[Improve the "missing template" error page](https://github.com/rails/rails/pull/46342)  
This error page got a nice overhaul with clearer wording, making it more helpful, especially for beginners.  
  

[Allow specifying columns to use in ActiveRecord::Base object queries](https://github.com/rails/rails/pull/46331)  
Support for composite primary keys in Rails is [getting prioritized](https://discuss.rubyonrails.org/t/rfc-finally-support-composite-primary-keys/81368/12). This change is fundamental for supporting composite primary keys in Rails and utilizing tenant based sharding.  
  
[Fix&nbsp;_Time#change_&nbsp;and&nbsp;_Time#advance_&nbsp;for times around the end of Daylight Saving Time](https://github.com/rails/rails/pull/46251)  
Previously, when&nbsp;_Time#change_ or&nbsp;_Time#advance_ constructed a time inside the final stretch of Daylight Saving Time (DST), the non-DST offset would always be chosen for local times. This commit fixes&nbsp;_Time#change_ and&nbsp;_Time#advance_ to choose the offset that matches the original time's offset when possible.  
If you are like me and find Daylight Saving Time confusing, the PR has better examples. 😄  
  
[Stimulus 3.1.1 has been released](https://github.com/hotwired/stimulus/releases/tag/v3.1.1)  
This release fixes a memory leak and adds support for support custom Action Options.

  
There were [19](https://contributors.rubyonrails.org/contributors/in-time-window/20221028-20221104) contributors to Rails this week. You can browse all the changes [here](https://github.com/rails/rails/compare/@%7B2022-10-22%7D...main@%7B2022-10-28%7D).  
Until next time.

<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
