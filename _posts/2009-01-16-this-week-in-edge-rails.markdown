---
layout: post
title: This Week in Edge Rails
categories:
- edge
author: Mike Gunderloy
published: true
date: 2009-01-16 13:30:00.000000000 +00:00
---
<h3>January 10, 2009 -January 16, 2009</h3>
<p>24 commits for edge Rails this week (with one patch ported over to the 2.2 branch as well). If you want a pre-release look at Rails 2.3, this is a fine time to install a copy of edge, if you&#8217;re not already there. It&#8217;s plenty stable enough for test sites, though there are a few rough patches yet.</p>
<h2>Nested Transactions in Active Record</h2>
<p>Several people contributed to a big patch that gives us nested transactions in Active Record, a much-requested feature. Now you can write code like this:</p>
<pre><code>
User.transaction do
    User.create(:username =&gt; 'Admin')
    User.transaction(:requires_new =&gt; true) do
      User.create(:username =&gt; 'Regular')
      raise ActiveRecord::Rollback
    end
  end
  
  User.find(:all)  # =&gt; Returns only Admin
</code></pre>
<p>Nested transactions let you rollback an inner transaction without affecting the state of the outer transaction. If you want a transaction to be nested, you must explicitly add the <code>:requires_new</code> option; otherwise, a nested transaction simply becomes part of the parent transaction (as it does currently on Rails 2.2). Under the covers, nested transactions are <a href="http://rails.lighthouseapp.com/projects/8994/tickets/383">using savepoints</a>, so they&#8217;re supported even on databases that don&#8217;t have true nested transactions. There is also a bit of magic going on to make these transactions play well with transactional fixtures during testing. <a href="http://github.com/rails/rails/commit/ab0ce052ba23a4cce7a84ecade0d00d9cc518ebd">commit</a></p>
<h2>MemCacheStore Enhancements</h2>
<p>Nahum Wild contributed some work that (inspired by his <a href="http://github.com/terrcin/spandex_mem_cache_store/tree/master">spandex_mem_cache_store</a> plugin) that enhances the performance of Rails when using <code>MemCacheStore</code>. The basic idea is to keep a per-request local cache of requests sent to <code>MemCacheStore</code>, cutting down on unnecessary reads and leading to better site performance. <a href="http://github.com/rails/rails/commit/a53ad5bba37199047ba20194933e122bf6b0252f">commit</a></p>
<h2>Making Active Record Callbacks behave</h2>
<p>You may recall the spot in the <a href="http://apidock.com/rails/ActiveRecord/Callbacks">Active Record documentation</a> that says &#8220;If a <code>before_*</code> callback returns false, all the later callbacks and the associated action are cancelled.&#8221; What you may not know is that this is actually <a href="http://rails.lighthouseapp.com/projects/8994/tickets/1735">broken</a> in the current version of Rails: if you cancel a <code>before_update</code> or <code>before_create</code> callback, the <code>after_save</code> callbacks still run. In Rails 2.3, this will behave the way that the documentation says it does. <a href="http://github.com/rails/rails/commit/7a0e7c7270548138a333bc39aab5aec80580174b">commit</a></p>
<h2>Fractional seconds for TimeWithZone</h2>
<p>The <code>Time</code> and <code>TimeWithZone</code> classes include an <code>xmlschema</code> method to return the time in an <span class="caps">XML</span>-friendly string. As of this week, <code>TimeWithZone</code> supports the same argument for specifying the number of digits in the fractional second part of the returned string that <code>Time</code> does:</p>
<pre><code>
&gt;&gt; Time.zone.now.xmlschema(6)
=&gt; "2009-01-16T13:00:06.13653Z"
</code></pre>
<p><a href="http://github.com/rails/rails/commit/296ca4da1700eb27a7043112d22027444ea0e548">commit</a></p>
<h2><span class="caps">JSON</span> Key Quoting</h2>
<p>If you look up the spec on the &#8220;json.org&#8221; site, you&#8217;ll discover that all keys in a <span class="caps">JSON</span> structure must be strings, and they must be quoted with double quotes. As of this week, Rails does the right thing here, even with numeric keys. <a href="http://github.com/rails/rails/commit/0bed5bdb213ea68e2f167ac4f61f698f37cf2d69">commit</a></p>
<h2>Test Refactoring</h2>
<p>Josh Peek spent some time refactoring various tests inside of Action Pack, including those for <a href="http://github.com/rails/rails/commit/282c1d6159a06dce4dd52c1849daad9e73480808">query string parsing</a>, <a href="http://github.com/rails/rails/commit/38a723e6ea770eb8a902ee85ef40f6a22e7cd1b8"><span class="caps">JSON</span> parameter parsing</a>, <a href="http://github.com/rails/rails/commit/40a75a509187b6759099a3644b7ae8db9fc14045"><span class="caps">XML</span> parameter parsing</a>, <a href="http://github.com/rails/rails/commit/92dbf5ba832c2c4d8f6fda8b151090069cd701f3">multipart parameter parsing</a>, and <a href="http://github.com/rails/rails/commit/18cb0493d1ec1990a45000b1f3e6d9714a849690"><span class="caps">URL</span>-encoded parameter parsing</a>. While you won&#8217;t see any new functionality as a result of this work, it&#8217;s worth shining a spotlight on the often-thankless cleanup that keeps the Rails code in good shape.</p>
<h2>Changes to Object#try</h2>
<p>After <a href="http://blog.lawrencepit.com/2009/01/11/try-as-you-might/">some discussion</a>, the semantics of <code>Object#try</code> have changed slightly: it now raises <code>NoMethodError</code> on private methods and always returns <code>nil</code> if the object is nil. <a href="http://github.com/rails/rails/commit/5339f813be99012aba01586743d8b24f065e7034">commit</a></p>