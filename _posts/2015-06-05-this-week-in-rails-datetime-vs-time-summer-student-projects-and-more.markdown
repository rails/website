---
layout: post
title: "This week in Rails: DateTime vs Time, summer student projects and more!"
categories: news
author: marcelmorgan
published: true
date: 2015-06-05 17:24:47 -0700
---

Hello everyone!

This is [Marcel](https://twitter.com/marcelmorgan) making my 'initial commit' with awesome help from [Kasper](https://twitter.com/kaspth), your friendly ghost editor. Ten minutes from [the lovely Jamaican shores](http://cdn.sandals.com/sandals/v11/slideshows/resorts/sng/media/large/slide-75.jpg), here are the headlines from This Week in [Rails](https://github.com/rails/rails).

## Featured

### [This week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20150528-20150605)

56 people helped make Rails even more awesome this week.

### [When should you use DateTime?](https://gist.github.com/pixeltrix/e2298822dd89d854444b)

Ever wondered what is the difference between `DateTime` and `Time`? Checkout this enlightening gist on when you would use each which also landed in the [ruby documentation](https://github.com/ruby/ruby/commit/45458752d3f54ac81661d93aa55b8b5805f78138).

### [Google Summer of Code – Web Console](http://brx-web-console.blogspot.jp)

Follow one of our [Google Summer of Code](https://developers.google.com/open-source/soc) student [Hiroyuki](https://github.com/sh19910711) on his thoughts, experiments and progress with the [web-console](https://github.com/rails/web-console) browser extension project.

### [Rails Girls Summer of Code](http://railsgirlssummerofcode.org/blog/2015-06-04-2015-teams)

Meet the 16 official teams that will be participating in the 2015 Rails Girls Summer of Code. We wish them the best of luck.

## New Stuff

### [Custom configurations can be required](https://github.com/rails/rails/pull/20208)

Sometimes there's a configuration your app simply needs to function. Now that important client secret can raise if it hasn't been set. Just go out with a bang: `Rails.application.kitty_litter_supreme.client_secret!`

### [Action Mailer queue name is configurable](https://github.com/rails/rails/pull/18587)

Currently all mails sent with `deliver_later` are put in the mailers queue. This patch keeps that default but allows the queue name to be configured globally via `config.action_mailer.deliver_later_queue_name`. See also related [documentation commit](https://github.com/rails/rails/commit/ae5f2b4e79f3e41aad8280109d8bfc788a1a2733).

## Improved

### [Use inline Gemfile when reporting bugs](https://github.com/rails/rails/pull/20429)

No longer do you need to write a physical Gemfile when submitting bug reports, as [Bundler 1.10.3](https://github.com/bundler/bundler/pull/3440) now supports inline gems. Of note, when an inline Gemfile is used, [`bundle exec` is not supported](https://github.com/bundler/bundler/issues/3721#issuecomment-109154581).

### [Use block variable instead of global](https://github.com/rails/rails/pull/20410)

As it turns out using a block variable instead of a "magic" global variable is not only faster but easier to read.

### [Enumerable#pluck supports multiple attributes](https://github.com/rails/rails/pull/20362)

This allows easier integration with Active Record, such that `ActiveRecord::Base#pluck` will now use `Enumerable#pluck` if the relation is loaded, without needing to hit the database.

## Deprecated

### [Remove `assert_template` and `assigns()`](https://github.com/rails/rails/pull/20138)

In order to discourage ties in the controller tests to the internal structure of how your views are organized, `assigns` and `assert_template` have both been removed and extracted to the gem [rails-controller-testing](https://github.com/rails/rails-controller-testing).

## Fixed

### [Apply Active Record suppression to all saves](https://github.com/rails/rails/pull/20430)

Active Record's `suppress` is now being applied to non-bang `save` and `update` methods. It was also missing from `create_*` methods provided by singular associations. See [gist](https://gist.github.com/georgeclaghorn/e6e7ef670262b9c12e5f) for more details.

## That's a wrap

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-05-29%7D...@%7B2015-06-05%7D)!

Have you been thinking about writing for us, but you're scared of putting yourself out there? Don't worry, you can help our editors improve their writing with thoughtful critique and general grammar policing.

You up for that? Tell [Godfrey](mailto:godfrey@brewhouse.io) today.

