---
layout: post
title: "Omakase RuboCop, Brakeman, Ruby 3.1+, allow_browser, rate_limit, and more"
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-01-05
---


Hi, [zzak](https://github.com/zzak) here with the first edition of This Week in Rails for 2024.  
This year started off with a ton of contributions, nearly 170 commits, sorry we couldn't fit everything in a single newsletter.  

[Rails UJS has been deprecated since Rails 7, time to die](https://github.com/rails/rails/pull/50535)  
While the official package `@rails/ujs` is still published on NPM, and the final compiled targets for the asset pipeline remain, all of the source files, tests, and internal packaging tasks were removed.
  

[Add default PWA manifest and service worker file](https://github.com/rails/rails/pull/50528)  
Freshly generated Rails apps now include a manifest and service worker file to become full-fledged Progressive Web Applications.
  

[Add rubocop-rails-omakase to new Rails applications](https://github.com/rails/rails/pull/50486)  
This setups a basic RuboCop config for new Rails apps using the [rubocop-rails-omakase](https://github.com/rails/rubocop-rails-omakase) gem.
  

[Add Brakeman by default to new apps](https://github.com/rails/rails/pull/50507)  
A newly generated Rails app also now includes [Brakeman](https://github.com/presidentbeef/brakeman) for enhanced security vulnerability checking.
  

[Default to creating GitHub CI files](https://github.com/rails/rails/pull/50508)  
With the addition of RuboCop and Brakeman to new applications, we've also added default GitHub CI workflow files.
  

[Add allow_browser to set minimum versions for your application](https://github.com/rails/rails/pull/50505)  
Now you can easily specify which browsers you've supported to allow access to your application.
  

[Bump the required Ruby version to 3.1.0](https://github.com/rails/rails/pull/50491)  
The team is trying to stay ahead of the curve, and with Ruby 3.0 being EOL in March, now seems like a good time to bump that requirement.
  

[Add rate limiting to Action Controller via the Kredis limiter type](https://github.com/rails/rails/pull/50490)  
Last, but certainly not least, we have a new API for rate limiting built into Action Controller which depends on the [Kredis limiter type](https://github.com/rails/kredis/blob/main/lib/kredis/types/limiter.rb).

```ruby
class SessionsController < ApplicationController
  rate_limit to: 10, within: 3.minutes, only: :create
end

class SignupsController < ApplicationController
  rate_limit to: 1000, within: 10.seconds,
    by: -> { request.domain }, with: -> { redirect_to busy_controller_url, alert: "Too many signups!" }, only: :new
end
```
  


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-12-29%7D...main@%7B2024-01-05%7D)._
_We had [40 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20231229-20240105) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
