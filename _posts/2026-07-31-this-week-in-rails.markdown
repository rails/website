---
layout: post
title: "Faster i18n loading, thread-safe routes, and more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-07-31
---


Hi, it’s [Vipul](https://www.saeloun.com/team/vipul/). Let’s explore this week’s
changes in the Rails codebase.

---

[Nominations are open for the 2026 Rails Luminary Awards](https://rubyonrails.org/2026/7/29/nominations-2026-rails-luminary)  
The Rails Foundation announced that nominations are open through August 21.
The awards recognize people who have significantly advanced Rails for the
benefit of the community.

[Rails versions 7.2.3.2, 8.0.5.1, and 8.1.3.1 have been released](https://rubyonrails.org/2026/7/29/Rails-Versions-7-2-3-2-8-0-5-1-and-8-1-3-1-have-been-released)  
These security releases address a possible arbitrary file read and remote code
execution vulnerability in Active Storage variant processing. Please upgrade
as soon as possible.

[Stop filtering i18n paths on initialize](https://github.com/rails/rails/pull/58199)  
Removes redundant path-globbing work during i18n initialization, cutting the
load time from 400 ms to about 250 ms in one application with thousands of
locale files.

[Pass scheme to token authentication block in http_authentication](https://github.com/rails/rails/pull/58211)  
Token authentication methods now yield the authentication `scheme` as a
normalized symbol to the authentication block. They also support requiring a
specific scheme and returning the appropriate RFC 9110 challenge response.

[Make lazy route loading thread-safe](https://github.com/rails/rails/pull/58225)  
Route drawing state moved from a boolean to a three-state flag guarded by a
reentrant `Monitor`. This fixes a race where concurrent threads could dispatch
requests against a half-drawn route set.

[Deprecate `TransactionState` predicates](https://github.com/rails/rails/pull/58226), [positional arguments to `#insert`](https://github.com/rails/rails/pull/58297), and [`binds` passed to `to_sql`](https://github.com/rails/rails/pull/58310)  
A few cleanup deprecations landed this week:

- `TransactionState#fully_committed?`, `#fully_rolledback?`, `#fully_completed?`,
  and `#nullify!` are deprecated in favor of `#committed?`, `#rolledback?`, and
  `#completed?`.
- The positional `pk`, `id_value`, and `sequence_name` arguments to `#insert`
  are deprecated. Callers can use `returning:` in place of `pk`.
- The long-unused `binds` argument to `to_sql` is now deprecated instead of
  being silently ignored.

[Extract `table_name:` as an explicit keyword argument in join table helpers](https://github.com/rails/rails/pull/58249)  
Migration join table helpers now accept `table_name:` as an explicit keyword
argument instead of removing it from an options hash as a side effect.

[Resolve the single best template without sorting the whole set](https://github.com/rails/rails/pull/58279)  
Template resolution now finds the best match in one pass and binds locals only
for the winner instead of sorting and binding every candidate.

[Support a single column name for `#insert`'s `returning:`](https://github.com/rails/rails/pull/58290)  
`returning:` now accepts a single column name and returns that column's value
directly. Previously it accepted only arrays, forcing callers to unwrap a
one-element result.

[Allow `thread_mattr` readers and writers to be used in a Ractor](https://github.com/rails/rails/pull/58108)  
Removes memoization of the per-thread key so `thread_mattr` readers and writers
work safely in Ractors. Access remains in the nanosecond range despite the
additional lookup.

[Make controller middleware Ractor-safe](https://github.com/rails/rails/pull/57854)  
Uses a copy-on-write approach so controller middleware stacks can be shared
safely across Ractors. A proxy refreezes the stack after direct method calls.

[Refactor insert `returning:` handling to take `QueryIntent` directly](https://github.com/rails/rails/pull/58296)  
Insert `RETURNING` handling moved from raw SQL string manipulation to
`QueryIntent`. Arel-based inserts can now set `RETURNING` directly on the AST.

[Rename `arel` to `arel_or_sql`](https://github.com/rails/rails/pull/58309)  
Connection methods such as `insert`, `update`, `delete`, and `explain` accept
either an Arel manager or a raw SQL string but used inconsistent parameter
names. They now consistently use `arel_or_sql`.

[Show parameter markers for casted binds in SQL logs and EXPLAIN](https://github.com/rails/rails/pull/58312)  
SQL logs and EXPLAIN output now show casted binds with positional markers such
as `$1` instead of `[nil, value]`, making each value's position clear.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-07-24%7D...main@%7B2026-07-31%7D)._  
_We had [25 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260724-20260731) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
