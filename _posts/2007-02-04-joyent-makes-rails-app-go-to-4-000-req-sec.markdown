---
layout: post
title: Joyent makes Rails app go to 4,000 req/sec
categories:
- sightings
author: David
published: true
date: 2007-02-04 23:46:00.000000000 +00:00
---
<p>Our friends at TextDrive/Joyent have been slugging away at their seriously impressive mega-cluster for quite some time now and it looks like it&#8217;s paying off. Just a few days ago, <a href="http://jadedpixel.com/2007/1/31/shopify-is-moving">Shopify announced they were coming over</a>.</p>
<p>And now Jason Hoffman shares a few statistics on <a href="http://joyeur.com/2007/02/04/a-brief-update-with-some-numbers-for-hardware-load-balanced-mongrels">how they&#8217;re making a new big Rails app scale</a> to no less than 4,000 requests per second on one of their sub-pages. That&#8217;s a pretty juicy number and is thanks to their <span class="caps">BIG</span>-IP-to-48-mongrels setup for Twitter.</p>
<p>Keep rocking, boys.</p>
<p><span class="caps">BTW</span>, the company&#8217;s Jason Hoffman will be giving a 3-hour tutorial at RailsConf entitled <a href="http://conferences.oreillynet.com/cs/rails2007/view/e_sess/11694">Scaling a Rails Application from the Bottom Up</a>. You&#8217;d be well-advised to secure an early seat to that one.</p>