---
layout: post
title: "🌵 This Wild Week in Rails 🌵: Rails 4.2.7/4.1.16, new tag helpers syntax and more!"
categories: news
author: jonatack
published: true
date: 2016-07-08
---

Hola desperados!

 [Jon](https://twitter.com/jonatack) (aka Juan el bandido) here saying "Howdy" from the Navarro desert near Pamplona 🇪🇸 to bring you outlaws a back-slappin' sagebrush issue of **This Wild Week in Rails** 🌵.

We'll be covering a selection of the past 2 weeks' commits. That's a dadgummit lotta ground to cover, so pack a saddlebag o' water, watch out fer rattlesnakes, and dontcha hesitate to click through to the **pull requests** for more info!

Giddyup!

## Featured

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160702-201607008)

Let rip some proper hootin' & hollerin' fer these [38 heroic wranglers](http://contributors.rubyonrails.org/contributors/in-time-window/20160702-201607008)who contributed to Rails this week, including 8 first-timers! Check out the [current issues](https://github.com/rails/rails/issues) and the [contributing guide](http://edgeguides.rubyonrails.org/contributing_to_ruby_on_rails.html) if ye'd like to join 'em!

### [Rails 4.2.7.rc1 and 4.1.16.rc1 released, gold fever ensues](https://rubyonrails.org/2016/7/2/Rails-4-2-7-rc1-and-4-1-16-rc1-have-been-released)

These two release candidates hit the trail this week. The final release of Rails 4.1.16 should be on its way shortly if no regressions are found. It will probably be the last release of Rails 4.1, so please take some time soon to upgrade your application to Rails 4.2 or Rails 5.

### [New syntax for Action View tag helpers](https://github.com/rails/rails/pull/25543)

Building on an implementation proposal by DHH, new syntactical sugar has been introduced for tag helpers that supports HTML5 markup by default and avoids positional parameters. See the PR for details and code examples as well as [#25289](https://github.com/rails/rails/pull/25289) for the groundwork and discussion.

### [Updated and improved Rails Guides](http://edgeguides.rubyonrails.org)

Many vital documentation contributions were made these past 2 weeks, including completion of the [Rails Testing Guide](http://edgeguides.rubyonrails.org/testing.html) (yeehaw!) and updates for Rails 5.

## Improved

### [Cleaner, simpler stack traces](https://github.com/rails/rails/pull/25222)

Scheduled for Rails 5.1, this commit aims to clean up noisy stack traces and log only the traces relevant to the developer. The discussion in the PR and in [#25343](https://github.com/rails/rails/pull/25343) is worth reading.

### [Update Action View tag helpers attributes](https://github.com/rails/rails/pull/25555)

This commit brings the boolean attributes for the Action View tag helpers up to date with the current [w3.org spec](https://www.w3.org/TR/html51/single-page.html), while dropping `autobuffer` in favor of `preload` and removing `pubdate`.

### [Raise on nested time travel helpers](https://github.com/rails/rails/pull/24890)

Nested time travel calls in tests can lead to confusion in time stubbing. To discourage this practice, Rails now raises on nested `travel` and `travel_to` time helper calls.

## Fixed

### [Use correct timezone when parsing dates in json](https://github.com/rails/rails/pull/23011)

Time specified in ISO 8601 format without **Z** should be parsed as local time, yet until now it was treated as UTC. This commit fixes the problem by parsing time using the timezone specified in the application config. Additionally, **YYYY-MM-DD** format is now parsed as **Date** , not **DateTime** as it was until now.

Ported to Rails 5-0-stable since this is a potential breaking change.

### [Routes using `as` option now work with GET requests](https://github.com/rails/rails/pull/25435)

This fix adds the option to the end of the URL path rather than the query params. The PR discussion contains an example of checking impact on performance and working around it. Backported to 5-0-stable.

### [Don't reap reassigned connections](https://github.com/rails/rails/pull/25707)

This fix ensures that concurrent invocations of the connection reaper cannot allocate the same connection to two threads. Backported to 5-0-stable.

### [Fix race condition with websocket stream writes](https://github.com/rails/rails/pull/25624)

ActionCable::Connection::Stream now safeguards against concurrent writes to a websocket connection from multiple threads. Backported to 5-0-stable.

### [Close hijacked I/O socket after use](https://github.com/rails/rails/pull/25615)

ActionCable::Connection::Stream now properly closes hijacked sockets when the connection was shut down. Backported to 5-0-stable.

### [Fix adding implicitly-rendered template digests to ETags](https://github.com/rails/rails/pull/25546)

Modifying an implicitly-rendered template for a controller action using `fresh_when` or `stale?` now correctly results in a new ETag value.

### [Fix Type::Date#serialize to consistently return a date object](https://github.com/rails/rails/pull/25364)

Type::Date#serialize now properly casts values to date objects when making `where` and `find` queries on a date field. Backported to 5-0-stable.

## New

### [New middleware for debugging reloading/executing deadlocks](https://github.com/rails/rails/pull/25344)

Backported to 5-0-stable, this PR adds new `ActionDispatch::DebugLocks` middleware that can be used to diagnose deadlocks in the autoload interlock.

### [Enable using `rake notes` with other directories](https://github.com/rails/rails/pull/25692)

Developers and gems can now use `rake notes` to extract notes from other directories (like `/spec`) by registering them with the SourceAnnotationExtractor.

## Wrappin' Up, Ye Saddle Bums

Luddy Mussy, ah'm all sewn up! That's all for **This Wild Week in Rails** 🌵. Der wuz more improvements than we had room to cover here, so doncher hesitate to [check 'em out!](https://github.com/rails/rails/compare/master@%7B2016-07-02%7D...@%7B2016-07-08%7D)

'Til next week, amigos!

