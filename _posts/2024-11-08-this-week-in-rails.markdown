---
layout: post
title: "Rails 8.0 and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-11-08
---


Hi, [Wojtek](https://x.com/morgoth85) here. Let's explore this week's Rails news.

[Rails 8 has been released](https://rubyonrails.org/2024/11/7/rails-8-no-paas-required)  
Along with the announcement, you can read the [release changelog](https://github.com/rails/rails/releases/tag/v8.0.0).

[Action Controller guide improvements review](https://github.com/rails/rails/pull/53551)  
Along with the improvements, there will be the new guide "Action Controller Advanced Topics".
It's awaiting community feedback.

[Support disabling transactional tests per database](https://github.com/rails/rails/pull/53139)  
A test class can now override the default `use_transactional_tests` setting
for individual databases, which can be useful if some databases need their
current state to be accessible to an external process while tests are running.

```ruby
class MostlyTransactionalTest < ActiveSupport::TestCase
  self.use_transactional_tests = true
  skip_transactional_tests_for_database :shared
end
```

[Fix running with BACKTRACE=1 truncating gem paths](https://github.com/rails/rails/pull/53520)  
Restores gem paths back to their original, full form, which makes it easier to debug.

[Fix deprecation warning caused by DST](https://github.com/rails/rails/pull/53546)  
Clarifies the logic for detecting whether the current Time value is in the system local timezone (i.e. that getlocal would be a no-op).

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-11-01%7D...main@%7B2024-11-08%7D)._
_We had [22 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20241101-20241108) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
