---
layout: post
title: Playing Active Records on MS SQLServer and DB2
categories:
- horizon
author: admin
published: true
date: 2004-12-29 00:16:46.000000000 +00:00
---
<p>The work originally started by <a href="http://www.joeygibson.com/blog">Joey Gibson</a> on the MS SQLServer adapter around RubyConf is now finally nearing completion. The adapters have been charged with adding the <span class="caps">LIMIT</span>-condition and that made it possible to do the &#8220;<span class="caps">SELECT</span> <span class="caps">TOP</span> X&#8221; style that <span class="caps">SQL</span> Server needs without dirty hacks.</p>
<p>So the current sqlserver adapter in Subversion is actually quite functional and passing almost all of the unit tests. DeLynn Berry has accepted the responsibility for tying up the loose ends.</p>
<p>At the same time, Maik Schmidt has been busy finishing the DB2 adapter, which is already available as a <a href="http://dev.rubyonrails.com/ticket/386">patch</a> on Trac. This baby is passing everything but the DB-specific <span class="caps">OFFSET</span> test, so you should happily be able to use that right away.</p>
<p>So it looks like Active Record will finally see the adoption of new adapters in the next release. On the horizon is a long-awaited Oracle adapter by Jim Weirich and a FrontBase adapter by Eric Ocean.</p>
<p>Oh, and I almost forgot, Jeremy Kemper has uploaded the <a href="http://dev.rubyonrails.com/ticket/381">first patch</a> for the changes needed to make the SQLite adapter compatible with the new <a href="http://www.jamisbuck.org/jamis/blog.cgi/programming/ruby/SQLite3%20Bindings%20for%20Ruby_20041219215155.tx">SQLite3 bindings</a> by Jamis Buck.</p>