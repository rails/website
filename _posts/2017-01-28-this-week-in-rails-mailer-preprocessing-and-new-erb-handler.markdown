---
layout: post
title: "This Week in Rails: Mailer preprocessing and new ERB handler"
categories: news
author: kaspth
published: true
date: 2017-01-28
---

Steampunk! It's all the rage with the kids these days.  

Honestly, I was going to work this better into the lead but then I ran out of… ssssstea… 🤓  

Anyway friendo! Here's what [Kasper](https://twitter.com/kaspth) dug up from this week in Rails.

## Featured

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20170121-201701282000)

This week we got 33 committers: welcome or hello again! Either way, you all seem to be on the right track 😉

### [Action Mailer Preprocessing](https://github.com/rails/rails/pull/27825)

Incoming! Mailers can now use _params_ allowing for easier preprocessing with _before\_action_ akin to Action Controller. To enable call mailers like this: _InvitationMailer.with(invitee: person).account\_invitation.deliver\_later_  

See the pull request for a considerable A/B example.

### [Rails uses Erubi for ERB handling](https://github.com/rails/rails/pull/27757)

For many years Rails has used Erubis to handle ERB templates, but it's been deprecated in favor of [Erubi](https://github.com/jeremyevans/erubi). Being 1/6 shorter to type is far from the only thing Erubi has going for it, so dip into the pull request for the full list 😄

## One more thing

Steampunk! It's hip, it's wholesome and for the whole family.

## Wrapping up

That's it from This Week in Rails! There were many other great contributions, too numerous to list here, but feel free to [check them out!](https://github.com/rails/rails/compare/master@%7B2017-01-20%7D...@%7B2017-01-28%7D)  

See ya!
