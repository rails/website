---
layout: post
title: "This week in Rails - PostgreSQL 11 partitioned indexes support and more!"
categories: news
author: gregmolnar
published: true
date: 2020-02-09
---

Hello, this is [Greg](https://twitter.com/gregmolnar), bringing you the latest news about Ruby on Rails!

### [20 contributors to Rails in past week](https://contributors.rubyonrails.org/contributors/in-time-window/20200203-20200209)

There have been 20 contributors to Rails past week!&nbsp;

### [Default HSTS max-age directive to 2 years](https://github.com/rails/rails/pull/38345)

The new recommendation for the HSTS max-age directive is 2 years, and that's what Rails defaults to from now on.

### [Add support for partitioned indexes in PostgreSQL 11+](https://github.com/rails/rails/pull/37585)

This pull request adds support to retrieve partitioned indexes when asking for indexes in a table.&nbsp;

### [Add a fallback database config when loading schema cache](https://github.com/rails/rails/pull/38383)

The schema cache defaults to loading the 'primary' database config, however, if an app doesn't have a db config with a spec name of 'primary' the filename lookup will&nbsp; blow up. This pull request adds a fallback for this case.


That's it for this week, till next time!&nbsp;
