---
layout: post
title: Watch for huge requests on default FCGI
categories:
- tricks
author: admin
published: true
date: 2005-01-03 18:04:10.000000000 +00:00
---
<p>As you might have noticed, <a href="http://43things.com/">43things</a> have been down for the count a few times since launch with nasty 500&#8217;s. The cause was the combination of default <span class="caps">FCGI</span> settings and a bad-ass <span class="caps">RSS</span> query that pulled out everything from the system at once and took up a couple of pages in the log.</p>
<p>That action couldn&#8217;t be rendered within the 30 second limit that <span class="caps">FCGI</span> imposes by default, so Apache suspended the connection to <span class="caps">FCGI</span> and caused hits to that particular <span class="caps">FCGI</span> process to go out of commission.</p>
<p>Lessons learned&#8230;</p>
<ol>
	<li>Make sure you don&#8217;t have any actions that take longer than the timeout limit in <span class="caps">FCGI</span></li>
	<li>Increase the default timeout limit if you have actions that you expect to take close to 30 seconds or more</li>
</ol>