---
layout: post
title: "Bound SQL literals in CTEs, negative scopes for enums and more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-10-17
---

Hi, it's [Vipul!](https://www.saeloun.com/team/vipul/). Let's explore this week's changes in the Rails codebase.

[Add missing structured event data for logs](https://github.com/rails/rails/pull/55922)  
Followup on https://github.com/rails/rails/pull/55904. 

[Add support for bound SQL literals in CTEs](https://github.com/rails/rails/pull/55918)  
When creating a SQL literal with bind value parameters, `Arel.sql` returns an instance of `Arel::Nodes::BoundSqlLiteral`, which is not currently supported by `#build_with_expression_from_value`.
This Pull Request updates the method to accept both `Arel::Nodes::SqlLiteral` and `Arel::Nodes::BoundSqlLiteral`.

[Fix passing both module: and shallow: to resources](https://github.com/rails/rails/pull/55916)  
This broke because the keyword arg change started always passing `shallow:` through to this `scope` block. 
However, this caused an issue  because passing the `shallow` option caused it to _always_ override the  scope's current `shallow` value, instead of only doing that when specified.
This commit fixes the behavior by only passing `shallow` to the `scope` when it is specified, instead of unconditionally.

[Add advisory DB update by default in bin/bundler-audit](https://github.com/rails/rails/pull/55913)  
This Pull Request updates the `bin/bundler-audit` script to include the `--update` option.

[Fix negative scopes for enums to include records with `nil` values](https://github.com/rails/rails/pull/55912)  
Since NULL != NULL in SQL, the condition where `column != 'value'` always ignores rows with NULLs, but should include them too.

[Show help hint when starting `bin/rails console`](https://github.com/rails/rails/pull/55910)  
The `help` command in the Rails console shows which Rails specific commands are available and what they do.

Similar to `bin/rails dbconsole` (where database clients show a help hint), show a hint on how to use help when opening `bin/rails console`.

```
$ bin/rails console
Loading development environment (Rails 8.1.0.beta1)
Type 'help' for help.
example(dev):001>
```

[Fix SQLite3 data loss during table alterations with CASCADE foreign keys.](https://github.com/rails/rails/pull/55907)  
Fix SQLite3 data loss during table alterations with `CASCADE` foreign keys.
When altering a table in SQLite3 that is referenced by child tables with `ON DELETE CASCADE` foreign keys, ActiveRecord would silently delete all data from the child tables. This occurred because SQLite requires table recreation for schema changes, and during this process:

1. The original table is temporarily dropped
2. `CASCADE` deletes fire immediately on child tables
3. The table is recreated, but child data is already gone

The fix simply reverses the order to follow the [official SQLite 12-step ALTER TABLE procedure](https://www.sqlite.org/lang_altertable.html#otheralter).

[Make the Structured Event Subscriber emit events in format that are useful for logging](https://github.com/rails/rails/pull/55904

[Improve support for SQLite database URIs](https://github.com/rails/rails/pull/55896)  
This commit introduces a new singleton method on the connection adapter, `SQLite3Adapter.resolve_path`, to reliably resolve a filesystem path from the database configuration.

This method in the connection adapter's initializer to ensure the database file's directory exists. Previously the adapter omitted this check for database URIs.

This PR also adds usage of this method in the `create` and `drop` database tasks which previously did not fully support database URIs.

[Fix verbose redirect output and route source mapping](https://github.com/rails/rails/pull/55889)  
This Pull Request changes mostly dispatch code to record some source location in redirect endpoints when needed. This allows this feature to work in environments other than development, if needed, instead of depending on the other route source locations feature.

This adds a parameter to `redirect.action_dispatch` which may not be desirable. We can instead hack the caller trace to include the source location or use route source locations. Open to feedback on this, but I prefer to keep things simple here with an event parameter.

[Load core extensions with require_relative](https://github.com/rails/rails/pull/55887)    
`require_relative` is more aligned with this very intentional file structure, and we get some less `$LOAD_PATH` lookups as an extra ball.

[Only preconnect connections that have been prepopulated](https://github.com/rails/rails/pull/55857)  
Otherwise-manually-created connections that have not directly cause a connection should remain lazy.

[Refactor gcs_service public interface to bring more in line with s3_service](https://github.com/rails/rails/pull/55856)  
The `s3_service` exposes it's respective client and bucket attributes publicly. I think this makes sense in the context of active storage, as it allows users to rely on the same adapter & configs that the framework is using for Activestorage without having to duplicate your own client and ensure it matches the original, which can be modified at runtime, in order to perform operations outside of the scope of ActiveStorage.

[Make `ActiveRecord::Assertions::QueryAssertions` method outputs consistent](https://github.com/rails/rails/pull/55852)  

[Skip analyze job if ruby-vips or mini_magick gem are missing](https://github.com/rails/rails/pull/55839)

[Add structured event for Rails deprecations, when `config.active_support.deprecation` is set to `:notify`.](https://github.com/rails/rails/pull/55838)  
This change makes it dependent of the `:notify` behavior than adding yet another behavior just for structured events

[Fix `change_column` to preserve old column attributes for sqlite3](https://github.com/rails/rails/pull/55837)  

[Add prefix option to has_secure_token for improved token identification](https://github.com/rails/rails/pull/55822)  
Adds an optional `:prefix` parameter to has_secure_token that prepends a string to generated tokens, making token types immediately identifiable in logs, debugging sessions, and error messages

```
# Before:
  user.auth_token # => "pX27zsMN2ViQKta1bGfLmVJE"
  user.reset_token # => "tU9bLuZseefXQ4yQxQo8wjtB"

# After:
  has_secure_token :auth_token, prefix: "auth_"
  has_secure_token :reset_token, prefix: true

  user.auth_token # => "auth_pX27zsMN2ViQKta1bGfLmVJE"
  user.reset_token # => "reset_token_tU9bLuZseefXQ4yQxQo8wjtB"
```

[Add environment config file existence check](https://github.com/rails/rails/pull/55813)  
This Pull Request adds a behaviour to `Rails::Application` which will raise an error if unable to load any environment file.

[Hide backtrace when parallel tests get interrupted](https://github.com/rails/rails/pull/55720)  
Right now, if one presses CTRL+C during the parallel test run, one gets a very long backtrace that is very annoying.

[Add dark mode to http error pages](https://github.com/rails/rails/pull/55671)  
We now have a dark mode on error pages! 

<img alt="Error pages dark mode" src="https://github.com/user-attachments/assets/2dcc36e7-fef9-4019-86ed-47c0e7068852" />

[Add error type support to `ActiveModel::Errors#messages_for` and `ActiveModel::Errors#full_messages_for` methods](https://github.com/rails/rails/pull/53096)  
Added `type` argument support to `messages_for` and `full_messages_for` methods of `ActiveModel::Errors`

[Make `ActiveModel::Serializers::JSON#from_json` compatible with `#assign_attributes`](https://github.com/rails/rails/pull/51781)  
This commit attempts to remedy that issue by attempting to call `#assign_attributes` first before falling back to `#attributes=`.

[Add support for `expires_in:` when using `render` with `collection:`](https://github.com/rails/rails/pull/51579)  
Pass `expires_in` to `write_multi` so the cache key is written with the expiration.

[Suggest `bin/rails action_text:install` from error page](https://github.com/rails/rails/pull/50557)  
Mirror Active Storage's encouragement to execute the `active_storage:install` task from Action Dispatch error pages by adding similar instructions for the `rails action_text:install` task when the error is related to missing Action Text tables.

[Let ActiveStorage::Blob#open return a tempfile for manual unlinking](https://github.com/rails/rails/pull/49990)  
Wrapping code in a block is not always possible, this way it behaves like stdlib Tempfile that can be unlinked manually in addition to the block form that closes for the caller.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-10-10%7D...main@%7B2025-10-17%7D)._  
_We had [34 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20251010-20251017) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
