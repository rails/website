---
layout: post
title: "TODO: add a title"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-03-07
---


Hi, it's [Greg](https://greg.molnar.io). Let's explore this week's changes in the Rails codebase.

[Rails World 2025 Call for Papers](https://rubyonrails.org/2025/3/7/apply-to-speak-at-rails-world-2025)  
The CFP for Rails World 2025 is now live! Submit your talk until April 10th: [https://rubyonrails.org/2025/3/7/apply-to-speak-at-rails-world-2025](https://rubyonrails.org/2025/3/7/apply-to-speak-at-rails-world-2025).

[Add a default bin/bundle-audit configuration](https://github.com/rails/rails/pull/54695)  
This pull request adds `bin/bundler-audit` and `config/bundler-audit.yml` for discovering and managing known security problems with app gems.

[Permit modern Ruby syntax in new apps](https://github.com/rails/rails/pull/54692)  
This pull requests changes RuboCop to target the Ruby version you're using rather than the 2.7 default.

[Stop generating bundler binstub:](https://github.com/rails/rails/pull/54687)  
Rails no longer generates a `bin/bundle` binstub when creating new applications.
The `bin/bundle` binstub used to help activate the right version of bundler, but
this is no longer necessary as this mechanism is now part of Rubygem itself.

[Add `except_on:` option for validation callbacks](https://github.com/rails/rails/pull/54665)  
The `except_on:` option was added to validations (e.g. validates) in the past and this pull request adds the same option to `before_validation` and `after_validation` callbacks to maintain options consistency.

[Support hash options for YJIT configuration](https://github.com/rails/rails/pull/54662)  
This pull request enhances `config.yjit` to accept a hash, allowing users to specify YJIT options.
For instance:

```ruby
config.yjit = true  # Enable YJIT with default settings
config.yjit = { stats: true }  # Enable YJIT with custom options (newly supported)
config.yjit = false  # Disable YJIT
```

[Add a config for automatically including `nonce` in `javascript_tag`, `javascript_include_tag` and `stylesheet_link_tag`](https://github.com/rails/rails/pull/53835)  
This pull requests adds a new configuration, `content_security_policy_nonce_auto` for automatically adding a nonce to the tags affected by the directives specified by the `content_security_policy_nonce_directives` configuration option.

[Allow per-database schema format](https://github.com/rails/rails/pull/53666)  
This change allows applications with multiple databases to set a `schema_format` independently for each one:
```ruby
primary:
  schema_format: ruby
```

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-02-28%7D...main@%7B2025-03-07%7D)._
_We had [30 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250228-20250307) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
