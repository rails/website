---
layout: post
title: "Bye-bye Byebug, Hello jsbundling and cssbundling!"
categories: news
author: zzak
published: true
date: 2021-09-11
---

Hi! [zzak](https://github.com/zzak) here! We're back after a 2 week break with some of the latest changes that will land in Rails 7.

### [DHH previews JavaScript options in Rails 7 [YouTube]](https://www.youtube.com/watch?v=JsNtLiph87Y)

If you haven't been following along, Rails 7 will get a major facelift on the front-end. We recommend reading this [blog post](https://world.hey.com/dhh/rails-7-will-have-three-great-answers-to-javascript-in-2021-8d68191b) to learn more.

### [Replace Byebug with ruby/debug](https://github.com/rails/rails/pull/43187)

Ruby 3.1 will launch with a new first-class [debugger](https://github.com/ruby/debug) that works great with Rails.  
  
Let's all appreciate the many years Byebug has helped us ship software.

### [Add SSL support for postgresql in "bin/rails dbconsole"](https://github.com/rails/rails/pull/43118)

This PR fixes the `dbconsole` command when used with PostgreSQL to support encrypted connections.

### [Instrument ActiveStorage analyzers](https://github.com/rails/rails/pull/42939)

Help identify bottle necks when using ActiveStorage analyzers by emitting ActiveSupport instrumentation metrics.

### [Add --css app generator option](https://github.com/rails/rails/pull/43177)

The `rails new` command just got a brand new `--css` flag that let's you specify which CSS processor to use in your app. You can choose from tailwind, postcss, or sass.

[21 people](https://contributors.rubyonrails.org/contributors/in-time-window/20210829-20210912) contributed to Rails since last time. All the changes can be checked [here](https://github.com/rails/rails/compare/@%7B2021-08-29%7D...main@%7B2021-09-12%7D). Until next week!
