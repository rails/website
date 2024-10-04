---
layout: post
title: "Make Float distinguish between float4 and float8 in PostgreSQL and
more"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-10-04
---

Hi, it's [Greg](https://greg.molnar.io), bringing to you the latest changes from Rails, while recovering from an amazing Rails World experience.

[Make _ActionController::AllowBrowser::BrowserBlocker_ private](https://github.com/rails/rails/pull/53131)  
To reduce the API surface area of the `allow_browser` feature, this commit marks the class as private API.

[Change _ActiveSupport::HashWithIndifferentAccess#stringify_keys_ to stringify all keys not just symbols](https://github.com/rails/rails/pull/53125)  
This pull request changes `ActiveSupport::HashWithIndifferentAccess#stringify_keys`to stringify all keys, not just symbols.  
Before the change:

```ruby
{ 1 => 2 }.with_indifferent_access.stringify_keys[1] # => 2
```

After this change:

```ruby
{ 1 => 2 }.with_indifferent_access.stringify_keys["1"] # => 2
```

[Make Float distinguish between _float4_ and _float8_ in PostgreSQL](https://github.com/rails/rails/pull/53107)  
This pull request fixes the issue when dumping a PostgreSQL schema that includes a _float4_ column (defined as _float(24)_), the column is represented as _float_ in the generated schema dump. However, when loading this schema, the _float4_ column is converted to float8.

[Allow _ActiveRecord::QueryMethods#pluck_ to accept hash args with symbol & string values](https://github.com/rails/rails/pull/51676)  
The `pluck` was recently changed to accept hash values as an argument, and this
pull request enables to use symbol and string hash values when using the method.

[Raise an error when invalid _:on_ or _:except_ options are given to _#resource_ or _#resources_](https://github.com/rails/rails/pull/51464)  
This pull requests changes these routing helpers to raise an error when a
non-existing option is passed to `on` or `except`.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-09-27%7D...main@%7B2024-10-04%7D)._
_We had [37 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240927-20241004) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
