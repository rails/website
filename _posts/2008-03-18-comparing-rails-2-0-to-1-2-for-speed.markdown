---
layout: post
title: Comparing Rails 2.0 to 1.2 for speed and memory
categories:
- sightings
author: David
published: true
date: 2008-03-18 19:23:00.000000000 +00:00
---
<p>Hongli Lai has <a href="http://izumi.plan99.net/blog/index.php/2008/03/18/performance-comparison-rails-126-vs-202/">compared a dummy scaffold application from Rails 1.2 to Rails 2.0</a> and found the latter to be 30-50% faster. That&#8217;s great to see.</p>
<p>But what I think is even more interesting is the progress we&#8217;ve been making on performance optimizations for more substantial applications. Rails 2.0 made a lot of progress for applications with lots of assets and for ones with big routes.rb files. The forthcoming Rails 2.1 will move things forward even further.</p>
<p><span class="caps">UPDATE</span>: Hongli also investigated <a href="http://izumi.plan99.net/blog/index.php/2008/03/19/memory-usage-comparison-rails-126-vs-202/">memory consumption on 1.2 vs 2.0</a> and found 2.0 to be significantly slimmer. Nice!</p>