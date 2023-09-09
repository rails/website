---
layout: post
title: "Infer primary_key: :id on associations with composite primary key models, add validation option for enum and more!"
categories: news
author: vipulnsward
published: true
date: 2023-09-08
---


Hi! This is [Vipul](https://www.saeloun.com/team/vipul) bringing you the latest from this week's changes in the Rails codebase.

[Infer primary_key: :id on associations with composite primary key models](https://github.com/rails/rails/pull/49113)

Prior to this change, you'd need to do the following to set up associations for composite primary key models:

```ruby
class Order
  self.primary_key = [:shop_id, :id]
  has_many :order_agreements, primary_key: :id
end

class OrderAgreement
  belongs_to :order, primary_key: :id
end
```

After this change, the `primary_key` option no longer needs to be specified:

```ruby
class Order
  self.primary_key = [:shop_id, :id]
  has_many :order_agreements
end

class OrderAgreement
  belongs_to :order
end
```


[Add validation option for `enum` to make then validatable without raising error](https://github.com/rails/rails/pull/49100)

This change adds `:validate` option for enums. If you want the enum value to be validated before saving, use the option `:validate`:

```ruby
class Conversation < ApplicationRecord
  enum :status, %i[active archived], validate: true
end

conversation = Conversation.new
conversation.status = :unknown
conversation.valid? # => false
```

It is also possible to pass additional validation options:

```ruby
class Conversation < ApplicationRecord
  enum :status, %i[active archived], validate: { allow_nil: true }
end

conversation = Conversation.new
conversation.status = nil
conversation.valid? # => true
```

Otherwise `ArgumentError` will raise which is standard current behavior:

```ruby
class Conversation < ApplicationRecord
  enum :status, %i[active archived]
end

conversation = Conversation.new
conversation.status = :unknown # 'unknown' is not a valid status (ArgumentError)
```

[Use SecureRandom.alphanumeric for SecureRandom.base36/base58 in Ruby 3.3](https://github.com/rails/rails/pull/49067)

Ruby 3.3 added a change that allows passing a [list of characters to `SecureRandom.alphanumeric`](https://github.com/ruby/ruby/pull/8312).
This change now uses `SecureRandom.alphanumeric` for `SecureRandom.base36/base58` instead of complex `SecureRandom.random_number/random_bytes` usage as well
for a slightly faster solution.

[Deprecate passing rewhere to merge](https://github.com/rails/rails/pull/45498)

Specifying `Relation#merge(rewhere: true)` is deprecated, as that has now been the default since Rails 7.0. 
This change will warn about setting the rewhere option will error in Rails 7.2.

[Fix unscope not working when where uses triple dot range](https://github.com/rails/rails/pull/48095)

This change fixes unscope not working in specific case for triple dot range. For example:


Before:
```ruby
Post.where(id: 1...3).unscope(where: :id).to_sql # "SELECT `posts`.* FROM `posts` WHERE `posts`.`id` >= 1 AND `posts`.`id` < 3"    
```

After:
```ruby
Post.where(id: 1...3).unscope(where: :id).to_sql # "SELECT `posts`.* FROM `posts`"
```


[Fix change_column not setting precision for sqlite](https://github.com/rails/rails/pull/49090)

This change fixes `change_column` not setting `precision: 6` on `datetime` columns when using 7.0+ Migrations and SQLite.

[Change has_secure_token default to on: :initialize](https://github.com/rails/rails/pull/48912)

With the changes made in [previously](https://github.com/rails/rails/pull/47420), `has_secure_token declarations` can be configured to execute in an `after_initialize` callback. 
This commit adds a new Rails 7.1 default: generate all `has_secure_token` values when their corresponding models are initialized.

[Fix: simple_format with blank wrapper_tag option returns plain html tag](https://github.com/rails/rails/pull/49120)

By default `simple_format` method returns the text wrapped with `<p>`. But if we explicitly specify the `wrapper_tag: nil` in the options, it used to return the text wrapped with `<></>` tag.
This change fixes the behaviour to now wrap it in `<p>` instead.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-09-01%7D...main@%7B2023-09-08%7D)._
_We had [30 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230901-20230908) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
