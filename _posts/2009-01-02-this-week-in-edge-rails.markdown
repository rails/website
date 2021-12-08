---
layout: post
title: This Week in Edge Rails
categories:
- edge
author: Mike Gunderloy
published: true
date: 2009-01-02 17:34:00.000000000 +00:00
---
<h3>December 27, 2008-January 2, 2009</h3>
<p>Happy New Year! Apparently the Rails core team was not doing too much partying to end the old year: we had 35 commits hit the edge tree, and some of them involved very substantial work. Here&#8217;s my weekly overview of some of the most visible and significant changes.</p>
<h2>Optimization of respond_to</h2>
<p>In some of the first fruits of the Rails-Merb team merger, Yehuda Katz took a look at the <code>respond_to</code> method, which is of course heavily used in many Rails applications to allow your controller to format results differently based on the <span class="caps">MIME</span> type of the incoming request. After eliminating a call to <code>method_missing</code> and some profiling and tweaking, he reports an 8% improvement in the number of requests per second served with a simple <code>respond_to</code> that switches between three formats. The best part? No change at all required to the code of your application to take advantage of this speedup. <a href="http://github.com/rails/rails/commit/6dc12881110d26bb952bd0f565623144f10a07b6">commit</a> <a href="http://github.com/rails/rails/commit/4f043a48381c142e308824e3b7e15435a61bbb53">commit</a></p>
<p>If you want a preview of what else to expect from Rails 3, you might want to dip into Yehuda&#8217;s <a href="http://github.com/wycats/rails/tree/master">own fork of the Rails tree</a>; I&#8217;ll be covering these changes as they make their way back into the master copy of edge Rails.</p>
<h2>Dynamic Scopes for Active Record</h2>
<p>You know about dynamic finders in Rails (which allow you to concoct methods like <code>find_by_color_and_flavor</code> on the fly) and named scopes (which allow you to encapsulate reusable query conditions into friendly names like <code>currently_active</code>). Well, now you can have dynamic scope methods. The idea is to put together syntax that allows filtering on the fly <i>and</i> method chaining. For example:</p>
<pre><code>
Order.scoped_by_customer_id(12)
Order.scoped_by_customer_id(12).find(:all, 
  :conditions =&gt; "status = 'open'")
Order.scoped_by_customer_id(12).scoped_by_status("open")
</code></pre>
<p>There&#8217;s some further discussion of this over on Ryan Daigle&#8217;s <a href="http://ryandaigle.com/articles/2008/12/29/what-s-new-in-edge-rails-dynamic-scope-methods">blog</a>. <a href="http://github.com/rails/rails/commit/66ee5890c5f21995b7fe0c486547f1287afe2b55">commit</a></p>
<h2>Other Active Record Updates</h2>
<p>There were a few changes going on in Active Record this week. A trio of commits cleaned up some behavior of associations when the <code>:primary_key</code> option is specified. <a href="http://github.com/rails/rails/commit/7db1704068b86fb2212388b14b4963526bacfa5d">commit</a> <a href="http://github.com/rails/rails/commit/f9cab0e503a4721c9d0369f89bb85c6e658f778c">commit</a> <a href="http://github.com/rails/rails/commit/21efba464afa2ae6e5dfd938ac8a3ce446faf7e7">commit</a></p>
<p>On another front, <code>ActiveRecord::Base#new_record?</code> now returns false rather than nil when confronted with an existing record. While there was <a href="http://github.com/rails/rails/commit/6e98adfc8e19a39fa45d4acd94145d318d151964#comments">some discussion</a> of the wisdom of this change, the consensus seems to be that it can&#8217;t hurt and might make things less surprising for some developers. <a href="http://github.com/rails/rails/commit/6e98adfc8e19a39fa45d4acd94145d318d151964">commit</a></p>
<h2><span class="caps">HTTP</span> Digest Authentication</h2>
<p>Rails now has built-in support for <a href="http://www.faqs.org/rfcs/rfc2617.html"><span class="caps">HTTP</span> digest authentication</a>. To use it, you call <code>authenticate_or_request_with_http_digest</code> with a block that returns the user&#8217;s password (which is then hashed and compared against the transmitted credentials):</p>
<pre><code>
class PostsController &lt; ApplicationController
  Users = {"dhh" =&gt; "secret"}
  before_filter :authenticate
  
  def secret
    render :text =&gt; "Password Required!"
  end

  private
  def authenticate
    realm = "Application"
    authenticate_or_request_with_http_digest(realm) do |name|
      Users[name]
    end
  end
end
</code></pre>
<p><a href="http://github.com/rails/rails/commit/45dee3842d68359a189fe7c0729359bd5a905ea4">commit</a></p>
<h2>Multiple Conditions for Callbacks</h2>
<p>When using Active Record callbacks, you can now combine <code>:if</code> and <code>:unless</code> options on the same callback, and supply multiple conditions as an array:</p>
<pre><code>
before_save :update_credit_rating, :if =&gt; :active, 
  :unless =&gt; [:admin, :cash_only]
</code></pre>
<p><a href="http://github.com/rails/rails/commit/1e45818a622405e720a4529795f8be2f11660361">commit</a></p>
<h2>Testing and continuous integration</h2>
<p>A little flurry of activity cleaned up some loose ends in our testing strategy for Rails itself. This included <a href="http://github.com/rails/rails/commit/fdaa9ed0336634c33b5a529dfe4f5ed506a1fc5e">not running symlink tests on Windows</a>, adding <a href="http://github.com/rails/rails/commit/9fd35fc2d892393386ca9f522d25ba0bcb9c6764">test coverage</a> to <code>Rails::TemplateRunner</code>, removing <a href="http://github.com/rails/rails/commit/1fb275541a58e6a2100261c6117e96e6c014cc6c">some</a> <a href="http://github.com/rails/rails/commit/490c26c8433a6d278bc61118782da360e8889646">assumptions</a> in various tests, and getting the <a href="http://github.com/rails/rails/commit/36af857c435cbbdb43f5a7bed200ddaa5e10ef80"><span class="caps">FCGI</span></a> and <a href="http://github.com/rails/rails/commit/220dff4c3b58b7becb587ee6f2434b2ca720f7c3">sqlite2</a> tests working again. This is all part of a longer-term effort to make the Rails <a href="http://ci.rubyonrails.org/">continuous integration server</a> more useful moving forward. As you&#8217;ll see if you peek at the current build status, we&#8217;re not quite there yet, but we&#8217;re getting close.</p>
<p>By the way, if you want to set up your own CI server for Rails, there are <a href="http://github.com/rails/rails/tree/master/ci">instructions</a> right in the source code.</p>
<h2>Code Comments for Metaprogramming</h2>
<p>One side effect of the changes to <code>respond_to</code> is that people <a href="http://github.com/rails/rails/commit/6dc12881110d26bb952bd0f565623144f10a07b6#comments">really liked</a> the inline comments that make the intent of the <code>class_eval</code> code clear. As a result, we now have similar comments throughout the Rails source code. For example:</p>
<pre><code>
def #{method_name}     # def year
  time.#{method_name}  #   time.year
end                    # end
</code></pre>
<p>If you&#8217;re just using Rails, you&#8217;ll never see these comments &#8211; but if you&#8217;re helping to maintain and improve the framework, you&#8217;ll appreciate them. <a href="http://github.com/rails/rails/commit/a2270ef2594b97891994848138614657363f2806">commit</a></p>