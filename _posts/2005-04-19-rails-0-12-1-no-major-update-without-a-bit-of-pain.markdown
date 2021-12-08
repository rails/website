---
layout: post
title: ! 'Rails 0.12.1: No major update without a bit of pain'
categories:
- releases
author: admin
published: true
date: 2005-04-19 17:51:09.000000000 +01:00
---
<p>There&#8217;s nothing like pushing a new major update in order to find bugs in the code when its exposed to a couple of hundred working applications. Thankfully the fixes were almost as swift as the reports. In any case, you&#8217;ll <i>definitely</i> want to upgrade to 0.12.1 right away. There&#8217;s a good handful of fixes for both Action Pack and Active Record (mostly concerning the new eager loading).</p>
<p>Here&#8217;s the dirt, so you don&#8217;t have to go look it up. First for Action Pack:</p>
<ul>
	<li>Added xml_http_request/xhr method for simulating XMLHttpRequest in functional tests #1151 [Sam Stephenson]. Example: xhr :post, :index</li>
	<li>Fixed that Ajax.Base.options.asynchronous wasn&#8217;t being respected in Ajax.Request (thanks Jon Casey)</li>
	<li>Fixed that :get, :post, and the others should take a flash array as the third argument just like process #1144 [rails@cogentdude.com]</li>
	<li>Fixed a problem with Flash.now</li>
	<li>Fixed stringification on all assigned hashes. The sacrifice is that assigns[:person] won&#8217;t work in testing. Instead assigns[&#8220;person&#8221;] or assigns(:person) must be used. In other words, the keys of assigns stay strings but we&#8217;ve added a method-based accessor to appease the need for symbols.</li>
	<li>Fixed that rendering a template would require a connection to the database #1146</li>
</ul>
<p>Then for Active Record:</p>
<ul>
	<li>Fixed frivilous database queries being triggered with eager loading on empty associations and other things</li>
	<li>Fixed order of loading in eager associations</li>
	<li>Fixed stray comma when using eager loading and ordering together from has_many associations #1143</li>
</ul>
<p>Updating, as always, couldn&#8217;t be easier than <code>gem install rails --include-dependencies</code>.</p>