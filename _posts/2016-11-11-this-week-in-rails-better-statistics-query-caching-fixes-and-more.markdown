---
layout: post
title: "This Week in Rails: connection statistics, query caching fixes and more!"
categories: news
author: vipulnsward
published: true
date: 2016-11-11
---

Hello everyone!

And welcome to our special edition from, live from [RubyConf](http://rubyconf.org) in Cincinnati 😎.

This is [Vipul](https://twitter.com/vipulnsward) along with [Tim](https://twitter.com/imtayadeway) and [Prathamesh](https://twitter.com/_cha1tanya) teaming together to bring you all the latest news from the Rails community.&nbsp;
Lets get started!

## Featured

### [Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20161105-20161111)

This week 20 people contributed to Rails. We also got 3 first time contributors.
Thanks all for your amazing contributions ❤️

If you too are looking to help out, head over to our [issues](https://github.com/rails/rails/issues).

## Improved

### [Active Record connection pool adds a stat method](https://github.com/rails/rails/pull/26988)

`ActiveRecord::Base.connection_pool` now has a `stat` method that returns statistics about the current status of a connection pool. For Example:

``` ruby
>> ActiveRecord::Base.connection_pool.stat
=> { max: 25, total: 1, busy: 1, dead: 0, idle: 0, num_waiting: 0, checkout_timeout: 5 }
```

### [Avoid `unscope(:order)` when limit is passed for a count query](https://github.com/rails/rails/pull/26972)

If a `limit` is passed, record fetching order is very important for performance.

This fix makes changes so that we don't unscope and remove the `order` from a count query when a `limit` clause is passed to it.

### [JRuby dependencies are now resolved for the latest version](https://github.com/rails/rails/pull/26990)

As part of the ongoing effort of making Rails 5 compatible with JRuby, the test suite got updates for the JRuby version it runs on, to make it satisfy the dependencies required for the tests.

## Fixed

### [Clear query cache during checkin, instead of an execution callback](https://github.com/rails/rails/pull/26909)

Previously `ActiveRecord::QueryCache` using the new Rails executor may result in dirty query caches across threads.&nbsp;

Releasing a connection in one thread may return it to the pool with cache still enabled and dirty, and the executor lost track of the connection so it may clear another, and another thread may pick up the dirty cache and never turn it off.

This fix makes changes so that query cache does not persist while a connection moves through the pool and is assigned to a new thread.

### [Configure query caching (per thread) on the connection pool](https://github.com/rails/rails/pull/26978)

If the result of `ActiveRecord::Base.connection` is different across different threads, enabling the query cache in one thread will have been leaked, which could change the state of another.

This addresses the issue by making query caching local to the current thread.

## One More Thing ™

### [Bona fide system testing in Rails 5.1](https://twitter.com/dhh/status/796782788263321600)

From DHH on Twitter:

<blockquote class="twitter-tweet" data-cards="hidden" data-lang="en">
  <p lang="en" dir="ltr">System tests have finally taken strong hold at <a href="https://twitter.com/basecamp">@Basecamp</a>. Can&#39;t wait for us to level-up <a href="https://twitter.com/rails">@Rails</a> with great defaults for it in 5.1! <a href="https://t.co/eptnu8OcAc">pic.twitter.com/eptnu8OcAc</a></p>
  &mdash; DHH (@dhh) <a href="https://twitter.com/dhh/status/796782788263321600">November 10, 2016</a>
</blockquote>

The [work being done](https://github.com/rails/rails/pull/26703) is soon to be bundled into a new gem inside of Rails, that will hopefully be part of Rails 5.1!

## Wrapping up

That's it from This Week in Rails! There were many other great contributions, too numerous to list here, but feel free to [check them out](https://github.com/rails/rails/compare/master@%7B2016-11-05%7D...@%7B2016-11-11%7D)!

Until next week!

