---
layout: post
title: 'Rails 7.1.0 Beta 1: Dockerfiles, Attribute Normalization, Single Use Tokens and More'
categories: releases
author: rafaelfranca
published: true
date: 2023-09-11 21:00:00 -04:00
---

RailsWorld is approaching, and to prepare for the celebration of the 20th anniversary of Rails, we are releasing the first beta of Rails 7.1.0!

There are [over five thousand commits](https://github.com/rails/rails/compare/v7.0.8...main) since Rails 7.0, so this release is packed with new features and improvements.

Please help us test all this new stuff so we can ensure a solid final release of Rails 7.1.

## Generate Dockerfiles for new applications

Rails will now generate a Docker-related files when you run `rails new`.

These files serve as foundational setup for deploying your Rails application in a
production environment using Docker.

## Building blocks for authentication

To complement with `has_secure_password` Rails 7.1 brings a few new building blocks to help developers to build their
own authentication system.

First, [`normalizes`](https://edgeapi.rubyonrails.org/classes/ActiveRecord/Normalization/ClassMethods.html#method-i-normalizes)
declares an attribute normalization. This is useful to normalize attributes before saving them to the database.

```ruby
class User < ApplicationRecord
  normalizes :email, with: -> email { email.strip.downcase }
end

user = User.create(email: " CRUISE-CONTROL@EXAMPLE.COM\n")
user.email                  # => "cruise-control@example.com"
```

Second, [`authenticate_by`](https://edgeapi.rubyonrails.org/classes/ActiveRecord/SecurePassword/ClassMethods.html#method-i-authenticate_by)
is intended to be used in the controller to authenticate the user, and it is implemented in a way that protect against
common timing attacks.

```ruby
User.authenticate_by(email: "rafael@rubyonrails.org", password: "railsrocks")
```

[`generates_token_for`](https://edgeapi.rubyonrails.org/classes/ActiveRecord/TokenFor/ClassMethods.html#method-i-generates_token_for)
can be used to implement features like password reset, email confirmation, and other features that require a single use
token.

```ruby
class User < ApplicationRecord
  has_secure_password

  generates_token_for :password_reset, expires_in: 15.minutes do
    # Last 10 characters of password salt, which changes when password is updated:
    password_salt&.last(10)
  end
end

user = User.first

token = user.generate_token_for(:password_reset)
User.find_by_token_for(:password_reset, token) # => user
# 16 minutes later...
User.find_by_token_for(:password_reset, token) # => nil
```

Finally, [`has_secure_password`](https://edgeapi.rubyonrails.org/classes/ActiveModel/SecurePassword/ClassMethods.html#method-i-has_secure_password)
got the ability to automatically verify the current password when updating the password. This is useful to check
if the user who is trying to update the password, knows the current password.

```ruby
# Schema: User(name:string, password_digest:string)
class User < ActiveRecord::Base
  has_secure_password
end

user = User.new(name: "rafael", password: "railsrocks", password_confirmation: "railsrocks")
user.save                                                                      # => true
user.update(password: "pwn3d", password_challenge: "")                         # => false, challenge doesn't authenticate
user.update(password: "railsGetsEvenBetter", password_challenge: "railsrocks") # => true
```

## A more robust framework

Rails promises to be a framework that can get you from Hello World to IPO, and on each release we are improving
how robust Rails is.

For 7.1 we are bringing a collection of changes that have the goal of making easier for your application to scale.

The [`perform_all_later` method in Active Job](https://edgeapi.rubyonrails.org/classes/ActiveJob.html#method-c-perform_all_later),
was designed to streamline the process of enqueuing multiple jobs simultaneously. This powerful
addition allows you to efficiently enqueue jobs without triggering callbacks. This is
particularly useful when you need to enqueue a batch of jobs at once, reducing the overhead
of multiple round-trips to the queue datastore.

Support to Composite Primary keys was added to Active Record, [allowing applications to improve the performance of some
queries](https://shopify.engineering/how-to-introduce-composite-primary-keys-in-rails), specially those applications
that use multi-tenant architecture, by using the tenant ID as part of the primary key.

A new database adapter was added, [Trilogy](https://github.blog/2022-08-25-introducing-trilogy-a-new-database-adapter-for-ruby-on-rails/),
a MySQL-compatible database client. This adapter is mostly a drop-in replacement for the MySQL2 adapter, but streamlines
the installation process by not requiring the mysql client library to
be present in the operating system, and improve the performance of some queries.

A significant enhancement has been introduced to the Active Record API, expanding its
[support for asynchronous queries](https://github.com/rails/rails/pull/44446). This enhancement
addresses the need for more efficient handling of not-so-fast queries, particularly focusing on
aggregates (such as `count`, `sum`, etc.) and all methods returning a single record or anything
other than a `Relation`.

The new API includes the following asynchronous methods:

- `async_count`
- `async_sum`
- `async_minimum`
- `async_maximum`
- `async_average`
- `async_pluck`
- `async_pick`
- `async_find_by_sql`
- `async_count_by_sql`

## Introducing `config.autoload_lib` and `config.autoload_lib_once` for Enhanced Autoloading

A [new configuration method, `config.autoload_lib(ignore:)`](https://edgeapi.rubyonrails.org/classes/Rails/Application/Configuration.html#method-i-autoload_lib),
has been introduced. This method is used to enhance the autoload paths of applications by including the
`lib` directory, which is not included by default. Also, `config.autoload_lib(ignore: %w(assets tasks))`
is generated for new applications.

It's important to note that this feature is not available for engines.

## Exciting future

Rails 7.1 is packed with new features and improvements, but we are already thinking about the next release.

We will be sharing some of our ideas at RailsWorld, and we are looking forward to hearing yours as well. Let's
celebrate Rails and [work together](https://contributors.rubyonrails.org/contributors/in-time-window/this-year) to make
it even better!

In the meantime, please give a try to Rails 7.1.0.beta1, and let us know what you think.
