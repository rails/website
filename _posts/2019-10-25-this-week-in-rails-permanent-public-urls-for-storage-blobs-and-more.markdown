---
layout: post
title: "Permanent public URLs for storage blobs and more"
categories: news
author: morgoth85
published: true
date: 2019-10-25
---

Hello Ruby folks. [Wojtek](https://twitter.com/morgoth85) from this side reporting on latest additions to Rails codebase.

### [Add permanent URLs for public storage blobs](https://github.com/rails/rails/pull/36729)

It is now possible to configure Active Storage to hold public/private blobs. Public services will always return a permanent URL.

### [Improve inversing associations](https://github.com/rails/rails/pull/37429)

Adds support for inversing belongs\_to -\> has\_many Active Record associations through a config option.

### [Support for overrides in "zeitwerk" mode inflectors ](https://github.com/rails/rails/commit/8237c4d33035bd131865f1e73577748892a75f0a)

Helps to define custom autoload inflections independently from Active Support.

### [Support errors translation lookup on indexed attributes](https://github.com/rails/rails/pull/37447)

When using indexed errors option, translated messages for them will be looked up by the standardized key.

### [Allow "OPTIONS" HTTP verb in routing mapper](https://github.com/rails/rails/pull/37370)

Handy shortcut for defining routes.  
  


[45 people](https://contributors.rubyonrails.org/contributors/in-time-window/20191005-20191025) contributed to Rails since last time. Check out [the detailed list of all changes](https://github.com/rails/rails/compare/master@%7B2019-10-05%7D...@%7B2019-10-25%7D).  
Until next time.
