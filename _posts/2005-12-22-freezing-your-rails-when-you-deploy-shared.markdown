---
layout: post
title: Freezing your Rails when you deploy shared
categories:
- tricks
author: David
published: true
date: 2005-12-22 21:03:39.000000000 +00:00
---
<p>If you&#8217;re running a Ruby on Rails application on a shared host, it&#8217;s super-double-plus recommended to freeze your Rails. Freezing your Rails means putting the framework into vendor/rails instead of floating with whatever gems that are installed on the host. Because if you do so, you&#8217;ll automatically be upgraded when they are. Not a great thing for a production application to have forced upon itself.</p>
<p>The great news is that this is silly simple. If you&#8217;re running 0.14.x or newer, you can simple do <code>rake freeze_gems</code>, and the current gems the system is used are unpacked into vendor/rails. Now the host can update as silly as it wants without affecting your application.</p>