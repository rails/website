---
layout: post
title: Having problems running tests under 1.8.2?
categories:
- general
author: admin
published: true
date: 2005-01-15 18:06:16.000000000 +00:00
---
<p>Unfortuntately, the snapshot of test/unit included in Ruby 1.8.2 is broken for use with Rake. Steps are being made to remedy the situation, but in the mean while, you can <a href="http://dev.rubyonrails.com/attachment/ticket/474/dir.rb.cleanup.patch?format=txt">apply the fix</a> needed to the Ruby source itself. It&#8217;s a two-line change, but pretty important two lines.</p>
<p>In order to apply this fix, you need to:</p>
<pre>cd /usr/local/lib/ruby/1.8</pre>
<p>(or where ever you have Ruby installed) and do:</p>
<pre>patch -p0 &lt; /path/to/fix/dir.rb.cleanup.patch</pre>
<p>Hopefully a more permanent solution can be found in Rake or Ruby shortly.</p>