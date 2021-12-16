---
layout: post
title: ! 'Living on the Edge (or what''s new in Edge Rails) #1 - API changes and PerformanceTests'
categories:
- edge
author: Chu Yeow
published: true
date: 2008-06-20 15:05:00.000000000 +01:00
---
<link rel="stylesheet" href="/assets/2008/6/20/ruby.css" type="text/css" media="screen" />
<script src="http://support.rubyonrails.org/weblog/codehighlighter/code_highlighter.js" type="text/javascript"></script><script src="http://support.rubyonrails.org/weblog/codehighlighter/ruby.js" type="text/javascript"></script><p>As Gregg Pollack <a href="https://rubyonrails.org/2008/6/10/two-new-weekly-columns">mentioned a week or so ago</a>, I&#8217;ll be keeping a weekly-or-so column about noteworthy changes on edge Rails. This is the first time Living on the Edge (of Rails) is appearing on the official Ruby on Rails weblog, so you&#8217;ll have to bear with my short introduction.</p>
<p><a href="http://blog.codefront.net/category/edge-rails/">Living on the Edge</a> is a weekly column I used to put up on my <a href="http://blog.codefront.net/">own blog</a> after some prodding by Gregg Pollack of <a href="http://railsenvy.com/">Rails Envy</a> way back in December of 2007. I used to be a rather active Rails contributor back then so it was a no-brainer. Gregg and Jason were awesome enough to feature it weekly in their <a href="http://railsenvy.com/podcast">podcast</a>.</p>
<p>And now it&#8217;s here, so try your best to be a tough crowd so I can tune these blog posts so that they are actually useful to you &#8211; when I was blogging these on my tiny personal blog it wasn&#8217;t that vital but now the audience is <em>significantly</em> larger. Leave your suggestions and criticisms in the comments &#8211; they are greatly appreciated!</p>
<p>Anyway, there&#8217;s been a ton of new features, <span class="caps">API</span> changes and performance improvements in the past 2 weeks or so since Rails 2.1 was released, so rather than dumping all into one mega-post, I&#8217;ve decided to break it into 2 posts for new features/<span class="caps">API</span> changes and performance improvements. In this post, I&#8217;m gonna talk about some of the <strong>new features and <span class="caps">API</span> changes</strong>.</p>
<h4>Minor <span class="caps">API</span> changes</h4>
<p>Let&#8217;s start jump straight in with some minor <span class="caps">API</span> changes.</p>
<h5>link_to now takes a block</h5>
<p>The <code>link_to</code> helper now takes a block argument for those occasions when you have really long hyperlink text with variables in them:</p>
<pre><code class="ruby">&lt;% link_to(@profile) do %&gt;
  &lt;strong&gt;&lt;%= @profile.name %&gt;&lt;/strong&gt; -
  &lt;span&gt;Status: &lt;%= @profile.status %&gt;&lt;/span&gt;
&lt;% end %&gt;</code></pre>
<p>Some people would find it cleaner than:</p>
<pre><code class="ruby">&lt;%= link_to "&lt;strong&gt;#{@profile.name}&lt;/strong&gt; -- &lt;span&gt;Status: #{@profile.status}&lt;/span&gt;", @profile %&gt;</code></pre>
<p>Credit goes to Sam Stephenson (of Prototype fame) and <span class="caps">DHH</span> for this change.</p>
<p><a href="http://github.com/rails/rails/commit/8190bce8bc7249b7b9f3680195336eb3ca9508ee">Changeset details</a></p>
<h5>ActiveRecord::Base#merge_conditions is now part of the public <span class="caps">API</span></h5>
<p>Jeremy Kemper has made <code>ActiveRecord::Base#merge_conditions</code> a public method.</p>
<p>This is pretty useful if you have conditions from multiple sources or like to combine any conditions for any reason.</p>
<pre><code class="ruby">Post.merge_conditions(
  {:title =&gt; 'Lucky ☆ Star'},
  ['rating IN (?)', 1..5]
)
=&gt; "(`posts`.`title` = 'Lucky ☆ Star') AND (rating IN (1,2,3,4,5))"</code></pre>
<p>Do note though that this merges with a <span class="caps">SQL</span> boolean <code>AND</code> only (no <code>OR</code>s).</p>
<p><a href="http://github.com/rails/rails/commit/e328bdaab6c1cf920af3cabc0a27e32798a9fcb6">Changeset details</a></p>
<h5>Associations now take a :validate option</h5>
<p>Association macros now accept a <code>:validate</code> option like so:</p>
<pre><code class="ruby">class Anime &gt; ActiveRecord::Base
  has_many :characters, :validate =&gt; true
end</code></pre>
<p>This tells ActiveRecord to validate the <code>characters</code> association when saving your <code>Anime</code> model &#8211; just like how <code>:validates_associated</code> works. The default is <code>false</code>, which is the current behavior in Rails 2.1 and earlier, so no need to fret. This works for all the other association macros as well (<code>has_one</code>, <code>belongs_to</code>, <code>has_and_belongs_to_many</code>).</p>
<p>Thumbs up to Jan De Poorter and Pratik Naik for this, which also fixes a <a href="http://rails.lighthouseapp.com/projects/8994/tickets/301">nasty bug</a>.</p>
<p><a href="http://github.com/rails/rails/commit/7f140bbddaf70abc61570f6cfdcbfba5771ffc78">Changeset details</a> &#8211; <a href="http://rails.lighthouseapp.com/projects/8994/tickets/301">Ticket</a></p>
<h5>ActiveSupport::StringInquirer and convenience Rails.env.development? methods</h5>
<p>David Heinemeier Hansson (henceforth abbreviated as <span class="caps">DHH</span> &#8211; sorry!) recently added an <code>ActiveSupport::StringInquirer</code> String subclass that allows you to do this:</p>
<pre><code class="ruby">s = ActiveSupport::StringInquirer.new('awesome')
=&gt; "awesome"
s.awesome?
=&gt; true
s.sucks?
=&gt; false</code></pre>
<p>An immediate use of this is when you are checking the environment your app is running in: <code>Rails.env</code> is wrapped in a StringInquirer so you can use query methods like <code>Rails.env.development?</code> and <code>Rails.env.production?</code>.</p>
<p><a href="http://github.com/rails/rails/commit/8afa725f4b98a6e0ceee4792e8ebaebb6189e5f6">Changeset details</a></p>
<h5>Core extensions: Object#present? and Enumerable#many?</h5>
<p><span class="caps">DHH</span> also added some core extensions that while trivial, could make your code more readable. First up is <code>Object#present?</code>, which is essentially <code>!Object#blank?</code></p>
<pre><code class="ruby">[].present?
=&gt; false
[1, 2].present?
=&gt; true
"".present?
=&gt; false
"i'm here".present?
=&gt; true</code></pre>
<p>An <code>Enumerable#many?</code> extension was also added that is simply a boolean test for <code>enumerable.size &gt; 1</code>:</p>
<pre><code class="ruby">[].many?
=&gt; false
[:just_me].many?
=&gt; false
[:just_me, 'my_friend'].many?
=&gt; true</code></pre>
<p><a href="http://github.com/rails/rails/commit/a3caf28da3a22c1326d3d98dcf71483a8edaa55a">Object#present? changeset</a> &#8211; <a href="http://github.com/rails/rails/commit/556204abaf95f7c995576cb1358f13de406682ab">Enumerable#many? changeset</a></p>
<h4>Declarative block syntax for writing tests</h4>
<p><span class="caps">DHH</span> was inspired by <a href="http://blog.jayfields.com/">Jay Fields</a> when he committed this bit of syntatic sugar: you can now write your tests (<code>Test::Unit)</code> in declarative block style like so:</p>
<pre><code class="ruby">test "an anime should be invalid if any of its characters are invalid" do
  # Your usual test code here.
end</code></pre>
<p>I seldom use Test::Unit (except when submitting Rails patches) and prefer RSpec &#8211; this declarative style of writing tests is definitely more readable.</p>
<p>All Rails-generated test stubs now use this new syntax.</p>
<p><a href="http://github.com/rails/rails/commit/f74ba37f4e4175d5a1b31da59d161b0020b58e94">Changeset details</a></p>
<h4>Performance tests</h4>
<p>Jeremy Kemper has been hard at work optimizing and improving the performance of Rails, so it&#8217;s no surprise that he has also introduced a new type of integration test: the performance test.</p>
<p>You can use the performance test generator (added by Pratik in <a href="http://github.com/rails/rails/commit/2e232af91f7e276904e02cbb1ea42ea24c19255b">23232a</a>) to generate a performance test stub.</p>
<pre><code>script/generate performance_test LoginStories</code></pre>
<p>Running the performance test requires ruby-prof &gt;= 0.6.1, which is still unreleased but you can get at it the development version by checking out the source and installing the gem yourself (I suggest you get <a href="http://github.com/jeremy/ruby-prof/">Jeremy&#8217;s fork of ruby-prof</a> for now). It&#8217;s interesting to note that with the 0.6.1 release, ruby-prof supports profiling tests cases written using Test::Unit.</p>
<p>Moving on&#8230; Put in some test code (request a few controller actions &#8211; whatever user story you want to test performance of) and run the test. You&#8217;ll get output like this (together with the usual ruby-prof profiling output in the test/tmp/performance directory of your Rails app):</p>
<pre><code>&gt; ruby performance/login_stories_test.rb 
Loaded suite performance/login_stories_test
Started
LoginStoriesTest#test_homepage (32 ms warmup)
        process_time: 11 ms
              memory: unsupported
             objects: unsupported
.
Finished in 0.870842 seconds.</code></pre>
<p>The <code>memory</code> and <code>objects</code> results are &#8220;unsupported&#8221; because I haven&#8217;t patched my Ruby interpreter for memory profiling support. You&#8217;d need certain Ruby interpreter patches to enable memory and GC profiling. I wish I could tell you more about how to do so, but I&#8217;m treading unfamiliar ground here. There are <a href="http://blog.pluron.com/2008/02/memory-profilin.html">some details here</a> on how to patch Ruby for memory profiling. I leave it for wiser folks to explain how to do this :)</p>
<p><a href="http://github.com/rails/rails/commit/eab71208db1afead6803501c8d51d77625e5ad6e">Changeset details</a></p>
<h4>Outro</h4>
<p>That&#8217;s it so far for new feature/<span class="caps">API</span> changes in Rails since Rails 2.1 &#8211; performance improvements are coming up in the next post and I&#8217;ve also intentionally left out mention of the <a href="http://github.com/ezmobius/rails/">Rack support</a> that has been partially merged into edge.</p>
<p>If there were any errors or you have any suggestions on how to make this column better, please point them out in the comments. Any info on patching your Ruby interpreter for memory profiling support is also greatly welcome. If I&#8217;ve left out anything that I&#8217;d considered not noteworthy enough but you disagree, let me know in the comments too.</p>