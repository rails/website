---
layout: post
title: ! 'Road Map: The rails leading to 1.0'
categories:
- horizon
author: admin
published: true
date: 2005-01-06 20:56:33.000000000 +00:00
---
<p>Rails is already an incredibly capable environment, but we&#8217;re still not quite ready to slap on the 1.0 sticker according to my own standards for that label. So what&#8217;s missing? Here&#8217;s a list of the major achievements that I want to see happen before we go to the big one-o:</p>
<ul>
	<li><strong>Directions:</strong> While its fully possible to do intricate custom <span class="caps">URL</span> layouts, its not as easy as it could be. The combination of mod_rewrite going in and the hoops you need to jump going out ensures that most people just stick with the defaults. Directions is the path that&#8217;ll rectify that by pulling <span class="caps">URL</span> rewriting into Rails, so WEBrick and Apache will share the same format and it&#8217;ll be possible to handle both in and out in a coherent fashion. Nicholas Seckar is leading a development effort guided by a design from Dave Thomas.</li>
</ul>
<ul>
	<li><strong>Packaging:</strong> Instiki has had great success with the OS X native .app format. We want to enable all Rails applications to have push-button package outputs to .app, .exe, and one-file scripts for the rest of &#8216;nix. The rise of SQLite3 will make this even easier (thanks to Jeremy Kemper for the adapter and Jamis Buck for the bindings) to have self-contained applications. Marcel Molina is leading the development on the one-file scripts that&#8217;ll serve as the foundation for the native compilations.</li>
</ul>
<ul>
	<li><strong>Web Service Dispatcher:</strong> <span class="caps">XML</span>-<span class="caps">RPC</span> and <span class="caps">SOAP</span> could easily be supported by the same controllers and models as the rest of the application if the calls were translated into controller calls. That&#8217;s what the new WebServiceDispatchers will do.</li>
</ul>
<ul>
	<li><strong>Caching &amp; Performance:</strong> One of the easiest ways to deal with performance is to start caching, so that&#8217;s what we&#8217;ll do. There&#8217;s a lot of different schemes to pursue and that&#8217;s exactly what we&#8217;ll do. From full-page caching that sidesteps Rails to per-request model caching to integration with MemCached. Lots of opportunities to take what&#8217;s already there and make it much faster with a bit of sprinkled caching. Getting a good benchmarking suite together is part of that. Florian Weber has promised us the later since 0.7, so he expect a delivery any day now :)</li>
</ul>
<ul>
	<li><strong>Documentation:</strong> I really do need to fulfill my obligation to renew the introduction video and accompany it with more. On top of that, we&#8217;ll need to start the long rumored Rails User Manual. We&#8217;re already off to a fantastic start, though, with great <span class="caps">API</span> documentation and quite a few guides and tutorials. The last push will round off the polished feel a lot, though.</li>
</ul>
<p>Five major areas of improvement. I hope we&#8217;re able to reach all of these goals by mid February or early March. But there&#8217;s no inherent pressure. We&#8217;ll continue to release updates at the current staggering rate and when its ready to ring the bell of 1.0, we&#8217;ll ring the bell.</p>