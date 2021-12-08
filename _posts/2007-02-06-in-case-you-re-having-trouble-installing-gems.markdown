---
layout: post
title: In case you're having trouble installing gems...
categories:
- tools
author: chad
published: true
date: 2007-02-06 19:54:00.000000000 +00:00
---
<p>A significant number of Rails developers have reported problems installing gems with the updated RubyGems release.  If you&#8217;re experiencing a problem that looks anything like this:</p>
$ gem update sqlite3-ruby Updating installed gems… <span class="caps">ERROR</span>: While executing gem … (NoMethodError) undefined
method `refresh’ for #<hash:0x14e0a4c>
<p>&#8230;you should remove your local source_cache file.  This is the file that locally caches any gem metadata from the gem server to avoid having to re-download it every time you execute a gem command.</p>
<p>To discover the location of this file on your system, run the following command:</p>
$ gem env
RubyGems Environment:
- <span class="caps">VERSION</span>: 0.9.2 (0.9.2)
- <span class="caps">INSTALLATION</span> <span class="caps">DIRECTORY</span>: /usr/local/lib/ruby/gems/1.8
- <span class="caps">GEM</span> <span class="caps">PATH</span>:
- /usr/local/lib/ruby/gems/1.8
- <span class="caps">REMOTE</span> <span class="caps">SOURCES</span>:
- http://gems.rubyforge.org
<p>The source_cache file should be in the path labeled by <span class="caps">GEM</span> <span class="caps">PATH</span>.  Removing that file should clear up any related issues.</p>
<p>This solution is a workaround pending a fix by the RubyGems team.</p>