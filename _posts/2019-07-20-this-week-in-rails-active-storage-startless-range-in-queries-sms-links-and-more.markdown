---
layout: post
title: "Active Storage, startless range in queries, SMS links and more!"
categories: news
author: repinel
published: true
date: 2019-07-20
---

Hello! This is [Roque](https://twitter.com/repinel) bringing the latest news from the Rails community. It's been awhile so let's see what has changed since then... Oops, since last week 😜

### [Preserve existing attachment assignment behavior for app upgraded to Rails 6.0](https://github.com/rails/rails/pull/36716)

Assigning a collection of attachments appends to the collection as it did in 5.2. Existing 5.2 apps that rely on this behavior will no longer break when they're upgraded to 6.0.
For Apps generated on 6.0, assigning replaces the existing attachments in the collection. `#attach` should be used to add new attachments to the collection without removing existing ones.

### [Support startless ranges in queries](https://github.com/rails/rails/pull/36696)

Add support to [startless ranges](https://bugs.ruby-lang.org/issues/14799) (_e.g._ `..10` and `..Date.today`), introduced by [Ruby 2.7.0-preview1](https://www.ruby-lang.org/en/news/2019/05/30/ruby-2-7-0-preview1-released), to Active Record queries. This enables expression like `Order.where(created_at: ..1.year.ago)`.

### [Helper method to create an SMS link](https://github.com/rails/rails/pull/36511)

When the users click the SMS link, their messaging app opens with the phone number and optional message body set in the link.

### [Superclass for aborted queries](https://github.com/rails/rails/pull/36694)

The class `ActiveRecord::QueryAborted` makes it possible, for example, to rescue all possible query timeouts without rescuing other query exceptions.

### [Add `--skip-collision-check` option to the Rails generator](https://github.com/rails/rails/pull/36603)

This allows the generator for 6.0 to behave like it used to in 5.2, and overwrite files.

[18 people](https://contributors.rubyonrails.org/contributors/in-time-window/20190716-20190720) contributed to Rails in the last week. Want to see your name on that list? Check out the list of [issues](https://github.com/rails/rails/issues) here.

Until next time!
