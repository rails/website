---
layout: post
title: "PostgreSQL 18 warnings, secure password improvements and more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-07-25
---

Hi, it's [Vipul](https://www.saeloun.com/team/vipul/). Let's explore this week's changes in the Rails codebase.

[Fix kill_connection_from_server for PG test](https://github.com/rails/rails/pull/55392)

This change improves the PostgreSQL adapter test by correctly terminating the backend connection, ensuring the test triggers the intended error handling logic.

[Avoid dynamic encrypting in generated fixtures](https://github.com/rails/rails/pull/55387)

Fixtures for passwords now generates a static hash, Previously, fixtures with password digest attributes regenerated the hash on each test run

[Don't add bundler platforms for JRuby](https://github.com/rails/rails/pull/55383)

Fixes Rails application on JRuby by not adding extra platforms that cause problems when installing gems.

[Make `ActiveSupport::Gzip.compress` deterministic](https://github.com/rails/rails/pull/55382)

`ActiveSupport::Gzip.compress` now produces consistent output by always setting the gzip timestamp to zero, this eliminates flakey tests while compare compressed data.

[Fix HashWithIndifferentAccess#transform_keys! to avoid collisions](https://github.com/rails/rails/pull/55376)

Fixes a bug where changing keys in a hash could accidentally lose some keys if they clashed.

[Emit a warning when `pg` gem < 1.6.0 is used with PostgreSQL 18+](https://github.com/rails/rails/pull/55368)

Adds a warning if a Rails project uses PostgreSQL 18+ with an outdated pg gem(< 1.6.0) to prevent compatibility issues of `PG::Connection#cancel`.

[Fix Action Cable compatibility with redis-rb 5.4.1](https://github.com/rails/rails/pull/55359)

Makes Action Cable compatible with redis-rb 5.4.1, as the bug in redis-rb is now resolved.

[Remove unnecessary calls to the GCP metadata server](https://github.com/rails/rails/pull/55353)

Cuts out redundant calls to GCP's metadata server within auth logic, reducing potential latency and server load.

[Add load-hooks for Active Model autoloaded constants referenced in initializers](https://github.com/rails/rails/pull/55347)

This change added load hooks for `active_model_error` and `active_model_secure_password` making it easier for initializers to reference Active Model constants that should be autoloaded.

[`has_secure_password`: fix password validation.](https://github.com/rails/rails/pull/55232)

Ensures password confirmation is validated even if the original password contains only whitespace, making `has_secure_password` behavior more consistent.

[Add render json to health](https://github.com/rails/rails/pull/55092)

Enables Rails health controller to respond in JSON, improving support for API-only applications.

[Add ActiveRecord::Tasks::AbstractTasks for subclassing per adapter behavior](https://github.com/rails/rails/pull/54879)

Introduces a base class to let database adapters customize task behavior, improving adapter-specific handling.

[Avoid purging the test database when loading a schema:](https://github.com/rails/rails/pull/54853)

Prevents purging of the test database while loading a database schema, improving test suite reliability.

[gitignore all key files in config/credentials](https://github.com/rails/rails/pull/54774)

Configures `.gitignore` to exclude all files in `config/credentials`, protecting key files from accidental commits.

[Make `nonce: false` remove the nonce attribute for `javascript_tag`, `javascript_include_tag` and `stylesheet_link_tag`](https://github.com/rails/rails/pull/54724)

Setting `nonce: false` now removes the `nonce` attribute for `javascript_tag`, `javascript_include_tag`, and `stylesheet_link_tag`.

[Allow custom domain extractor class on ActionDispatch::Http::URL](https://github.com/rails/rails/pull/50763)

Allows the use of a custom class for domain and subdomain extraction. If no custom extractor is set, a new default extractor `ActionDispatch::Http::URL::DomainExtractor` processes domains.

[Read `ActionText::Attachment.tag_name` in Action Text Fixtures](https://github.com/rails/rails/pull/50472)

Updates Action Text fixture to use the right tag name for Action Text attachments if `config.action_text.attachment_tag_name` is set.

[Action View: Reduce public API of `tag` helper](https://github.com/rails/rails/pull/49369)

Cleans up the public API surface of the tag helper for maintainability and clarity.

  ---

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-07-18%7D...main@%7B2025-07-25%7D)._
_We had [29 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250718-20250725) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
