---
layout: post
title: The rise of lighttpd as the alternative web server
categories:
- horizon
author: admin
published: true
date: 2005-02-08 22:28:42.000000000 +00:00
---
<p>Apache has long appeared to be the only viable show in town for your Rails&#8217; web serving needs when it comes to running a production system. Of course, there has always been many others, but beside my brief fling with <a href="http://www.acme.com/software/thttpd/">thttpd</a>, I&#8217;ve never actually been terribly interested in an alternative. That was before discovering <a href="http://www.lighttpd.net/">lighttpd</a>.</p>
<p>Where Apache is the swiss army knife of web serving, and a <i>great</i> swiss army knife, lighttpd is much lighter and focused. It&#8217;s driven by a single lead developer that&#8217;s incredibly available (now where did I see that work before&#8230;) and has pretty much all the features you need to make a great web server for Rails applications.</p>
<p>What made me particularly interested is the <a href="http://www.lighttpd.net/documentation/fastcgi.html">strong <span class="caps">FCGI</span> support</a>, which includes a built-in load balancer to have a single lighttpd process be the entry point to multiple <span class="caps">FCGI</span> application servers behind it. In other words, you can scale up without getting a hardware based load balancer, doing round-robin <span class="caps">DNS</span>, or running a web server on the application servers themselves.</p>
<p>Today I was playing around with a single lighttpd process playing gateway to <span class="caps">FCGI</span> processes on four different application servers. The flexibility that gives to plug in another server into your cluster and be running in no time at all is pretty impressive.</p>
<p>Conveniently enough, <a href="http://one.textdrive.com/pipermail/rails/2005-February/002641.html">Routes</a> is going to rid Rails of the mod_rewrite dependency and open up the caching framework to run without complicated rewriting rules, which in turn means that it&#8217;ll work on lighttpd (and other web servers). And I&#8217;m doing my best to make Rails friendly to lighttpd and lighttpd friendly to Rails in my experiments running Basecamp and Ta-da List on it. Jan Kneschke is doing a great job already to help push that integration tighter.</p>
<p>So if you&#8217;re looking at an easier way to scale your Rails application, then you might be interested in looking into lighttpd already. And you&#8217;ll certainly be interested once the early adopters have had the time to familiarize us fully with it, document the process, and adapt the software.</p>
<p>Jason Hoffman of <a href="http://www.textdrive.com/">TextDrive</a> also has a great post about lighttpd in <a href="http://textdrive.com/weblog/article/25/should-i-consider-lighttpd">Should I consider lighttpd?</a></p>