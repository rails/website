---
layout: post
title: "This Week in Rails: HTTP/2 Early hints, friendly error message and more!"
categories: news
author: _cha1tanya
published: true
date: 2017-10-08
---

Hi there! It's [Prathamesh](https://twitter.com/_cha1tanya) from Pune, enjoying rain 🌧, sipping ☕️ coffee&nbsp; and bringing you latest news from the Rails world. Let's get started!

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20170930-20171006)

13 people contributed to Rails the past week! If you'd like to join them, why not check out the list of [open issues](https://github.com/rails/rails/issues)?

### [HTTP2 early hints support for Rails](https://github.com/rails/rails/pull/30744)

Early Hints is a new HTTP status code that allows your application to send links to assets that you would like to load early. The [spec](https://tools.ietf.org/html/draft-ietf-httpbis-early-hints-04) is still in draft but Rails is ready to support it along with [Puma](https://github.com/puma/puma/pull/1403). Check [this blog post](http://eileencodes.com/posts/http2-early-hints) to know more about this feature.

### [Friendly error message when unsubscribing from non-existent Action Cable subscription](https://github.com/rails/rails/pull/30702)

If for some reason the frontend code tries to unsubscribe from a non existing Action Cable subscription, then a friendly error message will be displayed:  
  
**_Unable to find subscription with identifier: {"channel":"SomeChannel"}._**  
  
Earlier, it used to show:   
  
**_NoMethodError - undefined method `unsubscribe\_from\_channel' for nil:NilClass_**  
  

Feel free to check out the [full list of changes](https://github.com/rails/rails/compare/master@%7B2017-09-30%7D...@%7B2017-10-06%7D).  
  
Thanks to the 13 people contributed to Rails last week. If you'd like to join them, check out the list of [open issues](https://github.com/rails/rails/issues). Until next week 👋&nbsp;  
  
  

