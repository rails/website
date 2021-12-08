---
layout: post
title: Unobtrusive Javascript Plugin
categories:
- sightings
- tricks
- tools
author: rick
published: true
date: 2006-08-21 16:36:00.000000000 +01:00
---
<p><a href="http://www.vivabit.com/bollocks">Dan Webb</a> and <a href="http://www.lukeredpath.co.uk/">Luke Redpath</a> have release the latest version of their <a href="http://www.ujs4rails.com/2006/8/21/announcing-ujs-rails-plugin-0-3">Unobtrusive Javascript Plugin</a> for Rails.  It solves several of the main problems people run into when working with unobtrusive javascript:</p>
<ul>
	<li>Development isn&#8217;t as intuitive with Rails when you&#8217;re defining your custom javascript behaviors in an external file.</li>
	<li>When working with pages with lots of images and content, the behaviors won&#8217;t be enabled until everything is downloaded and window.onload is called.  It&#8217;s been solved with some <a href="http://dean.edwards.name/weblog/2006/06/again/">nasty cross-browser javascript hacks</a>, all handled transparently by Dan&#8217;s LowPro extension for prototype.  This has been a big deal for me personally, so it&#8217;s nice to see it all solved.</li>
</ul>
<p><span class="caps">UJS</span> attempts to solve this by taking defined behaviors in the view and creating a tailored javascript file for it.  Smart conditional <span class="caps">GET</span> and page caching techniques can be used to save bandwidth and time.</p>
<p>All in all, it looks like Dan and Luke did an excellent job on the plugin.  Anyone using it?  How&#8217;s it working out for everyone?</p>