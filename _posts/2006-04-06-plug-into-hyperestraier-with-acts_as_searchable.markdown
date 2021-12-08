---
layout: post
title: Plug into HyperEstraier with acts_as_searchable
categories:
- releases
- tools
author: marcel
published: true
date: 2006-04-06 21:18:00.000000000 +01:00
---
<p><a href="http://poocs.net">Patrick Lenz</a> has <a href="http://poocs.net/articles/2006/04/06/introducing-acts_as_searchable">announced</a> his <code>acts_as_searchable</code> plugin which integrates ActiveRecord models with <a href="http://hyperestraier.sourceforge.net/">HyperEstraier</a>, an open source fulltext search engine.</p>
<p>It&#8217;s available as a gem so you can just do <code>sudo gem install acts_as_searchable</code>.</p>
<p>You can then take a look at the <a href="http://ar-searchable.rubyforge.org/"><span class="caps">API</span> docs</a>, which provide a few <a href="http://ar-searchable.rubyforge.org/classes/ActiveRecord/Acts/Searchable.html">examples</a>.</p>
<p>Full text searching just got as simple as:<br />
<pre><br />
class Article &lt; ActiveRecord::Base<br />
  acts_as_searchable<br />
end</p>
<p>Article.fulltext_search(&#8216;biscuits <span class="caps">AND</span> gravy&#8217;)<br />
</pre></p>