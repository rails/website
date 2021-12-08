---
layout: post
title: ! 'Rails 1.2: REST admiration, HTTP lovefest, and UTF-8 celebrations'
categories:
- releases
author: David
published: true
date: 2007-01-19 01:06:00.000000000 +00:00
---
<p>Get out your party balloons and funny hats because we&#8217;re there, baby. Yes, sire, Rails 1.2 is finally available in all it&#8217;s glory. It took a little longer than we initially anticipated to get everything lined up (and even then we had a tiny snag that bumped us straight from 1.2.0 to 1.2.1 before this announcement even had time to be written).</p>
<p>So hopefully it&#8217;s been worth the wait. Who am I kidding. Of course it&#8217;s been worth the wait. We got the RESTful flavor with new encouragement for resource-oriented architectures. We&#8217;re taking mime types, <span class="caps">HTTP</span> status codes, and multiple representations of the same resource serious. And of course there&#8217;s the international pizzazz of multibyte-safe <span class="caps">UTF</span>-8 wrangling.</p>
<p>That&#8217;s just some of the headliner features. On top of that, there&#8217;s an absolutely staggering amount of polish being dished out. The <span class="caps">CHANGELOG</span> for Action Pack alone contains some two hundred entries. Active Record has another 170-something on top of that.</p>
<p>All possible due to the amazing work of our wonderful and glorious community. People from all over the world doing their bit, however big or small, to increase the diameter of your smile. That&#8217;s love, people.</p>
<p>As always, you get a hold of the latest and greatest through gems:</p>
gem install rails &#8212;include-dependencies
<p>&#8230;or if you prefer to freeze it straight up, you can:</p>
rake rails:freeze:edge <span class="caps">TAG</span>=rel_1-2-1
<p>If you go with the gems, remember to change your version binding in config/environment.rb. Otherwise, you&#8217;ll still be tied to whatever old version you were using before.</p>
<p>Do note, though, that this is a massive upgrade. A few major components of Rails were left for scraps and entirely rewritten (routing and auto-loading included). We&#8217;ve tried our very best to remain backwards compatible. We&#8217;ve run multiple release candidate sessions to everyone help achieve that goal.</p>
<p>But it may not be perfect &mdash; heck, what is &mdash; so you&#8217;d be best advised to give your application a full and thorough work-out before contemplating a deployment. But of course, you&#8217;ve been such a good little tester bee that all what is needed is a single &#8220;rake&#8221; to see if everything passes, right?</p>
<h1>How to get started learning all about Rails 1.2</h1>
<p>With the fanfare out of the way, I point your attention to a rerun of the RC1 release notes on the new features. This rerun only contains the highlights, though. Real fans will want to peruse <a href="http://api.rubyonrails.org/">the CHANGELOGs themselves from the <span class="caps">API</span></a>.</p>
<p>For everyone else, there&#8217;s of course also the much easier path of just picking up the second edition of <a href="http://pragmaticprogrammer.com/titles/rails/index.html">Agile Web Development with Rails</a>. This edition was written to be spot on with 1.2 and contains a lot more elaborate guidance than you&#8217;ll find in the CHANGELOGs.</p>
<p>So it&#8217;s no wonder that the 2nd edition sold out the 15,000 copies of the first print run in a mere three weeks. Rest assured, though, the second run should already be available in stores. And for instant gratification, nothing beats picking up the PDF+Book combo off the Pragmatic book site.</p>
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