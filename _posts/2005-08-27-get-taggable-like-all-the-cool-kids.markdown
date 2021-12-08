---
layout: post
title: Get taggable like all the cool kids
categories: []
author: admin
published: true
date: 2005-08-27 10:00:00.000000000 +01:00
---
<p>Demetrius Nunes has a very <a href="http://dema.ruby.com.br/articles/2005/08/27/easy-tagging-with-rails">cool acts-as mixin</a> ready for you in a single line. It allows you to do stuff like:</p>
<pre><code>class Photo &lt; ActiveRecord::Base
  acts_as_taggable
end
 
elephant = Photo.find(4437)
elephant.tag 'zoo animals nature'
 
elephant.tagged_by?('urban') # =&gt; false
elephant.tags.size # =&gt; 3
elephant.tag_names =&gt; [ 'zoo', 'animals', 'nature' ]</code></pre>
<p>Without any real effort at all. Neato. It&#8217;s pending as a patch too, so it&#8217;ll most likely make it into the next version.</p>