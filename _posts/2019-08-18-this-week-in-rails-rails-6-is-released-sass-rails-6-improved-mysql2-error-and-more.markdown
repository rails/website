---
layout: post
title: "Rails 6 is released, sass-rails 6, improved mysql2 error and more"
categories: news
author: _cha1tanya
published: true
date: 2019-08-18
---

Hello! This is [Prathamesh](https://twitter.com/_cha1tanya) bringing the latest news from the Rails community. This week we have some big news. Get ready.

### [Rails 6 is out!](https://rubyonrails.org/2019/8/15/Rails-6-0-final-release)

After two and half years of development from more than 800 people having staggering [7275 commits](https://contributors.rubyonrails.org/releases/6-0-0/commits), Rails 6 is released. Time to upgrade 😁  
Check out the [release notes](https://guides.rubyonrails.org/6_0_release_notes.html) and [upgrading guide](https://guides.rubyonrails.org/upgrading_ruby_on_rails.html) to know more.

### [Support for sass-rails 6 ](https://github.com/rails/rails/commit/1953e0e1ace0a1790e8fe5ee0bca159637d67f61)

Rails now works with sass-rails 6.0. sass-rails 6 wraps [sassc-rails gem](https://github.com/rails/sass-rails/pull/424) under the hood. This new version stops usage of outdated and unsupported ruby-sass gem.

### [Make prepared statement status thread and instance-specific](https://github.com/rails/rails/pull/36949)

This fixes a race condition in system tests where prepared  
statements can be incorrectly parameterized when multiple  
threads observe the mutation of the **_@prepared\_statements_**  
instance variable on the connection.

### [Improve MySQL error detection](https://github.com/rails/rails/pull/36932)

Improve detection of **_ActiveRecord::StatementTimeout_** error with mysql2 adapter in the edge case when the query is terminated during file sort.

### [Log potential matches when asserting active job test helpers](https://github.com/rails/rails/pull/36920)

Adds logging of potential matches when calling **_assert\_enqueued\_with_** and **_assert\_performed\_with_** &nbsp;to provide more information about test failures.

[25 people](https://contributors.rubyonrails.org/contributors/in-time-window/20190810-20190817) contributed to Rails in the last week. Want to see your name on that list? Check out the list of [issues](https://github.com/rails/rails/issues) here.  
  
See you next week.
