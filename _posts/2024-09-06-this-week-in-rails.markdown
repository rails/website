---
layout: post
title: "Solid Cache and Queue as default backends and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-09-06
---

Hi, [Wojtek](https://x.com/morgoth85) here. Let's explore this week's changes in the Rails codebase.

[Add Solid Cache](https://github.com/rails/rails/pull/52790)  
Solid Cache will be the new default caching backend for production deployments out of the box in Rails 8.

[Add Solid Queue](https://github.com/rails/rails/pull/52804)  
Configure Solid Queue as the default Active Job backend alongside Solid Cache. Both can be skipped with `--skip-solid`.

[Allow registering test directories for code statistics](https://github.com/rails/rails/pull/52747)  
Make it easier for third party gems, to register test directories.

[Silence healthcheck requests from the log](https://github.com/rails/rails/pull/52789)  
Add `Rails::Rack::SilenceRequest` middleware and use it via `config.silence_healthcheck_path = path` to silence requests to "/up".
This prevents the Kamal-required healthchecks from clogging up the production logs.

[Fix authentication generator double signature](https://github.com/rails/rails/pull/52786)  
Previously the session id stored in the cookies was signed twice: with `cookies.signed` and `session.signed_id`.

[Update TimeWithZone inspect to match Ruby 1.9+ ISO 8601 format](https://github.com/rails/rails/pull/52371)  
This updates `TimeWithZone#inspect` to match the ISO 8601 style time which Ruby has used for `Time#inspect` since 1.9+. This makes TimeWithZone match Time's formatting except for the precision in the timestamp and including the zone's name.
This only impacts `#inspect` method, as `#to_s` had already been updated to use the new ISO 8601 style formatting.

[Update Rails Routing Guide](https://github.com/rails/rails/pull/52794)  
Reviewed version can be read on [Edge Guides](https://edgeguides.rubyonrails.org/routing.html).

[Update Active Record Associations Guide](https://github.com/rails/rails/pull/52523)  
Reviewed version can be read on [Edge Guides](https://edgeguides.rubyonrails.org/association_basics.html).

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-08-30%7D...main@%7B2024-09-06%7D)._
_We had [31 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240830-20240906) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
