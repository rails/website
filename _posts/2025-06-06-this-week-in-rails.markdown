---
layout: post
title: "Improving Rails 8 week after week"
categories: news
author: Claudio Baccigalupo
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-06-06
---


Hi, it's [Claudio Baccigalupo](https://github.com/claudiob). Let's explore this week's changes in the Rails codebase.


[Move PostgreSQL Guide into the API guides](https://github.com/rails/rails/pull/55135)  
A new documentation PR is up for community review: information from the PostgreSQL guide has been migrated into the API docs, and the Active Record guide has been updated to be more database agnostic.

[Follow up on Active Job Continuations](https://github.com/rails/rails/pull/55151)  
Continuations were [added last week](https://github.com/rails/rails/pull/55127) to Active Job and are improved this week by [these](https://github.com/rails/rails/pull/55151) [PRs](https://github.com/rails/rails/pull/55145).

[Better progress account for Action Text uploads](https://github.com/rails/rails/pull/55157)  
The progress bar displayed when upload a file with Action Text is now improved to account for server processing.

[Always fully clear current attributes](https://github.com/rails/rails/pull/55139)  
Regular instance variables in `Current` subclasses weren’t cleared and could leak across requests before this PR.

[Load tests prior to when Minitest load plugins](https://github.com/rails/rails/pull/55140)  
This fixes an [issue](https://github.com/rails/rails/pull/54741#issuecomment-2922863186) that affected libraries like [minitest-focus](https://github.com/minitest/minitest-focus)

[Don't run unit tests twice on GitHub](https://github.com/rails/rails/pull/55136)  
The GitHub Actions configuration is updated so unit test do not unnecessarily run within the system tests task.

[Return empty body for HEAD requests in exceptions](https://github.com/rails/rails/pull/55149)  
This is required by `Rack::Lint` (per RFC9110) in case of `PublicExceptions` or `DebugExceptions`, 

[Keep the original job object when using retry_job](https://github.com/rails/rails/pull/55141)  
When a job is retried, the original `scheduled_at`, `queue_name` and `priority` will be used.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-05-30%7D...main@%7B2025-06-06%7D)._
_We had [12 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250530-20250606) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
