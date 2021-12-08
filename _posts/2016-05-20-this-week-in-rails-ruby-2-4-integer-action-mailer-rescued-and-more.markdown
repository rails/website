---
layout: post
title: "This Week In Rails: Ruby 2.4 Integer, Action Mailer rescued and more!"
categories: news
author: kaspth
published: true
date: 2016-05-20
---

Shhh, stay quiet! Rails 5.0 lurks just around the corner and it's a mean beast.&nbsp;

Rails' maintainers, computer scient(-ish)sts, spliced commit DNA merged long ago in hopes of creating a better web framework. The result is Jurrails Park.&nbsp;

Here's [Kasper](https://twitter.com/kaspth) alongside self-volunteering co-editor [Jeff Goldblum](https://www.youtube.com/watch?v=lpuS7_NPv6U), saying:&nbsp;

_They were so preoccupied with whether or not they could, they didn't stop to think if they should._

## Featured

### [This Weeks Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160514-20160520)

Contributors! Contributors! Contributors!

62 commits and 22 people makes us a happy newsletter team ❤️

### [Fixnum + Bignum = Integer](https://github.com/rails/rails/pull/25056)

The next version of Ruby, 2.4,&nbsp; [unifies Fixnum and Bignum into Integer](https://bugs.ruby-lang.org/issues/12005). Have no fear, Rails is already ready with both forward compatibility, backward compatibility and all around compatible compatibility. Int' no Fix' too Big', folks.

### [Action Mailer: rescue\_from and more](https://github.com/rails/rails/pull/25018)

Action Mailer can now rescue itself from exceptions with **rescue\_from**.&nbsp;

This lets the mailer handle errors from the delivering job when run with Active Job.&nbsp;

Third, the exhaustively documented pull request changes how **rescue\_from** handles Exception causes. [Read more](https://github.com/rails/rails/pull/25018).

## Fixed

### [Support nested calls to #suppress](https://github.com/rails/rails/pull/25009)

Calling **suppress** within another suppression on the same class was previously a let down.&nbsp;

Now the method doesn't take its name too seriously and all should be good.

## Improved

### [Relation blocked Enumerable count](https://github.com/rails/rails/pull/24203)

One of the first Rails 5.1 features brings the framework appropriately forward. Literally by forwarding `count` on a Relation to Enumerable when passed a block.

### [Time#all\_day meet Date#all\_day](https://github.com/rails/rails/pull/24930)

Rails has long had `Time#all_day` to really expand the horizon of past times. Now Date gets to go `all_day` too.

Though personally, dating for a whole day sounds pretty extreme, but kids these days ¯\\_(ツ)\_/¯

## Wrapping Up

That concludes our report for this week. There were plenty of other things going on, so feel free to jump in and [check them out yourself](https://github.com/rails/rails/compare/master@%7B2016-05-14%7D...@%7B2016-05-20%7D)!

