---
layout: post
title: "JSON schema cache, herb:check, and more!"
categories: news
author: Emmanuel Hayford
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-09-18
---


A week of things that should just work: schema cache that loads in JSON, PostgreSQL names that resolve to one table, Active Storage that boots even when libvips is missing or too old, and Live responses that finally carry the default headers. Here's what's new in Rails:

[Watch the Rails World 2026 Opening Keynote live](https://www.youtube.com/live/V9SxpJpHuus)
[DHH's opening keynote](https://x.com/rails/status/2098074197050155303?s=20) is streaming for anyone who can't get to Austin. He'll cover what's new in Rails, what's coming next, and where the framework is headed. Tune in at 9:30 AM Austin, 7:30 AM Pacific, 10:30 AM Eastern, 3:30 PM UK, 4:30 PM Central Europe, or 11:30 PM Japan. The livestream is made possible by Rails World Event Partner Shopify.

[Active Record schema caches can now be dumped in JSON](https://github.com/rails/rails/pull/58769)
Point `schema_cache_path` at a file ending in `.json` and Active Record dumps and loads the cache in JSON instead of YAML or Marshal. On a production app with 944 tables, JSON loaded about 22x faster than YAML.

[Add a `herb:check` rake task](https://github.com/rails/rails/pull/58770)
`bin/rails herb:check` compiles every HTML+ERB template through Herb, using the same resolvers the runtime lookup uses so variants, locales, and engine view paths are covered. Templates Herb rejects are listed with their path and error, and the task exits non-zero when any fail.

[Read PostgreSQL indexes and constraints from the table a name resolves to](https://github.com/rails/rails/pull/58795)
`indexes`, `foreign_keys`, `check_constraints`, `unique_constraints`, and `exclusion_constraints` matched an unqualified name against every schema on the search path, so a name two schemas both carry came back with both tables' indexes and constraints. They now resolve the name the way `::regclass` does, matching `primary_keys` and `table_options`.

[Fix PostgreSQL primary key introspection for covering indexes](https://github.com/rails/rails/pull/58555)
`pg_index.indkey` includes non-key columns added with `INCLUDE`, so a covering primary key looked like it had extra columns and those columns were not writable during bulk upserts. Primary keys are now read from `pg_constraint.conkey`, the constraint's own ordered column list.

[Boot when libvips is missing](https://github.com/rails/rails/pull/58743), and [boot with an unsupported libvips unless the processor uses it](https://github.com/rails/rails/pull/58734)
Two Active Storage boot fixes landed together:

- An app with the ruby-vips gem but no libvips used to abort during initialization. Any `LoadError` from requiring ruby-vips is now treated as unavailable, and the app boots with a warning that generating variants needs libvips.
- An installed libvips or ruby-vips too old to block unfuzzed loaders raised at boot for every variant processor. The error now fires only when the `:vips` processor loads or the Vips analyzer reads an image, so `:mini_magick` apps boot again.

[Preserve `read_multi` key order when a local cache is active](https://github.com/rails/rails/pull/58720)
`fetch_multi` already returned keys in the requested order. `read_multi` still put local cache hits first. It now slices the result by the names you asked for, and missing keys stay absent rather than filling in as `nil`.

[Introduce `config.active_storage.draw_direct_upload_route`](https://github.com/rails/rails/pull/58377)
Set this to `false` to skip the direct upload route without dropping the rest of Active Storage. Action Text's `rich_textarea` then omits `data-direct-upload-url` unless you pass one, and a Trix editor without that attribute hides its attach button and ignores dropped or pasted files.

[Include default headers in `ActionController::Live` responses](https://github.com/rails/rails/pull/53403)
Live responses, including Active Storage's proxy controllers, were built with `Live::Response.new` instead of `.create`, so they skipped `config.action_dispatch.default_headers` such as `X-Content-Type-Options` and `X-Frame-Options`. Those headers are now included.

[Deprecate `supports_datetime_with_precision?`](https://github.com/rails/rails/pull/58809)
The check existed for MySQL 5.5 and older, which had no sub-second precision on `DATETIME`, `TIME`, and `TIMESTAMP` columns. Every database Active Record supports now has it, so the method always returns true and no longer guards anything.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-09-11%7D...main@%7B2026-09-18%7D)._
_We had [29 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260911-20260918) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
