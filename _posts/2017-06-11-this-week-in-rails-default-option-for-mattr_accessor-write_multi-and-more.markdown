---
layout: post
title: "This Week in Rails: default option for mattr_accessor, write_multi and more!"
categories: news
author: prathamesh
published: true
date: 2017-06-11
---

Hello everyone! [Prathamesh](https://twitter.com/_cha1tanya) here bringing you the latest news from the Rails world. Let's get started 🚅

## Featured

### [🎉 This Week's Rails contributors! 🎉](http://contributors.rubyonrails.org/contributors/in-time-window/20170604-20170611)

We had 21 awesome people who helped make Rails better this week. Two of them contributed for the first time ever!
Would you like to help as well? Head over to the 👉&nbsp;[issues list](https://github.com/rails/rails/issues).

## New

### [💪 mattr_accessor gets the `default` option 💪](https://github.com/rails/rails/pull/29294)

Followup to adding the **default** option to the **class\_attribute** macro, it is now added to **mattr\_accessor** family of methods as well.

It can be used as follows:

**_mattr\_accessor :always\_write\_cookie, default: false_**



### [💪 Write multiple cache entries at once with write_multi 💪](https://github.com/rails/rails/pull/29366)

A new method **write\_multi** has been added to the cache stores which writes multiple cache entries at once.

For eg.

**_Rails.cache.write\_multi foo: 'bar', baz: 'qux'_** The default implementation just calls **write\_entry** one by one for each entry but specific cache stores can override this behavior as per their ability of doing bulk writes.



## Fixed

### [⚡️ Generate field ids in `collection_check_boxes` and `collection_radio_buttons` ⚡️](https://github.com/rails/rails/pull/29412)

This change fixes an issue with collection checkboxes and radio boxes where clicking on the labels was not selecting the options because the input elements did not have proper id attribute with respect to their labels.

### [✨ Fix partial cache logging getting attributed to wrong partials ✨](https://github.com/rails/rails/commit/8240636beda7b2b487217be1d945eb0d36145c4d)

This commit fixes an issue with the cache hit/miss log markers being applied to wrong partials.

That's it for this week, as always, we couldn't cover all of the changes, but feel free to check all the [commits](https://github.com/rails/rails/compare/master@%7B2017-06-04%7D...@%7B2017-06-11%7D) from this week.

Until next week! 👋👋
