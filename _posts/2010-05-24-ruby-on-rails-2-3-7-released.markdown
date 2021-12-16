---
layout: post
title: Ruby on Rails 2.3.7 Released
categories:
- releases
author: Jeremy Kemper
published: true
date: 2010-05-24 08:20:00.000000000 +01:00
---
<p>With the <a href="https://rubyonrails.org/2010/5/23/ruby-on-rails-2-3-6-released">2.3.6 release</a> hot out of the oven, Nathan Weizenbaum began updating <a href="http://haml-lang.com/"><span class="caps">HAML</span></a> to support it. He uncovered a couple of bugs in the <span class="caps">HTML</span>-safety changes backported from Rails 3, so we&#8217;re cutting a <a href="http://rubygems.org/gems/rails/versions/2.3.7">2.3.7</a> release to <a href="http://github.com/rails/rails/compare/v2.3.6...v2.3.7">fix them</a>.</p>
<p>If you use the <a href="http://github.com/rails/rails_xss#readme">rails_xss</a> plugin for automatic <span class="caps">HTML</span> escaping, you should upgrade to Rails 2.3.7 and the latest rails_xss plugin.</p>
<p>If you don&#8217;t use the rails_xss plugin yet, now&#8217;s the time to start. It&#8217;s baked in to Rails 3.</p>
<p><strong>Update:</strong> fixing compatibility with the rails_xss plugin broke <span class="caps">HTML</span>-safety for apps that don&#8217;t use rails_xss. We&#8217;re sorry, all: <span class="caps">HTML</span>-safety is meant to be opt-in! The fix is available now in <a href="http://rubygems.org/gems/rails/versions/2.3.8.pre1">2.3.8.pre1</a> and will be released shortly.</p>