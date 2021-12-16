---
layout: post
title: "This week in Rails: Cables, Mailers, Floats, and More!"
categories: news
author: toddbealmear
published: true
date: 2016-03-25
---

[Business](https://www.instagram.com/p/BDDjrm2ICFl) [Todd](https://twitter.com/toddbealmear) here with your weekly briefing of all the goings-on in the Rails organization.

Since our last update, a number of initiatives were undertaken by many of our stakeholders to breed cross-functional synergies between the underlying components of the Rails vertical. Or, if your eyes glazed over at the sight of "cross-functional synergies" or any of the other garbage I just typed out, a bunch of people did some stuff to make Rails better and junk.

_yawn_

I'm running this meeting and I'm already boring myself. Let's just jump into it, shall we?

## Featured

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160319-20160325)

28 beautiful humans helped make Rails better than it was last week. If you'd like to see your name on this list, check out the open [issues](https://github.com/rails/rails/issues).

## Improved

### [Gracefully Handle Action Cable Client Disconnects](https://github.com/rails/rails/pull/24259)

Formerly, Action Cable would raise a connection reset error if a client forcibly disconnected. This change avoids the exception by simply closing the connection if the client disappears.

### [Avoid Installing New Gems During the Upgrade Process](https://github.com/rails/rails/pull/24243)

When running `rails app:update`, we should avoid adding dependencies on new gems. A previous change adds an option to dev environment config that would require the `listen` gem to be installed. Instead, the generator now adds the line in question as a comment.

### [Honor Default MySQL Modes](https://github.com/rails/rails/pull/24167)

Active Record's strict mode has traditionally overridden MySQL's default modes. However, keeping these modes in place offers better compatibility with other databases. In Rails 5, Active Record will stop overwriting these defaults.

### [Improvements to Date Inclusion Validator](https://github.com/rails/rails/pull/24297)

New in Ruby 2.2+, `Range#cover?` works with `Date` ranges. The date inclusion validator has been updated to allow `Date` ranges to use this method.

### [Float to Decimal Conversion Madness](https://github.com/rails/rails/commit/c7d3bd48dff0a509f5c21ec8864cb4f774d604e6)

To avoid rounding to incorrect values when coercing a `Float` to a `Decimal`, the scale needs to be applied before precision. Be sure to read the entire commit message for a summary of how the existing behavior may cause unexpected issues.

## Fixed

### [Fix reset\_session for API Controllers](https://github.com/rails/rails/pull/24229)

`request.reset_session` relies on `ActionDispatch::Flash`, which is not included in API Controllers. This change moves that requirement to the `Flash` middleware itself.

### [Ensure Action Cable is Loaded in Application Generator](https://github.com/rails/rails/pull/24196)

This PR fixes an issue where Action Cable would not be loaded properly if the app was generated without Active Record.

### [Generate ApplicationMailer for Engines](https://github.com/rails/rails/pull/24164)

In a followup to one of the [fixes](https://github.com/rails/rails/pull/24161) from last week's issue, we're now ensuring that `ApplicationMailer` will be correctly generated in Engines.

### [Prevent Key from Being Created When Checking for Error Inclusion](https://github.com/rails/rails/pull/24299)

Calling `ActiveModel::Errors#include?` with a key that didn't exist would pollute the errors hash with they specified key and an empty `Array` as its value. This week, that behavior was corrected.

## Wrapping Up

That's all for This week in Rails. As always, there are plenty of things we're not able to cover here, so take a look at the [changes](https://github.com/rails/rails/compare/master@%7B2016-03-19%7D...@%7B2016-03-25%7D) yourself.

Until next time!
