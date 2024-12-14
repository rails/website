---
layout: post
title: "New Rails Tutorial and Unpacked Videos, Releases, ActiveModel::Attributes::Normalization and more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-12-14
---

Hey everyone, Happy Saturday!

[Vipul](https://www.saeloun.com/team/vipul) here with the latest updates for This Week in Rails. Let's dive in!

This week, the Rails Foundation released a series of updated resources to help you learn the new Rails 8 defaults, 
including a brand new [Getting Started Tutorial](https://guides.rubyonrails.org/getting_started.html), 
a [9-part video series on YouTube](https://www.youtube.com/watch?v=Qw_Um-tMiYI&list=PLHFP2OPUpCebdA4-xR07SPpoBWVERkHR6), 
and updated Rails Guides. 

[Read the announcement here](https://rubyonrails.org/2024/12/13/learn-Rails-8-tutorial-and-unpacked-videos).
The [Installation Guide](https://edgeguides.rubyonrails.org/install_ruby_on_rails.html) has also been decoupled so it is easier to find, 
and includes the basics of installing Ruby with a version manager - arguably one of the biggest barriers to newcomers.

[Rails Versions 7.0.8.7, 7.1.5.1, 7.2.2.1, and 8.0.0.1 have been released!](https://rubyonrails.org/2024/12/10/Rails-Versions-8-0-0-1-7-2-2-1-7-1-5-1-7-0-8-7-have-been-released)   
These are security patches addressing one new issue where using the `content_security_policy` helper with untrusted user input could lead to a bypass of the browser Content Security Policy.

[Rails Version 8.0.1 has been released!](https://rubyonrails.org/2024/12/13/Rails-Version-8-0-1-has-been-released)  
A new minor release - 8.0.1, is also out! Head over the [CHANGELOG](https://github.com/rails/rails/releases/tag/v8.0.1), to check the full set of changes in this release.

[Doximity Case Study - Fast, Flexible, and Scalable](https://rubyonrails.org/docs/case-studies/doximity)  
We also have a new official case study in! Check out how Rails powers Doximity's Healthcare Platform.
Here are some Highlights from the study:

- Rails accelerates development: Doximity's team rapidly iterates on new products and features, helping doctors save time and focus on patient care.
- Rails ensures long-term stability: By maintaining and evolving their 15-year-old monolith, Doximity avoids rewrites.
- Rails scales with success: As Doximity grows, Rails helps optimize the performance of 45+ applications and handle increasing traffic with ease.

[Accept a block for `ActiveJob::ConfiguredJob#perform_later`](https://github.com/rails/rails/pull/53859)  
This pull request adds support for accepting a block for `ActiveJob::ConfiguredJob#perform_later`. 
This was previously inconsistent with a regular `ActiveJob::Base#perform_later`.

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
_We had [41 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20241207-20241213) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
