---
layout: post
title: "This Week in Rails: A bugfix and improvements!"
categories: news
author: gregmolnar
published: true
date: 2022-11-11
---

Hi there,

This is [Greg](https://twitter.com/gregmolnar), bringing you the latest changes in Rails.

[Fix Enumerable#many? to handle all block parameters](https://github.com/rails/rails/pull/46448)
Before this fix, _Enumerable#many?_ didn't forward the block parameters to the block, so if someone called it in a chain with _each\_with\_index_, the index wasn't passed to the block.

[Use filename when printing pending migrations](https://github.com/rails/rails/pull/46461)
By using _filename_, instead of _basename_, the full path of the migration will be displayed, which can be useful when migration files are stored in multiple directories, for instance in a multi-db app.

[Make error highlight readable on dark mode](https://github.com/rails/rails/pull/46425)
The recently introduced error highlighting on the error pages were hard to read in dark mode, but not anymore.

[Improve the MissingExactTemplate error page](https://github.com/rails/rails/pull/46469)
This improvement to the MissingExactTemplate error page adds the actual controller and action name to the page, replacing the generic example there before.

[19 people](https://contributors.rubyonrails.org/contributors/in-time-window/20221104-20221111) contributed to Rails this past week! Until next time!



<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
