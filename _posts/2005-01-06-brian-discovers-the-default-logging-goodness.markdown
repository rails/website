---
layout: post
title: Brian discovers the default logging goodness
categories:
- praise
author: admin
published: true
date: 2005-01-06 11:40:36.000000000 +00:00
---
<p>Brian McCallister started working on a new Rails application and <a href="http://kasparov.skife.org/blog/src/ruby/new-things.html">discovered</a> the goodness that is the default logging setup:</p>
<blockquote>This is sort of what using Rails is mostly like. You stumble on a really nice gem &#8212; the default logging giving you a breakdown of execution times, translating it to requests per second, giving you any sql, execution times on the sql, etc. Oh yeah, nicely color coding and bolding as well. Then you stumble on another gem. It feels like programming in ruby, where things surprise you by being just really well done, and easier than expected.</blockquote>
<p>It is indeed a powerful tool to have a <code>tail</code> running on while developing as you get an early warning system for performance problems and a minds eye into the internals of the system.</p>