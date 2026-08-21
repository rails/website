---
layout: post
title: "Banner or no banner, that’s the question"
categories: news
author: Claudio Baccigalupo
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-08-21
---


Hi, it's [Claudio Baccigalupo](https://claudiob.github.io/style/). Let's explore this week's changes in the Rails codebase.

[Add --no-banner to bin/rails console](https://github.com/rails/rails/pull/58471)  
I love seeing the Rails logo when I run the console. If you disagree, `bin/rails console --no-banner` will remove it for you.

[Add support for the HTTP QUERY method](https://github.com/rails/rails/pull/57973)  
`ActionDispatch::Request` gets the `RFC10008` constant appended to `HTTP_METHODS`, plus a `query?` predicate.

[Keep the relation scope in Relation#update](https://github.com/rails/rails/pull/58320)  
`update` and `update!` now respect the scope of the Active Record Relation. This is a breaking change:
`relation.update(ids, …)` called with an id outside the relation used to update the record and now raises `RecordNotFound`.

[Join an Array accept in file_field_tag](https://github.com/rails/rails/pull/58097)  
Passing an Array of MIME types to `file_field_tag` now concatenates its elements the right away:
```ruby
file_field_tag("picture", accept: ["image/png", "image/gif"])
# Before: accept="image/png image/gif"
# After:  accept="image/png,image/gif"
```

[Make Rails more ractor-safe](https://github.com/rails/rails/pull/58529)  
Many commits landed this week to [generate URL helpers](https://github.com/rails/rails/pull/58529) inside a Ractor, [call them](https://github.com/rails/rails/pull/58531), and to make [to_partial_path](https://github.com/rails/rails/pull/58530), [_prefixes](https://github.com/rails/rails/pull/58509), [callbacks](https://github.com/rails/rails/pull/58522), [default_headers](https://github.com/rails/rails/pull/58517), [Action View subscribers](https://github.com/rails/rails/pull/58476) and [flash types](https://github.com/rails/rails/pull/58510) ractor safe.

[Read the columns of many tables in one query](https://github.com/rails/rails/pull/58494)  
`columns` was the last schema reader that still read one table at a time, so dumping the schema cache paid a statement per table for it.
It now takes a list of tables as well as a single one and [SQLite starts batching](https://github.com/rails/rails/pull/58498)   the list form it already accepted.

[Delegate ActiveModel::Type::Binary::Data#as_json to its value](https://github.com/rails/rails/pull/58474)  
Rails defines `as_json` in most primitive objects and `ActiveModel::Type::Value`.
This does not work for binary data values , which should just handle itself as a string.

[Add temporary name to App's Executor/Reloader](https://github.com/rails/rails/pull/58521)  
Makes it easier to identify these subclasses when debugging.
```ruby
d(dev):001> Rails.app.executor
# Before: => #<Class:0x0000000128412318>
# After: => ActiveSupport::Executor(#<D::Application:0x00000001131b5008>)
```

[Deprecate ActiveRecord::Relation#uniq!](https://github.com/rails/rails/pull/58525)  
Was introduced as part of the migration path toward Rails 7.0's defaults and is no longer needed.

[Honour all_queries default scopes in internal queries](https://github.com/rails/rails/pull/58485)  
Introduces an `all_queries_scope` method to build an internal query scope. Applies default scopes with `all_queries: true` and rhe current scope from `scoping(all_queries: true)`.

[Freeze the Controller default_url_options](https://github.com/rails/rails/pull/58483)  
Affects the `default_url_options` used to tweak the generated URLs inside controllers/views (not the one on the `RouteSet` object).

[Remove "missing" workarounds from Active Record](https://github.com/rails/rails/pull/58469)  
Removes methods that were needed when using the 6.1 Marshal format since Records could be loaded without explicitly having attribute methods defined. 
Now that the 6.1 format has been removed, these are no longer necessary.

[Don't raise LoadError when a test:* folder is missing](https://github.com/rails/rails/pull/58464)  
A missing folder will now map to a glob that matches nothing, so the command will report zero tests and exit successfully. 

[Extract model schema state into SchemaContext](https://github.com/rails/rails/pull/58437)  
A SchemaContext now exists for each Active Record model, owning schema-dependent state such as columns, attribute types, column defaults, and statement caches. 
Model methods delegate access to this context.

[Return a UTC time from Time.rfc3339`for "Z" inputs](https://github.com/rails/rails/pull/58402)  
The Active Support definition now returns a UTC time for the "Z" designator, matching Ruby's implementation.
```ruby
Time.rfc3339("2026-08-07T10:00:00Z")
# Before: 2026-08-07 10:00:00 +0000 (utc? => false)
# After:  2026-08-07 10:00:00 UTC   (utc? => true)
```


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-08-14%7D...main@%7B2026-08-21%7D)._  
_We had [22 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260814-20260821) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
