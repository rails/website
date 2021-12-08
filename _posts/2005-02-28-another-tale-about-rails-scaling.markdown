---
layout: post
title: Another tale about Rails scaling
categories:
- documentation
author: admin
published: true
date: 2005-02-28 21:06:16.000000000 +00:00
---
<p>TJ Vanderpoel is currently preparing a case study on how he scaled his mortgage processing application with a single lighttpd web server powered by a cluster of FastCGI application servers. All using Ruby on Rails. But as a counterpoint to the latest round of FUD&#8217;ing, he posted this <a href="http://www.almaer.com/blog/archives/000735.html">preliminary tale</a> about how his company is scaling Rails:</p>
<blockquote>As far as scalability, apache with fcgi certainly isn&#8217;t the best option, for rails. In our environment we have one lighttpd process serving requests in a round-robin fashion from 10 to 100 fastcgi rails listeners. We move anywhere from 300 req/second to 1000 req/second with a dual opteron webserver and the fastcgi listeners can be well in back of the webserver. The only feature i&#8217;d like to see added to lighttpd is to be able to add fastcgi listeners on the fly, currently you have to restart the webserver to add listeners. Nonetheless, if you&#8217;d talked to rails developers you&#8217;d have learned lighttpd is the recommended hosting platform for production applications, as it takes care of many of the speed, and all of the scalability issues.</blockquote>
<p>Vanderpoel should be ready with the full case study on his scaling adventure later this week.</p>