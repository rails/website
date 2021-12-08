---
layout: post
title: Using custom mime types
categories:
- tricks
- edge
author: rick
published: true
date: 2006-12-19 03:02:00.000000000 +00:00
---
<p>So, you&#8217;ve started using Rails&#8217; new mime type support with responds_to, but you were wondering how to add your own custom types?  Luckily, Geoffrey Grosenbach (aka <a href="http://topfunky.com/">topfunky</a>) is there to <a href="http://nubyonrails.topfunky.com/articles/2006/12/18/dynamic-graphics-with-rails-1-2">show you the way</a>.  His example involves registering an extension for .png, and generating a custom icon for an order in his shopping cart with some RMagick-fu.  His example looks something like this:</p>
<pre><code>Mime::Type.register "image/png", :png

# then in your controller action
def show
  respond_to do |format|
    format.html { }
    format.png { }
  end
end</code></pre>
<p><code>Mime::Type.register</code> will add the image/png mime type to the <a href="http://dev.rubyonrails.org/svn/rails/trunk/actionpack/lib/action_controller/mime_types.rb">collection of mime types</a>, bind it to the .png extension.  It also creates a special Mime::Type instance at Mime::<span class="caps">PNG</span>. Check out the great post and the comments for more tips on caching and RMagick.</p>
<p><strong>Note:</strong>  After some investigation, I&#8217;ve found that using Geoff&#8217;s <a href="http://svn.topfunky.com/podcast/app/controllers/application.rb">:format hack</a> is not required on Rails 1.2 if you make the request with the :format parameter.  Using routes like formatted_post_path(@post, :xml) will give you a path like &#8220;/posts/1.xml&#8221;.  Accessing that will write public/posts/1.xml, regardless of what the page_cache_extension is.</p>