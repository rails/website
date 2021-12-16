---
layout: post
title: ! 'Living on the Edge (or what''s new in Edge Rails) #2 - Performance improvements'
categories:
- edge
author: Chu Yeow
published: true
date: 2008-06-25 16:24:00.000000000 +01:00
---
<p>The <a href="https://rubyonrails.org/2008/6/20/living-on-the-edge-or-what-s-new-in-edge-rails-1-api-changes-and-performancetests">first Living on the Edge</a> covered some of the <span class="caps">API</span> changes since Rails 2.1, and this time round, I&#8217;m going to cover the <strong>performance improvements</strong> as promised.</p>
<p>Jumping right in&#8230;</p>
<h4>Faster Erb templates</h4>
<p>Jeremy Kemper has made the Erb processing more efficient, especially the <a href="http://api.rubyonrails.org/classes/ActionView/Helpers/TextHelper.html#M001724">concat</a> and <a href="http://api.rubyonrails.org/classes/ActionView/Helpers/CaptureHelper.html#M001747">capture</a> helper methods.</p>
<p>The &#8220;special&#8221; Erb <code>_erbout</code> has been replaced with an instance variable, which allows for:</p>
<ul>
	<li>better (memory) performance because <a href="http://www.ruby-doc.org/core/classes/Binding.html">bindings</a> are no longer being passed around,</li>
	<li>fewer eval<code></code>s which are usually expensive,</li>
	<li>there&#8217;s no need to slice the <code>_erbout</code> variable when you can swap in a new (string) buffer, and</li>
	<li>the buffer is actually available via a <code>output_buffer</code> reader and writer methods (so you can override it if you want).</li>
</ul>
<p>Relevant changesets: <a href="http://github.com/rails/rails/commit/933697a5fc5f4c56c4fd7fbbd31b8973df9c1054">933697a</a><br />
- <a href="http://github.com/rails/rails/commit/0bdb7d353b4ac6f5470884360f9a480a16bd709c">0bdb7d3</a><br />
- <a href="http://github.com/rails/rails/commit/4d4c8e298f5396e6b8ace0a10d7f991594aace2d">4d4c8e2</a></p>
<h4>Faster partials and JavaScript helpers</h4>
<p>Partial template initialization and JavaScript helpers have been refactored and optimized for speed and efficiency by Jeremy Kemper. These are but a few of the optimizations Jeremy has been committing recently. Be sure to check out some of the <a href="http://github.com/rails/rails/commits/master">commits to Rails</a> (or for that matter, any quality Open Source project) &#8211; you could learn something!</p>
<p>Relevant changesets: <a href="http://github.com/rails/rails/commit/d7b3c3395fd7debc05923dba1cbea69d30899827">partials</a> &#8211; <a href="http://github.com/rails/rails/commit/f4ccc179530d5b9436da87d3c221dfa8fa89119a">JavaScript helpers</a></p>
<h4>RecordIdentifier methods speedup</h4>
<p>The <a href="http://api.rubyonrails.org/classes/ActionController/RecordIdentifier.html">RecordIdentifier</a> has been sped up by some simple use of memo-ization, thus reducing the number of inflections performed, among other things. The RecordIdentifier is used widely in cache keys, partial template paths, and in most places where you identify an ActiveRecord model without caring about its actual <code>id</code>.</p>
<p>Relevant changesets by Jeremy Kemper: <a href="http://github.com/rails/rails/commit/c1a98209da7422965f5dd4f475603b8a3cc887e4">c1a9820</a> &#8211; <a href="http://github.com/rails/rails/commit/566d717d783f56563cd602198be2177c972c9a81">566d717</a></p>
<h4>Lazy load cache and session stores</h4>
<p><strong>Update</strong>: Oops my bad, this change was later reverted in <a href="http://github.com/rails/rails/commit/6573f6a4bc1c2ebd26e0b4b3ef9fe1cde3219354">6573f6a</a>.</p>
<p>The various cache stores in the ActiveSupport::Cache module are now lazy loaded &#8211; this means that they are only <code>require</code>d when you actually start using them.</p>
<p><a href="http://github.com/rails/rails/commit/19895f087c338d8385dff9d272d30fb87cb10330">Changeset by Pratik Naik</a></p>