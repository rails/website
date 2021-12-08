---
layout: post
title: ! 'Rails 1.1: RJS, Active Record++, respond_to, integration tests, and 500
  other things!'
categories:
- releases
author: David
published: true
date: 2006-03-28 06:02:00.000000000 +01:00
---
<p>The biggest upgrade in Rails history has finally arrived. Rails 1.1 boasts more than 500 fixes, tweaks, and features from more than 100 contributors. Most of the updates just make everyday life a little smoother, a little rounder, and a little more joyful.</p>
<p>But of course we also have an impressive line of blockbuster features that will make you an even happier programmer. Especially if you&#8217;re into Ajax, web services, and strong domain models &mdash; and who isn&#8217;t these funky days?</p>
<p>The star of our one-one show is <span class="caps">RJS</span>: JavaScript written in Ruby. It&#8217;s the perfect antidote for your JavaScript blues. The way to get all Ajaxified without leaving the comfort of your beloved Ruby. It&#8217;s the brainchild of JavaScript and Ruby mastermind Sam Stephenson and an ode to the dynamic nature of Ruby.</p>
<p>Here goes a few sample rjs calls:</p>
<pre>
  # First buy appears the cart, subsequent buys highlight it
  page[:cart].visual_effect(@cart.size == 1 ? :appear : :highlight)
  
  # Replace the cart with a refresh rendering of the cart partial
  page[:cart].replace_html :partial =&gt; "cart"
  
  # Highlight all the DOM elements of class "product"
  page.select(".product").each do |element|
    element.visual_effect :highlight
  end
 
  # Call the custom JavaScript class/method AddressBook.cancel()
  page.address_book.cancel
  
  # 4 seconds after rendering, set the font-style of all company
  # spans inside tds to normal
  page.delay(4) do
    page.select("td span.company").each do |column| 
      column.set_style :fontStyle =&gt; "normal"
    end
  end
</pre>
<p>And that&#8217;s just a tiny taste of what <span class="caps">RJS</span> is capable of. It takes the Ajax on Rails experience far above and beyond the great support we already had. Bringing us even closer to the goal of &#8220;as easy as not to&#8221;. Read more about <a href="http://api.rubyonrails.org/classes/ActionView/Helpers/PrototypeHelper/JavaScriptGenerator/GeneratorMethods.html"><span class="caps">RJS</span> in the docs</a> or in Cody Fauser&#8217;s tutorial about <a href="http://www.codyfauser.com/articles/2006/03/16/rjs-element-and-collection-proxies">element and collection proxies</a> and his <a href="http://www.codyfauser.com/articles/2005/11/20/rails-rjs-templates">introduction to <span class="caps">RJS</span></a> (it shouldn&#8217;t surprise you that Cody is writing about book about <span class="caps">RJS</span> for O&#8217;Reilly).</p>
<p>But its not just the view we&#8217;re giving some tender love, oh no. Active Record has been blessed with bottomless eager loading, polymorphic associations, join models, to_xml, calculations, and database adapters for Sybase and OpenBase. It&#8217;s a huge upgrade and made possible through the fantastic work of Rick Olson (who was recently accepted into Rails Core, not a minute too soon!) and Anna Chan. Let&#8217;s dig into three of the top features:</p>
<p>Bottomless eager loading gives you the power of pulling back a multi-level object graph in a single <span class="caps">JOIN</span>-powered <span class="caps">SQL</span> query. Example:</p>
<pre>
  # Single database query:
  companies = Company.find(:all, :include =&gt; { 
    :groups =&gt; { :members=&gt; { :favorites } } })
  
  # No database query caused:
  companies[0].groups[0].members[0].favorites[0].name
</pre>
<p>You can mix&#8217;n&#8217;match too. Using both multi-level fetches and first-level ones in the same call:</p>
<pre>
  # Just 1 database query for all of this:
  authors = Author.find(:all, :include =&gt; [ 
    { :posts =&gt; :comments }, :categorizations ])
  authors[0].posts[0].comments[0].body # =&gt; "Rock on Rails!"
  authors[0].categorizations[0].name   # =&gt; "Less software"
</pre>
<p>Polymorphic associations and join models give you access to much richer domains where many-to-many relationships are exposed as real models. Say Authorship between Book and Author:</p>
<pre>
  class Author &lt; ActiveRecord::Base
    has_many :authorships
    has_many :books, :through =&gt; :authorships
  end
 
  class Book &lt; ActiveRecord::Base
    has_many :authorships
    has_many :authors, :through =&gt; :authorships
  end
 
  class Authorship &lt; ActiveRecord::Base
    belongs_to :author
    belongs_to :book
  end
</pre>
<p>&#8230;or addresses that can belong to both people and companies:</p>
<pre>
  class Address &lt; ActiveRecord::Base
    belongs_to :addressable, :polymorphic =&gt; true
  end
 
  class Person &lt; ActiveRecord::Base
    has_one :address, :as =&gt; :addressable
  end
 
  class Company &lt; ActiveRecord::Base
    has_one :address, :as =&gt; :addressable
  end
</pre>
<p>Now let&#8217;s have a look at the new respond_to feature of Action Controller that makes it much easier to launch your application with both Ajax, non-Ajax, and <span class="caps">API</span> access through the same actions. By inspecting the <a href="http://www.loudthinking.com/arc/000572.html">Accept</a> header, we can do clever stuff like:</p>
<pre>
  class WeblogController &lt; ActionController::Base
    def create
      @post = Post.create(params[:post])
  
      respond_to do |type|
        type.js   { render }  # renders create.rjs
        type.html { redirect_to :action =&gt; "index" }
        type.xml  do
          headers["Location"] = post_url(:id =&gt; @post)
          render(:nothing, :status =&gt; "201 Created")
        end
      end
    end
  end
</pre>
<p>The recently launched <a href="http://basecamphq.com/api/"><span class="caps">API</span> for Basecamp</a> uses this approach to stay <span class="caps">DRY</span> and keep Jamis happy. So happy that he wrote a <a href="http://jamis.jamisbuck.org/articles/2006/03/27/web-services-rails-style">great guide on how to use respond_to</a></p>
<p>Speaking of Jamis, he also added the third layer of testing to Rails: Integration tests. They allow you to faithfully simulate users accessing multiple controllers and even gives you the power to simulate multiple concurrent users. It can really give you a whole new level of confidence in your application. The 37signals team used it heavily in <a href="http://www.campfirenow.com">Campfire</a> from where it was later extracted into Rails. See Jamis&#8217; <a href="http://jamis.jamisbuck.org/articles/2006/03/09/integration-testing-in-rails-1-1">great guide to integration testing</a> for more.</p>
<p>These highlighted features are just the tip of the iceberg. Scott Raymond has done a great job trying to keep a tab on all the changes, see his <a href="http://scottraymond.net/articles/2006/02/28/rails-1.1">What new in Rails 1.1</a> for a more complete, if brief, walk-through of all the goodies. And as always, the changelogs has the complete step-by-step story for those of you who desire to know it all.</p>
<p>And as mentioned before, Chad Fowler&#8217;s excellent <a href="http://www.pragmaticprogrammer.com/titles/fr_rr/index.html">Rails Recipes</a> has in-depth howtos on a lot of the new features. If you desire some packaged documentation, this is the book to pick up.</p>
<p><strong>Upgrading from 1.0</strong></p>
<p>So with such a massive update, upgrading is going to be hell, right? Wrong! We&#8217;ve gone to painstaking lengths to ensure that upgrading from 1.0 will be as easy as pie. Here goes the steps:</p>
<ul>
	<li>Update to Rails 1.1:<br/><code>gem install rails --include-dependencies</code></li>
	<li>Update JavaScripts for <span class="caps">RJS</span>:<br/><code>rake rails:update</code></li>
</ul>
<p>That&#8217;s pretty much it! If you&#8217;re seeing any nastiness after upgrading, it&#8217;s most likely due to a plugin that&#8217;s incompatible with 1.1. See if the author hasn&#8217;t updated it and otherwise force him to do so.</p>
<p>If you&#8217;re on Ruby 1.8.2 with Windows, though, you&#8217;ll want to upgrade to the 1.8.4 (or the script/console will fail). And even if you&#8217;re on another platform, it&#8217;s a good idea to upgrade to Ruby 1.8.4. We still support 1.8.2, but might not in the next major release. So may as well get the upgrading with over with now.</p>