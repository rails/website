---
layout: post
title: "This spooky week in Rails: bidirectional destroys, indexed errors and horror!"
categories: news
author: chancancode
published: true
date: 2015-10-31 00:44:40 +0100
---

#### 

Beware of those,  
In forests reigned by cawing crows  
Who feel the fright, a stormy friday night

Your weekly Rails news, pick and choose  
As we weave, this;  
All Hallow's Eve

Bet you didn't expect to get spooked the day _before_ Halloween, well, that's our trick-a-trété. What? That's what the french say — don't ask.

## Featured

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20151023-20151030)

This week 42 contributors gathered in the town square, pitchforks in hand, and chased bugs out of Rails and up the mill.

That's what mob programming is all about. I assume.

### [Bidirectional Destroys](https://github.com/rails/rails/pull/18548)

Say, a `USA` and a `USSR` model employed defensive measures to destroy the other if they we're destroyed. Before they'd keep destroying the other, now they're more peaceful only destroying each other _once_. Good thing it's a fictional example 😁

### [Nested attributes indexes errors by insertions](https://github.com/rails/rails/pull/19686)

Have models with `accepts_nested_attributes_for`? The macro nestled out an `index_errors` option, so errors attach to a specific model in the submitted array.

There's comments on the pull request, if you want to improve it further.

## New Stuff

### [Relation gets `left_outer_joins`](https://github.com/rails/rails/pull/12071)

There's now an explicit way to do this specific join — abstracted away in `includes` before.  
For those who want to be left out, er... join in!

## Improved

### [Many to many relationships count a little more](https://github.com/rails/rails/pull/18383)

While calling `count` on a `has_and_belongs_to_many` relationship was correctly counted, amping up the inclusion made threw off the count. Now you can use `includes` and have things counted correctly again.

### [Sanitizing Order](https://github.com/rails/rails/pull/13008)

You'd have to remember to sanitize arguments you passed to `order`, which, if you have an example like the one in the pull request, is a pain. No more.

### [`HashWithIndifferentAccess` defaults with `to_hash` objects](https://github.com/rails/rails/pull/16357)

Passing an object that responds to `to_hash` to `HashWithIndifferentAccess.new` now respects the default values and default proc if any of those are there.

## One more thing™

### [Correction: Active Support delegation to `block`, `args` or `arg`](https://github.com/rails/rails/pull/21302)

Last week, we incorrectly said this change would raise exceptions. What really happens is `delegate` now works with `block`, `args` or `arg` if those light your Jack-o'-lantern.

## Wrapping Up

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-10-23%7D...@%7B2015-10-30%7D).

Until next time!

Also if you really want to be scared, look yourself in the mirror! Boom, nailed it!

