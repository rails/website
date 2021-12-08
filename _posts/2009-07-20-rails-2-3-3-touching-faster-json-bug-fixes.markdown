---
layout: post
title: ! 'Rails 2.3.3: Touching, faster JSON, bug fixes'
categories: []
author: David
published: true
date: 2009-07-20 17:28:00.000000000 +01:00
---
<p>We&#8217;ve released Ruby on Rails version 2.3.3. This release fixes a lot of bugs and introduces a handful of new features.</p>
<h4>Active Record</h4>
<ul>
	<li><code>touch</code> is a convenient method to update a record&#8217;s timestamp and nothing else. This is extracted from apps whose models &#8220;touch&#8221; others when they change, such as a comment updating the parent.replies_changed_at timestamp after save and destroy. Timestamping an entire has_many association makes it easy to build a key for fragment caching that covers changes to the parent object and any of its children. This pattern is wrapped up as <code>belongs_to :parent, :touch =&gt; :replies_changed_at</code>. When the child changes, <code>parent.replies_changed_at</code> is touched. <code>:touch =&gt; true</code> is defaults to <code>:touch =&gt; :updated_at</code>.</li>
	<li><code>:primary_key</code> option for <code>belongs_to</code> for broader support of legacy schemas and those using a separate <span class="caps">UUID</span> primary key: <code>belongs_to :employee, :primary_key =&gt; 'SSN', :foreign_key =&gt; 'EMPID'</code> <a href="http://github.com/rails/rails/commit/b3ec7b2d03a52e43a4451d522eea7e6499289daa">changeset</a></li>
</ul>
<h4><span class="caps">JSON</span></h4>
<ul>
	<li>decoding backends for the json and yajl libraries. Both are significantly faster than the default <span class="caps">YAML</span> backend. To get started, install the json gem and set <code>ActiveSupport::JSON.backend = 'JSONGem'</code>.</li>
	<li>leaner user-facing encoding <span class="caps">API</span>. Since a <span class="caps">JSON</span> libraries implement <code>to_json</code> with varying compatibility, safely overriding it is difficult. Most custom <code>to_json</code> looks like <pre><code>
def to_json(*encoder_specific_args)
  { :some =&gt; "json representation" }.to_json(*encoder_specific_args)
end</code></pre> so we DRYed the user-facing <span class="caps">API</span> down to a more natural <pre><code>
def as_json(options = {})
  { :some =&gt; "json representation" }
end</code></pre> without the ugly internal state exposed by overloading <code>to_json</code> as both public-facing and internal builder <span class="caps">API</span>. Rails 3 splits the <span class="caps">API</span> explicitly, so prepare now by switching from <code>to_json</code> to <code>as_json</code>.</li>
</ul>
<h4>Other Features</h4>
<ul>
	<li>Add :concat option to asset tag helpers to force concatenation. <a href="http://github.com/rails/rails/commit/a491b19502781266b05918cf99b6ba67898e3be9">changeset</a></li>
	<li>Restore backwards compatibility for AR::Base#to_xml. <a href="http://github.com/rails/rails/commit/7bf9bf3dd6b4c4d78214917f0877536d222098bb">changeset</a></li>
	<li>Move from BlueCloth to Markdown for the markdown helper.   Users using BlueCloth to provide their markdown functionality should upgrade to version 1.0.1 or 2.0.5 in order to restore compatibility.</li>
</ul>
<h4>Notable Bug Fixes</h4>
<ul>
	<li>Fix errors caused by class-reloading with streaming responses in development mode.</li>
	<li>Several fixes to the gem bundling, unpacking and installing system.</li>
	<li>Make text_area_tag escape contents by default.</li>
	<li>Make filter_parameters work correctly with array parameters.</li>
	<li>Thread-safety fixes for postgresql string quoting.</li>
	<li>Performance fixes for large response bodies.</li>
</ul>