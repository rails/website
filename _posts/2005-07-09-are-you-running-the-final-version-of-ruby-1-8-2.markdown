---
layout: post
title: Are you running the final version of Ruby 1.8.2?
categories:
- general
author: admin
published: true
date: 2005-07-09 05:09:31.000000000 +01:00
---
<p>A fair number of people have been having problems with Rails 0.13 because it relies on behavior present in the final version of Ruby 1.8.2. That&#8217;s the one released on December 25th, 2004. You can check if you have the proper version by doing <code>ruby -v</code>, which should return &#8220;ruby 1.8.2 (2004-12-25)&#8221;.</p>
<p>If it doesn&#8217;t, you need to upgrade. Releases from before December 25th are beta releases that are not ensure to be compatible with Rails. In particular, there&#8217;s the session exception like:</p>
<pre><code>NoMethodError: undefined method `new_session' for #CGI::Session:0x259f6c0</code></pre>
<p>&#8230;or Proc errors like this:</p>
<pre><code>/gems/actionpack-1.9.0/lib/action_controller/
code_generation.rb:68:in `dup': allocator undefined for Proc (NoMethodError)</code></pre>
<p>Both tell, tell signs that your Ruby beta has exceeded its expiration date.</p>