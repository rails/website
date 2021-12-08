---
layout: post
title: "RailsConf 2018 Edition"
categories: news
author: claudiob
published: true
date: 2018-04-22
---

Hello 🌨 from Pittsburgh! RailsConf was amazing: more than a thousand attendees showing that Rails is more alive and welcoming than ever.

All the presentations will be available on YouTube in about a month. For now, you can take a sneak peek by browsing the slide decks: from [Rails 6](https://speakerdeck.com/eileencodes/railsconf-2018-the-future-of-rails-6-scalable-by-default) to [Active Storage](https://speakerdeck.com/claudiob/active-storage), from [Migrations](https://speakerdeck.com/derekprior/up-and-down-again-a-migrations-tale) to [Testing](https://speakerdeck.com/tmikeschu/stop-testing-start-storytelling-railsconf-2018), from [Upgrades](https://speakerdeck.com/jnraine/ten-years-of-rails-upgrades) to [API](https://speakerdeck.com/saarons/api-how-lendinghome-approaches-legacy-technologies), from [Router](https://speakerdeck.com/vaidehijoshi/re-graphing-the-mental-model-of-the-rails-router-1) to [Contributing](https://speakerdeck.com/dinahshi/your-first-contribution-and-beyond), from [GraphQL](https://speakerdeck.com/qrush/the-graphql-way-a-new-path-for-json-apis) to [Performance](https://speakerdeck.com/a_matsuda/turbo-boosting-real-world-applications), from [Collaboration](https://speakerdeck.com/justinweiss/building-a-collaborative-text-editor) to [Communication](https://speakerdeck.com/lauramosher/harry-the-hedgehog-learns-you-a-communication), from [Kafka](https://speakerdeck.com/stellacotton/so-youve-got-yourself-a-kafka-event-powered-rails-services) to [PostgreSQL](https://speakerdeck.com/genslein/postgres-10-performance-and-you), from [Warden](https://speakerdeck.com/tegon/warden-the-building-block-behind-devise) to [Authorization](https://speakerdeck.com/palkan/railsconf-2018-access-denied-the-missing-guide-to-authorization-in-rails), from [Economy](https://speakerdeck.com/michaelherold/whats-in-a-price-how-to-price-your-products-and-services) to [Art](https://speakerdeck.com/wonderwoman13/draw-a-crowd-the-contextual-camouflage-story), from [Bugs](https://speakerdeck.com/rofreg/the-doctor-is-in-using-checkups-to-find-bugs-in-production) to [Security](https://speakerdeck.com/presidentbeef/the-evolution-of-rails-security), from [Containers](https://speakerdeck.com/dazuma/containerizing-rails-techniques-pitfalls-and-best-practices) to [Crypto](https://speakerdeck.com/xdite/blitzbuilding-product-with-rails), from [Interviews](https://speakerdeck.com/toomuchpete/the-code-free-developer-interview) to [History](https://speakerdeck.com/geoffreylitt/ruby-a-family-history-railsconf-2018), from [Teams](https://speakerdeck.com/sinthetix/leveling-up-a-heroic-team) to [Trust](https://speakerdeck.com/awood45/broken-apis-break-trust-tips-for-creating-and-updating-apis), from [Shopify](https://speakerdeck.com/edouardchin/upgrading-rails-at-scale-railsconf-2018) to [GitHub](https://speakerdeck.com/talsafran/github-and-rails-10-years-together), from [Engines](https://speakerdeck.com/lazyatom/heres-to-the-crazy-ones) to [Crowdsourcing](https://speakerdeck.com/andrewglass1/human-powered-rails-automated-crowdsourcing-in-your-rails-app), from [Mortality](https://speakerdeck.com/olivierlacan/the-life-and-death-of-a-rails-app) to [Life](https://speakerdeck.com/erniemiller/stating-the-obvious), there was really something for everyone!

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20180414-20180420)

37 people contributed to Rails in the last week, including 9 for the first time! A big thank you to all of you!

If you'd like to see yourself on that board, why not check out the list of [open issues](https://github.com/rails/rails/issues), or get involved in the [core discussion list](https://groups.google.com/d/forum/rubyonrails-core).

### [Inclusive Language in Documentation Examples](https://github.com/rails/rails/pull/32582)

A couple of changes to make the docs more inclusive of trans and non-binary individuals. Hurray! 💗🌈🏳️‍🌈



### [Add the `nonce: true` option for `javascript_include_tag` helper](https://github.com/rails/rails/pull/32607)

Works the same way as _javascript\_tag nonce: true_&nbsp;to support automatic nonce generation for Content Security Policy.

### [Improve performance of translation helper](https://github.com/rails/rails/pull/32326)

A PR that is worth reading to learn how to benchmark a possible performance improvement using the right tools.

### [Don't pass splat keyword arguments as a single Hash](https://github.com/rails/rails/pull/32612)

Looking ahead at Ruby 2.6, which will raise a warning when a method is called with _(\*args)_. Declaring the arguments makes for more readable code.

### [Fix exception in AS::Timezone.all when any tzinfo data is missing](https://github.com/rails/rails/pull/32613)

Time zones change every year, even [multiple times a year](https://www.iana.org/time-zones). _ActiveSupport::Timezone.all_ won't raise an error even when a time zone is missing from TZInfo.



### [Output only one nonce in CSP header per request](https://github.com/rails/rails/pull/32602)

Nonces from old requests were saved, causing the header to grow infinitely after every request.



### [Avoid blocking the server in `#delete_matched`](https://github.com/rails/rails/commit/ef2af628a9ec1cc4e7b6997a021dd3f85cfe4665)

A fix to the newly added redis-cache-store feature of Rails 5.2. Calling _delete\_matched_&nbsp;will no longer block the Redis server.

Coming back home after an amazing event like RailsConf is always tough. Can't wait to see you all next year at RailsConf 2019 in Minneapolis from April 30th to May 2nd. Hopefully it won't snow! 🤞– [Claudio](http://claudiob.github.io)
