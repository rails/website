---
layout: post
title: "Google Cloud Storage streaming downloads, performance improvements and more!"
categories: news
author: repinel
published: true
date: 2018-05-12
---

Hello everyone! This is [Roque](https://twitter.com/repinel) bringing you the latest news from the Rails world. I will cover the highlights from the last two weeks. Let's get started!

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20180428-20180512)

39 people contributed to Rails in the last two weeks, including 9 for the first time! A big thank you to all of you!

If you'd like to see yourself on that board, why not check out the list of [open issues](https://github.com/rails/rails/issues), or get involved in the [core discussion list](https://groups.google.com/d/forum/rubyonrails-core).

### [Support streaming downloads from Google Cloud Storage](https://github.com/rails/rails/pull/32788)

Active Storage now supports streaming downloads from Google Cloud Storage. You will need version `1.11` or greater of the gem `google-cloud-storage`.

### [Add option `identify` to ActiveStorage::Blob](https://github.com/rails/rails/pull/32833)

This allows control over the content type identification performed by Active Storage. For instance, if `identify` is `false`, then you can provide your own `content_type` value.

### [Improve the performance of `ActiveSupport::Inflector.ordinal`](https://github.com/rails/rails/commit/0c54fc460e52d2b9aa02e1e27a090dbe7ee98829)

Big performance improvement for ordinal generation! The power of benchmarks-oriented solutions.

### [Use `did_you_mean` for spelling suggestions](https://github.com/rails/rails/pull/32289)

Now that Rails requires Ruby `2.3` or greater, Rails will use the gem `did_you_mean` for spelling suggestions. The gem is shipped with Ruby, and automatically required when the Ruby process starts.



### [Fix logic on disabling commit callbacks](https://github.com/rails/rails/pull/32807)

Callbacks were being called unexpectedly when errors occur due to a small issue with precedence of logical operators.

### [Reset `CONTENT_LENGTH` between test requests](https://github.com/rails/rails/pull/32773)

If a `POST` request was followed by a `GET` request in a controller test, then the `rack.input` and `RAW_POST_DATA` headers from the first request would be reset but the `CONTENT_LENGTH` header would leak to the second request.

As always there were many more changes to the Rails codebase than we can cover here. But you can read all about them [here](https://github.com/rails/rails/compare/master@%7B2018-04-28%7D...@%7B2018-05-12%7D)! Until next week!
