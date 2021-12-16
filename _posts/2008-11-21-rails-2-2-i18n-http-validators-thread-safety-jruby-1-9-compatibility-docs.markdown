---
layout: post
title: ! 'Rails 2.2: i18n, HTTP validators, thread safety, JRuby/1.9 compatibility,
  docs'
categories:
- releases
author: David
published: true
date: 2008-11-21 17:22:00.000000000 +00:00
---
<p>Rails 2.2 is finally done after we cleared the last issues from the release candidate program. This release contains an long list of fixes, improvements, and additions that&#8217;ll make everything Rails smoother and better, but we also have a number of star player features to parade this time.</p>
<p><b>Internationalization by default</b><br/>
The most important is that Rails now includes a full-on internationalization framework and that it&#8217;s <a href="https://rubyonrails.org/2008/11/18/new-rails-2-2-i18n-defaults">pre-wired from start</a>. The work of the i18n group has been very impressive and it&#8217;s great to see that Rails finally ships with a solution in the box that&#8217;s both simple and extensible. Great job, guys!</p>
<p><b>Stronger etag and last-modified support</b><br/>
We&#8217;ve also added much better support for <span class="caps">HTTP</span> validators in the form of etag and last-modified. Making it so much easier to skip expensive procesesing if the client already has the latest stuff. This also makes it even easier to use Rails with <a href="http://tomayko.com/writings/things-caches-do">gateway proxies</a>.</p>
<p><b>Thread safety and a connection pool</b><br/>
Josh Peek has added thread safety to Rails and Nick Sieger from <a href="http://jruby.codehaus.org/">JRuby</a> worked on getting Active Record a proper connection pool. So now all elements of Rails are thread safe, which is a big boon for the JRuby guys in particular. For C Ruby, we still need a bunch of dependent libraries to go non-blocking before it&#8217;ll make much of a difference, but work on that is forth coming.</p>
<p><b>Ruby 1.9 and JRuby compatibility</b><br/>
Jeremy Kemper has been rocking on both Ruby 1.9 and JRuby compatibility. Rails 2.2 is fully compatible with both, but again, there might be supporting libraries and gems that are not. Again, lots of work is going into making everything else fully compatible as well.</p>
<p><b>Better <span class="caps">API</span> docs, great guides</b><br/>
Finally, the last big push has been with the documentation of Rails. Pratik&#8217;s <a href="http://github.com/lifo/docrails/tree/master">docrails</a> project has made immense progress. Not only are the <a href="http://api.rubyonrails.org/"><span class="caps">API</span> docs</a> much improved, but we also have a whole <a href="http://guides.rubyonrails.org/">new guides section</a> generated from documentation that now lives with the source. A true community project with lots of contributors. I&#8217;m sure both those new and old to Rails will greatly appreciate the strong focus on documentation.</p>
<p>To read about all these features and more in details, checkout <a href="http://guides.rubyonrails.org/2_2_release_notes.html">the Rails 2.2 release notes</a> &#8212; another one of those guides from the docrails project.</p>
<p><b>How to install</b><br/>
As always, you can install Rails 2.2 through RubyGems. We now require RubyGems 1.3.1, so be sure to update that first: <code>gem update --system</code></p>
<p>Then you can install Rails: <code>gem install rails</code></p>
<p>If you&#8217;re updating an existing application, you can run <code>rake rails:update</code> to get the latest JavaScript files and scripts.</p>
<p>From all of us to all of you, we hope you enjoy this release. It&#8217;s a true pleasure to see Rails make such big steps forward once again. Dig in, have fun, and we&#8217;ll be back with Rails 2.3 with even more before you know it.</p>