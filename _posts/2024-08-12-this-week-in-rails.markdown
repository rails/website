---
layout: post
title: "Rails 7.2 release, Thruster by default for Rails 8, new Guides PRs, and much more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-08-12
---

Hey everyone, Happy Monday! 
[Vipul](https://www.saeloun.com/team/vipul) here with the latest updates for This Week in Rails(from last week 😅). Let's dive in.

[Rails 7.2 has been released](https://rubyonrails.org/2024/8/10/Rails-7-2-0-has-been-released)  

Rails 7.2 has been released!

Head over to the [release post](https://rubyonrails.org/2024/8/10/Rails-7-2-0-has-been-released) for more details, 
but in short, it ships with better production defaults, Dev containers, new guides design, and much much more!


**New Guides requests for review**

Two new guides Pull Requests are now open for community review. If you are well versed in Rails Routing, Active Record Associations, please review and submit your feedback here:

- [Rails Routing PR](https://github.com/rails/rails/pull/52521)
- [Active Record Associations PR](https://github.com/rails/rails/pull/52523)

[Use Thruster by default for Rails 8](https://github.com/rails/rails/pull/51793)

[Thruster](https://github.com/basecamp/thruster/) is an asset compression and caching proxy with X-Sendfile acceleration that speeds up simple production-ready deployments of Rails applications. 
It runs alongside the Puma and usually behind the Kamal 2 proxy, which offers HTTP/2 and SSL auto-certificates, 
to help your app run efficiently and safely on the open Internet.

This change configures the use of Thruster in the Dockerfile by default, starting with Rails 8.

[Speed up `ActionDispatch::Routing::Mapper::Scope#[]` by merging frame hashes](https://github.com/rails/rails/pull/52525)    
Before this change, `ActionDispatch::Routing::Mapper::Scope#[]` lookup was iterating an array, which means access time wasn't constant, and did not actually behave like a hash.
This Pull Request changes the scope implementation to make the lookup faster by just merging inherited values into the immediate hash. 
This helps avoid needless iterations for deeply nested routes leading it to be **~1.2x** faster.

[Puma default config changes for concurrency](https://github.com/rails/rails/commit/142e6ab2c1e3cb7df4b82e20e2a1cd676b755714)  

Puma 5+ now pulls WEB_CONCURRENCY directly from ENV, so we cannot/should not override.

Especially to introduce "auto", since Puma just explodes when trying to parse that. Need to upstream that feature.  

[Make automatic detection of processor count in default puma config optional and non-default](https://github.com/rails/rails/pull/52533)  
Using `Concurrent.available_processor_count` helper by default in `puma.rb` template might result in incorrect configurations on some cloud hosts with shared CPUs or platforms that inaccurately report CPU counts.

This Pull Requests, changes this behavior to be optional and non-default.

[Let allow_browser allow bots](https://github.com/rails/rails/pull/52531)
The `allow_browser` feature blocks user agents that don't match a specific set of browser versions.  This runs the risk of preventing sites from being crawled by some search engines.

This changes fixes this behavior to bypass these version restriction in case of crawlers and bots.


[Allow disable_extension to be called with schema-qualified name for PostgreSQL](https://github.com/rails/rails/pull/52452)

This change allows `disable_extension` to be called with schema-qualified name for PostgreSQL.

This adds parity with `enable_extension`, the `disable_extension` method can be called with a schema-qualified
name (e.g. `disable_extension "myschema.pgcrypto"`). Note that PostgreSQL's `DROP EXTENSION` does not
actually take a schema name (unlike `CREATE EXTENSION`), so the resulting SQL statement will only name
the extension, e.g. `DROP EXTENSION IF EXISTS "pgcrypto"`.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-07-13%7D...main@%7B2024-07-19%7D)._  
_We had [36 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240803-20240809) to the Rails codebase past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
