---
layout: post
title: ! 'Rails 3.0.3: Faster Active Record plus fixes'
categories:
- releases
author: David
published: true
date: 2010-11-15 19:34:00.000000000 +00:00
---
<p>How about some free speed? Well, here you go. Rails 3.0.3 includes a much faster version of Active Record that reclaims the performance lost when we went from Rails 2.3.x to 3.x and then some. Aaron Patterson has done a phenomenal job benchmarking, tweaking, and tuning the ARel engine that underpins Active Record 3 and the result is Teh Snappy.</p>
<p>You can read more about Aaron&#8217;s work in his <a href="http://engineering.attinteractive.com/2010/10/arel-two-point-ohhhhh-yaaaaaa/">ARel 2.0 write-up</a>. If you dare, you can also have a look at <a href="http://www.slideshare.net/tenderlove/zomg-why-is-this-code-so-slow">his RubyConf slides</a> that went over the rewrite and speed-up in even greater detail (warning: there are slides of boys kissing!).</p>
<p>In addition to the free speed, we&#8217;ve also included a truckload of minor fixes. So everything just works better and faster. What more can you ask for? Oh, that it&#8217;s a drop-in replacement for Rails 3.0 &#8212; there are no <span class="caps">API</span> changes. You got it.</p>
<p>See all <a href="https://github.com/rails/rails/compare/v3.0.0...3-0-stable">the changes on Github</a>. Install the latest version using <code>gem install rails</code>. Or bind yourself to <a href="https://github.com/rails/rails/tree/v3.0.3">the v3.0.3 tag</a>.</p>
<p>Enjoy!</p>
<p><small>Note: Active Record 3.0.3 is mistakenly reporting its tiny version as 1 instead of 3. This has no impact on anything you do unless you were specifically checking that tiny version. But if it bothers you lots, it&#8217;s fixed on the 3-0-stable branch.</small></p>