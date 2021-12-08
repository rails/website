---
layout: post
title: ! 'Rails 0.9.4: Caching, filters, SQLite3...'
categories:
- releases
author: admin
published: true
date: 2005-01-17 02:19:34.000000000 +00:00
---
<p>Another incredibly strong release sees the light of day as we move one step closer to the mythical 1.0. This release tackles one of the five steps on the roadmap in form of caching as well as adding a bunch of other cool stuff.</p>
<ul>
	<li><strong>Render Caching:</strong> Added an extensive caching module that offers three levels of granularity (page, action, fragment) and a variety of stores (file, memory, DRb, MemCached). <a href="http://ap.rubyonrails.com/classes/ActionController/Caching.html">Read more</a></li>
</ul>
<ul>
	<li><strong>Conditional filters:</strong> It&#8217;s now possible to limit the actions that a given filter will apply to within a controller using either :only or :except. Like, <code>before_filter :authorize, :only =&gt; [ :edit, :delete ]</code>. <a href="http://ap.rubyonrails.com/classes/ActionController/Filters/ClassMethods.html">Read more</a></li>
</ul>
<ul>
	<li><strong>Associating unsaved objects:</strong> Associations between unsaved objects makes it much easier to build big graphs that only makes sense to be saved together. <a href="http://ar.rubyonrails.com/classes/ActiveRecord/Associations/ClassMethods.html">Read more</a></li>
</ul>
<ul>
	<li><strong>Database compatibility:</strong> SQLite3 is now supported by the sqlite adapter and MySQL 4.1.1+ is also supported by the included Ruby/MySQL driver.</li>
</ul>
<ul>
	<li><strong>Numeric bytes and time:</strong> Rails has taken upon itself to extend Ruby in a few spots, such as adding the possibility for expressions like <code>45.kilobytes + 2.3.megabytes</code> and <code>45.minutes + 2.hours + 1.fortnight</code>. <a href="http://ar.rubyonrails.com/classes/ActiveSupport/CoreExtensions/Numeric/Bytes.html">Read</a> <a href="http://ar.rubyonrails.com/classes/ActiveSupport/CoreExtensions/Numeric/Time.html">more</a></li>
</ul>
<p>Those were the highlights, but Rails 0.9.4 includes no less than 50 changes, fixes, and features. You can read the full story in the changelogs for <a href="http://ar.rubyonrails.com/files/CHANGELOG.html">Active Record</a>, <a href="http://ap.rubyonrails.com/files/CHANGELOG.html">Action Pack</a>, and <a href="http://rails.rubyonrails.com/files/CHANGELOG.html">Rails</a>.</p>
<p>This release shouldn&#8217;t require any changes to your application if you&#8217;re coming from Rails 0.9.3.</p>