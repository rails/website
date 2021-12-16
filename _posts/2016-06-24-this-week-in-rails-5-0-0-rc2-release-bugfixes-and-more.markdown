---
layout: post
title: "This Week In Rails: 5.0.0.rc2 release, bugfixes, and more!"
categories: news
author: gregmolnar
published: true
date: 2016-06-24
---

Hello everyone! This is [Greg](https://twitter.com/gregmolnar) bringing latest news from the Rails community.

## Featured

### [This week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160617-20160624)

22 great people helped this week to move the Rails framework forward! If you want to join these folks, have a look at the [issues list](https://github.com/rails/rails/issues).

### [Rails 5.0.0.rc2 release!](https://rubyonrails.org/2016/6/22/Rails-5-0-rc2)

Rails 5 RC2 has been released with a lot of bug fixes and polishing. We are one step closer to the final release!

## Fixed

### [Fix rails/info routes for apps with globbing route](https://github.com/rails/rails/pull/25430)

The **/rails/info** routes were inaccessible in apps with a catch-all route, as they were being appended after the globbing route and would never be matched.

### [Fix db:structure:load silent failure on PostgresSQL error](https://github.com/rails/rails/pull/24773)

The **db:structure:load** &nbsp;task silently failed if there was any SQL error, but with this commit, now it will report the error.

## Improved

### [Improved db:structure:dump](https://github.com/rails/rails/pull/23301)

To avoid unnecessary diffs in the db structure dump, the **--skip-comments** flag is passed to the **mysqldump** &nbsp;command from now on.

## Changed

### [datetime\_field change](https://github.com/rails/rails/pull/25469/files)

The **datetime\_tag** helper now generates an input tag with the type of **datetime-local**.

## Wrapping Up 

That's it from This Week in Rails! There were many other great contributions, too numerous to list here, but feel free to [check them out](https://github.com/rails/rails/compare/master@%7B2016-06-17%7D...@%7B2016-06-24%7D)!

Until next week!

