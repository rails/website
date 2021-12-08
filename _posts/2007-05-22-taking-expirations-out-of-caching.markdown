---
layout: post
title: Taking expirations out of caching
categories:
- tricks
author: David
published: true
date: 2007-05-22 16:07:00.000000000 +01:00
---
<p>It&#8217;s been said that the two last hard problems in programming are naming things and expiring caches. The first is going to be hard to sidestep entirely, but what if we could the second? Tobi arrived at a eureka moment for just that using Memcached and various kinds of caching. Instead of manually expiring things, just ask for a specific version, and let the caching engine take care of dumping that which isn&#8217;t used any more.</p>
<p>Read more on <a href="http://blog.leetsoft.com/2007/5/22/the-secret-to-memcached">The Secret to Memcached</a>.</p>