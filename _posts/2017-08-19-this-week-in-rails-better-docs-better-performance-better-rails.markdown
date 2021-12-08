---
layout: post
title: "Better docs, better performance, better Rails!"
categories: news
author: chancancode
published: true
date: 2017-08-19
---

Hello everyone! This is [Claudio](https://www.youtube.com/watch?v=9CWjFtCbrrM) with a recap of the main commits that made it into rails/rails this week. If you too want to contribute to Rails,&nbsp;[this outstanding Active Record issue](https://github.com/rails/rails/issues/30296) is a great place to start.

### [Temporarily point to a fork of SDoc](https://github.com/rails/rails/pull/30199)

A work in progress to improve the documentation of Rails with a nicer theme, better SEO and faster generation time. Can you spot the difference between [the current](http://api.rubyonrails.org) and [the future version](http://edgeapi.rubyonrails.org)?

### [Minor tweaks in Active Storage documentation](https://github.com/rails/rails/commit/ae87217382a4f1f2bdfcdcb8ca6d486ec96e8d6c)

Two weeks ago, [Active Storage made it into rails/rails](https://github.com/rails/rails/pull/30020). This week its documentation has been improved to make it ready to ship with Rails 5.2.  
  


### [Faster and more readable implementation of Hash#deep_merge](https://github.com/rails/rails/pull/30275)

If you want to learn how to use benchmarks to prove that a commit can improve the performance of Rails, this is a great example.

### [Eager-load controller actions to reduce response time of the first request](https://github.com/rails/rails/pull/29559)

The list of available actions for a controller is now eagerly loaded&nbsp; to reduce response time of the first request and the memory footprint when running on forking server like Unicorn.

  


### [Load Parameters configurations on :action_controller only once](https://github.com/rails/rails/pull/30045)

This PR fixes a [regression](https://github.com/rails/rails/issues/30025) introduced in 5.1.3 by which UnpermittedParameters were not raised as expected.

  


### [Check :scope input in Uniqueness validator](https://github.com/rails/rails/pull/30214)

Without this patch, calling something like _validates\_uniqueness\_of :code, scope: [archived: false]_ would cause _NoMethodError_ with a trace into AR internals.

### [Add `binary` helper method to fixtures](https://github.com/rails/rails/pull/30073)

You can now more easily use binary data as fixtures.

### [Add `--skip-yarn` option to the plugin generator](https://github.com/rails/rails/pull/30238)

Don't include yarn in your engines if you don't need it.

### [Allow `serialize` with a custom coder on `json` and `array` columns](https://github.com/rails/rails/pull/30229)

Better control on how to store your data.

### [Bump `thor` and `blade`](https://github.com/rails/rails/pull/30288)

Thor 0.20 has [new features](https://github.com/erikhuda/thor/blob/master/CHANGELOG.md#0200) you might want to look at.

That's all for this week! Feel free to check the full&nbsp;[list of commits](https://github.com/rails/rails/compare/master@%7B2017-08-13%7D...@%7B2017-08-19%7D) if you are interested. Until next week!
