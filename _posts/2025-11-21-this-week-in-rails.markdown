---
layout: post
title: "This Week in Rails: November 21, 2025"
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-11-21
---


Hi, it's [zzak](https://github.com/zzak). Let's explore this week's changes in the Rails codebase.

[Add support for per-adapter migration strategy](https://github.com/rails/rails/pull/56204)  
You can now set `migration_strategy` on individual adapter classes, overriding
the global `ActiveRecord.migration_strategy`. This allows individual databases to
customize migration execution logic:

```ruby
class CustomPostgresStrategy < ActiveRecord::Migration::DefaultStrategy
  def drop_table(*)
    # Custom logic specific to PostgreSQL
  end
end

ActiveRecord::ConnectionAdapters::PostgreSQLAdapter.migration_strategy = CustomPostgresStrategy
```

[Make explain accept hash format syntax](https://github.com/rails/rails/pull/56198)  
This PR changes `EXPLAIN` clause building for MySQL and PostgreSQL adapters to accept options in hash format. This allows more flexibility when specifying options such as the output format.

```ruby
Car.all.explain(format: :json)
# or
Car.connection.explain(query, [], [{format: :json}]
# will generate the proper `FORMAT=JSON` on MySQL or `FORMAT JSON` on PostgreSQL
```

[Fast failure mode for local CI](https://github.com/rails/rails/pull/56194)  
This PR introduces a cli argument `--fail-fast` (or `-f`), as commonly used by for example minitest and RSpec.

[Support text/markdown format in DebugExceptions middleware](https://github.com/rails/rails/pull/56180)  
Add support for returning markdown-formatted error responses when the HTTP client prefers `text/markdown` in the `Accept` header.
When `text/markdown` is requested, the middleware renders the existing text templates with `Content-Type: text/markdown` instead of `text/html`. This allows CLI tools (e.g., Claude Code) and other clients to receive byte/token-efficient error output in markdown format.

[Implement LocalCache strategy on MemoryStore](https://github.com/rails/rails/pull/56152)  
This PR simply prepends `Strategy::LocalCache` to `ActiveSupport::Cache::MemoryStore` which adds common behavior for cache stores. The memory store needs to respond to the same interface as other cache stores (e.g. `ActiveSupport::NullStore`).


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-11-14%7D...main@%7B2025-11-21%7D)._  
_We had [19 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20251114-20251121) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
