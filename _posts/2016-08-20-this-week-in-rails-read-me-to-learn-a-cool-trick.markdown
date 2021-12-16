---
layout: post
title: "This Week in Rails: Read Me To Learn A Cool Trick™!"
categories: news
author: chancancode
published: true
date: 2016-08-20
---

This is [Godfrey](https://twitter.com/chancancode), reporting in from Portland, OR. We have a lot to cover this week, let's dive right into the stories so you can go back to watching Olympics!  
  
👀  
👅

## Cool Trick™

### [Router Visualizer](https://github.com/rails/rails/pull/26156)

Have you ever wondered what happens when you visit a URL (say **/posts/5** ) in your Rails app? How does the Rails router know where to send your users?  
  
The first (of many) step is to compare the URL against the routes table for potential matches. To make this lookup as fast as possible, the routes table is pre-compiled into a [finite state machine](https://en.wikipedia.org/wiki/Finite-state_machine), specifically a [nondeterministic finite automaton (NFA)](https://en.wikipedia.org/wiki/Nondeterministic_finite_automaton).  
  
If that sounds very intimidating, don't worry! The Rails router actually comes with a debugging tool that could generates an [interactive visualization](http://tenderlove.github.io/fsmjs) of your router NFA.  
  
To generate one for your app, simply run **Rails.application.routes.router.visualizer** from your Rails console and save the returned string into an html file. (You will need the **dot** command-line tool for this – OS X users can get it from homebrew with **brew install graphviz.** )  
  
...  
  
Oh, is it not working? I forgot to mention that this tool is broken on Rails 5 by an internal refactor. Don't worry though, because Seth fixed it for us in this pull request, which would come out with the next 5.0 patch release. If you are impatient, you could try it out by running the 5-0-stable branch.  
  
Before you build your next billion-dollar startup with this awesome tool, please note that this is an undocumented ( **private!** ) API, and as you can see, could break unexpectedly between versions (or go away entirely).  
  
While it's definitely not Production Grade™ software, it's still very useful for learning and debugging purposes. Enjoy it while it lasts!

## New Stuff

### [Optional schema.rb Alignment](https://github.com/rails/rails/pull/25675)

When dumping the schema, Rails tries to align things vertically for readability. However, this could result in a bigger diff than you would like when making changes to an existing table. With this PR, you now have an option to turn that off!

### [Controller Tests Now Supports `as` Option](https://github.com/rails/rails/pull/26212)

While integration tests are [strongly preferred](https://github.com/rails/rails/pull/25862) over controller tests going forward, this PR allows you to simulate a request content type in controller tests using the same **as: :json** (or **as: :xml** , and so on) option.&nbsp;

### [`retry_on` Gets A Job](https://github.com/rails/rails/commit/a1e4c197cb12fef66530a2edfaeda75566088d1f)

Active Job's **retry\_on** API can now access to the job instance that failed, in addition to the exception object.

### [Make `touch_later` Respects `no_touching`](https://github.com/rails/rails/pull/26183)

The **no\_touching** API now composes correctly with **touch\_later** as you would expect.

### [Query With Arrays and Ranges](https://github.com/rails/rails/pull/26074)

With this PR, you will be able to pass an Array or Range object to **where(some\_column: ...)**&nbsp;when querying an array/range column, assuming your database supports those column types.

### [Fix Upgrade Task Documentation](https://github.com/rails/rails/pull/26176)

This is a periodic PSA that when it comes to upgrading Rails apps, the update task is going to be your friend. In Rails 5, this command has been renamed to **rails app:update** , whereas when upgrading to Rails 4.2 and below, you would want to use **rake rails:update** instead.  
  
See the [upgrade guide](http://edgeguides.rubyonrails.org/upgrading_ruby_on_rails.html#the-update-task) for more details.

## In Case You Missed It...

### [Active Job Defaults To Async Adapter](https://github.com/rails/rails/pull/26214)

In case you missed it, Active Job in Rails 5 defaults to using the "async" adapter for jobs processing (the previous default was the "inline" adapter). The documentation has been updated to reflect that change.

## Wrapping Up 

That's it from This Week in Rails! As always, there were a lot more changes than we have room for. If you are interested, definitely go&nbsp;[check them out](https://github.com/rails/rails/compare/master@%7B2016-08-06%7D...@%7B2016-08-12%7D)&nbsp;yourself!

Until next week!

