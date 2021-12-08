---
layout: post
title: habtm vs has_many :through
categories:
- documentation
author: marcel
published: true
date: 2006-04-21 13:09:00.000000000 +01:00
---
<p>Of late the ActiveRecord association code has been getting a lot of love. One of the high profile additions are polymorphic associations which turned into one of the big features of the 1.1 release. Amongst all the commotion, some may not have noticed that there is an enhanced way to do many to many associations other than with <code>has_and_belongs_to_many</code>.</p>
<p>For some time people have been skipping out on <code>has_and_belongs_to_many</code> in favor of setting up two <code>has_many</code> associations so that they get the benefits of a full join model and what that brings with it. With 1.1&#8217;s new <code>:through</code> association option, a two way <code>has_many</code> just got even sweeter. So if there are two ways to do a many to many relationship, what are the differences, and which approach should you take?</p>
<p><a href="http://blog.hasmanythrough.com/">Josh Susser</a>  has been <a href="http://blog.hasmanythrough.com/articles/2006/04/10/first-patch">digging</a> <a href="http://blog.hasmanythrough.com/articles/2006/04/17/join-models-not-proxy-collections">deep</a> into the association code lately and has emerged from the thicket with a <a href="http://blog.hasmanythrough.com/articles/2006/04/20/many-to-many-dance-off">point by point comparison of <code>habtm</code> and <code>has_many :through</code></a>, a dance-off if you will, between the two approaches. This would be a good time to <a href="http://blog.hasmanythrough.com/xml/atom10/feed.xml">add him to your <span class="caps">RSS</span></a> reader if you haven&#8217;t already.</p>