---
layout: post
title: "Direct upload mirroring, multiple databases overview and more"
categories: news
author: morgoth85
published: true
date: 2019-06-16
---

Hi there. This is [Wojtek](https://twitter.com/morgoth85) bringing you goodies from the Rails world.

### [Document multiple databases](https://github.com/rails/rails/pull/36389)

Gives a great overview of available multiple database features coming in Rails 6.

### [Mirror direct uploads](https://github.com/rails/rails/pull/36312)

Tells the mirror service to copy the blob from the primary service to any secondary service where it doesn’t already exist.

### [Fix preloading on ActiveRecord::Relation](https://github.com/rails/rails/pull/36429)

Fixes a case where records are duplicated by a join by using a less known _Hash_ method _compare\_by\_identity_.

### [Improve on_rotation in MessageEncryptor](https://github.com/rails/rails/pull/36270)

Allow _on\_rotation_ option in _MessageEncryptor_ to be passed in constructor.

### [Make rescues layout responsive](https://github.com/rails/rails/pull/36306)

Debugging on small devices got a lot easier by adjusting default errors layout. Check the pull request for sample image.

[51 people](https://contributors.rubyonrails.org/contributors/in-time-window/20190519-20190614) contributed to Rails in the last month. You can see the [full list of changes here](https://github.com/rails/rails/compare/master@%7B2019-05-19%7D...@%7B2019-06-14%7D).  
  
Until next time!
