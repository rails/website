---
layout: post
title: This Week in Edge Rails
categories:
- edge
author: Mike Gunderloy
published: true
date: 2008-12-19 13:55:00.000000000 +00:00
---
<h3>December 13-December 19, 2008 Edition</h3>
<p>The Rails team hasn&#8217;t been hibernating this week: 50 commits hit the edge branch, from a variety of developers. Here&#8217;s my pick of the most interesting and significant new core code for the week.</p>
<h2>Rails Metal</h2>
<p>If you&#8217;ve been keeping in touch with Rails at all, you&#8217;ve heard about Metal this week: superfast endpoints inside of your Rails applications that bypass routing and Action Controller to give you raw speed (at the cost of all the things in Action Controller, of course). This builds on all of the recent foundation work to make Rails a Rack application with an exposed middleware stack. Rather than explain Metal in more detail, here are places you can read more about it:</p>
<ul>
	<li><a href="https://rubyonrails.org/2008/12/17/introducing-rails-metal">Introducing Rails Metal</a> by <span class="caps">DHH</span></li>
	<li><a href="http://soylentfoo.jnewland.com/articles/2008/12/16/rails-metal-a-micro-framework-with-the-power-of-rails-m">Rails Metal: a micro-framework with the power of Rails</a> by Jesse Newland</li>
	<li><a href="http://www.railsinside.com/deployment/180-metal-super-fast-endpoints-within-your-rails-apps.html">Metal: Super-fast Endpoints within your Rails Apps</a> by Peter Cooper</li>
	<li><a href="http://ryandaigle.com/articles/2008/12/18/what-s-new-in-edge-rails-rails-metal">What&#8217;s New in Edge Rails: Rails Metal</a> by Ryan Daigle</li>
	<li>The comments to the <a href="http://github.com/rails/rails/commit/8c3a54366435eebc2c8aa63b63e1349ce74a7b38#comments">actual code commit</a> are illuminating and sometimes contentious as well.</li>
</ul>
<h2>Rack-based Session Stores</h2>
<p>A big change pushed the underpinnings of Action Controller session storage down to the Rack level. This involved a good deal of work in the code, though it should be completely transparent to your Rails applications (as a bonus, some icky patches around the old <span class="caps">CGI</span> session handler got removed). It&#8217;s still significant, though, for one simple reason: non-Rails Rack applications have access to the same session storage handlers (and therefore the same session) as your Rails applications. In addition, sessions are now lazy-loaded (in line with the loading improvements to the rest of the framework). <a href="http://github.com/rails/rails/commit/ed708307137c811d14e5fd2cb4ea550add381a82">commit</a></p>
<p>A related change provides persistent session identifiers for cookie sessions, with <span class="caps">API</span> compatibility with the server-side stores. <a href="http://github.com/rails/rails/commit/3ff6b00ee30d0961f57e3c4b64ec8ff0155aaf2d">commit</a></p>
<h2><span class="caps">MIME</span> Type Handling</h2>
<p>There are a couple of changes to the code for handling <span class="caps">MIME</span> types in Rails. First, <code>MIME::Type</code> now implements the <code>=~</code> operator, making things much cleaner when you need to check for the presence of a type that has synonyms:</p>
<pre><code>
if content_type &amp;&amp; Mime::JS =~ content_type
  # do something cool
end

Mime::JS =~ "text/javascript"        =&gt; true
Mime::JS =~ "application/javascript" =&gt; true
</code></pre>
<p>The other change is that the framework now uses the <code>Mime::JS</code> when checking for javascript in various spots, making it handle those alternatives cleanly. <a href="http://github.com/rails/rails/commit/f36dafa492e3de66e624d81d6860f5f0536de6b0">commit</a> <a href="http://github.com/rails/rails/commit/4966076d35d5d9510590d87d90dae8daf79b2069">commit</a></p>
<h2>Active Record Cleanup</h2>
<p>Even though Active Record has been a core part of Rails basically forever, people are still eking out performance and usability gains here and there. This week saw commits to stop generating some useless queries when working with <code>belongs_to</code> associations (<a href="http://github.com/rails/rails/commit/707d0dd3e1e8df7771073670e4257d933d2818f9">commit</a>), give better error messages on failed <code>find_by_foo!</code> calls (<a href="http://github.com/rails/rails/commit/428e77bf0fcee4369cb8d94011141f791b8e2ba9">commit</a>), fix some association preloading issues (<a href="http://github.com/rails/rails/commit/a9422cc1db9501a80ecf2c25a5d3b0c4f4f32763">commit</a> and <a href="http://github.com/rails/rails/commit/c9ab7098be7bdd748c0f4a49c8ef015b4aad3108">commit</a>), and improve performance with the MySQL adapter (<a href="http://github.com/rails/rails/commit/8326b95169ae6af3b81f5596107fef9db4bcbbb0">commit</a>).</p>
<h2>Odds and Ends</h2>
<p>Remember the cleanup for noise in the log files that edge got a couple of weeks ago? Building on that, we&#8217;ve now got prettier printing for output from any Gem in the backtrace. <a href="http://github.com/rails/rails/commit/f9a02b12d15bdbd3c2ed18b16b31b712a77027bc">commit</a></p>
<p>If you&#8217;re on edge, Rails now enforces the requirement for Mocha 0.9.3 or higher, so that you can run the tests. <a href="http://github.com/rails/rails/commit/a392f34fb4069ab847ff631130d023cdaf896735">commit</a></p>
<p>ETag handling has been cleaned up a bit: Rails will now skip sending an ETag header when there&#8217;s no body to the response or when sending files with <code>send_file</code>. <a href="http://github.com/rails/rails/commit/9e2b4a10f7f091868b3c3701efb4c04048455706">commit</a></p>
<p>If you want to track down who worked on Rails in the past, it&#8217;s gotten easier thanks to a huge data collection and patching effort by Xavier Noria: he went through all of the changelogs and normalized author names, so we don&#8217;t have the confusing mash of names, handles, and email addresses in there any more. <a href="http://github.com/rails/rails/commit/46c7dd234807b2d24c8c742acb18c633b69e385d">commit</a></p>