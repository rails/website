---
layout: post
title: This Week in Edge Rails
categories:
- edge
author: Mike Gunderloy
published: true
date: 2008-11-07 13:22:00.000000000 +00:00
---
<p>Rails, as you probably know, is under active development. So, for those of you who don&#8217;t have time to read every commit to the source, we&#8217;ve decided to revive this section of the weblog. This time around, I&#8217;m covering 3 weeks of commits: the time since <a href="https://rubyonrails.org/2008/10/24/rails-2-2-rc1-i18n-thread-safety-docs-etag-last-modified">Rails 2.2 RC1</a> (otherwise known as Rails 2.2.0) was released. Though there aren&#8217;t any major new features being added as Rails drives towards the 2.2 release, that doesn&#8217;t mean the source has been completely quiet: there have been about 75 commits in that three-week period. Here&#8217;s a look at some of those changes.</p>
<p>In the run-up to 2.2, we&#8217;re seeing a batch of little bug fixes, as people try to ensure quality in the release. These include:</p>
<ul>
	<li>Squashing a binary data corruption bug that surfaced in the PostgreSQL adapter. <a href="http://github.com/rails/rails/commit/932dffc559ef188eb31d0223116e9da361833488">commit</a></li>
	<li>The regex behind redirect_to can now accept a wider variety of <span class="caps">URL</span> schemes, making it possible to redirect to some destinations that were previously inaccessible. <a href="http://github.com/rails/rails/commit/47b4fa4a621ee48ab17545b1e9fb38efef53b28e">commit</a></li>
	<li>A regression in date_select and datetime_select that could raise a Null Pointer Exception under some circumstances has been fixed.  <a href="http://github.com/rails/rails/commit/b2cd318c2e3f4d19813a5c62903319a6683aa561">commit</a></li>
	<li>The sanitize helper has been fixed to avoid double escaping already properly escaped entities. <a href="http://github.com/rails/rails/commit/a358d87e16fa876de29286b69474ab6aaee4a80b">commit</a></li>
	<li>FormTagHelper has been stopped from generating illegal <span class="caps">HTML</span> if the name contains square brackets. <a href="http://github.com/rails/rails/commit/5fad229e43e2b2541ed39c6ef571975176e6a8d2">commit</a></li>
	<li>A memory leak was squashed in Active Record scoped methods. <a href="http://github.com/rails/rails/commit/77697e03353ec06a4b12f42a32d7569797d1eb8f">commit</a></li>
</ul>
<p>Some of the major features for 2.2 have been getting fine-tuned as well. There&#8217;s been work to clean up some loose ends in the thread safety department, and changes to make the I18n backend reload its translations in development mode. The included Prototype bits were bumped to the latest 1.6.0.3 release. The code for configuring, loading, and vendoring gems has had some attention, and the code for maintaining database connection pools has come in for some fine-tuning as well.</p>
<p>Just because we&#8217;re in feature freeze doesn&#8217;t mean that a few new features can&#8217;t sneak in:</p>
<ul>
	<li>The current_page method is a bit more reliable now in that it ignores options you don’t explicitly supply (making it more friendly to URLs that use the query string for pagination and the like). <a href="http://github.com/rails/rails/commit/ef9b6b5cba08f13dcbf7095226b78aaf22df13f7">commit</a></li>
	<li>The default logging has been cleaned up to be less chatty: you’ll see fewer duplicate log messages as Rails goes about its business. <a href="http://github.com/rails/rails/commit/62ffc6e4db1eecfe5c5a5f7471a9c39d665ada56">commit</a></li>
	<li>The render method now takes a <code>:js</code> option to allow you to directly render inline JavaScript without using <span class="caps">RJS</span>. <a href="http://github.com/rails/rails/commit/cbeac93310a7e95453bea3f2d4551288fd455d07">commit</a></li>
	<li>If you’ve got a current (Ruby 1.8.7 or greater) version of Ruby, Action Mailer turns on <code>STARTTLS</code> if the server supports it; this makes Action Mailer compatible with GMail without the need for plugins. <a href="http://github.com/rails/rails/commit/732c724df61bc8b780dc42817625b25a321908e4">commit</a></li>
</ul>
<p>One final note: I&#8217;m deliberately not trying to cover every single commit here; just those ones that struck me as most interesting. But if I left out something that <em>you</em> think is highly significant, feel free to add a pointer in the comments!</p>