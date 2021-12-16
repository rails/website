---
layout: post
title: 'Rails 6.0.0 rc1 released'
categories: releases
author: dhh
published: true
date: 2019-04-24 11:30:00 -08:00
---
Okay, so we didn’t quite make our [aspirational release schedule](https://rubyonrails.org/2018/12/20/timeline-for-the-release-of-Rails-6-0), but Rails 6 is now almost ready, so here’s the first release candidate! There isn’t anything remarkably new compared to the beta releases, but everything has been polished (in [about 1000 commits!](https://github.com/rails/rails/compare/v6.0.0.beta2...v6.0.0.rc1)), and we believe this candidate could become the final release, lest we find any egregious bugs.

This may well also be the best exercised release candidate in the history of Rails! The team at [Basecamp](https://basecamp.com), [Shopify](https://shopify.com), and [GitHub](https://github.com) are all running either rc1 or just-about in production. It’s been a real pleasure to see the Shopify and GitHub teams leap to the front of the line running the latest in production.

If it’s good enough for Basecamp, Shopify, and GitHub, it’s probably good enough for you too! (But please do test, file bugs, and help us certify that it actually is).

If you’re starting a new application today, you should definitely be starting it on 6.0.0.rc1. And if you’re running an existing application under active development, you should probably also upgrade. Doing so will help us flush out the last issues before the final release.

You can read all about what’s new in Rails 6.0.0 in the [first beta announcement](https://rubyonrails.org/2019/1/18/Rails-6-0-Action-Mailbox-Action-Text-Multiple-DBs-Parallel-Testing). From Action Mailbox to Action Text, multiple database support, parallel testing, and Webpacker handling JavaScript by default. This is a massive step forward for Rails.

Also, kudos to Sam Ruby, David Bryant Copeland, and the crew at The Pragmatic Programmers for having a [beta of Agile Web Development with Rails 6](https://pragprog.com/book/rails6/agile-web-development-with-rails-6) ready to coincide with rc1.

Finally, we can’t wait to see everyone at a sold-out [RailsConf in Minneapolis](https://railsconf.com) next week. It’s never been a better time to be programming with Rails.

This release, and all releases leading up to Rails 6.0 final, was shepherded by release manager Rafael França with support by Kasper Timm Hansen.
