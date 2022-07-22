---
layout: post
title: "Bugfixes, performance improvements and more!"
categories: news
author: gregmolnar
published: true
date: 2022-07-22
---

Hi, this is [Greg](https://twitter.com/gregmolnar), bringing you the latest news from the Rails world.

[Fix caching of missed translations](https://github.com/rails/rails/pull/45572)
Using _Object.new_ for the default value of a missing translation caused the cache store to return a different object when being fetched from the cache. This PR changes the default to an integer, which resolves the problem.

[Add endless range example to the Active Record Querying guide](https://github.com/rails/rails/pull/45617)
Beginless/endless ranges can be used to create less than/greater than conditions with Active Record, but that was an undocumented feature before this PR added it to the Rails Guides.

[Prevent ActionDispatch::ServerTiming from overwriting existing header value](https://github.com/rails/rails/pull/45615)
This change fixes the issue of _ActionDispatch::ServerTiming_ overwriting instead of appending to the Server-Timing header.

[Allow to use pre-defined variants for previews](https://github.com/rails/rails/pull/45098)
This PR adds the ability to use pre-defined variants when calling _preview_ or _representation_ on an attachment. For instance:


    class User \< ActiveRecord::Base has\_one\_attached :file do |attachable| attachable.variant :thumb, resize\_to\_limit: [100, 100] end end \<%= image\_tag user.file.representation(:thumb) %\>


[Speedup ActionView::OutputBuffer](https://github.com/rails/rails/pull/45614)
Ruby 3.2 noticeably improved the performance of String#\<\< so by using a String instance instead of a String subclass there are performance gains.


Since last week, [17 people](https://contributors.rubyonrails.org/contributors/in-time-window/20220715-20220721) contributed to Rails. As usual, there are too many changes to cover them all, but you can check out all of them [here](https://github.com/rails/rails/compare/main@%7B2022-07-15%7D...main@%7B2022-07-22%7D). Until next time!
