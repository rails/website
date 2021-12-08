---
layout: post
title: Mostly good news about freezing, Typo, and Rails 1.1.1
categories:
- general
author: David
published: true
date: 2006-04-03 05:31:35.000000000 +01:00
---
<p>Let&#8217;s start with the good news about freezing and Rails 1.1.1:</p>
<ul><li>New applications will automatically bind to the gem version of Rails they were created with using a RAILS_GEM_VERSION constant in config/environment.rb</li>
<li>You can now file freeze a new application with <code>rails myapp --freeze</code>, such that it doesn&#8217;t even depend on the proper gems being available</li>
<li>You can now also freeze Rails from a tag using like <code>rake rails:freeze:edge TAG=rel_1-1-0</code></li></ul>
<p>So lots of great options to prevent that your application will ever get bitten by an external upgrade again.</p>
<p>In addition, we&#8217;re including a handful of fixes for various other regressions. So the vast majority of all applications should Just Work after the upgrade (but of course, you should <i>always</i> test before deploying an update). You may still have plugins that are incompatible, but most plugin authors should have a 1.1.x compatible version available by then.</p>
<p><b>If you have Typo 2.6.0, you must freeze</b></p>
<p>Now to the slightly less exciting news: Typo 2.6.0 is not going to work with Rails 1.1.1. The Typo team has been working on <a href="http://www.typosphere.org/trac/browser/branches/rails_1_1">a new release that&#8217;ll be 1.1.x compatible</a> and I&#8217;ve been imploring them to release a 2.6.1 that just includes Rails 1.0 in vendor/rails. But a vanilla 2.6.0 install with not work with 1.1.&#215;.</p>
<p>That sounds worse than it is, because the remedy is really simple: Checkout Rails 1.0 into vendor/rails and Typo won&#8217;t give a hoot when your host inevitably decides to upgrade to Rails 1.1.&#215;. The easiest and most fault-tolerant way of doing that is through svn. Go to the root of your Typo application and run:</p>
<blockquote><code style="font-size: 12px">svn export http://dev.rubyonrails.org/svn/rails/tags/rel_1-0-0 vendor/rails</code></blockquote>
<p>Then restart your Typo and you&#8217;re now safe from gem updates. This antidote is a good one for any application you have deployed on a shared host. It&#8217;s not safe, and will never be safe, to just float against the latest Rails on a shared host. Always make sure you&#8217;re playing it cool and do a freeze.</p>
<p>Regardless of the factors, the core team apologizes for any inconvenience caused by the 1.1.0 release. While it worked for the vast majority of people, we should indeed had made sure to get feedback from the Typo guys before pushing out the release. Then at least we could have warned people in advance that 2.6.0 was simply not going to jive.</p>
<p>Hopefully this ordeal will motivate more people to help test future release candidates. We&#8217;ll do ours to help by extending the testing period and we&#8217;ll be grateful if you would do yours by testing and reporting any troubles found.</p>
<p><b>Rails 1.1.1 early this week</b></p>
<p>If you want to get into the good spirit right away, you can help test the trunk, which is aiming to become Rails 1.1.1 early this week. We still lack a few fixes, but what&#8217;s there should already deal with almost all of the issues. To be fail safe, remove vendor/rails (if you have it), and run:</p>
<blockquote><code style="font-size: 12px">svn export http://dev.rubyonrails.org/svn/rails/trunk vendor/rails</code></blockquote>
<p>Thanks everyone!</p>