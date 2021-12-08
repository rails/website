---
layout: post
title: Ruby on Rails 2.3.6 Released
categories:
- releases
author: Jeremy Kemper
published: true
date: 2010-05-23 07:56:00.000000000 +01:00
---
<p>We’ve released Ruby on Rails <a href="http://rubygems.org/gems/rails/versions/2.3.6">2.3.6</a>: six months of bug fixes, a handful of new features, and a strong bridge to Rails 3.</p>
<p>We deprecated some obscure and ancient features in Rails 2.3.6 so we could cut them entirely from Rails 3. If your app runs on Rails 2.3.6 without deprecation warnings, you&#8217;re in good shape for a smooth sail onward.</p>
<p>This slow-cooked dish is brought to you some <a href="http://github.com/rails/rails/compare/v2.3.5...v2.3.6">87 committers</a> from our all-volunteer kitchen.</p>
<p>Now, let&#8217;s open the goodie bag!</p>
<h4>Action Pack</h4>
<ul>
	<li>Upgrade Rack from 1.0.1 to 1.1.0.</li>
	<li><span class="caps">XSS</span> prevention: update to match Rails 3 and move to the official plugin at <a href="http://github.com/rails/rails_xss">http://github.com/rails/rails_xss</a>.</li>
	<li>Cookies: convenient cookie jar add-ons to set permanent or signed cookies, or both at once: <code>cookies.permanent.signed[:remember_me] = current_user.id</code>. <a href="http://github.com/rails/rails/commit/0200e20f148c96afceeebc4da7b5985643f9f707">Read more</a>.</li>
	<li>Flash: promote <code>alert</code> and <code>notice</code>, the most common flash keys in many apps, to <code>self.alert = '...'</code> and <code>self.notice = '...'</code>. Add <code>redirect_to url, :alert =&gt; '...'</code> and <code>:notice =&gt; '...'</code>. <a href="http://github.com/rails/rails/commit/e6cadd422b72ba9818cc2f3b22243a6aa754c9f8">Read more</a>.</li>
	<li>i18n: localize the <code>label</code> helper.</li>
</ul>
<h4>Active Record</h4>
<ul>
	<li>Namespacing: support optional table name prefixes on modules by defining <code>self.table_name_prefix</code>. <a href="http://github.com/rails/rails/commit/03d5d0b5f50161d8ec1b2b627e483aad7100494a">Read more</a>.</li>
	<li>Destroy uses optimistic locking.</li>
	<li>Counter cache: use <code>Post.reset_counters(1234, :comments)</code> to count the number of comments for post 1234 and reset its comments_count cache.</li>
	<li>PostgreSQL: always use standard-conforming strings, if supported.</li>
	<li>MySQL: add index length support. <a href="http://github.com/rails/rails/commit/3616141fa2d2f35675d5962a1b329c8c51a5e9a3">Read more</a>.</li>
	<li>MySQL: <code>add_</code> and <code>change_column</code> support column positioning using <code>:first =&gt; true</code> and <code>:after =&gt; :other_column</code>.</li>
</ul>
<h4>Active Support</h4>
<ul>
	<li>Upgrade i18n from 1.3.3 to 1.3.7.</li>
	<li>Upgrade TZInfo from 0.3.12 to 0.3.16.</li>
	<li>Multibyte: speed up string verification and cleaning.</li>
	<li><span class="caps">JSON</span>: use <a href="http://github.com/brianmario/yajl-ruby"><span class="caps">YAJL</span></a> for <span class="caps">JSON</span> decoding, if available. <code>gem install yajl-ruby</code></li>
	<li>Testing: add <code>assert_blank</code> and <code>assert_present</code>. <a href="http://github.com/rails/rails/commit/4b08679ba9627884d531cf59a9bb2fd1d2c86d62">Read more</a>.</li>
	<li>Core: backport <code>Object#singleton_class</code> from Ruby 1.8.8, deprecating our <code>Object#metaclass</code>.</li>
	<li>Core: add <code>Object#presence</code> that returns the object if it&#8217;s <code>#present?</code> otherwise returns <code>nil</code>. Example: <code>region = params[:state].presence || params[:country].presence || 'US'</code></li>
	<li>Core: add <code>Enumerable#exclude?</code> to match <code>include?</code>.</li>
	<li>Core: rename <code>Array#rand</code> to <code>Array#random_element</code> to avoid collision with <code>Kernel#rand</code>.</li>
	<li>Core: rename <code>Date#</code> and <code>Time#last_(month|year)</code> to <code>#prev_(month|year)</code> for Ruby 1.9 forward compatibility.</li>
</ul>
<h4>Active Resource</h4>
<ul>
	<li><span class="caps">JSON</span>: set <code>ActiveResource::Base.include_root_in_json = true</code> to serialize as a hash of model name &#8594; attributes instead of a bare attributes hash. Defaults to false.</li>
</ul>
<h4>Action Mailer</h4>
<ul>
	<li>Upgrade TMail from 1.2.3 to 1.2.7.</li>
</ul>
<h4>Railties</h4>
<ul>
	<li>Silence RubyGems 1.3.6 deprecation warnings.</li>
</ul>
<p>Peruse the <a href="http://github.com/rails/rails/compare/v2.3.5...v2.3.6">commit log</a> for the full story.</p>