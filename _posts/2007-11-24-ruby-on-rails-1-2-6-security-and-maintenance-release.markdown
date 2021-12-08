---
layout: post
title: ! 'Ruby on Rails 1.2.6: Security and Maintenance Release'
categories: []
author: michael
published: true
date: 2007-11-24 22:18:00.000000000 +00:00
---
<p>The rails core team has released ruby on rails 1.2.6 to address a bug in the fix for session fixation attacks (<span class="caps">CVE</span>-2007-5380). The <span class="caps">CVE</span> Identifier for this new issue is <span class="caps">CVE</span>-2007-6077.</p>
<p>You should upgrade to this new release if you do not take specific session-fixation counter measures in your application.   1.2.6 also fixes some regressions when working with has_many associations on unsaved ActiveRecord objects.</p>
<p>As with other 1.2.x releases, this is intended as a drop in upgrade for users of earlier versions in the 1.2 series.</p>
<p>To upgrade, `gem install rails`, set RAILS_GEM_VERSION to &#8216;1.2.6&#8217; in config/environment.rb, and `rake rails:update:configs`.</p>