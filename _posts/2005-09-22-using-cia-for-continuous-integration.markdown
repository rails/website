---
layout: post
title: Using CIA for continuous integration
categories: []
author: admin
published: true
date: 2005-09-22 20:01:25.000000000 +01:00
---
<p>Jonathan have written a tutorial for <a href="http://blog.innerewut.de/articles/2005/09/18/setting-up-cia-with-rails-and-subversion">getting up and running with <span class="caps">CIA</span></a>. <span class="caps">CIA</span> is a continuous-integration server that I threw together really quickly to please my own needs for running tests when checkins occur. It&#8217;s not intended to be a general-purpose solution, like DamageControl, but rather a narrow and slim alternative if you&#8217;re on a Rails/Subversion combination anyway.</p>
<p>It&#8217;s still only available from Subversion and its ugly as sin, but it&#8217;s only 66 lines of code, so you can read and understand it all in 10 minutes tops. Do check it out and give it some love, but let your patches be mindful of its Less Software intentions.</p>