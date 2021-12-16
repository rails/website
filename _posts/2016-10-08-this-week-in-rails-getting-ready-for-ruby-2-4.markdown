---
layout: post
title: "This Week in Rails: Getting Ready For Ruby 2.4"
categories: news
author: chancancode
published: true
date: 2016-10-08
---

![You are reading This Week In Rails!](https://camo.githubusercontent.com/7fba9a5c5bb3ee7cb8d9930206b36e2a79faf9a1/68747470733a2f2f7777772e64726f70626f782e636f6d2f732f6b626b6f67366472336d746f7379332f7261696c732d726574726f2d776176652e6a70673f7261773d31)

## Featured

### [This week's Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20161001-20161007)

The content for this week's newsletter is sponsored by the 19 individuals who authored them!

### [Fixnum and Bignum are deprecated in Ruby 2.4](https://github.com/rails/rails/pull/26732)

One of the notable changes in the [upcoming Ruby 2.4 release](https://www.ruby-lang.org/en/news/2016/09/08/ruby-2-4-0-preview2-released) is the unification of `Fixnum` and `Bignum` into a single `Integer` class. Following that change, the legacy classes were [deprecated](https://bugs.ruby-lang.org/issues/12739) recently.

This pull request avoids triggering those deprecation warnings with a feature detection. If you maintain code that references those constants, you might want to adopt this pattern in your projects too!

### [Remove json gem dependency](https://github.com/rails/rails/pull/26729)

Related to the unification of the integer classes: native extensions that references the `rb_cFixum` and `rb_cBignum` C constants need to be updated as well.

The popular json gem is one of those native extensions. Fortunately, all modern versions of Ruby bundles the json library. If your are targeting Ruby 1.9 and above, you could simply [remove the json gem as a dependency](https://github.com/rdoc/rdoc/pull/412).

## Improved

### [Avoid bumping the class serial](https://github.com/rails/rails/pull/26684)

Back in May, a [regression](https://github.com/rails/rails/issues/25068) was reported that Rails 5 invalidated Ruby's `class_serial` on each request. This internal counter is used to invalidate the class-level [method caches](https://tenderlovemaking.com/2015/12/23/inline-caching-in-mri.html).

The issue was tracked down to the use of `instance_exec`. While [there is hope](https://github.com/rspec/rspec-core/issues/2194#issuecomment-200597089) that this restriction could be relaxed inside Ruby itself, this patch at least temporarily fixes the problem on Rails' side.

### [Speed up Time.zone.now](https://github.com/rails/rails/pull/26359)

Once upon a time, `Time.zone.now` could be quite a bit slower than the stock `Time.now` (allegedly up to 25 times slower). This pull request significantly closes the gap.

## Fixed

### [Avoid compiling ruby keywords into template locals](https://github.com/rails/rails/pull/26672)

Have you tried rendering a partial while injecting local variables called "class" or "module"? It wouldn't work, and it will give you a pretty bizarre error.

This pull requests avoids the error by skipping over invalid local
variable names, while still allowing them to be accessed via
`local_assigns`.

You can read more about this issue, as well as the story behind this pull request in [Peter's blog post](http://www.peterschilling.org/blackhole/babys-first-rails-commit).

## Gone

### [Remove undocumented Action Cable "faye mode"](https://github.com/rails/rails/pull/26676)

Did you know that there was an undocumented "faye mode" for Action Cable?

No? Good. Because it's now gone!

## Wrapping up

That's it for this week, as usual there were more changes than what we can fit, feel free to check them yourself [here](https://github.com/rails/rails/compare/master@%7B2016-09-24%7D...@%7B2016-09-30%7D)!

Until next week!

