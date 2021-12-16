---
layout: post
title: This Week in Edge Rails
categories:
- edge
author: Mike Gunderloy
published: true
date: 2009-04-17 14:32:00.000000000 +01:00
---
<h3>April 4 &#8211; April 17, 2009</h3>
<p>Just in case you missed the news: edge Rails is waking up, with Rails 3 changes starting to show up in the <a href="http://github.com/rails/rails/tree/master">master branch at Github</a>. So there&#8217;s a lot to discuss this week. If you want some more of the technical story on the Rails 3 rearchitecting to date, check out the detailed blog postings from <a href="http://yehudakatz.com/">Yehuda Katz</a>.</p>
<p><b>Which Branch Should I Use?</b><br /></p>
<p>The Rails 3.0 work is being done on the master branch in the Rails repository on Github. If you want to keep up with all the latest changes, this is the branch to track &#8211; with the caveat that this is currently alpha code. It&#8217;s entirely possible to build a working Rails application using the master branch. The Rails core team is committed to keeping the master branch passing all tests, and in fact improving our test coverage and continuous integration policies are both on tap as Rails 3 improvements. But it&#8217;s important to realize that the changes to Rails will result in many plugins needing a rewrite before they will work with Rails 3 (of course, some plugins will need more updating than others). This will make Rails 3 difficult to use for full-scale production deployments for some time to come.</p>
<p>For existing production applications, you should be tracking the changes on the 2-3-stable branch at Github. This branch contains bug fixes and improvements to the 2.3 release code, and should continue to remain compatible with the plugins and code that you&#8217;re already using.</p>
<p><b>Should I be Submitting Patches to Rails?</b><br /></p>
<p>Absolutely! Rails has always been a <a href="http://rails-contributors.hashref.com/contributors">community effort</a> and that&#8217;s not changing for Rails 3. We welcome patches for either Rails 2.3 or Rails 3.0 &#8211; please use the appropriate tag (2-3-stable or 3.0) in your Lighthouse tickets to make it easy to tell which branch you&#8217;ve tested and based your patch on. The <a href="http://guides.rubyonrails.org/contributing_to_rails.html">Contributing to Rails</a> Guide will help you through the mechanics of submitting a patch to Rails.</p>
<p>David outlined the <a href="https://rubyonrails.org/2008/12/23/merb-gets-merged-into-rails-3">overall vision for Rails 3</a> back in December, and that&#8217;s still the basic plan. If there&#8217;s some piece that you&#8217;d especially like to get involved with, the <a href="http://groups.google.com/group/rubyonrails-core">Ruby on Rails: Core</a> mailing list will help you get in touch with the developers to coordinate plans &#8211; and possibly save some headaches. Most of the major pieces of work are already underway, but we know that community ideas and contributions are essential to the success of Rails 3.</p>
<p><b>Rails 2.3.x Changes</b><br /></p>
<p>Speaking of Rails 2.3, the last couple of weeks have seen some bug fixes deployed, and one interesting piece of new functionality: <code>ActiveRecord::Base#touch</code>. The idea is that you get a shortcut to push the current time into the <code>updated_at</code> or <code>updated_on</code> timestamp field in a record:</p>
<pre><code>
@customer.touch
</code></pre>
<p>What makes this more than a savings of a few keystrokes is that it&#8217;s also implemented as an option for <code>belongs_to</code> associations:</p>
<pre><code>
class Order &lt; ActiveRecord::Base
	belongs_to :customer, :touch =&gt; :last_order_update
end
</code></pre>
<p>With this declaration in place, saving or destroying an order object will touch the corresponding parent customer object. This can come in very handy when you&#8217;re trying to invalidate a cached copy of the parent in that situation.</p>
<p><a href="http://github.com/rails/rails/commit/50e867480a265b9ef60401ab0d394d9baeb5b95e">commit</a> <a href="http://github.com/rails/rails/commit/fa750e08a8d8c9f07afd88e616284549598926e2">commit</a></p>
<p><b>Rails 3.0 Changes</b><br /></p>
<p><code>ActiveRecord::Base#touch</code> was also added to Rails 3.0 at the same time that it went into the 2.3 branch. In general, this should be the case: new functionality from Rails 2.3 will carry over into Rails 3. The core team is working hard to ensure easy upgrades and compatibility when the time comes to make the version change. But there were a lot of other changes this week that only apply to Rails 3: that&#8217;s what the rest of this posting is about.</p>
<p><b>Module Organization</b><br /></p>
<p>There are spots in the Rails code where there are multiple levels of inclusion and inheritance and setup. As part of making it easier to follow what&#8217;s going on, Rails 3 is introducing new <code>depends_on</code>, <code>use</code>, and <code>setup</code> abstractions. These can make the intent of code more obvious on reading:</p>
<pre><code>
module AbstractController
  module Helpers
    depends_on Renderer
 
    setup do
      ...
    end
    ...
  end
end

module ActionController
  class Base2 &lt; AbstractBase
    use AbstractController::Callbacks
    use AbstractController::Helpers
    ...
  end
end
</code></pre>
<p><a href="http://github.com/rails/rails/commit/c1aa5b0e14cd4bd27a5d8bd85cf7c36fa5911830">commit</a> <a href="http://yehudakatz.com/2009/04/07/better-module-organization/">More information</a></p>
<p><b>AbstractController</b><br /></p>
<p>Probably the biggest architectural change so far in Rails 3 is the introduction of the <code>AbstractController</code> base class. This is a new implementation of the commonalities between <code>ActionController::Base</code> and <code>ActionMailer::Base</code>, and will eventually serve as a base class for the Rails analog of Merb&#8217;s parts. The intent is not to provide code that plugins or applications will use directly, but the build a solid low-level <span class="caps">API</span> that other things can depend on. For example, a consumer of <code>AbstractController</code> will be able to implement its own path-finding logic for templates, or add additional options to the basic <code>render</code> method.</p>
<p><a href="http://github.com/rails/rails/commit/95c9718118bc0342ddb320f23b5e0a17fb12b7ad">commit</a> <a href="http://github.com/rails/rails/commit/3cecbc21e37f772a72917f80c53a7645f81d94c5">commit</a> <a href="http://yehudakatz.com/2009/03/20/another-dispatch-abstractcontroller/">More information</a></p>
<p><b>ActionDispatch</b><br /></p>
<p>Another internal architectural change is the introduction of <code>ActionDispatch</code>. A new member of the Action Pack family, <code>ActionDispatch</code> exists as a home for all of the various <span class="caps">HTTP</span> libraries and middleware that were previously stuffed into <code>ActionController</code>, including such things as request handling, parameter parsing, status codes, and our bundled copy of Rack. <a href="http://github.com/rails/rails/commit/319ae4628f4e0058de3e40e4ca7791b17e45e70c">commit</a></p>
<p><b>Defining the Surface Area</b><br /></p>
<p>One of the goals of the Rails 3 work is to cleanly distinguish between public <span class="caps">API</span> methods that plugins and application code can rely on, and Rails internals that are subject to change. For an example of this, you can look at some of the refactoring that&#8217;s been done to <code>ActionView::Template</code>. Here, the change is to identify the methods that aren&#8217;t used by other classes, and to make them private. This immediately makes the intended <span class="caps">API</span> of the class more graspable, and in the long run will help give us a contract with plugins as to how they should interact with core code. After the current surface area has been formally identified, it&#8217;s likely that it will be reduced to result in a cleaner external <span class="caps">API</span>. <a href="http://github.com/rails/rails/commit/d39f5f18bbe60c13e671fc9c7a8eec8e7b4fc42b#diff-0">commit</a></p>
<p><b><span class="caps">AJAX</span> and authenticity tokens</b><br /></p>
<p>If you&#8217;ve been writing much javascript by hand, you&#8217;ve discovered the nuisance of needing to include the Rails authenticity token in your requests. A closer analysis of the issues shows that there&#8217;s no need for these tokens in <span class="caps">AJAX</span> requests, because the same origin policy protects them. So, Rails 3 no longer checks for those tokens on <span class="caps">AJAX</span> requests, and that&#8217;s one less ugly bit of javascript for you to write. <a href="http://github.com/rails/rails/commit/256b0ee8e3c1610967dfc89f864e24b98ed3c236">commit</a></p>
<p><b>Test Improvements</b><br /></p>
<p>Another area of focus in Rails 3 is to bring the internal tests up to current best practices. There are a number of spots in the existing code where the tests are less systematic than they could be &#8211; changes have been checked in with test coverage, but no one has gone through and tried to ensure full test coverage of all normal &#8220;happy&#8221; code paths. For a glimpse of what&#8217;s happening in this area, check out some of the test files in <code>actionpack/test/new_base</code> (the new_base code is a rewrite-in-progress of <code>ActionController::Base</code>). There&#8217;s also active work going on to improve our continuous integration story, and the get together some basic high-level integration tests that can exercise Rails as a whole.</p>
<p><b>Loose Ends</b><br /></p>
<p>There are some Rails 2.3 features that are currently not implemented in master. Some changes could not be merged cleanly with the new architecture, others are being reimplemented in different ways. You&#8217;ll find some specifics in this <a href="http://github.com/rails/rails/commit/906aebceedb95d8caa6db6314bc90f605bdfaf2b">commit message</a>, but the missing pieces include the performance boost for development mode rendering, template recompiling in production, and some template-picking logic. The developers working on Rails 3 have indicated that they intend to get back to feature parity as quickly as possible. In fact, a first pass over the rails-dev-boost changes has already been <a href="http://github.com/rails/rails/commit/3c1187699a80e0c4a003f5693389595cd644390f">committed</a>.</p>
<p><b>Removed: <span class="caps">CGI</span> Support</b><br /></p>
<p>Rails 3 will not support direct <span class="caps">CGI</span> dispatching. This was deprecated in Rails 2.3, so it should be no surprise to anyone that it&#8217;s being removed entirely. If you need to use <span class="caps">CGI</span> for some reason, though, remember that it&#8217;s still supported through Rack. <a href="http://github.com/rails/rails/commit/4a3afe0b4f4193d8f35827c5550727f98c6b63e9">commit</a></p>