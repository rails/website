---
layout: post
title: "This week in Rails: GZipped Asset, API error responses and more!"
categories: news
author: vipulnsward
published: true
date: 2015-12-11 20:08:52 +0900
---

Hello everyone! 🌨

This is [Vipul](https://twitter.com/vipulnsward), bringing you the latest from [Rails](https://github.com/rails/rails).

P.S: Here's something for all those at [RubyKaigi](http://rubykaigi.org/2015) 🍣. Enjoy!

## Featured

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20151205-201512110930)

This week 26 fabulous people contributed to Rails, including 6 first-time contributors! Check out the [list of issues](https://github.com/rails/rails/issues) if you'd like to help out as well.

### [Sprockets: Reintroduce gzip file generation](https://github.com/rails/sprockets/pull/193)

GZip file generation was taken out [last year](https://github.com/sstephenson/sprockets/pull/589) from sprockets. This change re-introduces compressed file generation and parallel file writing, which is useful for web servers that don't support gzipping static assets. This is pretty useful if you are on a service like Heroku.

## New Stuff

### [Introduce after_{create,update,delete}_commit callbacks](https://github.com/rails/rails/pull/22516)

New shortcuts were added to `after_commit .. on: :action`.

For example, `after_commit :add_to_index_later, on: :create` can now be written as `after_create_commit :add_to_index_later`.

## Improved

### [Rails API: Ability to return error responses in json format in development](https://github.com/rails/rails/pull/20831)

Previously error pages are always being delivered in html pages in development mode, which is not handy when you would like to view json responses. This change adds support for viewing errors in json format. It also makes sure that when requesting resources like `post/1.json`, when error occurs, it returns json response based on json format in url, unlike previously used html format.

### [Changed the `protect_from_forgery` prepend default to `false`](https://github.com/rails/rails/commit/39794037817703575c35a75f1961b01b83791191)

`protect_from_forgery` will now be inserted into the callback chain at the point it is called in the application. This is useful for cases where you want to `protect_from_forgery` after you perform required authentication callbacks or other callbacks that are required to run after forgery protection.

If needed, you can use `protect_from_forgery prepend: true` to always run `protect_from_forgery` before others.

### [`request_forgery_protection` initializer is removed from Rails API](https://github.com/rails/rails/pull/22508)

Usually in Rails API, you would not use `protect_from_forgery`, by default. The initializer to add this option- `request_forgery_protection` is now removed if you are creating an API.

## Fixed

### [Subscribing to notifications while inside the instrumented section.](https://github.com/rails/rails/commit/ab3c4a4083cce34131eeb23df42041fafe063fc3)

Previously if we tried to do

    ActiveSupport::Notifications.instrument('foo') do
      ActiveSupport::Notifications.subscribe('foo') {}
    end

it would create an error, because for the `subscribe` inside block, the dynamic `subscription` does not yet exist. This change make sure that subscriptions inside `instrumentation` get notified as well.

### [Add redirection path in the error message of assert\_response if response is :redirect](https://github.com/rails/rails/pull/19977)

Previously, if `assert_response` was checking for any non-redirect response like `:success` and actual response was a `:redirect` then, the error message displayed was like - `Expected response to be a <success>`. This change, now shows the redirected path in error response as - `Expected response to be a <success>, but was a redirect to <http://test.host/posts/lol>`

## Wrapping Up

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-12-05%7D...@%7B2015-12-11%7D).

Until next time!

