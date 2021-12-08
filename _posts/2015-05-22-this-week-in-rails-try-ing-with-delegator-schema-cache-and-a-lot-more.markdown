---
layout: post
title: "This week in Rails: try'ing with Delegator, schema cache and a lot more"
categories: news
author: _cha1tanya
published: true
date: 2015-05-22 13:21:56 -0700
---

Hey everyone, this is [Prathamesh](https://twitter.com/_cha1tanya). Back with latest spells and bindings from magical world of Rails. Keep your wands ready!

## Featured

### [This week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20150515-201505222000)

39 people got commits into `rails/rails` this week. And 7 of them made their first patch in this week! Checkout the [pulse](https://github.com/rails/rails/pulse) page for more details.

## New Stuff

### [Support for `try` with Delegator](https://github.com/rails/rails/commit/af53280a4b5b3323ac87dc60deb2b1b781197b2b)

`Delegator` will now respond to `try` rather than delegating it to the underlying object. Phew! The surprising behavior when using try with normal objects and delegators is gone finally.

## Improved

### [Copy schema cache to new connection pool after fork](https://github.com/rails/rails/pull/20175)

Active Record does all the heavy lifting of maintaining and creating connection pools. It just got better. Thanks to this patch, it will copy the schema cache of old connections pools to the new ones if one already exists.

## Fixed

### [Quoted sequence names now work with serial?](https://github.com/rails/rails/pull/20190)

Quoted sequence names in PostgreSQL will work properly now with `serial?` method. Before this patch, the `serial?` method would return false if the sequence name was quoted. Finally it's fixed.

## One More Thing™

### [Integer#positive? and Integer#negative? in Ruby core](https://github.com/rails/rails/commit/6c55cffa5bb804fc0291ec4aa82527ec3c57f2d2)

Last week `Integer#positive?` and `Integer#negative?` were added to Rails and this week they became part of [Ruby core](https://bugs.ruby-lang.org/issues/11151). Hooray!

## That's a wrap

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails)!

P.S. If you enjoyed this newsletter, why not share it with your friends? :) If you wish to be part of this project please don't hesitate to [contact Godfrey](mailto:godfrey@brewhouse.io) – there're a lot of ways you could help make this newsletter more awesome!

