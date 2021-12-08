---
layout: post
title: "This Week in Rails: 5.1 deprecations removed, SystemTestCase load hook and more!"
categories: news
author: kaspth
published: true
date: 2017-10-29
---

Hey there, it's [Kasper](https://twitter.com/kaspth), bringing you the latest edition of This Week in Rails!

### [Remove Rails 5.1 deprecations from the code](https://github.com/rails/rails/pull/30945)

All the code that was deprecated in Rails 5.1 is now removed in one fell swoop by the Rails 5.2 release manager — now you know how these removals are handled too, so please don't send individual removal PRs.  
  
Psssst: it also brings us another step closer to the first 5.2 beta.

### [Add SystemTestCase load hook](https://github.com/rails/rails/pull/31003)

Allows gems or app code to hook in when   
_ActionDispatch::SystemTestCase_ has been fully loaded.

### [Add allow_other_host option to redirect_back](https://github.com/rails/rails/pull/30850)

When passed false, the new _allow\_other\_host_ option will restrict _redirect\_back_ links to just the current host, so users will only stay on your site.  
  
It's not on by default, so users can enjoy a trip off-world on another host.

That's it for this now! As always, there isn't enough time to cover every change if you'd like check out the [full list of changes](https://github.com/rails/rails/compare/master@%7B2017-10-21%7D...@%7B2017-10-29%7D) yourself.
