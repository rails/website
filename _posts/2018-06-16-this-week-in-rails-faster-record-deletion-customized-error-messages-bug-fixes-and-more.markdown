---
layout: post
title: "Faster record deletion, customized error messages, bug fixes, and more!"
categories: news
author: dodecadaniel
published: true
date: 2018-06-16
---

Greetings, all! This is [Daniel](https://twitter.com/dodecadaniel), with the latest news about Ruby on Rails.

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20180610-20180616)

14 people contributed to Rails this past week, including 4 first-time contributors. Many thanks to all!

Are you looking to get involved? Check out the list of [open issues](https://github.com/rails/rails/issues)!

### [Faster dependent destroying](https://github.com/rails/rails/pull/29939)

Has GDPR got you deleting users and all their "likes"? The `dependent: destroy` option has been updated to use a linear algorithm, rather than a quadratic one. I like that!

### [Allow suffixing store attributes](https://github.com/rails/rails/pull/29373)

Back in March we added the option to use prefixes for your store attributes. Well now you can use suffixes as well. Say goodbye to clashing method names!

### [Flexible error message customization](https://github.com/rails/rails/pull/32956)

Ever find yourself wanting to override the default Active Model error message format for a particular model or attribute, rather than for the whole language? Well now you can!  


### [Eager loading in development](https://github.com/rails/rails/pull/33118)

In Rails 5.1 and 5.2 setting `config.eager_load = true` in development could cause the server to lock up. As I'm sure you could guess, we were eager to get this merged.

### [Fix round trip problem with params](https://github.com/rails/rails/pull/33093)

Parsing nested params is not easy, but your controller tests may depend on it. Luckily we were able to handle it with Rack and a little bit of tender love.

But wait, there's more! If you are eager for more Ruby on Rails news, check out the [full list of commits from the past week](https://github.com/rails/rails/compare/master@%7B2018-06-10%7D...@%7B2018-06-16%7D). Otherwise, see you next week!
