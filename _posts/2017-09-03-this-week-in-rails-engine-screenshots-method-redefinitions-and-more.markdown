---
layout: post
title: "This Week in Rails: engine screenshots, method redefinitions and more!"
categories: news
author: imtayadeway
published: true
date: 2017-09-03
---

Oh, hello there! I'm [Tim](https://twitter.com/imtayadeway), and if you're reading this that means you've got Rails fever! It's time for your weekly dose of This Week in Rails....

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20170826-20170902)

This week 21 people contributed to Rails, including 4 for the first time! If you'd like to join them and perhaps get a slot in next week's edition, why not check out the list of [open issues](https://github.com/rails/rails/issues)?

### [Support multiple version arguments for gems in generators](https://github.com/rails/rails/pull/30323)

The `gem` method can now support multiple version constraints, just like in [rubygems](http://guides.rubygems.org/patterns/#pessimistic-version-constraint)!

### [Make `take_failed_screenshot` work within engine](https://github.com/rails/rails/pull/30421)

This method used to get the tmp directory relative to `Rails.root`, which in an engine points to the dummy application, where no such directory exists. This was fixed by using the path relative to the current directory instead.

### [Clarify intentions around method redefinitions](https://github.com/rails/rails/pull/29233)

This fixed a race condition in `class_attribute`, which in redefining an attribute had to remove it first and then redefine it. If another thread was trying to access that attribute in the middle of that, it would raise a `NameError`. Thankfully no more!

....and that's a wrap! As always, there is never enough time or space to cover every change this week, but we value each and every one. If you'd like to know more you can check out the [full list of changes](https://github.com/rails/rails/compare/master@%7B2017-08-27%7D...@%7B2017-09-02%7D) yourself. See you next time!
