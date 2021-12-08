---
layout: post
title: Introducing Rails Metal
categories:
- documentation
author: David
published: true
date: 2008-12-17 11:08:00.000000000 +00:00
---
<p>Rails Edge adopted <a href="http://rack.rubyforge.org/">Rack</a> a while back and we&#8217;ve been exploring ways to expose that better. The first thing we did was to make it really easy to hook up any piece of Rack middleware in front of a Rails request. In your config/environment.rb file, you can do:</p>
config.middlewares.use(Rack::Cache, :verbose =&gt; true)
<p>This will make your application use <a href="http://tomayko.com/src/rack-cache/">Ryan Tomayko&#8217;s excellent Rack::Cache middleware</a> for better <span class="caps">HTTP</span> caching. There are lots of other great generic, reusable Rack middleware pieces. Do go shopping.</p>
<p>But there&#8217;s another use case where Rack also comes in handy. If you have a Rails application that has service end points that need to be really, really fast. So fast that the few milliseconds that a trip through the Rails router and Action Controller path is too much.</p>
<p>For this scenario, we&#8217;ve built a thin wrapper around the generic Rack middleware and given it a place in the hierarchy along with the name &#8220;Metal&#8221;. Rails Metal is meant for things like the <a href="http://www.campfirenow.com">Campfire</a> poller service, which is doing hundreds of requests per second and needs to be really fast and is at the same time really simple (2 database calls and returning a string). This service is currently written in C, but we&#8217;ll look into converting it to Rails Metal instead.</p>
<p><b>Rails Metal is a subset of Rack middleware</b><br/>
Think of Rails Metal as a subset of middleware intended for application-specific end points that need the extra speed (&#8220;write to the metal&#8221;, hence the name). Thanks to recent adoption of Rack sessions, these pieces of metal even have access to the same session as Rails. You can either run them as part of the Rails process or run them as individual services through rackup.</p>
<p>We&#8217;ve even included a generator for Metal, which by default will create a stub ala:</p>
class Poller
def self.call(env)
if env[&#8220;PATH_INFO&#8221;] =~ /^\/poller/
[200, {&quot;Content-Type&quot; =&gt; &#8220;text/html&#8221;}, &#8220;Hello, World!&#8221;]
else
[404, {&quot;Content-Type&quot; =&gt; &#8220;text/html&#8221;}, &#8220;Not Found&#8221;]
end
end
end
<p>As you can see, all this does is capture requests to /poller and return &#8220;Hello, World!&#8221; (and the request is not for /poller, it&#8217;ll let the Rails router handle it &#8212; that&#8217;s what the 404 return does). It will do that just about as fast as is technically possible in Rack (cue useless metric of how Rails now has the fastest, most meaningless &#8220;hello world&#8221; stat!!).</p>
<p>Note that this is a pretty specialized tool. While you could write an entire Rails application using just metal, it would be a terrible idea in most cases. The vast majority of applications out there will never do what they do so fast that the overhead of the already heavily optimized Rails router and Action Controller execution path will matter one bit (pick up <a href="http://2008.parisonrails.org/torrents/ParisOnRails2008-Michael_Koziarski-Rails_performance.mov.torrent">Michael Koziarski&#8217;s talk on Rails Performance</a> through torrent for more on this).</p>
<p>Also, if you&#8217;re writing a generic filter in the vein of Rack::Cache, Metal is not the right choice either. You should just be creating regular middleware which can be shared across all Rack applications.</p>
<p>But for those few, specialized cases where you just need as much raw speed as possible, Metal can be exactly what the doctor ordered. It allows you to have the best of both worlds in one package. The lowest possible overhead for a Rack application when that matters and the full-featured goodness of Action Controller when it doesn&#8217;t.</p>
<p>We hope you like this. Josh Peek has putting tireless hours into getting Rails on Rack and this is just the latest product of his efforts. Thanks a bunch, Josh!</p>
<p><b>Update:</b> Jesse Newland wrote up a <a href="http://soylentfoo.jnewland.com/articles/2008/12/16/rails-metal-a-micro-framework-with-the-power-of-rails-m">great introduction to Metal</a> as well. It includes benchmarks and even more examples!</p>
<p><b>Update 2:</b> Changed code example to <a href="http://github.com/rails/rails/commit/61a41154f7d50099da371e0d2f22fd25ab9113c2">match latest style</a>.</p>