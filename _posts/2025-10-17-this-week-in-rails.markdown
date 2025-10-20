---
layout: post
title: "Bound SQL literals in CTEs, new tutorial and more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-10-17
---

Hi, it's [Vipul!](https://www.saeloun.com/team/vipul/). Let's explore this week's changes in the Rails codebase.

[Rails 8.1.0.rc1 was released!](https://github.com/rails/rails/releases/tag/v8.1.0.rc1)
Rails 8.1.0 is right around the corner! Try out the latest release candidate and
report any bugs you find!

[The newest add-on tutorial is now live on the Rails tutorials page!](https://edgeguides.rubyonrails.org/wishlists.html)  
In this guide, you learn how to add Wishlist functionality to the e-commerce demo app you already started.
Find this tutorial and more on the Rails tutorials page: [https://rubyonrails.org/docs/tutorials](https://rubyonrails.org/docs/tutorials)

[Add support for bound SQL literals in CTEs](https://github.com/rails/rails/pull/55918)  
When creating a SQL literal with bind value parameters, `Arel.sql` returns an
instance of `Arel::Nodes::BoundSqlLiteral`, which is not currently supported by
`#build_with_expression_from_value`.
This PR updates the method to accept both `Arel::Nodes::SqlLiteral` and `Arel::Nodes::BoundSqlLiteral`.

[Add advisory DB update by default in bin/bundler-audit](https://github.com/rails/rails/pull/55913)  
This PR updates the `bin/bundler-audit` script to include the `--update` option.

[Show help hint when starting `bin/rails console`](https://github.com/rails/rails/pull/55910)  
The `help` command in the Rails console shows which Rails specific commands are available and what they do.

Similar to `bin/rails dbconsole` (where database clients show a help hint), show a hint on how to use help when opening `bin/rails console`.

```
$ bin/rails console
Loading development environment (Rails 8.1.0.beta1)
Type 'help' for help.
example(dev):001>
```

[Add prefix option to has_secure_token for improved token identification](https://github.com/rails/rails/pull/55822)  
Adds an optional `:prefix` parameter to `has_secure_token` that prepends a
string to generated tokens, making token types immediately identifiable in logs,
debugging sessions, and error messages

```
# Before:
  user.auth_token # => "pX27zsMN2ViQKta1bGfLmVJE"
  user.reset_token # => "tU9bLuZseefXQ4yQxQo8wjtB"

# After:
  has_secure_token :auth_token, prefix: "auth_"
  has_secure_token :reset_token, prefix: true

  user.auth_token # => "auth_pX27zsMN2ViQKta1bGfLmVJE"
  user.reset_token # => "reset_token_tU9bLuZseefXQ4yQxQo8wjtB"
```

[Add environment config file existence check](https://github.com/rails/rails/pull/55813)  
This Pull Request adds a behaviour to `Rails::Application` which will raise an error if unable to load any environment file.

[Add dark mode to http error pages](https://github.com/rails/rails/pull/55671)  
We now have a dark mode on error pages! 

<img alt="Error pages dark mode" src="https://github.com/user-attachments/assets/2dcc36e7-fef9-4019-86ed-47c0e7068852" />

[Add error type support to _ActiveModel::Errors#messages_for_ and _ActiveModel::Errors#full_messages_for_ methods](https://github.com/rails/rails/pull/53096)  
Added `type` argument support to `messages_for` and `full_messages_for` methods of `ActiveModel::Errors`

[Add support for _expires_in:_ when using _render_ with _collection:_](https://github.com/rails/rails/pull/51579)  
Pass `expires_in` to `write_multi` so the cache key is written with the expiration.

[Suggest _bin/rails action_text:install_ from error page](https://github.com/rails/rails/pull/50557)  
Mirror Active Storage's encouragement to execute the `active_storage:install`
task from Action Dispatch error pages by adding similar instructions for the
`rails action_text:install` task when the error is related to missing Action
Text tables.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-10-10%7D...main@%7B2025-10-17%7D)._  
_We had [34 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20251010-20251017) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
