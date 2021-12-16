---
layout: post
title: "Rails 5.2.0, performance optimizations, space-saving compression and more!"
categories: news
author: imtayadeway
published: true
date: 2018-04-15
---

And now a Rails 🌩 News Flash 🌩! (Hint: we've got some big news this week, if you hadn't heard). We take you now, live, to our reporter on the scene, [Tim](https://twitter.com/imtayadeway), for all the latest and greatest this week.

### [Rails 5.2.0 is out!](https://rubyonrails.org/2018/4/9/Rails-5-2-0-final)

5.2.0 is officially among us, a little bit ahead of [RailsConf](http://railsconf.com) this year. If you can't wait until then to find out everything that this new release brings, do go read the original [blog post](https://rubyonrails.org/2018/4/9/Rails-5-2-0-final) that accompanied the release for all the details!



### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20180401-20180413)

48 people contributed to Rails in the last two weeks, including an incredible 11 for the first time! A big thank you to all of you!

If you'd like to see yourself on that board, why not check out the list of [open issues](https://github.com/rails/rails/issues), or get involved in the [core discussion list](https://groups.google.com/d/forum/rubyonrails-core).

### [API controlIers now get a set of default headers](https://github.com/rails/rails/pull/32484)

Though you may not need all these headers, there are specific instances where you may want them to enhance security, so it makes sense to have this configured on by default.




### [An optimization for the Query Cache middleware](https://github.com/rails/rails/pull/32414)

This nice little optimization eliminated some array allocations, that you may benefit from if you have a large number of connection pools.



### [Avoid generating full changes hash on every save](https://github.com/rails/rails/pull/32497)

By asking the mutation tracker for the list of changed attributes, some work can be skipped when generating the changes hash. This may be most noticeable for serialized attributes, for which calling `#original_value` can be significantly more expensive.



### [Fix ActiveSupport::Cache compression](https://github.com/rails/rails/pull/32539)

A regression was found whereby compressed items in the cache store were taking up more space than their original, uncompressed versions. That is now fixed thanks to the great detective work shown in this PR!

As always there were many more changes to the Rails codebase than we can cover here. But you can read all about them [here](https://github.com/rails/rails/compare/master@%7B2018-04-01%7D...@%7B2018-04-13%7D)! Until next week!
