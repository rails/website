---
layout: post
title: "This week in Rails: Happy New Year!"
categories: news
author: andatki
published: true
date: 2016-01-08 17:02:12 -0800
---

Happy New Year! Welcome to the first 2016 issue of This week in Rails.

I'm [Andy](https://twitter.com/andatki), and before diving in to contributions from this week, let's briefly recap some stats from 2015. Our 12 editors released 50 issues summarizing [over 6500 commits](https://github.com/rails/rails/compare/master@%7B2015-01-01%7D...@%7B2015-12-18%7D) to Rails! Each issue is now being sent to over 4300 subscribers.

What a great year! To celebrate, sweep up some confetti laying around from last weekend, toss it in the air, and sing some bars of [Auld Lang Syne](https://en.wikipedia.org/wiki/File:Auld_Lang_Syne.ogg).

## Featured

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20151219-20160108)

79 people contributed to Rails since the last issue on December 18, 2015! Check out the list of [issues](https://github.com/rails/rails/issues) if you'd like to help out as well.

### [RailsConf 2016 CFP deadline](http://rubycentral-cfp.herokuapp.com/events/railsconf2016)

Interested in speaking at RailsConf 2016 in Kansas City? Call for proposals closes January 15th, 2016, 11:59pm CST! You've got 1 week!

## New Stuff

### [Security: Per-form CSRF tokens](https://github.com/rails/rails/pull/22275)

Changes brought upstream from GitHub, related to Content Security Policy (CSP) and securing forms. Check out the links in the PR to learn more.

### [Default new apps to tag logs with `request_id`](https://github.com/rails/rails/pull/22949)

The `:request_id` log tag ensures that each request is tagged with a unique identifier.

### [Short-hand methods for types in MySQL](https://github.com/rails/rails/pull/21688)

This change adds short-hand methods like `tinyblob` and `mediumblob` for text and blob types when using MySQL.

## Fixed

### [Don't output to `STDOUT` twice](https://github.com/rails/rails/pull/22933)

Stops printing messages twice with rails console or rails server and a logger set to output to STDOUT.

## Faster

### [Replace `x.times.map{}` with `Array.new(x){}`](https://github.com/rails/rails/pull/22890)

Small performance improvement supported with a benchmark. Check out the results.

## Wrapping Up

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2016-01-01%7D...@%7B2016-01-08%7D).

Until next time!

