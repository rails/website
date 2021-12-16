---
layout: post
title: "New API Docs site, configurable cache coder, bug fixes, and more!"
categories: news
author: andyatkinson
published: true
date: 2020-10-19
---

Hi there! This is [Andy](https://andyatkinson.com) bringing you the latest on what's shipped this week in Ruby on Rails!

### [New API docs back-end](https://github.com/rails/rails/pull/40396)

The frames-based Rails API docs site has been replaced with CSS and Turbolinks. Deep linking is now supported! Let's take a moment and remember the humble 1990s era \<frame/\>! Check it out at [https://edgeapi.rubyonrails.org](https://edgeapi.rubyonrails.org).

### [Stable sorting for DatabaseConfigurations#find_db_config](https://github.com/rails/rails/pull/40372)

Sorting configuration for multiple databases was not guaranteed to be stable.&nbsp;This PR fixes that, and includes a supporting test with more information.

### [Handle binary strings in Active Record serialized columns](https://github.com/rails/rails/pull/40383)

When binary data is stored in a serialized column, this change ensures that the original value is preserved. Check out the supporting test for an example.

### [Make ActiveSupport::Cache coder configurable](https://github.com/rails/rails/pull/39770)

This PR lays the groundwork to specify a custom coder. The PR author describes a scenario migrating between 2 different cache stores as a potential use case.

### [Include layout when rendering objects from controllers](https://github.com/rails/rails/pull/39869)

Did you ever notice Rails was like "nah", when trying to render from a controller with a layout? Well, I've got some good news for you.

### [Fix `read_attribute_before_type_cast`](https://github.com/rails/rails/pull/40395)

From the author: "With this change, read\_attribute\_before\_type\_cast will be able to get the value before typecast even if the attr\_name is an attribute\_alias."  

### Fixes, optimizations and documentation

And finally, let's recognize these contributors that [fixed a flaky test](https://github.com/rails/rails/pull/40366), created an [optimization](https://github.com/rails/rails/pull/40387) to avoid unnecessary queries and another that avoids a [duplicate record](https://github.com/rails/rails/pull/40379). In addition to that, 5 PRs shipped this week with documentation improvements! Thank you!

Thank you to the [20 people that contributed](https://contributors.rubyonrails.org/contributors/in-time-window/20201012-20201017) to Rails this week. If you'd like to be part of that, check out the list of [open issues](https://github.com/rails/rails/issues). Until next time!
