---
layout: post
title: Pound makes lighty and Mongrel play nice
categories:
- tricks
author: David
published: true
date: 2006-07-03 17:02:00.000000000 +01:00
---
<p>With the rocket rise of <a href="http://mongrel.rubyforge.org">Mongrel</a>, we&#8217;ve seen a growing number of folks jump ship from lighttpd to Apache 2.2 because of <a href="http://httpd.apache.org/docs/2.2/mod/mod_proxy_balancer.html">mod_proxy_balancer</a>. It&#8217;s great to see that Mongrel is putting Apache back on the map as a premiere Rails web server, but unless you desire Apache for other reasons, you certainly don&#8217;t <em>have</em> to jump ship.</p>
<p>The trouble with lighttpd is the state of its mod_proxy implementation, which leaves a lot to be desired when used as a balancer between multiple Mongrel backends. But because the whole Rails deployment stack is going straight <span class="caps">HTTP</span>, it&#8217;s surprisingly easy to rectify. All you need is to add a more capable load balancer to the mix and you&#8217;re golden.</p>
<p>One such balancer that has seen a lot of play lately is <a href="http://www.apsis.ch/pound/">Pound</a> (<a href="http://lifecoding.com/blog/?p=29">OS X install notes</a>). It&#8217;s light, fast, and proven on mega sites. So here&#8217;s what you do if want to stay with lighttpd and still use Mongrel:</p>
<ul>
	<li>Setup lighttpd on port 80 with mod_proxy to point at one back-end server (see the <a href="http://mongrel.rubyforge.org/docs/lighttpd.html">Mongrel lighty docs</a>, but just only use one backend instead of four).</li>
	<li>Setup Pound on a high port, like 7999, and make it point to any number of Mongrel processes (see the <a href="http://mongrel.rubyforge.org/docs/pound.html">Mongrel Pound docs</a>).</li>
	<li>Start n number of Mongrels, from say port 8000 through 8002, using either mongrel_cluster or the soon-to-be-committed Mongrel-compatible script/process/spawner</li>
</ul>
<p>And bingo, you should now have a production-ready stack ready to take on the world. This is a pretty good outline of how we at 37signals intend to use Mongrel in production shortly.</p>
<p>You can also take pleasure in the fact that Jan Knesche is busy at work making the Pound crutch unnecessary. Over the Summer, he has promised to elevate mod_proxy to be on par with the competition, and this three-way stack should again become a two-way one.</p>