---
layout: post
title: "This Week in Rails: Active Support deprecations and more!"
categories: news
author: imtayadeway
published: true
date: 2016-11-18
---

Hello everyone!

[Tim](https://twitter.com/imtayadeway) here bringing you all the latest from This Week in Rails.....

## Featured

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20161112-20161118)

This week 29 lovely people contributed to Rails, including an incredible 9 for the time! Why not put yourself in the next installment of This Week in Rails by tackling one of the [open issues](https://github.com/rails/rails/issues) out there?

## Improved

### [Remove Active Support deprecations](https://github.com/rails/rails/pull/27035)

In preparation for the 5.1 release, methods marked as deprecated in 5.0 are being removed. If you've been seeing any of these warnings, you need to get on 'em now! Notably, this PR waves goodbye to 'alias\_method\_chain' , which was made obsolete by Ruby 2.0+'s 'Module#prepend'

## Fixed

### [Support AC::Parameters for PG HStore](https://github.com/rails/rails/pull/27058)

As of Rails 5, Active Record determines that a value needs to be serialized if it is a 'Hash' object. If passed an 'ActionController::Parameters' object instead (which no longer inherits from 'Hash' ), serialization would break. This change restores the original behavior.

### [Fix JSON encoding of "Infinity" and "NaN" values](https://github.com/rails/rails/pull/26933)

If 'as\_json' returns "Infinity" or "NaN" for any value, it causes 'JSON.generate' to 💥 because these values are not allowed in JSON. Instead of being treated as primitives, 'as\_json' is called on these values recursively, so that they are properly serialized as "null". Phew!

### [Fix incorrect output from rails routes when using singular resources](https://github.com/rails/rails/pull/27089)

'rails routes' was showing some incorrect output if you had singular resources defined. Specifically, routes for the # 'show' action would appear under the "edit" helper, which is clearly wrong. Thanks to the rjigging of the order in which they appear in this PR, your routes should now be correct!

### [Correctly count new records when calling uniq on associations](https://github.com/rails/rails/pull/26980)

If 'CollectionProxy' has more than one new record, a call to 'uniq' would yield the wrong result. This was because this method was aliased to 'distinct' , which is really a different concept. The original behavior was restored thanks to this reversion.

## Wrapping up

That's it from This Week in Rails! There were many other great contributions, too numerous to list here, but feel free to [check them out](https://github.com/rails/rails/compare/master@%7B2016-11-12%7D...@%7B2016-11-18%7D)!

Until next week!
