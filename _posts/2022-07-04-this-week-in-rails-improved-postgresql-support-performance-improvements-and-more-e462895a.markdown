---
layout: post
title: "Improved PostgreSQL support, performance improvements and more..."
categories: news
author: p8
published: true
date: 2022-07-04
---

Hi, this is Petrik, bringing you the latest news from the Rails world.  
  

[**Optimize Active Record batching**](https://github.com/rails/rails/pull/44945)

Instead of specifying a long list of ids for batch queries _(WHERE IN (...ids...))_, Active Record will iterate in ranges _(WHERE id \>= num1 AND id \< num2)_.  
  

[**Add validity for PostgreSQL indexes**](https://github.com/rails/rails/pull/45160)

When creating indexes with _CONCURRENTLY_, you could to end up with an invalid index. You can now ask an index if it's valid.  
  
[**Add support for PostgreSQL exclusion constraints**](https://github.com/rails/rails/pull/40224)  
This extends Active Record's migration/schema dumping to support PostgreSQL [exclusion constraints](https://www.postgresql.org/docs/12/sql-createtable.html#SQL-CREATETABLE-EXCLUDE).  
  

[**Add :force support to ActiveSupport::Cache::Store#fetch\_multi**](https://github.com/rails/rails/pull/45174)  
Setting _force: true_ forces a cache “miss,” meaning we treat the cached values as missing even if present. _#fetch\_multi_ &nbsp;now supports all of the _#fetch_ options.

  

[**Avoid validating a unique field if it has not changed and is backed by a unique index**](https://github.com/rails/rails/pull/45149)

Previously, when saving a record, Active Record would perform an extra query to check for the uniqueness of each attribute having a uniqueness validation, even if that attribute hadn't changed.

If the database has the corresponding unique index, then this validation can never fail for persisted records, and we can safely skip it.

  

[**Make Notifications::Fanout faster and safe**](https://github.com/rails/rails/pull/44469)  
This changes aims to improve _ActiveSupport::Notifications::Fanout_. It should make subscribing/unsubscribing to in-flight topics safer. It is also significantly faster for all cases, except for evented.  
  

[**Strings returned from strip\_tags are correctly tagged html\_safe?**](https://github.com/rails/rails/pull/45218)

As the strings returned from _strip\_tags_ contain no HTML elements and the basic entities are escaped, they are safe to be included as-is as PCDATA in HTML content. Tagging them as html-safe avoids double-escaping entities when being concatenated to a _SafeBuffer_ during rendering.  
  

[**Correctly check if frameworks are disabled when running app:update**](https://github.com/rails/rails/pull/45351)

When creating a new Rails application you can use the _--skip-\*_ options to disable frameworks. After upgrading to a new version to Rails you can update all configurations by running _bin/rails app:update_. This change makes sure the disabled frameworks remain disabled after upgrading.  
  

[**Enable connection pooling by default for MemCacheStore and RedisCacheStore**](https://github.com/rails/rails/pull/45235)

Cache stores can enable connection pooling using a [single _pool_ option](https://github.com/rails/rails/pull/45111). This option will default to true now for MemCacheStore and RedisCacheStore.  
  

[**Add :urlsafe option to MessageVerifier and MessageEncryptor constructors**](https://github.com/rails/rails/pull/45419)

The MessageVerifier and [MessageEncryptor](https://github.com/rails/rails/pull/45473) constructors now accept a _:urlsafe_ option. When enabled, this option ensures that messages use a URL-safe encoding.  
  

[**Support calling in\_batches with descending order without a block**](https://github.com/rails/rails/pull/45282)

All batching methods [can be called](https://github.com/rails/rails/pull/30590) with a descending order. This change adds that ability to _in\_batches_ when called without a block.  
  

[**Allow db:prepare to load the schema if the database already exists but is empty**](https://github.com/rails/rails/pull/45464)

Previously, if the database exists but has not been populated with tables, _db:prepare_ would run all migrations.  
Now _db:prepare_ will load the schema, then run any remaining migrations, to bring the database up to state.  
  
Since last time, [84 people contributed to Rails](https://contributors.rubyonrails.org/contributors/in-time-window/20220522-20220702). As usual, there are too many changes to cover them all, but you can check out all of them [here](https://github.com/rails/rails/compare/main@%7B2022-05-13%7D...main@%7B2022-05-21%7D). Until next time!

