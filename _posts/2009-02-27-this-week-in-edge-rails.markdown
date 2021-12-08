---
layout: post
title: This Week in Edge Rails
categories:
- edge
author: Mike Gunderloy
published: true
date: 2009-02-27 13:20:00.000000000 +00:00
---
<h3>February 14, 2009 &#8211; February 27, 2009</h3>
<p>The sharp-eyed will notice that This Week covers two weeks this week. As Rails 2.3 approaches release, the core team is getting pickier about what goes into the source code, and is concentrating on fixing bugs. You can expect to see Rails 2.3 RC2 very soon, and that may be the last release candidate. So if you haven&#8217;t tested your own applications on Rails 2.3 yet, it&#8217;s time to do so. The edge code is generally stable right now, so it&#8217;s a great time to take a look.</p>
<h2>Batch Processing</h2>
<p>You can now process large numbers of records from an ActiveRecord model with less pressure on memory by using <code>find_in_batches</code>:</p>
<pre><code>
Customer.find_in_batches(:conditions =&gt; {:active =&gt; true}) do |customer_group|
  customer_group.each { |customer| customer.update_account_balance! }
end
</code></pre>
<p>You can pass most of the <code>find</code> options into <code>find_in_batches</code>. However, you cannot specify the order that records will be returned in (they will always be returned in ascending order of primary key, which must be an integer), or use the <code>:limit</code> option. Instead, use the <code>:batch_size</code> option, which defaults to 1000, to set the number of records that will be returned in each batch.</p>
<p>The new <code>each</code> method provides a wrapper around <code>find_in_batches</code> that returns individual records, with the find itself being done in batches (of 1000 by default):</p>
<pre><code>
Customer.each do |customer|
  customer.update_account_balance!
end
</code></pre>
<p>Note that you should only use this method when you have enough records to justify batch processing: for small numbers of records (less than 1000), you should just use the regular find methods with your own loop.</p>
<p><a href="http://github.com/rails/rails/commit/d13623ca46c82120c398f4634e206422fc3ad7ea">commit</a></p>
<h2>A Note About Template Loading</h2>
<p>After some extensive work by several authors (here&#8217;s the <a href="http://rails.lighthouseapp.com/projects/8994/tickets/1909">Lighthouse ticket</a>), Rails 2.3 includes the ability to enable or disable cached templates for any particular environment. Cached templates give you a speed boost because they don&#8217;t check for a new template file when they&#8217;re rendered &#8211; but they also mean that you can&#8217;t replace a template &#8220;on the fly&#8221; without restarting the server.</p>
<p>In most cases, you&#8217;ll want template caching to be turned on in production, which you can do by making a setting in your <code>production.rb</code> file:</p>
<pre><code>
config.action_view.cache_template_loading = true
</code></pre>
<p>This line will be generated for you by default in a new Rails 2.3 application. But please note: if you&#8217;ve upgraded from an older version of Rails, you won&#8217;t have this setting in your <code>production.rb</code> and template caching will be off by default. Unless you really need the ability to update templates in production without restarting the server, you should be sure to add this setting when you upgrade.</p>