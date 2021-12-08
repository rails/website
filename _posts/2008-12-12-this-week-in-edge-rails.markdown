---
layout: post
title: This Week in Edge Rails
categories:
- edge
author: Mike Gunderloy
published: true
date: 2008-12-12 13:34:00.000000000 +00:00
---
<h3>December 6-December 12, 2008 Edition</h3>
<p>Here&#8217;s your weekly roundup of the action out on the edge, where the code is exciting and sometimes even stable. There were only 32 commits this week; perhaps we&#8217;re going into a bit of year-end hibernation.</p>
<h2>Memory Improvements</h2>
<p>A couple of memory leaks got squashed this week. There was one that occurs in Rails 2.2 when you set <code>config.log_level = :warn</code> (this fix has been applied to the 2-2-stable branch as well as to edge) and one that turns up when you call <code>reset_session</code> in an around filter (this fix is on edge, and will be ported to 2.2 soon). <a href="http://github.com/rails/rails/commit/9f69ff12d44c4d1e475fd6efede120ccedba3b3e">commit</a> <a href="http://github.com/rails/rails/commit/5ede4ce188d29aef94af78f27d89169ac4ee54cd">commit</a></p>
<h2>Application Templates</h2>
<p>There was a bit of cleanup work on the application template feature that was introduced last week. This included support for <a href="http://github.com/rails/rails/commit/9eca588bdfbb41f6b48477025d1cd8eea4a38296">installing plugins as git submodules</a>, a couple of small cleanup items, and a <a href="http://github.com/rails/rails/commit/f7f113610e7cdca8ef03e206f2cbeb8400cdfefa">rake task to apply a template to an existing application</a> . With this task, you can now run</p>
<pre><code>
rake rails:template LOCATION=~/template.rb
</code></pre>
<p>And the changes indicated in the template will be layered on top of whatever code the project already contains.</p>
<h2>I18n Cleanup</h2>
<p>A few more bits of the Rails infrastructure are now exposed to internationalization, including <a href="http://github.com/rails/rails/commit/273c770011ab43d4b523caacb808bce070922d77">connectors in <code>Array#to_sentence</code></a> and <a href="http://github.com/rails/rails/commit/c3b87dd4c99ba47d316bd03f99b5e23af1fe0ed8">separators in Active Record validation messages</a> . Also of interest to the international Rails community is a <a href="http://github.com/rails/rails/commit/4e60eebae05aeec65e4894e3901c9d61c9b32910">patch</a> to add an <code>ActiveSupport::Multibyte::Chars#ord</code> method to properly return the Unicode value of the first character in a string.</p>
<h2>Odds and Ends</h2>
<p>There&#8217;s a new version of the memcache-client (1.5.0.5) bundled with edge Rails. This fixes some bugs in the original 1.5 and adds better support for failover and timeouts. You can read more about it on the <a href="http://rails.lighthouseapp.com/projects/8994/tickets/1535">Lighthouse ticket</a> <a href="http://github.com/rails/rails/commit/e54f17920fddebdfa241a5d9253ad5810972af87">commit</a></p>
<p>Active Record&#8217;s <a href="http://afreshcup.com/2008/11/05/customizing-to_xml-and-to_json-in-rails/">to_xml</a> support gets just a little bit more flexible with the addition of a <code>:camelize</code> option, which converts all of the column names in the output to camel case. <a href="http://github.com/rails/rails/commit/aa5cdb0d47fb5484bfdde8244df7efeb2175bf3a">commit</a></p>
<p>If you test a lot of view code that uses partials, you&#8217;ll be happy to know that <code>assert_template</code> now takes a <code>:partial</code> option that can look for them in the output directly. <a href="http://github.com/rails/rails/commit/49306ccacf01e36d444771d42321965616e226f0">commit</a></p>
<p>And finally, there&#8217;s a patch that has <em>not</em> been applied to Rails yet, but that you might want to go look at in <a href="http://rails.lighthouseapp.com/projects/8994/tickets/1556">Lighthouse</a> &#8211; it adds support for <span class="caps">HTTP</span> status code 418 so that Rails can conform to <a href="http://tools.ietf.org/html/rfc2324">RFC2324</a> . I&#8217;m sure the core team would welcome further discussion of this change.</p>