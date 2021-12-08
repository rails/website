---
layout: post
title: "This week in Rails: Ruby 2.2.2, RailsConf and more!"
categories: news
author: kaspth
published: true
date: 2015-04-17 18:17:44 -0700
---

Hey reader, [Kasper](https://twitter.com/kaspth) here.

I'm sole jammin' and grand slammin' words into your inbox.

But before the Rails juice, a quick story spruce: At my company we have a coworker we look up to, because she's doing a cross country trek.

She's our heroine and she just crossed the border.

Oh right, you were looking for Rails news.

## Featured

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20150410-20150417)

This week 42 people helped Rails out. Rails 5 comes closer everyday and it's only possible because of all your help. Keep it up and it'll be the best version of Rails yet.

### [`prepend` Primed to Dethrone `alias_method_chain`](https://github.com/rails/rails/pull/19752)

Remember when we said `alias_method_chain` had been deprecated? Well, if the method being overriden called super, you'd be stuck in an infinite recursion - like that friend who didn't graduate kindergarten. This week `prepend` became the successor Rails needs. And how is that possible?

### [Rails 5 Requires Ruby 2.2.2](https://github.com/rails/rails/pull/19753)

Well, I'm glad you kept reading, because Ruby 2.2.2 has a fix for `prepend`. The new version is mainly a security release - with some bug fixes squeezed in there - so no procrastinating the upgrade, okay? You want to be ready to hit [the lab](http://www.eileencodes.com/posts/getting-your-local-environment-setup-to-contribute-to-rails) next week too.

## New Stuff

### [Controllers With Default Form Builders](https://github.com/rails/rails/pull/19736)

There's a new `default_form_builder` method you can override in controllers. Then `form_for` and friends will use the passed builder class to architect the view.

### [A new Action Pack XML Parser Release](https://github.com/rails/actionpack-xml_parser/issues/7)

Hey, there's a new version of this thing out.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

## Improved

### [Railties Uses Bundler's exe Convention](https://github.com/rails/rails/pull/19731)

You've probably been prepending `bin` when running `rake` or `rails` like a good samaritan. Those are binstubs in action. But `bin` is for executables in general and not just those stubs. Not anymore, as Bundler reserves `bin` for binstubs and `exe` for executables. This week Railties executed that convention.

## One More Thing™

### [Meet Us at RailsConf](http://railsconf.com/schedule)

A few of us are going to the big peach next week. So after you've seen DHH reveal the really big stuff coming in Rails 5, you can mingle with us at RailsConf. Both [Godfrey](http://railsconf.com/program#prop_1000) and [Claudio](http://railsconf.com/program#prop_849) will be speaking. ...and I guess I'm there too.

## That's a wrap

Another week in Rails went by - and so swiftly. There's more changes in [this tailored](https://github.com/rails/rails/commits/master) link.

Lastly, either pluck in a few of your friends' emails [here](https://rails-weekly.ongoodbits.com) or ask [Godfrey](mailto:godfrey@brewhouse.io) how you can get to write these things too.

