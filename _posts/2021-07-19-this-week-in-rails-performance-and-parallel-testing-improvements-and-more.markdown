---
layout: post
title: "Performance and parallel testing improvements and more!"
categories: news
author: gregmolnar
published: true
date: 2021-07-19
---

Hi, this is [Greg](https://twitter.com/gregmolnar), bring you the latest news of the Rails world. It's been a quiet week, so we don't have much changes to cover this time.

### [Fix try and try! performance slowdown in Ruby 2.7+](https://github.com/rails/rails/pull/42796)

This PR fixes a performance regression in _try_ and _try!_ under ruby 2.7+.

### [Fix eager_loading? when ordering with Hash syntax](https://github.com/rails/rails/pull/42782)

After this change, _eager\_loading?_ is triggered correctly when using order with hash syntax on an outer table, instead of raising an error.

### [Parallelize tests only when there are enough to justify the parallelization overhead](https://github.com/rails/rails/pull/42761)

Parallelizing tests has a cost in terms of database setup and fixture loading. This change makes Rails disable parallelization when the number of tests is below a configurable threshold.

[29 people](https://contributors.rubyonrails.org/contributors/in-time-window/20210710-20210717) contributed to Rails since last time. All the changes can be checked [here](https://github.com/rails/rails/compare/@%7B2021-07-10%7D...main@%7B2021-07-17%7D)[.](https://github.com/rails/rails/compare/@%7B2021-06-27%7D...main@%7B2021-07-02%7D) Until next week!
