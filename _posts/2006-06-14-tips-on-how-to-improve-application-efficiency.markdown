---
layout: post
title: Tips on how to improve application efficiency
categories:
- sightings
- documentation
- tricks
author: marcel
published: true
date: 2006-06-14 18:51:00.000000000 +01:00
---
<p>Rails performance specialist Stefan Kaes, who writes extensively about optimizing Rails over at <a href="http://railsexpress.de/blog/">Rails Express</a> has a lengthy article at the new <a href="http://www.infoq.com/">InfoQ</a> site called <a href="http://www.infoq.com/articles/Rails-Performance">A Look at Common Performance Problems in Rails</a>.</p>
<p>Kaes identifies various development practices that will slow down your Rails applications, such as repeating computations that only need to be run once and then cached. If you&#8217;ve located some slowness in your application, Kaes may have already identified some of the likely culprits.</p>