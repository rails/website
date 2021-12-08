---
layout: post
title: Apache gets serious about FastCGI
categories:
- sightings
author: David
published: true
date: 2005-12-29 05:30:29.000000000 +00:00
---
<p>Brian McCallister <a href="http://kasparov.skife.org/blog/src/apache_22_fcgi.html">reports</a> that the Apache team has decided to revive mod_fcgi as <a href="http://svn.apache.org/repos/asf/httpd/httpd/branches/fcgi-proxy-dev/modules/proxy/mod_proxy_fcgi.c">mod_proxy_fcgi</a> with intentions of proper support for external FCGIs and a place in the core Apache distribution.</p>
<p>This is fantastic news! Paul Querna and Garrett Rooney deserves much praise for embarking on this important quest to restore our faith in Apache as a worthy web server for applications. Not only will this mean that <span class="caps">FCGI</span> is no longer a bastard child on Apache 2.x, but also that it&#8217;ll have active maintenance and people to turn to if things are sour.</p>
<p>Speaking of sour. Please do forward all your grapes to <a href="brianm@apache.org">Brian McCallister</a> or the <a href="http://fastcgi.com/archives/fastcgi-developers/">FastCGI Developers list</a>. Any trouble you&#8217;ve had in the past with <span class="caps">FCGI</span> and Apache or things you&#8217;d like to see happen.</p>
<p>Viva la Apache!</p>