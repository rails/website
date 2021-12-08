---
layout: post
title: ! 'Rails 1.1: Release Candidate 1 available'
categories:
- releases
author: David
published: true
date: 2006-03-22 01:35:03.000000000 +00:00
---
<p>It&#8217;s been roughly three months since the release of the big one-oh. That&#8217;s obviously an eternity in Rails time, so its about high time we&#8217;re getting ready for the release for 1.1. And boy, is this an exciting upgrade!</p>
<p>I do believe this is the biggest upgrade to Rails we&#8217;ve ever done. We have recorded about 500 fixes, tweaks, and new features in the changelogs. That&#8217;s a lot and that&#8217;s just counting major new features like <span class="caps">RJS</span> as one.</p>
<p>So with all these goodies, we want to make sure we launch without any obvious blunders or backwards compatibility breaking changes. This is why we&#8217;re doing a release candidate and why we need your help to test it.</p>
<p>Rails 1.1 is supposed to be just fully backwards compatible with 1.0, but we did change just a couple of defaults, see <span class="caps">CHANGED</span> <span class="caps">DEFAULT</span> notes in the changelogs. That means we want to test Rails 1.1 with as many 1.0 applications as possible.</p>
<p>To install the release candidate gems, you just need to do:</p>
<pre>
gem install rake
gem install rails --source http://gems.rubyonrails.org
</pre>
<p>Or you can just install the new Rake gem (Rails 1.1 depends on Rake 0.7) and then call <code>rake freeze_edge</code>. That&#8217;ll pull the latest Rails down from the Subversion repository and bind just that one application to it.</p>
<p>Or you can set svn:externals on vendor/ to be against http://dev.rubyonrails.org/svn/rails/tags/rel_1-1-0_RC1, if you want to pull it in through Subversion automatically.</p>
<p>Lots of options, no excuses. We really need your help to make sure the final release is as solid as Rails 1.0 was. And so we don&#8217;t need 1.1.1 two days later.</p>
<p>Once you have the latest Rails installed, you can do <code>rake rails:update</code> to get the latest scripts and the latest version of Prototype and script.aculo.us installed in public/javascripts. That&#8217;s about all the upgrading you need to do to existing applications.</p>
<p>Do note, though, that all plugins may not be upgraded to be compatible with Rails 1.1. Or you may indeed just have an old version of a plugin that has been updated. Keep an eye out for that.</p>
<p>If you&#8217;re wondering why to even bother with Rails 1.1, Scott Raymond currently has the <a href="http://scottraymond.net/articles/2006/02/28/rails-1.1">best play-by-play overview of what&#8217;s new</a>. We&#8217;ll be adding to that with more walkthroughs and hopefully movies around release time.</p>
<p>If you need more documentation, I <i>strongly</i> encourage you to pick up <a href="http://pragmaticprogrammer.com/titles/fr_rr/index.html">Chad Fowler&#8217;s Rails Recipe book</a>. It&#8217;s currently out in its 3rd beta release and includes a bunch of great recipes on the new 1.1 features. Including <span class="caps">RJS</span>, polymorphic associations (and how to do better tagging with them), join models, integration testing, and more. You can get it as a <span class="caps">PDF</span> right now for $21.50.</p>
<p>So help us help you. Test Rails 1.1 with your existing applications. Try building new stuff with it. And <a href="http://dev.rubyonrails.org/">let us know</a> if something breaks in the process. We will be taking care of all heinous bugs before release. Thank you all!</p>