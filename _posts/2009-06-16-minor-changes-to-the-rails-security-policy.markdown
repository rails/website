---
layout: post
title: Minor Changes to the Rails Security Policy
categories: []
author: michael
published: true
date: 2009-06-16 09:37:00.000000000 +01:00
---
<p>After reviewing the feedback on the two recent security announcements we&#8217;ve made a few minor changes to the <a href="https://rubyonrails.org/security">Ruby on Rails security policy</a>.</p>
<p>The first change we&#8217;ve made is to include more information on what to do if you don&#8217;t receive a response from the security team.  In general reports to the security address should receive a response within 24 hours, however the sheer volume of spam to the address can, and has, lead to messages being caught in spam filters.  In the event you don&#8217;t receive a response there are now two direct-emails to the people currently looking after security reports.  That page will be kept up to date as responsibilities are reassigned.</p>
<p>The second change is to more clearly outline the announcement policy for rails vulnerabilities.  In short, we notify vendor-sec ahead of the public notification to allow time for people distributing rails to prepare packages for their distributions.  Then when the time has come for public notification an email is sent to the <a href="http://groups.google.com/group/rubyonrails-security">security announcement list</a>.  Finally the announcement is posted to this blog.</p>
<p>The security announcement list is <strong>extremely</strong> low volume and you&#8217;re <strong>strongly</strong> suggested to subscribe to it.  This is the place which receives the first public announcements of all vulnerabilities in Rails, and also tends to receive additional notifications about vulnerabilities in ruby itself.   We&#8217;ve been using this list for several years but judging by confusion and misinformed comments following the announcement of <span class="caps">CVE</span>-2009-1904, not enough people were aware of its existence.</p>
<p>If you have any comments on the security policy, please send them via email to <a href="mailto:security@rubyonrails.org">security@rubyonrails.org</a>.</p>