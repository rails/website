---
layout: post
title: "Rails 5.2.0 and 5.1.5 release candidates, marshaling performance and more!"
categories: news
author: kaspth
published: true
date: 2018-02-04
---

Hey there, news attenuated people of planet Rails! It's your trusty prudent editor / local dimwit [Kasper](https://twitter.com/kaspth) here with This Week in Rails. As always we both cover and cower at the highlight reel of Rails' past week.  
  
Lets slow our roll a bit to pursue what's meaningful not merely what's expedient!

### [Help test Rails 5.2.0.rc1 and 5.1.5.rc1](https://rubyonrails.org/2018/1/30/Rails-5-2-RC1-Active-Storage-Redis-Cache-Store-HTTP2-Early-Hints-Credentials)

This week came the release candidate of the next Rails release. Bundle it, run your tests, boot a server — maybe even try it a bit in production. That'll really help ensure 5.2.0 is solid gold.  
  
If you're not 5.2 ready yet, Rails [5.1.5.rc1](https://rubyonrails.org/2018/2/1/Rails-5-1-5-rc1-has-been-released) is also ready to test.

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20180126-20180204)

29 contributors crossed the tangled weave of the web this week to get their commits lobbed straight on to Rails' master branch. That master branch, by the way, is now [targeting Rails 6.0](https://github.com/rails/rails/commit/1c383df324fdf0b68b3f54a649eb7d2a4f55bcb7).

### [Disable CSP by default](https://github.com/rails/rails/commit/39c4a5c40b3abde1d3dee76a3ccdd326f77f60b0)

Rails 5.2 ships with a DSL to declare Content Security Policies. The default policy interfered with Rails' UJS and required some extra that the team didn't have time for to do now. So the aim is to have a default security policy in place for Rails 6.0.

### [Active Record: recovers marshaling performance](https://github.com/rails/rails/pull/31827)

Loading and dumping marshaled Active Record instances is now back to the speeds they were at in Rails 4.2. Peachy keen.

### [X-Request-Id respects Apache's @-signs](https://github.com/rails/rails/pull/31815)

Apache X-Request-Id headers can contain @-signs.&nbsp;While I don't wanna speak out of school, I do feel quite comfortable yelling: WHY SHOULD THEY HAVE ALL THE FUN! So now we can flaunt that ability too. don't @ me, though.

That's it for this week. Many more changes were introduced to Rails than were featured here, check out the [full week of commit activity](https://github.com/rails/rails/compare/master@%7B2018-01-26%7D...@%7B2018-02-04%7D) to learn more!  
  
Until next time!
