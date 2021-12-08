---
layout: post
title: ! 'Rails 2.0.4: Maintenance release'
categories:
- releases
author: David
published: true
date: 2008-09-03 09:43:00.000000000 +01:00
---
<p>Thanks to Git it&#8217;s been a lot easier to maintain older branches of the code base, so we&#8217;ve taken the opportunity to backport a bunch of bug fixes to the 2.0 branch and here&#8217;s the release for that.</p>
<p>The only major issue is that we&#8217;ve fixed the <span class="caps">REXML</span> DoS vulnerability with a monkey patch that ships in the box. So if you&#8217;re on 2.0 and haven&#8217;t dealt with the issue already, you can upgrade to 2.0.4 and get it fixed.</p>
<p>You can install with: <code>gem install rails --version 2.0.4</code></p>
<p><a href="http://gist.github.com/8565">See all the changes</a></p>
<p><b><span class="caps">UPDATE</span>:</b> The actual 2.0.4 gem didn&#8217;t get published yesterday due to a bug in the release script. It&#8217;s been fixed and 2.0.4 is actually available on the main gem repository. Sorry about that!</p>