---
layout: post
title: "Rails World 2025 dates announced and more!"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-11-29
---


Hi, it's [Greg](https://greg.molnar.io). Let's explore this week's changes in the Rails codebase.

[Rails World 2025 -  Save the date](https://rubyonrails.org/2024/11/27/rails-world-2025-save-the-date)  
Rails World 2025 will take place September 4 and 5, 2025, again in Amsterdam.
The same venue, the same city, and good news - more tickets. The CFP is expected
to open in early spring 2025, and tickets to be released shortly thereafter.
Sponsorship sales opening soon (email: sponsors@rubyonrails.org).

[Raise a more specific error when the job class can't be instantiated](https://github.com/rails/rails/pull/53770)  
With this change, Rails will raise a more specific error during deserialization
when a previously serialized job class is now unknown.
`ActiveJob::UnknownJobClassError` will be raised instead of a more generic
`NameError` to make it easily possible for adapters to tell if the `NameError`
was raised during job execution or deserialization.

[Improve error highlighting of multi-line methods in ERB templates](https://github.com/rails/rails/pull/53763)  
This pull request improves the error highlighting of multi-line methods in ERB
templates.

[Don't enable YJIT in development and test environments](https://github.com/rails/rails/pull/53746)  
The development and test environment tend to reload code and redefine methods (e.g.
mocking), hence YJIT isn't generally faster in these environments. For this
reason, YJIT will be disabled by default from Rails 8.1 in these environments. 

[Change the _WEB_CONCURRENCY_ deploy comment default to `auto`](https://github.com/rails/rails/pull/53535)  
Puma introduced a new `WEB_CONCURRENCY=auto` setting. The config sets puma's
worker count to the count of available cpus. This pull request adds the new
option to the explaining comments of a new project's default puma.rb config
file.

[Don’t ask for database password when running `kamal dbc`](https://github.com/rails/rails/pull/53011)  
This pull request changes the `kamal dbc` to pass the `--include-password` flag
to reuse the database password from database.yml.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-11-22%7D...main@%7B2024-11-29%7D)._
_We had [25 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20241122-20241129) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
