---
layout: post
title: "Reduce memory used by ActiveSupport::Callbacks, non-column-backed attributes for enum and more!"
categories: news
author: vipulnsward
published: true
date: 2023-10-27
---


Hi! This is [Vipul](https://www.saeloun.com/team/vipul) bringing you the latest from this week's changes in the Rails codebase.

[Reduce memory used by ActiveSupport::Callbacks](https://github.com/rails/rails/pull/49728)

Previously, callbacks which were shared with subclasses would not share between them the procs generated in before/after filters. 
This was also lazily generated so would cause memory growth after an application is booted.

This change adds reuse of these in before/after blocks **_halving_** the memory growth from boot to post-request-serving. 

[Support non-column-backed attributes for enum](https://github.com/rails/rails/pull/49769)

This re-adds support for using enum with non-column-backed attributes while still guarding against typos in enum attribute names. 
When using enum with a non-column-backed attribute, the attribute must be previously declared with an explicit type. 

For example:

```ruby
class Post < ActiveRecord::Base 
  attribute :topic, :string 
  enum topic: %i[science tech engineering math]
end
```

[Handle negative numbers in NumberToHumanSizeConverter](https://github.com/rails/rails/pull/49791)

This Pull Request adds support for `number_to_human_size` to handle negative numbers.

```ruby
# Before
helper.number_to_human_size(-1234567)
# => "-1234567 Bytes"

# After
helper.number_to_human_size(-1234567)
# => "-1.18 MB"
```

[Dump schema only for a specific db for rollback/up/down tasks for multiple dbs](https://github.com/rails/rails/pull/49793)

Before this change, `rails db:migrate:primary` (and `rails db:up:primary`, `rails db:down:primary`) dumped schema files for all the databases, 
even though this is not necessary.
This change fixes this before to only perform dump for specific database.

[Fix casting PG money with comma as radix point](https://github.com/rails/rails/pull/49779)

For example, when casting `"3,50"` works as expected instead of raising an error.

[Add BroadcastLogger#deep_dup](https://github.com/rails/rails/pull/49720)

This change adds proper support for `dup` for `BroadcastLogger` class, where just calling `dup` wouldn't suffice before.

[Fix StrongParameters#extract_value to include blank values](https://github.com/rails/rails/pull/49749)

This change fixes `extract_value` to also work and retain blank values.

```ruby
params = ActionController::Parameters.new(tags: "ruby,rails,,web")
params.extract_value(:tags) # => ["ruby", "rails", "", "web"]
```

This helps to fix a bug where using `url_helpers` generated invalid urls if a records second composite primary key is empty.

[Ignore invalid PRIMARY KEY values in ActiveRecord::Persistence.delete method](https://github.com/rails/rails/pull/49738)

When some invalid primary key values are passed to `ActiveRecord::Persistence.delete` method, Active Record still performed a `DELETE` query even if it is not needed. 
For example,

```ruby
irb(main):001> User.delete([])
  User Delete All (0.6ms)  DELETE FROM "users" WHERE 1=0
=> 0
```

This change now skips unnecessarily running the query.

[Fix rails-ujs auto start() in bundled environments](https://github.com/rails/rails/pull/49668)

This change fixes using `rails-ujs` in bundled environments(with esbuild, etc), where `rails-ujs` would not auto start properly as its `start` method was getting called twice.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-10-13%7D...main@%7B2023-10-20%7D)._  
_We had [34 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20231020-20231027) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
