---
layout: post
title: "Rails Luminary nominations open, new maintenance policy and more!"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-08-02
---


Hi, it is [Greg](https://greg.molnar.io), bringing you the latest changes in Rails. The framework turned 20 years old this past week. Happy Birthday Ruby on Rails!
Let's explore this week's changes in the Rails codebase.

[Nominations open for the 2024 Rails Luminary Awards
](https://rubyonrails.org/2024/8/2/nominations-open-for-2024-luminaries)  
Last year the Rails Foundation started the Rails Luminary Awards acknowledging people who’ve contributed to the Rails ecosystem and community with exceptional code, documentation, enthusiasm, or assistance, thereby helping others do more, learn more, or be inspired. You can submit your 2024 Rails Luminary nomination [here](https://rails-foundation.neetoform.com/bc30089dde483e9ae9a0).

[Implement new maintenance policy](https://github.com/rails/rails/pull/52471)  
The Rails maintenance policy was updated last week. The main changes are:
 - Releases are maintained by a pre-defined, fixed period of time. One year for bug fixes and two years for security fixes.
 - Distinction between severe security issues and regular security issues is removed.
 - Npm versioning is updated to match not use the pre-release - separator.

[Add password reset to authentication generator](https://github.com/rails/rails/pull/52472)  
This pull request adds a basic password reset flow to the new Rails generator to show use of signed ids with a mailer.  
Also, The generator was [renamed to "authentication"](https://github.com/rails/rails/pull/52435) this past week.

[Add a default password reset token to has_secure_password](https://github.com/rails/rails/pull/52483)  
This pull request adds a default configuration for a 15-minute password reset token when using `has_secure_password`:
```ruby
class User < ApplicationRecord
  has_secure_password
end

user = User.create!(name: "david", password: "123", password_confirmation: "123")
token = user.password_reset_token
User.find_by_password_reset_token(token) # returns user in the next 15 minutes.
```

[Implement the bin/rails boot command](https://github.com/rails/rails/pull/52480)  
The new `bin/rails boot` command boots the application and exits. Supports the standard `-e/--environment` options. It can be handy when you want to test the boot logic of a Rails app or when benchmarking something.

[Rename _check_box_ helpers to _checkbox_](https://github.com/rails/rails/pull/52432)  
This pull request renamed the `check_box` helper methods to `checkbox` and kept
the old names as aliases.  
The same change was done to `text_area` in [another pull request](https://github.com/rails/rails/pull/52467).

[Generate errors when running a Docker build with warnings](https://github.com/rails/rails/pull/52460)  
Docker introduced Docker build checks and by default, running a Docker build with warnings will not cause the build to fail (return a non-zero exit code). To raise errors on warnings `# check=error=true` declaration should be added to the Dockerfile, and this pull request did that.

[Change Active Model's _human_attribute_name_ to raise an error](https://github.com/rails/rails/pull/52426)  
When `config.i18n.raise_on_missing_translations` is set to `true`, controllers and views raise an error on missing translations. However, models won't. This pull request changes models to raise an error when `raise_on_missing_translations` is true.

[Deprecate hash key path mapping](https://github.com/rails/rails/pull/52422)  
This pull request deprecates drawing routes with hash key paths to make routing faster.

```ruby
# Before
get "/users" => "users#index"
post "/logout" => :sessions
mount MyApp => "/my_app"

# After
get "/users", to: "users#index"
post "/logout", to: "sessions#logout"
mount MyApp, at: "/my_app"
```
[Deprecate multiple path route mapping](https://github.com/rails/rails/pull/52409)    
Drawing routes with multiple paths was also deprecated to make routing faster.
You may use `with_options` or a loop to make drawing multiple paths easier.

```ruby
# Before
get "/users", "/other_path", to: "users#index"

# After
get "/users", to: "users#index"
get "/other_path", to: "users#index"
```

[Introduce _ActiveModel::AttributeAssignment#attribute_writer_missing_](https://github.com/rails/rails/pull/52417)  
This pull request introduces `ActiveModel::AttributeAssignment#attribute_writer_missing` to provide instances with an opportunity to gracefully handle assigning to an unknown attribute:
```ruby
class Rectangle
  include ActiveModel::AttributeAssignment

  attr_accessor :length, :width

  def attribute_writer_missing(name, value)
    Rails.logger.warn "Tried to assign to unknown attribute #{name}"
  end
end

rectangle = Rectangle.new
rectangle.assign_attributes(height: 10) # => Logs "Tried to assign to unknown attribute 'height'"
```

[Add _cvv_ and _cvc_ as default parameters to filter out in new apps](https://github.com/rails/rails/pull/52413)  
In general you should not be posting credit card details to your server, but if you make a mistake in your form and *do* post a user's credit card number, those details will get logged by default, even if your server doesn't use them.
This pull request adds `cvv` and `cvc` to the defaults for [`ActiveSupport::ParameterFilter`](https://api.rubyonrails.org/v7.1.3.4/classes/ActiveSupport/ParameterFilter.html) for new apps. This means that params with those names will not get logged by default. This just changes the template for new apps; there's no changes made to existing apps.


[Support Active Record batching using custom columns](https://github.com/rails/rails/pull/52384)  
This pull request adds support to Active Record batching to be used with custom columns.
```ruby
Product.in_batches(cursor: [:shop_id, :id]) do |relation|
  # do something with relation
end
```
[Reallow setting _secret_key_base_ to _nil_ in local environments](https://github.com/rails/rails/pull/52351)  
Previously, `secret_key_base` was allowed to be set to `nil` in local environments (or with `SECRET_KEY_BASE_DUMMY`) because validation would only happen on usage and not on the setter. This was [recently changed](https://github.com/rails/rails/commit/c2901eb084adb3d3701be157bec20d2961beb515) to make it easier to identify exactly where a _secret_key_base_ was being set to an invalid value.  
However, this change broke some applications which unconditionally set `secret_key_base` to some external value in dev/test. Before the change, the set value could be `nil` and fall back to the generated local secret on usage. This pull request restores that behavior.

[Ensure SQLite transaction defaults to IMMEDIATE mode](https://github.com/rails/rails/pull/50371)  
This pull request changes Active Record to Use SQLite `IMMEDIATE` transactions when possible. With this change, transactions run against the SQLite3 adapter default to `IMMEDIATE` mode to improve concurrency support and avoid busy exceptions.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-07-26%7D...main@%7B2024-08-02%7D)._
_We had [31 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240726-20240802) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
