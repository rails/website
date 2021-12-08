---
layout: post
title: ! 'Cartographer: Effortless Google Maps in Rails'
categories: []
author: admin
published: true
date: 2005-08-30 10:08:16.000000000 +01:00
---
<p>Courtenay and bousquet are behind <a href="http://rubyforge.org/projects/cartographer/">Cartographer</a> that allows you to integrate Google Maps in your Ruby on Rails application with no effort. A few <span class="caps">API</span> tastes:</p>
<pre><code>&lt;%= gmap(:mapname=&gt;"my_map", :width=&gt;"50", :height=&gt;"120") %&gt;

&lt;%= gmap(:width=&gt;"500", :height=&gt;"500", :type=&gt;:satellite, :point=&gt;[-122.14944, 37.441944]) %&gt;

&lt;%= gmap(:mapname=&gt;"foo", :white_div=&gt;{:background_color=&gt;'black', :height=&gt;'40'}) %&gt;</code></pre>
<p>Pretty nifty stuff! See also <a href="http://greymatter.usc.edu/blog/articles/2005/08/26/gs-part-1-google-maps-in-rails">bousquet&#8217;s announcement</a>.</p>