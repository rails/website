---
layout: post
title: Addressing "bogus statements" about Rails
categories:
- sightings
author: admin
published: true
date: 2005-04-04 18:00:48.000000000 +01:00
---
<p>Xavier Defrang has been following the heated arguments about Rails for some time and got fed up with a bunch of &#8220;&#8230;bogus statements (<span class="caps">FUD</span>?) and issues raised in the <span class="caps">TSS</span> discussion&#8221;. So he went ahead with <a href="http://defrang.com/index.php?story=837">a summary of the claims and why he believed them to be without merit</a>.</p>
<p>I particularly like the code snippet for putting the &#8220;code embedded in <span class="caps">HTML</span> is evil&#8221; nonsense to rest:</p>
<p><img src="http://defrang.com/img/rails_ww2.png" /></p>
<p>Of course, you could even write that snippet as a single readable line:</p>
<pre>&amp;lt;%= @collection.collect { |item| content_tag "li", item.some.nested.property } %&gt;</pre>
<p>Code embedded in <span class="caps">HTML</span> is only evil when you&#8217;re not using a programming language suitable for the purpose and when you don&#8217;t apply sound principles of abstractions.</p>