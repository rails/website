---
layout: post
title: ! 'Rails 0.9.2: End of requiring models, models in sessions, lots of fixes'
categories: []
author: admin
published: true
date: 2004-12-24 15:07:25.000000000 +00:00
---
<p>Thanks to the powers of const_missing, you no longer need to explicitly require models that reside in their own files. They’ll spring to life automatically, which is very helpful for inheritance where you’re documenting the dependency using subclassing already and for instant use of models in script/console. It’s now also safe to place models in sessions without worrying about stale association caches—they’re cleared at the end of each request. In addition, there are about 33 other fixes, changes, and features in this release.</p>