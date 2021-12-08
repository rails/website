---
layout: post
title: New Rails 2.2 i18n defaults
categories:
- documentation
author: David
published: true
date: 2008-11-18 13:44:00.000000000 +00:00
---
<p>I just reduced the housework needed to setup a new Rails application with i18n. All new applications will ship with a config/locales directory that&#8217;s automatically wired up in the load path for i18n. So you can just drop .yml or .rb locale files in there and they&#8217;ll be instantly available for translation.</p>
<p>There&#8217;s also a sample config/locales/en.yml file in there to give you a starting point. In addition, the initializer is now wired up through the Rails config. The new default environment.rb provides these pointers:</p>
<pre># The internationalization framework can be changed 
# to have another default locale (standard is :en) or more load paths.
# All files from config/locales/*.rb,yml are added automatically.
# config.i18n.load_path &lt;&lt; Dir[File.join(RAILS_ROOT, 'my', 'locales', '*.{rb,yml}')]
# config.i18n.default_locale = :de</pre>
<p>So on a fresh Rails 2.2 application, you&#8217;ll be able to do see it all wired up out of the box (the :hello key is from the config/locales/en.yml demo file):</p>
<pre>$ ./script/console
&gt;&gt; I18n.t :hello
=&gt; "Hello world"</pre>
<p>Rails 2.2 final is just around the corner. We&#8217;ve been ironing out the last bugs and added the last amount of polish to make this a kick ass release. Also, work on 2.3 / 3.0 has already begun in master as well since we&#8217;ve branched for 2.2 a while back.</p>