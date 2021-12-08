---
layout: post
title: This Week in Edge Rails
categories:
- edge
author: Mike Gunderloy
published: true
date: 2009-04-24 20:08:00.000000000 +01:00
---
<h3>April 18, 2009 &#8211; April 24, 2009</h3>
<p>Edge Rails has been undergoing major surgery for the past week, as the core team gets ready for a Rails 3.0 alpha release at RailsConf. We saw about 50 commits to the master branch in GitHub this week. Here&#8217;s a quick overview of the recent changes.</p>
<p><b>Rails 2.3.x Changes</b><br/></p>
<p>Before digging into the changes on the master branch, there were a few things committed to the 2-3-stable branch. If you&#8217;re running on 2.3 edge, these are ready for you; they&#8217;re also ported to the master branch already.</p>
<ul>
	<li>A couple of bugs involving associations with hash conditions have been fixed, notable to make sure that <code>:dependent =&gt; :delete</code> will work.</li>
	<li>The PostgreSQL Active Record adapter now does the right thing if you use tables in non-default schemas. You need to set the table name in your model class, of course: <code>set_table_name 'other_schema.customers'</code> <a href="http://github.com/rails/rails/commit/60601234708b34c81dcd6a58a0cad79a7520ce10">commit</a></li>
	<li>Also in the PostgreSQL adapter, a couple of bugs related to wrong quoting of names with capital letters are fixed.</li>
</ul>
<p><b>ActionView::Path Refactoring</b><br/></p>
<p>One major chunk of change in Rails 3 this week comes from the continued work to refactor Action Pack. This time, <code>ActionView::Path</code> was the target. Changes in <a href="http://github.com/rails/rails/commit/0a132c2fe13fb2b8d5dade9cf6abd70601376287">commit</a> include decoupling <code>ActionView::Path</code> from Action Controller and Action Mailer, which gives us two major benefits. First, consolidating similar code in one place makes it easier to understand and maintain. Second, by abstracting this stuff and giving it an <span class="caps">API</span>, we&#8217;ll make it possible for other components to participate in the controller layer, beyond mailers and traditional controllers.</p>
<p>There&#8217;s also some work here to set up for the future. The plan is to decouple templates from the file system, and to decouple localization from ActionView. Stay tuned!</p>
<p><b>Pluggable <span class="caps">JSON</span> Backends</b><br/></p>
<p>You may recall that recently Rails went to pluggable <span class="caps">XML</span> support. This week, thanks to work from Rick Olson, we have <a href="http://github.com/rails/rails/commit/3c4c6bd0df598f865f49a983b4c65c415af4bcfc">pluggable <span class="caps">JSON</span></a>. This means that you can replace the default <span class="caps">YAML</span>-based <span class="caps">JSON</span> support with the <span class="caps">JSON</span> gem:</p>
<pre><code>
ActiveSupport::JSON.backend = "JSONGem"
</code></pre>
<p>As part of this change, Rails now uses <code>ActiveSupport::JSON.encode()</code> wherever it needs <span class="caps">JSON</span>. This replaces using <code>#to_json</code>, and Rails team is recommending that you do the same. If you do choose to use <code>#to_json</code>, you need to be aware that some libraries might override it. You can use this pattern to make sure that you&#8217;re getting Rails&#8217; own definition of <code>#to_json</code>:</p>
<pre><code>
gem 'json'
# JSON gem loaded, which overwrites to_json
ActiveSupport::JSON.backend = "JSONGem"

class ActiveRecord::Base
  # replace the gem's to_json with Rails' own to_json
  alias to_json rails_to_json
end
</code></pre>
<p><b>Active Support à la carte</b><br/></p>
<p>In Rails 2.x, <code>require "active_support"</code> pulls in all core extensions at once. In Rails 3, <code>require "active_support"</code> only makes the extensions available; you have to explicitly require those you wish to use. Many of this week&#8217;s changes were concerned with breaking up Active Support so you can take just what you need and nothing more.</p>
<p>The end result is that it&#8217;s easy to cherry-pick features from Active Support without feeling like you&#8217;ve invited a portly gentleman for a piggyback ride. As an added bonus, all core extension documentation is now consolidated in one place: the core class. You don&#8217;t have to go poking around every extension module to find a method.</p>
<p>Internally, the core extensions have been reorganized so they can be directly required without assuming all of Active Support is available. Want inflections like <code>"car".pluralize</code>? <code>require "active_support/core_ext/string/inflections"</code> and you&#8217;ve got them. Note: the implementation and organization will change as we settle on the best way to provide core extensions.</p>
<p><b>Other Edge Changes</b><br/></p>
<ul>
	<li>The Rails extension to Pathname was dropped, since it was only used in one spot in the code. <a href="http://github.com/rails/rails/commit/bd84b820188daed991756531071137dc7e0876a0">commit</a></li>
	<li>Support for the DRb cache store has been removed. <a href="http://github.com/rails/rails/commit/595e03336f7366b5143a8af295b4e0fefbb8f294">commit</a></li>
	<li>The sqlite Adapter joins the PostgreSQL adapter in supporting microsecond resolution. <a href="http://github.com/rails/rails/commit/504d16ccdfcd689eac31c1646957b06cc0ce55d1">commit</a></li>
</ul>