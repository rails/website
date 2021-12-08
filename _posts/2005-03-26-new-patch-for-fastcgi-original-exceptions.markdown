---
layout: post
title: New patch for FastCGI original exceptions
categories:
- documentation
author: admin
published: true
date: 2005-03-26 14:02:35.000000000 +00:00
---
<p>It would seem that I linked to an old patch for getting the original exception bubbled on a FastCGI crash. The old patch just raised <span class="caps">FCGI</span> System Error and not the original exception. I&#8217;ve <a href="http://weblog.rubyonrails.com/archives/2005/03/22/plugging-the-memory-leaks-in-fastcgi-085/">updated the link</a> to point to the <a href="http://www.rubyonrails.com/media/patches/fastcgi_0-8-5_original_exception.diff">new patch</a>.</p>