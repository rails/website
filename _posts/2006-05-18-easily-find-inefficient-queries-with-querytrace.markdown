---
layout: post
title: Easily find inefficient queries with QueryTrace
categories:
- sightings
- releases
author: marcel
published: true
date: 2006-05-18 02:14:00.000000000 +01:00
---
<p><a href="http://blog.talbott.ws/">Nathaniel Talbott</a> of <a href="http://stdlib.rubyonrails.org/libdoc/test/unit/rdoc/classes/Test/Unit.html">test/unit</a> fame has just released a new plugin he calls <a href="http://blog.talbott.ws/articles/2006/05/17/querytrace-my-first-official-rails-plugin">QueryTrace</a>. I&#8217;ll let him explain what it does:<br />
<blockquote><br />
It’s nice that ActiveRecord logs the queries that are performed when your actions are executed, since it makes it easy to see when you have serious inefficiencies in your application. The next question, though, is always, “OK, so where are those being run from?</p>