---
layout: post
title: "The beginning of Trilogy, ChatGPT as a contributor"
categories: news
author: Wojtek
published: true
date: 2023-04-21
---


Hi. [Wojtek](https://twitter.com/morgoth85) here. We had *88* contributors this week including *ChatGPT*! Let's explore the changes.

[AppSignal is the newest contributing member of The Rails Foundation](https://rubyonrails.org/2023/4/17/appsignal-is-newest-contributing-member-of-rails-foundation)  
It's the third company to join The Rails Foundation as a contributing member.

[Introduce adapter for Trilogy](https://github.com/rails/rails/pull/47880)  
Trilogy is a client library for MySQL-compatible database servers, designed for performance, flexibility, and ease of embedding.
The [Trilogy database client](https://github.com/github/trilogy) and corresponding [Active Record adapter](https://github.com/github/activerecord-trilogy-adapter) were both open sourced by GitHub last year. 

[Improve password length validation for BCrypt compatibility](https://github.com/rails/rails/pull/47708)  
Everything in this pull request, including the code, tests, changelog, commit message, pull request title and description were created by *ChatGPT* with some guidance.

[Add ActiveSupport::MessagePack](https://github.com/rails/rails/pull/47770)  
`ActiveSupport::MessagePack` is a serializer that integrates with the [`msgpack` gem](https://github.com/msgpack/msgpack-ruby) to serialize a variety of Ruby objects.
Compared to `JSON` and `Marshal`, `AS::MessagePack` can provide a performance improvement and message size reduction.

[Allow queue adapters to provide a custom name](https://github.com/rails/rails/pull/48003)  
This gives queue adapters more freedom to name and organize their code. 

[Adds support USING INDEX for unique constraints in PostgreSQL.](https://github.com/rails/rails/pull/47971)  
Follow up to a recent feature with [PostgreSQL unique constraints](https://github.com/rails/rails/pull/46192)
Adds `:using_index` option to use an existing index when defining a unique constraint.

[Show reason for foreign key error when loading fixtures](https://github.com/rails/rails/pull/47990)  
Ease to spot issues with loading fixtures by getting appropriate error message with details.  

[Reduce captures in ActiveSupport::Inflector#underscore](https://github.com/rails/rails/pull/47982)  
This pull request changes a `gsub!` in `ActiveSupport::Inflector#underscore` to not use captures.
This skips creating small strings by `$1/$2` and appending an underscore, and instead, excludes the character to be kept from the replacement target.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-04-14%7D...main@%7B2023-04-21%7D)._  
_We had [88 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230414-20230421) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
