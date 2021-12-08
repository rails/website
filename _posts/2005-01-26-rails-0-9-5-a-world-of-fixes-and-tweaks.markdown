---
layout: post
title: ! 'Rails 0.9.5: A world of fixes and tweaks'
categories:
- releases
author: admin
published: true
date: 2005-01-26 01:25:03.000000000 +00:00
---
<p>This release is mostly about polishing the Rails by closing holes, deficiencies, and subtle extensions to existing features. The long-awaited <a href="http://www.soapbx.com/viewer/show/34">Directions</a> and <a href="http://dev.rubyonrails.com/ticket/487">generator upgrade</a> have been postponed to the next release. The highlights of this release is:</p>
<ul>
	<li><strong>Rewritten reloading</strong>: Working in development with models and controllers reloading on every request now resembles &#8220;the real thing&#8221; a lot more by actually removing the model classes before reloading them. This fixes a bunch of subtle bugs and makes it possible to remove a method and see it reflected without restarting the application.</li>
</ul>
<ul>
	<li><strong>Create and update collections:</strong> Through calls like <code>text_field "student[]", "last_name"</code>, it&#8217;s now much easier to get input tags like <code>input name="student[123][last_name]"...</code>, which together with the fact that Base#create, Base#update, Base#destroy, Base#delete, AssociationCollection#build, and AssociationCollection#create now all accept arrays enables handling of many records at once.</li>
</ul>
<ul>
	<li><strong>Stopping after render/redirect:</strong> Any before_filter can now terminate the chain by calling render or redirect and the pattern of redirect-and-return now works again. The first call to either render or redirect wins as well and subsequent calls are ignored.</li>
</ul>
<p>That&#8217;s just three of the 37 changes, fixes, and additions available in Rails 0.9.5. You can read the full story in the changelogs for <a href="http://ar.rubyonrails.com/files/CHANGELOG.html">Active Record</a>, <a href="http://ap.rubyonrails.com/files/CHANGELOG.html">Action Pack</a>, and <a href="http://rails.rubyonrails.com/files/CHANGELOG.html">Rails</a>.</p>
<p>This release shouldn&#8217;t require any changes to your application if you&#8217;re coming from Rails 0.9.4 unless you were relying on const_missing to load non-AR/AO/AC classes. In that case, you&#8217;ll have to start being explicit with require_dependency for the reloading to be triggered.</p>