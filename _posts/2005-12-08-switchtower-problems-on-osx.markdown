---
layout: post
title: SwitchTower problems on OSX
categories:
- tricks
author: jamis
published: true
date: 2005-12-08 17:31:20.000000000 +00:00
---
<p>This has been coming up often enough that it deserves to be posted somewhere visible. If you are trying to use SwitchTower with the stock version of Ruby that ships with <span class="caps">OSX</span>, you will fail. The stock <span class="caps">OSX</span> version of Ruby has a bad OpenSSL module, which wreaks all kinds of havoc with SwitchTower.</p>
<p>The solution is to install a non-stock version of Ruby, either via <a href="http://darwinports.org/">DarwinPorts</a>, or <a href="http://fink.sourceforge.net/">Fink</a>, or even just the good-old manual &#8220;configure/make/make install&#8221; process.</p>