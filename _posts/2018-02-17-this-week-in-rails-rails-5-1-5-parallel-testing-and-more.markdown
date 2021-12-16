---
layout: post
title: "Rails 5.1.5, parallel testing and more!"
categories: news
author: repinel
published: true
date: 2018-02-17
---

Hello everyone! This is [Roque](https://twitter.com/repinel) bringing you the latest news from the Rails world.

### [Rails 5.1.5 released 🎉](https://rubyonrails.org/2018/2/14/Rails-5-1-5-has-been-released)

Release 5.1.5 is out, but you can still help the community by testing 5.2.0.rc1 to ensure it is solid.

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20180210-20180217)

26 people contributed to Rails the past week! If you'd like to join them, why not check out the list of [open issues](https://github.com/rails/rails/issues)?

### [On writing software well: pilot episode](https://www.youtube.com/watch?v=H5i1gdwe1Ls)

This is first of a serie of episodes recently released by DHH. Check out the full list on [YouTube](https://www.youtube.com/channel/UCUkM9uMpWatT7gVWShgtKFw).

### [Parallel testing](https://github.com/rails/rails/pull/31900)

In Rails 6.0.0, new application will run tests in parallel by default. The number of parallel workers is customizable, and which one will have its own temporary database.
I recommend reading the awesome [pull request description](https://github.com/rails/rails/pull/31900#issue-167225859).
Good job!

### [Custom serializers for Active Job arguments](https://github.com/rails/rails/pull/30941)

This brings more flexibility on how arguments are passed to jobs.
Arguments can be serialized using a simple interface described [here](https://github.com/rails/rails/pull/30941#issue-147799895).

### [Add `#create_or_find_by`](https://github.com/rails/rails/pull/31989)

This is similar to `#find_or_create_by`, but avoids querying the table first before attempting to insert a row.
The new approach relies on unique constraints to try inserting a row first, and selecting later. This is very helpful to high throughput application that could have data changes between a `SELECT` and a `INSERT`.

### [Add support for connection pooling on Redis cache store](https://github.com/rails/rails/pull/31866)

This will keep the number of Redis connections under control.

That's it for this week. Many more changes were introduced to Rails than were featured here, check out the [full week of commit activity](https://github.com/rails/rails/compare/master@%7B2018-02-10%7D...@%7B2018-02-17%7D) to learn more!

Until next time!
