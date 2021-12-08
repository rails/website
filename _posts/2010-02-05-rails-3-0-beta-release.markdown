---
layout: post
title: ! 'Rails 3.0: Beta release'
categories: []
author: David
published: true
date: 2010-02-05 03:33:00.000000000 +00:00
---
<p>You thought we were never going to get to this day, didn&#8217;t you? Ye of little faith. Because here is the first real, public release of Rails 3.0 in the form of a beta package that we&#8217;ve toiled long and hard over.</p>
<p>It&#8217;s surely not perfect yet, but we were out of blockers on the list, so here we go. Please give it a run around the block, try to update some old applications, try to start some new ones, and report back all the issues you find.</p>
<p>I&#8217;m really proud of this moment, actually. We&#8217;ve had more than 250 people help with the release and we&#8217;ve been through almost 4,000 commits since 2.3 to get here. Yet still the new version feels lighter, more agile, and easier to understand. It&#8217;s a great day to be a Rails developer.</p>
<p>There&#8217;s plenty to get excited about here. A few of the headliner features are:</p>
<ul>
	<li>Brand new router with an emphasis on RESTful declarations</li>
	<li>New Action Mailer <span class="caps">API</span> modelled after Action Controller (now without the agonizing pain of sending multipart messages!)</li>
	<li>New Active Record chainable query language built on top of relational algebra</li>
	<li>Unobtrusive JavaScript helpers with drivers for Prototype, jQuery, and more coming (end of inline JS)</li>
	<li>Explicit dependency management with Bundler</li>
</ul>
<p>But please take a look at the <a href="http://guides.rails.info/3_0_release_notes.html">full release notes</a> and enjoy the latest!</p>
<p>To install:</p>
<pre>
gem install tzinfo builder memcache-client rack rack-test rack-mount erubis mail text-format thor bundler i18n
gem install rails --pre
</pre>
<p><small><i>Notes: The first line is required because RubyGems currently can&#8217;t mix prerelease and regular release gems (someone please fix that!).</small></i></p>