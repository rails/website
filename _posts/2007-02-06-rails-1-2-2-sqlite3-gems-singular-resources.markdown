---
layout: post
title: ! 'Rails 1.2.2: SQLite3, gems, singular resources'
categories:
- releases
author: David
published: true
date: 2007-02-06 16:29:00.000000000 +00:00
---
<p>It&#8217;s time for another minor update to Rails 1.2. This was primarily prompted by a change in the <span class="caps">API</span> for SQLite between version 3.3.7 and 3.3.8+, which <a href="https://rubyonrails.org/2007/1/29/using-sqlite3-with-rails">left the Rails database adapter for dead</a> by the road side. But with this release and Jamis Buck&#8217;s sqlite3-ruby gem at version 1.2.1, we&#8217;re back in business on all versions of SQLite3.</p>
<p>Second, we&#8217;re now depending on RubyGems 0.9.0 and above. This will fix the deprecation messages for require_gem (the new method is just gem) and will restore rake rails:freeze:gems to working order. So be sure to update to the latest RubyGems before installing. That&#8217;s done with &#8220;gem update &#8212;system&#8221;.</p>
<p>Finally, we&#8217;ve decided to throw in a few goodies along with the fixes described above and the rest of the bug reparations in this release. Singular resources, for example, allow you to model singleton resources within the scope of the domain. The common example is user.application.com/account. That&#8217;s now modeled with:</p>
map.resource :account
<p>&#8230;and routes accordingly:</p>
<span class="caps">GET</span>    /account      =&gt; AccountController#show
<span class="caps">GET</span>    /account/new  =&gt; AccountController#new
<span class="caps">GET</span>    /account;edit =&gt; AccountController#edit
<span class="caps">POST</span>   /account      =&gt; AccountController#create
<span class="caps">PUT</span>    /account      =&gt; AccountController#update
<span class="caps">DELETE</span> /account      =&gt; AccountController#destroy
<p>Note that the controller is also singular, not plural as is usually the case when using map.resources.</p>
<p>We&#8217;ve also brought over the enhancement to :conditions in Active Record that&#8217;ll allow you to pass in ranges and get them automatically converted to <span class="caps">BETWEEN</span> statements. Like:</p>
Student.find(:all, :conditions =&gt; { :grade =&gt; 9..12 })
<p>&#8230;which then becomes:</p>
&#8220;<span class="caps">SELECT</span> * <span class="caps">FROM</span> students <span class="caps">WHERE</span> grade <span class="caps">BETWEEN</span> 9 <span class="caps">AND</span> 12&#8221;
<p>This is a recommended upgrade for everyone running 1.2.x (and a reminder that if you&#8217;re not yet on Rails 1.2.x, you won&#8217;t be getting bug fixes automatically and have to backport them yourself). It&#8217;s a drop-in replacement requiring no changes to applications running 1.2.&#215;.</p>
<p>Enjoy!</p>