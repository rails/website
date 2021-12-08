---
layout: post
title: Rails System Back on Track
categories:
- general
author: danp
published: true
date: 2006-06-11 22:21:00.000000000 +01:00
---
<p>Hopefully you didn&#8217;t notice, but I&#8217;ve been very busy this weekend. I finally took the plunge and got all the Rails applications that run on this machine up to snuff. All applications hosted here are now deployed with <a href="http://manuals.rubyonrails.com/read/book/17">Capistrano</a>, run under <a href="http://mongrel.rubyforge.org">Mongrel</a> (using the <a href="http://mongrel.rubyforge.org/docs/mongrel_cluster.html">mongrel_cluster</a> plugin) with requests being handled by <a href="http://httpd.apache.org">Apache 2.2</a> and proxied to Mongrel by the <a href="http://httpd.apache.org/docs/2.2/mod/mod_proxy_balancer.html">mod_proxy_balancer</a> module. So far it seems to be working great. You&#8217;ll notice that the <a href="http://wiki.rubyonrails.org">Wiki</a>, the <a href="http://manuals.rubyonrails.org">Manuals</a> and the weblog are all much zippier. The machine seems to be much happier as well.</p>
<p>And, to cap off all this fun, the weblog has been migrated from Typo to Mephisto, the blog/<span class="caps">CMS</span> engine from Rails Core member <a href="http://techno-weenie.net">Rick Olson</a>. The feed has also been moved to FeedBurner and redirects have been put in place so your reader should make the change automatically. If not, just subscribe <a href="http://feeds.feedburner.com/RidingRails">here</a>.</p>
<p>Thanks to everyone who helped me check and test things! <a href="http://dev.rubyonrails.org">Trac</a> improvements are next on my list. Stay tuned!</p>