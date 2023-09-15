---
layout: post
title: "This Week in Rails: 7.1 beta release, Bun support and more!"
categories: news
author: greg
published: true
date: 2023-09-15
---

Hi, it's [Greg](https://greg.molnar.io), bring you the latest changes in the Rails codebase.

[Rails 7.1 beta release](https://rubyonrails.org/2023/9/13/Rails-7-1-0-beta-1-has-been-released)  
The first beta version of Rails 7.1 has been released! There have been over five thousand commits made by over 800 contributors since Rails 7.0, so this release is packed with new features and improvements. You can read a summary of the changes in the announcement.

[Ignore env files (except templates)](https://github.com/rails/rails/pull/49278)  
To prevent accidentally leaking secrets to code repositories, the default *.gitignore* file excludes *.env*(except template ones) files from now on.

[Explicit _primary_key:_ option should always take priority in associations](https://github.com/rails/rails/pull/49264)  
This pull request fixes the issue where the `primary_key:` option was ignored if the associated model had a `query_constraints` configured. Now `primary_key:` option always takes priority, and only if there is no `primary_key:` option, the `query_constraints` are used to determine the `association_primary_key` value.  

[Instrument Active Record transactions](https://github.com/rails/rails/pull/49192)  
This pull request adds a new `transaction.active_record` event to track when Active Record-managed transactions occur. It includes the connection in the payload (useful, for example, in differentiating transactions to different databases),

[Add Bun support](https://github.com/rails/rails/pull/49241)  
Bun is a new and viable alternative to the node.js runtime, yarn package manager, and esbuild bundler. Bun's primary differentiating characteristic is speed. It's often multiple times faster than node.js and friends.  
Since most vanilla Rails projects are looking to simply sprinkle a little JavaScript here and there (but sometimes want a bit better more of the JavaScript ecosystem than the import-maps provide) Bun is a really good fit and can be easily adopted by new rails projects.

[Add dedicated guide for composite primary keys](https://github.com/rails/rails/pull/49205)  
This pull request adds a dedicated guide for composite primary key usage.  
Besides the dedicated guide, [#49218](https://github.com/rails/rails/pull/49218) added a suggestion to use composite primary keys on join tables of `:through` associations.

[Support composite foreign keys via migration helpers](https://github.com/rails/rails/pull/47637)  
The Rails migration helpers now support composite primary keys. A few examples of using them:

```ruby
# Assuming "carts" table has "(shop_id, id)" as a primary key.
add_foreign_key(:orders, :carts, primary_key: [:shop_id, :id])
# or
add_foreign_key(:orders, :carts, column: [:cart_shop_id, :cart_id])

remove_foreign_key(:orders, :carts, primary_key: [:shop_id, :id])
foreign_key_exists?(:orders, :carts, primary_key: [:shop_id, :id])
```

[Add "Testing View Partials" section to the Testing Guides](https://github.com/rails/rails/pull/49193)  
A "Testing View Partials" section is added to the guides that expand upon the variety of tooling available to tests that inherit from `ActionView::TestCase`. 

[Adds support for _if_not_exists_ when adding a check constraint.](https://github.com/rails/rails/pull/49178)  
The `add_check_constraint` method now accepts an `if_not_exists` option. If set to _true_ an error won't be raised if the check constraint already exists. In addition, `if_exists` and `if_not_exists` options are transposed if set when reversing `remove_check_constraint` and `add_check_constraint`. This enables the simple creation of idempotent, non-transactional migrations.


[Encryption: support _support_unencrypted_data_ at a per-attribute level](https://github.com/rails/rails/pull/49072)  
If `ActiveRecord::Encryption.config.support_unencrypted_data` is enabled, this change allows you to override that global setting on an attribute should you need.
  
[Raise error when generating attribute with a dangerous name](https://github.com/rails/rails/pull/47752)  
Generating a model with attributes named `hash` or `save` should raise an error instead of generating a migration with an invalid attribute, and this pull request made that happen.
  

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-09-08%7D...main@%7B2023-09-15%7D)._
_We had [28 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230908-20230915) to the Rails codebase this past week!_

Until next time!

