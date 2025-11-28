---
layout: post
title: "Active Support Instrumentation Documentation, QueryIntent#execute! and more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-11-28
---

Hi, it's [Vipul](https://www.saeloun.com/team/vipul/). Happy Let's explore this week's changes in the Rails codebase.

[Active Support Instrumentation Documentation](https://github.com/rails/rails/pull/56238)  
The Rails Foundation documentation team continues on improving different areas of the Guides.
This Pull Request updates the Active Support Instrumentation documentation to receive various additions, improvements and more.

[Ensure TimeWithZone#as_json always returns a UTF-8 string](https://github.com/rails/rails/pull/56242)  
This PR addresses a regression in Rails 8.1.0 where `ActiveSupport::TimeWithZone#as_json` was returning strings with incorrect encoding. 
Since `Time#xmlschema` returns a US-ASCII encoded string, `as_json` was returning `US-ASCII` instead of `UTF-8`. 
The fix ensures that the JSON representation always returns a properly encoded UTF-8 string.

[Handle closed PostgreSQL connections in retryable_query_error?](https://github.com/rails/rails/pull/56240)  
When a PostgreSQL connection dies unexpectedly, `retryable_query_error?` calls `@raw_connection.transaction_status`, which raises `PG::ConnectionBad` on a closed connection. 
The PostgreSQL adapter's `retryable_query_error?` previously handled two scenarios: when the connection is nil or when it's alive. 
This PR adds handling for a third case where the connection object exists but is closed, by rescuing `PG::ConnectionBad` and allowing the retry logic to proceed appropriately.

[Handle asynchronous raise in all of reconnect!](https://github.com/rails/rails/pull/56231)  
Three operations—`reconnect`, `reset_transaction`, and `clear_cache`—could take considerable time and remain susceptible to `TimeoutError` exceptions, 
potentially corrupting connection state. 
This change extends the exception-handling approach to fully encompass the entire `reconnect!` method.

[Ensure variants are loaded and processed synchronously just once](https://github.com/rails/rails/pull/56225)  
A fix has been introduced to avoid reprocessing variants during preview redirects. 
Previously, when generating a preview (e.g., for PDFs or videos), Active Storage would create the variant on the primary database, 
but a second lookup happened on a read replica before replication caught up — causing unnecessary reprocessing and failures. 
The change ensures the same variant instance is reused within the request, preventing redundant database queries and variant creation errors.

[Fix TimeWithZone#xmlschema when wrapping DateTime local time](https://github.com/rails/rails/pull/56216)
`ActiveSupport::TimeWithZone#xmlschema` was producing invalid ISO-8601 strings when instantiated with a `DateTime` used as local time. 
The implementation incorrectly assumed that `time.iso8601` always ends with `"Z"`.

```ruby
tz  = ActiveSupport::TimeZone["America/New_York"]
twz = ActiveSupport::TimeWithZone.new(nil, tz, DateTime.new(2025, 11, 7, 12))

twz.xmlschema
# Before
"2025-11-07T12:00:00+00:0-05:00" # invalid

# After
"2025-11-07T12:00:00-05:00" # correct
```

The fix updates the method to replace the entire timezone suffix (whether `Z` or `±HH:MM`) instead of just the final character, 
ensuring correct timezone offset calculation for both `Time` and `DateTime` instances.

[Fix CI eager loading when rake tasks invoke :environment before tests](https://github.com/rails/rails/pull/56212)  
The test environment sets `config.eager_load = ENV["CI"].present?` to enable eager loading in CI and catch autoloading bugs. 
However, when gems invoke the `:environment` rake task before tests run, Rails overrides this setting with `config.rake_eager_load` (which defaults to `false`), 
disabling eager loading in CI. This PR adds `config.rake_eager_load = ENV["CI"].present?` to the generated test environment configuration, 
ensuring eager loading behavior remains consistent in CI regardless of whether rake tasks trigger the `:environment` hook.

[QueryIntent#execute!](https://github.com/rails/rails/pull/56129)  
This PR introduces `QueryIntent#execute!` to improve Active Record's internal query execution architecture. 
Previously, query intents were passive containers passed through the system, but now they can actively execute queries and store results. 
This refactoring makes `QueryIntent` instances self-sufficient, they know which adapter they belong to and can ask the adapter to do work like query preprocessing. 
The change streamlines the query execution flow and sets the foundation for better handling of query results in different formats (raw or cast).

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-11-21%7D...main@%7B2025-11-28%7D)._
_We had [15 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20251121-20251128) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
