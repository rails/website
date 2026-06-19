---
layout: post
title: "This Week in Rails: June 19, 2026"
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-06-19
---


Hi, it's [zzak](https://github.com/zzak). This week was full of changes, so let's pull into the station and take a look.

[Rails Foundation documentation guides](https://github.com/rails/rails/pull/57747)  
The documentation project reworked the Multiple Databases guide, now ready for community review, and reorganized the [Internationalization guide](https://github.com/rails/rails/pull/57735) from beginner-friendly setup through advanced topics.

[Allow query log tags to be configured per connection pool](https://github.com/rails/rails/pull/57641)  
Database configurations can now override query log tag settings per pool with `query_log_tags`, including the format, comment position, or `false` to opt a pool out.

```yaml
production:
  primary:
    query_log_tags:
      format: sqlcommenter
      prepend_comment: false
  archive:
    query_log_tags: false
```

[Make ActiveRecord::Base.with call Object#with when passed a block](https://github.com/rails/rails/pull/57693)  
`ActiveRecord::Base.with` still handles CTEs without a block, but block calls now delegate to `Object#with` so class attributes can be temporarily set inside the block.

[Fix increment and decrement with query constraints](https://github.com/rails/rails/pull/57679)  
`increment!` and `decrement!` now include every query constraint column in the counter update, keeping constrained models scoped correctly.

[Raise when change assertions receive static values](https://github.com/rails/rails/pull/57680)  
`assert_difference`, `assert_changes`, and their no-change variants now raise `ArgumentError` for static expressions like `assert_no_changes(a.size)`, which would otherwise compare the same value before and after the block.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-06-12%7D...main@%7B2026-06-19%7D)._  
_We had [20 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260612-20260619) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
