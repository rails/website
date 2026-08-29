---
layout: post
title: "This Week in Rails: August 28, 2026"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-08-28
---


Hi, it's [Greg](https://greg.molnar.io). Let's explore this week's changes in the Rails codebase.

[Agents on Rails: lemans goes open source](https://rubyonrails.org/2026/8/24/agents-on-rails-lemans)  
Another week, another update from Agents on Rails. This one is a big one: lemans,
the harness behind every number we’ve published, is now open source. Also four
new models were added: Sonnet 5, Terra, an open-weight Qwen you can run on your
own machine, and one that won’t tell us its name.

[Actionpack ractorize](https://github.com/rails/rails/pull/58576)  
This Pull Request changes the following:

- Make `ActionDispatch::ParamBuilder.default` ractor safe by using singleton class attr accessor.
- Make `ActionDispatch::Request::LOCALHOST` ractor safe by freezing the regex.
- Make `ActionDispatch::Response.default_charset` and `ActionDispatch::Response.default_headers` ractor safe by using class attributes.

Additionally, [prefixed partial names were made ractor safe](https://github.com/rails/rails/pull/58599) and [`reset_primary_key`](https://github.com/rails/rails/pull/58577) was also made ractor compatible.

[Add config.active_record.schema_ignored_tables](https://github.com/rails/rails/pull/58554)  
This Pull Request unifies `ActiveRecord::SchemaDumper.ignore_tables` and `config.active_record.schema_cache_ignored_tables` into a single config, `config.active_record.schema_ignored_tables`.

Both existing configurations are deprecated. Their readers and writers now warn and delegate to the new one, so there is a single source of truth and no remaining code path reads a deprecated setting.

This is a breaking change: tables are matched against their real after the change.

[Escape attachment captions in `Attachment#to_markdown`](https://github.com/rails/rails/pull/58553)  
A caption of `[click](javascript:alert(1))` previously produced
`[click](javascript:alert(1))` and now produces
`\[click\](javascript:alert(1))` to prevent cross-site scripting
vulnerabilities.

[Add Herb as an HTML-aware ERB implementation](https://github.com/rails/rails/pull/58552)  
This pull request adds `ActionView::Template::Handlers::ERB::Herb`, a `::Herb::Engine` subclass that closly mirrors `ActionView::Template::Handlers::ERB::Erubi`. `Herb::Engine` is specifically built for HTML+ERB templates and is designed to be API-compatible with `Erubi::Engine`.
Herb parses HTML and ERB into a single syntax tree and uses Prism to parse the Ruby inside the ERB tags. Based on this parser, `Herb::Engine` is an HTML-aware ERB rendering engine that also understands the HTML semantics during template compilation, guaranteeing that templates cannot produce invalid Ruby and markup.

[Allow `translate`'s `scope:` argument to resolve relative i18n keys with leading period ](https://github.com/rails/rails/pull/58504)  
With this change, `translate`'s (and `t`'s) `scope:` option can be resolved relative to the current controller and action when it starts with a period, mirroring the existing behavior for the key argument.
Calling `translate("bar", scope: ".foo")` from `PostsController#index` is now equivalent to calling `translate("bar", scope: "posts.index.foo")`.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-08-21%7D...main@%7B2026-08-28%7D)._
_We had [25 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260821-20260828) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
