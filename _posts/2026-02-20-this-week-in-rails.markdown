---
layout: post
title: "New date time helpers, improve hash methods and more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-02-20
---

Hi, it’s [Vipul](https://www.saeloun.com/team/vipul/). 
Let’s explore this week’s changes in the Rails codebase!

[Don't filter StructuredEventSubscriber payloads](https://github.com/rails/rails/pull/56837)  
Previously, `StructuredEventSubscriber` was filtering out certain keys from event payloads.
This PR removes that filtering, so subscribers receive the full, unmodified payload giving
developers access to the complete event data they expect.

[Optimize calculating remote IP address](https://github.com/rails/rails/pull/56805)  
Improves the performance of `ActionDispatch`'s remote IP calculation logic, reducing
unnecessary processing on each request when determining the client's IP address.

[Fix `in_batches(use_ranges: true)` with predefined limit](https://github.com/rails/rails/pull/56803)  
Fixes a bug where calling `in_batches` with both `use_ranges: true` and a predefined `limit` would
not respect the limit correctly, causing unexpected batch sizes.

[Improve #hash methods](https://github.com/rails/rails/pull/56801)  
Starting Ruby 3.2, hashes can avoid allocating an array when computing hash values.
This PR removes the manual array-combining workaround from Rails' #hash implementations, making them simpler and more efficient.

[Fix SQLite3 rowid column equality](https://github.com/rails/rails/pull/56802)  
Fixes an equality comparison issue with SQLite3's implicit `rowid` column, ensuring that column 
comparisons work correctly for tables that rely on rowid as their primary key.

[Include virtual? in Column#== and Column#hash for SQLite3 and PostgreSQL](https://github.com/rails/rails/pull/56797)  
Virtual (generated) columns could be incorrectly deduplicated with regular columns sharing the same name
and type, silently excluding them from INSERT/UPDATE statements and writing NULL to the database. This PR
ensures virtual and non-virtual columns are never treated as identical.

[Add non-interactive exec subcommand to devcontainer tool](https://github.com/rails/rails/pull/56794)  
Adds a devcontainer exec subcommand so developers can run commands inside the container from outside it
without needing an interactive shell session.

[Materialize transactions before instrumentation](https://github.com/rails/rails/pull/56791)  
Ensures that database transactions are fully materialized (i.e., actually opened against the database)
before instrumentation events are emitted. This gives subscribers accurate timing data that reflects
when the real database work occurred.

[Add parallel step groups to CI runner](https://github.com/rails/rails/pull/56774)  
Improves the Rails CI pipeline by grouping test steps into parallel execution groups, speeding up the
overall CI run time.

[Fix `UnknownHttpMethod` returning 500 instead of 405](https://github.com/rails/rails/pull/56750)  
When a request comes in with an unrecognized HTTP verb, Rails now correctly returns a `405 Method Not Allowed`
response instead of a `500 Internal Server Error`. This long-standing issue was causing unnecessary noise in
error monitoring tools.

[Introduce `in_this_week?`, `in_this_month?`, and `in_this_year?` to Date/Time](https://github.com/rails/rails/pull/55770)  
Adds three convenient predicate methods to `Date`, `Time`, and `DateTime` objects. 
Instead of manually comparing against ranges, you can now call `date.in_this_week?`, `date.in_this_month?`, or `date.in_this_year?` for clean, readable time checks.

[Skip ROLLBACK statement following TransactionRollbackError](https://github.com/rails/rails/pull/56717)
When a COMMIT fails with a TransactionRollbackError, Rails was unnecessarily issuing a ROLLBACK
even though the database had already rolled it back causing a "WARNING: there is no transaction in progress"
message in the logs. This PR skips the redundant ROLLBACK, eliminating the warning at its source.

---


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-02-14%7D...main@%7B2026-02-20%7D)._
_We had [21 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260214-20260220) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
