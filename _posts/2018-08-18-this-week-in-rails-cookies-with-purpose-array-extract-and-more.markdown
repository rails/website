---
layout: post
title: "Cookies with purpose, Array extract! and more"
categories: news
author: morgoth85
published: true
date: 2018-08-18
---

Welcome in this week news edition from Rails world. This is [Wojtek](https://twitter.com/morgoth85) bringing you summary of latest activities.

### [Once Webpacker is the default in rails/master, we'll be unveiling the alpha version of a brand-new exciting framework for Rails 6.0 😄.](https://twitter.com/dhh/status/1028355448808792064)

If you can't wait, help us testing Webpacker integration so it can be [merged](https://github.com/rails/rails/pull/33079) and mystery revealed.

### [Add Purpose Metadata to Cookies](https://github.com/rails/rails/pull/32937)

Adds _purpose_ metadata to cookies so that the value of one cookie cannot be copied and used as the value of another cookie.

### [Add Array#extract! ](https://github.com/rails/rails/pull/33137)

The method removes and returns the elements for which the block returns a true value.  


    numbers = [1, 2, 3, 4]
    odd_numbers = numbers.extract!(&:odd?) # => [1, 3]
    numbers # => [2, 4]


### [Replace rake dev:cache with Rails command](https://github.com/rails/rails/pull/33559)

Rake task is now deprecated in favor of "_rails dev:cache"_

[24 people](https://contributors.rubyonrails.org/contributors/in-time-window/20180812-20180818) contributed to Rails this week. You can see all the changes [here](https://github.com/rails/rails/compare/master@%7B2018-8-12%7D...master@%7B2018-08-18%7D).  
Until next time!
