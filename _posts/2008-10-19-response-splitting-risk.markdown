---
layout: post
title: Response Splitting Risk
categories: []
author: michael
published: true
date: 2008-10-19 14:03:00.000000000 +01:00
---
<p>The Ruby <span class="caps">HTTP</span> libraries used by Rails do not perform any santization of the values of their <span class="caps">HTTP</span> Headers.  This can lead to <a href="http://en.wikipedia.org/wiki/HTTP_response_splitting">Response Splitting</a> and <a href="http://en.wikipedia.org/wiki/HTTP_header_injection">Header Injection</a> attacks in certain circumstances where user-provided values are written into response headers. These malformed values can be used to set custom cookies, and forge fake responses to users if your application uses any of the user submitted parameters to construct <span class="caps">HTTP</span> headers without sanitizing.</p>
<p>A common scenario where this can be exploited is where your application takes a <span class="caps">URL</span> from the query string, and redirects the user to it.  To mitigate this common scenario new versions of Rails will be released which sanitize the values passed to redirect_to.   However you will still need to take care when writing other values to response headers.</p>
<p>The new versions which will contain the fixes are:</p>
<ul>
	<li>2.0.5</li>
	<li>2.1.2</li>
	<li>2.2.0</li>
</ul>
<p>These releases are not available immediately, so in the event that it&#8217;s infeasible or inconvenient for your application to sanitize the user-supplied values it passes to redirect_to, patches are available at the following locations.</p>
<ul>
	<li><a href="/assets/2008/10/19/2.0.x.redirect_to_sanitisation.diff">2.0.x Series</a></li>
	<li><a href="/assets/2008/10/19/2.1.x.redirect_to_sanitisation.diff">2.1.x Series</a></li>
</ul>
<p>Users of Edge Rails prior to <a href="http://github.com/rails/rails/commit/ba80ff74a962">ba80ff74a962</a> should update to the latest revisions, cherry pick the change at <a href="http://github.com/rails/rails/commit/ba80ff74a962">ba80ff74a962</a> or or apply <a href="/assets/2008/10/19/edge.redirect_to_sanitisation.diff">this patch</a></p>
<p>Thanks to Luka Treiber and Mitja Kolsek of <span class="caps">ACROS</span> Security for notifying us of this issue and the Ruby Security team for their advice.</p>