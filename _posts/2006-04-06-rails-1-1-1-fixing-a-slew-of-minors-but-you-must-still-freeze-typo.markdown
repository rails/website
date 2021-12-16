---
layout: post
title: ! 'Rails 1.1.1: Fixing a slew of minors (but you must still freeze Typo)'
categories:
- releases
author: David
published: true
date: 2006-04-06 20:49:48.000000000 +01:00
---
<p>Rails 1.1 was a big upgrade with a lot of new features and we&#8217;ve been working hard since its release to polish off the kinks revealed after it was deployed to the masses. Rails 1.1.1 contains fixes for things like Prototype memory leaks in IE 6, Oracle adapter runnings, and a number of compatibility tweaks to make most older applications work.</p>
<p>This release still doesn&#8217;t work with Typo, though. And it won&#8217;t. Instead you must freeze Rails 1.0 to vendor/rails if you run Typo 2.6.0 while we await the new release from the Typo team that will be fully 1.1 compatible. <a href="https://rubyonrails.org/articles/2006/04/03/mostly-good-news-about-freezing-typo-and-rails-1-1-1">Read more about Typo and how to freeze Rails</a>.</p>
<p>This is the release we recommend that hosting companies upgrade to. If you still haven&#8217;t frozen your application and it for some reason doesn&#8217;t work with Rails 1.1.1, don&#8217;t run  crying to them. We screwed up in the release notes of the last release by not telling people that Typo would break, but now that this information is spread far and wide, it&#8217;ll rest on your shoulders to make sure you&#8217;re frozen and stay cool.</p>
<p>If you still haven&#8217;t upgraded to Rails 1.1, checkout the <a href="https://rubyonrails.org/articles/2006/03/28/rails-1-1-rjs-active-record-respond_to-integration-tests-and-500-other-things">original announcement</a> for a run-through of all the features.</p>
<p>For the full story, see the changelogs: <a href="http://api.rubyonrails.com/files/vendor/rails/railties/CHANGELOG.html">Rails</a>, <a href="http://api.rubyonrails.com/files/vendor/rails/actionpack/CHANGELOG.html">Action Pack</a>, <a href="http://api.rubyonrails.com/files/vendor/rails/activerecord/CHANGELOG.html">Active Record</a>, <a href="http://api.rubyonrails.com/files/vendor/rails/activesupport/CHANGELOG.html">Active Support</a>, <a href="http://api.rubyonrails.com/files/vendor/rails/actionwebservice/CHANGELOG.html">Action Web Service</a></p>