---
layout: post
title: Rails now tested on Travis CI
categories: []
author: David
published: true
date: 2011-07-27 10:18:00.000000000 +01:00
---
<p>Setting up continuous integration for Rails has been a complicated undertaking in the past.</p>
<p>Rails needs to be tested against different Ruby versions and various modes (such as running test cases in isolation/non-isolation, running ActiveRecord with identitymap enabled/disabled). This made the test suite run for an isanely long time (up to 2 hours on 1.9.2 alone) and required regular maintenance by<br />
the Rails core team.</p>
<p>Over the past weeks the folks at <a href="http://travis-ci.org">Travis CI</a> have been working hard to provide a better experience to Rails continous integration and today we can happily announce that<br />
<a href="http://travis-ci.org/#!/rails/rails">Rails is now testing on Travis CI</a>!</p>
<p>Travis CI is doing a great job in providing multi-ruby testing capabilities and it is dead-simple to use. There&#8217;s some great potential to this project and it might change the way we see open-source development and testing quite a bit.</p>
<p>So, if you are publishing any kind of open-source code, library or web application, we recommend you have a look at it. And if you have a spare hour once in a while then consider potentially jumping on board to help improve the code base.</p>
<p>Travis CI is using a separate physical worker server (and a quite beefy one!) for running workers dedicated to Rails builds. This server has kindly been sponsored by the great folks over at <a href="http://enterprise-rails.com">Enterprise Rails</a>.</p>
<p>[Guest post by Josh Kalderimis &amp; Sven Fuchs]</p>