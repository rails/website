---
layout: post
title: ! 'Rails 1.2: Release Candidate 1'
categories:
- releases
author: David
published: true
date: 2006-11-23 06:01:00.000000000 +00:00
---
<p>It&#8217;s been almost eight months since the last major release of Rails introduced <span class="caps">RJS</span>, respond_to, eager loading, and much more. It&#8217;s about time we introduced the latest batch of big ideas we&#8217;ve been polishing in the interim.</p>
<p>Since this is a major new release and we&#8217;ve gotten so much incredible uptake even since 1.1, we&#8217;re feeling the need to certify that things work as well as they can out the gates. Thus, this release candidate to fret out any regressions or major issues with the new features.</p>
<p><strong>Update:</strong>  <a href="http://blog.hasmanythrough.com/articles/2006/11/23/rails-1-2-rc1-and-test-cases">Josh Susser has more</a> on what this means for developers, and how best to go about submitting bug reports for the new release.</p>
<h1>What&#8217;s New</h1>
<p>But first, allow me to give you a short rundown of what you should be excited about. While these new features may not appear to have the immediate glitz and glamour the likes of <span class="caps">RJS</span>, they still represent a big fundamental shift in how a lot of Rails applications will be created from this day forth.</p>
<h1><span class="caps">REST</span> and Resources</h1>
<p><span class="caps">REST</span>, and general <span class="caps">HTTP</span> appreciation, is the star of Rails 1.2. The bulk of these features were originally introduced to the general public in my <a href="http://blog.scribestudio.com/articles/2006/07/09/david-heinemeier-hansson-railsconf-2006-keynote-address">RailsConf keynote on the subject</a>. Give that a play to get into the mindset of why <span class="caps">REST</span> matters for Rails.</p>
<p>Then start thinking about how your application could become more RESTful. How you too can transform that 15-action controller into 2-3 new controllers each embracing a single resource with CRUDing love. This is where the biggest benefit is hidden: A clear approach to controller-design that&#8217;ll reduce complexity for the implementer and result in an application that behaves as a much better citizen on the general web.</p>
<p>To help the transition along, we have a scaffold generator that&#8217;ll create a stub <span class="caps">CRUD</span> interface, just like the original scaffolder, but in a RESTful manner. You can try it out with &#8220;script/generate scaffold_resource&#8221;. Left with no arguments like that, you get a brief introduction to how it works and what&#8217;ll create.</p>
<p>The only real <span class="caps">API</span> element that binds all this together is the new map.resources, which is used instead of map.connect to wire a resource-based controller for <span class="caps">HTTP</span> verb love. Then, once you have a resource-loving controller, you can link with our verb-emulation link <code>link_to "Destroy", post_url(post), :method =&gt; :delete</code>. Again, running the resource scaffolder will give you a feel for how it all works.</p>
<h1>Formats and respond_to</h1>
<p>While respond_to has been with us since Rails 1.1, we&#8217;ve added a small tweak in 1.2 that ends up making a big difference for immediate usefulness of the feature. That is the magic of :format. All new applications will have one additional default route: <code>map.connect ':controller/:action/:id.:format'</code>. With this route installed, imagine the following example:</p>
class WeblogController &lt; ActionController::Base
def index
@posts = Post.find :all
respond_to do |format|
format.html
format.xml { render :xml =&gt; @posts.to_xml }
format.rss { render :action =&gt; &#8220;feed.rxml&#8221; }
end
end
end

<span class="caps">GET</span> /weblog     # returns <span class="caps">HTML</span> from browser Accept header
<span class="caps">GET</span> /weblog.xml # returns the <span class="caps">XML</span>
<span class="caps">GET</span> /weblog.rss # returns the <span class="caps">RSS</span>
<p>Using the Accept header to accomplish this is no longer necessary. That makes everything a lot easier. You can explore your <span class="caps">API</span> in the browser just by adding .xml to an <span class="caps">URL</span>. You don&#8217;t need a before_filter to look for clues of a newsreader, just use .rss. And all of them automatically works with page and action caching.</p>
<p>Of course, this format-goodness plays extra well together with map.resources, which automatically makes sure everything Just Works. The resource-scaffold generator even includes an example for this using format.xml, so /posts/5.xml is automatically wired up. Very nifty!</p>
<h1>Multibyte</h1>
<p>Unicode ahoy! While Rails has always been able to store and display unicode with no beef, it&#8217;s been a little more complicated to truncate, reverse, or get the exact length of a <span class="caps">UTF</span>-8 string. You needed to fool around with <span class="caps">KCODE</span> yourself and while plenty of people made it work, it wasn&#8217;t as plug&#8217;n&#8217;play easy as you could have hoped (or perhaps even expected).</p>
<p>So since Ruby won&#8217;t be multibyte-aware until this time next year, Rails 1.2 introduces ActiveSupport::Multibyte for working with Unicode strings. Call the <code>chars</code> method on your string to start working with characters instead of bytes.</p>
<p>Imagine the string &#8216;€2.99&#8217;. If we manipulate it at a byte-level, it&#8217;s easy to get broken dreams:</p>
&#8216;€2.99&#8217;[0,1] # =&gt; &#8220;\342&#8221;
&#8216;€2.99&#8217;[0,2] # =&gt; &#8220;?&#8221;
&#8216;€2.99&#8217;[0,3] # =&gt; &#8220;€&#8221;
<p>The € character takes three bytes. So not only can&#8217;t you easily byte-manipulate it, but String#first and TextHelper#truncate used to choke too. In the old days, this would happen:</p>
&#8216;€2.99&#8217;.first        # =&gt; &#8216;\342&#8217;
truncate(&#8216;€2.99&#8217;, 2) # =&gt; &#8216;?&#8217;
<p>With Rails 1.2, you of course get:</p>
&#8216;€2.99&#8217;.first        # =&gt; &#8216;€&#8217;
truncate(&#8216;€2.99&#8217;, 2) # =&gt; &#8216;€2&#8217;
<p>TextHelper#truncate/excerpt and String#at/from/to/first/last automatically does the .chars conversion, but if when you need to manipulate or display length yourself, be sure to call .chars. Like:</p>
You&#8217;ve written &lt;%= @post.body.chars.length %&gt; characters.
<p>With Rails 1.2, we&#8217;re assuming that you want to play well with unicode out the gates. The default charset for action renderings is therefore also <span class="caps">UTF</span>-8 (you can set another with <code>ActionController::Base.default_charset=(encoding)</code>). <span class="caps">KCODE</span> is automatically set to <span class="caps">UTF</span>-8 as well.</p>
<p><a href="http://www.fngtps.com/2006/10/activesupport-multibyte">Watch the screencast.</a> (but note that manually setting the <span class="caps">KCODE</span> is no longer necessary)</p>
<p>Unicode was in greatest demand, but Multibyte is ready handle other encodings (say, Shift-<span class="caps">JIS</span>) as they are implemented. Please extend Multibyte for the encodings you use.</p>
<p>Thanks to Manfred Stienstra, Julian Tarkhanov, Thijs van der Vossen, Jan Behrens, and (others?) for creating this library.</p>
<h1>Gotchas</h1>
<p>While we&#8217;ve tried our best to remain as backwards compatible with 1.1.6 as possible, there are a few minor edge cases that will need some rework if you used to do things a certain way.</p>
<h1>Routes</h1>
<p>Action Pack has an all new implementation of Routes that&#8217;s both faster and more secure, but it&#8217;s also a little stricter. Semicolons and periods are separators, so a <code>/download/:file</code> route which used to match <code>/download/history.txt</code> doesn&#8217;t work any more. Use <code>:requirements =&gt; { :file =&gt; /.*/ }</code> to match the period.</p>
<h1>Auto-loading</h1>
<p>We&#8217;ve fixed a bug that allowed libraries from Ruby&#8217;s standard library to be auto-loaded on reference. Before, if you merely reference the Pathname constant, we&#8217;d autoload pathname.rb. No more, you&#8217;ll need to manually <code>require 'pathname'</code> now.</p>
<p>We&#8217;ve also improved the handling of module loading, which means that a reference for Accounting::Subscription will look for app/models/accounting/subscription.rb. At the same time, that means that merely referencing Subscription will <em>not</em> look for subscription.rb in any subdir of app/models. Only app/models/subscription.rb will be tried. If you for some reason depended on this, you can still get it back by adding app/models/accounting to config.load_paths in config/environment.rb.</p>
<h1>Prototype</h1>
<p>To better comply with the <span class="caps">HTML</span> spec, <strong>Prototype&#8217;s Ajax-based forms no longer serialize disabled form elements.</strong> Update your code if you rely on disabled field submission.</p>
<p>For consistency <strong>Prototype&#8217;s Element and Field methods no longer take an arbitrary number of arguments.</strong> This means you need to update your code if you use Element.toggle, Element.show, Element.hide, Field.clear, and Field.present in hand-written JavaScript (the Prototype helpers have been updated to automatically generate the correct thing).<br />
<pre><code>
// if you have code that looks like this
Element.show('page', 'sidebar', 'content');
// you need to replace it with code like this
['page', 'sidebar', 'content'].each(Element.show);
</code></pre></p>
<h1>Action Mailer</h1>
<p>All emails are <span class="caps">MIME</span> version 1.0 by default, so you&#8217;ll have to update your mailer unit tests: <code>@expected.mime_version = '1.0'</code></p>
<h1>Deprecation</h1>
<p>Since Rails 1.0 we&#8217;ve kept a stable, backward-compatible <span class="caps">API</span>, so your apps can move to new releases without much work. Some of that <span class="caps">API</span> now feels like our <a href="http://en.wikipedia.org/wiki/Freshman_15">freshman 15</a> so we&#8217;re going on a diet to trim the fat.  <strong>Rails 1.2 deprecates a handful of features which now have superior alternatives or are better suited as plugins.</strong></p>
<p>Deprecation isn&#8217;t a threat, it&#8217;s a promise! These features will be entirely gone in Rails 2.0. You can keep using them in 1.2, but you&#8217;ll get a wag of the finger every time: look for unsightly deprecation warnings in your test results and in your log files.</p>
<p>Treat your 1.0-era code to some modern style. To get started, just run your tests and tend to the warnings.</p>
<h1>Installing</h1>
<p>The release candidate gems live in the Rails gem repository. You install them like this:</p>
gem install rails &#8212;source http://gems.rubyonrails.org &#8212;include-dependencies
<p>Note that it&#8217;ll say something like &#8220;Successfully installed rails-1.1.6.5618&#8221;. That&#8217;s correct as we won&#8217;t use the final version numbers until the official release.</p>
<p>You can also grab it straight from Subversion with http://dev.rubyonrails.org/svn/rails/tags/rel_1-2-0_RC1.</p>
<h1>Submitting regression bugs</h1>
<p>There you have it. Those are the major changes and as always, you can get the full, nitty-gritty scoop in the CHANGELOGs. Over the last eight months, we&#8217;ve made literaly hundreds of improvements. It&#8217;s well worth traversing the CHANGELOGs for goodies. Ryan&#8217;s Scraps is doing a good job <a href="http://www.ryandaigle.com/articles/category/whats-new-in-rails/page/1">annotating the changes</a> as well.</p>
<p>But with the release of any new piece of software, a number of things which used to work, will work no longer.</p>
<p>While the intention with Rails 1.2 is to provide seamless backwards compatibility, we&#8217;re only human, and chances are a few things have snuck through.   So if you&#8217;re trying out the 1.2 release candidate, and find a bug, be sure to report it to us.  There are a few steps you should follow to help us fix your bug during the release canididate cycle.</p>
<p>When adding your bug report, be sure to put &#8216;1.2regression&#8217; in the keywords field.  Bugs with this keyword show up in a <a href="http://dev.rubyonrails.org/report/29">trac report</a>, if you&#8217;re looking for a place to help out, start there.</p>
<p>If at all possible, please include a failing unit test with your bug report.  This makes our life significantly easier, and helps others verify that you&#8217;ve found a genuine case.</p>