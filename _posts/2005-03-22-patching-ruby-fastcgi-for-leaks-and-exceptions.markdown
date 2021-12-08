---
layout: post
title: Patching Ruby-FastCGI for leaks and exceptions
categories:
- sightings
author: admin
published: true
date: 2005-03-22 17:41:22.000000000 +00:00
---
<p>Apparently, Ruby-FastCGI is one leaky pipe. It&#8217;s currently happily disposing of up to 16K per request. Not particularly helpful for the long-running processes like FastCGIs. But have no fear, Kirk Haines is near. And plugged the holes, he has.</p>
<p>Read all about the patch and get it from Kirk&#8217;s <a href="http://enigo.com/projects/iowa/fcgipatch.html"><span class="caps">FCGI</span> Patch for Ruby <span class="caps">FCGI</span> 0.8.5</a> page.</p>
<p>Additionally, 0.8.5 isn&#8217;t raising the original exception when it dies, which makes it pretty hard to debug. But luckily, Aredridel made a <a href="http://www.rubyonrails.com/media/patches/fastcgi_0-8-5_original_exception.diff">patch to get the original exception bubbled up</a> a while back. Apply that while you&#8217;re at it.</p>
<p>Note: As Ruby-FastCGI has <a href="http://redhanded.hobix.com/cult/nahiVacuumsAndAimsFebrezeAtRaa.html">temporarily disappeared</a> from the <span class="caps">RAA</span> listing, you might like to know that the direct link is <a href="http://www.moonwolf.com/ruby/archive/ruby-fcgi-0.8.5.tar.gz">http://www.moonwolf.com/ruby/archive/ruby-fcgi-0.8.5.tar.gz</a></p>