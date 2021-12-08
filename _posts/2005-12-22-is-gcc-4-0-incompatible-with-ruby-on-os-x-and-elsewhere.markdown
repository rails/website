---
layout: post
title: Is GCC 4.0 incompatible with Ruby on OS X (and elsewhere)?
categories:
- sightings
author: David
published: true
date: 2005-12-22 20:42:03.000000000 +00:00
---
<p>We&#8217;ve been receiving various reports of intermittent errors while running Rails applications and regular Ruby stuff that goes something like this: &#8220;undefined method &#8216;include?&#8217; for -517611318:Fixnum&#8221;.</p>
<p>It appears that this might be a problem with <span class="caps">GCC</span> 4.0-compilations of Ruby. Most platforms are still using <span class="caps">GCC</span> 3.3, so they don&#8217;t see the problem. But on OS X, <span class="caps">GCC</span> 4.0 is now default if you&#8217;ve installed the recent Xcode. To switch back to <span class="caps">GCC</span> 3.3, do: <code>sudo gcc_select 3.3</code> and then recompile Ruby.</p>
<p>We&#8217;ve love to get more reports and evidence on what exactly the problem is. Perhaps we can get it fixed in time for Ruby 1.8.4. Please use the comments.</p>