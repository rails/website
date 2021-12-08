---
layout: post
title: ! 'Rails 3.0: Release candidate!'
categories:
- releases
author: David
published: true
date: 2010-07-26 21:45:00.000000000 +01:00
---
<p>High off Baltimore Pandemic and Yellow Tops, I believe we promised a release candidate shortly after RailsConf. As things usually go in open source, we gorged ourselves on fixes and improvements instead. But all to your benefit. We&#8217;ve had <a href="http://github.com/rails/rails/compare/v3.0.0.beta4...master">842 commits by 125 authors</a> since the release of the last beta!</p>
<p>Now it&#8217;s time to just say good is good enough, otherwise we could keep on with this forever. So please welcome the Rails 3 release candidate! You install, as always, with <code>gem install rails --pre</code>.</p>
<p>Most of the fixes have been of minor significance, but we did manage to dramatically speed up Rails 3 development and startup speed for larger applications (Basecamp went from insufferable to about 2.3 levels of enjoyment).</p>
<p>Speed is now pretty good across the board except for part of Arel that Active Record now depends on. We&#8217;ll be making sure we get performance of Active Record back to at least 2.3 levels before release.</p>
<p>A few more highlights:</p>
<ul>
	<li>Support for <a href="http://github.com/brianmario/mysql2">the MySQL2 gem</a>, which will take care of MySQL encoding issues on Ruby 1.9.2.</li>
	<li><a href="http://github.com/rails/rails/commit/6db9558416cf2133adacbe1634f28c25bfe618d6">Shallow routes are back</a>.</li>
	<li><a href="http://github.com/rails/rails/commit/1b97701e51667e6040b4c576cce9234edef1019e">Fixed the autoload issues</a></li>
	<li>Made the rails command work even when you&#8217;re in a subdirectory</li>
	<li><a href="http://github.com/rails/rails/commit/25215d7285db10e2c04d903f251b791342e4dd6a">Dealt with a variety of web encoding issues</a></li>
</ul>
<p>Indulge yourself in the delights of all the glorious details from the <a href="http://github.com/rails/rails/commits/">commit logs</a> or checkout the slightly less pedantic summaries in the CHANGELOGs.</p>
<p>This release candidate of Rails 3 also concides with the release candidate of Bundler 1.0. Huge strides were made with Bundler and it should both be much faster and have most of the edge cases sawed off.</p>
<p>I&#8217;ve said &#8220;we&#8217;re almost there&#8221; so many times that I&#8217;m almost exhausted. But really, guys, WE&#8217;RE <span class="caps">ALMOST</span> <span class="caps">THERE</span>!!!<sup>1</sup></p>
<p><small><sup>1</sup> Just a few weeks before final is out?</small></p>