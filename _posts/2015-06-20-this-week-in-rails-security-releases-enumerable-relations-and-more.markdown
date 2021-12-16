---
layout: post
title: "This week in Rails: Security Releases, Enumerable Relations and more!"
categories: news
author: huoxito
published: true
date: 2015-06-20 00:44:42 -0400
---

####

Hey there!

I'm just glad we all made to this Friday. This is [Washington](https://twitter.com/huoxito) again pulling together a few stories for our weekly newsletter on Rails.

## Featured

### [This week's Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20150613-20150619)

Keeping our tradition let's start with the 32 splendid contributors that made their commits to rails/rails this week. Keep in mind a ton other people also helped by creating issues and helping the core team with PR reviews.

### [Rails security releases 3.2.22, 4.1.11 and 4.2.2](https://rubyonrails.org/2015/6/16/Rails-3-2-22-4-1-11-and-4-2-2-have-been-released-and-more)

Time to upgrade your applications. Five announcements landed on [Rails security mailing list](https://groups.google.com/forum/#!forum/rubyonrails-security) this week. Consider joining that list as well if you haven't yet.

## Improved

### [Include Enumerable in ActiveRecord::Relation](https://github.com/rails/rails/commit/b644964b2b555798fc4b94d384b98438db863b3f)

After a [couple years](https://github.com/rails/rails/pull/8794) Rails core team seems to have changed its mind and `Enumerable` is finally included into active record relations. Things change and I believe that's fine.

## Fixed

### [Autoload ActiveRecord::RecordInvalid](https://github.com/rails/rails/commit/c3133f50bc7b09c945f6387f3a64539b75d3dbc9)

Thanks to the awesome open source community [it was noted](https://github.com/rails/rails/issues/20626) `ActiveRecord::RecordInvalid` was not being eager loaded as expected. The fix was backported to all supported branches.

## Deprecated

### [Remove ContentLength middleware from the defaults](https://github.com/rails/rails/commit/56903585a099ab67a7acfaaef0a02db8fe80c450)

As per an [old change](https://github.com/rack/rack/commit/86ddc7a6ec68d7b6951c2dbd07947c4254e8bc0d) on Rack spec Rails 5 will no longer ship with `ContentLength` middlleware by default.

### [Passing hash as first parameter into ActionController::Head is deprecated](https://github.com/rails/rails/pull/20407)

The way to go now is to explicitly pass the status first then pass the options hash as a second parameter.

## That's a wrap

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-06-13%7D...@%7B2015-06-20%7D)!

Have you been thinking about writing for us, but you're scared of putting yourself out there? Don't worry, you can help our editors improve their writing with thoughtful critique and general grammar policing.

You up for that? Tell [Godfrey](mailto:godfrey@brewhouse.io) today.

