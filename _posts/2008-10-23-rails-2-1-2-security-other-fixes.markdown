---
layout: post
title: ! 'Rails 2.1.2: Security, other fixes'
categories:
- releases
author: David
published: true
date: 2008-10-23 18:21:00.000000000 +01:00
---
<p>Rails 2.1.2 includes the same two security fixes that we pushed out for 2.0.x recently. We&#8217;re talking about <a href="http://github.com/rails/rails/commit/213f31513e4cb640fa3ed45f387f221401023646">a backport of the offset/limit sanitization fix for Active Record</a> and a <a href="http://github.com/rails/rails/commit/7282ed863ca7e6f928bae9162c9a63a98775a19d">fix against header-injection when using user-contributed strings in redirect_to</a> (see <a href="https://rubyonrails.org/2008/10/19/response-splitting-risk">Response Splitting</a> for more information).</p>
<p>In addition, Rails 2.1.2 fixes the warning that users of RubyGems 1.3.0 were having with script/generate as well as a range of other minor fixes. Enjoy!</p>
<p>As always, you can install with:<br/> <code>gem install rails --version 2.1.2</code></p>