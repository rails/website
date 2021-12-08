---
layout: post
title: "Ruby on Rails, with love since 2005"
categories: news
author: claudiob
published: true
date: 2016-02-12
---

####

Happy Valentine’s Day weekend!

What better way to show your love for Rails than to help close the [last few issues](https://github.com/rails/rails/milestones/5.0.0) pending for the release candidate of Rails 5? ☺️

– [Claudio](http://claudiob.github.io)

## Featured

### [This week's contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160206-20160212)

Thanks to the 41 people who loved Rails this week by contributing to its source code. A special kiss to the 14 of you who contributed for the first time!

### [Guides: Using Rails for API-only Applications](http://edgeguides.rubyonrails.org/api_app.html)

You heard that Rails 5 will be able to generate API-only applications. Now you can learn all the details by reading this new chapter added to the Rails Guides.

### [A new organization for Turbolinks](https://github.com/turbolinks/turbolinks)

The source code of turbolinks has been moved to a new GitHub organization, with plans to release more turbolinks-related libraries in the future.

## New Stuff

### [Added numeric helper into SchemaStatements](https://github.com/rails/rails/pull/23508)

Need to add a numeric column to a database table? You can now use `t.numeric :foo` which is a lovely alias of `t.decimal :foo`.

### [Add `as` to encode a request as a specific mime type](https://github.com/rails/rails/pull/21671)

You can now test a JSON POST request with `post articles_path, as: :json` rather than adding helpers like `post_json`. And you can also test the response as parsed JSON with `parsed_body`.

## Fixed

### [Fix performance regression in Active Record](https://github.com/rails/rails/issues/23507)

[RubyBench](http://rubybench.org/rails/rails/commits?result_type=activerecord/postgres_finders_find_by_attributes&display_count=1000) analyzes every commit made to rails/rails so performance regressions can be rapidly discovered…&nbsp;and fixed!

## Improved

### [Speed up string xor operation and reduce object allocations](https://github.com/rails/rails/commit/02c38678)

We love commits like this one which improve the performance of Rails and use [benchmark/ips](https://github.com/evanphx/benchmark-ips) to measure their impact.

### [Set database poolsize via RAILS\_MAX\_THREADS](https://github.com/rails/rails/pull/23528)

The environment variable introduced in config/puma.rb is now reused in the database configuration to avoid connection timeout errors.

## Wrapping Up

That's all for This week in Rails. As always, there are plenty of things we're not able to cover here, so take a peek at the [changes](https://github.com/rails/rails/compare/master@%7B2016-02-06%7D...@%7B2016-02-12%7D) yourself.

Until next time!
