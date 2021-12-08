---
layout: post
title: ! 'New Feature for Rails 2.0: Multiple Controller View Paths'
categories:
- documentation
- edge
author: rick
published: true
date: 2007-02-04 23:12:00.000000000 +00:00
---
<p>Thanks to <a href="http://radiantcms.com">John Long</a>, Rails now supports <a href="http://dev.rubyonrails.org/ticket/2754">multiple view paths for each controller</a>.  For 90% of the apps, this probably won&#8217;t make a huge difference.  But, for those of you wanting to productize various open source apps, you can now do this:</p>
<macro:code>
<p>/beast/trunk$ mkdir vendor/plugins/test_view_paths<br />
/beast/trunk$ cd vendor/plugins/test_view_paths<br />
/beast/trunk/vendor/plugins/test_view_paths$ mkdir views<br />
/beast/trunk/vendor/plugins/test_view_paths$ echo &#8220;ActionController::Base.view_paths.unshift File.join(directory, &#8216;views&#8217;)&#8221; &gt; init.rb</p>
</macro:code>
<p>What you&#8217;ve done is created a minimal rails plugin that inserts a &#8216;views&#8217; directory in the plugin to the beginning of the #view_paths array.  Now, copy a view from the rails app into the plugin&#8217;s &#8216;views&#8217; directory, make a noticeable change, and start your app.  You&#8217;ll notice that it picked your plugin&#8217;s view over the application&#8217;s view.</p>