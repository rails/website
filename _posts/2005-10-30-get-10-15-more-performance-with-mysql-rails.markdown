---
layout: post
title: Get 10-15% more performance with MySQL/Rails
categories:
- tricks
author: admin
published: true
date: 2005-10-30 07:43:15.000000000 +00:00
---
<p>Rails 0.14.x and forward contains a hefty performance increase for the MySQL adapter, but it requires that you have the latest version of the underlying, native bindings (2.7). On Stephan Kaes&#8217; benchmark suite, the upgrade is 10-15%:</p>
<p><img src="http://www.rubyonrails.org/media/images/mysql_speed.gif" width="523" height="227" border="0" /></p>
<p>You can get the latest MySQL bindings with <code>gem install mysql</code> (or <code>gem install mysql -- --include=/usr/local/lib</code> on OS X). The additional speed upgrade will automatically kick in as soon as you have the latest bindings (to check, open the console, require &#8216;mysql&#8217;, puts Mysql::<span class="caps">VERSION</span>, and expect to see 20700).</p>
<p><span class="caps">UPDATE</span>: If you&#8217;re on Windows, Justin Rudd went through the trouble of <a href="http://seagecko.org/thoughts/in-the-past/2004/09/09/ruby-mysql-and-windows/">describing how to make it work</a> there.</p>