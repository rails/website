---
layout: post
title: Community Highlights
categories:
- activism
author: Gregg Pollack
published: true
date: 2010-05-03 16:10:00.000000000 +01:00
---
<p><img src="/assets/2008/10/10/BlueSky.png" /></p>
<p>It&#8217;s that time again, to summarize a few interesting Rails links to highlight some of the best of the community.  All of these were initially covered on the <a href="http://ruby5.codeschool.com">Ruby5 Podcast</a>, the twice weekly Ruby newscast.</p>
<p><strong>Rails 3 Content</strong></p>
<p>The next <a href="http://railsbridge.org/news_items/12">Rails3 Bugmash</a> is taking place May 15th and 16th.  If you&#8217;ve never contributed to Rails, this is your chance to give back a little and do your part to make Rails 3 the best version ever.</p>
<p>To get a complete picture of routes in Rails 3, Rizwan Reza <a href="http://www.engineyard.com/blog/2010/the-lowdown-on-routes-in-rails-3/">covered it best</a> in an article over on the Engine Yard blog.  If you dig the Engine Yard Rails 3 content, they recently created <a href="http://www.railsdispatch.com">Rails Dispatch</a>, where they have articles and screencasts published weekly.</p>
<p>Alex Maccaw recently used the Rails 3 ActiveModel abstraction to build an ActiveRecord-like in-memory database called <a href="http://github.com/maccman/supermodel">Supermodel</a>. You get all of the ActiveRecord goodness, such as validations, callbacks, and observers, but with none of that database headache.</p>
<p>As you may already know, the <a href="http://github.com/rails/arel">arel library</a> from Rails 3 gives us a great new syntax for creating queries. Under the covers, arel converts your <em>where</em> conditions into sql is by using something called a PredicateBuilder. Ernie Miller recently put out a plugin called <a href="http://metautonomo.us/2010/04/15/introducing-metawhere/">MetaWhere</a> that takes advantage of these PredicateBuilders to give arel even more functionality.</p>
<p>Lastly, if it&#8217;s still not clear to you how awesome bundler is, go read <a href="http://yehudakatz.com/2010/04/12/some-of-the-problems-bundler-solves/">Yehuda&#8217;s recent post</a> on the topic.</p>
<p><strong>Authorization</strong></p>
<p><img src="/assets/2009/9/1/camera.jpg" /></p>
<p>Do you ever find the need to access <em>current_user</em> in your models?  This is often required when you&#8217;re logging model/table changes on a per user basis.  There are many hacks to accomplish this, but David Bock has a gem called <a href="http://github.com/bokmann/sentient_user">SentientUser</a> which does this a little cleaner.</p>
<p>Once your websites goes big and you start to worry about malicious user attacks, you may want to take a look at Arto Bendiken and Brendon Murphy&#8217;s <a href="http://datagraph.rubyforge.org/rack-throttle/">Rack::Throttle Middleware</a>.  Throttle does just want you think it does, allowing you to limit the number of requests a user can ping your site (per second).</p>
<p>Lastly, Ryan Bates released version 1.1 of <a href="http://wiki.github.com/ryanb/cancan/upgrading-to-11">CanCan</a>, his authorization and permission library that allows you to restrict what your users can do throughout your application.</p>
<p><strong>Service Libraries</strong></p>
<p><img src="/assets/2008/10/10/libraries.png" /></p>
<p>You may have heard that the Facbook <span class="caps">API</span> is now adopting OAuth2.  If you&#8217;re ready to jump in, Michael Bleigh released the <a href="http://intridea.com/2010/4/22/oauth2-gem-just-in-time-for-facebook-graph">OAuth2 gem</a> just last week.</p>
<p>Rails makes a great RESTful backend for iPhone applications, and recently Anthony Moralez created <a href="http://github.com/PRX/apn_on_rails">APN_on_rails</a> which makes it super easy to do Apple Push Notifications.</p>
<p>There&#8217;s no need to reinvent the wheel if your Rails application needs e-commerce, this is where the <a href="http://spreecommerce.com/blog/2010/03/13/spree-0100-released/">Spree gem</a> comes in, which recently hit version 0.10.0, containing a bunch of new features.</p>
<p><strong>Testing</strong></p>
<p><img src="/assets/2008/10/10/performance.png" /></p>
<p>Does your Rails application have a monster testing library that takes forever to run?  Then it may be time to take a look at <a href="http://github.com/ngauthier/hydra">Hydra</a> by Nick Gauthier, a distributed testing framework which allows you to run your tests in parallel locally or across remote servers.</p>
<p>Some people think cucumber can be too verbose for integration tests (which clients may never read).  If you think cucumber is for vegetarians, then perhaps it&#8217;s time to taste some <a href="http://github.com/cavalle/steak">Steak</a> by Luismi Cavalle.  Steak is a small library which helps you generate quick and clean acceptance/integration tests using RSpec.</p>
<p>Talking about RSpec, there are some new conventions out there to clean up your old RSpec code.  If you haven&#8217;t started using &#8220;Let&#8221;, then it may be time to look through a few of <a href="http://pure-rspec-rubynation.heroku.com/">Jon Larkowski&#8217;s slides</a>.</p>
<p><strong>Additional Useful Libraries</strong></p>
<p>If you ever find yourself with odd memory issues then it&#8217;s probably time to use <a href="http://memprof.com/">memprof.com</a>, a new web service by Joe Damato and Ruby Hero Aman Gupta.  Memprof allows you to collect memory usage information from a Ruby process and immediately upload and view it using an intuitive web interface.</p>
<p>Rails applications are often full of forms, and sometimes you even need to give your clients the ability to create different types of forms or surveys.  This is where the <a href="http://blog.envylabs.com/2010/04/census-rails-demographics-collection/">Census gem</a> comes in, providing an admin interface for creating forms, and even the ability to search through the results.</p>
<p>To wrap things up, <a href="http://opensoul.org/2010/4/3/delayed_job-2-0">delayed_job</a> recently hit 2.0, and you&#8217;ll want to upgrade if you have an older version.  The new version has some performance improvements and adds support for non-ActiveRecord ORMs.</p>
<p><strong>Additional Content</strong></p>
<p><img src="/assets/2009/10/22/media.png"></p>
<p>To keep track of Ruby conferences check out <a href="http://www.rubythere.com">Ruby There</a>, a listing of all the upcoming conferences and even when the Call for Proposals are due.</p>
<p>For more news and libraries check out the <a href="http://ruby5.envylabs.com">Ruby5 podcast</a>.  If you don&#8217;t usually listen to audio, you can just subscribe to the <a href="http://feeds.feedburner.com/Ruby5"><span class="caps">RSS</span> feed</a> which contains a summary of everything covered.</p>
<p>If you have any stories/libraries you&#8217;d like to spread the word about, feel free to email ruby5@envylabs.com and we&#8217;ll at least get you covered on the podcast. Thanks!</p>
<p><small>Image Credit: <a href="http://www.flickr.com/photos/ecstaticist/2589723846/">Blue Sky on Rails</a> by <a href="http://www.flickr.com/photos/ecstaticist/2589723846/">ecstaticist</a>, <a href="http://www.flickr.com/photos/formication/2759753856/">Analog Solutions 606 Mod</a> by <a href="http://www.flickr.com/photos/formication/2759753856/">Formication</a>,  <a href="http://www.flickr.com/photos/onegoodbumblebee/839927986/">Rainbow</a> by <a href="http://www.flickr.com/photos/onegoodbumblebee/839927986/">One Good Bumblebee</a>. <a href="http://www.flickr.com/photos/muehlinghaus/241755891/">Orange County Security</a> by <a href="http://www.flickr.com/photos/muehlinghaus/">henning</a>, <a href="http://www.flickr.com/photos/tochis/1302364866/">remember</a> by <a href="http://www.flickr.com/photos/tochis/1302364866/">tochis</a>, <a href="http://www.flickr.com/photos/neeku_sh/2298055066/">Darwin Was Right About Media Players!</a> by <a href="http://www.flickr.com/photos/neeku_sh/">Neeku</a>, <a href="http://www.flickr.com/photos/redjar/136216608/">remote controls</a> by <a href="http://www.flickr.com/photos/redjar/">redjar</a>.</small></p>
<p><small>This post has been translated into <a href="http://pc.de/pages/asnony-supolkі">Belorussian</a> provided by <a href="http://pc.de/">PC</a></small></p>