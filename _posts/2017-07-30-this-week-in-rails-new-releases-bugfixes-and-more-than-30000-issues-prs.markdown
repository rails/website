---
layout: post
title: "New releases, bugfixes and more than 30000 issues/PRs!"
categories: news
author: prathamesh
published: true
date: 2017-07-30
---

Hello everyone! This is [Prathamesh](https://twitter.com/_cha1tanya) with the latest news from the Rails world.

### [Rails 5.1.3.rc2 and 5.0.5.rc2 released](https://rubyonrails.org/2017/7/25/Rails-5-0-5-rc2-and-5-1-3-rc2-have-been-released)

Two new release candidates has been released this week, if there are no regressions found, the final releases are coming next week! We said it last week as well 😁

### [This Week's Rails contributors!](http://contributors.rubyonrails.org/contributors/in-time-window/20170723-20170730)

27 people helped to make Rails better this week with 7 of them for the first time! If you want to be one of them, checkout the [issues](https://github.com/rails/issues) list, help is always welcomed!



### [Rails crosses 30000 issues/PRs on GitHub](https://github.com/rails/rails/pull/30000)

As of this writing the count is increased to [30004](https://github.com/rails/rails/pull/30004). 28805 of all of these issues and PRs have been processed already! That's pretty awesome 🎉

### [Let Arel manage the bind params](https://github.com/rails/rails/commit/213796fb4936dce1da2f0c097a054e1af5c25c2c)

Active Record no longer manages the bind parameters required for queries. Now Arel handles it on it's own and returns the AST and bind params together.&nbsp;

### [Add missing support for modulo operations on durations](https://github.com/rails/rails/commit/a54e13bd2e8fb4d6aa0aebe59271699a2d62567b)

Rails 5.1 introduced **ActiveSupport::Duration::Scalar** class as a wrapper around a numeric value as a way of ensuring a duration was the outcome of an expression. However the implementation was missing support for modulo operations. This is now fixed.

### [Fix division where the denominator is duration](https://github.com/rails/rails/pull/29971)

This fixes a regression where result of division by duration was not returning **Numeric** result. It is now restored to the previous behavior of Rails 5.1.1 and prior.

That's all for this week, as always, we couldn't cover all of the changes, but feel free to check the [commits](https://github.com/rails/rails/compare/master@%7B2017-07-23%7D...@%7B2017-07-30%7D) if you are interested. Until next week!
