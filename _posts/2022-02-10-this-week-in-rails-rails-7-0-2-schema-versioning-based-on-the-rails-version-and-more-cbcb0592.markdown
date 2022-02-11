---
layout: post
title: "Rails 7.0.2, schema versioning based on the Rails version, and more"
categories: news
author: p8
published: true
date: 2022-02-11
---

Hi, this is Petrik, bringing you the latest news from the Rails world.  
  
[**Rails 7.0.2 has been released**](https://rubyonrails.org/2022/2/8/Rails-7-0-2-has-been-released)   
While this looks like a regular patch release there are a few notable changes.  
First, one feature that was introduced in 7.0.0 was removed: the ability to pass a _service\_name_ param to _DirectUploadsController_. This feature was causing significant issues when upgrading from Rails 6.1, so the Rails team decided to remove it while they work on a backward compatible change. They don’t take this decision lightly, and usually don’t remove features after they are released without a proper deprecation cycle, but at this time they decided to prioritize making it easier for people to upgrade.  
  

Finally, with the same goal in mind, Rails 7.0.2 introduced a new feature, [the ability to version the database schema based on the Rails version](https://github.com/rails/rails/pull/44286). This new feature will allow existing applications to still load their database schemas generated in Rails 6.1, with the same behavior as before, keeping it matching the production database schema.  
  
[**Fiber-save ConnectionPool**](https://github.com/rails/rails/pull/44219)  
 When _ActiveSupport::IsolatedExecutionState.isolation\_level_ is set to _:fiber_, the connection pool now supports multiple Fibers from the same Thread checking out connections from the pool.  
  
[**Make #to\_fs the default replacement for #to\_s(:format)**](https://github.com/rails/rails/pull/44354)  
_#to\_s(:format)_ was recently [deprecated](https://github.com/rails/rails/pull/43772) in favor of _#to\_formatted\_s_, as Ruby 3.1. has optimized interpolation. _#to\_formatted\_s_ is a pretty long name for a frequently used method. This change makes _#to\_fs_ the default in Rails internals and the documentation. _#to\_formatted\_s_ is still an alias to _#to\_fs_.  
  
[**Default the ActiveSupport::MessageEncryptor serializer to JSON**](https://github.com/rails/rails/pull/42846)   
Using JSON offers a more secure alternative to the current Marshal serializer.  
Existing apps are provided with an upgrade path to migrate to _JSON_ as described in the [upgrading guides](https://edgeguides.rubyonrails.org/upgrading_ruby_on_rails.html#new-activesupport-messageencryptor-default-serializer).  
  
[**Dump the precision for datetime columns following the new defaults**](https://github.com/rails/rails/pull/44358)  
Since Rails 7.0 the datetime column precision is 6 by default. That means that _t.datetime_ calls without setting the _:precision_ option would have its precision set to 6. This affected PostgreSQL and SQLite3. Now the dumper will generate the precision as 0 for columns without precision and omit it when the precision is 6.

  
[**Add job\_id and exception message to ActiveJob retry/discard logging**](https://github.com/rails/rails/pull/42990)  
In log messages for performed jobs, the Job ID and exception message were already included. But log messages related to retry/discard behavior from _ActiveJob::Exceptions_ did not include the Job ID or exception message. We now include them, in a consistent format with other existing messages.  
  
[**Reverse the order of INSERT statements in structure.sql dumps**](https://github.com/rails/rails/pull/44363)  
This should decrease the likelihood of merge conflicts. New migrations will now be added at the top of the list.  
For existing apps, there will be a large diff the next time _structure.sql_ is generated.  
  
Since last time, [25 people](https://contributors.rubyonrails.org/contributors/in-time-window/20220205-20220212) contributed to Rails. As usual, there's too much changes to cover them but you can check out all of these [here](https://github.com/rails/rails/compare/main@%7B2022-02-05%7D...main@%7B2022-02-11%7D). Until next time!

