---
layout: post
title: "Rails 5.2.1, skip caching nil entries and more"
categories: news
author: _cha1tanya
published: true
date: 2018-08-11
---

Namaste everyone! This is [Prathamesh](https://twitter.com/_cha1tanya) bringing you the latest news from the Rails world with some rain and chai from Pune.

### [Rails 5.2.1 is out in the wild](https://rubyonrails.org/2018/8/7/Rails-5-2-1-has-been-released)

Rails 5.2.1 is [released](https://rubyonrails.org/2018/8/7/Rails-5-2-1-has-been-released). Give it a try and check out all the awesome features.

### [Better error handling of Active Storage adapters](https://github.com/rails/rails/pull/33540)

Now, the Active Storage service adapter names can be lower case or upper case. Also, a nice error message is printed if the service adapter class can't be loaded.

### [Support for skipping caching of nil entries](https://github.com/rails/rails/pull/25437)

While caching data from external services, sometimes we may get _nil_ values. Most probably we don't want to cache them. Here is an option _skip\_nil: true/false_ to skip caching of such entries.

### [Fix the issue of build not getting called on extension for has_many association](https://github.com/rails/rails/pull/33454)

Earlier, the extended _build_ method was not called properly for the _has\_many_ association which was being accepted by using _accepts\_nested\_attributes\_for_.  
  
This issue is fixed now.

[19 people](https://contributors.rubyonrails.org/contributors/in-time-window/20180805-20180811) contributed to Rails this week. Four of them contributed for the first time! Do you also want to join them? There might be some [open issues](https://github.com/rails/rails/issues) you can try tackling?  
  
See all the changes&nbsp; from last week [here](https://github.com/rails/rails/compare/master@%7B2018-8-5%7D...master@%7B2018-08-11%7D) and stay tuned for next week. 👋
