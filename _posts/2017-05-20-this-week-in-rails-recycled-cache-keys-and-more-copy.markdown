---
layout: post
title: "This Week in Rails: Recycled cache keys and more!"
categories: news
author: gregmolnar
published: true
date: 2017-05-20
---

Hi there! This is [Greg](https://twitter.com/gregmolnar) with the latest news about Rails!

## Featured

### [This Week's Rails contributors!](http://contributors.rubyonrails.org/contributors/in-time-window/20170512-20170519)

22 person worked on making Rails better this week. Big thanks to them!   
If you want to be a part of that, check the [issues list](https://github.com/rails/rails/issues)!

## New

### [Recyclable cache keys](https://github.com/rails/rails/pull/29092)

With this change Rails, will be able to recycle the cache keys and if you have big volume cache write, your cache space will be better utilised.

## Fixed

### [Allow irb options to be passed from `rails console` command](https://github.com/rails/rails/pull/29010/files)

Pre Rails 5, the rails console accepted irb options, but a change in Rails 5 break that feature. Now it is fixed, so you can pass the options like this:&nbsp; **rails c -- --simple-prompt**.

## Improved

### [Respect `SchemaDumper.ignore_tables` in databases structure dump](https://github.com/rails/rails/pull/29077)

This change makes Active Record respect the ignored tables if you configured any.  
  


### [Don't cache locally if unless_exist was passed](https://github.com/rails/rails/pull/29083)

If your cache backend supports the **unless\_exist** option, you can configure Rails to delete the local cache and read the correct value from the backend.  
  


That's it for this week, as always, we couldn't cover all of the changes, but feel free to check the [commits](https://github.com/rails/rails/compare/master@%7B2017-05-12%7D...@%7B2017-05-19%7D) if you are interested.  
Until next week!
