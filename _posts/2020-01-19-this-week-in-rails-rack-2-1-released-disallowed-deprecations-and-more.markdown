---
layout: post
title: "This week in Rails - Rack 2.1 released, disallowed deprecations, and more!"
categories: news
author: andrewmcodes
published: true
date: 2020-01-19
---

Hello, this is [Andrew](https://twitter.com/andrewmcodes), bringing you the latest news from the Ruby on Rails world!

### [18 contributors to Rails in past week](https://contributors.rubyonrails.org/contributors/in-time-window/20200112-20200118)

There have been 18 contributors to Rails in the second full week of 2020!&nbsp;

### [Rack 2.1.0 and 2.1.1 released](https://github.com/rack/rack/releases/tag/2.1.1)

These releases add support for the SameSite=None cookie value, new HTTP status codes, bug fixes, and several other exciting changes and additions. Updates to Rails following the release have also begun.  
  
Check out the [Rack changelog](https://github.com/rack/rack/blob/master/CHANGELOG.md) to learn more.

### [Introduce Active Support Disallowed Deprecations](https://github.com/rails/rails/pull/37940)

This addition allows the configuration of rules to match deprecation warnings that should not be allowed and _ActiveSupport::Deprecation#disallowed\_behavior_, which specifies the behavior to be used when a disallowed deprecation warning is matched.

### [Stop individual Action Cable streams](https://github.com/rails/rails/pull/37171)

Channels with multiple subscriptions can now stop following individual streams. Before this change, the only option was to stop all streams.

### [Remove an empty line from generated migration](https://github.com/rails/rails/pull/38231)

This fix prevents an extra newline from getting added in generated migrations.

That's it for this week, till next time!&nbsp;
