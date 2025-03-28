---
layout: post
title: "Capturing error reports in tests and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-03-28
---

Hi, [Wojtek](https://x.com/morgoth85) here. Let's explore last 2 week's changes in the Rails codebase.

[Add capture_error_reports](https://github.com/rails/rails/pull/54809)  
Captures all reported errors from within the block that match the given error class.

```ruby
reports = capture_error_reports(IOError) do
  Rails.error.report(IOError.new("What a Terrible Failure"))
  Rails.error.report(StandardError.new)
end
assert_equal 1, reports.size
assert_equal "What a Terrible Failure", reports.first.error.message
```

[Don't always escape JSON when rendering from controller](https://github.com/rails/rails/pull/54643)  
The JSON renderer doesn't escape HTML entities or Unicode line separators anymore.
Since the renderer is used to return a JSON document as *application/json*, it's typically not necessary to escape those characters, and it improves performance.

You can use the *escape: true* option or set *config.action_controller.escape_json_responses = true* to restore the escaping behavior.

[Load lazy route sets before inserting test routes](https://github.com/rails/rails/pull/54777)  
Without loading lazy route sets early, we missed *after_routes_loaded* callbacks, and risked invoking them with the test routes instead of the real ones if another load was triggered by an engine.

[Add RuboCop cache to GHA workflow templates](https://github.com/rails/rails/pull/54754)  
The aim is to speed up RuboCop checks by sharing the cache between workflow runs, when possible.

[Use a self-join for UPDATE with outer joins on PostgreSQL and SQLite](https://github.com/rails/rails/pull/54722)  
In PostgreSQL and SQLite UPDATE when an OUTER JOIN references the updated table in the ON clause, the join condition cannot be moved to the WHERE clause without breaking the query, so the current implementation is forced to use a subquery. We can support this with a more aggressive manipulation: we duplicate the updated table into the FROM clause with a self-join on the primary key.

[Guides update for PostgreSQL timestamp with time zone](https://github.com/rails/rails/pull/53687)  
Document how to use a configuration option to change the default timestamp data type from *timestamp without time zone* to *timestamp with time zone*.
  
_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-03-14%7D...main@%7B2025-03-28%7D)._
_We had [20 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250314-20250328) to the Rails codebase this past 2 weeks!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
