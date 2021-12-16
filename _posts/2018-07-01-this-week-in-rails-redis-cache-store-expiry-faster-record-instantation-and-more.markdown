---
layout: post
title: "Redis cache store expiry, faster record instantation and more!"
categories: news
author: kaspth
published: true
date: 2018-07-01
---

Hey there, detective! Here's [Kasper](https://twitter.com/kaspth) fumbling through his own trenchcoat for his notebook to give you what went down on the [Rails codebase](https://github.com/rails/rails) this week.

### [Redis cache store: increment/decrement expiry](https://github.com/rails/rails/pull/33254)

If you've been looking to expire a key, either when incrementing or decrementing it, with Rails 5.2s Redis cache store. Just pass _expires\_in&nbsp;_to make the key sleep with the fishes.

### [Guides digging almost too deep](https://github.com/rails/rails/pull/33244)

The Rails guides are vast and deep. There's so many that the digging deeper section almost dug its own grave. But splitting out into another section is a saving grace. Why not look through [the current guides](http://guides.rubyonrails.org)?

### [has_secure_password takes an attribute](https://github.com/rails/rails/pull/26764)

For many years _has\_secure\_password_ only allowed a default _password_&nbsp;attribute. But now you can stash whatever you want in there.

### [Reduce record instantiation allocations](https://github.com/rails/rails/pull/33223)

Instantiating a list of Active Record objects is now faster and allocates less. If the array has the same instances that is. It's made possible by not looking up the same STI column each time through the loop.&nbsp;

### [OS X ditched for macOS](https://github.com/rails/rails/commit/96d2c228e31e5fe9b3159c5c52051c589d3c384f)

In lighter documentation news the old Mac OS X spelling has been replaced by macOS where applicable.

### [Multiple exceptions for retry_on/discard_on](https://github.com/rails/rails/commit/3110caecbebdad7300daaf26bfdff39efda99e25)

Rails 5.1s syntactic sugar for _retry\_job_, _retry\_on_ and _discard\_on_ that is, only took one exception so you'd have to duplicate exception blocks or spread a retry on multiple lines. No longer! Get your high in a single line of sugar.

[20 people](http://contributors.rubyonrails.org/contributors/in-time-window/20180624-20180701) contributed to Rails this past week. There might be some&nbsp;[open issues](https://github.com/rails/rails/issues)&nbsp;you can try tackling?  
  
See you next week!
