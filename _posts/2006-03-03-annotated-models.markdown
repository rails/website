---
layout: post
title: Annotated models
categories:
- sightings
- tricks
author: marcel
published: true
date: 2006-03-03 05:22:00.000000000 +00:00
---
<p>Ever working with a model and you forget what all of its columns are? Ever find yourself with your <code>schema.rb</code> open in a separate window so you can see what the structure is of your tables?</p>
<p><a href="http://blogs.pragprog.com/cgi-bin/pragdave.cgi/Tech/Ruby/AnnotateModels.rdoc">Dave Thomas</a>, of <a href="http://studio.pragprog.com/rails/">Rails Pragmatic Studio</a> fame (among a brazillion other things), hacked up a <a href="http://svn.pragprog.com/Public/plugins/annotate_models/">plugin</a> that adds a comment block to the top of all of your model classes documenting the current schema for the given model. It ends up looking something like this:<br />
<pre><pre><code></p>
<ol>
	<li>Schema as of Sun Feb 26 21:58:32 <span class="caps">CST</span> 2006 (schema version 7)<br />
  #</li>
	<li>id                  :integer(11)   not null</li>
	<li>quantity            :integer(11)</li>
	<li>product_id          :integer(11)</li>
	<li>unit_price          :float</li>
	<li>order_id            :integer(11)   <br />
  #</li>
</ol>
class LineItem &lt; ActiveRecord::Base
belongs_to :product
<p></code></pre></notextile></p>
<p>When the schema is updated, the comment is updated to reflect the new schema.</p>
<p>Install it with the plugin script:<br />
<pre>
script/plugin install http://svn.pragprog.com/Public/plugins/annotate_models
</pre></p>
<p>Run it with a custom rake task:<br />
<pre><br />
rake annotate_models<br />
</pre></p>
<p>Check out the caveats in the <a href="http://svn.pragprog.com/Public/plugins/annotate_models/README"><span class="caps">README</span></a>.</p>
<p>Thanks for sharing Dave.</p>