---
layout: post
title: SwitchTower and shells
categories:
- tricks
- tools
author: jamis
published: true
date: 2005-12-27 19:19:00.000000000 +00:00
---
<p>Having problems getting SwitchTower to work? So was Ryan Heneise, until he discovered that he <a href="http://www.artofmission.com/articles/2005/12/27/switchtower-gotcha">wasn&#8217;t using a supported shell on the remote host</a>. If the remote hosts are reporting syntax errors when you try to execute a task, make sure you&#8217;re using a <a href="http://en.wikibooks.org/wiki/Guide_to_UNIX/Explanations/Choice_of_Shell"><span class="caps">POSIX</span>-compatible</a> shell (although hopefully this restriction will be lifted in the near-ish future).</p>