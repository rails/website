---
layout: post
title: ! 'Rails 0.10.1: FCGI stability, WS generator, tons of fixes'
categories: []
author: admin
published: true
date: 2005-03-07 02:12:39.000000000 +00:00
---
<p>This is the point release to tie up the various loose ends introduced with Rails 0.10.0. Action Web Service has seen the most interesting improvements feature-wise with a new generator and tie-ins with the testing setup. There&#8217;s better support for <span class="caps">XML</span>-<span class="caps">RPC</span>: Instead of performing type checking on the parameters the remote client sends, <span class="caps">AWS</span> does casting to try and make it compatible with the signature instead, but if it fails, passes the parameter through anyway. And cleaner support for &#8220;prefix.methodName&#8221; <span class="caps">XML</span>-<span class="caps">RPC</span> methods with a new dispatching mode named :layered (this is an incompatible change for <span class="caps">XML</span>-<span class="caps">RPC</span> services that use namespaced <span class="caps">XML</span> method names: metaWeblog/blogger implementations will require changes).</p>
<p>As Basecamp moved to lighttpd/<span class="caps">FCGI</span> this past week, we also got a bunch of good fixes in that increases the stability of <span class="caps">FCGI</span> in a production environment quite a lot. No more <span class="caps">FCGI</span> dying and in case uncaught exceptions are raised, you&#8217;ll know about it in log/fastcgi.crash.log.</p>
<p>In total, we managed to squeeze in no less than 52 additions, changes, fixes, and tweaks. See all the changes in the changelogs for <a href="http://rails.rubyonrails.com/files/CHANGELOG.html">Rails</a>, <a href="http://rails.rubyonrails.com/files/vendor/activerecord/CHANGELOG.html">Active Record</a>, <a href="http://rails.rubyonrails.com/files/vendor/actionpack/CHANGELOG.html">Action Pack</a>, <a href="http://as.rubyonrails.com/files/CHANGELOG.html">Active Support</a>, and <a href="http://aws.rubyonrails.com/files/CHANGELOG.html">Action Web Service</a>.</p>
<p>No application changes should be required. Update using <code>gem update rails</code></p>