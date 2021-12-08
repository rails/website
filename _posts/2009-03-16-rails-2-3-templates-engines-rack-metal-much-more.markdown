---
layout: post
title: ! 'Rails 2.3: Templates, Engines, Rack, Metal, much more!'
categories:
- releases
author: David
published: true
date: 2009-03-16 14:39:00.000000000 +00:00
---
<p>Rails 2.3 is finally done and out the door. This is one of the most substantial upgrades to Rails in a very long time. A brief rundown of the top hitters:</p>
<ul>
	<li><strong>Templates</strong>: Allows your new skeleton Rails application to be built your way with your default stack of gems, configs, and more.</li>
	<li><strong>Engines</strong>: Share reusable application pieces complete with routes that Just Work, models, view paths, and the works.</li>
	<li><strong>Rack</strong>: Rails now runs on Rack which gives you access to all the middleware goodness.</li>
	<li><strong>Metal</strong>: Write super fast pieces of optimized logic that routes around Action Controller.</li>
	<li><strong>Nested forms</strong>: Deal with complex forms so much easier.</li>
</ul>
<p>And that&#8217;s just the tip of the iceberg. We&#8217;ve put together a complete guide for <a href="http://guides.rubyonrails.org/2_3_release_notes.html">the Rails 2.3 release notes</a> with much more information. Be sure to checkout the section on <a href="http://guides.rubyonrails.org/2_3_release_notes.html#deprecated">what was deprecated</a> when you&#8217;re ready to upgrade your application.</p>
<p>You install 2.3 with (the final version is marked <a href="http://github.com/rails/rails/tree/v2.3.2">2.3.2</a>):</p>
<p><code>gem install rails</code></p>
<p>If you&#8217;re running on Passenger, be sure to <a href="http://blog.phusion.nl/2009/03/13/phusion-passenger-212-final-released/">upgrade to 2.1.2</a> as well. Rails 2.3 doesn&#8217;t run on older versions of Passenger!</p>
<p>We hope you&#8217;ll love it.</p>