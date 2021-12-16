---
layout: post
title: ! 'Rails 2.0.5: Security fixes'
categories:
- releases
author: David
published: true
date: 2008-10-19 22:08:00.000000000 +01:00
---
<p>Time for another small security fix for Rails 2.0.&#215;. The 2.0.5 release contains just two changes: <a href="http://github.com/rails/rails/commit/213f31513e4cb640fa3ed45f387f221401023646">A backport of the offset/limit sanitization fix for Active Record</a> and a <a href="http://github.com/rails/rails/commit/7282ed863ca7e6f928bae9162c9a63a98775a19d">fix against header-injection when using user-contributed strings in redirect_to</a> (see <a href="https://rubyonrails.org/2008/10/19/response-splitting-risk">Response Splitting</a> for more information).</p>
<p>As always, you can install with:<br/> <code>gem install rails --version 2.0.5</code></p>