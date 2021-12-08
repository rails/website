---
layout: post
title: ! 'Rails 2.0: It''s done!'
categories:
- releases
author: David
published: true
date: 2007-12-07 15:03:00.000000000 +00:00
---
<p>Rails 2.0 is finally finished after about a year in the making. This is a fantastic release that&#8217;s absolutely stuffed with great new features, loads of fixes, and an incredible amount of polish. We&#8217;ve even taken a fair bit of cruft out to make the whole package more coherent and lean.</p>
<p>What a milestone for Ruby on Rails as well. I&#8217;ve personally been working on this framework for about four and a half years and we have contributors who&#8217;ve been around for almost as long as well. It&#8217;s really satisfying to see how far we&#8217;ve come in that period of time. That we&#8217;ve proven the initial hype worthy, that we&#8217;ve been able to stick with it and continue to push the envelope.</p>
<p>Before jumping into the breakdown of features, I&#8217;d just like to extend my deep gratitude towards everyone who helped make this release possible. From the stable of merry men in the Rails core to the hundreds of contributors who got a patch applied to everyone who participated in the community over the year. This release is a triumph for large-scale open source development and you can all be mighty proud of the role you played. Cheers!</p>
<p>With the touchy-feely stuff out of the way, let&#8217;s dig into the feast and look at just a sliver of what&#8217;s new:</p>
<p><strong>Action Pack: Resources</strong></p>
<p>This is where the bulk of the action for 2.0 has gone. We&#8217;ve got a slew of improvements to the RESTful lifestyle. First, we&#8217;ve dropped the semicolon for custom methods instead of the regular slash. So <code>/people/1;edit</code> is now <code>/people/1/edit</code>. We&#8217;ve also added the namespace feature to routing resources that makes it really easy to confine things like admin interfaces:</p>
map.namespace(:admin) do |admin|
admin.resources :products,
:collection =&gt; { :inventory =&gt; :get },
:member     =&gt; { :duplicate =&gt; :post },
:has_many   =&gt; [ :tags, :images, :variants ]
end
<p>Which will give you named routes like inventory_admin_products_url and admin_product_tags_url. To keep track of this named routes proliferation, we&#8217;ve added the &#8220;rake routes&#8221; task, which will list all the named routes created by routes.rb.</p>
<p>We&#8217;ve also instigated a new convention that all resource-based controllers will be plural by default. This allows a single resource to be mapped in multiple contexts and still refer to the same controller. Example:</p>
<pre><code>
  # /avatars/45 =&gt; AvatarsController#show
  map.resources :avatars
  
  # /people/5/avatar =&gt; AvatarsController#show 
  map.resources :people, :has_one =&gt; :avatar
</code></pre>
<p><strong>Action Pack: Multiview</strong></p>
<p>Alongside the improvements for resources come improvements for multiview. We already have #respond_to, but we&#8217;ve taken it a step further and made it dig into the templates. We&#8217;ve separated the format of the template from its rendering engine. So show.rhtml now becomes show.html.erb, which is the template that&#8217;ll be rendered by default for a show action that has declared format.html in its respond_to. And you can now have something like show.csv.erb, which targets text/csv, but also uses the default <span class="caps">ERB</span> renderer.</p>
<p>So the new format for templates is action.format.renderer. A few examples:</p>
<ul>
	<li>show.erb: same show template for all formats</li>
	<li>index.atom.builder: uses the Builder format, previously known as rxml, to render an index action for the application/atom+xml mime type</li>
	<li>edit.iphone.haml: uses the custom <span class="caps">HAML</span> template engine (not included by default) to render an edit action for the custom Mime::<span class="caps">IPHONE</span> format</li>
</ul>
<p>Speaking of the iPhone, we&#8217;ve made it easier to declare &#8220;fake&#8221; types that are only used for internal routing. Like when you want a special <span class="caps">HTML</span> interface just for an iPhone. All it takes is something like this:</p>
<pre><code>
  # should go in config/initializers/mime_types.rb
  Mime.register_alias "text/html", :iphone

  class ApplicationController &lt; ActionController::Base
    before_filter :adjust_format_for_iphone
  
    private
      def adjust_format_for_iphone
        if request.env["HTTP_USER_AGENT"] &amp;&amp; request.env["HTTP_USER_AGENT"][/(iPhone|iPod)/]
          request.format = :iphone
        end
      end
  end
  
  class PostsController &lt; ApplicationController
    def index
      respond_to do |format|
        format.html   # renders index.html.erb
        format.iphone # renders index.iphone.erb
      end
    end
  end
</code></pre>
<p>You&#8217;re encouraged to declare your own mime-type aliases in the config/initializers/mime_types.rb file. This file is included by default in all new applications.</p>
<p><strong>Action Pack: Record identification</strong></p>
<p>Piggy-backing off the new drive for resources are a number of simplifications for controller and view methods that deal with URLs. We&#8217;ve added a number of conventions for turning model classes into resource routes on the fly. Examples:</p>
<pre><code>
  # person is a Person object, which by convention will 
  # be mapped to person_url for lookup
  redirect_to(person)
  link_to(person.name, person)
  form_for(person)
</code></pre>
<p><strong>Action Pack: <span class="caps">HTTP</span> Loving</strong></p>
<p>As you might have gathered, Action Pack in Rails 2.0 is all about getting closer with <span class="caps">HTTP</span> and all its glory. Resources, multiple representations, but there&#8217;s more. We&#8217;ve added a new module to work with <span class="caps">HTTP</span> Basic Authentication, which turns out to be a great way to do <span class="caps">API</span> authentication over <span class="caps">SSL</span>. It&#8217;s terribly simple to use. Here&#8217;s an example (there are more in ActionController::HttpAuthentication):</p>
<pre><code>
  class PostsController &lt; ApplicationController
    USER_NAME, PASSWORD = "dhh", "secret"

    before_filter :authenticate, :except =&gt; [ :index ]

    def index
      render :text =&gt; "Everyone can see me!"
    end

    def edit
      render :text =&gt; "I'm only accessible if you know the password"
    end

    private
      def authenticate
        authenticate_or_request_with_http_basic do |user_name, password| 
          user_name == USER_NAME &amp;&amp; password == PASSWORD
        end
      end
  end
</code></pre>
<p>We&#8217;ve also made it much easier to structure your JavaScript and stylesheet files in logical units without getting clobbered by the <span class="caps">HTTP</span> overhead of requesting a bazillion files. Using javascript_include_tag(:all, :cache =&gt; true) will turn public/javascripts/.js into a single public/javascripts/all.js file in production, while still keeping the files separate in development, so you can work iteratively without clearing the cache.</p>
<p>Along the same lines, we&#8217;ve added the option to cheat browsers who don&#8217;t feel like pipelining requests on their own. If you set ActionController::Base.asset_host = &#8220;assets%d.example.com&#8221;, we&#8217;ll automatically distribute your asset calls (like image_tag) to asset1 through asset4. That allows the browser to open many more connections at a time and increases the perceived speed of your application.</p>
<p><strong>Action Pack: Security</strong></p>
<p>Making it even easier to create secure applications out of the box is always a pleasure and with Rails 2.0 we&#8217;re doing it from a number of fronts. Most importantly, we now ship we a built-in mechanism for dealing with <span class="caps">CRSF</span> attacks. By including a special token in all forms and Ajax requests, you can guard from having requests made from outside of your application. All this is turned on by default in new Rails 2.0 applications and you can very easily turn it on in your existing applications using ActionController::Base.protect_from_forgery (see ActionController::RequestForgeryProtection for more).</p>
<p>We&#8217;ve also made it easier to deal with <span class="caps">XSS</span> attacks while still allowing users to embed <span class="caps">HTML</span> in your pages. The old TextHelper#sanitize method has gone from a black list (very hard to keep secure) approach to a white list approach. If you&#8217;re already using sanitize, you&#8217;ll automatically be granted better protection. You can tweak the tags that are allowed by default with sanitize as well. See TextHelper#sanitize for details.</p>
<p>Finally, we&#8217;ve added support for <a href="http://msdn2.microsoft.com/en-us/library/ms533046.aspx"><span class="caps">HTTP</span> only cookies</a>. They are not yet supported by all browsers, but you can use them where they are.</p>
<p><strong>Action Pack: Exception handling</strong></p>
<p>Lots of common exceptions would do better to be rescued at a shared level rather than per action. This has always been possible by overwriting rescue_action_in_public, but then you had to roll out your own case statement and call super. Bah. So now we have a class level macro called rescue_from, which you can use to declaratively point certain exceptions to a given action. Example:</p>
<pre><code>
  class PostsController &lt; ApplicationController
    rescue_from User::NotAuthorized, :with =&gt; :deny_access
    
    protected
      def deny_access
        ...
      end
  end
</code></pre>
<p><strong>Action Pack: Cookie store sessions</strong></p>
<p>The default session store in Rails 2.0 is now a cookie-based one. That means sessions are no longer stored on the file system or in the database, but kept by the client in a hashed form that can&#8217;t be forged. This makes it not only a lot faster than traditional session stores, but also makes it zero maintenance. There&#8217;s no cron job needed to clear out the sessions and your server won&#8217;t crash because you forgot and suddenly had 500K files in tmp/session.</p>
<p>This setup works great if you follow best practices and keep session usage to a minimum, such as the common case of just storing a user_id and a the flash. If, however, you are planning on storing the nuclear launch codes in the session, the default cookie store is a bad deal. While they can&#8217;t be forged (so is_admin = true is fine), their content can be seen. If that&#8217;s a problem for your application, you can always just switch back to one of the traditional session stores (but first investigate that requirement as a code smell).</p>
<p><strong>Action Pack: New request profiler</strong></p>
<p>Figuring out where your bottlenecks are with real usage can be tough, but we just made it a whole lot easier with the new request profiler that can follow an entire usage script and report on the aggregate findings. You use it like this:</p>
<pre><code>
  $ cat login_session.rb
  get_with_redirect '/'
  say "GET / =&gt; #{path}"
  post_with_redirect '/sessions', :username =&gt; 'john', :password =&gt; 'doe'
  say "POST /sessions =&gt; #{path}"
  $ ./script/performance/request -n 10 login_session.rb
</code></pre>
<p>And you get a thorough breakdown in <span class="caps">HTML</span> and text on where time was spent and you&#8217;ll have a good idea on where to look for speeding up the application.</p>
<p><strong>Action Pack: Miscellaneous</strong></p>
<p>Also of note is AtomFeedHelper, which makes it even simpler to create Atom feeds using an enhanced Builder syntax. Simple example:</p>
<pre><code>
  # index.atom.builder:
  atom_feed do |feed|
    feed.title("My great blog!")
    feed.updated((@posts.first.created_at))
  
    for post in @posts
      feed.entry(post) do |entry|
        entry.title(post.title)
        entry.content(post.body, :type =&gt; 'html')
  
        entry.author do |author|
          author.name("DHH")
        end
      end
    end
  end
</code></pre>
<p>We&#8217;ve made a number of performance improvements, so asset tag calls are now much cheaper and we&#8217;re caching simple named routes, making them much faster too.</p>
<p>Finally, we&#8217;ve kicked out in_place_editor and autocomplete_for into plugins that live on the official Rails <span class="caps">SVN</span>.</p>
<p><strong>Active Record: Performance</strong></p>
<p>Active Record has seen a gazillion fixes and small tweaks, but it&#8217;s somewhat light on big new features. Something new that we have added, though, is a very simple Query Cache, which will recognize similar <span class="caps">SQL</span> calls from within the same request and return the cached result. This is especially nice for N+1 situations that might be hard to handle with :include or other mechanisms. We&#8217;ve also drastically improved the performance of fixtures, which makes most test suites based on normal fixture use be 50-100% faster.</p>
<p><strong>Active Record: Sexy migrations</strong></p>
<p>There&#8217;s a new alternative format for declaring migrations in a slightly more efficient format. Before you&#8217;d write:</p>
create_table :people do |t|
t.column, &#8220;account_id&#8221;,  :integer
t.column, &#8220;first_name&#8221;,  :string, :null =&gt; false
t.column, &#8220;last_name&#8221;,   :string, :null =&gt; false
t.column, &#8220;description&#8221;, :text
t.column, &#8220;created_at&#8221;,  :datetime
t.column, &#8220;updated_at&#8221;,  :datetime
end
<p>Now you can write:</p>
create_table :people do |t|
t.integer :account_id
t.string  :first_name, :last_name, :null =&gt; false
t.text    :description
t.timestamps
end
<p><strong>Active Record: Foxy fixtures</strong></p>
<p>The fixtures in Active Record has taken a fair amount of flak lately. One of the key points in that criticism has been the work with declaring dependencies between fixtures. Having to relate fixtures through the ids of their primary keys is no fun. That&#8217;s been addressed now and you can write fixtures like this:</p>
<pre><code>
  # sellers.yml
  shopify:
    name: Shopify

  # products.yml
  pimp_cup:
    seller: shopify
    name: Pimp cup
</code></pre>
<p>As you can see, it&#8217;s no longer necessary to declare the ids of the fixtures and instead of using seller_id to refer to the relationship, you just use seller and the name of the fixture.</p>
<p><strong>Active Record: <span class="caps">XML</span> in, <span class="caps">JSON</span> out</strong></p>
<p>Active Record has supported serialization to <span class="caps">XML</span> for a while. In 2.0 we&#8217;ve added deserialization too, so you can say Person.new.from_xml(&#8220;<person><name>David</name></person>&#8221;) and get what you&#8217;d expect. We&#8217;ve also added serialization to <span class="caps">JSON</span>, which supports the same syntax as <span class="caps">XML</span> serialization (including nested associations). Just do person.to_json and you&#8217;re ready to roll.</p>
<p><strong>Active Record: Shedding some weight</strong></p>
<p>To make Active Record a little leaner and meaner, we&#8217;ve removed the acts_as_XYZ features and put them into individual plugins on the Rails <span class="caps">SVN</span> repository. So say you&#8217;re using acts_as_list, you just need to do ./script/plugin install acts_as_list and everything will move along like nothing ever happened.</p>
<p>A little more drastic, we&#8217;ve also pushed all the commercial database adapters into their own gems. So Rails now only ships with adapters for MySQL, SQLite, and PostgreSQL. These are the databases that we have easy and willing access to test on. But that doesn&#8217;t mean the commercial databases are left out in the cold. Rather, they&#8217;ve now been set free to have an independent release schedule from the main Rails distribution. And that&#8217;s probably a good thing as the commercial databases tend to require a lot more exceptions and hoop jumping on a regular basis to work well.</p>
<p>The commercial database adapters now live in gems that all follow the same naming convention: activerecord-<span class="caps">XYZ</span>-adapter. So if you gem install activerecord-oracle-adapter, you&#8217;ll instantly have Oracle available as an adapter choice in all the Rails applications on that machine. You won&#8217;t have to change a single line in your applications to take use of it.</p>
<p>That also means it&#8217;ll be easier for new database adapters to gain traction in the Rails world. As long as you package your adapter according to the published conventions, users just have to install the gem and they&#8217;re ready to roll.</p>
<p><strong>Active Record: with_scope with a dash of syntactic vinegar</strong></p>
<p>ActiveRecord::Base.with_scope has gone protected to discourage people from misusing it in controllers (especially in filters). Instead, it&#8217;s now encouraged that you only use it within the model itself. That&#8217;s what it was designed for and where it logically remains a good fit. But of course, this is all about encouraging and discouraging. If you&#8217;ve weighed the pros and the cons and still want to use with_scope outside of the model, you can always call it through .send(:with_scope).</p>
<p><strong>ActionWebService out, ActiveResource in</strong></p>
<p>It&#8217;ll probably come as no surprise that Rails has picked a side in the <span class="caps">SOAP</span> vs <span class="caps">REST</span> debate. Unless you absolutely have to use <span class="caps">SOAP</span> for integration purposes, we strongly discourage you from doing so. As a naturally extension of that, we&#8217;ve pulled ActionWebService from the default bundle. It&#8217;s only a gem install actionwebservice away, but it sends an important message none the less.</p>
<p>At the same time, we&#8217;ve pulled the new ActiveResource framework out of beta and into the default bundle. ActiveResource is like ActiveRecord, but for resources. It follows a similar <span class="caps">API</span> and is configured to Just Work with Rails applications using the resource-driven approach. For example, a vanilla scaffold will be accessible by ActiveResource.</p>
<p><strong>ActiveSupport</strong></p>
<p>There&#8217;s not all that much new in ActiveSupport. We&#8217;ve a host of new methods like Array#rand for getting a random element from an array, Hash#except to filter down a hash from undesired keys and lots of extensions for Date. We also made testing a little nicer with assert_difference. Short of that, it&#8217;s pretty much just fixes and tweaks.</p>
<p><strong>Action Mailer</strong></p>
<p>This is a very modest update for Action Mailer. Besides a handful of bug fixes, we&#8217;ve added the option to register alternative template engines and assert_emails to the testing suite, which works like this:</p>
<ol>
	<li>Assert number of emails delivered within a block:<br />
    assert_emails 1 do<br />
      post :signup, :name =&gt; &#8216;Jonathan&#8217;<br />
    end</li>
</ol>
<p><strong>Rails: The debugger is back</strong></p>
<p>To tie it all together, we have a stream of improvements for Rails in general. My favorite amongst these is the return of the breakpoint in form of the debugger. It&#8217;s a real debugger too, not just an <span class="caps">IRB</span> dump. You can step back and forth, list your current position, and much more. It&#8217;s all coming from the gracious note of the ruby-debug gem. So you&#8217;ll have to install that for the new debugger to work.</p>
<p>To use the debugger, you just install the gem, put &#8220;debugger&#8221; somewhere in your application, and then start the server with &#8212;debugger or -u. When the code executes the debugger command, you&#8217;ll have it available straight in the terminal running the server. No need for script/breakpointer or anything else. You can use the debugger in your tests too.</p>
<p><strong>Rails: Clean up your environment</strong></p>
<p>Before Rails 2.0, config/environment.rb files every where would be clogged with all sorts of one-off configuration details. Now you can gather those elements in self-contained files and put them under config/initializers and they&#8217;ll automatically be loaded. New Rails 2.0 applications ship with two examples in form of inflections.rb (for your own pluralization rules) and mime_types.rb (for your own mime types). This should ensure that you need to keep nothing but the default in config/environment.rb.</p>
<p><strong>Rails: Easier plugin order</strong></p>
<p>Now that we&#8217;ve yanked out a fair amount of stuff from Rails and into plugins, you might well have other plugins that depend on this functionality. This can require that you load, say, acts_as_list before your own acts_as_extra_cool_list plugin in order for the latter to extend the former.</p>
<p>Before, this required that you named <i>all</i> your plugins in config.plugins.  Major hassle when all you wanted to say was &#8220;I only care about acts_as_list being loaded before everything else&#8221;. Now you can do exactly that with config.plugins = [ :acts_as_list, :all ].</p>
<p><strong>And hundreds upon hundreds of other improvements</strong></p>
<p>What I&#8217;ve talked about above is but a tiny sliver of the full 2.0 package. We&#8217;ve got literally hundreds of bug fixes, tweaks, and feature enhancements crammed into Rails 2.0. All this coming off the work of tons of eager contributors working tirelessly to improve the framework in small, but important ways.</p>
<p>I encourage you to scourger the CHANGELOGs and learn more about all that changed.</p>
<p><strong>So how do I upgrade?</strong></p>
<p>If you want to move your application to Rails 2.0, you should first move it to Rails 1.2.6. That&#8217;ll include deprecation warnings for most everything we yanked out in 2.0. So if your application runs fine on 1.2.6 with no deprecation warnings, there&#8217;s a good chance that it&#8217;ll run straight up on 2.0. Of course, if you&#8217;re using, say, pagination, you&#8217;ll need to install the classic_pagination plugin. If you&#8217;re using Oracle, you&#8217;ll need to install the activerecord-oracle-adapter gem. And so on and so forth for all the extractions.</p>
<p><strong>So how do I install?</strong></p>
<p>To install through gems, do:</p>
gem install rails -y
<p>&#8230;if you&#8217;re having trouble with that (gem not found), just grab gems from our own repository in the meanwhile:</p>
gem install rails -y &#8212;source http://gems.rubyonrails.org
<p>To try it from an <span class="caps">SVN</span> tag, use (you may need to run this command twice depending on your current Rails version):</p>
rake rails:freeze:edge <span class="caps">TAG</span>=rel_2-0-1
<p>Note: It&#8217;s 2.0.1 because we found a small issue just after we pushed 2.0.0.</p>