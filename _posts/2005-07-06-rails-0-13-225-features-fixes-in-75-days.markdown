---
layout: post
title: ! 'Rails 0.13: 225+ features/fixes in 75 days!'
categories:
- releases
author: admin
published: true
date: 2005-07-06 14:11:51.000000000 +01:00
---
<p>After the longest gap between releases since Rails was made public and after more than 225 fixes and new features, the final major release before the 1.0 milestone has arrived. We&#8217;ve basically put in three new features or fixes <i>every</i> single day for the past 75 days. But what do you care about our labouring efforts? Here&#8217;s what&#8217;s new in 0.13.0:</p>
<p><strong>Ajax: Visual effects, drag&#8217;n&#8217;drop, sortable lists, auto-completing text fields</strong> <br />
Thomas Fuchs is the latest member of the Rails core contributor group and his amazing set of Javascript magic, entitled script.aculo.us, has been integrated in this release.</p>
<p>It adds a completely rewritten visual effects engine, drag-and-drop capability including sortable lists, and autocompleting text fields to Rails. All building on top of Prototype, the foundation for Ajax in Rails, which has also received a spiffy upgrade by Sam Stephenson.</p>
<p>Hand in hand with the Javascript files is a <a href="http://api.rubyonrails.com/classes/ActionView/Helpers/JavaScriptHelper.html">fresh batch of helper methods</a> that enables to skip the process of writing any Javascript yourself. The new <a href="http://api.rubyonrails.com/classes/ActionController/AutoComplete/ClassMethods.html">auto_complete_for</a> macro is one of these helpers and it makes adding Google Suggest style auto-completing text fields effortless, as does <code>sortable_element</code> for sortable lists and floats and <code>draggable_element</code> and it&#8217;s counterpart <code>drop_receiving_element</code> for drag-and-drop. Try out the <a href="http://script.aculo.us/demos">live demos and see source code</a>.</p>
<p>We also have Ajaxified progress indicators for file uploads in as an experimental feature in this release. It makes for a much more user-friendly experience uploading large files. <a href="http://sean.treadway.info/demo/upload">See the demo</a>. It&#8217;s experimental nature means that it only works on Apache, lighttpd 1.4.x, and only in some environments. Consider it a preview of really cool tech. You need to include <code>ActionController::Base.enable_upload_progress</code> in your environment.rb file to turn it on.</p>
<p>We&#8217;ve additionally added support for graceful error handling of Ajax calls:</p>
<pre><code>
link_to_remote(      
      "test",
      :url =&gt; { :action =&gt;"faulty" },
      :update =&gt; { :success =&gt;"good", :failure =&gt;"bad" },
      403 =&gt;"alert('Forbidden- got ya!')",
      404 =&gt;"alert('Nothing there...?')",
      :failure =&gt;"alert('Unkown error ' + request.status)")
</code></pre>
<p>And if you want to perform multiple document updates on a single Ajax call, there&#8217;s now the lovely <code>JavascriptHelper#update_element_function</code>, which can be used to generate a stacked return.</p>
<p><strong>Migrations: Agile software needs agile databases</strong><br />
Migrations can manage the evolution of a schema used by several physical databases. It&#8217;s a solution to the common problem of adding a field to make a new feature work in your local database, but being unsure of how to push that change to other developers and to the production server. With migrations, you can describe the transformations in self-contained classes that can be checked into version control systems and executed against another database that might be one, two, or five versions behind.</p>
<p>They currently only work with MySQL and PostgreSQL, but with the help of the community, we&#8217;ll hopefully have most databases supported in upcoming releases. Read more in the <a href="http://api.rubyonrails.com/classes/ActiveRecord/Migration.html">Migration documentation</a>.</p>
<p><strong>Performance: Faster routes, faster everything!</strong><br />
One of our primary goals with this release is to identify and address performance issues. Stefan Kaes took on the task of optimizing the entire code base and contributed numerous speedups with additional help from Jeremy Kemper. An entire rewrite of Routes by Nicholas Seckar makes it nearly <em>seven times faster</em> now. And all this comes with complete backwards compatability. In an effort to make developers more performance-aware, you can now use the <a href="http://api.rubyonrails.com/classes/ActionView/Helpers/BenchmarkHelper.html">new BenchmarkHelper</a> to measure the execution time of a block in a template.</p>
<p><strong>Sweepers: Clean up your caches in a single sweep</strong><br />
<a href="http://api.rubyonrails.com/classes/ActionController/Caching/Sweeping.html">ActionController::Caching::Sweeper</a> is a new approach to sweeping caches that follows a much more intuative one-sweep system where the caches are actually cleared on the observer callbacks. Not just recorded to be cleared during a later filter callback. Sanity is restored to sweeping.</p>
<p><strong>Rendering: One method to bind them all</strong> <br />
In the wake of refactoring Active Record&#8217;s <code>find</code> <span class="caps">API</span>, the various <code>render</code> methods got a whole new suit, making the <code>render</code> method the single point of entry for all rendering tasks. Tobias Luetke has a <a href="http://blog.leetsoft.com/articles/2005/05/26/new-in-rails">good before and after write up</a> of how render is used now.</p>
<p>Lessons learned from find and render: Consolidate multiple method names that do similar things into one method, use symbols to dictate what used to be done by method name and parametrize with an options hash rather than positional parameters.</p>
<p>Read more about it on the <a href="http://api.rubyonrails.com/classes/ActionController/Base.html">new <span class="caps">API</span> documentation for render</a>.</p>
<p><strong>FastCGI: Easier to update, more stable in the running</strong> <br />
With a new release of a better and up to date FastCGI Ruby binding, and as FastCGI becomes solidified as the deployment mechanism of choice, it&#8217;s a good time to have a vastly improved dispatch.fcgi with changes that include:</p>
<ul>
	<li>Send <span class="caps">HUP</span> to force the fcgi process to dynamically reload the application</li>
	<li>Send USR1 to force the process to gracefully restart (allowing active requests to finish first)</li>
	<li>Better crash logging</li>
</ul>
<p>We&#8217;ve also extracted a RailsFCGIHandler, so you in the future can update Rails and get improvements without having to get a fresh dispatch.fcgi file.</p>
<p><strong>Routes: Giving them a name and calling them by it</strong><br />
On top of Nicholas Seckar&#8217;s entire rewrite of the Routes code come Named Routes by Marcel Molina. Named Routes allow you to reduce code duplication by associating a name with a given route rule. This generates a convenience method that wraps the route rule hash. You define a named route by calling it in your routes.rb in place of the connect method. So, for example:</p>
<pre><code>
  map.home '', :controller =&gt; 'main', :action =&gt; 'start'
</code></pre>
<p>So with the above named route, what would have previously been<br />
<pre><code>
  redirect_to :controller =&gt; 'main', :action =&gt; 'start'
</code></pre><br />
is now<br />
<pre><code>
  redirect_to :home_url
</code></pre><br />
Parametrize your routes. With:<br />
<pre><code>
  map.user_page 'users/:user', :controller =&gt; 'users', :action =&gt; 'show'
</code></pre><br />
You could do<br />
<pre><code>
  link_to @user.username, user_page_url(:user =&gt; @user)
</code></pre></p>
<p>See more at the <a href="http://wiki.rubyonrails.com/rails/show/NamedRoutes">Named Routes wiki page</a>.</p>
<p><strong>Email attachements: Make those emails carry the load</strong><br />
Action Mailer now supports sending attachments and multipart messages. Jamis Buck has been leading the way to making ActionMailer robust and feature complete. There&#8217;s a fresh new <span class="caps">API</span> too that gives specifying emails a more domain-language feel to it. Read all about it in Action Mailer <span class="caps">API</span>.</p>
<p><strong>Validations: Run them conditionally and only if</strong><br />
With the new <code>:if</code> option for all validations, you can limit when an attribute is validated, either using a block or a method reference. Examples:<br />
<pre><code></p>
<ol>
	<li>Conditional validations such as the following are made possible:<br />
    validates_numericality_of :income, :if =&gt; :employed?</li>
</ol>
<ol>
	<li>Conditional validations can also solve the salted login generator problem:<br />
    validates_confirmation_of :password, :if =&gt; :new_password?</li>
</ol>
<ol>
	<li>Using blocks:<br />
    validates_presence_of :username, :if =&gt; Proc.new { |user| user.signup_step &gt; 1 }<br />
</code></pre></li>
</ol>
<p><strong>Fully backwards compatible!</strong> <br />
As has been the norm since around 0.9.0, this release is mindful of backward compatibility, so despite the flow of fixes, improvements, and features, your existing applications won&#8217;t need to be updated code-wise. All you need to do to upgrade is get the new gems with <code>gem update rails</code> and then generating the new infrastructure files with <code>rails &amp;lt;your-app-dir&gt;</code>.</p>
<p>You want to overwrite the dispatches, the prototype library, the Rakefile, and the test_helper.rb. Don&#8217;t overwrite application_controller.rb, application_helper.rb, or other files you may have tailored, though. It&#8217;s always good to do this run on a backup first and check that every things work.</p>
<p><strong>Last major stop before 1.0!</strong><br />
First I want to congratulate the core contributor team on the amazing accomplishment that is this release. The group came together in a stronger-than-ever force especially for the last few weeks up to release. And as the latest member of the group, Thomas Fuchs deserves special praise for giving Rails such a boost of Ajaxiness with script.aculo.us and the associated helpers. It&#8217;s incredible that Rails is home to both Prototype and script.aculo.us &mdash; the two strongest Javascript libraries for Ajaxians around &mdash; and Thomas and Sam deserve much lavish praise for making it happen.</p>
<p>Another shout out for Nicholas Seckar. The second-most recent addition to the group. He has once again delivered goodness all over the code base. From named routes to all those little fixes that makes 0.13 a much more solid experience. You tha man.</p>
<p>And all the hard work is paying off. We&#8217;re planning to make 0.13 the last major release before 1.0! We might well see 0.13.1 (but hopefully not 0.13.2) before we start pumping out release candidates for the big one-oh, but it&#8217;s getting close. Real close, now.</p>
<p>What you&#8217;ve seen here is of course only a tiny sliver of the massive amount of new features and fixes. For the full scoop be sure to devour the changelogs:</p>
<ul>
	<li><a href="http://api.rubyonrails.com/files/CHANGELOG.html">Rails</a></li>
	<li><a href="http://api.rubyonrails.com/files/vendor/rails/activerecord/CHANGELOG.html">Active Record</a></li>
	<li><a href="http://api.rubyonrails.com/files/vendor/rails/actionpack/CHANGELOG.html">Action Pack</a></li>
	<li><a href="http://api.rubyonrails.com/files/vendor/rails/actionmailer/CHANGELOG.html">Action Mailer</a></li>
	<li><a href="http://api.rubyonrails.com/files/vendor/rails/actionwebservice/CHANGELOG.html">Action Web Service</a></li>
	<li><a href="http://api.rubyonrails.com/files/vendor/rails/activesupport/CHANGELOG.html">Active Support</a></li>
</ul>
<p>Enjoy Rails 0.13!</p>