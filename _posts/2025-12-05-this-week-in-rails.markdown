---
layout: post
title: "Schema-Enforced JSON Access, Postgres Type Decoding, and more!"
categories: news
author: Emmanuel Hayford
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-12-05
---

Hi, it's [Emmanuel Hayford](https://hayford.dev/). Here’s a look at the highlights from this week’s updates to the Rails codebase.

[Add schematized json for has_json](https://github.com/rails/rails/pull/56258)  
Provides a schema-enforced access object for a JSON attribute. This allows you to assign values
directly from the UI as strings, and still have them set with the correct JSON type in the database.

Only the three basic JSON types are supported: boolean, integer, and string. No nesting either.
These types can either be set by referring to them by their symbol or by setting a default value.
Default values are set when a new model is instantiated and on `before_save` (if defined).

Examples:

```ruby
class Account < ApplicationRecord
  has_json :settings, restrict_creation_to_admins: true, max_invites: 10, greeting: "Hello!"
  has_delegated_json :flags, beta: false, staff: :boolean
end

a = Account.new
a.settings.restrict_creation_to_admins? # => true
a.settings.max_invites = "100" # => Set to integer 100
a.settings = { "restrict_creation_to_admins" => "false", "max_invites" => "500", "greeting" => "goodbye" }
a.settings.greeting # => "goodbye"
a.staff # => nil
a.staff = true
a.staff? # => true
```

[Add SecureRandom.base32](https://github.com/rails/rails/pull/56288)  
Rails adds a new helper to `SecureRandom` in `SecureRandom.base32`, which generates a random Base32, uppercase, human-friendly, case-insensitive string. Essentially allowing:

```ruby
SecureRandom.base32        # => "PAK1NG78CM1HJ44A"
SecureRandom.base32(24)    # => "BN9EAB8RG9BNTTC9BX7P5JGJ"
```

[ActionText: Validate RemoteImage URLs](https://github.com/rails/rails/pull/56283)  
`RemoteImage.from_node` now validates the URL before creating a `RemoteImage` object, using the same regex that `AssetUrlHelper` uses during rendering. URLs like "image.png" that would previously have been passed to the asset pipeline and raised an `ActionView::Template::Error` are rejected early, and gracefully fail by resulting in a `MissingAttachable`.

[Introduce DevToolsController for Chrome workspaces](https://github.com/rails/rails/pull/56245)  
Add a new internal route in development to respond to Chromium DevTools GET requests.
This allows the app folder to be easily connected as a workspace in Chromium-based browsers.

[Restore missing Postgres type decoding](https://github.com/rails/rails/pull/56159)  
Decode PostgreSQL `bytea` and `money` columns when they appear in direct query results.

`bytea` columns are now decoded into binary-encoded `String` values, and `money` columns are decoded into `BigDecimal` instead of `String`.

```ruby
ActiveRecord::Base.connection
     .select_value("select '\\x48656c6c6f'::bytea").encoding
#=> Encoding::BINARY

ActiveRecord::Base.connection
     .select_value("select '12.34'::money").class
#=> BigDecimal
```

[ActiveStorage immediate variants](https://github.com/rails/rails/pull/51951)  
This Pull Request introduces the `immediate` option and follows the existing patterns around `preprocessed`.

```ruby
has_one_attached :avatar_with_immediate do |attachable|
  attachable.variant :thumb, resize_to_limit: [4, 4], immediate: true
end
```

[Extract ActionText::Editor base class and ActionText::TrixEditor adapter](https://github.com/rails/rails/pull/51238)  
The introduction of the `ActionText::TrixEditor` class enables the
deprecation of a variety of class and instance-level methods across the
`ActionText` namespace. Action Text benefits from deprecating methods in
order to reduce its public API.




_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-11-28%7D...main@%7B2025-12-05%7D)._
_We had [26 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20251128-20251205) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
