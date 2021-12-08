---
layout: post
title: More templating choice with Markaby for Rails
categories:
- sightings
author: David
published: true
date: 2006-01-14 20:52:05.000000000 +00:00
---
<p>why the lucky stiff and Tim Fletcher have released a pretty cool <a href="http://redhanded.hobix.com/inspect/markabyForRails.html">templating language for Rails called Markaby</a> that looks like Builder, but assumes a few more things to make it even more succinct and targeted against <span class="caps">HTML</span>. An Example:</p>
<pre>
 html do
   head do
     title action_name
     stylesheet_link_tag 'scaffold'
   end
 
   body do
     p flash[:notice], :style =&gt; "color: green" 
     self &lt;&lt; @content_for_layout
   end
 end
</pre>
<p>All you need to do is install the Markaby plugin and you can start creating .mab files. Very cool.</p>