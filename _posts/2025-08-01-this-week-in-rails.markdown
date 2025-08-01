---
layout: post
title: "relative_time_in_words, current transaction's isolation level and more!"
categories: news
author: gregmolnar
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-08-01
---


Hi, it's [gregmolnar](https://github.com/gregmolnar). Let's explore this week's changes in the Rails codebase.

[New written & video tutorials for beginners](https://rubyonrails.org/2025/7/31/new-beginner-resources)  
The Rails Foundation has launched a few more learning resources for beginners, in partnership with Chris Oliver and the team behind Typecraft - Chris Power and Robert Beene.

[Log when `rescue_from` handles an exception](https://github.com/rails/rails/pull/55424)  
This pull request adds a log message indicating when an exception was raised in
`before_action` callbacks.

[Allow hosts redirects from `hosts` Rails configuration](https://github.com/rails/rails/pull/55420)  
With this change, it is possible to allow hosts redirects from the Rails configuration:
```ruby
    config.action_controller.allowed_redirect_hosts << "example.com"
```

[rate_limit notification instrumentation to include more payload](https://github.com/rails/rails/pull/55418)  
To make it easier to move from rack-attack to the built-in rate limiter,  the `rate_limit.action_controller` notification now has the following additional payload values: count, to, within, by, name, cache_key.

[Provide a method to check current transaction's isolation level](https://github.com/rails/rails/pull/55407)  
This pull request adds `connection.current_transaction.isolation` API to check current transaction's isolation level.
It returns the isolation level if it was explicitly set via the `isolation:` parameter
or through `ActiveRecord.with_transaction_isolation_level`, otherwise returns `nil`.
Nested transactions return the parent transaction's isolation level.

[Add `relative_time_in_words` helper to ActionView](https://github.com/rails/rails/pull/55405)  
This pull request introduces a `relative_time_in_words` helper:

```ruby
relative_time_in_words(3.minutes.from_now) # => "in 3 minutes"
relative_time_in_words(3.minutes.ago) # => "3 minutes ago"
relative_time_in_words(10.seconds.ago, include_seconds: true) # => "less than 10 seconds ago"
```

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-07-25%7D...main@%7B2025-08-01%7D)._
_We had [22 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250725-20250801) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
