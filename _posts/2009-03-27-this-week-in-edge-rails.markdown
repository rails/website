---
layout: post
title: This Week in Edge Rails
categories:
- edge
author: Mike Gunderloy
published: true
date: 2009-03-27 12:49:00.000000000 +00:00
---
<h3>March 21, 2009 &#8211; March 27, 2009</h3>
<p>It&#8217;s been a quiet week for Rails on the surface: just half a dozen commits over the course of the week. Behind the scenes, though, the work is going on to merge initial Rails 3.0 work into the master branch of the git repository. We&#8217;ll have more news on that as it happens.</p>
<p><b>Fixes</b><br /></p>
<p>Meanwhile, a few small issues in the 2.3 release have been cleared up in edge:</p>
<ul>
	<li>Tests with multiple <span class="caps">POST</span> requests in the same test block now properly handle parameters. <a href="http://github.com/rails/rails/commit/8fa4275a72c334fe945dada6113fa0153ca28c87">commit</a></li>
	<li><code>render :file</code> with absolute paths now works on Windows systems. <a href="http://github.com/rails/rails/commit/e3b166aab37ddc2fbab030b146eb61713b91bf55">commit</a></li>
	<li>Template extension parsing is now more robust (if you&#8217;ve been having problems with files like show.erb.orig, this one is for you). <a href="http://github.com/rails/rails/commit/ae9f258e03c9fd5088da12c1c6cd216cc89a01f7">commit</a></li>
</ul>
<p>Just a reminder, if you&#8217;re having any issues with Rails 2.3, we&#8217;d love to know about them &#8211; and we&#8217;d love it even more if you&#8217;d supply a failing test or a patch. Check out the details in the <a href="http://guides.rubyonrails.org/contributing_to_rails.html">Contributing to Rails</a> guide.</p>