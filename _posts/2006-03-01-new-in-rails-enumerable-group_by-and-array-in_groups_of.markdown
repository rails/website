---
layout: post
title: ! 'New in Rails: Enumerable#group_by and Array#in_groups_of'
categories:
- documentation
- tricks
author: marcel
published: true
date: 2006-03-01 20:35:00.000000000 +00:00
---
<p><a href="http://dev.rubyonrails.org/changeset/3726">Changeset 3726</a> adds two little methods to ActiveSupport: <code>Enumerable#group_by</code> and @ Array#in_groups_of@.</p>
<p><code>Enumerable#group_by</code> is for collecting an enumerable into sets, grouped by the result of a block. Useful, for example, for grouping records by date.<br />
<pre><code>
     latest_transcripts.group_by(&amp;:day).each do |day, transcripts| 
       p "#{day} -&gt; #{transcripts.map(&amp;:class) * ', '}"
     end
     "2006-03-01 -&gt; Transcript"
     "2006-02-28 -&gt; Transcript"
     "2006-02-27 -&gt; Transcript, Transcript"
     "2006-02-26 -&gt; Transcript, Transcript"
</code></pre></p>
<p><code>Enumerable#group_by</code> will be baked right into Ruby in the future, and currently lives in the 1.9 branch.</p>
<p><code>Array#in_groups_of</code> let&#8217;s you iterate over an array in groups of a certain size, optionally padding any remaining  <br />
slots with a specified value (<code>nil</code> by default).<br />
<pre><code>
     %w(1 2 3 4 5 6 7).in_groups_of(3) {|g| p g}
     ["1", "2", "3"]
     ["4", "5", "6"]
     ["7", nil, nil]
</code></pre></p>
<p>You gotta love the elegant encapsulation afforded by blocks! Yield.</p>