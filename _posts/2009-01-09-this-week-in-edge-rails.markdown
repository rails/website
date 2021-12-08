---
layout: post
title: This Week in Edge Rails
categories:
- edge
author: Mike Gunderloy
published: true
date: 2009-01-09 13:26:00.000000000 +00:00
---
<h3>January 3, 2009 -January 9, 2009</h3>
<p>It was a pretty light week for the edge Rails tree: about 20 commits. We&#8217;re starting to see things coalesce for a 2.3 release, though there&#8217;s no official release date yet. Here&#8217;s some of the highlights of what&#8217;s been going on.</p>
<h2>AssetTag Timestamp Caching</h2>
<p>You&#8217;re likely familiar with Rails&#8217; practice of adding timestamps to static asset paths as a &#8220;cache buster.&#8221; This helps ensure that stale copies of things like images and stylesheets don&#8217;t get served out of the user&#8217;s browser cache when you change them on the server. You can now modify this behavior with the <code>cache_asset_timestamps</code> configuration option for Action View. If you enable the cache, then Rails will calculate the timestamp once when it first serves an asset, and save that value. This means fewer (expensive) file system calls to serve static assets &#8211; but it also means that you can&#8217;t modify any of the assets while the server is running and expect the changes to get picked up by clients. <a href="http://github.com/rails/rails/commit/ce706b4b9be03a3f2e7d11438e6550d64c5f4461">commit</a></p>
<h2>Object#tap Backport</h2>
<p><code>Object#tap</code> is an addition to <a href="http://www.ruby-doc.org/core-1.9/classes/Object.html#M000309">Ruby 1.9</a> and 1.8.7 that is similar to the <code>returning</code> method that Rails has had for a while: it yields to a block, and then returns the object that was yielded. Rails now includes code to make this available to older versions of Ruby as well. <a href="http://github.com/rails/rails/commit/0f9e65b71f9af30dac17689e81f4353e9fcac5b6">commit</a></p>
<h2>Rack Version Bump</h2>
<p>During the week, the Rack project <a href="http://blade.nagaokaut.ac.jp/cgi-bin/scat.rb/ruby/ruby-talk/324073">released version 0.9</a> and Rails was quick to respond &#8211; the required version of Rack for Rails is now 0.9. So, if you&#8217;re running on edge, it&#8217;s time to update your gems. <a href="http://github.com/rails/rails/commit/b7ea4add86231ef628d479516c8a09ca55e610bc">commit</a></p>
<h2>Continuous Integration Setup</h2>
<p>If you&#8217;re interested in setting up your own continuous integration server to build the Rails source, the embedded instructions have been updated with the latest requirements and clarifications. Even if you want a CI server for something else, they&#8217;re worth looking at, as they&#8217;ll get you from zero to a running cc.rb instance very quickly. <a href="http://github.com/rails/rails/commit/19818eb0ea72cb99e98bd097d03ac8a69f204b6a">commit</a></p>