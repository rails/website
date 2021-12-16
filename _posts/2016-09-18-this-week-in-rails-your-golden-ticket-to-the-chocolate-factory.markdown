---
layout: post
title: "This Week in Rails: 🍫 Your Golden Ticket to the Chocolate Factory 🍫"
categories: news
author: jonatack
published: true
date: 2016-09-18
---

[Jon](https://twitter.com/jonatack) here welcoming you to This Week in Rails!  
  
Today we'll be touring the wondrous **Ruby on Rails chocolate factory** to see how its marvelous candy, consumed by web apps and developers everywhere, is made and tested.
  
Golden tickets in hand? Let's go!

## Welcome! 🎩

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160910-20160916)

This week, [26 fabulous oompa-loompas](http://contributors.rubyonrails.org/contributors/in-time-window/20160910-20160916) concocted improvements to make your favorite candy even more delicious -- including one for the first time!

### [Fix Bundler warnings about insecure github sources](https://github.com/rails/rails/commit/12d5c21)

If you upgrade to bundler 1.13 and use **github** options to specify gem sources in your Gemfile, you'll see warnings when running bundle commands.
  
To fix, you can run **bundle config github.https true** on the command line.  
  
Or if you don't control the environment the Gemfile will execute in, you can add this to the Gemfile, like Rails now does:
  
**git\_source(:github) |repo_name| do  
&nbsp; "https://github.com/#{​repo_name}​.git"  
end**

Backported to 5-0-stable.

## Improving the chocolate 🍩🍫

### [Puma docs: Disconnect connections before preloading](https://github.com/rails/rails/pull/26314)

This pull request added documentation for **config/puma.rb** to recommend closing database connections if preloading an application that uses Active Record. See the discussions in the [pull request](https://github.com/rails/rails/pull/26314) and in [puma/puma#1001](https://github.com/puma/puma/issues/1001) for more.

### [Improve assert\_response helper](https://github.com/rails/rails/pull/26477)

To improve productivity when writing tests, if an **assert\_response** test fails, Rails nows outputs the actual response body if it's not too large (less than or equal to 500 chars).

## Fixing bugs in the candy 🍬

### [Clear attribute changes after touching](https://github.com/rails/rails/pull/26497)

Following-up on a very good [bug report](https://github.com/rails/rails/issues/26496), this PR fixed a Rails 5 regression so that calling **ActiveRecord#touch** when using optimistic locking once again leaves the model in a non-dirty state with no attribute changes.

### [Prevent mutation of constants](https://github.com/rails/rails/pull/26442)

Tests using **ActionDispatch::IntegrationTest** were failing when run after any controller test that modified **request.session\_options**. It turned out that&nbsp; **ActionController::TestSession::DEFAULT\_OPTIONS** was being mutated, and as a result, **Rack::Session::Abstract::Persisted::DEFAULT\_OPTIONS** also, which made integration tests inherit that value and fail.

This pull request dup'ed the AC default options constant to prevent mutation, and a [pull request to Rack](https://github.com/rack/rack/pull/1110) was merged to freeze the Rack default options constant and avoid the issue in the future.

### [Force correct namespace with TransactionManager](https://github.com/rails/rails/commit/f62451a)

This pull request fixed [issue #26441](https://github.com/rails/rails/issues/26441): "NameError: uninitialized constant AR::ConnectionAdapters::DatabaseStatements::TransactionManager when calling reset\_transaction".

## How to contribute? Some examples from this week 🍰

### [Fix warnings in the test suite](https://github.com/rails/rails/pull/26484)

Running the Rails test suite can be a great way to uncover minor issues to fix. This pull request addressed 2 warnings in the test suite that arose simply from not wrapping a method argument in parentheses.

### [Add missing tests](https://github.com/rails/rails/pull/26459)

Noticing that there were no tests for when **ActiveRecord::Enum#enum** was called with a specific suffix, this contributor added some.

### [Improve the Rails Guides](https://github.com/rails/rails/pull/26478)

Better documentation is always welcome. After seeing [issue #26286](https://github.com/rails/rails/issues/26286), this contributor helpfully improved the documentation for the **render partial 'as'** option.

### [Add a bug report template](https://github.com/rails/rails/pull/26488)

The commit message says it all: _"I created this for testing migrations in isolation and thought it would be helpful to others in the future to avoid having to dig through the Rails migration tests."_

### [Remove duplicate code](https://github.com/rails/rails/pull/26462)

This **elsif** branch was a duplicate of the **else** branch just after it. You'll never believe what happened next 😮.

## How to inherit a world of unlimited imagination 🍭

That's it for today's tour, but the true journey has only just begun.
  
Starting today, choose any file in the [Rails codebase](https://github.com/rails/rails) and read it.  
  
Pick an [open issue](https://github.com/rails/rails/issues) on the master branch, and try to reproduce the bug using the [Rails bug report templates](https://github.com/rails/rails/tree/master/guides/bug_report_templates).
  
Go through the [Contributing to Ruby on Rails Guide](http://edgeguides.rubyonrails.org/contributing_to_ruby_on_rails.html). Set up your Rails test environment.
  
Pick an [open pull request](https://github.com/rails/rails/pulls) and test it or review it.  
  
You'll be surprised what baby steps like these can lead to!
  
Enjoy the wonderful chocolate -- and see you next week.

