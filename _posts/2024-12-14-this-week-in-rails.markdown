---
layout: post
title: "All new Rails 8 Getting Started guide, new Rails releases, ActiveModel::Attributes::Normalization and more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-12-14
---

Hey everyone, Happy Saturday!

[Vipul](https://www.saeloun.com/team/vipul) here with the latest updates for This Week in Rails. Let's dive in!

[Rails Versions 7.0.8.7, 7.1.5.1, 7.2.2.1, and 8.0.0.1 have been released!](https://rubyonrails.org/2024/12/10/Rails-Versions-8-0-0-1-7-2-2-1-7-1-5-1-7-0-8-7-have-been-released)  
Rails Versions 7.0.8.7, 7.1.5.1, 7.2.2.1, and 8.0.0.1 have been released! 
These are security patches addressing one new issue where using the `content_security_policy` helper with untrusted user input could lead to a bypass of the browser Content Security Policy.

[Rails Version 8.0.1 has been released!](https://rubyonrails.org/2024/12/13/Rails-Version-8-0-1-has-been-released)  
A new minor release - 8.0.1, is also out! Head over the [CHANGELOG](https://github.com/rails/rails/releases/tag/v8.0.1), to check the full set of changes in this release.

[All new Getting Started Guide for Rails 8!](https://github.com/rails/rails/pull/53846/files)  
This Pull Request adds a new [Rails 8 Getting Started guide.](https://edgeguides.rubyonrails.org/getting_started.html) 
It showcases Rails and provides many introductory points to learn more about all the various features Rails includes like caching, I18n, deploying with Kamal, etc.

It also includes an [Install Ruby on Rails guide](https://edgeguides.rubyonrails.org/install_ruby_on_rails.html) that walks through the basics of installing Ruby with a version manager, arguably one of the biggest barriers to newcomers.

[Rails 8 Authentication generator guide](https://github.com/rails/rails/pull/53802)  
The security guide has now been updated to include a "How to use the built-in authentication generator" section, to go over its details.

[Accept a block for `ActiveJob::ConfiguredJob#perform_later`](https://github.com/rails/rails/pull/53859)  
This pull request adds support for accepting a block for `ActiveJob::ConfiguredJob#perform_later`. 
This was perviously inconsistent with a regular `ActiveJob::Base#perform_later`.

[Fix `if_exists`/`if_not_exists` for foreign keys addition and removal](https://github.com/rails/rails/pull/53863)  
This PR addresses a few improvements with foreign keys additions/removals and `if_exists/if_not_exists`:
- If there is a foreign key on a custom column and `add_foreign_key` on a default column with `if_not_exists` is used, an error was raised.
- When adding a foreign key with `if_not_exists`, `:primary_key` was not considered. 
- When removing a foreign key with `if_exists`, custom column was not being considered.

[Changing column nullability does not change default function](https://github.com/rails/rails/pull/53838)  
This Pull Requests fixes `MySQL` default functions getting dropped when changing a column's nullability.

[Migrate `ActiveRecord::Normalization` to Active Model](https://github.com/rails/rails/pull/53887)  
`ActiveRecord::Normalization` has now been moved to Active Model.
This change backports `ActiveRecord::Normalization` to `ActiveModel::Attributes::Normalization`. 
With this change we can now use this feature in PORO with `ActiveModel::Attributes::Normalization` -  

```ruby
class User
  include ActiveModel::Attributes
  include ActiveModel::Attributes::Normalization

  attribute :email, :string

  normalizes :email, with: -> email { email.strip.downcase }
end

user = User.new
user.email = " CRUISE-CONTROL@EXAMPLE.COM\n"
user.email # => "cruise-control@example.com"
```

[Change `ActionText::RichText#embeds` assignment to `before_validation`](https://github.com/rails/rails/pull/53847)  
Prior to this change, assignment to the `embeds` association happened **after** validation callbacks, so it wasn't possible to incorporate Rich Text-related file validation.

[SQLite3: Use default function as default insert value](https://github.com/rails/rails/pull/53882)  
Previously, if a column defined a function as its default value, the function would never be called during fixture insertion. It now works as expected with this addition. 

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-12-07%7D...main@%7B2024-12-13%7D)._
_We had [32 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20241207-20241213) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
