---
layout: post
title: "This Week in Rails: Rails 5.2 beta, new PostgreSQL features, preload link and more!"
categories: news
author: repinel
published: true
date: 2017-12-03
---

Hello everyone! This is [Roque](https://twitter.com/repinel) bringing you the latest news from the Rails world.

### [Rails 5.2.0 beta released 🎉](https://rubyonrails.org/2017/11/27/Rails-5-2-Active-Storage-Redis-Cache-Store-HTTP2-Early-Hints-Credentials)

This release includes [Active Storage](https://github.com/rails/rails/blob/d3893ec38ec61282c2598b01a298124356d6b35a/activestorage/README.md), a new framework provided by Rails to make it easier to upload and process files.

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20171127-20171202)

24 people contributed to Rails the past week! If you'd like to join them, why not check out the list of [open issues](https://github.com/rails/rails/issues)?

### [Add support for PostgreSQL operator classes to `add_index`](https://github.com/rails/rails/pull/19090)

The operator classes identify database operators to be used by the index for the columns. You can assign the same operator to all columns, or not.
It currently only supports PostgreSQL.

### [Add ability to create PostgreSQL foreign keys without validation](https://github.com/rails/rails/pull/27756)

Normally, PostgresSQL verifies that all rows in a table satisfy its foreign keys constraints. With this option, you can create these constraints without the overhead of checking if they are valid.

### [Add `preload_link_tag` helper](https://github.com/rails/rails/pull/31251)

The helper creates a link tag with the [`preload`](https://w3c.github.io/preload) keyword that allows you to basically define resources that pages will need very soon after loading. In addition, Rails will send [HTTP2 Early Hints if the proxy server supports it](http://eileencodes.com/posts/http2-early-hints), helping the fetch process.

### [Prevent Active Record scopes with reserved names](https://github.com/rails/rails/pull/31179)

An error will be raised when defining scopes with names already defined by `ActiveRecord::Relation` instance methods.


That's it for this week, as always, we couldn't cover all of the changes, but feel free to check the [commits](https://github.com/rails/rails/compare/master@%7B2017-11-27%7D...@%7B2017-12-02%7D). If you'd like to join them, check out the list of [open issues](https://github.com/rails/rails/issues). Until next week!
