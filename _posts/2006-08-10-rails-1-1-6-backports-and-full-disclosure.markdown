---
layout: post
title: Rails 1.1.6, backports, and full disclosure
categories:
- releases
author: David
published: true
date: 2006-08-10 17:34:00.000000000 +01:00
---
<p>The cat is out of the bag, so here&#8217;s the full disclosure edition of the current security vulnerability. With Rails 1.1.0 through 1.1.5 (minus the short-lived 1.1.3), you can trigger the evaluation of Ruby code through the <span class="caps">URL</span> because of a bug in the routing code of Rails. This means that you can essentially take down a Rails process by starting something like /script/profiler, as the code will run for a long time and that process will be hung while it happens. Other URLs can even cause data loss.</p>
<p>We&#8217;ve backported a fix to all the affected versions for those of you that can&#8217;t update. You&#8217;ll have to apply the diff for your version:</p>
<ul>
	<li><a href="http://www.rubyonrails.org/files/aug_10_security/rel_1-1-0.diff">Patch for Rails 1.1.0</a></li>
	<li><a href="http://www.rubyonrails.org/files/aug_10_security/rel_1-1-1.diff">Patch for Rails 1.1.1</a></li>
	<li><a href="http://www.rubyonrails.org/files/aug_10_security/rel_1-1-2.diff">Patch for Rails 1.1.2</a></li>
	<li><a href="http://www.rubyonrails.org/files/aug_10_security/rel_1-1-4.diff">Patch for Rails 1.1.4</a></li>
	<li>Patch for Rails 1.1.5: Upgrade to Rails 1.1.6.</li>
</ul>
<p>These patches (and 1.1.6) will break applications using the 3rd party engines idea. So if you can&#8217;t upgrade because of dependencies to those, you can also add the following <span class="caps">URL</span> blocking while engines are being updated. Here&#8217;s how to do it with mod_rewrite under Apache:</p>
<pre style="font-size:10px">RewriteRule ^(app|components|config|db|doc|lib|log|public|script|test|tmp|vendor)/ - [F]</pre>
<p>Here&#8217;s how to do it under lighttpd:</p>
<pre style="font-size:10px">url.rewrite-once = ( "^/(app|components|config|db|doc|lib|log|public|script|test|tmp|vendor)/" =&gt; "index.html" )</pre>
<p>Unfortunately, the 1.1.5 update from yesterday only partly closed the hole (getting rid of the worst data loss trigger). After learning more about the extent of the problem, we&#8217;ve now put together a 1.1.6 release that completely closes all elements of the hole (using the same technique as the backports above).</p>
<p>So if you upgraded to 1.1.5 yesterday, you need to upgrade again. The approach stays the same, but since the Rubyforge gem server can be very slow at distributing gem updates, you should grab this fix straight from the Rails server:</p>
<pre style="font-size:10px">sudo gem install rails --source http://gems.rubyonrails.org --include-dependencies</pre>
<p>If you&#8217;re running of trunk (also known as edge) using revision 4394 or later, you&#8217;re not affected by all this in any form.</p>
<p>We&#8217;ll follow up with more information as it becomes available. Needless to say, this is all the Rails core team is working on right now and we&#8217;ve recruited a whole band of testers to help us play this out. We&#8217;ll make sure to evaluate all the feedback that&#8217;s been coming in and develop some <strike>scar tissue</strike> a policy for dealing with security issues in the future. Thanks for your continued understanding.</p>
<p>We&#8217;ve also started #rails-security on Freenet for people with <span class="caps">IRC</span> available to get and share more information.</p>
<p><span class="caps">UPDATE</span>: If you&#8217;re floating on gems (don&#8217;t have vendor/rails), then make sure you update RAILS_GEM_VERSION in your config/environment.rb. Otherwise you&#8217;ll still be bound to that earlier version of Rails even as you install the new gems.</p>
<p><span class="caps">UPDATE</span> 2: Rails 1.1.6 is now available on the official gem server, so you no longer need to add the &#8212;source http://gems.rubyonrails.org parameter.</p>