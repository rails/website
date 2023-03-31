---
layout: post
title: "Active Record Encryption, several performance optimizations, and much MORE!"
categories: news
author: zzak
published: true
date: 2021-05-28
---

Hi, [zzak](https://github.com/zzak) here! お久しぶりです! This time I will be recapping the past month or so of Rails. Hang on! There's a ton of stuff to catch up on!!

### [Active Record Encryption](https://github.com/rails/rails/pull/41659)

Originally extracted from HEY, this feature adds encrypted attributes to Active Record models. You can find out more in the [guide](https://edgeguides.rubyonrails.org/active_record_encryption.html).

### [Optimize Cache::Entry coder](https://github.com/rails/rails/pull/42025)

Active Support's cache has received a significant speed bump that was well overdue.

### [Optimize Active Model generated attribute methods](https://github.com/rails/rails/pull/42095)

This optimization should reduce memory overhead and speed up boot times.

### [7x speed up for ActiveRecord::Base.logger](https://github.com/rails/rails/pull/42237)

By converting AR::Base.logger to a class\_attribute we had significant performance gains.

### [Allow nesting locales for Engines](https://github.com/rails/rails/pull/41872)

This opens up better organization for larger apps using i18n.
e.g. config/locales/en/models.yml vs. config/locales/models.en.yml

### [Support Range objects in Active Job](https://github.com/rails/rails/pull/42219)

This change adds an Active Job serializer for the Range object from Ruby.

### [Add Enumerable#sole to Active Support](https://github.com/rails/rails/pull/40914)

Based on ActiveRecord::FinderMethods#sole, this method returns the sole item of the enumerable. If there are no items, or more than one item it will raise an exception.

### [Deprecate Enumerable#sum and Array#sum](https://github.com/rails/rails/pull/42080)

Since Ruby 2.4 included these methods, Rails can start using the native versions for significant performance increase.

### [Improve Active Record performance for #one? and #many?](https://github.com/rails/rails/pull/42143)

By limiting the generated count queries, this optimization provides significant performance increase for operations over many rows.

### [Log a warning when running SQLite in production](https://github.com/rails/rails/pull/42191)

A warning is now emitted when trying to use SQLite in production, this can be disabled by setting config.active\_record.sqlite3\_production\_warning to false.

### [Add disable_joins option to has_one relation](https://github.com/rails/rails/pull/42079)

This solves a problem with has\_one...through relationships whose tables are in separate database clusters.

### [Add support for require-trusted-types-for and trusted-types](https://github.com/rails/rails/pull/42126)

This feature adds support for these two Content-Security-Policy headers which you can read more about over at [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy).

### [Remove and deprecate Rack::Runtime](https://github.com/rails/rails/pull/41935)

Any apps depending on this middleware can still activate it manually, otherwise a deprecation warning will be sent and replaced with a fake.

### [Allow access to nested secrets in Rails.application.credentials](https://github.com/rails/rails/pull/42106)

Now Rails.application.credentials.aws.access\_key\_id will return the same thing as Rails.application.credentials.aws[:access\_key\_id].

### [Add ActionController::Live#send_stream](https://github.com/rails/rails/pull/41488)

Adds the ability to live stream binary data to the browser like send\_data does for static files.

### [Extract ActiveStorage::Streaming](https://github.com/rails/rails/pull/41440)

This allows you to stream blobs from cloud storage in any controller.

### [Add from: option to ActiveSupport::TestCase#assert_no_changes](https://github.com/rails/rails/pull/42277)

This feature provides an optional keyword argument to assert\_no\_changes to specify the expected initial value.

[61 people](https://contributors.rubyonrails.org/contributors/in-time-window/20210501-20210531) contributed to Rails this month. Check out the [open issues](https://github.com/rails/rails/issues) to get involved and help out. Until next week!
