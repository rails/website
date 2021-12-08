---
layout: post
title: "This week in Rails: new query methods, Action Cable enhancements and more!"
categories: news
author: imtayadeway
published: true
date: 2016-04-01
---

#### 

Hey everybody! [Tim](https://twitter.com/imtayadeway) here reporting from Portland, OR on another solid week for the Rails community. As a protest to April Fools' typical tomfoolery, this edition is coming to you 100% jape-free. No, really!

## Featured

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160326-20160401)

This week 29 lovely people contributed to Rails, including 5 for the first time! A big Friday Hug goes out to all of them! Feel free to check out the list of current [issues](https://github.com/rails/rails/issues) for ideas if you'd like to join them ❤️

## Improved

### [Active Record gets a few extra query methods](https://github.com/rails/rails/pull/24315)

Ever find yourself writing cumbersome things like `User.count.zero?`? You can now use the terser `User.none?`, as well as `User.one?` and `User.empty?`, as these three methods just got added.

### [The default worker pool size for Action Cable just got lowered considerably!](https://github.com/rails/rails/pull/24376)

The author of this revision put it best: "Whack it down from 100 to 4". This will decrease the number of db connections for most, who probably don't need so many.

### [Notifications can now hook into Action Cable](https://github.com/rails/rails/pull/23723)

Just as you can subscribe to Action Controller's `#process_action`, so you can now with `ActionCable::Channel::Base#perform_action` after this fine addition. Get notified!

## Fixed

### [Prepared statements to have a cache separate from unprepared statements](https://github.com/rails/rails/commit/3af40b71f34c70a274e261cd6e6468c613de648e)

This subtle bug was fixed this week, wherein a connection that was established with prepared statements enabled could fail if a query that had been previously run was run again with prepared statements disabled. This was because it was hitting the same cache as the prepared statements-enabled query. Prepared statements now have their own cache, which solves the problem. Hurrah!

### [rails runner now shows the correct command name when run with Spring](https://github.com/rails/rails/pull/24325)

Running `rails runner` with no arguments or with the `--help` flag shows you some information on how to use the runner as a shebang line. Unfortunately, if you were using Spring, it would get the path wrong because Spring changes a variable that relates to the command that was run (`bin/rails`). That just got fixed in this revision!

### [Using rails restart with Puma now works!](https://github.com/rails/rails/pull/24331)

Previously, when issuing `rails restart` with Puma running, it would fail to bring it up again since Puma was trying to inspect `ARGV` to decide how to go about it. The fix involved changing Puma to allow its configuration options to be overridden by Rails. Great job!

## Wrapping Up

That's all for This week in Rails. As always, there are plenty of things we're not able to cover here, so take a look at the [changes](https://github.com/rails/rails/compare/master@%7B2016-03-26%7D...@%7B2016-04-01%7D) yourself.

Until next time!

