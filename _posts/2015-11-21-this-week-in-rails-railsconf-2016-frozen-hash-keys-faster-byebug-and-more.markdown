---
layout: post
title: "This week in Rails: RailsConf 2016, frozen Hash keys, faster byebug and more!"
categories: news
author: chancancode
published: true
date: 2015-11-21 00:50:34 -0800
---

Hi everyone! This is [Godfrey](https://twitter.com/chancancode) bringing you the latest news from [Rails](https://github.com/rails/rails).

## Featured

### [RailsConf 2016](http://railsconf.com)

The RailsConf 2016 website is up! This year, we will be gathering in Kansas City from May 4 to May 6. If you would like to submit a talk, the [call for proposals (CFP) is open](http://rubycentral-cfp.herokuapp.com/events/railsconf2016) from now until Jan 15!

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20151114-20151120)

This week we have seen commits from 29 different contributors in the Rails repository, including 6 new faces!

## Improved

### [Frozen FK Names For Association](https://github.com/rails/rails/commit/e38e0c61e9d73b3531a02c6dd44c9694f64f2c0a)

When you use a non-frozen (i.e. mutable) string as a Hash key, Ruby would have to [duplicate and freeze it](https://github.com/ruby/ruby/blob/8fdebec088657cfd6aa08ee588b79740858923e1/hash.c#L1513-L1514) in order to guarantee a stable hash key.

This is usually fine, but when that string is used to build many different hashes, the work adds up. Fortunately, we can simply freeze it upfront to avoid the repeated work.

### [Faster byebug](https://github.com/rails/rails/pull/22328)

`byebug` 7.0 has recently been released with some major performance improvements. (See [this pull request](https://github.com/deivid-rodriguez/byebug/pull/160) for details.) If you are using `byebug` for debugging, you might want to upgrade!

### [Speeding Up Enumerable#sum](https://github.com/rails/rails/pull/22336)

Did you know that [`Enumerable#{inject,reduce}` can take a symbol as its argument](http://ruby-doc.org/core-2.2.3/Enumerable.html#method-i-inject)? Apparently, this is slightly faster too! (Note: this is different from `inject(&:method)` which goes through `Symbol#to_proc`.)

## Fixed

### [Use <tt>...</tt> Instead Of +...+ In Docs](https://github.com/rails/rails/pull/22299)

Usually, you can use `+some_word+` to switch to fixed-width fonts in Rails' documentation. However, the parser for this rule would sometime fail in some more complex cases.

If you are not sure when to use which, be sure to check the [guidelines](http://guides.rubyonrails.org/api_documentation_guidelines.html#fonts), or just check the output locally by running `rake rdoc`.

## Wrapping Up

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-11-14%7D...@%7B2015-11-20%7D).

Until next time!

