---
layout: post
title: "This week in Rails: Rails API, fun with minitest and more!"
categories: news
author: toddbealmear
published: true
date: 2015-06-12 16:51:37 -0400
---

####

Howdy folks!

My name is [Todd](https://twitter.com/toddbealmear) and I'll be your guide through the land of [Rails](https://github.com/rails/rails) this week. Straight from the comfort of my couch with awful lumbar support, I proudly present bad posture and the highlights from [This Week in Rails](https://rails-weekly.ongoodbits.com).

## Featured

### [This week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20150606-201506122000)

42 people made Rails even more awesome this week.

### [Rails API has landed on master!](https://github.com/rails/rails/pull/19832#event-328922869)

After 52 days, lots of great comments, and a ton of incredible work by [Santiago](https://github.com/spastorino) and [Jorge](https://github.com/jmbejar), Rails API has been merged into master and will be released as part of Rails 5!

## New Stuff

### [Optional scaffold.css](https://github.com/rails/rails/pull/20479)

If you've ever wanted the ability to avoid generating `scaffold.css` when performing a scaffold, you're in luck. Simply use the `--no-scaffold-stylesheet` switch and you're good to go!

## Improved

### [Better minitest integration for Rails' test runner](https://github.com/rails/rails/pull/19571)

The new Rails test runner has been modified to take better advantage of [minitest](https://github.com/seattlerb/minitest)'s extension system.

### [Added a Point object for Postgres point types](https://github.com/rails/rails/pull/20448)

Rails 5 will deprecate the current behavior for Postgres point types. Moving forward, the Postgres adapter will return a `Point` object instead of an `Array`.

### [Reversible `remove_foreign_key`](https://github.com/rails/rails/pull/20226)

Migrations using `remove_foreign_key` can now be automatically reverted with `rake db:rollback` without manually defining the `down` operations.

## Fixed

### [Prefix and suffix options for enums](https://github.com/rails/rails/pull/19813)

This allows you to add a prefix or suffix to enum's auto-generated methods. Useful if you have multiple enums with the same values.

### [Fixed ignore_blank for required select fields](https://github.com/rails/rails/pull/20124)

This change will now cause an `ArgumentError` to be raised in the event `ignore_blank` is set to `false` on a required select field.

### [Fixed abstract class fixtures with belongs_to](https://github.com/rails/rails/pull/20437)

Fixes an issue where using `belongs_to` in abstract classes would result in a crash when loading test fixtures.

## That's a wrap

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-06-06%7D...@%7B2015-06-12%7D)!

Have you been thinking about writing for us, but you're scared of putting yourself out there? Don't worry, you can help our editors improve their writing with thoughtful critique and general grammar policing.

You up for that? Tell [Godfrey](mailto:godfrey@brewhouse.io) today.

