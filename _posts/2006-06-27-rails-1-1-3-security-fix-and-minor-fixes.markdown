---
layout: post
title: ! 'Rails 1.1.3: Security fix and minor fixes'
categories:
- releases
author: David
published: true
date: 2006-06-27 20:07:00.000000000 +01:00
---
<p>We&#8217;ve found and fixed a security issue with routing that could cause excess <span class="caps">CPU</span> usage in Rails processes when triggered by certain URLs. We strongly encourage anyone running 1.1.x to upgrade to the latest version. It&#8217;s fully backwards compatible and should serve as a small drop-in fix.</p>
<p>If you&#8217;re running the latest Edge Rails, though, there&#8217;s no need to update. We&#8217;ve rewritten the routes functionality on edge and the new version doesn&#8217;t have this problem.</p>
<p>To upgrade, you as always can just do: <code>gem install rails --include-dependencies</code></p>
<p>Note: This release doesn&#8217;t include any of the new <span class="caps">CRUD</span>/resource-based features. All of the new features we&#8217;ve been working on over the last couple of months will become available in 1.2.0, which is scheduled for &#8220;soonish&#8221;. This 1.1.3 release is purely to address the security issue and another few minor fixes that were available on the <span class="caps">STABLE</span> branch as well.</p>