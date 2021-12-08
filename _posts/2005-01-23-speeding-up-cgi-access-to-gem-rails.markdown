---
layout: post
title: Speeding up CGI access to Gem Rails
categories:
- documentation
author: admin
published: true
date: 2005-01-23 00:31:07.000000000 +00:00
---
<p>Jamis has a <a href="http://www.jamisbuck.org/jamis/blog.cgi/programming/ruby/Making%20CGI%20Rails%20Faster_20050121132927.tx">nice article</a> demonstrating how he decreased the reload time from 2.4 seconds to just 1.1 seconds on <span class="caps">CGI</span> access to his Gem Rails application:</p>
<blockquote>Rails&rsquo; preferred installation method is RubyGems, a convenient, powerful utility for installing Ruby libraries and applications. Unfortunately, that convenience comes at a price&mdash;loading a library via RubyGems adds some overhead. Recent releases of RubyGems have made some good progress in reducing that overhead, but it still exists.</blockquote>
<p>If you&#8217;re running WEBrick or FastCGI for development, this is not an issue, though.</p>