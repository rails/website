---
layout: post
title: "This Week in Rails: looots of fixes after the release and more."
categories: news
author: vipulnsward
published: true
date: 2017-03-12
---

Hello!   
  
This is [Vipul](https://www.bigbinary.com/team/vipul) reporting from Delhi today, on this colourful [Holi](https://en.wikipedia.org/wiki/Holi) weekend 💥  
&nbsp;  
Lets take a look at what's the latest news from the world of Ruby on Rails !  
So many fixes and much more.

## Featured

### [Google Summer of Code 2017](https://rubyonrails.org/2017/3/2/google-summer-of-code-2017)

We’re very happy to announce that Ruby on Rails has been accepted as an organization for the Google Summer of Code (GSoC) 2017 edition!

## Fixed

### [Make sure local cache is cleared even if it's throwing error](https://github.com/rails/rails/pull/28373)

When an error was thrown from the middleware chain, it was sometimes not getting caught by `LocalCache::Middleware`.  
  
This change, makes sure that we safely catch the errors and local cache is successfully cleared.

### [Fix `rake db:schema:load` with subdirectories](https://github.com/rails/rails/pull/28287)

Previously `db:schema:load` didn't work with migrations based out of subdirectories.  
  
This change starts using `Migrator.migration_files` in
`assume_migrated_upto_version` to fix the issue.

### [Fix malformed asset_url in ActionController::Renderer](https://github.com/rails/rails/pull/28250)

This change fixes an issue with malformed asset_url when rendering a template with `ActionController::Renderer`.

### [Fix select with block doesn't return newly built records in `has_many` association](https://github.com/rails/rails/pull/28354)

The select method in `QueryMethods` is also an enumerable method. Ideally, enumerable methods with block should delegate to records on
`CollectionProxy` and not the scope. 
  
This change fixes this behaviour that select with block doesn't return newly built records in `has_many` association.

### [Update `titlelize` regex to allow apostrophes](https://github.com/rails/rails/commit/48b37f127fb44b787ae6c0710982d7949b14454f)

In a previous fix the regex in `titlelize` was updated to not match apostrophes to better reflect the nature of the transformation.  
  
Unfortunately this had the side effect of breaking capitalization on the first word of a sub-string, eg:  

```ruby  
>> "This was 'fake news'".titleize
=> "This Was 'fake News'"
```

This change fixes this behaviour by extending the look-behind to check for word character apart from an apostrophe.

### [Fix `deserialize` with JSON array](https://github.com/rails/rails/commit/6ec2e8ac220024c6e8159c81dbe76ef8e812ed6f)

JSON array data was being returned in a stringified form, due to broken deserialization.
  
This change fixes deserialization behaviour.

## Deprecated

### [Deprecate `Migrator.schema_migrations_table_name`](https://github.com/rails/rails/pull/28351)

`SchemaMigration` model was extracted and `SchemaMigration.table_name` was being used instead in places where `Migrator.schema_migrations_table_name` was being used previously.  
  
`Migrator.schema_migrations_table_name` is now deprecated in favour of `SchemaMigration.table_name`.

## Improved

### [Added `reverse_merge`/`reverse_merge!` to AC::Parameters](https://github.com/rails/rails/pull/28355)

This change adds the `reverse_merge` and `reverse_merge!` methods to `ActionController::Parameters`, similar to their corresponding Hash methods.

### [Do not take screenshot if driver does not support screenshot](https://github.com/rails/rails/pull/28264)

`Capybara::RackTest::Driver` does not support taking screenshots. If we call
`#save_screenshot` on `Capybara::RackTest::Driver` , it will raise an error.  
  
To prevent errors, if a driver in Systems test does not support screenshot, we do not call it after this change.

There were many other great [pull requests](https://github.com/rails/rails/compare/master@%7B2017-02-26%7D...@%7B2017-03-04%7D) this week from [20 contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20170226-20170304), including 4 first-timers. Thank you all!  
  
Outside of code changes, we had many more good news this and the previous week.

Until next week!

