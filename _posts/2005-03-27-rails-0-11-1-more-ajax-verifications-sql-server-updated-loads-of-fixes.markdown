---
layout: post
title: ! 'Rails 0.11.1: More Ajax, Verifications, SQL Server updated, loads of fixes'
categories:
- releases
author: admin
published: true
date: 2005-03-27 15:32:41.000000000 +01:00
---
<p>The Ajax wave is sweeping across Rails. In this release, we&#8217;ve added a :position option to both link_to_remote and form_remote_tag that can be set to either :before, :top, :bottom, or :after. These options make it possible to add new <span class="caps">DOM</span> elements to existing lists without replacing the whole list. When working on big lists that are in a fixed order anyway, there&#8217;s a considerable speed increase to be had.</p>
<p><strong>Yellow Fade Technique</strong><br />
Additionally, we&#8217;ve implemented the first in a hopefully long series of packaged effects. This is the <a href=http://www.37signals.com/svn/archives/000558.php">37signals&#8217; Yellow Fade Technique</a> that&#8217;s now available as Effect.Highlight(id) &#8212; perfect for highlighting a new element that was just added with Ajax. If you have the Javascript chops to do other effects, please do help out. The <a href="http://wiki.rubyonrails.com/rails/show/Ajax+Discussion">wiki discussion page for Ajax in Rails</a> already has great ideas for slide, fadeout, and squish.</p>
<p><strong>Verifications</strong><br />
<a href="http://rails.rubyonrails.com/classes/ActionController/Verification.html">Verifications</a> in a whole new module for Action Pack that allows you to specify preconditions for you actions. They come in the form of &#8220;verify that these parameters are part of the request or redirect the user somewhere else (possibly adding a message to the flash)&#8221;. Or said in code:</p>
<pre>
verify :params =&gt; "post", :only =&gt; [ :create, :update ], :redirect_to =&gt; { :action =&gt; "index" }
</pre>
<p><strong><span class="caps">SQL</span> Server adapter updated</strong><br />
The Micrsoft <span class="caps">SQL</span> Server adapter is back in top form supporting both file uploads (albeit still restricted by <span class="caps">SQL</span> Server&#8217;s 7KB limit) and the new limit style. Thanks to DeLynn Berry for the quick update. Now only the DB2 adapter is not supporting the new limit style.</p>
<p><strong>Loads of fixes</strong><br />
Iconv is no longer required to install Rails (but you&#8217;ll want it if you need to send/receive <span class="caps">UTF</span>-8 with Action Mailer), you can clone Active Records with floats, the dispatch.fcgi has been fixed, and a bunch of other things. In total, this release has 30 new features, additions, tweaks, and fixes.</p>
<p>See all the changes in the changelogs for <a href="http://rails.rubyonrails.com/files/CHANGELOG.html">Rails</a>, <a href="http://rails.rubyonrails.com/files/vendor/rails/activerecord/CHANGELOG.html">Active Record</a>, <a href="http://rails.rubyonrails.com/files/vendor/rails/actionpack/CHANGELOG.html">Action Pack</a>, <a href="http://rails.rubyonrails.com/files/vendor/rails/activesupport/CHANGELOG.html">Active Support</a>, <a href="http://rails.rubyonrails.com/files/vendor/rails/actionmailer/CHANGELOG.html">Action Mailer</a>, and <a href="http://rails.rubyonrails.com/files/vendor/rails/actionwebservice/CHANGELOG.html">Action Web Service</a>.</p>
<p><strong>Update:</strong> No application changes should be required. Just make sure that you copy over the latest prototype.js if you&#8217;re using Ajax.</p>
<p>P.S.: Many thanks to Florian Gross for the wonderful code snippet that allows for uploads to RubyForge automatically. This saved me the headache of releasing 12 files by hand one more time. And many thanks to Jamis Buck for the new template used for <a href="http://rails.rubyonrails.com/">the <span class="caps">API</span> documentation</a>.</p>