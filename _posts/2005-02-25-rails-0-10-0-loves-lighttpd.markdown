---
layout: post
title: Rails 0.10.0 loves lighttpd
categories:
- documentation
author: admin
published: true
date: 2005-02-25 19:41:52.000000000 +00:00
---
<p>With the release of Rails 0.10.0, the reign of Apache has finally ended and equal opportunity for all web servers has been introduced. The most important beneficial of this is <a href="http://www.lighttpd.net/">lighttpd</a>. The server describes itself as &#8220;&#8230;a secure, fast, compliant and very flexible web-server which has been optimized for high-performance environments&#8221; and is <a href="http://weblog.textdrive.com/">catching the attention</a> of a lot of people lately.</p>
<p>Personally, I&#8217;ve been most interested in its <a href="http://www.lighttpd.net/documentation/fastcgi.html">FastCGI implementation</a> that includes a load balancer component. But whether you need that or not, you owe it to yourself to check out lighttpd. Here&#8217;s a sample minimal configuration file needed to setup lighttpd to run a Rails application under FastCGI:</p>
<pre><code>
server.port = 8080
server.bind = "127.0.0.1"
# Needed on OS X: server.event-handler = "freebsd-kqueue"
 
server.modules = ( "mod_rewrite", "mod_fastcgi" )
 
url.rewrite = ( "^/$" =&gt;"index.html", "^([^.]+)$" =&gt;"$1.html" )
server.error-handler-404 = "/dispatch.fcgi"
 
server.document-root = "/path/application/public"
server.errorlog      = "/path/application/log/server.log"
 
fastcgi.server = ( ".fcgi" =&gt; ( "localhost" =&gt; (
 "min-procs" =&gt; 1,  "max-procs" =&gt; 5,
 "socket"   =&gt;"/tmp/application.fcgi.socket",
 "bin-path" =&gt;"/path/application/public/dispatch.fcgi",
 "bin-environment" =&gt; ( "RAILS_ENV" =&gt;"development" )
) ) )
</code></pre>
<p>This configuration is also to be found in the <span class="caps">README</span> file of new Rails installations.</p>