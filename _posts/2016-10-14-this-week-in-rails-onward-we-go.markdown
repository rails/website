---
layout: post
title: "This Week in Rails: onward, we go!"
categories: news
author: claudiob
published: true
date: 2016-10-14
---

Happy Friday from sunny Los Angeles!

[Claudio](http://claudiob.github.io) here with the latest news from the rails/rails repository.
Here's a recap of the commits and pull requests merged into master this week.

## Featured

### [This week’s Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20161008-20161014)

14 programmers contributed to Rails this week, two of the them for the first time. If you haven't contributed yet, I hope you will join the list next week.

## Improved

### [ActionCable now permits same-origin connections by default](https://github.com/rails/rails/pull/26568)

Same-origin connections are now [permitted by default](https://github.com/rails/rails/commit/dae404473409fcab0e07976aec626df670e52282). If you want to stick with the old behavior, you can set `config.action_cable.allow_same_origin_as_host = false`&nbsp;

### [explain why autosave= disables inverse\_of](https://github.com/rails/rails/pull/26730)

`autosave` and `inverse_of` do not get along together, since they may&nbsp;for example cause double saves.

## Fixed

### [Work around read/close race](https://github.com/rails/rails/pull/26714)

If one thread calls `close` on an IO at the same time that another calls `read`, segfaults might have occurred. This has now been fixed!

## Gone

### [Fixnum and Bignum are deprecated in Ruby trunk](https://github.com/rails/rails/pull/26732)

A small upgrade to the Rails codebase to have it ready for the upcoming release of Ruby 2.4 which has [deprecated Fixnum and Bignum](https://bugs.ruby-lang.org/issues/12739).

### [Remove deprecations in Active Model, Action View and Active Job](https://github.com/rails/rails/pull/26755)

And [in Action Pack](https://github.com/rails/rails/pull/26746) too. Methods that were deprecated in Rails 5.0 will be gone once Rails 5.1 ships.

## Wrapping up

That's it for this week, as usual there were more changes than what we can fit, feel free to check them yourself [here](http://contributors.rubyonrails.org/contributors/in-time-window/20161008-20161014). Until next week!
