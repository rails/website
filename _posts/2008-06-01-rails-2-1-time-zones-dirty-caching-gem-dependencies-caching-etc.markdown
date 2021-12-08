---
layout: post
title: ! 'Rails 2.1: Time zones, dirty, caching, gem dependencies, caching, etc'
categories:
- releases
author: David
published: true
date: 2008-06-01 02:12:00.000000000 +01:00
---
<p>Rails 2.1 is now available for general consumption with all the features and fixes we&#8217;ve been putting in over the last six months since 2.0. This has been a huge effort by a very wide range of contributors helping to make it happen.</p>
<p>Over the past six months, we&#8217;ve had 1,400 contributors creating patches and vetting them. This has resulted in 1,600+ patches. A truly staggering number. And lots of that has made it into this release.</p>
<p><b>New features</b><br/>
The new major features are:</p>
<ul>
	<li>Time zones (by Geoff Buesing): <a href="http://mad.ly/2008/04/09/rails-21-time-zone-support-an-overview/">Tutorial</a> | <a href="http://ryandaigle.com/articles/2008/1/25/what-s-new-in-edge-rails-easier-timezones">Introdction</a> | <a href="http://railscasts.com/episodes/106">Railscast</a></li>
	<li>Dirty tracking: <a href="http://ryandaigle.com/articles/2008/3/31/what-s-new-in-edge-rails-dirty-objects">Introduction</a> (<a href="http://ryandaigle.com/articles/2008/4/1/what-s-new-in-edge-rails-partial-updates">partial updates</a>) | <a href="http://railscasts.com/episodes/109">Railscast</a></li>
	<li>Gem Dependencies: <a href="http://ryandaigle.com/articles/2008/4/1/what-s-new-in-edge-rails-gem-dependencies">Introduction</a> | <a href="http://railscasts.com/episodes/110">Railscast</a></li>
	<li>Named scope (by Nick Kallen): <a href="http://ryandaigle.com/articles/2008/3/24/what-s-new-in-edge-rails-has-finder-functionality">Introduction</a> | <a href="http://railscasts.com/episodes/108">Railscast</a></li>
	<li><span class="caps">UTC</span>-based migrations: <a href="http://ryandaigle.com/articles/2008/4/2/what-s-new-in-edge-rails-utc-based-migration-versioning">Introduction</a> | <a href="http://railscasts.com/episodes/109">Railscast</a></li>
	<li>Better caching: <a href="http://ryandaigle.com/articles/2007/12/19/what-s-new-in-edge-rails-pluggable-controller-caching">Introduction</a></li>
</ul>
<p>Thanks to <a href="http://ryandaigle.com/">Ryan Daigle</a> for the feature introductions and <a href="http://railscasts.com/">Ryan Bates</a> for the Railscasts. It makes writing the release notes so much easier :).</p>
<p>As always, you can install with:</p>
gem install rails
<p>&#8230;or you can use the <a href="http://github.com/rails/rails/commits/v2.1.0">Git tag for 2.1.0</a>.</p>
<p>Enjoy!</p>