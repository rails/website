---
layout: post
title: Compiling the MySQL C-bindings under Tiger
categories:
- documentation
author: admin
published: true
date: 2005-07-11 07:47:22.000000000 +01:00
---
<p>OS X 10.4 Tiger ships with <span class="caps">GCC</span> 4.0, which not all software is ready to accept a compilation by. The MySQL C-bindings is such a piece of software, so before doing &#8220;sudo gem install mysql&#8221; be sure that you do a &#8220;sudo gcc_select 3.3&#8221; (you can switch back afterwards, if you fancy).</p>