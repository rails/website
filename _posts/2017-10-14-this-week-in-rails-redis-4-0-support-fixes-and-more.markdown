---
layout: post
title: "This Week in Rails: Redis 4.0 support, fixes and more!"
categories: news
author: repinel
published: true
date: 2017-10-14
---

Hello everyone! This is [Roque](https://twitter.com/repinel) bringing you the latest news from the Rails world.

### [redis-rb 4.0 support](https://github.com/rails/rails/pull/30748)

Adds support to Redis greater or equal to `3.3`, and less than `5`.

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20171007-20171014)

25 people contributed to Rails the past week! If you'd like to join them, why not check out the list of [open issues](https://github.com/rails/rails/issues)?

### [Introduce blob representation to Active Storage](https://github.com/rails/rails/pull/30868)

Returns an `ActiveStorage::Preview` instance to preview a blob, or an `ActiveStorage::Variant` instance for an image.

### [Safer `redirect_back` method](https://github.com/rails/rails/pull/30850)

The `allow_other_host` can now block redirects to a different host. The option is `true` by default to make it backward compatible.

### [Fix Active Support cache clean up](https://github.com/rails/rails/pull/30789)

Rails was using the stored keys to remove files, instead of the filenames.

### [Fix Active Job to yield error when rescheduling fails](https://github.com/rails/rails/pull/30750)

The `retry_on` method now yields the actual error to the block instead of the exception class.

That's it for this week, as always, we couldn't cover all of the changes, but feel free to check the [commits](https://github.com/rails/rails/compare/master@%7B2017-10-07%7D...@%7B2017-10-14%7D). If you'd like to join them, check out the list of [open issues](https://github.com/rails/rails/issues). Until next week!
