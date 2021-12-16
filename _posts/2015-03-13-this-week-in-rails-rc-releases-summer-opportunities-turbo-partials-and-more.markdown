---
layout: post
title: "This week in Rails: RC releases, summer opportunities, turbo partials and more!"
categories: news
author: huoxito
published: true
date: 2015-03-13 18:38:05 -0700
---

Hi all! o/

Here is [Washington](https://twitter.com/huoxito) bringing you this week's news from our favorite framework. I hope you have made it to Friday the 13th without any major hiccups (I can't say the same about my internet provider). Either way, it's time to grab a drink, wind down and read on!

## Featured

### [4.2.1.rc4 and 4.1.10.rc4 have been released](https://rubyonrails.org/2015/3/12/Rails-4-2-1-rc4-and-4-1-10-rc4-have-been-released)

Give them a try on your projects to help make the next release as rock solid as possible. Many regressions have already been fixed and the final release should be out on March 17.

### [This week's Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/this-week)

Couple more developers made their first commit into Rails this week. Take a moment to review the [open issues](https://github.com/rails/rails/issues), perhaps you will find something related to your day job, manage to fix it and have your first patch in Rails!

## Summer Opportunities

### [Google Summer of Code 2015](https://rubyonrails.org/2015/3/4/google-summer-of-code-2015)

It's that time of the year again! As reported last week, we have been selected to participate in this year's [Google Summer of Code program](https://developers.google.com/open-source/soc). This week, a few more exciting ideas have landed on our [project page](https://github.com/railsgsoc/ideas/wiki/2015-Ideas)!

[Applications](https://www.google-melange.com/gsoc/homepage/google/gsoc2015) will open next week, so please help spread the word!

### [Rails Girls Summer of Code](http://railsgirlssummerofcode.org/blog/2015-applications-open)

Speaking of summer, [Rails Girls Summer of Code](http://railsgirlssummerofcode.org) have just opened their applications today. If your company can afford it, consider [becoming a sponsor](http://railsgirlssummerofcode.org/sponsors)!

## New Stuff

### [Turbolinks partial replacement](https://github.com/rails/turbolinks/pull/468)

Mostly inspired by [shopify/turbograft](https://github.com/Shopify/turbograft) turbolinks now also supports partial replacement. Checkout the [PR with docs](https://github.com/rails/turbolinks/pull/475) as well for usage details.

## Improved

### [All Rails tests run in random order](https://github.com/rails/rails/pull/19221)

As of this week Rails is giving another try on running tests in random order!!! You should probably try the same on all your projects for more reliable test results.

## Fixed

### [Rails 5 will need Ruby 2.2.1 or higher](https://github.com/rails/rails/commit/8ed0b89b)

Apparently Ruby 2.2.0 kwargs were still not that stable. A [related issue](https://bugs.ruby-lang.org/issues/10685) caused a segfault error on ActionPack tests. So Rails 5 will require at least Ruby 2.2.1.

### [Fix rollback of frozen records](https://github.com/rails/rails/pull/18200)

In case your project upgrade to Rails 4.2.0 raised any [Can't modify frozen hash](https://github.com/rails/rails/issues/18191) errors, checkout the latest release candidate. Chances are it will be fixed in Rails 4.2.1.

## Wrapping up

That's all for _This week in Rails_. As always, there are more changes than we have room to cover here, but feel free to [check them out](https://github.com/rails/rails/commits/master) yourself!

P.S. If you enjoyed this newsletter, why not [share it with your friends](https://rails-weekly.ongoodbits.com)? :) If you wish to be part of this project please don't hesitate to contact [Godfrey](mailto:godfrey@brewhouse.io) – there're a lot of ways you could help make this newsletter more awesome!

