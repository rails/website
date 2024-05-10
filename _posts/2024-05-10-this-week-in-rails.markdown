---
layout: post
title: "Rails community survey, improved association validation errors and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-05-10
---


Hi, [Wojtek](https://twitter.com/morgoth85) here. Let's explore this week's changes in the Rails.

[The bi-annual Rails community survey is live!](https://railsdeveloper.com/survey/)  
Your input is invaluable and will help the team at Planet Argon gather insight on the current state of the Rails community. [Fill in the survey here](https://railsdeveloper.com/survey/). (And feel free to share with your teams).
The survey will remain open until August 2nd, 2024, and the findings released shortly thereafter.

[A New Era for Ruby Central Events](https://rubycentral.org/news/anewearforrubycentralevents/)  
Ruby Central announced that 2025 will be the last year of *RailsConf* and they are inviting the community to vote on where the last edition should be held. [Read the full announcement here](https://rubycentral.org/news/anewearforrubycentralevents/), and cast your vote.

[Fix index_errors and provide :nested_attributes_order mode](https://github.com/rails/rails/pull/48727)  
This indexes the association validation errors based on the order received by nested attributes setter, and respects the *reject_if* configuration.
This enables API to provide enough information to the frontend to map the validation errors back to their respective form fields.

[Add flag to speed up multi-process test runs](https://github.com/rails/rails/pull/51686)  
Add *ENV["SKIP_TEST_DATABASE_TRUNCATE"]* flag to speed up multi-process test runs on large databases, when all tests run within default transaction.
This cuts ~10 seconds from the test run of HEY when run by 24 processes against the 178 tables, since ~4,000 table truncates can then be skipped.

[Replace allocations count by GC time in request logs](https://github.com/rails/rails/pull/51770)  
Allocations count is often an interesting proxy for performance, but not necessarily the most relevant thing to include in request logs, given they aren't a per thread metric, so the reporting is widely inaccurate in multi-threaded environments.

Since Ruby 3.1 there is now *GC.total_time* which is a monotonically increasing counter of time spent in GC. It still isn't really a per thread metric, but it is more interesting because it uses the same unit as the response time, allowing to better see when you have a GC pause performance issue.

[Explain that the default Dockerfile is intended for production](https://github.com/rails/rails/pull/51751)  
If people want to use Docker in development, they'd need a radically different setup, and are likely much better served by dev containers.

[Don't mess with Minitest unless RAILS_ENV is set](https://github.com/rails/rails/pull/51718)  
Minitest will automatically scan all installed gems and load plugins from those gems.  We should detect whether or not we're being run within the context of a Rails app and only change MT behavior in that case.

[Warn about changing "query_constraints" behavior](https://github.com/rails/rails/pull/51571)  
Add a deprecation warning for the *query_constraints:* association option. This option will change behavior in the future versions of Rails and applications are encouraged to switch to *foreign_key:* to preserve the current behavior.

[Consistently use desired test adapter in Active Job](https://github.com/rails/rails/pull/48585)  
All tests now respect the *active_job.queue_adapter* config, which previously was not always the case.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-05-03%7D...main@%7B2024-05-10%7D)._
_We had [20 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240503-20240510) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
