---
layout: post
title: 'Rails 6.0.0 beta2 released'
categories: releases
author: dhh
published: true
date: 2019-02-25 15:00:00 -08:00
---
We're marching one step closer to the final release of Rails 6 with this second beta. We've fixed a bunch of issues and added a few minor features, but the big change is switching to Xavier's new Zeitwerk library for handling autoloading. It's a big, structural change to how we require dependencies at runtime, and it should remove a bunch of the legacy warts, and the weird gotchas. Xavier wrote up [a long piece](https://rubyonrails.org/2019/2/22/zeitwerk-integration-in-rails-6-beta-2) on it you should check out.

Otherwise things are much the same as they were with the first beta. I encourage you to read the [release notes](https://rubyonrails.org/2019/1/18/Rails-6-0-Action-Mailbox-Action-Text-Multiple-DBs-Parallel-Testing) for that to understand the big picture of 6.0.

You can peruse all [the 532 commits](https://github.com/rails/rails/compare/v6.0.0.beta1...v6.0.0.beta2) we've made since the first beta.

We are still kinda on track with [our published timeline for the final Rails 6.0 release](https://rubyonrails.org/2018/12/20/timeline-for-the-release-of-Rails-6-0), so consult that plan for your migration planning, but please do help us already by testing your application on beta2! I'd also encourage anyone with a moderate level of Rails experience to start any new app using beta2, rather than the Rails 5.2.x series. Basecamp and Shopify are both already running Rails 6.0.0.beta2 in production. This isn't some rickety-shack release.

This release, and all releases leading up to Rails 6.0 final, was shepherded by release manager Rafael França with support by Kasper Timm Hansen.  

Thanks again to everyone who keeps working on making Rails better!