---
layout: post
title: This Week in Rails 3.0
categories:
- edge
author: Mike Gunderloy
published: true
date: 2009-02-05 11:38:00.000000000 +00:00
---
<p>Now that Rails 2.3 has hit the release candidate phase, some of the development effort is turning to Rails 3.0. With that activity heating up, it&#8217;s time to start keeping you all informed as to happenings on the 3.0 version of the Rails source. I&#8217;ll still be posting separate &#8220;This Week in Edge Rails&#8221; information focused on Rails 2.3, so you can keep straight which changes are ready now and which still lie in the relatively distant future.</p>
<h2>The Vision</h2>
<p>The Rails 3 vision is based on the <a href="https://rubyonrails.org/2008/12/23/merb-gets-merged-into-rails-3">announcement</a> that was made in December: we&#8217;re bringing in the key ideas from Merb to Rails, including:</p>
<ul>
	<li>A more modular Rails core, so you can run applications with less than the full Rails stack</li>
	<li>Performance optimizations</li>
	<li>Framework agnosticism with sensible defaults</li>
	<li>A tested and documented <span class="caps">API</span> for extensions</li>
</ul>
<p>Rails 3 promises to substantially advance the state of the art in Ruby web frameworks, while still providing migration paths from Rails 2.x and Merb 1.&#215;.</p>
<h2>The Source Code</h2>
<p>The Rails 3.0 branch in the main Rails project on GitHub is the place to be to see what&#8217;s going on:</p>
<pre><code>
git clone git://github.com/rails/rails.git
git checkout 3-0-unstable
</code></pre>
<p>As the branch name might tell you, this is still a fairly experimental place to be: you probably don&#8217;t want to roll this out for production applications just yet. But it is tested code (and it&#8217;s using continuous integration to stay that way), and it already includes substantial changes from Rails 2.x thanks to the efforts of Yehuda Katz, Joshua Peek, and others. The changes so far are focused on cleaning up and improving Rails internals, rather than on adding new features.</p>
<h2>Action Dispatch</h2>
<p>Action Dispatch is a new Rails component which lives in Action Pack (along with Action Controller and Action View). Action Dispatch is responsible for all the processing involved with dispatching requests: request and response handling, <span class="caps">HTTP</span> status codes, file uploads, <span class="caps">URL</span> and parameter parsing, session storage, and so on.</p>
<h2>Action View Reorganization</h2>
<p>There are substantial changes in the Action View internals. The overall goal was to clean up a bunch of special cases and extra hooks that had built up over the years, and to leave all callers into Action View using a single unified entry point. The code cleanup has been coupled with some rearrangement of the Action View source to make it easier to find bits of functionality. This was a substantial effort; if you&#8217;re interested in a detailed look at the refactoring, you can read up on it at <a href="http://yehudakatz.com/">Yehuda&#8217;s blog</a></p>
<h2>Callback Optimizations</h2>
<p>A new method of handling callbacks removes the need for iterating through the callback list at runtime, and provides a substantial speed improvement in this area of the code. Though this is a micro-optimization that may not have much effect by itself, the hope is that by carefully optimizing as many hot spots as possible we can get a visible overall speedup in page creation and delivery &#8211; which, after all, is the point of a web framework.</p>
<h2>What&#8217;s Next?</h2>
<p>Obviously, there&#8217;s a long distance between where we are today and the Rails 3.0 vision. We&#8217;re fortunate to have an excellent team of core programmers devoting substantial time to making that journey. The interim goal is still to have a beta version of Rails 3.0 out in time for RailsConf in May. You can help in the same ways as with earlier versions of Rails: download the source, start testing it with your applications, and submit your own ideas and patches to the <a href="http://rails.lighthouseapp.com/projects/8994/">Rails Lighthouse</a>. Rails has been a joint effort of thousands of developers over the years, and Rails 3.0 will be no different in that regard.</p>