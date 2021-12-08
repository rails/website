---
layout: post
title: ! 'Rails 2.3.0 RC1: Templates, Engines, Rack, Metal, much more!'
categories:
- releases
author: David
published: true
date: 2009-02-01 23:40:00.000000000 +00:00
---
<p>Rails 2.3 is almost ready for release, but this package is so stock full of amazing new stuff that we&#8217;re making dutifully sure that everything works right before we call it official.</p>
<p>So please help us do thorough testing of this release candidate. Lots of the underpinnings changed. Especially the move to Rack. So we need solid testing and will probably have a slightly longer than average release candidate phase to account for that.</p>
<p>But boy will it be worth it. This is one of the most substantial upgrades to Rails in a very long time. A brief rundown of the top hitters:</p>
<ul>
	<li><strong>Templates</strong>: Allows your new skeleton Rails application to be built your way with your default stack of gems, configs, and more.</li>
	<li><strong>Engines</strong>: Share reusable application pieces complete with routes that Just Work, models, view paths, and the works.</li>
	<li><strong>Rack</strong>: Rails now runs on Rack which gives you access to all the middleware goodness.</li>
	<li><strong>Metal</strong>: Write super fast pieces of optimized logic that routes around Action Controller.</li>
	<li><strong>Nested forms</strong>: Deal with complex forms so much easier.</li>
</ul>
<p>And that&#8217;s just the tip of the iceberg. We&#8217;ve put together a complete guide for <a href="http://guides.rubyonrails.org/2_3_release_notes.html">the Rails 2.3 release notes</a> with much more information.</p>
<p>You can install the release candidate with:</p>
<p><code>gem install rails --source http://gems.rubyonrails.org</code></p>
<p>Enjoy, report the bugs, and let&#8217;s get Rails 2.3 final out the door soon.</p>