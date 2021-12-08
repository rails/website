---
layout: post
title: Simply Restful in Rails Edge
categories: []
author: rick
published: true
date: 2006-08-01 03:22:00.000000000 +01:00
---
<p>David committed the simply_restful plugin to the rails this afternoon, ensuring its inclusion with the next release of Rails.  Beware, there are a few <span class="caps">API</span> changes from the plugin, and a nice new feature:</p>
<pre><code>
# OLD
map.resource :post
map.resource :comment, :path_prefix =&gt; '/posts/:post_id'
map.resource :trackback, :path_prefix =&gt; '/posts/:post_id'

# NEW
map.resources :posts do |posts|
  posts.resources :comments, :trackbacks
end
</code></pre>
<p>Nesting the resource blocks will automatically set the path prefix from the parent&#8217;s path.</p>
<p>There may be some bugs introduced in the move from plugin to core, so try upgrading (and remember to remove the plugin!) and let us know if you find anything.  I have the current version running on a couple apps now, so things should be working.</p>
<p><strong>Update:</strong>  There is one more restriction I forgot to mention.  The _method hack only works on <span class="caps">POST</span> methods now.  It is no longer valid to link to a <span class="caps">URL</span> like /articles/1?<em>method=delete.  Let&#8217;s not open that <a href="http://www.37signals.com/svn/archives2/the_google_web_accelerator_is_back_with_a">can of worms</a></em>vengeance.php again.</p>
<p><strong>Tip #1:</strong>  Use my <a href="http://svn.techno-weenie.net/projects/plugins/routing_navigator/">routing navigator</a> plugin to get a handle on what routes are being created.</p>
<p><strong>Tip #2:</strong>  Use the new *_path routes if you want your routes to have just the path (&#8216;/articles/1&#8217;) instead of the whole url with protocal and host.</p>