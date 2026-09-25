---
layout: post
title: "See you in Lisbon!"
categories: news
author: Claudio Baccigalupo
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-09-25
---


Hi, it's [Claudio Baccigalupo](https://claudiob.github.io) with your updates on the Rails codebase.

What a week! Rails World took over Austin with more than a thousand attendees from all over the world.
I was able to meet my fellow newsletter editors and to thank the amazing Amanda Perino for another successful conference.

<img width="800" height="468" alt="This Week in Rails + Amanda Perino" src="https://less.info/more.slides/2026-railsworld-austin/this-week-in-rails.jpg" />

And now… let’s see what changed on `main` in the last seven days.

[Newly released: Rails 8.1.4 and 7.2.4](https://rubyonrails.org/2026/9/24/Rails-Version-8-1-4-has-been-released)  
Take a look at their CHANGELOG ([v8.1.4](https://github.com/rails/rails/releases/tag/v8.1.4) and [v7.2.4](https://github.com/rails/rails/releases/tag/v7.2.4)) for all the new features.

[The Asset Pipeline Guide rewritten](https://github.com/rails/rails/pull/57181)  
Now with a bigger focus on how a developer would use the asset pipeline and Propshaft: [check it out](https://edgeguides.rubyonrails.org/asset_pipeline.html).
Then go read the [Active Record composite primary keys guide](https://edgeguides.rubyonrails.org/active_record_composite_primary_keys.html) which has also been [improved](https://github.com/rails/rails/pull/57348) as part of the Rails Foundation documentation project.

[New framework default to compile HTML+ERB templates through Herb](https://github.com/rails/rails/pull/58721)  
`config.action_view.erb_implementation` now accepts `:herb` and `:erubi`, and the 8.2 framework defaults set `:herb`. 
New applications, and applications running `config.load_defaults 8.2`, compile templates with the HTML format through `ERB::Herb` and every other format through Erubi.

[Deprecate supports_datetime_with_precision?](https://github.com/rails/rails/pull/58809)  
The method was added [11 years ago](https://github.com/rails/rails/pull/18886) to gate the `:precision` option on `datetime` and `time` columns. 
Since MySQL 5.5 support was dropped two years ago, every database Active Record supports handles precision so the method is not needed.

[Deprecate ActiveRecord::Callbacks::CALLBACKS](https://github.com/rails/rails/pull/58794)  
The `CALLBACKS` constant has been outdated for a long time, and is only referenced in tests.
Anything driven off the constant silently skips callbacks such as `before_commit`. It is deprecated with no replacement and will be removed in Rails 9.

[Fix BigInteger casting truncating strings to 16 bytes](https://github.com/rails/rails/pull/58872)  
`BigInteger` returns twice the `precision` of `Integer` which leaves room for a sign or a slug suffix. For `decimal(20, 0)` that is 40 bytes. 
A `BigInteger` with no precision uses twice the largest precision databases accept (2000 bytes on PostgreSQL).

[Restore integer bounds from JSON schema cache](https://github.com/rails/rails/pull/58832)  
Restore the minimum and maximum values when loading the integer type from JSON to avoid raising `FrozenError`.

[Fix non-ASCII strict locals defaults in ASCII-only templates](https://github.com/rails/rails/pull/58854)  
A non-ASCII default in the `locals:` magic comment was rendering the wrong characters when the template body is ASCII-only.
For instance:

```erb
<%# locals: (label: "café") %>
<%= label %>
```

would render `caf��` with no exception raised.

[Fix BroadcastLogger#tagged when broadcasting to multiple tagging loggers](https://github.com/rails/rails/pull/58429)  
Defines `#tagged` directly on `BroadcastLogger`. 
Without a block, returns a new `BroadcastLogger` whose tagging-capable broadcasts are tagged.
With a block, nests each tagging logger's own block form and yields the broadcast logger exactly once with every tag active. 
Follow-up [PR 58850](https://github.com/rails/rails/pull/58850) improves it by making `logger_tagged_by_active_job?` check `formatter.respond_to?(:current_tags)` before calling it.

[Avoid aliasing Kernel#respond_to? in ActiveModel::AttributeMethods](https://github.com/rails/rails/pull/58817)  
Define `respond_to_without_attributes?` with `define_method` and `Kernel.instance_method(:respond_to?)` instead of `alias`.
This copies `Kernel#respond_to?` into the module in the same way the `alias` did, without the deprecated lookup, so the behavior is unchanged.

[Schema-qualify the regclass cast in check_all_foreign_keys_valid!](https://github.com/rails/rails/pull/58875)  
Qualifies the cast with the constraint's schema: `'%2$I.%3$I'::regclass`.

[Manually specify security validator in herb checker](https://github.com/rails/rails/pull/58874)  
Changes the checker so behaviour is consistent across herb versions.

[Add Manitoba time zone mapping](https://github.com/rails/rails/pull/58863)  
Adds a friendly zone mapping: `Manitoba` → `America/Winnipeg`

[Backport alias fallback fixes for Active Model to 8-1-stable](https://github.com/rails/rails/pull/58827)  
Three changes bringing recent fixes to `attribute_methods.rb`, `serialization.rb`, `validations.rb` from main to the stable 8.1 branch.

[Make ActionController::ParamsWrapper._wrapper_options ractor safe](https://github.com/rails/rails/pull/58822)  
`ActionController::ParamsWrapper::Options` now freezes deeply and clears its mutex so it may be shared properly.

[Active Record Ractor-friendly connection handling](https://github.com/rails/rails/pull/58306)  
Introduces a connection handler / pool / proxy that is used in place of the default when the application is running a query on the non-main Ractor.

[Use standard input for MySQL db:schema:load](https://github.com/rails/rails/pull/58829)  
`MySQLDatabaseTasks#structure_load` now passes the structure file to the client's standard input, as `SQLiteDatabaseTasks#structure_load` already does.
Reading SQL from standard input needs no client-side command, so the `--commands` setting does not matter, and `structure_load_flags` are passed through unchanged. 

[Drop needless schema qualification from db/schema.rb on PostgreSQL](https://github.com/rails/rails/pull/58855)  
An extension is dumped with its schema only when that schema was picked at `CREATE EXTENSION` time, through the `SCHEMA` clause or the default creation schema.
When the control file fixes the schema, as `pg_available_extension_versions` reports, the extension is dumped by name alone and `CREATE EXTENSION` takes care of the schema on load. 
An extension installed with `CREATE EXTENSION ... SCHEMA`, such as `enable_extension "heroku_ext.pgcrypto"`, is dumped as before.

[Drop the explicit SET FOREIGN_KEY_CHECKS statements from MySQL db:schema:load](https://github.com/rails/rails/pull/58828)  
`structure_load` no longer sends the `SET FOREIGN_KEY_CHECKS` statements, so the command becomes `mysql --execute "SOURCE db/structure.sql" --database app_development`. 
The checks are off while the file runs and the setting ends with the session, as before. 

[Fix Server-Timing double-counting of nested same-name events](https://github.com/rails/rails/pull/58800)  
`ActionDispatch::ServerTiming` subscribes to Active Support notifications and writes a `Server-Timing` header. 
The value was correct for a single event but wrong when many events share a name and nest.

[Avoid deadlocks on concurrent find_or_create_by calls in MySQL](https://github.com/rails/rails/pull/58733)  
Fixes a MySQL deadlock in concurrent `find_or_create_by` and `create_or_find_by` (including their bang variants) by using a shared lock when reading back a record after a duplicate insert.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-09-18%7D...main@%7B2026-09-25%7D)._  
_We had [27 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260918-20260925) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
