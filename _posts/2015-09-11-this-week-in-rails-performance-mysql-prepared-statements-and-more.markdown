---
layout: post
title: "This week in Rails: Performance, MySQL prepared statements and more!"
categories: news
author: _cha1tanya
published: true
date: 2015-09-11 18:01:36 -0700
---

This is [Prathamesh](https://twitter.com/_cha1tanya) after a long long time bringing you latest and greatest news from Rails world!

## Featured

### [This weeks Rails contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20150904-201509011)

37 people contributed to Rails this week, including 7 first-time contributors. If you are interested in becoming a contributor, you can have a look at the [issues](https://github.com/rails/rails/issues) list.

## New Stuff

### [Drop indexes concurrently in PostgreSQL](https://github.com/rails/rails/pull/21317)

Now you can drop PostgreSQL indices concurrently in Rails 5, just like how you can already add indices concurrently today.

### [Approachable SSL handling](https://github.com/rails/rails/pull/21520)

Remember good 'ol `config.force_ssl`? You can now use it with greater control. With improvements in SSL redirect and better handling of Strict Transport Security, you will surely love this improved version of `config.force_ssl`.

### [Mult-context validations](https://github.com/rails/rails/pull/21069)

Ever faced the need of running validations of `create` and `update` contexts both at the same time? Now you can do that by passing multiple contexts to the `#valid?` and `#invalid?` methods.

## Improved

### [Active Record performance improvements](https://github.com/rails/rails/pull/21523)

This week lot of work was done for improving Active Record internals by reducing object allocations, avoid creating relations when not required and so on. Kudos to [@tgxworld](https://twitter.com/tgxworld)!

### [Prepared statements with MySQL](https://github.com/rails/rails/pull/21536)

Rails now supports latest version of mysql2 gem. Is this a big deal? Yes!! You can now use prepared statements using this version. Now that's awesome!

### [Improve sql logging coloration](https://github.com/rails/rails/pull/20921)

If you are using custom SQL queries with Ruby herredoc, you will be able to identify them instantly in your logs. Why? Because they will have better colors thanks to this patch.

Not just that, overall coloration of all SQL queries is improved here as well!

### [Reaching into the cookie jar](https://github.com/rails/rails/compare/ed3d213eb6b79218eee9bd8b4fa8ac8c147cd114...72889a6be4ec4afd68d3e4c3ae972099e080478a)

The cookie-handling code in Rails is one of the more complicated code in the framework, largely due to the need to support and migrate legacy cookies produced by older versions of Rails.

Kasper refactored some of those code to make it less hostile to future improvements, nice!

## Fixed

### [Generator errors messages will be in plain English](https://github.com/rails/rails/pull/21524)

If you have seen some weird characters showing up in error messages of `rails g` commands due to localization of some messages, it is now fixed!

## Wrapping Up

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-09-05%7D...@%7B2015-09-11%7D)!

Have you been thinking about writing for us, but you're scared of putting yourself out there? Don't worry, you can help our editors improve their writing with thoughtful critique and general grammar policing.

You up for that? Tell [Godfrey](mailto:godfreykfc@gmail.com) today.

