---
layout: post
title: "This Week in Rails: March 27, 2026"
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-03-27
---


Hi, it's [zzak](https://github.com/zzak). Let's explore this week's changes in the Rails codebase.

[New Rails releases this week](https://rubyonrails.org/2026/3/23/Rails-Versions-7-2-3-1-8-0-4-1-and-8-1-2-1-have-been-released)  
Rails 7.2.3.1, 8.0.4.1, and 8.1.2.1 shipped as security releases, followed by [8.0.5 and 8.1.3](https://rubyonrails.org/2026/3/24/Rails-Versions-8-0-5-and-8-1-3-have-been-released) bugfix releases the next day.

[Combine per-validator and top-level :if/:unless/:on in validates](https://github.com/rails/rails/pull/57050)  
`validates` now combines top-level and per-validator `:if`, `:unless`, and `:on` options instead of letting the inner options silently win.

```ruby
validates :title, presence: { if: :local? }, if: :global?
# both conditions are now applied
```

[Fix titleize to capitalize unicode lowercase letters](https://github.com/rails/rails/pull/57071)  
`titleize` now capitalizes Unicode lowercase letters as well as ASCII, so `titleize("über ñoño")` becomes `Über Ñoño`.

[Classify mysql error 1046 (ER_NO_DB_ERROR) as ConnectionFailed](https://github.com/rails/rails/pull/57067)  
MySQL's `ER_NO_DB_ERROR` (`No database selected`) is now treated as `ActiveRecord::ConnectionFailed`, so Rails can retry it like other reconnect-related failures.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-03-20%7D...main@%7B2026-03-27%7D)._  
_We had [18 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260320-20260327) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
