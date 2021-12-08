---
layout: post
title: "This week in Rails: strong ETag validators, Action Cable enhancements and more!"
categories: news
author: repinel
published: true
date: 2016-04-08
---

Hello everyone! This is [Roque](https://twitter.com/repinel) bringing the latest news from Rails. Hope you enjoy, and see y'all at the RailsConf in a month!

## Featured

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160401-20160408)

This week 39 people contributed to Rails. We also got 11 first time contributors. Welcome aboard folks and keep it going!

### [Strong ETag validators](https://github.com/rails/rails/pull/24387)

Strong ETag is now available in addition to weak ETag. It implies that the response should be exactly the same and byte by byte identical. Useful when doing things like Range requests within a large video or PDF file.

### [Action Cable protocol negotiation](https://github.com/rails/rails/pull/24224)

Action Cable will gracefully disconnect clients and disable the monitor if the protocol has changed. This allows clients to gradually move to the newest version.

## Improved

### [Allow passing record being validated to error message generator](https://github.com/rails/rails/pull/24119)

The record being validated is now accessible from the message proc to generate custom error messages like:
`proc { |record, data| "#{data[:attribute]} failed with value #{record.name}." }`

### [Add non-US format support to number\_to\_phone](https://github.com/rails/rails/pull/24401)

Need to format a non-US phone number? You can now use `number_to_phone` with the `:pattern` option as a Regexp.

## Fixed

### [Fixed duplicated emails issue with Sendmail](https://github.com/rails/rails/pull/24436)

There was an issue with Action Mailer when calling Sendmail with the `-t` argument. Sendmail would scan messages for recipients, and it could result in duplicated emails.

### [Fixed the String#to\_time behaviour to match Ruby's](https://github.com/rails/rails/commit/9c2c677d903bcdea3feb1cad6c6d4c8c07cc8034)

Previously, the method returned today's midnight time when there was no relevant information in the string. Now it returns `nil`.

## Wrapping Up

That's all for This week in Rails. As always, there are plenty of things we're not able to cover here, so take a look at the [changes](https://github.com/rails/rails/compare/master@%7B2016-04-02%7D...@%7B2016-04-08%7D) yourself.

Until next time!
