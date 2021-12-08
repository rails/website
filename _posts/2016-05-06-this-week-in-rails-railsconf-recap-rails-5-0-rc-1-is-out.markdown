---
layout: post
title: "This Week In Rails 💯: RailsConf recap & Rails 5.0 RC 1 is out!"
categories: news
author: chancancode
published: true
date: 2016-05-06
---

![RailsConf 2016](https://cloud.githubusercontent.com/assets/1685896/15099261/d298dbd4-151e-11e6-8b31-3e5d5261f511.jpg)

Live from RailsConf, happy 100th newsletter from [Godfrey](https://twitter.com/chancancode), [Claudio](http://claudiob.github.io), [Vipul](https://twitter.com/vipulnsward), [Roque](https://twitter.com/repinel) and [Prathamesh](https://twitter.com/_cha1tanya) (plus [Kasper](https://twitter.com/kaspth) and [Jon](https://twitter.com/jonatack) joining remotely).

The train from Kansas City is leaving the station soon. Just in time for a quick recap of what happened at RailsConf 2016 and this week in Rails.

## Featured

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160429-20160505)

This week 26 people contributed to Rails, including a first-time contributor. Thanks to your support, we are on our way to almost 5,000 [all-time contributors](http://contributors.rubyonrails.org)!

### [Rails 5.0 RC "RaceCar" 1 is here!](https://rubygems.org/gems/rails/versions/5.0.0.rc1)

Jeremy promised in his [keynote](https://youtu.be/fC-r51Dgwik?t=1677) that Rails 5 RC 1 will be released during the conference and it is [here now](https://rubygems.org/gems/rails/versions/5.0.0.rc1)!

Another key milestone towards the final Rails 5 release.

## 🚆 RailsConf 🚆

### [Keynote and lightning talks on YouTube](https://www.youtube.com/watch?v=s8oRJNokRaM)

In the next weeks, Confreaks will be posting individual videos for each session. Meanwhile, you can still catch the full-day videos for [Day 1](https://www.youtube.com/watch?v=fC-r51Dgwik), [Day 2](https://www.youtube.com/watch?v=Q-52L_KEBO8), and [Day 3](https://www.youtube.com/watch?v=s8oRJNokRaM).

If you attended the RailsConf, don't forget to let the organizers know your [feedback](https://www.surveymonkey.com/r/ZYTQZNG) before May 13th!

## New Stuff

### [Allow accessing all helpers at the controller level](https://github.com/rails/rails/pull/24866)

With this helper proxy, users can reuse helpers in the controller without having to include all the modules related to view context.

### [Add `ActiveModel::RangeError`](https://github.com/rails/rails/pull/24835)

When provided with large numbers, Active Model now fails with a new `ActiveModel::RangeError` that makes it easier to rescue from, and inherits from `RangeError` to maintain backward compatibility.

## Improved

### [Ensure compatibility between Rails Session and Rack Session](https://github.com/rails/rails/pull/24820)

Rails session is now compatible with other Rack frameworks like Sinatra that are mounted in Rails. They can also use session tooling of Rails without any issues now.

## Wrapping Up

Meeting you all at RailsConf was a lot of fun. And if you haven't seen us up on stage during the lightning talks, [here is the YouTube link](https://youtu.be/Q-52L_KEBO8?t=9h37m38s) of "Goodfry and his boy band".

That concludes our report for this week. There were plenty of other things going on, so feel free to jump in and [check them out yourself](https://github.com/rails/rails/compare/master@%7B2016-04-29%7D...@%7B2016-05-05%7D). Also look out for the announcement of all the videos from RailsConf on Confreaks!

See you next year at RailsConf 2017 in Phoenix AZ!

