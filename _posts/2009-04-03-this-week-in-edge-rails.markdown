---
layout: post
title: This Week in Edge Rails
categories:
- edge
author: Mike Gunderloy
published: true
date: 2009-04-03 11:35:00.000000000 +01:00
---
<h3>March 28, 2009 &#8211; April 3, 2009</h3>
<p>Things are still fairly quiet out on the edge: 5 commits this week. The work for Rails 3.0 hasn&#8217;t been merged back to the master branch yet, so if you need any of the post-2.3 patches you can still just update to edge without worrying about major upheaval.</p>
<p><b>Changes</b><br /></p>
<ul>
	<li>When are 24 hours not 24 hours? When you add them across a <span class="caps">DST</span> boundary in Rails &#8211; at least, until one of this week&#8217;s <a href="http://github.com/rails/rails/commit/5a8b481f717470b952ac7eb890f260ea98428153">commits</a>. You can read more details of what was going on over at the <a href="https://rails.lighthouseapp.com/projects/8994/tickets/2066">Lighthouse ticket</a>.</li>
	<li>Looked at your development mode /rails/info/properties view lately? Look again after <a href="http://github.com/rails/rails/commit/cad3e8b261a8d9551bc19a57007acf574d957548">this commit</a> and it will show all of the installed Rack middleware pieces in your application.</li>
</ul>