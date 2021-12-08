---
layout: post
title: "This Week in Rails: cable got buffer, callbacks stripped, and more!"
categories: news
author: kaspth
published: true
date: 2016-09-30
---

Cadet, you're at the new frontier! Orbiting the red planet just yonder, you ponder and wonder:  
  
_Do Martians drink their Martinis on the rocks?_  
  
All [this crew member](https://twitter.com/kaspth) knows is that he prefers his scoops on the Rails — good news, everyone: We're setting course for such a delivery!

## Featured

### [This Week's Multiplanetary Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160924-20160930)

22 contribunauts came aboard the contributor list this week with their precious commits harvested for the good of all. You've earned this heart of gold: 💛

### [Action Cable buffers socket writes](https://github.com/rails/rails/pull/26646)

Quoting the description:  
  
_Sockets can sometimes block, leading to reduced system throughput as threads get tied up._  
  
Switching to incremental writing allows Action Cable to spread out writes such that a blocked socket can't block writes to other sockets.

### [Callbacks leaves less backtrace lines](https://github.com/rails/rails/pull/26147)

Callbacks — _before\_action_ and friends — moved forward by going back this week: back to the backtrace and removing traces of itself. Try that, McFly!  
  
Check the description for an example, it's quite easier to see in action.

## Improved

### [Rails' test runner supports _after\_run_ hooks](https://github.com/rails/rails/pull/26515)

The Rails test runner switched to using minitest's _autorun_ across the board, as such it gained support for _Minitest.after\_run_ hooks.  
  
_autorun_ also guards against running tests twice, which could happen in some cases. But that's now fixed too.

## Fixed

### [Don't leak _ActiveModel::Errors_ _default\_proc_](https://github.com/rails/rails/pull/26640)

Previously when serializing _ActiveModel::Errors_ via _to\_hash_ or _as\_json_ for instance, the _default\_proc_ would hide in the engine compartment and spring out when the crew was out of orbit.  
  
No more of those alien capers on this ship!

### [Make :as option also set request format](https://github.com/rails/rails/pull/26573)

In Rails 5 you can make an _as_ of your test requests, _as: :json_ that is.  
  
After adding the option to _ActionController::TestCase_ last week, we've opened the pod bay doors once ensuring the _format_ is just right_._

## Wrapping up

That's it for this week, as usual there were more changes than what we can fit, feel free to check them yourself [here](https://github.com/rails/rails/compare/master@%7B2016-09-24%7D...@%7B2016-09-30%7D)!  

Until next week!

