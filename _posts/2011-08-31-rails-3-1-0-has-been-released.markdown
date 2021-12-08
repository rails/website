---
layout: post
title: Rails 3.1.0 has been released!
categories: []
author: aaronp
published: true
date: 2011-08-31 21:20:00.000000000 +01:00
---
Hi everybody!

It's been 3 Months since RailsConf, so I think it's time we released Rails 3.1.0.  So, here it is!  I've released Rails 3.1.0!

## CHANGES

For a much more attractive and easy to read list of changes, please check out the awesome [Rails 3.1.0 Release Notes on the Rails Guides site](http://guides.rubyonrails.org/3_1_release_notes.html).  For a less attractive list of changes, please continue to read!

Here are some highlights of the major changes in Rails 3.1.0:

## [ActionPack](https://github.com/rails/rails/blob/3-1-stable/actionpack/CHANGELOG)

* ActionPack has been updated to include the new asset pipeline.  Please see the [rails guides on the asset pipeline](http://edgeguides.rubyonrails.org/asset_pipeline.html).

* Streaming response support has been added.  This feature allows you to stream templates to the user before processing has actually finished.  See the Rails Guides, or documentation in `ActionController::Metal::Streaming` for more information.  Middleware have been refactored to support this feature.

* RJS has been extracted to a gem.

## [ActiveModel](https://github.com/rails/rails/blob/3-1-stable/activemodel/CHANGELOG)

* `attr_accessible` and friends now accepts :as as option to specify a role

* Added `ActiveModel::SecurePassword` to encapsulate dead-simple password usage with BCrypt encryption and salting.

## [ActiveRecord](https://github.com/rails/rails/blob/3-1-stable/activerecord/CHANGELOG)

* Prepared statement caches have been integrated.  `ActiveRecord::Base#create` and simple finders will use a prepared statement and cache for more performant inserts and selects.

* Associations have been refactored for greater simplicity and maintainability.

* `default_scope` can take any object that responds to `call`.

* PostgreSQL adapter only supports PostgreSQL version 8.2 and higher.

* Migrations use instance methods rather than class methods.  Rather than defining a `self.up` method, you should define an instance method `up`.

* Migrations are reversible.  When a new migration is generated, the migration will contain one method called `change`.  Database changes made in this method will automatically know how to reverse themselves.  For more information, see the documentation for `ActiveRecord::Migration` and `ActiveRecord::Migration::CommandRecorder`.

* When a model is generated, `add_index` is added by default for `belongs_to` or `references` columns.

## [ActiveResource](https://github.com/rails/rails/blob/3-1-stable/activeresource/CHANGELOG)

* The default format has been changed to JSON for all requests. If you want to continue to use XML you will need to set `self.format = :xml` in the class.

## [ActiveSupport](https://github.com/rails/rails/blob/3-1-stable/activesupport/CHANGELOG)

* ActiveSupport::BufferedLogger set log encoding to BINARY, but still use text mode to output portable newlines.

* Add Object#in? to test if an object is included in another object.

* ActiveSupport::Dependencies::ClassCache class has been introduced for holding references to reloadable classes.

* Added `weeks_ago` and `prev_week` to Date/DateTime/Time.

* JSON decoding now uses the `multi_json` gem which also vendors a json engine called OkJson. The yaml backend has been removed in favor of OkJson as a default engine for 1.8.x, while the built in 1.9.x json implementation will be used by default.

## [Railties](https://github.com/rails/rails/blob/3-1-stable/railties/CHANGELOG)

* The default database schema file is written as UTF-8.

* Rack::Sendfile middleware is used only if `x_sendfile_header` is present.

* Add alias `r` for rails runner.

* jQuery is the new default JavaScript library.

* Added `config.force_ssl` configuration which loads Rack::SSL middleware and force all requests to be under HTTPS protocol

## For more info

For a more detailed list of changes, please see each of the CHANGELOG files checked in to the [Rails repository on github](http://github.com/rails/rails).

For an even more detailed list of changes, please see the [commit list between Rails 3.0.10 and 3.1.0](https://github.com/rails/rails/compare/v3.0.10...v3.1.0).

## The End

I am personally very proud of this release.  I want to say thank you to the people testing our release candidates, the people submitting patches and sending in bug reports.  I think that Rails 3.1.0 is the best release of Rails to date, and we could not have done it without you.

Please continue to create amazing things with this framework!

### SHA-1

* b68f74ced662145a4139409edf3c51db1159ead8  actionmailer-3.1.0.gem
* 136474f270677ae75ad0f9599d26e89cf1d4bc7b  actionpack-3.1.0.gem
* e6b68453c08bb0da52ed1d422ba2f87a5e3aa794  activemodel-3.1.0.gem
* dfbae15c0d395304812c22fbf18aa9daadbe20b4  activerecord-3.1.0.gem
* 3f1f547e500d1ffc1f7c3ee4ab9eb1526157a870  activeresource-3.1.0.gem
* f21627c2f429abfa8685d2147fadab6704c13869  activesupport-3.1.0.gem
* 21c6592189fb358a066846754a8f7ce7a238fca6  rails-3.1.0.gem
* 79cfa1eca232de9a45453829287e4438089b7955  railties-3.1.0.gem

<3 <3 <3
