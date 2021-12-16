---
layout: post
title: "This Week in Rails: params encoding, better logging and more!"
categories: news
author: repinel
published: true
date: 2016-08-12
---

Hello! This is [Roque](https://twitter.com/repinel) covering latest events from the Rails community. Like in Rio, our week was busy with plenty of amazing participants #Rio2016 🇧🇷

## Featured

### [Security releases!](https://rubyonrails.org/2016/8/11/Rails-5-0-0-1-4-2-7-2-and-3-2-22-3-have-been-released)

New Rails versions are released with many important security fixes. If you have not done already, do not drop the ball and upgrade as soon as possible.

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160806-20160812)

This week 29 code athletes contributed to Rails. We also got 1 first time contributor. Welcome aboard the Rails Games!

### [Allow specifying encoding of parameters by action](https://github.com/rails/rails/pull/26092)

Controllers can list the parameters with _parameter\_encoding_, providing the action and the encoding type.  
This allows parameters in the same request to have particular encoding types.

## Fixed

### [Fix thread\_mattr\_accessor class leaking](https://github.com/rails/rails/pull/25681)

_thread\_mattr\_accessor_ was sharing the variable with superclasses and subclasses. Setting the variable in one would compromise the other.

### [Fix the Accept header overwritten issue in integration tests](https://github.com/rails/rails/pull/26003)

XHR integration tests were overwriting the _Accept_ header and creating inconsistency with _HTTP\_ACCEPT_.

## Improved

### [Better logging of cached partial renders](https://github.com/rails/rails/pull/25825)

A while ago, [DHH suggested an improvement](https://github.com/rails/rails/issues/23879) to better log cached partial renders. It looks pretty clean!

### [Show error message when Rails runner fails](https://github.com/rails/rails/pull/24260)

The Rails runner will now give you a hint of what is going on whenever it fails with an exception.

## Wrapping Up 

That's it from This Week in Rails! There were many other great code athletes, too numerous to list here, but feel free to [check them out](https://github.com/rails/rails/compare/master@%7B2016-08-06%7D...@%7B2016-08-12%7D)!

Until next week!

