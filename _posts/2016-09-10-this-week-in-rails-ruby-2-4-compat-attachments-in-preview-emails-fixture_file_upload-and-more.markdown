---
layout: post
title: "This Week in Rails: Ruby 2.4 compat, attachments in preview emails, fixture_file_upload and more!"
categories: news
author: prathamesh
published: true
date: 2016-09-10
---

Howdy everyone!

This is [Prathamesh](https://twitter.com/_cha1tanya) bringing you the changes from this week in Rails!

## Featured

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160903-20160909)

This week we had 22 awesome people making Rails better. We also had 3 people contributing for the first time.&nbsp;

### [One more step towards Ruby 2.4 compatibility](https://github.com/rails/rails/pull/25758)

[Ruby 2.4 is coming!](https://www.ruby-lang.org/en/news/2016/09/08/ruby-2-4-0-preview2-released) If you have already tried it with Rails 5, a [**_key must be 32 bits_**](https://github.com/rails/rails/issues/25185) error was raised due to a [breaking change](https://github.com/ruby/ruby/commit/ce635262f53b760284d56bb1027baebaaec175d1) in Ruby 2.4 related to openssl cipher key lengths. It is now fixed, while keeping backward compatibility with any existing signed data. 🎉

## Improved

### [Allow download of email attachments in the Mailer Previews](https://github.com/rails/rails/pull/26371)

Now we can download email attachments in mailer previews similar to real-world emails thanks to this change.

## Fixed

### [Make fixture\_file\_upload work in integration tests](https://github.com/rails/rails/pull/26384)

This change makes sure that the&nbsp; **_fixture\_file\_upload_** &nbsp; test helper works properly in integration tests. In case you missed it, integration tests are the default way of testing controllers in Rails 5.

### [Use proper test adapter for Active Jobs inheriting from ApplicationJob](https://github.com/rails/rails/pull/26391)

Rails 5 introduced **_ApplicationJob_** as the default base class for Active Job classes. When testing these classes, the proper test adapter was not being invoked due to looking for _subclasses_ of **_ActiveJob::Base_** instead of its _descendants_. This change fixes it.

## Wrapping Up

Although I enjoyed reviewing all the commits from the last week, there were as usual too many to mention exhaustively. But do check them out yourself [here](https://github.com/rails/rails/compare/master@%7B2016-09-03%7D...@%7B2016-09-09%7D)!
&nbsp;
Until next week!
