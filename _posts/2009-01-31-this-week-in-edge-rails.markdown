---
layout: post
title: This Week in Edge Rails
categories:
- edge
author: Mike Gunderloy
published: true
date: 2009-01-31 16:48:00.000000000 +00:00
---
<h3>January 24, 2009 &#8211; January 30, 2009</h3>
<p>This week we saw 35 commits in edge Rails &#8211; though many are bug fixes and minor things. Here&#8217;s one more preview of some of the recent and significant changes.</p>
<h2>Localized Views</h2>
<p>Rails can now provide localized views, depending on the locale that you have set. For example, suppose you have a <code>Posts</code> controller with a <code>show</code> action. By default, this will render <code>app/views/posts/show.html.erb</code>. But if you set <code>I18n.locale = :da</code>, it will render <code>app/views/posts/show.da.html.erb</code>. If the localized template isn&#8217;t present, the undecorated version will be used. Rails also includes <code>I18n#available_locales</code> and <code>I18n::SimpleBackend#available_locales</code>, which return an array of the translations that are available in the current Rails project.</p>
<p><a href="http://github.com/rails/rails/commit/5c062bf1000886d26b3a4c3b08dfb6618a4adcdf">commit</a><br />
<a href="http://github.com/rails/rails/commit/a98cd7ca9b2f24a4500963e58ba5c37d6bdf9259">commit</a></p>
<h2>Reconnecting MySQL Connections</h2>
<p>MySQL supports a reconnect flag in its connections &#8211; if set to true, then the client will try reconnecting to the server before giving up in case of a lost connection. You can now set <code>reconnect = true</code> for your MySQL connections in <code>database.yml</code> to get this behavior from a Rails application. The default is <code>false</code>, so the behavior of existing applications doesn&#8217;t change.</p>
<p><a href="http://github.com/rails/rails/commit/5fe6635e05a18b312c47fe6bbbaf88fd62e7703d">commit</a></p>
<h2>Easier Testing for <span class="caps">JDBC</span></h2>
<p>To make life easier for anyone using Rails on JRuby, Active Record now includes test tasks for a bunch of database accessible via <span class="caps">JDBC</span>: Derby, H2, hsqldb, MySQL, PostgreSQL, and sqlite3 (the latter three are also available through non-<span class="caps">JDBC</span> connections, as you know). You need to have the database, the activerecord-jdbc-adapter gem installed, and the specific activerecord-jdbc<em>database</em>-gem for the database you&#8217;re testing. Then you can run tests like this: <code>jruby -S rake test_jdbcmysql</code> (with similar tests for the other adapters, of course).</p>
<p><a href="http://github.com/rails/rails/commit/4ef9845aa324679b88e19b8223dd90b774215bc6">commit</a></p>
<h2><span class="caps">HTTP</span> Digest Authentication Support</h2>
<p>This one first appeared a couple of weeks ago, but was reverted due to some problems with the initial implementation. Fortunately, the problems were resolved, and Rails 2.3 will ship with built-in support for <span class="caps">HTTP</span> digest authentication. Ryan Daigle published some <a href="http://ryandaigle.com/articles/2009/1/30/what-s-new-in-edge-rails-http-digest-authentication">sample code</a>.</p>
<p><a href="http://github.com/rails/rails/commit/306cc2b920203cfa51cee82d2fc452484efc72f8">commit</a></p>
<h2>grouped_options_for_select Helper Method</h2>
<p>Action View already has a bunch of helpers to aid in generating select controls, but now there&#8217;s one more: <code>grouped_options_for_select</code>. This one accepts an array or hash of strings, and converts them into a string of <code>option</code> tags wrapped with <code>optgroup</code> tags. For example:</p>
<pre><code>
 grouped_options_for_select([["Hats", 
   ["Baseball Cap","Cowboy Hat"]]], 
   "Cowboy Hat", "Choose a product...")
</code></pre>
<p>returns</p>
<pre><code>
 &lt;option value=""&gt;Choose a product...&lt;/option&gt;
 &lt;optgroup label="Hats"&gt;
   &lt;option value="Baseball Cap"&gt;Baseball Cap&lt;/option&gt;
   &lt;option selected="selected" value="Cowboy Hat"&gt;
     Cowboy Hat
   &lt;/option&gt;
 &lt;/optgroup&gt;
</code></pre>
<p><a href="http://github.com/rails/rails/commit/8761663a68bd7ddd918f78fb3def4697784024f2">commit</a></p>