---
layout: post
title: "Continuous integration at your fingertips"
categories: news
author: claudiob
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-03-14
---


Hi, it's [Claudio Baccigalupo](https://github.com/claudiob). Let's explore this week's changes in the Rails codebase.

[Structured CI with bin/ci](https://github.com/rails/rails/pull/54693)  
Introduce `bin/ci` to standardize CI workflows based on a new DSL for declaring workflow steps in `config/ci.rb`.
`bin/ci` runs your all tests, linters, and security scanners. And it optionally signs off on your work by giving your PR a green status.

[Don’t always append primary keys to ORDER conditions](https://github.com/rails/rails/pull/54679)  
If `nil` is the last element of an array passed to `implicit_order_column`, do not append the primary key or the query constraints.

[Raise `DoubleRenderError` on `head` after rendering](https://github.com/rails/rails/pull/54655)  
Previously, calling `head` to set the response code would silently remove a previously set response body.

[Make importmap changes invalidate HTML etags](https://github.com/rails/rails/pull/54021)  
Previously you needed to manually add an etag to the `ApplicationController` to ensure any changes would invalidate the HTML response etag.

[Generate session controller tests for auth generator](https://github.com/rails/rails/pull/53726)  
This PR ensures that that authentication generated controllers include functional tests.

[Fix regression in ActiveRecord::Result#column_types](https://github.com/rails/rails/pull/54743)  
When a column type is `nil` in the original `column_types` array, the previous implementation was returning `nil` instead of falling back to the default type. 

[Fix SQLite3 adapter to quote Infinity and NaN](https://github.com/rails/rails/pull/54735)  
When SQL strings are built by the sqlite3 adapter (for example when using `upsert`), the values "Infinity", "-Infinity", and "NaN" should be quoted.

[Add respond_to_missing? in ActiveRecord::Migration](https://github.com/rails/rails/pull/54725)  
This complements the existing `method_missing` method.

[Add inspect to ActiveStorage::Service, Registry, and Configurator](https://github.com/rails/rails/pull/53153)  
Previously, pretty-printing `ActiveStorage::Blob.services` could leak the entire configuration, including secrets.

[Fixed race condition in PostgreSQL type_map initialization](https://github.com/rails/rails/issues/51780)  
The issue has been fixed in two consecutive [Pull](https://github.com/rails/rails/pull/54711) [Requests](https://github.com/rails/rails/pull/54738).

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-03-07%7D...main@%7B2025-03-14%7D)._
_We had [31 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250307-20250314) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
