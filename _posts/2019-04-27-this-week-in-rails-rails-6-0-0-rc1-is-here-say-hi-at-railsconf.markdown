---
layout: post
title: "Rails 6.0.0.rc1 is here, say hi at RailsConf!"
categories: news
author: kaspth
published: true
date: 2019-04-27
---

Hop aboard fellow traveler! Here's your friendly conductor [Kasper](https://twitter.com/kaspth) revving up to give you a brand spanking new issue for the price of zilch.  

We're just about to roll into RailsConf proper. Several of your trusty editors are going including me, [Eugene](https://twitter.com/eugeneius), [Tim](https://twitter.com/imtayadeway), and [Vipul](https://twitter.com/vipulnsward)! Many people who are [Rails committers and core](https://rubyonrails.org/community) will be there too. Feel free to say hi if you spot us — we don't byte a bit 😄

### [Rails 6.0.0.rc1 is out!](https://rubyonrails.org/2019/4/24/Rails-6-0-rc1-released)

Rails 6 is almost out the door. The first release candidate came out this week. This is the best time to get bug fixes in because we on the Rails core team will prioritize bugs found in rc1 and then ship an rc2 shortly. If no bugs are found after roughly 2-3 weeks, the real 6.0.0 is cut.

### [Model errors as objects](https://github.com/rails/rails/pull/32313)

Now that 6.0.0.rc1 is out [Rails 6.1 development](https://github.com/rails/rails/commit/9834be65655e8552d25633b7376ab0654a23875d) has started too. And the first feature has already landed! Active Model validations has long had errors that were plain hashes, but in 6.1 they'll be objects!

### [Check Zeitwerk compatibility](https://github.com/rails/rails/commit/afc17e5ea21759df5b9ef2ac9421b02154a09b9b)

Rails 6's new autoloader Zeitwerk got a new command to check if your app is compatible. Simply run _bin/rails zeitwerk:check_ and it'll print out potential problems.

### [Reuse retry logic for old jobs](https://github.com/rails/rails/pull/36057)

One of the benefits of GitHub being on the latest Rails was seen this week as they could test 6.0. GitHub found a potential regression in Active Job rectified it. The fix is Le Git!

### [10% faster Active Record attribute access](https://github.com/rails/rails/pull/36049)

Due to some nifty code rearrangement accessing attributes of an Active Record model became 10% faster albeit with a slight maintenance cost. An additional [20% speed boost](https://github.com/rails/rails/pull/36052) on _id_ was also squeezed in.

[34 people](https://contributors.rubyonrails.org/contributors/in-time-window/20190419-20190427) contributed to Rails in the last week. You can see the [full list of changes here](https://github.com/rails/rails/compare/master@%7B2019-04-19%7D...@%7B2019-04-27%7D).  

Until next time!
