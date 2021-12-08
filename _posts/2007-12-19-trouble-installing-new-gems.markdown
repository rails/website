---
layout: post
title: Trouble installing new gems? (Part II)
categories:
- documentation
author: David
published: true
date: 2007-12-19 16:23:00.000000000 +00:00
---
<p>A number of users have reported problems installing the latest Rails gems, especially on Windows. The solution is to upgrade RubyGems to version <strike>0.9.5</strike> 1.0.0 before upgrading. You can check your RubyGems version by:</p>
gem &#8212;version
<p>If <strike>0.9.5</strike> 1.0.0 is not the answer, do (you may not need to prefix with sudo, on OS X you do, some &#8217;nix distributions too, but not Windows):</p>
sudo gem update &#8212;system
<p>Then do:</p>
sudo gem install rails
<p>And while this should no longer be an issue, you can always install Rails from the Rails gem repository if the official one is having issues for whatever reason (such as right after a new release where the mirrors have some times not caught up and are spewing 404 errors):</p>
sudo gem install rails &#8212;source http://gems.rubyonrails.org
<p>If you want to use SQLite3 for a new application, first make sure that you have SQLite3 itself installed. If not, you can get it from the <a href="http://www.sqlite.org/download.html">SQLite download page</a>. Then make sure you have the Ruby bindings installed (the gem is called sqlite3-ruby). If you don&#8217;t, just:</p>
sudo gem install sqlite3-ruby
<p>If you don&#8217;t want to use SQLite3, that&#8217;s fine. Just do &#8220;rails -d mysql myapp&#8221; when creating your new application to get MySQL preconfigured. Or &#8220;rails -d postgresql myapp&#8221;. Or any other adapter you might want to use that you have installed, like Oracle, <span class="caps">SQL</span> Server, or what have you. The only thing we changed was which database adapter would be preconfigured if you didn&#8217;t explicitly set which to use.</p>
<p><b><span class="caps">UPDATE</span>:</b> RubyGems 1.0.0 is now out, which should fix the problems with Mongrel and Windows.</p>