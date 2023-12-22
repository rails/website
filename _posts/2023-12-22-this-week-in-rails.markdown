---
layout: post
title: "This Week in Rails: bug report template changes, new test helpers and more!"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2023-12-22
---

Hi, it's [Greg](https://greg.molnar.io). Let's explore this week's changes in the Rails codebase.

[Rails World 2024 updates](https://rubyonrails.org/world/)  
The venue, the sponsorship options, information about the CFP and the ticket costs were announced this week.

[Fix inclusion of `url_helpers` module in concern](https://github.com/rails/rails/pull/50403)  
The dynamically generated `url_helpers` module is an `ActiveSupport::Concern`.  Therefore, when it is included directly in another `ActiveSupport::Concern`, its `included` block is deferred until the latter concern is itself included elsewhere.  Thus, in that case, the call to `base._routes` in `def self.included(base)` will raise `NoMethodError` because the `included` block will not yet have defined the `_routes` method.

[Expose `assert_queries_match` and `assert_no_queries_match` assertions](https://github.com/rails/rails/pull/50373)  
Two more Active Record query related test assertions were made public. The new helpers can be used to test that the generated queries match or doesn't match a regular expression.

[Consolidate bug report templates and remove the gem versions](https://github.com/rails/rails/pull/50317)  
Before this change, two sets of bug report templates were kept in the Rails repository, but the only difference between them was the Rails version they were using.
Since changing that is a single line change, there will be a single template for them from now.

[Add _actionview_ bug report template](https://github.com/rails/rails/pull/49986)    
This pull request introduces Action View bug report templates for contributors to reproduce issues with failing `ActionView::TestCase` instances.

[Add webp and avif as allowed formats for active storage to serve inline](https://github.com/rails/rails/pull/50265)
`webp` and `avif` were added to the allowed content types for Active Storage to serve inline.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-12-15%7D...main@%7B2023-12-22%7D)._
_We had [14 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20231215-20231222) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
