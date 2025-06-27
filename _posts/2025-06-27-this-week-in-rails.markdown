---
layout: post
title: "BacktraceCleaner gets first_clean_frame and first_clean_location"
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-06-27
---


Hi, it's [zzak](https://github.com/zzak). Let's explore this week's changes in the Rails codebase.

[The Rails Foundation launched a new podcast: 'On Rails' with host Robby Russell.](https://onrails.buzzsprout.com)  
In each episode, Robby talks with Rails devs and explores the real-world decisions that go into building, maintaining, and scaling Ruby on Rails applications. Episode one is already up with guest Rosa Gutiérrez.
Listen at [onrails.buzzsprout.com](https://onrails.buzzsprout.com), or in your favorite podcast app.

[Improve CurrentAttribute and ExecutionContext state management in test cases](https://github.com/rails/rails/pull/55247)  
Previously these two global state would be entirely cleared out whenever calling into code that is wrapped by the Rails executor, typically Action Controller or Active Job helpers.
Now re-entering the executor will properly save and restore that state.

[Implement ActiveSupport::BacktraceCleaner#first_clean_frame](https://github.com/rails/rails/pull/55222)  
The new method `ActiveSupport::BacktraceCleaner#first_clean_frame` returns the first clean frame of the caller's backtrace, or `nil`.
Useful when you want to report the application-level frame where something happened as a string.

[Implement ActiveSupport::BacktraceCleaner#first_clean_location](https://github.com/rails/rails/pull/55230)  
The new method `ActiveSupport::BacktraceCleaner#first_clean_location` returns the first clean location of the caller's call stack, or `nil`.
Locations are `Thread::Backtrace::Location` objects. Useful when you want to report the application-level location where something happened as an object.

[Respect users configured IRB_NAME](https://github.com/rails/rails/pull/55217)  
Rails will now honor when the user has configured `IRB.conf[:IRB_NAME]`.
This PR makes it so the `IRB_NAME` is only set if it is not the default, similar to the way the `PROMPT_MODE` is set.

[Active Job Continuation isolated steps](https://github.com/rails/rails/pull/55212)  
Add an isolated option to steps. Defaults to false.
Isolated steps are always run in their own job execution.
This allows you to execute a long running step separately which is useful to ensure that progress is saved before it runs.

[Use ntuples to populate row_count instead of count for Postgres](https://github.com/rails/rails/pull/55200)  
Now row_count in the `sql.active_record` notification will use [PG::Result#ntuples](https://deveiate.org/code/pg/PG/Result.html#method-i-ntuples), a libpq function for getting the number of rows returned from a query, rather than `#count` which would iterate through the entire result set.

[Fix checking unpersisted record is included in strict HABTM association](https://github.com/rails/rails/pull/55196)  
Previously, trying to check whether a `new_record?` (`Post.new`) is `include?`d in a strict-loaded `has_and_belongs_to_many` association would raise a `StrictLoadingViolationError` even when the HABTM association is already loaded.

[FileUpdateChecker and EventedFileUpdateChecker ignore changes in Gem.path now](https://github.com/rails/rails/pull/54129)  
This should improve the performance of reloads in development on an app with many gems.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-06-12%7D...main@%7B2025-06-27%7D)._
_We had [24 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250612-20250627) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
