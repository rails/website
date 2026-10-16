---
layout: post
title: "Faster blank? checks, safer SQLite rollbacks, and more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-10-16
---

Hi, it's [Vipul](https://www.saeloun.com/team/vipul/). Let's explore this week's changes in the Rails codebase.

[Agents on Rails: Can a model build on its own work?](https://rubyonrails.org/2026/10/13/agents-on-rails-stage-3)  
Stage 3 adds multi-step tasks where each ticket starts a fresh session, while files and notes carry forward. The benchmark now combines all three stages into one leaderboard, with tasks spanning legacy applications and new projects.

Here are some highlights from the changes merged to Rails `main` this week.

[Speed up String#blank? for ASCII strings](https://github.com/rails/rails/pull/58745)  
`String#blank?` now checks ASCII-only strings by scanning their bytes instead of running a regular expression. Strings containing non-ASCII characters keep the existing regexp path and its encoding-specific whitespace handling. A [follow-up](https://github.com/rails/rails/pull/59030) removes repeated `bytesize` calls from the scan.

[Render collections with fewer intermediate objects](https://github.com/rails/rails/pull/59118)  
Action View now renders collection partials into one shared output buffer when neither collection caching nor a per-item layout needs the items separately. This avoids allocating buffers and rendered-template wrappers just to concatenate them afterward. Collections using caching or per-item layouts keep their existing rendering path.

[Preserve the original error when SQLite rolls back a transaction](https://github.com/rails/rails/pull/59033)  
SQLite can roll back a transaction itself after errors such as a full disk. Rails used to issue another rollback, masking the original failure with "cannot rollback - no transaction is active" and skipping record cleanup. It now avoids the redundant rollback, preserves the original failure as the cause of `ActiveRecord::StatementInvalid`, restores record state, and runs `after_rollback` callbacks.

[Include PostgreSQL extension schemas in schema dumps](https://github.com/rails/rails/pull/59017)  
Following the [earlier extension-dumping fixes](https://rubyonrails.org/2026/9/25/this-week-in-rails), this covers relocatable extensions such as `pg_trgm` in schemas outside `dump_schemas`. Rails now emits `create_schema` with `if_not_exists: true` for schemas referenced by dumped extensions, so loading the dump works whether the schema already exists or needs to be created.

```ruby
create_schema "extensions", if_not_exists: true
enable_extension "extensions.pg_trgm"
```

[Fix join order when eager loading with merged joins](https://github.com/rails/rails/pull/59059)  
Combining `eager_load` with joins merged from another model could generate SQL that referenced a table before joining it. Rails now puts the eager-load joins first. A [related fix](https://github.com/rails/rails/pull/59060) handles the same ordering problem with `left_joins`.

[Fix eager loading with a limit and a CTE join](https://github.com/rails/rails/pull/59061)  
Combining a CTE join, `eager_load`, and `limit` could raise `ActiveRecord::ConfigurationError` because Rails treated the CTE name as an association name. The limit check now recognizes CTE joins and accounts for their ability to match multiple rows.

[Keep Active Job retry counts out of the original payload](https://github.com/rails/rails/pull/58975)  
Deserialized jobs now get their own copy of `exception_executions`. Retrying a job no longer changes the counters in the original job data or earlier entries in the test adapter's `performed_jobs`, and frozen job payloads no longer raise `FrozenError` on this path.

[Fix composite-key association queries](https://github.com/rails/rails/pull/59075)  
Empty tuple conditions and empty composite-key association conditions now return no records without issuing a query, instead of generating `WHERE ()`. Polymorphic association queries also accept relations targeting composite-key models, and querying a composite-key association with a bare ID raises an explanatory `ArgumentError`.

[Detect Aube as a JavaScript package manager](https://github.com/rails/rails/pull/59092)  
Rails generators now recognize `aube-lock.yaml` when detecting an application's JavaScript package manager.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-10-09%7D...main@%7B2026-10-16%7D)._  
_We had [30 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20261009-20261016) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
