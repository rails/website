---
layout: post
title: "Active record improvements and much more"
categories: news
author: morgoth85
published: true
date: 2021-07-23
---

Hi, [Wojtek](https://twitter.com/morgoth85) here presenting quite a lot of changes from the past week.

### [Disable schema dump per database](https://github.com/rails/rails/pull/42804)

Dumping the schema is on by default for all databases in an application. To turn it off for a specific database one can now set _schema\_dump: false_ in the database config file.

### [Add change tracking methods for belongs_to associations](https://github.com/rails/rails/pull/42751)

Two new methods were added: _association\_changed?_ and _association\_previously\_changed?_ (assuming an association named _:association_) to Active Record.

### [Raise error on unpermitted open redirects](https://github.com/rails/rails/commit/5e93cff83599833380b4cb3d99c020b5efc7dd96)

Add _allow\_other\_host_ options to _redirect\_to_. One can opt in to this behaviour with _ActionController::Base.raise\_on\_open\_redirects = true_.

### [Update Capybara drivers](https://github.com/rails/rails/pull/42790)

Deprecate _poltergeist_ and _webkit_ (capybara-webkit) driver registration for system testing (they will be removed in Rails 7.1) and add _cuprite_ instead.

### [Fix dirty check for Float::NaN and BigDecimal::NaN](https://github.com/rails/rails/pull/42831)

Float::NaN and BigDecimal::NaN in Ruby are special values and can't be compared with _== method._

### [Make ActiveModel::Errors#inspect slimmer for readability](https://github.com/rails/rails/pull/42832)

It will now only output the errors inspection omitting the base object.

### [Add Middleware#remove](https://github.com/rails/rails/pull/42821)

It will raise an error if the middleware is not found.

[24 people](https://contributors.rubyonrails.org/contributors/in-time-window/20210717-20210723) contributed to Rails since last time. All the changes can be checked [here.](https://github.com/rails/rails/compare/@%7B2021-07-17%7D...main@%7B2021-07-23%7D) Until next week!
