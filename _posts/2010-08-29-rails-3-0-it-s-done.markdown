---
layout: post
title: ! 'Rails 3.0: It''s ready!'
categories:
- releases
author: David
published: true
date: 2010-08-29 18:28:00.000000000 +01:00
---
<p>Rails 3.0 has been underway for a good two years, so it&#8217;s with immense pleasure that we can declare it&#8217;s finally here. We&#8217;ve brought the work of more than 1,600 contributors together to make everything better, faster, cleaner, and more beautiful.</p>
<p>This third generation of Rails has seen thousands of commits, so picking what to highlight was always going to be tough and incomplete. But here&#8217;s a choice selection of major changes for Rails 3:</p>
<p><strong>New Active Record query engine</strong><br>
Active Record has adopted <a href="http://github.com/brynary/arel">the ARel query engine</a> to make scopes and queries more consistent and composable. This makes it much easier to build complex queries over several iterations. We also delay the actual execution of the query until it&#8217;s needed. Here&#8217;s a simple example:</p>
<p><code>&lt;pre style="font-size: 12px"&gt;users = User.where(:name =&gt; "david").limit(20)
users = users.where("age &gt; 29")</p>
<ol>
	<li><span class="caps">SELECT</span> * <span class="caps">FROM</span> users</li>
	<li><span class="caps">WHERE</span> name = &#8220;david&#8221; <span class="caps">AND</span> age &gt; 29</li>
	<li><span class="caps">ORDER</span> BY name</li>
	<li><span class="caps">LIMIT</span> 20<br />
users.order(:name).each { |user| puts user.name }</pre></code></li>
</ol>
<p>Read more in <a href="http://guides.rubyonrails.org/active_record_querying.html">new Active Record guide</a> and watch the <a href="https://rubyonrails.org/screencasts/rails3/active-relation-active-model">Dive into Rails 3: ARel video</a>.</p>
<p><strong>New router for Action Controller</strong><br>
When we switched to a <span class="caps">REST</span>-based approach for controllers in Rails 2, we patched on the syntax to the existing router while we were waiting to see if the experiment panned out.</p>
<p>It did and for Rails 3 we&#8217;ve gone back and revamped the syntax completely to favor the <span class="caps">REST</span> style with less noise and more flexibility:</p>
<p><code>&lt;pre style="font-size: 12px"&gt;resources :people do
  resource :avatar</p>
collection do
get :winners, :losers
end
<p>end</p>
<ol>
	<li>/sd34fgh/rooms<br />
scope &#8216;:token&#8217;, :token =&gt; /\w{5,5}/ do<br />
  resources :rooms<br />
end</li>
</ol>
<ol>
	<li>/descriptions</li>
	<li>/pl/descriptions</li>
	<li>/en/descriptions<br />
scope &#8216;(:locale)&#8217;, :locale =&gt; /en|pl/ do<br />
  resources :descriptions<br />
  root :to =&gt; &#8216;projects#index&#8217;<br />
end</pre></code></li>
</ol>
<p>Read more in the <a href="http://edgeguides.rubyonrails.org/routing.html">new routing guide</a>.</p>
<p><strong>New Action Mailer</strong><br>
Action Mailer was born with a split-personality of half model, half controller. In Rails 3, we&#8217;ve made the choice to make it all controller. This means that the feel and functionality will be much closer to Action Controller and in fact they now share a bunch of underlying code. Here&#8217;s a taste of what it looks like now:</p>
<p><code>&lt;pre style="font-size: 12px"&gt;class Notifier &lt; ActionMailer::Base
  default :from =&gt;
    "Highrise &lt;system@#{APPLICATION_DOMAIN}&gt;"</p>
def new_project(digest, project, person)
@digest, @project, @person = digest, project, person

attachments[&#8216;digest.pdf&#8217;] = digest.to_pdf
attachments[&#8216;logo.jpg&#8217;]   = File.read(project.logo_path)

mail(
:subject =&gt; &#8220;Your digest for #{project.name}&#8221;,
:to =&gt; person.email_address_with_name
) do |format|
format.text { render :text =&gt; &#8220;Something texty&#8221; }
format.html { render :text =&gt; &#8220;Something <i>texty</i>&#8221; }
end
end
<p>end</pre></code></p>
<p>The new Action Mailer is built on top of <a href="http://github.com/mikel/mail">the new Mail gem</a> as well. Say goodbye to TMail headaches.</p>
<p>Read more in <a href="http://edgeguides.rubyonrails.org/action_mailer_basics.html">new Action Mailer guide</a>.</p>
<p><strong>Manage dependencies with Bundler</strong><br>
Managing all the dependencies of a Rails application has long been a hassle of patchworks. We had config.gem, Capistrano externals, custom rake setup tasks, and other incomplete solutions.</p>
<p>Bundler cleans all that up and allows you to specify the libraries, frameworks, and plugins that your application depends on. All Rails 3 applications are born with a Gemfile to control it all. See more on <a href="http://gembundler.com/">the Bundler site</a>.</p>
<p><strong><span class="caps">XSS</span> protection by default</strong><br>
The internet is a scary place and Rails 3 is watching out for you by default. We&#8217;ve had <a href="http://en.wikipedia.org/wiki/Cross-site_request_forgery"><span class="caps">CRSF</span></a> protection with form signing for a while and <a href="http://en.wikipedia.org/wiki/SQL_injection"><span class="caps">SQL</span>-injection</a> protection since the beginning, but Rails 3 ups the anté with <span class="caps">XSS</span> protection as well (hat tip to Django for convincing us).</p>
<p>See the <a href="http://railscasts.com/episodes/204-xss-protection-in-rails-3">Railscast on <span class="caps">XSS</span> video</a> and <a href="https://rubyonrails.org/screencasts/rails3/xss-ujs">the Dive into Rails 3: Cross-site scripting video</a> for more.</p>
<p><strong>Say goodbye to encoding issues</strong><br>
If you browse the Internet with any frequency, you will likely encounter the &amp;#xFFFD; character. This problem is <a href="http://imysql.cn/docs/MySQL_51_en/ch10s10.html">extremely pervasive</a>, and is caused by mixing and matching content with different encodings.</p>
<p>In a system like Rails, content comes from the database, your templates, your source files, and from the user. Ruby 1.9 gives us the raw tools to eliminate these problems, and in combination with Rails 3, &amp;#xFFFD; should be a thing of the past in Rails applications. Never struggle with corrupted data pasted by a user from Microsoft Word again!</p>
<p><strong>Active Model: Validations, callbacks, etc for all models</strong><br>
We&#8217;ve extracted quite a bit of commonly requested Active Record components into the new Active Model framework. This allows an <span class="caps">ORM</span> like <a href="http://github.com/mongoid/mongoid/blob/master/lib/mongoid/validations.rb#L11">Mongoid</a> to use Active Record&#8217;s validations, callbacks, serialization, and i18n support.</p>
<p>Additionally, in the rewrite of Action Controller, we removed any direct references to Active Record, defining a clean, simple <span class="caps">API</span> that ORMs can implement. If you use an <span class="caps">API</span>-compliant <span class="caps">ORM</span> (like DataMapper, Sequel, or Mongoid), you will be able to use features like form_for, link_to and redirect_to with objects from those ORMs without any additional work.</p>
<p><strong>Official plugin APIs</strong><br>
We also rewrote Railties with the express goal of using the new plugin <span class="caps">API</span> for all Rails frameworks like <a href="http://github.com/rails/rails/blob/master/activerecord/lib/active_record/railtie.rb#L13">Active Record</a> and <a href="http://github.com/rails/rails/blob/master/actionmailer/lib/action_mailer/railtie.rb#L5">Action Mailer</a>. This means that Rails plugins like the ones for <a href="http://github.com/datamapper/dm-rails/blob/master/lib/dm-rails/railtie.rb#L23">DataMapper</a> and <a href="http://github.com/rspec/rspec-rails/blob/master/lib/rspec-rails.rb#L3">RSpec</a> have access to all of the integration as the built-in support for Active Record and Test::Unit.</p>
<p>The new Railtie <span class="caps">API</span> makes it possible to modify the built-in generators, add rake tasks, configure default Rails options, and specify code to run as early, or as late as you need. Rails plugins like <a href="http://github.com/plataformatec/devise">Devise</a> were able to add much better integration in the Rails 3 version of their plugin. Expect to see a lot more of that in the months ahead.</p>
<p><strong>Rewritten internals</strong><br>
We rewrote the internals of Action Pack and Railties, making them much more flexible and easier to extend. Instead of a single monolithic ActionController::Base, Rails 3 exposes a number of modules, each with defined APIs, that you can mix and match to create special-purpose controllers for your own use. Both <a href="http://github.com/rails/rails/blob/master/actionmailer/lib/action_mailer/base.rb#L333">Action Mailer in Rails</a> and <a href="http://github.com/apotonick/cells/blob/master/lib/cell/rails.rb#L5">the Cells project</a> make heavy use of this new functionality.</p>
<p>You can also take a look a <a href="http://yehudakatz.com/2009/12/26/the-rails-3-router-rack-it-up/">this blog post by Yehuda</a> (from last year) to see how the new architecture makes it easy to implement Django-style generic actions in Rails by leveraging Rack and ActionController::Metal.</p>
<p>The Rails generator system is got a revamp as well. Instead of monolithic generators that know about all of the Rails frameworks, each generator calls a series of hooks, such as :test_framework and :orm, that plugins can register handlers for. This means that generating a scaffold when using rSpec, DataMapper and Haml will generate a scaffold customized for those plugins.</p>
<p><strong>Agnosticism with jQuery, rSpec, and Data Mapper</strong><br>
The rewritten internals and the new plugin APIs have brought true agnosticism to Rails 3 for all components of the framework. Prefer DataMapper to Active Record? <a href="http://github.com/datamapper/dm-rails">No problem</a>. Want to use jQuery instead of Prototype? <a href="http://github.com/rails/jquery-ujs">Go ahead</a>. Eager to test with rSpec instead of test/unit? <a href="http://github.com/rspec/rspec-rails">You got it</a>.</p>
<p>It&#8217;s never been easier to Have It Your Way&#8482; with Rails 3. And at the same time, we&#8217;ve made that happen without making using the excellent default stack any more complicated.</p>
<p><strong>Documentation</strong><br>
Rails 3 has had a long development cycle and while that might have lead to some impatience, it has also given book and tutorial authors a chance to catch up and be ready. There&#8217;s a wealth of great Rails 3 documentation available already and more is coming shortly.</p>
<p>The <a href="http://pragprog.com/titles/rails4/agile-web-development-with-rails">Agile Web Development with Rails 4th Ed</a> book is almost ready and there are <a href="http://www.amazon.com/s/ref=nb_sb_ss_c_1_7?url=search-alias%3Dstripbooks&field-keywords=rails+3&x=0&y=0&sprefix=rails+3&ih=5_1_1_0_0_0_0_0_0_1.38_159&fsc=5">plenty more books coming</a>. Check out all the <a href="http://guides.rubyonrails.org/">new guides</a>, the <a href="https://rubyonrails.org/screencasts/rails3">new official videos</a>, <a href="http://railscasts.com/">new Railscasts</a>, and a <a href="http://railstutorial.org/book">new tutorial</a>. See the recent <a href="https://rubyonrails.org/2010/8/28/rails-has-great-documentation">recap of documentation sources</a> for more.</p>
<p><strong>Installation</strong><br>
<code>gem install rails --version 3.0.0</code>.</p>
<p>We also have a Rails <a href="http://github.com/rails/rails/tree/v3.0.0">v3.0.0 tag</a> and a <a href="http://github.com/rails/rails/tree/3-0-stable">3-0-stable branch</a>.</p>
<p>Rails 3.0 has been designed to work with Ruby 1.8.7, Ruby 1.9.2, and JRuby 1.5.2+.</p>
<p><strong>Gratitude and next steps</strong><br>
I&#8217;m personally incredibly proud of this release. I&#8217;ve been working on Rails for more than 7 years and the quality of the framework we have today is just astounding. This is only possible as a community effort and Rails 3 has seen so many incredible developers step up and help make this <i>our best release ever</i> (wink). Many thanks to all of you.</p>
<p>We&#8217;ll continue to develop Rails 3.0 with fixes and tweaks via the stable branch and Rails 3.1 is already cooking on master.</p>
<p><strong><span class="caps">UPDATE</span>:</strong> We&#8217;re raising money for Charity:Water in the name of Rails 3.0. Please donate and help us <a href="https://rubyonrails.org/2010/8/30/appreciate-rails-3-with-charity">bring clean water to 5,000 people in the name of the Rails community</a>.</p>