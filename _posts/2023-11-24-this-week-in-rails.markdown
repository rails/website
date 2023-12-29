---
layout: post
title: "ErrorReporter#unexpected, with_routing test helpers and more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2023-11-24
---


Happy Thanksgiving weekend everyone! This is [Vipul](https://www.saeloun.com/team/vipul) bringing you the latest from this week's changes in the Rails codebase.  

[ErrorReporter#unexpected to report in production but raise in development](https://github.com/rails/rails/pull/49951)  
This change adds `ErrorReported#unexpected` to report precondition violations.

For example:

```ruby
  def edit
    if published?
      Rails.error.unexpected("[BUG] Attempting to edit a published article, that shouldn't be possible")
        return false
    end
      # ...
  end
```

The above will raise an error in development and test, but only report the error in production.

[Make with_routing test helper work for integration tests](https://github.com/rails/rails/pull/49819)  
[`with_routing`](https://api.rubyonrails.org/classes/ActionDispatch/Assertions/RoutingAssertions.html#method-i-with_routing) test helper support has now been added to `ActionDispatch::IntegrationTest` to allow usage in integration tests.

[Support nested elements inside button tag in Active Storage uploads](https://github.com/rails/rails/pull/48290)  
This change addresses a potential issue that could arise when a button or an input of type submit contains child elements, such as spans, icons, or other HTML elements.

[Remove deprecations](https://github.com/rails/rails/pull/50144)  
This PR is an ongoing effort to remove all deprecated code, marked as deprecated for Rails 7.2. Checkout the PR for all things going away and if you are handling them already!

[Handle case in MySQL where the ActiveRecord.db_warnings_action is not called even when a DB query has warnings ](https://github.com/rails/rails/pull/50049)  
This change handles cases where MySQL returns `warning_count` greater than zero, but returns no warnings when the `SHOW WARNINGS` query is executed,
`ActiveRecord.db_warnings_action` proc will still be called with a generic warning message rather than silently ignoring the warning(s).

[Delay validation of registered Active Record adapters and allow aliasing of adapters ](https://github.com/rails/rails/pull/50093)  
This change is from an ongoing effort to allow aliasing of DB adapters by name. The end state here is to allow `mysql` to be mapped to either `trilogy` or `mysql2` at an application level.

[Fix `ActiveStorage::Representations::ProxyController` not returning the proper
preview image variant for previewable files.](https://github.com/rails/rails/pull/50098)  

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-11-18%7D...main@%7B2023-11-24%7D)._
_We had [20 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20231118-20231124) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
