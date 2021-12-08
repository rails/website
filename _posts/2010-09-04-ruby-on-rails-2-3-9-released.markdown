---
layout: post
title: Ruby on Rails 2.3.9 Released
categories:
- releases
author: Jeremy Kemper
published: true
date: 2010-09-04 21:45:00.000000000 +01:00
---
<p>We’ve released Ruby on Rails 2.3.9 (<a href="http://rubygems.org/gems/rails/versions/2.3.9">gem</a> and <a href="http://github.com/rails/rails/tree/v2.3.9">git tag</a>) to extend the 2.3.8 bridge a few steps closer to Rails 3 and Ruby 1.9. If your app runs on Rails 2.3.9 without deprecation warnings, you&#8217;re looking good for an upgrade to Rails 3.</p>
<h4>Deprecations</h4>
<ul>
	<li>Changes i18n named-interpolation syntax from the deprecated <code>Hello {{name}}</code> to the 1.9-native <code>Hello %{name}</code>.</li>
	<li>Replaces <code>Kernel#returning</code> with <code>Object#tap</code> which is native to Ruby 1.8.7.</li>
	<li>Renames <code>Array#random_element</code> to <code>Array#sample</code> which is native to Ruby 1.9.</li>
	<li>Renames <code>config.load_paths</code> and <code>.load_once_paths</code> to the more accurate <code>config.autoload_paths</code> and <code>.autoload_once_paths</code>.</li>
</ul>
<p>Along with these deprecations come a broad array of bugfixes and minor tweaks. Read the <a href="http://github.com/rails/rails/compare/v2.3.8...v2.3.9">commit log</a> for the full story.</p>
<p>Onward to 3.1!</p>