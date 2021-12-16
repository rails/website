---
layout: post
title: "This Week In Rails: quieter loggers, faster delegators, and smarter defaults!"
categories: news
author: imtayadeway
published: true
date: 2016-06-11
---

Ahoy hoy! [Tim](https://twitter.com/imtayadeway) (aka Godfrey[9]) here bringing you all the latest from the Rails community. It's been yet another killer week of activity as we continue to refine Rails 5 ahead of its upcoming launch 🚀. Don't touch that dial - it's gonna be a helluva show!

## Featured

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160604-20160610)

This week saw contributions from 26 fabulous people. 3 of those had a commit merged into Rails for the very first time. A big thank you to you all! ❤️

If you fancy seeing yourself up there next week, why not take a peek at the list of [current issues](https://github.com/rails/rails/issues)? Improvements to the [documentation](http://api.rubyonrails.org) can also be a great place to start!

### [Rails 5: The Tour](https://www.youtube.com/watch?v=OaDhY_y8WTo)

Last week brought us an updated look at Rails by none other than [DHH](https://twitter.com/dhh) himself. The video offers a whirlwind tour of some of the most powerful features of the framework for newcomers in a tutorial that gets a blog set up in around 20 minutes. It also offers something for those looking to integrate newer features into their existing Ruby on Rails applications.

## Fixed

### [#send\_file can terminate the callback cycle when used in a before\_action](https://github.com/rails/rails/pull/25079)

A recent regression caused **#send\_file** to fail to halt the request cycle when used in a **before\_action**. This is because the callback terminator checks for **@\_response\_body** , which is no longer set by **#send\_file**. This fix updated to use **#performed?** instead.

### [Broadcasting properly delegates #silence to all logs](https://github.com/rails/rails/pull/25341)

If you use broadcasting to send messages to multiple loggers, you may have found that it does not silence all of them when told to do so. The fix updated to properly delegate **#silence** to all.

## Improved

### [Delegation gets a boost by leveraging Kernel#caller\_locations](https://github.com/rails/rails/pull/25352)

**Kernel#caller\_locations** was introduced in MRI 2.0, and outperforms **Kernel#caller** in **Module#delegate** by around 10%. For the author this resulted in a faster boot time.

### [Framework defaults file gets a spring clean](https://github.com/rails/rails/pull/25235)

The new\_framework\_defaults file got a spruce this week, and documentation was updated to include better advice for upgrading to the new defaults from older apps.&nbsp;

The change also utilizes the update flag in several places to provide better messages catered for those only on the upgrade path.

## Wrapping Up

That's it from This Week in Rails! There were many other great contributions, too numerous to list here, but feel free to [check them out](https://github.com/rails/rails/compare/master@%7B2016-06-04%7D...@%7B2016-06-10%7D)!

Until next week!
