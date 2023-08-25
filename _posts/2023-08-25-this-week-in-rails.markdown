---
layout: post
title: This Week in Rails - August 25
categories: news
author: Wojtek
published: true
date: 2023-08-25
---


Hi, [Wojtek](https://twitter.com/morgoth85) here. Let's explore last 2 week's changes in the Rails codebase.

[Rails Versions 7.0.7.2, 6.1.7.6 have been released](https://rubyonrails.org/2023/8/22/Rails-Versions-7-0-7-2-6-1-7-6-have-been-released)  
Just after the previous security releases [7.0.7.1, 6.1.7.5](https://rubyonrails.org/2023/8/22/Rails-Versions-7-0-7-1-6-1-7-5-have-been-released) but with fixed file permissions.

[MRSK renamed to Kamal](https://github.com/basecamp/kamal/releases/tag/v0.16.0)  
Due to a trademark claim, the project was renamed to Kamal.

[Add after_discard method to Active Job](https://github.com/rails/rails/pull/48010)  
It lets job authors to define a block which will be run when a job is about to be discarded. 

[Ensure response.parsed_body support for pattern matching](https://github.com/rails/rails/pull/49003)  
Both _Nokogiri_ and _Minitest_ supports Ruby's Pattern matching.
By parsing the JSON contents of `response.parsed_body` with `ActiveSupport::HashWithIndifferentAccess`, it's now pattern-matching compatible and can be used with Minitest's new `assert_pattern`  method.

[Add support for Playwright as a driver for system tests](https://github.com/rails/rails/pull/48950)  
[Playwright](https://playwright.dev/) is getting popularity as a new browser automation tool. There is a community-maintained [Ruby client](https://github.com/YusukeIwaki/playwright-ruby-client) and [Capybara driver](https://github.com/YusukeIwaki/capybara-playwright-driver) as well.

[Generate config.autoload_lib for new Rails 7.1 apps](https://github.com/rails/rails/pull/49032)  
New 7.1 applications will autoload from `lib` directory out of the box.
The new line in `config/application.rb` contains: `config.autoload_lib(ignore: %w(assets tasks))`.

[Allow redefining to_param delimiter using param_delimiter](https://github.com/rails/rails/pull/49020)  
Adds `ActiveModel::Conversion.param_delimiter` to configure delimiter being used in `to_param` method.

[Deprecate read_attribute(:id) returning the primary key](https://github.com/rails/rails/pull/49019)  
Starting in Rails 7.2, `read_attribute(:id)` will return the value of the id column, regardless of the model's primary key. To retrieve the value of the primary key, one can use `#id` instead. `read_attribute(:id)` for composite primary key models will now return the value of the id column.

[Use alias_attribute to provide id_value alias for id attribute](https://github.com/rails/rails/pull/48930)  
As the follow up to the above, added `ActiveRecord::Base#id_value` alias to access the raw value of a record's id column.
This alias is only provided for models that declare an `:id` column.
  
[Sort mailers on the mailer preview page alphabetically](https://github.com/rails/rails/pull/48989)  

[Add an option to start rails console in sandbox mode by default](https://github.com/rails/rails/pull/48984)  
`sandbox_by_default` option is added to start rails console in sandbox mode by default. With this option turned on, `--no-sandbox` must be specified to start rails in non-sandbox mode.
Note that this option is ignored when rails environment is development or test.

[Fix host display when X_FORWARDED_HOST authorized](https://github.com/rails/rails/pull/48941)  
Fix `HostAuthorization` potentially displaying the value of the `X_FORWARDED_HOST` header when the `HTTP_HOST` header is being blocked.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-08-12%7D...main@%7B2023-08-24%7D)._
_We had [35 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230812-20230824) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
