---
layout: post
title: Ruby on Rails 2.3.5 Released
categories:
- releases
author: Gregg Pollack
published: true
date: 2009-11-30 19:58:00.000000000 +00:00
---
<p>Rails 2.3.5 was released over the weekend which provides several bug-fixes and one <a href="http://groups.google.com/group/rubyonrails-security/browse_thread/thread/4d4f71f2aef4c0ab">security fix</a>. It should be fully compatible with all prior 2.3.x releases and can be easily upgraded to with &#8220;gem update rails&#8221;.  The most interesting bits can be summarized in three points.</p>
<p><strong>Improved compatibility with Ruby 1.9</strong></p>
<p>There were a few small bugs preventing full compatibility with Ruby 1.9.  However, we wouldn&#8217;t be surprised you were already running Rails 2.3.X successfully before these bugs were fixed (they were small).</p>
<p><strong>RailsXss plugin availability</strong></p>
<p>As you may have heard, in Rails 3 we are now automatically escaping all string content in erb (where as before you needed to use &#8220;h()&#8221; to escape).  If you want to have this functionality today you can install Koz&#8217;s <a href="http://github.com/nzkoz/rails_xss">RailsXss plugin</a> in Rails 2.3.5.</p>
<p><strong>Fixes for the Nokogiri backend for XmlMini</strong></p>
<p>With Rails 2.3 we were given the ability to switch out the default <span class="caps">XML</span> parser from <span class="caps">REXML</span> to other faster parsers like Nokogiri.  There were a few issues with using Nokogiri which are now resolved, so if your application is parsing lots of xml you may want to switch to this faster <span class="caps">XML</span> parser.</p>
<p><strong>And that&#8217;s the gist of it</strong></p>
<p>Feel free to browse through the <a href="http://github.com/rails/rails/commits/v2.3.5/">commit history</a> if you&#8217;d like to see what else has been fixed (but it&#8217;s mostly small stuff).</p>