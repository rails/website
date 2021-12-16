---
layout: post
title: This Week in Edge Rails
categories:
- edge
author: Mike Gunderloy
published: true
date: 2009-03-20 14:52:00.000000000 +00:00
---
<h3>March 14, 2009 &#8211; March 20, 2009</h3>
<p>The big news in Rails this week, of course, was the <a href="https://rubyonrails.org/2009/3/16/rails-2-3-templates-engines-rack-metal-much-more">release of Rails 2.3</a>. But that certainly doesn&#8217;t mean the Rails edge story is over! To the contrary, we&#8217;re embarking on one of the more ambitious and exciting Rails projects of all: the creation of Rails 3.0. Read on to see where things stand.</p>
<p><b>Final 2.3 Changes</b><br /></p>
<p>A few things went in to Rails 2.3 in the days leading up to release. These include:</p>
<ul>
	<li><span class="caps">DDL</span> transactions for SQLite databases <a href="http://github.com/rails/rails/commit/ac3848201dfd7400708d3ccae0acb9388318fb99">commit</a></li>
	<li>Compatibility between <code>render :file</code> and <code>Pathname</code> <a href="http://github.com/rails/rails/commit/7706b57034e91820cf83445aede57c54ab66ac2d">commit</a></li>
	<li>ActionController class naming conventions for Metal <a href="http://github.com/rails/rails/commit/5f10533949457e3797c8f0b51eb30a9268bceb4d">commit</a></li>
</ul>
<p><b> Rails 2.3.2.1</b><br /></p>
<p>Shortly after the release of Rails 2.3, which was version 2.3.2, it became necessary to make a Rails 2.3.2.1 tag. This is because the tagged 2.3.2 version in the Rails repository is actually missing an important fix (the installable gem version of Rails has the fix). The net result is that <code>rake rails:freeze:edge RELEASE=2.3.2</code> would freeze a bad version of Rails into your application.</p>
<p>To fix this, the Rails team has re-tagged the master tree at a safer spot, after the critical fix. This new tag is for release 2.3.2.1. So if you’re freezing Rails 2.3 into your applications (as opposed to running it from gems) be sure to use <code>rake rails:freeze:edge RELEASE=2.3.2.1</code>. That .1 makes all the difference.</p>
<p><b>The Road to Rails 3.0</b><br /></p>
<p>Now that 2.3 is out, what&#8217;s next? Rails 3.0, which has been a distant speck on the horizon for a while, is rapidly getting closer. The Rails core team is discussing exactly how to proceed, but the bottom line is that you are shortly going to see a <em>lot</em> of changes on edge Rails, as work that&#8217;s been going on in various forks gets merged back into the master branch. You&#8217;ll want to be cautious about using edge on existing applications. In particular, changes to the Rails internals may result in many plugins needing to be rewritten. Rails edge will continue to be the cutting-edge solution, but you&#8217;ll need to keep up with the changes and be prepared to work with them if you choose to run on edge.</p>
<p>But this doesn&#8217;t mean that Rails 2 is frozen in time either. There&#8217;s a new <a href="http://github.com/rails/rails/commits/2-3-stable">2-3-stable</a> branch in the Rails repository which will host any maintenance releases to the current release version. There will continue to be some work on making sure the 2.x releases of Rails work well, though the center of gravity of Rails framework development will shift quickly to Rails 3.0.</p>
<p>So stay tuned. We&#8217;ll continue to keep you posted with Rails 3.0 developments as they happen: the process will continue, as always, to be transparent and to welcome ideas and feedback.</p>