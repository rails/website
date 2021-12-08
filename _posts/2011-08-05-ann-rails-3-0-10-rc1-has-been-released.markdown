---
layout: post
title: ! '[ANN] Rails 3.0.10.rc1 has been released!'
categories: []
author: aaronp
published: true
date: 2011-08-05 00:31:00.000000000 +01:00
---
Hi everyone,

Rails 3.0.10.rc1 has been released.  As usual, please try out this release candidate and report any issues to the [ruby on rails core mailing list](http://groups.google.com/group/rubyonrails-core).  If no issues are found, we'll release 3.0.10 on August 8th (around 5pm PDT).

If you do find issues, please send them to the rails core mailing list.  If the release candidate is found to not be backwards compatible with the previous release, we'll do another release candidate and postpone the final release date.

Remember that this is your chance to veto / postpone the rails release.  Please take this opportunity to test!

## CHANGES

You can find an exhaustive list of changes on [github](https://github.com/rails/rails/compare/v3.0.9...3-0-10).  Here are some notable excerpts:

From ActionPack:

* Fixes an issue where cache sweepers with only after filters would have no controller object, it would raise undefined method `controller_name` for `nil` [jeroenj]

* Ensure status codes are logged when exceptions are raised.

* Subclasses of OutputBuffer are respected.

* Fixed `ActionView::FormOptionsHelper#select` with `:multiple => false`

* Avoid extra call to `Cache#read` in case of a fragment cache hit

From ActiveRecord:

* Magic encoding comment added to schema.rb files

* schema.rb is written as UTF-8 by default.

* Ensuring an established connection when running `rake db:schema:dump`

* Association conditions will not clobber join conditions.

* Destroying a record will destroy the HABTM record before destroying itself.  GH #402.

* Make `ActiveRecord::Batches#find_each` to not return `self`.

* Update `table_exists?` in PG to to always use current `search_path` or schema if explictly set.

## THE END

Thanks!

-Aaron <3