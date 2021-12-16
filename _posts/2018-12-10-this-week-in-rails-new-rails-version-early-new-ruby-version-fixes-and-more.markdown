---
layout: post
title: "New Rails version, early new Ruby version fixes, and more!"
categories: news
author: imtayadeway
published: true
date: 2018-12-10
---

Hello, hello! This is [Tim](https://twitter.com/imtayadeway) here bringing you all the latest right from the Rails Edge.

In the northern hemisphere, daylight is getting scarce, driving [certain](https://twitter.com/imtayadeway/status/1070362790903218177) [folks](https://twitter.com/tenderlove/status/1070827980509786113) in the Pacific Northwest to drastic measures. But the holiday season is upon us! We got an early pressie in the form of a new Rails release this week. Ans we can all look forward to Ruby release day!

On with the show....

### [Rails 5.2.2 has been released!](https://rubyonrails.org/2018/12/4/Rails-5-2-2-has-been-released)

This week saw the release of a new patch version of Rails! Too numerous to list here, check out the official blog post for the full changelog.

### [This Week's Contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20181202-20181207)

This week 23 people gave back to Rails. For 7 of these folks it was their first time contributing! If you'd like to see yourself in a future edition of this newsletter, or alternatively just want to give back in a purely altruistic gesture, a great place to start can be checking out the list of [open issues](https://github.com/rails/rails/issues).

### [Ruby 2.6.0 fixes]()

As you may know, the release of Ruby 2.6.0 is right around the corner! We are very grateful to [the](https://github.com/rails/rails/pull/34601) [folks](https://github.com/rails/rails/pull/34612) who are already testing Rails on the release candidates and submitting patches ahead of time.

### [Non-primary mouse button clicks no longer trigger click events](https://github.com/rails/rails/pull/34573)

This PR addresses an issue where certain browsers will fire a click event for non-primary mouse button clicks where others will not. They will all now behave uniformly thanks to this fix!



### [Unpermitted params log message now colorized](https://github.com/rails/rails/pull/34617)

More colorized log messages for improved readability!



### [#delete_all on collection proxy returns count](https://github.com/rails/rails/pull/34609)

This makes `#delete_all` behave uniformly across relations and collection proxies by returning the count of affected rows.



### [Test helpers docs added to guides](https://github.com/rails/rails/pull/34563)

This PR documents some good practices for breaking test helpers out into separate files. Check it out!

### [ActiveJob::Base#enqueue to return false on failure](https://github.com/rails/rails/pull/33992)

This makes the enqueue mechanism more consistent with the `ActiveSupport::Callbacks` design where if the callback chain is halted, it will return `false`. You can now use this feedback to determine if your job was in fact enqueued. Hurrah!



As always, there were way too many things to cover in full this week, but you can read about them all [here](https://github.com/rails/rails/compare/master@%7B2018-12-02%7D...@%7B2018-12-07%7D). That's all folks!
