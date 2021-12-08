---
layout: post
title: Getting a New App Running on Edge
categories: []
author: wycats
published: true
date: 2010-01-01 03:03:00.000000000 +00:00
---
<p>(cross-posted from <a href="http://yehudakatz.com/2009/12/31/spinning-up-a-new-rails-app/">Yehuda&#8217;s Blog</a>)</p>
<p>So people have been attempting to get a Rails app up and running recently. I also have some apps in development on Rails 3, so I&#8217;ve been experiencing some of the same problems many others have.</p>
<p>The other night, I worked with <a href="http://github.com/sferik">sferik</a> to start porting <a href="http://github.com/sferik/merb-admin">merb-admin</a> over to Rails. Because this process involved being on edge Rails, we got the process honed to a very simple, small, repeatable process.</p>
<h2>The Steps</h2>
<h3>Step 1: Install bundler (version 0.8.1 required)</h3>

<pre>$ sudo gem install bundler</pre>
<h3>Step 2: Check out Rails</h3>

<pre>$ git clone git://github.com/rails/rails.git
$ cd rails</pre>
<h3>Step 3: Bundle Rails dependencies</h3>

<pre>$ gem bundle --only default</pre>
<h3>Step 4: Generate a new app</h3>

<pre>$ ruby railties/bin/rails ../new_app --dev
$ cd ../new_app</pre>
<h3>Done</h3>
<p>Everything should now work: <code>script/server</code>, <code>script/console</code>, etc.</p>
<p>When you execute <code>rails APP_NAME --dev</code>, it will create a new Rails application with a Gemfile pointing to your Rails checkout and bundle it right after.</p>
<p>Also notice that in Step 3 we pass <code>--only default</code> to the bundle command. This will skip bundling of both mysql and pg (for postgresql) gems.</p>
<p>Enjoy!</p>
<p><b>Updated on 01/15/2010</b> &#8211; Rewrote steps to include <code>gem install bundler</code> and use <code>rails APP_NAME --dev</code>.</p>