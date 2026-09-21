---
layout: post
title: "Happy Anniversary Rails!"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-07-24
---


Happy Friday, this is [Greg](https://greg.molnar.io), bringing you the latest news from the Rails world.

[A Rails anniversary!](https://x.com/rails/status/2080580838530355432)  
Today is the 22nd anniversary of the first public release of Ruby on Rails!

[Learn from real, open-source Rails apps](https://rubyonrails.org/docs/reference-apps)  
On the Rails website, now you can find a small, hand-picked library of
exemplary open-source apps worth reading to see how production-quality Rails is
built today.

[Update the JavaScript in Rails guide](https://github.com/rails/rails/pull/58165)  
The updated  JavaScript in Rails guide is ready for community review!

[Preserve sub-second precision when subtracting a _DateTime_ from a _Time_](https://github.com/rails/rails/pull/58213)  
This pull request makes sure that sub-second precision is preserved when subtracting a `DateTime` from a `Time`.
`Time - DateTime` converted both sides via `to_f`, so microsecond-level
`DateTime` values lost precision. The difference is now computed from exact
rational timestamps, matching `Time.at(DateTime)` and
`ActiveSupport::TimeWithZone - DateTime`.

[Deprecate _RedisCacheStore::DEFAULT_REDIS_OPTIONS_](https://github.com/rails/rails/pull/58191)  
The `redis-client` implementation no longer reads this constant. Pass timeout
options to `RedisCacheStore` or a configured `RedisClient` instead.

[Deprecate _Cookies::HTTP_HEADER_ constant](https://github.com/rails/rails/pull/58190)  
You should migrate to `Rack::SET_COOKIE` from `Cookies::HTTP_HEADER` because it will be removed from future versions of Rails.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-07-17%7D...main@%7B2026-07-24%7D)._  
_We had [22 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260717-20260724) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
