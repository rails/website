---
layout: post
title: "Documentation on preloading STIs, TimeHelpers improvement, etc"
categories: news
author: Emmanuel Hayford
published: true
date: 2022-12-16
---

नमस्ते, This is [Emmanuel Hayford](https://twitter.com/siaw23) with some updates from Rails!

[Hide changes to before\_committed! behaviour behind config](https://github.com/rails/rails/pull/46739)
This PR introduces a new configuration option that will enable _before\_committed!_ callbacks on all enrolled records in a transaction by default in Rails 7.1. Previously, callbacks were only run on the first copy of a record if there were multiple copies of the same record enrolled in a transaction.

[TimeHelpers: include with\_usec keyword parameter on travel & freeze too](https://github.com/rails/rails/pull/46663)
_ActiveSupport::Testing::TimeHelpers_ now accepts a named _with\_usec_ argument to _freeze\_time_, _travel_, and _travel\_to_ methods. Passing true prevents truncating the destination time with _change(usec: 0)_.

[Allow f.select to be called with a single hash containing options and HTML options](https://github.com/rails/rails/pull/46629)
_select_ can now be called with a single hash containing options and some HTML options.
Previously, this would not work as expected:

 _\<%= select :post, :author, authors, required: true %\>_

 Instead, you needed to do this:

 _\<%= select :post, :author, authors, {}, required: true %\>_

&nbsp;Now, either form is accepted, for the following HTML attributes: _required_, _multiple_, _size_.

[Fix inconsistent behavior in form helper date/time tags with options](https://github.com/rails/rails/pull/46678)
DateTime form helpers (_time\_field_, _date\_field_, _datetime\_field_, _week\_field_, _month\_field_) now accept an instance of _Time_, _Date_ and _DateTime_ as _:value_ option.

Previously we had:
_\<%= form.datetime\_field :written\_at, value: Time.current.strftime("%Y-%m-%dT%T") %\>_

And now:
_\<%= form.datetime\_field :written\_at, value: Time.current %\>_

[Document four ways to preload STIs](https://github.com/rails/rails/commit/01bc3a4971068917e755bc0e15e6852cd65edfa9)
This PR documents a couple of ways to preload STIs. The document is on [Edge Rails Guides](https://edgeguides.rubyonrails.org/autoloading_and_reloading_constants.html) and you can read all about it.

Thanks to the [26 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20221209-202201216) we had in the last week!

Talk to you next week.


<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
