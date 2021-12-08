---
layout: post
title: ! 'Rails 1.0: The Release Candidate (2)'
categories:
- releases
author: admin
published: true
date: 2005-10-19 16:29:56.000000000 +01:00
---
<p>The release of 1.0 is near upon us! It has been a long time in the making, involved a heroic final sprint at RubyConf by the core team, and is a testament to how it&rsquo;s all been coming together over the last months. Almost three hundred bug fixes, enhancements, and new features have been introduced since 0.13.1 saw the light of day three months ago. That&rsquo;s on average three per day. So it&rsquo;s not been a while because of slacking off.</p>
<p>But with all these changes, we want to allow for an extended release-candidate phase before we declare 1.0 a reality. So from today you can get the 1.0 RC 2, which is packaged as version 0.14.1 in the gems.</p>
<p>Over the next two weeks or so, we&rsquo;re very interested in hearing about bugs and we&rsquo;ll likely push out a few more release candidates as more and more fixes go in. That said, we can&rsquo;t fix it all and we surely can&rsquo;t process all the pending feature enhancements for 1.0. So don&rsquo;t expect to see an empty Pending Patches or Faults lists. Our main objective is to stamp out the &ldquo;heinous&rdquo; bugs: those that significantly affect the many or those that dangerously affect the few.</p>
<ul>
	<li><a href="http://documentation.rubyonrails.com/release_notes/rc2.html">Read the full release notes</a>.</li>
	<li><a href="http://documentation.rubyonrails.com/release_notes/upgrading_from_0131_to_10.html">Upgrading from 0.13.1 to 1.0</a>.</li>
</ul>
<p>(The main gem server is pretty over-worked, you may want to do <code>gem install rails --source http://gems.rubyonrails.org --include-dependencies</code> to offload it a bit)</p>