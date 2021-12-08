---
layout: post
title: The power of readable metaprogramming
categories:
- praise
author: admin
published: true
date: 2005-03-09 23:49:50.000000000 +00:00
---
<p>Oliver Steele is Chief Software Architect at <a href="http://www.laszlosystems.com/">Laszlo Systems</a> and he&#8217;s <a href="http://osteele.com/archives/2005/03/ruby-and-laszlo">digging into Ruby on Rails</a>:</p>
<blockquote>During my last vacation it took about five lazy vacation days with Ruby on Rails to implement a fairly sophisticated 40-page web application with five models, two metamodels, <span class="caps">CRUD</span>, cookies, image upload, and login. (I&rsquo;ll write more about the application itself, if I find a few free weekends to harden it for public use.) For comparison, it took me about the same amount of time during my previous vacation to write a much simpler ten-page <span class="caps">PHP</span> web application that had only one model. And I already knew a little bit of <span class="caps">PHP</span>, whereas I was learning Ruby and Rails from scratch.</blockquote>
<p>He explains how much of this productivity stems from the fact that &#8220;&#8230;Ruby is one of the rare languages with a readable embedded syntax for metaprogramming&#8221;, which in turn &#8220;&#8230;lets the library user write in a concise domain-specific language that embeds Ruby&#8221;. The unique power that gives us <a href="http://ar.rubyonrails.com/classes/ActiveRecord/Associations/ClassMethods.html">Associations</a> and <a href="http://ar.rubyonrails.com/classes/ActiveRecord/Validations/ClassMethods.html">Validations</a>.</p>
<p>I&#8217;m really glad that Oliver looked into Rails because that has in turn lead me to really dig into Lazlo. It looks pretty darn neat! I&#8217;d definitely love to see someone do a Rails backend with a Lazlo frontend.</p>