---
layout: post
title: ! 'Rails 1.2.5: Security and maintenance release'
categories:
- releases
author: michael
published: true
date: 2007-10-12 16:44:00.000000000 +01:00
---
<p>This release closes a <span class="caps">JSON</span> <span class="caps">XSS</span> vulnerability, fixes a couple of minor regressions introduced in 1.2.4, and backports a handful of features and fixes from the 2.0 preview release.</p>
<p>All users of Rails 1.2.4 or earlier are advised to upgrade to 1.2.5, though it isn&#8217;t strictly necessary if you aren&#8217;t working with <span class="caps">JSON</span>. For more information the <span class="caps">JSON</span> vulnerability, see <span class="caps">CVE</span>-2007-3227.</p>
<p>Summary of changes:</p>
<ul>
	<li>acts_as_list: fixed an edge case where removing an item from the list then destroying the item leads to incorrect item positioning</li>
	<li>deprecated calling .create on has_many associations with an unsaved owner (like post = Post.new; post.comments.create)</li>
	<li>backport array and hash query parameters</li>
	<li>fix in place editor&#8217;s setter action with non-string fields</li>
	<li>updated config/boot.rb to correctly recognize RAILS_GEM_VERSION</li>
</ul>
<p>To upgrade, `gem install rails`, set RAILS_GEM_VERSION to &#8216;1.2.5&#8217; in config/environment.rb, and `rake rails:update:configs`.</p>