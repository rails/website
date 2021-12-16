---
layout: post
title: "This week in Rails: Connection Pool, Responsive Site, Oh my!"
categories: news
author: kaspth
published: true
date: 2015-05-15 14:17:09 -0700
---

Hey everyone, *cough* this is *cough* [Kasper](https://twitter.com/kaspth).

I've been *cough* sick most of the week and am *cough*-ing my way through this.

Feel free to insert *cough*'s through the rest of this, as long as you remember not to snooze on a *sneeze* or two too.

Alright, *cough* 'em up.

## Featured

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20150508-201505152100)

Look at these 31 people and how they've hammered away at their keyboards, as if possessed by a different sickness. One of radness that is, my duderinos and duderinas.

### [Active Record: Connection Pool is More Concurrent](https://github.com/rails/rails/pull/14938)

Active Record keeps a pool of database connections. To keep the pool safe from people trying to cannonball queries at once we need to lock it. The pull request slims down what happens when locking, so you can quicker release the lock. Basically more people can go splash, because the diving board is free earlier.

### [Holy Ruby on Rails on Responsive Website, Batman!](https://github.com/rails/rails.github.com/issues/46)

Are you on your phone? Are you on your watch? Are you on the toi... eh, anyway, the [Rails website](https://rubyonrails.org) is now responsive.

Just to tide you over until the website redesign will be revealed. That'll surely be a royal flush.

## New Stuff

### [The Tragoedia and Comoedia of Integers](https://github.com/rails/rails/commit/e54277a45da3c86fecdfa930663d7692fd083daa)

This week integers gained introspection methods that makes a `select` a tad easier to read. They are the gangbuster team of `negative?` and `positive?`. And hopefully the polarity shockwaves will rock [the Ruby world](https://bugs.ruby-lang.org/issues/11151) too.

## Fixed

### [Don't Add to Local Assigns without an Object](https://github.com/rails/rails/pull/20153)

If you rendered a partial like `<%= render partial: 'spruce_goose' %>`, Rails would spruce up `local_assigns` with the name of the partial. That goose chase ended this week.

## One More Thing™

### [One More Chance to Review Rails API](https://github.com/rails/rails/pull/19832)

The option to generate API only Rails apps is almost done. But there's still a chance to help out by reviewing it. Give it a shot of love!

## That's a wrap

That's all for This week in Rails. As always, there are more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails)!

P.S. If you enjoyed this newsletter, why not share it with your friends? :) If you wish to be part of this project please don't hesitate to [contact Godfrey](mailto:godfrey@brewhouse.io) – there're a lot of ways you could help make this newsletter more awesome!

