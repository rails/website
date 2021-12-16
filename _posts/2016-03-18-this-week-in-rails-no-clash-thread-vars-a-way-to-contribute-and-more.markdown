---
layout: post
title: "This week in Rails: no-clash thread vars, a way to contribute and more!"
categories: news
author: kaspth
published: true
date: 2016-03-18
---

Straight from the mail room, it's this week in Rails!

We made sure to squeeze our ~~lone chimp with a typewriter~~ extremely talented editor [Kasper](https://twitter.com/kaspth) for just a few more keystrokes this week.

The result is not a novel, but it's pretty damn close to legible.

Let's check it out!

## Featured

### [This week's Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160311-20160318)

Did you know? Rails is written by people no smarter than you (I know, low bar! 😘). They show up, Google a few things for the common good and submit patches. They even get their name on this here fancy page!

### [A Rails conference in the Pacific](http://www.railspacific.com)

The pacific Rails conference is rolling, from May 20th to 21st in Taipei, Taiwan. Several editors of this newsletter will be [speaking](http://www.railspacific.com/#speakers), so we recommend checking it out!

### [`thread_mattr_accessor` doesn't clash with thread-locals](https://github.com/rails/rails/pull/24143)

Rails 5's `thread_mattr_accessor` wouldn't expose a variable set at the class level to instances and vice versa, because it generated a key that wasn't uniform both at the class and instance level. Now it does 😁

## Improved

### [Once more, `db:migrate` creates the test database.](https://github.com/rails/rails/pull/24201)

Rails considers the test database a part of the complete dev environment, as such running `db:create` in development creates the test database as well. You'll be up, running, and testing in no time.

### [Document Rails' logger + formatter interface](https://github.com/rails/rails/pull/24218)

Rails' logger and formatter — `ActiveSupport::TaggedLogging` — had a habit of saying, "tag, you're it!", when figuring out how to glue the pieces together. With new documentation, this rigamarole is easier to suss out.

## Fixed

### [Break up an Action Pack and Action View circular require](https://github.com/rails/rails/commit/12cce89c89b48b15dcf2fcdb41feaaa5b7c06991)

Spinning `assigns` and `assert_template` out into its own gem exposed a circular require in Action View and Action Pack. Good news is, adding `gem 'rails-controller-testing'` to your Gemfile should be hassle-free after this (though if you're using RSpec it needs [a teensy bit more setup](https://github.com/rails/rails-controller-testing#rspec)).

### [Generate `ApplicationMailer` if it's missing](https://github.com/rails/rails/pull/24161)

Rails 5 adds new application wide classes to inherit from, one being `ApplicationMailer`. New mailers automatically inherit from said class. However, the file for it wasn't being generated if missing. Rest assured, it now is.

## Call for contributors

### [Improve Rails' multi database support](https://github.com/rails/rails/issues/14176#issuecomment-196977338)

Want to give back to Rails, but don't know where to start? Here's something to do, straight from a Rails core member. Take a stab at improving multi database support with the suggestions at the link.

Could make a great Google Summer of Code project too 😉

## Wrapping Up

That's all for This week in Rails. As always, there are plenty of things we're not able to cover here, so take a look at the [changes](https://github.com/rails/rails/compare/master@%7B2016-03-11%7D...@%7B2016-03-18%7D) yourself.

Until next time!
