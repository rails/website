---
layout: post
title: 'Rails 7.1: Dockerfiles, BYO Authentication, More Async Queries, and more!'
categories: releases
author: rafaelfranca
published: true
date: 2023-10-05 10:10:00 +02:00
---

[Rails World](https://rubyonrails.org/world) just started and we are getting together with the community in person
to celebrate of the 20th anniversary of Rails and the release of Rails 7.1.

In this release there has been [over five thousand commits](https://github.com/rails/rails/compare/v7.0.8...7-1-stable) made by [over 800 contributors](https://contributors.rubyonrails.org/releases/7-1-0/contributors) since Rails 7.0, so it is packed with new features and improvements.

## Dockerfiles for new applications

Rails will now generate all the Dockerfiles you need to deploy your application using [Kamal](https://kamal-deploy.org), or any other Docker-based deployment setup, when you run `rails new`. These Dockerfiles are tuned for production use with proper caching layers, multi-stage building to minimize image sizes, and all the dependencies needed whether you use a JavaScript build environment or not.

## Build your own authentication improvements

To complement `has_secure_password`, Rails 7.1 brings new features to help developers to build their
own authentication system.

First, [`normalizes`](https://edgeapi.rubyonrails.org/classes/ActiveRecord/Normalization/ClassMethods.html#method-i-normalizes)
declares an attribute normalization. This is useful to normalize attributes before saving them to the database:

```ruby
class User < ApplicationRecord
  normalizes :email, with: -> email { email.strip.downcase }
end

user = User.create(email: " CRUISE-CONTROL@EXAMPLE.COM\n")
user.email                  # => "cruise-control@example.com"
```

Second, [`authenticate_by`](https://edgeapi.rubyonrails.org/classes/ActiveRecord/SecurePassword/ClassMethods.html#method-i-authenticate_by)
protects against common timing attacks when a user is authenticated in a controller:

```ruby
User.authenticate_by(email: "rafael@rubyonrails.org", password: "railsrocks")
```

Third, [`generates_token_for`](https://edgeapi.rubyonrails.org/classes/ActiveRecord/TokenFor/ClassMethods.html#method-i-generates_token_for)
can be used to implement features like password reset, email confirmation, and other features that require single-use tokens:

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
can now automatically verify the current password when updating the password. This is useful to check if the user who is trying to update the password, knows the current password:

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

## More async queries for Active Record

The [support for asynchronous queries](https://github.com/rails/rails/pull/44446) has been vastly expanded in Active Record.
This makes it easier to run multiple, slow queries in parallel, especially those focused on calculations, while allowing the handling
of the request to proceed. There are new methods for async aggregates (such as `count`, `sum`, etc.), methods returning a single record, and anything
other than a `Relation`:

- `async_count`
- `async_sum`
- `async_minimum`
- `async_maximum`
- `async_average`
- `async_pluck`
- `async_pick`
- `async_ids`
- `async_find_by_sql`
- `async_count_by_sql`

## Built-in support for the Trilogy MySQL adapter

[Trilogy](https://github.blog/2022-08-25-introducing-trilogy-a-new-database-adapter-for-ruby-on-rails/) is a new MySQL database adapter for Rails that's been created by GitHub to improve on the performance, flexibility, and ease of embedding over the existing mysql2 option. It's running in production at GitHub and Shopify, and now it's supported out of the box in Rails as an option. From the next major version of Rails, it'll likely be the new default.

## Support for composite primary keys in Active Record

Shopify improved the performance of common queries against their largest tables by 5-6x and reduced the number of slow queries by 80% by [switching to composite primary keys](https://shopify.engineering/how-to-introduce-composite-primary-keys-in-rails). The trade-off is that inserts can become significantly slower, but for very large tables that see many more reads than writes, it can be a dramatic improvement. This work has been extracted into full support for composite primary keys in Active Record.

## Enqueue massive amounts of jobs with `perform_all_later`

The [`perform_all_later` method in Active Job](https://edgeapi.rubyonrails.org/classes/ActiveJob.html#method-c-perform_all_later),
was added to streamline the process of enqueuing large numbers of jobs simultaneously. This powerful
addition allows you to efficiently enqueue jobs without triggering callbacks. This is
particularly useful when you need to enqueue a batch of jobs at once, reducing the overhead
of multiple round-trips to the queue datastore.

## Introducing `config.autoload_lib` and `config.autoload_lib_once` for Enhanced Autoloading

A [new configuration method, `config.autoload_lib(ignore:)`](https://edgeapi.rubyonrails.org/classes/Rails/Application/Configuration.html#method-i-autoload_lib),
has been introduced. This method is used to enhance the autoload paths of applications by including the
`lib` directory, which is not included by default. Also, `config.autoload_lib(ignore: %w(assets tasks))`
is generated for new applications. (This feature is not available for engines.)

## Support for Bun

You can now generate new applications using [Bun](https://bun.sh/) as your JavaScript runtime. To do so, you can pass
the `--javascript=bun` option to `rails new`.

## Celebrating this release and looking towards the next

Rails 7.1 is out, but we are already thinking about the next release. We will be sharing some of our ideas at Rails World, and we are going to be engaging with the community in person to discuss ideas and collect some feedback.

We are looking forward to what is coming next, and we hope you are too!
