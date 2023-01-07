---
layout: post
title: "First edition of 2023! 🥂"
categories: news
author: zzak
published: true
date: 2023-01-08
---

Long time no see! 新年明けましておめでとうございます！[Zzak](https://github.com/zzak) here to bring you the first This Week in Rails of.. \*almost writes 2022\*. 🤣

**Spotlight**

I want to try something different, there has been one particular person that I feel deserves a Shout Out: [Akira Matsuda](https://github.com/amatsuda). He has contributed [40 commits](https://contributors.rubyonrails.org/contributors/akira-matsuda/commits/in-time-window/20221225-20230107) since the last episode..! His focus has been on incremental Rails performance optimizations. I've asked him to share how he's finding all of these bugs, and he's promised some significant gains in end-to-end benchmarks! 🙏 In return, he has asked me as the Chief Organizer of [RubyKaigi](https://rubykaigi.org) to remind you all that their [CFP](https://cfp.rubykaigi.org/events/2023) is open until the end of this month, so be sure to submit if you'd like to give a talk this year in Matsumoto, Japan!

[Use Karma as the test runner for UJS](https://github.com/rails/rails/pull/46206)

While this isn't really user-facing, it is a huge step toward us being able to fully support Rack 3 in Rails.

[Use Puma worker count equal to processor count in production](https://github.com/rails/rails/pull/46838)

This only affects newly generated Rails apps, but sets Puma's config to equal the total number of physical processors by default. You can always change this to fit your needs.

[Raise error on missing only unless for controller callbacks](https://github.com/rails/rails/pull/43487)

When you specify a filter for a callback in your controller, we can now raise an exception if that action doesn't exist. While this behavior will default to false, it will be enabled on newly generated Rails apps.

[Bump "required_rubygems_version" to 3.3.13 or higher](https://github.com/rails/rails/pull/46817)

This was necessary in order to support pre-release Ruby versions in the Gemfile template for newly generated Rails apps. However, due to it being such a huge jump please [let us know](https://github.com/rails/rails/issues/new) if you notice anything weird!

[Able to match exception messages to "assert_raises" assertions](https://github.com/rails/rails/pull/46611)

While this was initially requested upstream to minitest, it was rejected. Luckily we are able to provide this feature to Rails test assertions from Active Support. Although, I'm definitely an avid "assert_nothing_raised" user 🤣.

[Store correct environment in "internal_metadata" when running rails db:prepare](https://github.com/rails/rails/pull/46879)

This fixes a bug where we lost track of the environment between setting up the database for Rails. Thanks to [Junichi Ito](https://github.com/JunichiIto) for reporting [this bug](https://github.com/rails/rails/issues/46845)!

[Only use HostAuthorization middleware if config.hosts is used](https://github.com/rails/rails/pull/46858)

This PR removes the middleware stack from every request unless you've configured your app for a particular host.

[Use precompute optimization for Rails.env.local?](https://github.com/rails/rails/pull/46830)

Another small optimization this time for the recently added "Rails.env.local?" method. This ensures it will meet the same performance as the other predefined environment predicates, since they return a precomputed instance variable. Now you don't have to care about calling this method in production, as it's almost **40%** faster!

**There were [29](https://contributors.rubyonrails.org/contributors/in-time-window/20221230-20230107) contributors to Rails this week. You can browse all the changes [here](https://github.com/rails/rails/compare/@%7B2022-12-30%7D...main@%7B2023-01-07%7D).**

Until next time!

<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>