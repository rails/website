---
layout: post
title: This Week in Edge Rails
categories:
- edge
author: Mike Gunderloy
published: true
date: 2009-01-23 15:48:00.000000000 +00:00
---
<h3>January 17, 2009 -January 23, 2009</h3>
<p>Edge Rails saw 28 commits this week. Here&#8217;s a look at some of them. As always, you&#8217;ll want to go back to the <a href="http://github.com/rails/rails/commits/master">GitHub commit list</a> if you want to look at every single change. As we near 2.3, many of the commits we&#8217;re seeing are bug fixes rather than new features, and I&#8217;m generally not covering those here.</p>
<h2>More Rack Middleware</h2>
<p>The Rack-ification of Rails continues, with more and more Rails code being refactored into Rack middleware. This week, parsers for <span class="caps">XML</span>, <span class="caps">JSON</span>, and <span class="caps">YAML</span> got moved into <code>ActionController::ParamsParser</code> middleware. In the long run, this sort of refactoring will make many of Rails services open to other Rack clients, without every framework needing to reinvent all of the same wheels. <a href="http://github.com/rails/rails/commit/ff0a2678c4bce9da348e1263915558795e3a3640">commit</a></p>
<h2>Deprecations</h2>
<p>If you were one of the people who got used to running <code>script/performance/request</code> to look at performance based on integration tests, you need to learn a new trick: that script has been removed from core Rails now. But don&#8217;t worry if you depend on it. There&#8217;s a new <a href="http://github.com/rails/request_profiler/tree/master">request_profiler</a> plugin that you can install to get the exact same functionality back.</p>
<p>Also on the deprecation list is <code>ActionController::Base#session_enabled?</code>, which now returns a deprecation warning when you try to use it. But given that sessions are lazy-loaded now, to disable them all you need to do to disable them is to not use them in the first place. <a href="http://github.com/rails/rails/commit/9cefd5ea0c21595d73762b5d60a760a3ed9fe8bf">commit</a></p>
<h2>Local Caching for All!</h2>
<p>Last week, we saw an improvement to caching performance when using <code>MemCacheStore</code>, keeping a local request cache to avoid redundant reads. This week, that work was refactored so that it can be used with any remote store. <a href="http://github.com/rails/rails/commit/b08c96887538cf53670bb882e79996582375e6c9">commit</a></p>