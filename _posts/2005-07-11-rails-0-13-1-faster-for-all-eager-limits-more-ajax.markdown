---
layout: post
title: ! 'Rails 0.13.1: Faster for all, eager limits, more Ajax'
categories:
- releases
author: admin
published: true
date: 2005-07-11 08:19:14.000000000 +01:00
---
<p>We&#8217;ve returned the default MySQL/Ruby bindings to their former glory, made sure development mode on big applications didn&#8217;t get penalized on resetting the object space, and cut WEBricks lust to have a new database connection per request. All changes that actually allows Rails 0.13.1 to live up to the promise of better performance for everyone.</p>
<p>Additionally, we&#8217;ve made it possible to use :limit and :offset together with eager loading of has_one and belongs_to associations (has_many and has_and_belongs_to_many will still not work due to the nature of how <span class="caps">SQL</span> joins work).</p>
<p>And of course there&#8217;s a big bag of delicious script.aculo.us additions and fixes. Be sure to checkout the changelogs for the full scoop as usual:</p>
<ul>
	<li><a href="http://api.rubyonrails.com/files/CHANGELOG.html">Rails</a></li>
	<li><a href="http://api.rubyonrails.com/files/vendor/rails/activerecord/CHANGELOG.html">Active Record</a></li>
	<li><a href="http://api.rubyonrails.com/files/vendor/rails/actionpack/CHANGELOG.html">Action Pack</a></li>
	<li><a href="http://api.rubyonrails.com/files/vendor/rails/actionmailer/CHANGELOG.html">Action Mailer</a></li>
	<li><a href="http://api.rubyonrails.com/files/vendor/rails/actionwebservice/CHANGELOG.html">Action Web Service</a></li>
	<li><a href="http://api.rubyonrails.com/files/vendor/rails/activesupport/CHANGELOG.html">Active Support</a></li>
</ul>