---
layout: post
title: "This Week in Rails: greener JRuby, optimistier locking and more!"
categories: news
author: kaspth
published: true
date: 2016-10-21
---

Hey peeps, [Kasper](https://twitter.com/kaspth) here.

It's that time of the week again, when that newsletter you read while frantically checking [http://downforeveryoneorjustme.com](http://downforeveryoneorjustme.com) is here.

Oh, you think we're down, cupcake? I'm afraid that's just you buddy, we're fired up and ready to go!

## Featured

### [This weeks Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20161014-20161021)

Did you know you can contribute to Rails? Oh, I'm not kidding! It's totally open source and everything.

In fact check the next item if you're looking to join the list, codeslinger!

### [JRuby turns Rails green with envy](https://twitter.com/headius/status/788857979655323648)

Before RubyConf the JRuby team would like to get the whole Rails test suite passing and green.

Already [some](https://github.com/rails/rails/pull/26854) [fixes](https://github.com/rails/rails/pull/26829) have been [committed](https://github.com/rails/rails/pull/26860). Check out the linked tweet and see if there's something you can help with.

## Improved

### [Optimistic locking unlocks overriding](https://github.com/rails/rails/pull/26050)

If you'd been a good sport and optimistically tried to set the lock column value, you'd be sorry. Now you would be happy because it's fixed!

### [Allow any key in Renderer environment hash](https://github.com/rails/rails/pull/26786)

Since Rails 5 you've been able to render templates outside of your controller actions. Now you can pass in arbitrary keys when performing that kind of rendering.

### [Publicize process in controller tests](https://github.com/rails/rails/pull/26793)

In your `ActionDispatch::IntegrationTest` controller tests you can use the `get` etc. request shorthands which would just pipe through to a private `process` method.

Now that method is public so you can better see the documentation on it.

## Fixed

### [Prevent test framework from loading in production](https://github.com/rails/rails/commit/797f1dd63c68eb44c1af358d377cfef271e685c5)

Some [dingus](https://github.com/rails/rails/commit/69e5547162af5ce9537230239b66a6887699e7c1) accidentally caused minitest to be loaded in the production environment.

Luckily that's fixed now!

## Wrapping up

That's it for this week, as usual there were more changes than what we can fit, feel free to check them yourself [here](https://github.com/rails/rails/compare/master@%7B2016-10-14%7D...@%7B2016-10-21%7D). Until next week!

