---
layout: post
title: "This week in Rails: wildcard template dependencies and more performance!"
categories: news
author: gregmolnar
published: true
date: 2015-07-31 16:27:36 -0700
---

Happy Friday Everyone!

This is [Greg](https://github.com/gregmolnar) with the latest news about Rails. We had a quiet week so this issue will be a short one.

## Featured

### [This week's Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20150724-201507312200)

This week 23 awesome people helped to make Rails even better. If you are interested in becoming a contributor, you can have a look at the [issues list](https://github.com/rails/rails/issues).

## New Stuff

### [Wildcard template dependencies](https://github.com/rails/rails/pull/20904)

You can define your template dependencies with a wildcard and do more with less code!

### [Plugin generator for API applications](https://github.com/rails/rails/pull/21003)

This pull requests adds an `--api` option in order to generate plugins that can be added inside API applications.

## Improved

### [Performance improvements](https://github.com/rails/rails/pull/21057)

By reducing the number of object allocations, this giant patch helps reduce memory usage _and_ also brings you some significant speed improvement (as a benchmark, [codetriage.com](http://codetriage.com) ran about 10% faster).

## Fixed

### [Uniqueness validator fix](https://github.com/rails/rails/pull/20966)

This commit fixes an issue when using the uniqueness validator against a custom primary key.

## That's a wrap

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-07-25%7D...@%7B2015-07-31%7D)!

Have you been thinking about writing for us, but you're scared of putting yourself out there? Don't worry, you can help our editors improve their writing with thoughtful critique and general grammar policing.

You up for that? Tell [Godfrey](mailto:godfreykfc@gmail.com) today.

