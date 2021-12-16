---
layout: post
title: This Week in Edge Rails
categories:
- edge
author: Mike Gunderloy
published: true
date: 2009-03-13 12:22:00.000000000 +00:00
---
<h3>March 6, 2009 &#8211; March 13, 2009</h3>
<p>Things have been pretty busy on the development side since the release of <a href="https://rubyonrails.org/2009/3/5/rails-2-3-rc2-final-stop-before-release">Rails 2.3 RC2</a>. The core team has been making a serious effort to review all of the open bugs and patches with an eye towards getting us a solid release. At this point, the bar for new features is set fairly high, but even so, there have been an incredible 94 commits in the week since RC2 &#8211; mostly fixes to ensure expected behavior and stability. Here are some of the highlights.</p>
<h2>Swappable Parsers for XMLmini</h2>
<p>The support for <span class="caps">XML</span> parsing in ActiveSupport has been made more flexible by allowing you to swap in different parsers. By default, it uses the standard <span class="caps">REXML</span> implementation, but you can easily specify the faster LibXML or Nokogiri implementations for your own applications, provided you have the appropriate gems installed:</p>
<pre><code>
XmlMini.backend = 'LibXML'
XmlMini.backend = 'Nokogiri'
</code></pre>
<p><a href="http://github.com/rails/rails/commit/822c41d69d9228c9912d29ac45155d3a16bb5c50">commit</a> <a href="http://github.com/rails/rails/commit/694998ee4fb8d257ba78424cab630846327a0889">commit</a></p>
<h2>rake gem Task Rewrite</h2>
<p>The internals of the various <code>rake gem</code> tasks have been substantially revised, to make the system work better for a variety of cases. The gem system now knows the difference between development and runtime dependencies, has a more robust unpacking system, gives better information when querying for the status of gems, and is less prone to &#8220;chicken and egg&#8221; dependency issues when you&#8217;re bringing things up from scratch. There are also fixes for using gem commands under JRuby and for dependencies that try to bring in external copies of gems that are already vendored.</p>
<p><a href="http://github.com/rails/rails/commit/99d75a7b02bf430a124b9c3e2515850959d78acf">commit</a> <a href="http://github.com/rails/rails/commit/5b751ae0b3f6c10a1053e4a2e04fd92d228d787f">commit</a> <a href="http://github.com/rails/rails/commit/9d906707bea997016fd370e33e12dbc21cfcc531">commit</a></p>
<h2>Routing Fixes</h2>
<p>A couple of small fixes to the routing engine. First, member routes with requirements now work (previously the requirements were ignored):</p>
<pre><code>
map.resources :orders, 
  :requirements =&gt; { :id =&gt; %r([^/;,?]+) }, 
  :member =&gt; { :accept =&gt; :get }
</code></pre>
<p><a href="http://github.com/rails/rails/commit/5b7527ca44521edf9782b3d7f449bf09a29267f2">commit</a></p>
<p>Also, shallow routes now work properly with namespaces (<a href="http://github.com/rails/rails/commit/5c87e9adddc22703a3dbbb785e32fafe0e91ce78">commit</a>) and you can now use the <code>OPTIONS</code> verb in route conditions (<a href="http://github.com/rails/rails/commit/5e0f6214d2421a4931c85ee6a239158c69e57b65">commit</a>).</p>
<h2>Client-side Caching Improvements</h2>
<p>The <code>expires_in</code>, <code>stale</code>, and <code>fresh_when</code> methods now accept a <code>:public</code> option to make them work well with proxy caching.</p>
<pre><code>
expires_in 10.minutes, :public =&gt; true
fresh_when :last_modified =&gt; @user.updated_at.utc, 
  :public =&gt; true
fresh_when :etag =&gt; @user, :public =&gt; true
</code></pre>
<p><a href="http://github.com/rails/rails/commit/f2a32bd0dedf11021027e36cc2c99f97434cae17">commit</a></p>
<h2>Odds and Ends</h2>
<p>The <code>String#parameterize</code> method now accepts an optional separator character.</p>
<pre><code>
"My big duck".parameterize =&gt;      "my-big-duck"
"My big duck".parameterize('_') =&gt; "my_big_duck"
</code></pre>
<p><a href="http://github.com/rails/rails/commit/20d3892f46c553e8ca3d4e8d223a3bd92789556d">commit</a></p>
<p>The <code>ActiveRecord::Base#invalid?</code> method now works as the opposite of <code>ActiveRecord::Base#valid?</code>. (<a href="http://github.com/rails/rails/commit/96eaeee4467a03cba3c4c30aeb6fc6afe545ae1d">commit</a>)</p>
<p>The <code>ActiveSupport::Json.decode</code> method now handles <code>\u0000</code> style escape sequences. (<a href="http://github.com/rails/rails/commit/9b9b2937ce3bef3bca9d22821e76c40cc74fa689">commit</a>)</p>
<p>You can now set content types such as <code>multipart/mixed</code> in Action Mailer. (<a href="http://github.com/rails/rails/commit/1dff106888d671dac07f93711ecb319170132c56">commit</a>)</p>
<p>Rails 2.3 will ship with a bundled version of Rack, but if you have Rack 1.0 installed as a gem it will use the gem version instead. (<a href="http://github.com/rails/rails/commit/0a887e2386a827f554c685dccf91701bb38422b5">commit</a>)</p>