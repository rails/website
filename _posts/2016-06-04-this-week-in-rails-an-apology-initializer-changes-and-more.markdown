---
layout: post
title: "This Week in Rails: An Apology, Initializer Changes, and More!"
categories: news
author: chancancode
published: true
date: 2016-06-04
---

Hey, team. [Todd](https://twitter.com/toddbealmear) here, bringing you another edition of This Week in Rails! Due to a scheduling mishap, we missed an issue last week - we won't cover it here, but I encourage you to check out the [repo activity](https://github.com/rails/rails/compare/master@%7B2016-05-20%7D...@%7B2016-05-28%7D) during that period.

Anyway, let's get to the exciting stuff from this week!

## Featured

### [This Week in Rails – Now in Korean!](http://suhanlee.github.io/2016/ruby-2-4-integer-action-mailer-rescued-and-more.html)

First off, a very special thanks to [Suhan Lee](http://suhanlee.github.io/about) for translating our newsletter into Korean! He's going to try to translate each newsletter going forward. If you're interested in providing more translations, feel free to get in touch with [Godfrey](https://twitter.com/chancancode).

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160528-20160603)

We had 25 of you lovely individuals contribute code and documentation to Rails this week. You all rock! Keep the contributions coming!

## New Stuff

### [Collapse Default Initializers Into a Single File](https://github.com/rails/rails/pull/25231)

A late addition to Rails 5: default Rails initializers will no longer live in their own files. Instead, a new `new_framework_defaults.rb` file will be included in new apps generated with Rails 5.

## Improved

### [Add `WebSocket` and `logger` Configuration Options for Action Cable](https://github.com/rails/rails/pull/25170)

You can now configure your own WebSocket and logger options when using Action Cable.

### [Slim Down Active Record YAML Dumps](https://github.com/rails/rails/commit/c4cb6862babd2665a65056e205c2a5fd17a5d99d)

This patch decreases the size of model dumps to YAML - in some cases by a whopping 80%!

## Fixed 

### [Fixed Issue Chaining `#exists?` to `#includes`](https://github.com/rails/rails/commit/02da8aea832485044fde1b94c021a66d37d54dec)

Sean was able to fix an issue where chaining `#exists?` on `#includes` would raise an error. It sounds like there's more work to do here yet, so I encourage giving the commit message a look-see.

### [`ActiveRecord::Base#hash` Should Differ Between Classes](https://github.com/rails/rails/commit/c8be4574a2a35c896560ff58b26111ad6dd9d60f)

Previously, there was an issue where it was possible to have collisions if `#hash` was called on two different models with the same ID. This is now fixed on master.

### [Remove OpenSSL Deprecation Warnings](https://github.com/rails/rails/pull/25194)

This patch fixes deprecation warnings caused by the `OpenSSL::Cipher::Cipher` namespace changing to simply `OpenSSL::Cipher`.

## Wrapping Up 

That's a wrap for This Week in Rails! There were plenty of other things going on, so feel free to jump in and [check them out yourself](https://github.com/rails/rails/compare/master@%7B2016-05-14%7D...@%7B2016-05-20%7D)!

See you next week!

