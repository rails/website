---
layout: post
title: This Week in Edge Rails
categories:
- edge
author: Mike Gunderloy
published: true
date: 2008-12-05 14:51:00.000000000 +00:00
---
<h3>November 29-December 5, 2008 Edition</h3>
<p>Rails 2.3 development is still continuing at a healthy clip. Here&#8217;s an overview of what&#8217;s happened this week.</p>
<h2>Application Templates</h2>
<p>Rails now incorporates Jeremy McAnally&#8217;s <a href="http://github.com/jeremymcanally/rg/tree/master">rg</a> application generator. What this means is that we now have template-based application generation built right into Rails; if you have a set of plugins you include in every application (among many other use cases), you can just set up a template once and use it over and over again when you run the <code>rails</code> command. Pratik Naik provided a <a href="http://m.onkey.org/2008/12/4/rails-templates">thorough writeup</a> of this feature over on his blog. <a href="http://github.com/rails/rails/commit/e8cc4b116c460c524961a07da92da3f323854c15">commit</a></p>
<h2>Find Improvements</h2>
<p>Even the venerable code used by Active Record to talk to databases can be improved, and we had a couple of improvements checked in this week. First, the <span class="caps">SQL</span> generated for preloading records in has_and_belongs_to_many associations has had an extra &#8220;AS&#8221; excised, which makes it work better with some databases. Also, we now have a <code>:having</code> option on find (as well as on has_many and has_and_belongs_to_many associations) for filtering records in grouped finds. As those with heavy <span class="caps">SQL</span> backgrounds know, this allows filtering based on grouped results:</p>
<pre><code>
developers =  Developer.find(:all, :group =&gt; "salary", 
  :having =&gt; "sum(salary) &gt;  10000", :select =&gt; "salary")
</code></pre>
<p><a href="http://github.com/rails/rails/commit/0c4ba90aa1ea6a8d386c724a55a31e63a13c46ab">commit</a> <a href="http://github.com/rails/rails/commit/97403ad5fdfcdfb2110c6f8fd0ebf43b7afc4859">commit</a></p>
<h2>Rack Integration</h2>
<p>The tighter integration of Rails with <a href="http://rack.rubyforge.org/">Rack</a> continues. This week saw the death of the venerable <span class="caps">CGI</span> processor within Rails, as well as the use of Rack to handle <span class="caps">FCGI</span>. There was also some refactoring down in the Rails tests to make them play nicer with Rack. <a href="http://github.com/rails/rails/commit/9c9da6c892d715ca22c3cf51f50deb1d80029c66">commit</a> <a href="http://github.com/rails/rails/commit/926844e869b747fa1e9474fd95f9b97fa04ae092">commit</a></p>
<h2>Configuration File Cleanup</h2>
<p>Over the years, the default environment.rb file had gotten a bit cluttered with comments, random documentation, and settings that mot people don&#8217;t need. <span class="caps">DHH</span> took a few minutes to clean up the mess, and the <a href="http://github.com/rails/rails/tree/master/railties/environments/environment.rb">current state</a> of this file is much leaner. As part of the cleanup, session store configuration has been moved out to its own file. <a href="http://github.com/rails/rails/commit/6e66e7d6460b99bb0877a891aa3fbb789b563123">commit</a></p>
<h2>No More Process Scripts</h2>
<p>If you&#8217;re one of the (fairly rare) Rails developers who deploys in a fashion that depends on the inspector, reaper, and spawner scripts, you&#8217;ll need to know that those scripts are no longer included in core Rails. For Rails applications that are reployed with current alternatives like Passenger, these are just unnecessary baggage. But if you need them, you&#8217;ll be able to pick up copies via the <a href="http://github.com/rails/irs_process_scripts/tree">irs_process_scripts</a> plugin. <a href="http://github.com/rails/rails/commit/3b3c0507e2f67a0f64dc04b396c1d13411ab5890">commit</a></p>
<h2>Odds and Ends</h2>
<p>The fact that Rails checks for IP spoofing can be a nuisance for sites that do heavy traffic with cell phones, because their proxies don&#8217;t generally set things up right. If that&#8217;s you, you can now set <code>ActionController::Base.ip_spoofing_check = false</code> to disable the check entirely. <a href="http://github.com/rails/rails/commit/0a4a5f3129a137fc357e8444a08b135f0ad4fbe8">commit</a></p>
<p>Rails.root now returns a Pathname object, which means you can use it directly with the join method to <a href="http://afreshcup.com/2008/12/05/a-little-rails_root-tidiness/">clean up existing code</a> that uses File.join. <a href="http://github.com/rails/rails/commit/be140e8c6be966349c6fa35a87f84d5a73995b9a">commit</a></p>
<p>ActionController::Dispatcher now implements its own middleware stack, which you can see by running <code>rake middleware</code>. <a href="http://github.com/rails/rails/commit/06ed8e451198b2296d8b2752741e259b4f995081">commit</a></p>
<p>Gem loading is smarter about missing dependencies. <a href="http://github.com/rails/rails/commit/3c07a8828ede3d41000513af29c293ae2e2a49d4">commit</a></p>
<p>auto_link now properly applies options (such as :target and :class) to generated e-mail links. <a href="http://github.com/rails/rails/commit/bda55f82c687920807f606a2b024f1882094ef1e">commit</a></p>