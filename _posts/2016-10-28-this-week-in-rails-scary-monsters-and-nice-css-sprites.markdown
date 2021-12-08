---
layout: post
title: "👻 🎃 This Week in Rails: Scary Monsters and Nice CSS Sprites!"
categories: news
author: chancancode
published: true
date: 2016-10-28
---

Boo! Hey ghouls and goblins, [Andy](https://twitter.com/andatki) here. This is going to be loaded with groan-inducing Halloween-themed puns. If you weren't turned off already by the Skrillex reference, please keep reading!

Let's take a look at 👻 Frankenstein fixes, 💀 dead code, and 👿&nbsp; devilishly-detailed documentation changes...carved out this week! 🎃 

 ![](https://camo.githubusercontent.com/d780c2320a942b6a37d784fc46df6ee60517bc47/68747470733a2f2f636c2e6c792f31483432335a334e307032342f707265766965772d636861742d494d475f303030392e6a7067)
_Ruby on Rails Pumpkin, carved by [Jack](https://github.com/JackTLi), [Graham](https://github.com/Thadeaus), [Zachary](https://github.com/zacharyreynochiasson) and [Matt](http://github.com/mblagden) at Shopify._

## Featured

### [Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/this-week)

We had 22 Ruby on Rails contributors this week, including a first-time contributor. Thanks!

## Improved

### [Permit loads while queries are running](https://github.com/rails/rails/commit/007e50d8e5a900547471b6c4ec79d9d217682c5d)

A query may wait on a database-level lock, which could lead to a deadlock between threads. No one likes deadlocks. They are the stuff of developers' nightmares! 💀

### [Remove unnecessary `respond_to?(:indexes)` checks](https://github.com/rails/rails/pull/26688)

All database adapters have implemented the `indexes` method and support was removed. Some concerns were raised (from the dead? 💀), but the contributor demonstrated the requirement for database adapters to support `indexes` in early versions.

## Fixed

### [Clear the correct query cache](https://github.com/rails/rails/commit/fa7efca553e325b2aabb087a4eddf4560c356094)

The correct query cache was not being cleared. The author mentioned that this bug was happening in Sidekiq as well. Check out the details!

### [Fix HABTM associations](https://github.com/rails/rails/commit/94821b4bd10464d52b471380c49f85fac43a8ab7)

Use constants, strings, and symbols to express your HABTM associations. Check out the commit for more details.

## Wrapping up

That's it for this week. Check out all the changes [here](https://github.com/rails/rails/compare/master@%7B2016-10-14%7D...@%7B2016-10-21%7D). May your bucket (or the buckets of your children) be filled with sweet Halloween treats! 🍬
