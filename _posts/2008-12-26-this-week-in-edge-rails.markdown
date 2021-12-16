---
layout: post
title: This Week in Edge Rails
categories:
- edge
author: Mike Gunderloy
published: true
date: 2008-12-26 14:22:00.000000000 +00:00
---
<h3>December 20-December 26, 2008 Edition</h3>
<p>The biggest change in Rails in recent memory isn&#8217;t reflected in edge Rails yet: I&#8217;m speaking, of course, about the <a href="https://rubyonrails.org/2008/12/23/merb-gets-merged-into-rails-3">merger of Merb into Rails 3</a> . There is a <strong>3-0-unstable</strong> branch in the repository, but it hasn&#8217;t yet started to diverge from the main line of development. I&#8217;ll continue to focus on the <strong>master</strong> branch, which will be released as Rails 2.3, for the time being.</p>
<p>And Rails 2.3 is still cooking along. The team managed 39 commits this week, despite people taking holiday time off. Many of those were minor bug fixes, but here are a few things you might want to track in the new development.</p>
<h2>Unified rendering</h2>
<p><code>ActionController::Base#render</code> is a lot smarter about deciding what to render. You can just throw things at it and expect to get the right results. If you&#8217;re using Rails 2.2, you often need to supply explicit information to render:</p>
<pre><code>
render :file =&gt; '/tmp/random_file.erb'
render :template =&gt; 'other_controller/action'
render :action =&gt; 'show'
</code></pre>
<p>Now in Rails 2.3, you can just supply what you want to render:</p>
<pre><code>
render '/tmp/random_file.erb'
render 'other_controller/action'
render 'show'
render :show
</code></pre>
<p>Rails chooses between file, template, and action depending on whether there is a leading slash, an embedded slash, or no slash at all in what&#8217;s to be rendered. Note that you can also use a symbol instead of a string when rendering an action. Other rendering styles (<code>:inline, :text, :update, :nothing, :json, :xml, :js</code>) still require an explicit option.</p>
<p><a href="http://github.com/rails/rails/commit/061952392afd1dae1aa97a816e9a0c79df7c4514">commit</a> <a href="http://github.com/rails/rails/commit/d67e03871eabb912434dafac3eeb8e6ea7c5585f">commit</a><br />
<a href="http://github.com/rails/rails/commit/cd1d6e8768ae13b11bc343701037b20ad35e6f1e">commit</a><br />
<a href="http://github.com/rails/rails/commit/80307c8b0a889acc7abb7f4e52fd4c02e1063ba8">commit</a></p>
<h2>ActiveRecord fixes</h2>
<p>A couple of fixes to ActiveRecord get rid of failing cases for associations. One handles quoting table names in some <code>has_many :through</code> associations &#8211; if the table name contains a <span class="caps">SQL</span> keyword, then you can&#8217;t use it in such an association in Rails 2.2. <a href="http://github.com/rails/rails/commit/75a133f92ff7e27b83032babf829d8a58803bb3c">commit</a></p>
<p>The other fix allows you to once again use a hash in conditions for a <code>has_many</code> relationship:</p>
<pre><code>
has_many :orders, :conditions =&gt; {:status =&gt; 'confirmed'}
</code></pre>
<p>That worked in Rails 2.1, fails in Rails 2.2, and will now work again in Rails 2.3 (if you&#8217;re dealing with this issue in Rails 2.2, you can use a string rather than a hash to specify conditions). <a href="http://github.com/rails/rails/commit/b17b9371c6a26484eb1984d45acffcdcd91b1ae1">commit</a></p>
<p>Some side effects of calling <code>Model#last</code> (it would change the order for other finders within the same scope) have been removed. <a href="http://github.com/rails/rails/commit/f7bd0beb67c5d9d50e37aa596605b91e61197fbe">commit</a></p>
<h2>Prompts for Date Select Helpers</h2>
<p>With this patch, you can supply custom prompts for the various date select helpers (<code>date_select</code>, <code>time_select</code>, and <code>datetime_select</code>), the same way you can with collection select helpers. You can supply a prompt string or a hash of individual prompt strings for the various components. You can also just set <code>:prompt</code> to <code>true</code> to use the custom generic prompt:</p>
<pre><code>
select_datetime(DateTime.now, :prompt =&gt; true)

select_datetime(DateTime.now, :prompt =&gt; "Choose date and time")

select_datetime(DateTime.now, :prompt =&gt; 
  {:day =&gt; 'Choose day', :month =&gt; 'Choose month', 
   :year =&gt; 'Choose year', :hour =&gt; 'Choose hour', 
   :minute =&gt; 'Choose minute'})
</code></pre>
<p><a href="http://github.com/rails/rails/commit/389534c38c3baaa63ce5cc2ba3bd169415419167">commit</a></p>
<h2>Odds and Ends</h2>
<p>The dbconsole script now lets you use an all-numeric password without crashing. <a href="http://github.com/rails/rails/commit/7cda0df7f1511a10c515165dbce76e5c68b654ff">commit</a></p>
<p>You can now use symbols for the <code>:type</code> option of <code>send_file</code> and <code>send_data</code>, like this: <code>send_file("fabulous.png", :type =&gt; :png)</code>. <a href="http://github.com/rails/rails/commit/fcd58dc27a99085b161f2463988d4ee373d44ec6">commit</a></p>
<p>If you&#8217;re using Active Support <a href="http://afreshcup.com/2008/10/19/coming-in-rails-22-delegate-prefixes/">delegates</a>, the new <code>:allow_nil</code> option lets you return nil instead of raising an exception when the target object is nil. <a href="http://github.com/rails/rails/commit/e8de7a67a5ef063164da022845a7cae1753da80e">commit</a></p>
<p>You can now specify a particular timestamp for <code>updated_at</code> timestamps: <code>cust = Customer.create(:name =&gt; "ABC Industries", :updated_at =&gt; 1.day.ago)</code> <a href="http://github.com/rails/rails/commit/63aac338332a06d3c9e28dde7954679703ec7620">commit</a></p>