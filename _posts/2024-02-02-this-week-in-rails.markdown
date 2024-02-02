---
layout: post
title: "Deprecation, bugfixes and more!"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-02-02
---


Hi, it's [Greg](https://greg.molnar.io). Let's explore this week's changes in the Rails codebase.

[Deprecate passing _nil_ as model argument](https://github.com/rails/rails/pull/50931)  
Passing `model: nil` as an argument to the `form_with` method will be deprecated in the next release of Rails.

[Skip CSS when creating APIs](https://github.com/rails/rails/pull/50907)  
This pull request makes the Rails generator skip the CSS part if the `--api` flag is set, because CSS is unnecessary for API only apps.

[Commented out lines in _.railsrc_ file should not be treated as arguments](https://github.com/rails/rails/pull/50904)  
Before this change, commented out lines in the .railsrc file were parsed as arguments if the commented part had any arguments inside. This pull request fixes that.

[Add _row_count_ field to _sql.active_record_ notification](https://github.com/rails/rails/pull/50887)  
This pull request adds a `row_count` field to the `sql.active_record` notification, which returns the amount of rows returned by the query that emitted the notification.  
This metric is useful in cases where one wants to detect queries with big result sets.

[Allow encryption without compression](https://github.com/rails/rails/pull/50876)  
This pull request adds an option to `ActiveRecord::Encryption::Encryptor` to disable compression:
```ruby
class User
  encrypts :name, encryptor: ActiveRecord::Encryption::Encryptor.new(compress: false)
end
```
You may want to avoid compression if your data is already compressed, or to prevent revealing information about the entropy of the encrypted value.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-01-26%7D...main@%7B2024-02-02%7D)._
_We had [25 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240126-20240202) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
