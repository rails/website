---
layout: post
title: ! 'Rails 1.2 RC1: New in Action Pack'
categories:
- releases
author: josh
published: true
date: 2006-11-26 16:32:00.000000000 +00:00
---
<p>With all respect to the <a href="http://ryandaigle.com/">reporter from the Edge</a>, here are a few tasty bits from ActionPack in Rails 1.2 (<a href="http://dev.rubyonrails.org/svn/rails/branches/1-2-pre-release/actionpack/CHANGELOG"><span class="caps">CHANGELOG</span></a>). (compiled by <a href="http://topfunky.com/">Geoffrey Grosenbach</a>).</p>


	<h1>Views</h1>


	<p>You can now access nested attributes in <span class="caps">RJS</span>:</p>


	<pre><code>page['foo']['style']['color'] = 'red' # =&gt; $('foo').style.color = 'red';</code></pre>


	<p>Forms now use blocks instead of <code>end_form_tag</code> (<a href="http://www.loudthinking.com/arc/000601.html">notes from <span class="caps">DHH</span></a>):</p>


<pre><code>
&lt;% form_tag(products_url) do %&gt;
  &lt;%= text_field :product, :title %&gt;
  &lt;%= submit_tag "Save" %&gt;
&lt;% end -%&gt;
</code></pre>

	<p>And how many blogs have you visited that say &#8220;Last updated 60 days ago&#8221;? Years and months have been added to <code>distance_of_time_in_words</code>, so you&#8217;ll see &#8220;2 months ago&#8221; or maybe even &#8220;5 years ago&#8221; now.</p>


	<h1>Controllers</h1>


	<p>Uncaught exceptions raised anywhere in your application will cause <code>RAILS_ROOT/public/500.html</code> to be read and shown instead of just the static &#8220;Application error (Rails).&#8221; So make it look nice if you aren&#8217;t using it already!</p>


	<p>There is a new <code>head(options = {})</code> method for responses that have no body.</p>


	<pre><code>head :status =&gt; 404 # return an empty response with a 404 status
head :location =&gt; person_path(@person), :status =&gt; 201</code></pre>


	<p>You can declare specific file extensions exempt from layouts. Bring on the <span class="caps">CSS</span>, PDF, and graphic generating plugins!</p>


	<pre><code>ActionController::Base.exempt_from_layout 'rpdf'</code></pre>


	<p>RESTful resources automatically get a <code>params[:format]</code> option that can force a content type. If :format is specified and matches a declared extension, that mime type will be used in preference to the &#8220;Accept&#8221; header. This means you can link to the same action from different extensions and use that fact to determine output (<a href="http://nubyonrails.com/articles/2006/10/09/peepcode-rest-basics">cheat sheet</a>).</p>


	<pre><code>class WeblogController &lt; ActionController::Base
  def index
    @posts = Post.find :all
    respond_to do |format|
      format.html
      format.xml { render :xml =&gt; @posts.to_xml }
      format.rss { render :action =&gt; "feed.rxml" }
    end
  end</code></pre>


	<p>You can also register your own custom <span class="caps">MIME</span> types. These will be automatically incorporated into controllers so you can use them in <code>respond_to</code> blocks and as file <code>:format</code> extensions.</p>


	<pre><code>Mime::Type.register(string, symbol, synonyms = [])
Mime::Type.register("image/gif", :gif)</code></pre>


	<p>Finally, <code>ActionController.filter_parameter_logging</code> makes it easy to remove passwords, credit card numbers, and other sensitive information from being logged when a request is handled.</p>


	<pre><code>filter_parameter_logging 'password' # Don't log fields that match 'password'</code></pre>


	<h1>Routing and URLs</h1>


	<p>Routing has been significantly rewritten for speed and consistency. One of the benefits is that you can use named routes and RESTful routes in your mailer templates.</p>


<pre><code>
class MyMailer &lt; ActionMailer::Base

  include ActionController::UrlWriter
  default_url_options[:host] = 'my_site.com'
</code></pre>

	<h1>Testing</h1>


<code>assert_response</code> now supports additional symbolic status codes.

<pre><code>
  assert_response :success # You know this one
  assert_response :ok
  assert_response :not_found
  assert_response :forbidden
</code></pre>

	<p>Added the rulin&#8217; <code>assert_select</code> for <span class="caps">CSS</span> selector-based testing (<a href="http://blog.labnotes.org/2006/09/04/assert_select-cheat-sheet/">cheat sheet</a>). Use this instead of <code>assert_tag</code> from now on. </p>


	<pre><code>assert_select "a[href=http://assert_select_rules.com]", @item.url, "Should have a link" 
assert_select "div#products", nil, "Should show a products div on the page"</code></pre>


	<h1>Deprecated</h1>


	<p>You&#8217;ll see warnings when you run your test suite. Here are a few that have been replaced with better syntax:</p>


	<ul>
	<li>assert_tag &rarr; assert_select</li>
	</ul>


	<ul>
	<li>start_form_tag and end_form_tag &rarr; form_tag do end</li>
	</ul>


	<ul>
	<li>@cookies, @headers, @request, @response, @params, @session, @flash &rarr; cookies, headers, request, response, params, session, flash</li>
	</ul>


	<ul>
	<li>.png is no longer automatically appended to extension-less <code>image_tag</code> calls</li>
	</ul>