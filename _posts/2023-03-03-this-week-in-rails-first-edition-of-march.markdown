---
layout: post
title: "🎎 First edition of March"
categories: news
author: zzak
published: true
date: 2023-03-03
---


Hi, it's [zzak](https://github.com/zzak). Let's explore this week's changes in the Rails codebase.

[Turbo v7.3.0 is out!](https://github.com/hotwired/turbo/releases/tag/v7.3.0)  
Be sure to check the release notes to see what changed.
  

[Configurable digest algorithm for Active Record Encryption](https://github.com/rails/rails/pull/44873)  
This adds a new option to configure the digest algorithm in Active Record Encryption. It sets SHA-256 as the new default starting in 7.1 and SHA-1 for previous versions.
  

[Add a drop shadow to the boot screen](https://github.com/rails/rails/pull/47550)  
[This tweet](https://twitter.com/bradgessler/status/1630655637096108032) inspired a long conversation on Discord. A lot of it re-hashed the conversation at [#43802](https://github.com/rails/rails/pull/43802)... but one takeaway was that not everyone realises the Rails logo is also a link.
When you first run the Rails server after `rails new` you are greeted with the bootscreen which shows the Rails logo and current Ruby and Rails versions. This PR adds a drop shadow, which I think makes the logo look a bit more clickable at a glance.
  

[Install dartsass-rails when generating app with sass](https://github.com/rails/rails/pull/47545)  
When generating a new app using `--css sass` the `dartsass-rails` gem will now be included in the Gemfile and `dartsass:install` will be executed for you.
  

[Support assignments for composite key has_many through associations](https://github.com/rails/rails/pull/47541)  
Similarly to [#47230](https://github.com/rails/rails/pull/47230) this PR adds support for assigning `has_many :items, through: :items_source` associations that use composite `query_constraints` config.
  

[Allow applications to register custom database configurations](https://github.com/rails/rails/pull/47522)  
Previously, applications could only have two types of database configuration objects, `HashConfig` and `UrlConfig`. This meant that if you wanted your config to implement custom methods you had to monkey patch `DatabaseConfigurations` to take a custom class into account.
This PR allows applications to register a custom db_config handler so that custom configs can respond to needed methods. This is especially useful for tools like Vitess where we may want to indicate it's sharded, but not give Rails direct access to that knowledge.
  

[Allow configs_for to accept a custom hash key](https://github.com/rails/rails/pull/47536)  
Now that we support a way to register custom configurations we need to allow applications to find those configurations. This change adds a `config_key` option to `configs_for` to find db configs where the configuration_hash contains a particular key.
  

[Introduce #deliver_enqueued_emails method to ActionMailer::TestHelper](https://github.com/rails/rails/pull/47520)  
This test helper allows you to deliver all enqueued emails either up to the point of the test, or within the given block, so that you can make assertions on them.
  

[Remove debug from the default Gemfile](https://github.com/rails/rails/pull/47515)  
Due to a [bug](https://bugs.ruby-lang.org/issues/19158) in Ruby's bundled debug gem, we had to temporarily remove it from the generated Gemfile in order to fix generating apps from main.
  

[Run yarn install with --frozen-lockfile in the Dockerfile](https://github.com/rails/rails/pull/47517)  
Similar to `BUNDLE_DEPLOYMENT`, but for yarn, this flag make sure no package is upgraded or downgraded in the lockfile.
  

[Add x86_64-linux and aarch64-linux platforms by default](https://github.com/rails/rails/pull/47492)  
When generating a new Rails app, the `bundle install` command will now set the default platforms to x86_64-linux (or aarch64-linux on a Mac) automatically.  
  

[Don't install the redis package in the Dockerfile](https://github.com/rails/rails/pull/47513)  
Since the redis client gem doesn't require this package to be installed, we can remove the dependency.
  

[Rack 3 static lowercase headers.](https://github.com/rails/rails/pull/47477)  
`ActionDispatch::Static` uses mixed-case headers and merges them with lower case headers. This produces duplicate headers. Prefer lowercase headers to avoid this situation.
  

[Stop serializing columns as YAML by default](https://github.com/rails/rails/pull/47422)  
YAML is great for configuration and such, but for serializing arbitrary data it has many problem, both in term of performance and efficiency but also in term of security.
  

[Suppress output from mail parser warnings](https://github.com/rails/rails/pull/47484)  
Previously, requiring any ragel generated parsers in mail would output tons of warnings in tests, making output much harder to read (especially in Railties).
  

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-02-24%7D...main@%7B2023-03-03%7D)._  
_We had [32 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230224-20230303) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
