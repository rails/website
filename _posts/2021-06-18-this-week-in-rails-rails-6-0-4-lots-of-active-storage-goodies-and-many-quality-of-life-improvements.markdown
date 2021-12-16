---
layout: post
title: "Rails 6.0.4, Lots of Active Storage goodies, and many Quality-of-Life improvements!"
categories: news
author: zzak
published: true
date: 2021-06-18
---

Hello,&nbsp;[zzak](https://github.com/zzak)&nbsp;here with the latest changes from the last week to Rails.

### [Rails 6.0.4 was released](https://rubyonrails.org/2021/6/15/Rails-6-0-4-has-been-released)

This release includes many bug fixes so be sure to upgrade! You can read the full summary of changes [here](https://github.com/rails/rails/releases/tag/v6.0.4).

### [Improve security of untyped bound values in MySQL](https://github.com/rails/rails/pull/42440)

This solves a potential query manipulation vulnerability with MySQL.

### [Improve usability of multi-db when config is invalid](https://github.com/rails/rails/pull/42537)

A helpful exception is now raised if pool\_config is nil when using config.active\_record.writing\_role(:all).

### [Enhancements to Active Record Encryption](https://github.com/rails/rails/pull/42491)

After introducing encryption into Active Record, a couple new features and a bug fix were followed!

### [Add support for eager loading Active Storage variants](https://github.com/rails/rails/pull/40842)

This PR removes N+1 queries from Active Storage when using with\_all\_variant\_records and with\_attached\_\* scope.

### [Fix strict loading through associations](https://github.com/rails/rails/pull/42494)

Previously there was a bug when using strict\_loading where eager loading wouldn't propagate through associations.

### [Use the current Rails version inside package.json](https://github.com/rails/rails/pull/42263)

Previously when generating a new Rails app, the package.json would hard-code the string "6.0.0" for all npm dependencies. This now uses the Rails version that generated the app.

### [Add support for Active Storage expiring URLs](https://github.com/rails/rails/pull/42410)

This allows expiring URLs for signed blob ids in Active Storage via the "expires\_in" parameter or by setting a default with "config.active\_storage.urls\_expire\_in".

### [Support default "cache_control" in Active Storage for GCS](https://github.com/rails/rails/pull/42509)

This PR adds support for setting the default "cache\_control" headers for uploads using Google Cloud Storage service.

### [Use FFmpeg scene detection for generating video previews](https://github.com/rails/rails/pull/39096)

By using the built-in features of FFmpeg, Active Storage now generates much better thumbnails for videos. These parameters were also made configurable in a [follow-up PR](https://github.com/rails/rails/pull/42471)!

### [Deprecate "purge" and "purge_later" on Active Storage attachments association model](https://github.com/rails/rails/pull/42506)

You should be calling these methods directly on the attachment and not on the association.

### [Add Model.update! that is similar to Model.update but raises exceptions](https://github.com/rails/rails/pull/42423)

You may be familiar with the instance method Model#update!, but now you can do that on the class!

### [Performance regression in CollectionAssocation#build](https://github.com/rails/rails/pull/42524)

This fixes a huge performance bug for inversing associations with a lot of records.

### [Reduce stat(2) calls](https://github.com/rails/rails/pull/37265)

Classic [nobu](https://github.com/nobu). This patch was later optimized in a [follow-up PR](https://github.com/rails/rails/pull/42446).

### [Don't attach UJS form submission handlers to Turbo forms](https://github.com/rails/rails/pull/42476)

This quality-of-life improvement is for apps migrating from RailsUJS to Turbo with both living inside the codebase to easily distinguish which should handle forms.

[28 people](https://contributors.rubyonrails.org/contributors/in-time-window/20210612-20210618) contributed to Rails since last time. All the changes can be checked [here](https://github.com/rails/rails/compare/@%7B2021-06-12%7D...main@%7B2021-06-19%7D). Until next week!
