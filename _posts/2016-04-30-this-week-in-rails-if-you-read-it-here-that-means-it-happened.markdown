---
layout: post
title: "This Week In Rails: If You Read It Here, That Means It Happened"
categories: news
author: chancancode
published: true
date: 2016-04-30
---

![Kansas City 2016](https://camo.githubusercontent.com/a74445f73cae78865aa123ccc84a7d09a078485f/687474703a2f2f636c2e6c792f673163352f6b616e73617363697479323031362e706e67)

Dear Mayor,

Welcome to _Kansas City_! This is your advisor [Godfrey](https://twitter.com/chancancode). Since you are new here, it must be a bit overwhelming for you. Don't worry, I'm here to help you do your job. Let's get to it!

## Featured

### [1000 Commit Pile-Up Results In New Beta Release](https://rubyonrails.org/2016/4/28/Rails-5-0-beta4)

Rails 5.0.0.beta4 was released this week. Based on the increasing version numbers, I speculate the core team is working towards a 5.0.0.RC1 release and eventually a 5.0.0 final release. I recommend you try out the beta release on our apps.

### [Rails Repository Receives New Commits](http://contributors.rubyonrails.org/contributors/in-time-window/20160423-201604029)

According to sources close to the development, 34 contributors were seen submitting patches to the Rails code base this week. From what I can tell, this appears to be a good sign.

## RailsConf

### [Kansas Dresses Up In Color In Anticipation Of RailsConf](http://railsconf.com)

Our plans to import colors from Oz have worked – I am proud to say Kansas is no longer black and white. I recommend that you install the [Guidebook app](https://guidebook.com/g/railsconf2016) ahead of the conference. You might also want to sign up for the [workshops](http://railsconf.com/program/workshops) too – see the official welcome email in your inbox for details.

### [Tapped Out: Local Breweries Close Doors](http://railsconf.com/program/parties)

We are not interested in recycling the dishwater or taking 30-second showers. Worse than that, some of the sponsors have planned parties for the attendees. How can we call ourselves a decent city if we can't accommodate that?

Put some drink in your think, Mayor, and get us some water.

### [Majority Of Rails Users Not Attending RailsConf, Poll Indicates](http://confreaks.tv/events/railsconf2016)

Despite already accommodating well over a thousand attendees, our polls have shown the majority of Rails users will not be able to attend the conference.

To prevent a public outcry, I advised the conference organizers to record all talks and make them available on this website after the conference.

They are planning to live stream the keynotes as well, although I heard [the secret URL](http://confreaks.tv/live/railsconf2016) won't be up until next Wednesday. I can hear the sound of F5 buttons cracking up from here.

## New Stuff

### [Local Scientist Discovers New Methods To Manipulate Time](https://github.com/rails/rails/commits/@%7B2016-04-30%7D/activesupport/CHANGELOG.md?author=pixeltrix)

In a series of experiments to research _[Swearing as a response to pain](http://www.mzellner.com/page4/files/2009-stephens.pdf)_, a local scientist has discovered some new methods to manipulate time by accident. As a result of this new discovery, these core extension methods will be available in Active Support 5.

### [Rails Users Add "Week" and "Hour" To Their Vocabulary](https://github.com/rails/rails/pull/24762)

Also new to Active Support, Rails users will soon be able to express themselves in these newfound vocabularies.

## Improved

### [Faster Code Found To Perform Better Under Load](https://github.com/rails/rails/pull/24723)

A scientific study to end the decade-old debate in the programming community has concluded in a surprising twist. The report declared that faster code _does_ seem to perform better, after all.

As a follow up to the research, this contributor was the first to apply the new optimization technique to `Array#split`. The work has resulted in some performance gains, contrary to everyone's expectations.

### [Typos Hram Readablity According To Linguists](https://github.com/rails/rails/commits/master@%7B2016-04-30%7D/guides)

A group of linguists gathered in town to discuss the merits of semicolons. During a panel discussion, they have reached consensus that typos can indeed reduce readability.

Coincidentally, this week the Rails Guides have received a flurry of changes that improved their readability.

My recommendation? We should sit down and fix the typos in our city bylaws some day.

## Fixed

### [ShareLock Fix Mistaken For Sherlock Holmes](https://github.com/rails/rails/commit/65b6496ee4cf62be4c43ff21572e03a5e9cedac1)

It is well-known in the computer science community that concurrency is hard. This patch that just landed on Rails master is the perfect example to illustrate why – in an attempt to fix a bug in Active Support's `ShareLock` class, the patch was briefly misidentified as Sherlock Holmes, causing a brief delay and a race condition.

### [Survey: Rails Users Find Double Loading Loading Unnecessary](https://github.com/rails/rails/pull/24653)

Recently, an audit discovered that Rails sometimes loads the database schema twice. According to a survey, most Rails users do not find this necessary, leading to the "feature" being removed from master this week.

## Not Fixed

### [JRuby Builds: "Too Flaky To Be Useful"](https://github.com/rails/rails/commit/ea628f72c3f6ef77752794356fcb358858fd8827)

I have an unfortunate piece of news for you, Mayor. The JRuby builds have been temporarily flagged as allowed to fail on Rails' CI servers. If you know anyone who works with JRuby, we could use some help identifying and fixing the root causes here.

## Mystery

### [Regexp Experts Debates "Left To Right Or Right To Left; Is One Better?"](https://github.com/rails/rails/commit/bbb84a17213d60f25a61ae4a09111d5adac01a05)

Despite promising results from last week, the researchers involved have backtracked their claims on the performance benefits associated with this change. Based on my negative lookahead, I believe [this issue](https://github.com/rails/rails/pull/24658) will remain a source of huge debate among the experts in the foreseeable future.

## Wrapping Up

That concludes my report for this week. There were plenty of other things going on, so feel free to jump in and [check them out yourself](https://github.com/rails/rails/compare/master@%7B2016-04-23%7D...@%7B2016-04-29%7D).

See you next week at RailsConf!

