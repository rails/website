---
layout: post
title: "Arel merged to Active Record, faster image processing and more"
categories: news
author: kirshatrov
published: true
date: 2018-04-29
---

Hello 🌧 from London! This is [Kir](http://twitter.com/kirshatrov), bringing you the latest Rails updates in this episode of the newsletter.

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20180421-20180427)

28 people contributed to Rails in the last week, including 3 for the first time! A big thank you to all of you!

If you'd like to see yourself on that board, why not check out the list of [open issues](https://github.com/rails/rails/issues), or get involved in the [core discussion list](https://groups.google.com/d/forum/rubyonrails-core).

### [Use ImageProcessing gem for Active Storage variants](https://github.com/rails/rails/pull/32471)

ImageProcessing gem provides a wrapper around MiniMagic and ruby-vips, allowing you to change backends on the fly and benefit from libvips being up to 10x faster than ImageMagick.

### [Update 'rails_welcome.png' to reflect a more diverse population](https://github.com/rails/rails/pull/32735)

The Getting Started picture that you can see in new Rails apps was updated with a more diverse population.

### [Support Active Storage attachment in presence validator](https://github.com/rails/rails/pull/31956)

`assert_presence_of` now works with ActiveStorage attachments.

### [Merge Arel to Active Record](https://github.com/rails/rails/pull/32097)

To simplify release management, Arel library hosted in rails/arel has been merged to ActiveRecord, and is now located in rails/rails.

As always there were many more changes to the Rails codebase than we can cover here. But you can read all about them [here](https://github.com/rails/rails/compare/master@%7B2018-04-21%7D...@%7B2018-04-27%7D)! Until next week!
