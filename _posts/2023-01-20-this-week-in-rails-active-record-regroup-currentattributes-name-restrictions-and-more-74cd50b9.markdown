---
layout: post
title: "Active Record regroup, CurrentAttributes name restrictions and more!"
categories: news
author: gregmolnar
published: true
date: 2023-01-20
---

Hola, this is [Greg](https://greg.molnar.io), bringing you the latest changes from Rails.  
  
[Raise exception when if a restricted attribute name is used with CurrentAttributes](https://github.com/rails/rails/pull/47017)  
Attribute names like _set_ and _reset_ should not be used with _ActiveSupport::CurrentAttributes,_ because they clash with its public API. With this change, an _ArgumentError_ is raised when a restricted attribute name is used.  
  
[Add regroup method to Active Record](https://github.com/rails/rails/pull/47010)
This pull request adds _regroup_ and _regroup!_ methods to Active Record. Here is an example on how to use it:

    Post.group(:title).regroup(:author)

  
[Change assert\_emails to return the emails that were sent  
](https://github.com/rails/rails/pull/47025)Before this pull request, _assert\_emails_ just returned _true_ or raised if the assertion failed. From now on, if a single email is sent, a single _Mail::Message_ is returned. If multiple emails were sent, an array is returned.  
  

[Rename ::normalize to ::normalize\_value\_for](https://github.com/rails/rails/pull/47034)  
The _::normalize_ method accepts an attribute name and a value, and type casts the value, applying any declared normalizations for the attribute. Because of the way type casting works for most types, the type of the given value can be very different than the attribute type. This allows for potential confusion between the _::normalize_ method and the _::normalizes_ method, so to prevent such confusion, this change renames _::normalize_ to _::normalize\_value\_for_.  
  

We had [28 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230113-20230118) this past week!&nbsp;  
  
Until next time!

  
  

<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
