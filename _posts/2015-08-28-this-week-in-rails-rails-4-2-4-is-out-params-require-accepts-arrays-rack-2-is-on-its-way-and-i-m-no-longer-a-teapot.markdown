---
layout: post
title: "Rails 4.2.4 is out, params.require accepts arrays, Rack 2 is on its way and I'm no longer a teapot!"
categories: news
author: imtayadeway
published: true
date: 2015-08-28 20:24:30 -0700
---

Hi, everybody! This is [Tim](https://twitter.com/imtayadeway) and [Claudio](http://claudiob.github.io) reporting here from sunny Los Angeles. It's been a week of intense weather here, and even more intense activity in the Rails community. Let's take a look at the highlights…

## Releases

### [Rails 4.2.4 and 4.1.13 have been released!](https://rubyonrails.org/2015/8/24/Rails-4-2-4-and-4-1-13-have-been-released)

The new versions are backward compatible, so if you are using any 4.2.x version, you can safely upgrade to 4.2.4. And if you are using 4.1.x, bump your Gemfile to 4.1.13.

## Featured

### [This week's Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20150821-20150828)

This week 47 awesome people helped to make Rails even better, including 3 for the first time. If you are interested in becoming a contributor, you can have a look at the [issues list](https://github.com/rails/rails/issues).

## New Stuff

### [An `AsyncAdapter` for Active Job](https://github.com/rails/rails/pull/21257)

Do you need to create asynchronous jobs without installing additional gems? Set `config.active_job.queue_adapter = :async` and post your jobs to a concurrent-ruby thread pool.

### [A new format for params.require](https://github.com/rails/rails/pull/19565)

`params.require` can now take multiple values as an array, allowing for more succinct code such as `params.require(:person).require([:first_name, :last_name])`

### [Getting ready for Rack 2](https://github.com/rails/rails/commit/51c7ac142d31095d4c699f44cc44ddea627da1eb)

In Rack 2, the `env` hash will be changed to be actual request and response objects. This commit paves the way for Rails to be compatible when Rack 2 is released.

## Improved

### [Speed improvements for `loadable_constants_for_path`](https://github.com/rails/rails/pull/21411)

Pull requests that improve the performance of Rails are always welcome, especially when they come with benchmarks showing a speed increase of 9x!

## Fixed

### [Goodbye 418 (I'm a teapot)](https://github.com/rails/rails/pull/20757)

[RFC 7231](https://tools.ietf.org/html/rfc7231) changed the list of HTTP status codes (dropping "418 I'm a Teapot" among others). Rails documentation has now been fixed to list the symbols that can be used to represent status codes.

## Wrapping Up

One last thing that deserves a mention is that the new Code of Conduct has gone live on [the main website](https://rubyonrails.org/conduct). Hurrah!

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-08-22%7D...@%7B2015-08-28%7D)!

Have you been thinking about writing for us, but you're scared of putting yourself out there? Don't worry, you can help our editors improve their writing with thoughtful critique and general grammar policing.

You up for that? Tell [Godfrey](mailto:godfreykfc@gmail.com) today.

