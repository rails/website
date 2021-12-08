---
layout: post
title: "Performance improvements, collection cache versioning and more"
categories: news
author: morgoth85
published: true
date: 2019-04-19
---

Hello. This is [Wojtek](https://twitter.com/morgoth85) reporting on recent changes from Rails world.

### [Collection cache versioning](https://github.com/rails/rails/pull/34378)

Add _cache\_version_ on relation to support recyclable cache keys via the versioned entries in _ActiveSupport::Cache_. This also means that _cache\_key_ will now return a stable key that does not include the max timestamp or count any more.

### [Speed up dirty tracking](https://github.com/rails/rails/pull/35933)

Reports 2x ~ 30x faster execution time compared to original implementation.

### [Add dirty methods for store accessors](https://github.com/rails/rails/pull/19333)

It is now possible to use methods defined by Dirty module on store accessors.

### [Add after_save_commit callback shortcut](https://github.com/rails/rails/pull/35804)

Adds shortcut for very common case:
```
after_commit :hook, on: [ :create, :update ]
```

### [Notes tags registration](https://github.com/rails/rails/pull/35906)

It is now possible to register custom tags that will be included on _bin/rails notes_ command.  

### [Add db:prepare rake task](https://github.com/rails/rails/pull/35768)

Based on state of database it runs _setup_ or _migrate_ tasks.

### [Add detach_from to ActiveSupport::Subscriber](https://github.com/rails/rails/pull/35691)

It is now possible to opt-out from listening on chosen events.

### [Factorize bin/update in bin/setup](https://github.com/rails/rails/pull/33139)

Replaced two files with one. From now on _bin/setup_ should be idempotent in the project, thus should run fine on the first time setup and after any update.

[71 people](https://contributors.rubyonrails.org/contributors/in-time-window/20190331-20190419) contributed to Rails in the last 3 weeks. You can see the [full list of changes here](https://github.com/rails/rails/compare/master@%7B2019-03-31%7D...@%7B2019-04-19%7D).  

Until next time!
