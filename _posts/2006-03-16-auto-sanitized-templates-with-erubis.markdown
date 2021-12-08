---
layout: post
title: Auto sanitized templates with Erubis
categories:
- releases
- tools
author: marcel
published: true
date: 2006-03-16 06:24:00.000000000 +00:00
---
<p>Last month on the Rails core mailing list, a <a href="http://wrath.rubyonrails.org/pipermail/rails-core/2006-February/thread.html#731">thread</a> popped up (that went on and on) wherein the idea was proposed that rhtml templates should automatically sanitize output by default. After much back and forth, <a href="http://wrath.rubyonrails.org/pipermail/rails-core/2006-February/000789.html">David suggested</a> those in favor redirect their energies toward a working plugin.</p>
<p>Enter stage left, <a href="http://rubyforge.org/projects/erubis/">Erubis</a>.  It&#8217;s a customized implementation of eRuby that provides a handful of features, notably that <code>&lt;%= %&gt;</code> tags automatically sanitize output. You use <code>&lt;%== %&gt;</code> if you don&#8217;t want to sanitize the output. For all those who wish rhtml files were sanitized by default, here is your solution.</p>
<p>Configure your Rails apps to use Erubis templates with <code>ActionView::Base::register_template_handler</code>.</p>