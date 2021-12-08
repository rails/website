---
layout: post
title: ! 'Rails 0.9.3: Optimistic locking, dynamic finders, 1.8.2'
categories:
- releases
author: admin
published: true
date: 2005-01-04 13:34:08.000000000 +00:00
---
<p>Rails is now fully compatible with Ruby 1.8.2, which we advice all to upgrade to as soon as possible. It contains a year&#8217;s worth of bug fixes for Ruby, so it&#8217;s great finally to be able to use the new version with Rails. But that is not all we got in store for 0.9.3. A few of the highlights are:</p>
<ul>
	<li><strong>Automated optimistic locking:</strong> Just add the field <code>lock_version</code> to your table and the associated class will be governed by optimistic locking that&#8217;ll raise an exception if a stale object attempts to save.</li>
</ul>
<ul>
	<li><strong>Dynamic finders:</strong> Finders like <code>Person.find_by_user_name</code>, <code>Payment.find_by_amount</code>, and even <code>Person.find_by_user_name_and_password</code> are now available with no code at all. Any column can be used and combined with other columns in the new dynamic finders.</li>
</ul>
<ul>
	<li><strong>MS <span class="caps">SQL</span> Server and DB2:</strong> Active Record now supports both Microsoft <span class="caps">SQL</span> Server (through <span class="caps">ADO</span>) and IBM&#8217;s DB2 databases.</li>
</ul>
<ul>
	<li><strong>MemCacheStore for sessions:</strong> You can now store sessions in Action Pack using Danga&#8217;s memcache technology.</li>
</ul>
<ul>
	<li><strong>Generators guard against reserved words:</strong> Not only will <code>./script/generate model Thread</code> be denied, you&#8217;ll also get a list of synonyms pulled live from WordNet!</li>
</ul>
<p>That&#8217;s just a small taste of the 35 changes, fixes, and features introduced with Rails 0.9.3. You can read the full story in the changelogs for <a href="http://ar.rubyonrails.com/files/CHANGELOG.html">Active Record</a>, <a href="http://ap.rubyonrails.com/files/CHANGELOG.html">Action Pack</a>, and <a href="http://rails.rubyonrails.com/files/CHANGELOG.html">Rails</a>.</p>
<h3>Upgrading from Rails 0.9.2 to 0.9.3</h3>
<p>There&#8217;s only one change you need to make in order to have your application updated from 0.9.2 to 0.9.3. In the config/environments/production.rb and config/environments/test.rb, you need to change:</p>
<pre>
  ActionController::Base.reload_dependencies = false
  ActiveRecord::Base.reload_associations     = false
</pre>
<p>&#8230;to:</p>
<pre>Dependencies.mechanism = :require</pre>

<p>And in config/environments/development.rb, you need to change:</p>
<pre>
  ActionController::Base.reload_dependencies = true
  ActiveRecord::Base.reload_associations     = true
</pre>
<p>&#8230;to:</p>
<pre>Dependencies.mechanism = :load</pre>
<p>If you&#8217;re coming on from 0.8.x, you&#8217;ll need to go through the <a href="http://manuals.rubyonrails.com/read/book/3">Upgrading to 0.9 manual</a>.</p>