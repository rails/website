---
layout: post
title: Fixing Ruby on OS X Tiger
categories:
- documentation
author: admin
published: true
date: 2005-04-30 07:00:02.000000000 +01:00
---
<p>Apple has done a great thing by including Ruby 1.8.2 in OS X 10.4, but unfortunately they stumbled just as they were to cross the finish line. Tiger has some deficiency that prevents it from installing native extensions properly. But there is quick room for remedy.</p>
<p>You can either grab the cool new <a href="http://wiki.rubyonrails.com/rails/show/HowtoInstallOnOSXTiger">Ruby on Rails installer for Tiger</a> that fixes Ruby itselfs and installs RubyGems, <span class="caps">FCGI</span>, and Rails in one fell swoop. Or if you already have stuff like RubyGems and the Rails installed, you can just grab this correction gem:</p>
<pre>sudo gem install fixrbconfig
sudo fixrbconfig</pre>
<p><a href="http://www.chadfowler.com/index.cgi/Computing/Programming/Ruby/FixTiger.rdoc,v">Curtsey</a> of the RubyGems team.</p>