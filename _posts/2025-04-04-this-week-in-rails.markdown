---
layout: post
title: "must-understand, with_default_isolation_level, Rails World CFP and more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-04-04
---

Hi, it's [Vipul](https://www.saeloun.com/team/vipul). Let's explore this week's changes in the Rails codebase.

[Last Week for Rails World 2025 Call for Papers](https://rubyonrails.org/2025/3/7/apply-to-speak-at-rails-world-2025)  
This is the last week for The CFP for Rails World 2025! 

[Submit your talk until April 10th.](https://sessionize.com/rails-world-2025/)

[Add must-understand directive according to RFC 9111](https://github.com/rails/rails/pull/54833)  
The `must-understand` directive indicates that a cache must understand the semantics of the response status code, or discard the response. This directive is enforced to be used only with `no-store` to ensure proper cache behavior.

```ruby
class ArticlesController < ApplicationController
  def show
    @article = Article.find(params[:id])
    if @article.special_format?
      must_understand
      render status: 203 # Non-Authoritative Information
    else
      fresh_when @article
    end
  end
end
```

[Use UNLINK for RedisCacheStore in ActiveSupport](https://github.com/rails/rails/pull/54861)  
The `RedisCacheStore` now uses Redis's `UNLINK` command instead of `DEL` for cache entry deletion, enabling asynchronous and non-blocking removal of keys, which enhances performance.

[Add `Cache#read_counter` and `Cache#write_counter`](https://github.com/rails/rails/pull/54855)  
This introduces 2 new methods on `Rails.cache`: `read_counter` and `write_counter`, to read values that are being incremented/decremented.

```ruby
Rails.cache.write_counter("foo", 1)
Rails.cache.read_counter("foo") # => 1
Rails.cache.increment("foo")
Rails.cache.read_counter("foo") # => 2
```

[Change redirect status code in SessionsController#destroy template from 302 to 303](https://github.com/rails/rails/pull/54849)  
The new Authentication generator introduced in Rails 8.0, creates a `SessionsController` that returns a 302 Redirect response in its destroy action.
With this change it will now issue a 303(See Other) status code instead of 302(Found) when redirecting after logout, to comply with the [9110 spec](https://www.rfc-editor.org/rfc/rfc9110#status.302)

[Include cookie name in length calculation](https://github.com/rails/rails/pull/54843)  
This change updates Rails to include the cookie name's length when validating that a cookie stays within the 4KB limit, 
aligning its behavior with browser standards.

[Introduce with_default_isolation_level in ActiveRecord](https://github.com/rails/rails/pull/54836)  
This change introduces the `with_default_isolation_level` method in ActiveRecord, allowing to set a default database isolation level for specific code blocks.
This is particularly useful when migrating large applications to a new isolation level, as it enables enforcing the desired level in targeted areas, such as base controllers, facilitating smoother transitions and ensuring consistent transaction behavior.

```ruby
class ApiV2Controller < ApplicationController
  around_action :set_isolation_level

  def set_isolation_level
    Product.with_default_isolation_level(:read_committed) do
      yield
    end
  end
end
# forces all controllers that subclass from ApiV2Controller to start getting new isolation level
```

[With postgres adapter, prepend `structure_load_flags` instead of appending them.](https://github.com/rails/rails/pull/54813)
When using postgres adapter and the `structure_load_flags` options, the extra flags were appended instead of prepended to the default ones, causing the `psql` command to ignore some of the extra flags.
Now, the default arguments `args` are appended to the `extra_flags` instead of the opposite.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-03-29%7D...main@%7B2025-04-04%7D)._  
_We had [15 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250329-20250404) to the Rails codebase this past week!_  

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
