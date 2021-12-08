---
layout: post
title: "This week in Rails: batch touching, default controller response and more!"
categories: news
author: huoxito
published: true
date: 2015-04-10 20:32:39 -0700
---

Hey there, this is [Washington](https://twitter.com/huoxito). It's finally Friday again!!!

A lot of bug fixing and a couple great improvements going on the Rails environment this week. Read on for more details.

## Featured

### [This week's Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20150406-20150410)

31 contributors have helped improve Rails this week. Consider taking some time next week to make a contribution to an open-source project :) (I keep telling that to myself every day)

## Improved

### [Batch touch parent records](https://github.com/rails/rails/pull/19324)

YAY! I bet many projects have been looking forward to this improvement. After a couple discussions and [experiments](https://github.com/rails/rails/pull/18824) touching is finally limited to the fewest possible number of queries.

### [Controller actions default to head :no_content if no template exists](https://github.com/rails/rails/pull/19377)

After all these years DHH is still [pushing](https://github.com/rails/rails/issues/19036) for better defaults on Rails. Next major version will assume everything went fine if a controller action has no template. I can't see why not.

## Fixed

### [Non-ascii characters in URLs on Windows](https://github.com/rails/rails/pull/19689)

We are a few months into 2015, but these encoding-related problems are still haunting us! With this fix, Windows apps will stop blowing up on strange URLs. Yet another example of how awesome the Ruby and Rails community can be.

### [Error when defining callbacks named `run`](https://github.com/rails/rails/pull/19448)

An apparently nice [performance improvement](https://github.com/rails/rails/commit/796cab45561fce268aa74e6587cdb9cae3bb243e) has caused a [regression](https://github.com/rails/rails/pull/19405) on the callback system. Plus according to new benchmarks it seems the original performance improvement is no longer relevant.

### [`force_ssl` without `session_store`](https://github.com/rails/rails/pull/19682)

`config.force_ssl = true` now works properly even when you have disabled the session store.

### [Uniqueness validations and out-of-range integers on PostgreSQL](https://github.com/rails/rails/pull/19688)

Another patch to make Active Record API rock solid.

## One More Thing™

### [Redcarpet 3.2.2 has an XSS vulnerability](https://github.com/rails/rails/commit/6c98100620c0e441c0c8334bb079bf7567c2b521)

I haven't seen much noise about [this vulnerability](http://www.openwall.com/lists/oss-security/2015/04/07/11) on the interwebs but just in case. If you have this markdown parser on any of your projects you should probably bump it whenever you have a chance.

## Wrapping up

That's all for _This week in Rails_. As always, there are more changes than we have room to cover here, but feel free to [check them out](https://github.com/rails/rails/commits/master) yourself!

P.S. If you enjoyed this newsletter, why not [share it with your friends](https://rails-weekly.ongoodbits.com)? :) If you wish to be part of this project please don't hesitate to contact [Godfrey](mailto:godfrey@brewhouse.io) – there're a lot of ways you could help make this newsletter more awesome!

