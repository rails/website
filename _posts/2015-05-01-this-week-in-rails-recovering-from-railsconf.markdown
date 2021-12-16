---
layout: post
title: "This week in Rails: recovering from RailsConf"
categories: news
author: claudiob
published: true
date: 2015-05-01 18:27:52 -0700
---

Happy Friday! It’s [Claudio](https://claudiob.github.io) with the latest updates on Rails. Overall, this has been a relaxed week. Many documentation fixes have made their way into `master` while features uncovered at RailsConf (like the [integration of Rails API](https://github.com/rails/rails/pull/19832)) are being heavily discussed on GitHub.

## Featured

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20150425-20150501)

This week 31 people helped Rails out. Six people had their first commit merged into rails/rails. Hooray!

### [RailsConf 2015 videos](http://confreaks.tv/events/railsconf2015)

One by one, all the presentations of RailsConf are being uploaded. Lots of great talks to fill your weekend!

### [GSoC students announced!](https://rubyonrails.org/2015/5/2/welcome-to-gsoc-15)

We are proud to announce that 8 students will be working on improving Rails as part of the Google Summer of Code 2015. Congratulations and welcome to Rails!

## Improved

### [Better docs for minitest assertions](https://github.com/rails/rails/commit/a66a64aa2a82b755f754bd42b8a4a4697ac89f83)

Rails ships with minitest by default but has different naming conventions for inverse assertion methods. The new guides clarify this difference. And give us a great excuse to link to [Ruby on Rails on Minitest](https://www.youtube.com/watch?v=MA4jJNUG_dI).

### [Toward a better "Caching with Rails" guide](https://github.com/rails/rails/commit/ae5c5b2237ee4c1aae98a048c09b6a98bd352475)

Everyone can help make Rails better by improving its guides. ["Caching with Rails"](http://guides.rubyonrails.org/caching_with_rails.html) is an awesome place to start. If you think you can improve it, don’t hesitate to submit a pull request!

### [Remove use of mocha in the named-base tests](https://github.com/rails/rails/commit/3ca5ae57b517b7a5a8d07dff83703dcd1f199870)

Some tests in the Rails codebase use the `mocha` library and can be faster by using `minitest/mock` instead. This commit fixes one of those tests; you are all invited to do the same for [the remaining ones](https://github.com/rails/rails/search?utf8=%E2%9C%93&q=%22stop+using+mocha%22&type=Code).

## Fixed

### [Rake routes not showing right format when nested](https://github.com/rails/rails/issues/18373)

The `rake routes` command was not properly showing nested routes with a scope constraint for the format override by a resource… but that just got fixed!

## That's a wrap

That's all for This week in Rails. As always, there are more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails)!

P.S. If you enjoyed this newsletter, why not share it with your friends? :) If you wish to be part of this project please don't hesitate to [contact Godfrey](mailto:godfrey@brewhouse.io) – there're a lot of ways you could help make this newsletter more awesome!

