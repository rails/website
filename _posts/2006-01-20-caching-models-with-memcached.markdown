---
layout: post
title: Caching models with memcached
categories:
- tools
author: David
published: true
date: 2006-01-20 16:30:05.000000000 +00:00
---
<p>The Robot Co-op has <a href="http://dev.robotcoop.com/Libraries/">released</a> their memcache-client and a plugin for Active Record that uses it. This enables you to cache  your models in the distributed memory cache and not hit your database for repeat visits all the time. They use this to power <a href="http://www.43things.com">43things</a> and the rest of their social suite.</p>