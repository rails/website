---
layout: post
title: "🏄 This week in Rails 🏄: MariaDB, Action Cable, and more!"
categories: news
author: jonatack
published: true
date: 2016-04-16
---

Hello everyone!

[Jon](https://twitter.com/jonatack) here bringing you This Week in Rails from the sunny surf town of [Biarritz, France](https://twitter.com/hashtag/biarritz) 🇫🇷☀️

Ready to jump in and catch a few waves of updates?

Grab your surfboard and let's go!

## 🏄🏻 Featured 🏄

### [This Week's Rails Contributors 🏆](http://contributors.rubyonrails.org/contributors/in-time-window/20160409-201604015)

Please share some [aloha](https://en.wikipedia.org/wiki/Aloha) 🌸 for the [27 daring riders](http://contributors.rubyonrails.org/contributors/in-time-window/20160409-201604015) who contributed to Rails (and world happiness) this week, including 4 committers who caught their first wave 😍😎! You can, too! [Check out the current issues](https://github.com/rails/rails/issues) if you'd like to paddle out, make new friends and join the fun 💙

### [MariaDB support comes to Rails 5! 🎉](https://github.com/rails/rails/pull/24542)

Thanks to [Jeremy Daer](https://github.com/rails/rails/pull/24475), [Ryuta Kamizono](https://github.com/rails/rails/pull/24542), [Vipul A M](https://github.com/rails/rails/pull/24522) and [Ian Gilfillan](https://github.com/rails/rails/pull/24454), Active Record is now fully compatible with [MariaDB](https://mariadb.org) ❤️💛💚💜... click on our heroes' names to open the commits and see what went down behind the scenes!

[MariaDB](https://mariadb.org) is a community-developed open source fork of MySQL. Notable users include Wikipedia, Facebook, Google and, yes, Basecamp 3! [Here is a good Wikipedia article](https://en.wikipedia.org/wiki/MariaDB) about MariaDB and MySQL history. Game on!

## 🌊 Improved 🌊

### [Run Action Cable callbacks through the worker pool](https://github.com/rails/rails/pull/24540)

_Everybody out of the pool!_ 🏊 It was getting crowded in the water, but luckily our experienced Baywatch lifeguards Matthew, Sean and Jeremy 🏋 were on hand to, er, _pool_ their efforts to ensure your database connections are managed automatically when Action Cable is involved! Synchronized water ballet, anyone?

### [Fewer string allocations in number helpers](https://github.com/rails/rails/pull/24502)

_No Strings are better than NoSQL, right?_ Ankit noticed that the `number_to_delimited` and `number_to_rounded` helper methods were creating duplicate strings. Check out the pull request to see how he improved it using [derailed\_benchmarks](https://github.com/schneems/derailed_benchmarks) to check object allocations 🍰

### [Speed up and handle `max_time` edge cases](https://github.com/rails/rails/pull/24523)

_Rails has the need for speed_ 💨 and surfers Blake and Xavier managed a crowd-pleasing acceleration maneuver in `AS::FileUpdateChecker` using a single loop memoization rather than multiple loops, benchmarked using [benchmark-ips](https://github.com/evanphx/benchmark-ips). It's good stuff; see the PR for more! 🍦

### [Speed up `attribute_changed?` in ActiveModel::Dirty](https://github.com/rails/rails/pull/24511)

_Faster than relocating to San Francisco_ ✈️ (and much more fun), sun-drenched rider Lihan was able to speed up `attribute_changed?` by setting the default options parameter to nil instead of a hash, and checking the result with [benchmark-ips](https://github.com/evanphx/benchmark-ips) 😎

## 🌴 Fixed 🌴

### [Disallow #deliver\_later after local message modifications](https://github.com/rails/rails/pull/24457)

_Lifeguard Jeremy came across a common, hard-to-detect 🐞 in the water:_ Local message changes weren't being enqueued with the delivery job when using `#deliver_later`. This now raises a friendly exception to make sure your message modifications are made in either (a) the mailer method or (b) using a custom Active Job. Nice catch! 🌊

### [Revert Hash#transform\_keys to always return a Hash](https://github.com/rails/rails/pull/24517)

While surfing Mongoid's test suite, an error alerted our champion Emily 🏄🏾 to a change of behavior in `ActiveSupport#symbolize_keys`: Rails 4.1 returned a `Hash` but 4.2/5.0 returned `self.class`. This launched an [interesting discussion](https://github.com/rails/rails/pull/24517#issuecomment-208927120) on the merits of _expected behavior_ versus _matching Ruby's behavior_. Have a look! 🍎

## 🌞 Wrapping Up 🌞

That's all for This Week on the Beach with Rails™ 🌴. There were many more improvements (and great waves) than we have room to cover here, so don't hesitate to jump in and [check them out yourself](https://github.com/rails/rails/compare/master@%7B2016-04-09%7D...@%7B2016-04-15%7D)... the water's warm and the locals are friendly! 👣🐾

See you next week! 🍍🍌🍉🍇
