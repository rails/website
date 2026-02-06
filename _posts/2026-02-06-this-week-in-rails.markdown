---
layout: post
title: "This Week in Rails: February 6, 2026"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-02-06
---


Happy Friday! This is [Greg](https://greg.molnar.io), bringing you the latest changes in the Rails codebase. It was a quiet week, but there are still noteworthy changes, let's explore them.

[Read from _ENV['REVISION']_ if present](https://github.com/rails/rails/pull/56742)  
`Rails.app.revision` now checks `ENV["REVISION"]` before falling back to the `REVISION` file or git.

[Improve error page to make nested stack traces more discoverable](https://github.com/rails/rails/pull/56692)  
This pull request adds a small arrow on the side of the summary bar of the error page in development and it can be clicked to reveal the stack trace.

[Pass SQL query to query log tags](https://github.com/rails/rails/pull/56683)  
With this change, the SQL query is passed to query log tags. If you are using
the query log tags for debugging, you can access the SQL query like this:
```ruby
config.active_record.query_log_tags = [
  sql_length: ->(context) { context[:sql].length }
]
```

[Add `unique_by` option to `insert_all!`](https://github.com/rails/rails/pull/56454)   
`insert_all!` has a new `unique_by` option now for PostgreSQL and SQLite. By default rows are considered to be unique by every unique index on the table.  
To check uniqueness according to just one unique index, pass the `:unique_by` option to the method.  
Unique indexes can be identified by columns or name:
```ruby
unique_by: :isbn
unique_by: %i[ author_id name ]
unique_by: :index_books_on_isbn
```
The same behavior already exist on `insert_all`.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-01-30%7D...main@%7B2026-02-06%7D)._  
_We had [19 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260130-20260206) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
