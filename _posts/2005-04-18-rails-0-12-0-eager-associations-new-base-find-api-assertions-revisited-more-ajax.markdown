---
layout: post
title: ! 'Rails 0.12.0: Eager associations, new Base.find API, assertions revisited,
  more Ajax!'
categories:
- releases
author: admin
published: true
date: 2005-04-18 21:19:50.000000000 +01:00
---
<p>The time had come to butcher the piggy-back query and introduce <a href="http://ar.rubyonrails.com/classes/ActiveRecord/Associations/ClassMethods.html" title="Scroll down to Eager loading of associations">real association loading</a> through outer joins. Behold, the glorious eager loading of associations that makes it silly easy to fetch not 1, 2, but unlimited associations alongside any record in a single query. Turning 50 database queries into 1 never felt this good.</p>
<pre>
# Turning N+1 queries into 1
for post in Post.find(:all, :include =&gt; [ :author, :comments ])
  puts "Post:            " + post.title
  puts "Written by:      " + post.author.name
  puts "Last comment on: " + post.comments.first.created_on
end
</pre>
<p>And to match the eager loading, we&#8217;re introducing a brand <a href="http://ar.rubyonrails.com/classes/ActiveRecord/Base.html#M000226">new unified <span class="caps">API</span> for Base.find</a>, which works the same whether you&#8217;re searching for a specific id, the first record, or all the records. By using named options we alleviate your poor brain for remembering whether the ordering option was argument number 3 or 4.</p>
<pre>
Person.find(1, :conditions =&gt;"administrator = 1", :order =&gt;"created_on DESC")
Person.find(1, 5, 6, :conditions =&gt;"administrator = 1", :order =&gt;"created_on DESC")
Person.find(:first, :order =&gt;"created_on DESC", :offset =&gt; 5)
Person.find(:all, :conditions =&gt; [ "category IN (?)", categories], :limit =&gt; 50)
Person.find(:all, :offset =&gt; 10, :limit =&gt; 10)
</pre><p><b>Better testing</b><br />
We&#8217;ve also slashed the huge number of assertions for testing controllers. In one fell swoop, we&#8217;ve gone from around thirty to <a href="http://ap.rubyonrails.com/classes/Test/Unit/Assertions.html">a shap seven</a>. The remaining assertions are more flexible than before, not nearly as hard to remember, and are followed on by the fantastic new assert_tag, which makes examining the <span class="caps">HTML</span> output of an action so much easier than the <span class="caps">XHTML</span>/<span class="caps">REXML</span> fumblings of yesterday.</p>
<p><b>More Ajaxing</b><br />
Of course, we couldn&#8217;t make a new release without asserting the undisputed position as the number one framework for doing Ajaxed applications. This release contains a bunch of <a href="http://mir.aculo.us/demos/effects/demo1.html">new smooth effects</a> for visualizing your non-refreshing actions. It&#8217;s now much easier to make Ajaxed applications that treat the unfortunate without Javascript nicely with request.xml_http_request? and alternative targets for ajax links and forms. We&#8217;ve also added periodically_call_remote that can be used to Ajax-update a given block every so seconds.</p>
<p>In the next release, which will be not very far off, we&#8217;re also adding awesome support for both Google Suggest-like search boxes and for <a href="http://sean.treadway.info/demo/upload">upload progress indicators</a>. There&#8217;s a powerful team behind pushing the envelope on this. We have so not seen the end of it.</p>
<p><b>A total of 96 changes, tweaks, and fixes</b><br />
All these goodies are just the tip of the iceberg, though. There&#8217;s a total of 96 new features, changes, tweaks, and fixes packed into this monster of a release. And we didn&#8217;t even have time to push in all of the <a href="http://dev.rubyonrails.com/report/3">pending patches</a>. How&#8217;s that for an action-packed three weeks since the last release?</p>
<p><b>Fully backwards compatible!</b><br />
Despite the true onslaught of new features, fixes, and goodies, we&#8217;ve managed to keep this release fully backwards compatible with 0.11.1. So you just do a &#8220;gem update rails&#8221; and all the new stuff is available for use in your current application (to take advantage of the new JS effects you&#8217;ll want to copy that one over, though &#8212; use <code>rails .</code> in your app dir to get that for free).</p>
<p>See the changelogs for the full story:</p>
<ul>
	<li><a href="http://api.rubyonrails.com/files/CHANGELOG.html">Rails</a></li>
	<li><a href="http://api.rubyonrails.com/files/vendor/rails/activerecord/CHANGELOG.html">Active Record</a></li>
	<li><a href="http://api.rubyonrails.com/files/vendor/rails/actionpack/CHANGELOG.html">Action Pack</a></li>
	<li><a href="http://api.rubyonrails.com/files/vendor/rails/aws/CHANGELOG.html">Action Web Service</a></li>
	<li><a href="http://api.rubyonrails.com/files/vendor/rails/actionmailer/CHANGELOG.html">Action Mailer</a></li>
	<li><a href="http://api.rubyonrails.com/files/vendor/rails/activesupport/CHANGELOG.html">Active Support</a></li>
</ul>