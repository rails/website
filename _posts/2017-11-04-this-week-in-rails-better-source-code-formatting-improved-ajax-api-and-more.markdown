---
layout: post
title: "This Week in Rails: Better Source Code Formatting, Improved Ajax API and more!"
categories: news
author: imtayadeway
published: true
date: 2017-11-04
---

Hi! [Tim](https://twitter.com/imtayadeway) here! About to bring you the latest in all things Rails....

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20171030-20171103)

This week we had 12 contributors, including 1 for the very first time! Huge thanks to all of you!

### [Make beforeSend optional in Rails.ajax](https://github.com/rails/rails/pull/31002)

`Rails.ajax` requires a beforeSend parameter but for some this means having to supply a no-op function. It can now be omitted entirely, thanks to this enhancement!



### [Prevent source line wrapping in rescue layout](https://github.com/rails/rails/pull/31013)

You may be used to seeing source extracts in development mode when encountering runtime errors. Long lines currently get wrapped, but this change aids readability by letting you scroll instead.

That's all we've got for this week, but do check out the [full list of changes](https://github.com/rails/rails/compare/master@%7B2017-10-30%7D...@%7B2017-11-03%7D) yourself. Wishing you all a Happy Friday, many Friday Hugs, and not too many Hallowe'en candy hangovers! Over and out!
