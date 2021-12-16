---
layout: post
title: Ruby on Rails 2.3.8 Released
categories:
- releases
author: Jeremy Kemper
published: true
date: 2010-05-25 04:52:00.000000000 +01:00
---
<p>The <a href="https://rubyonrails.org/2010/5/24/ruby-on-rails-2-3-7-released">2.3.7 release</a> slipped out the door too hastily. Fixing compatibility with the rails_xss plugin inadvertently forced everyone to use it. Facepalm.</p>
<p>I apologize for wasting a chunk of your day on installing what ought to have been a patch-level update only to find it breaks your app. That&#8217;s well out of line with our stable release process and it&#8217;s my fault for stepping out of it. I got caught up in a sky-is-falling response to a 2.3.6 bug that affected a handful of users and responded with a fix that exposed a new flaw to nearly all users, despite testing and sanity checking.</p>
<p>Thanks for all your feedback today. We hear you, and yes, a thousand times yes. Every stable release, including point releases, deserves the same methodical drumbeat on its march from git stable to to .pre gem to final gem. Expect no less.</p>
<p>Now, on to the gem-cutting: Rails <a href="http://rubygems.org/gems/rails/versions/2.3.8">2.3.8</a> is available now, <a href="http://github.com/rails/rails/compare/v2.3.7...v2.3.8">bringing us back</a> to stable ground.</p>