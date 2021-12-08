---
layout: post
title: Composite primary keys for Active Record
categories:
- sightings
author: David
published: true
date: 2006-07-30 16:37:00.000000000 +01:00
---
<p>Dr Nic Williams has charged one of the major strongholds of legacy database compatibility with Rails, <a href="http://compositekeys.rubyforge.org/">composite primary keys support</a>. By installing his nimble plugin, you get a very natural <span class="caps">API</span> for mapping those blasted composites using <code>set_primary_keys</code> and an array of keys.</p>
<p>It&#8217;s still a work in progress, but if you have to deal with a legacy database and want to use Rails, this might just be your ticket in.</p>