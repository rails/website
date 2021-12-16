---
layout: post
title: Phusion Announces Passenger for Nginx
categories:
- tools
author: Mike Gunderloy
published: true
date: 2009-04-16 18:20:00.000000000 +01:00
---
<p>In the relatively short time since its release, <a href="http://www.modrails.com/">Phusion Passenger</a> has become part of the <a href="https://rubyonrails.org/deploy">preferred deployment</a> strategy for many Rails applications. But because it&#8217;s targeted at Apache, some sites have been unable to use Passenger. Apache is a great full-featured web server, but for highly traffic <a href="http://nginx.net/">nginx</a> seems to consistently deliver better throughput at lower memory use.</p>
<p>As of today, though, the Rails server landscape is changing for the better once again with the announcement of <a href="http://blog.phusion.nl/2009/04/16/phusions-one-year-anniversary-gift-phusion-passenger-220">Phusion Passenger for Nginx</a>. This new version takes the Passenger technology, including the use of Ruby Enterprise Edition, and integrates it tightly with nginx. How tightly? Well, you just install the Passenger 2.2.0 gem and run the included nginx installer, and you get a custom-built version of nginx along with instructions on how to configure it to server your Rails site. In addition to combining the benefits of nginx and Passenger, this has the side effect of greatly simplifying the nginx setup.</p>
<p>For more details, including a screencast, hop on over to Phusion&#8217;s <a href="http://blog.phusion.nl/2009/04/16/phusions-one-year-anniversary-gift-phusion-passenger-220/">blog</a></p>