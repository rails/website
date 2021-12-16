---
layout: post
title: "A security release, bugfixes and more!"
categories: news
author: gregmolnar
published: true
date: 2020-10-11
---

Hey, this is [Greg](https://twitter.com/gregmolnar), bringing you the latest news about Ruby on Rails!

### [Rails 6.0.3.4 has been released!](https://rubyonrails.org/2020/10/7/Rails-6-0-3-4-has-been-released)

Rails 6.0.3.4 has been released! It is a security release and addresses a possible XSS attack vector in Actionable Exceptions.  
You can read more about the issue [here](https://groups.google.com/g/rubyonrails-security/c/yQzUVfv42jk) and check the commit with the fix [here](https://github.com/rails/rails/commit/ddcca86f0ed5064140924c88cc5ad556d5ce32d4).

### [Optimize ActiveRecord::Relation#include? on an unloaded relation](https://github.com/rails/rails/pull/40323)

This PR introduces an `exists?` call instead of loading the entire relation into memory and that makes it better performing.  
  


### [Fix ActiveRecord::Relation#include? in case where offset is provided](https://github.com/rails/rails/pull/40345)

A follow-up PR for the above improvement, because the original solution broke `includes?` when an offset was provided, but this change covers that case and falls back to loading the relation in case an offset is provided.

### [Support passing record to uniqueness validator's :conditions option](https://github.com/rails/rails/pull/39602)

With this change, it is possible to build conditions based on the record's attributes for a uniqueness validation.  
  


### [Allow for only no-store in cache-control header](https://github.com/rails/rails/pull/39461)

This PR allows one to set the default Cache-Control header to reflect the simple no-store directive exclusively and all other cache directives are dropped when that's set.

[20 people contributed](https://contributors.rubyonrails.org/contributors/in-time-window/20201002-20201011) to Rails the past week! If you want to be part of that, check out the list of [open issues](https://github.com/rails/rails/issues)! Until next week!
