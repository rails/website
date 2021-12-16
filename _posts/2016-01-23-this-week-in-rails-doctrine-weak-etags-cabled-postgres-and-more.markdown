---
layout: post
title: "This Week In Rails: Doctrine, Weak ETags, Cabled Postgres and more!"
categories: news
author: kaspth
published: true
date: 2016-01-23 10:40:36 -0800
---

Hey passengers!

Have your luggage ready and get those ticket stubs out, a new issue is just about to roll in to the station. [Godfrey](https://twitter.com/chancancode) and [Kasper](https://twitter.com/kaspth) are co-conducting this beast of steel — eh, newsletter with Rails news, we mean.

Hop aboard before we roll off, and start choo-chooing toward...

Hey, does that sign say "Tracks End Here"?

## Featured

### [Fresh off the tracks, a new Rails site!](https://rubyonrails.org)

Ahead of the coming major release of Rails, we got a new website and logo and... doctrine?

Yes! See, Rails has been going strong for over 10 years, [the Rails Doctrine](https://rubyonrails.org/doctrine) just captures that magic and spells it out. Thus Rails is ready to roll on for the next decade. The [blog post](https://rubyonrails.org/2016/1/19/new-rails-identity) dishes on the new design's backstory.

P.S. The Rails core team got some [awesome new pictures](https://rubyonrails.org/2016/1/19/new-rails-identity) too!

### [This weeks Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160115-20160123)

This week 41 people contributed managed to rivet themselves away from the shiny new pixels above and buckle down some contributions. Kudos to you folks 😁

## New Stuff

### [Action Cable: Postgres pubsub can sub for Redis](https://github.com/rails/rails/pull/22950)

Action Cable uses Redis to handle publishing and subscribing, but this week Postgres became a proper pubsub'er and is swappable with Redis.

### [SQL expressions as a column's default value](https://github.com/rails/rails/pull/20005)

With this pull request, you will be able to use a SQL expression (such as a SQL function) as the default value for any column type!

## Fixed

### [Weaker ETags makes HTTP caches stronger](https://github.com/rails/rails/pull/17573)

[HTTP ETags](https://en.wikipedia.org/wiki/HTTP_ETag) help cut bandwidth by sending along a tag that the server could use to validate the cached content.

Rails supports it [out-of-the-box](http://edgeguides.rubyonrails.org/caching_with_rails.html#conditional-get-support) but issues ["strong" ETags](https://en.wikipedia.org/wiki/HTTP_ETag#Strong_and_weak_validation), which has stronger cachability implications than Rails can guarantee.

Not anymore! In Rails 5, Rails now correctly issue "weak" ETags — matching [`Rack::ETag`'s behavior](https://github.com/rack/rack/issues/681).

## Improved

### [Removed Action Cable's celluloid dependency](https://github.com/rails/rails/pull/22934)

Action Cable's dependency on the `celluloid` gem has been removed by using the thread pool from `concurrent-ruby` (which Rails already uses). While [temporarily reverted](https://github.com/rails/rails/pull/22977) it was [reintroduced](https://github.com/rails/rails/commit/01c320001bcce617196270f3d398d48a89a6ea2a) this week.

### [Better configuration documentation for Action Cable](https://github.com/rails/rails/pull/23096)

Now rejiggered: the Action Cable documentation on how to configure the library has been clarified and better highlights how useful some methods are.

## Wrapping Up

That's all for This week in Rails. As always, there are plenty of things we're not able to cover here, so take a peek at [the changes](https://github.com/rails/rails/compare/master@%7B2016-01-15%7D...@%7B2016-01-23%7D) yourself.

Until next time!

