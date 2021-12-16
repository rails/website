---
layout: post
title: "Rails 6.0.2.rc1, 5.2.4, and something different…"
categories: news
author: kaspth
published: true
date: 2019-12-01
---

Hey readers! This is [Kasper](https://twitter.com/kaspth) bringing you the latest news in Rails. I'm writing from deep winter-like Copenhagen, starting on the last month of the decade.  
  
Speaking of progress, Rails recently crossed 75.000 commits on GitHub. Last time we marked commit progress was over 4 years ago for 50.000. I happened to write that issue too, you can&nbsp;[read it here](https://rubyonrails.org/2015/3/7/this-week-in-rails-50-000-commits-gsoc-opportunity-and-more).

### [Rails 6.0.2.rc1 released](https://rubyonrails.org/2019/11/27/Rails-6-0-2-rc1-has-been-released)

As always, this release is loaded with fixes and improvements. It's currently set to ship Monday Dec 2 and so far no regressions have been found as far as I know. Final day to test the release candidate on your app, try it out ✌️

### [Rails 5.2.4 released](https://rubyonrails.org/2019/11/27/Rails-5-2-4-has-been-released)

The final bug fix release of Rails 5.2, now it'll only get security releases from here on out. Good time to plan a Rails 6 upgrade.

### [Something different this issue…](https://github.com/rails/rails/compare/master@%7B2019-11-16%7D...@%7B2019-12-01%7D)

For the most part we highlight particular interesting commits in this newsletter, but there's usually other stuff we don't get to. Stuff that could help you make sense of Rails itself. This week I'd like to try to remedy that.  
  
[Here's all changes](https://github.com/rails/rails/compare/master@%7B2019-11-16%7D...@%7B2019-12-01%7D) since last time. Visit the link and each time you see "Merge pull request #12345", click 'em. Feel free to see Files Changes and on particularly interesting files, you can try "View File" and read some surrounding code. This can be overwhelming so go easy. But that's pretty much a fine way to start reading Rails' actual code. It's all Ruby all the way down.  
  
Now, some of the people in the list are on certain Rails teams. You'll likely interact with some of them if you submit a pull request. Here's who's in the current change list, but not the full teams.  
  
[carlosantoniodasilva](https://github.com/rails/rails/commits?author=carlosantoniodasilva), [eileencodes](https://github.com/rails/rails/commits?author=eileencodes), [georgeclaghorn](https://github.com/rails/rails/commits?author=georgeclaghorn), [kaspth](https://github.com/rails/rails/commits?author=kaspth) (that's me), [rafaelfranca](https://github.com/rails/rails/commits?author=rafaelfranca) are on Rails Core. [gmcgibbon](https://github.com/rails/rails/commits?author=gmcgibbon), [jhawthorn](https://github.com/rails/rails/commits?author=jhawthorn), [kamipo](https://github.com/rails/rails/commits?author=kamipo) and [y-yagi](https://github.com/rails/rails/commits?author=y-yagi) have commit access. Meanwhile [eugeneius](https://github.com/rails/rails/commits?author=eugeneius) and [vipulnsward](https://github.com/rails/rails/commits?author=vipulnsward) are on the issues team, so they can triage issues and merge documentation PRs.  
  
That's it for now, hope it's useful 🙌

Also&nbsp;[41 people contributed](https://contributors.rubyonrails.org/contributors/in-time-window/20191116-20191201) since last time including several first time contributors.  
  
Hope you dig it. See ya next time! 👋🏻
