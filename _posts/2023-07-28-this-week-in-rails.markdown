---
layout: post
title: "This Week in Rails - July 28, 2023"
categories: news
author: zzak
published: true
date: 2023-07-28
---


Hi, it's [zzak](https://github.com/zzak). Let's explore this week's changes in the Rails codebase.

[Rack::Lint on Rails middleware tests](https://github.com/skipkayhil/rails/issues/5)  
While this work is not technically user-facing, it's important to ensure the future of Rails continues to maintain compatibility with the [Rack SPEC](https://github.com/rack/rack/blob/main/SPEC.rdoc). You can read more about the [Rack 3 upgrade guide](https://github.com/rack/rack/blob/6d16306192349e665e4ec820a9bfcc0967009b6a/UPGRADE-GUIDE.md) if you're interested or maintain a library that depends on Rack.
  

[Sort SchemaCache members when dumping it](https://github.com/rails/rails/pull/48824)  
This PR makes the results of generating the schema cache to be consistent, allowing use of the file digest for cache keys.
  

[Add tags to audio analyzer metadata](https://github.com/rails/rails/pull/48823)  
With this change Active Storage will now provide any additional tags from the metadata when analyzing audio files. This can be useful if you need to access the encoder, for example.
  

[Introduce "capture_emails" and "capture_broadcasts"](https://github.com/rails/rails/pull/48798)  
This PR reverts the previously unreleased behavior added to "assert_emails" and "assert_broadcasts" into these two new methods.
  

[Make ActiveRecord's quoted name caches thread-safe on JRuby/TruffleRuby](https://github.com/rails/rails/pull/48773)  
This commit resolves a thread-safety issue when running a Rails application on TruffleRuby. ActiveRecord's quoted name caches are updated when building SQL queries. If two threads are building queries at the same time, they may both attempt to update the cache. This can cause two threads to see totally different cache stores, leading to multiple live caches across different threads which will consume extra memory and may be confusing to debug.
  

[Prevent inspecting transmit data if not necessary](https://github.com/rails/rails/pull/48772)  
Currently on every call to "ActionCable::Channel::Base#transmit", debug log message is generated that inspects the provided data object. The message is generated even if the logger's level is above WARN. This patch makes it so the message is generated only when it can be logged.
  

[Make all cache stores return a boolean for "#delete"](https://github.com/rails/rails/pull/48638)  
This PR makes the behavior of "Rails.cache.delete('key')" consistent, so that it returns "true" if an entry exists (and "false" otherwise).
Previously, the RedisCacheStore and FileStore behaved differently.
  

[Restore behavior of "where.missing" and "where.associated" on enums](https://github.com/rails/rails/pull/48738)  
This PR fixes a regression where calling the "associated" method would result in an incorrect SQL query, leading to confusing results.
  

[Lazily deserialize cache entries](https://github.com/rails/rails/pull/48754)  
This adds a cache optimization such that expired and version-mismatched cache entries can be detected without deserializing their values.  This optimization is enabled when using cache format version >= 7.1 or a custom serializer.  
  

[Support replacing cache compressor](https://github.com/rails/rails/pull/48451)  
This PR adds support for replacing the compressor used for serialized cache entries, by specifying the ":compressor" option on "config.cache_store". Similar to the ":coder" option to replace the serializer which are responsible for a cached value, coders are responsible for serializing the entire "ActiveSupport::Cache::Entry" instance.
  


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-07-21%7D...main@%7B2023-07-28%7D)._  
_We had [20 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230721-20230728) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
