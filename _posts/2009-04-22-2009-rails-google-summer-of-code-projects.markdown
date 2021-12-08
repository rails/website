---
layout: post
title: 2009 Rails Google Summer of Code Projects
categories:
- activism
author: Mike Gunderloy
published: true
date: 2009-04-22 14:01:00.000000000 +01:00
---
<p>The <a href="http://socghop.appspot.com/">Google Summer of Code</a> program has announced this year&#8217;s funding winners, and Rails has four student slots. Here&#8217;s what our students will be working on this summer:</p>
<p><a href="http://joshpeek.com/">Joshua Peek</a> will be refactoring some of the Rails internals, with the goal of finishing the work on Active Model. The idea behind this particular Rails component is to extract some of the commonalities from Active Record and Active Resource, which in turn will make it easier to maintain the higher-level components and make the more consistent.</p>
<p><a href="http://copypastel.com/">Nelson Crespo</a> is planning on adding some Dtrace probes into a Rack module. These probes should make it possible to see what&#8217;s going on in a Rails application (or any other Rack-based application) with much finer detail than can be easily retrieved now. When the probes are ready, he&#8217;ll be working up some visualizations.</p>
<p><a href="http://josevalim.blogspot.com/">Jose Valim</a> is tackling a rewrite of the Rails generator code. Right now, the generators are tightly-coupled to particular architectural choices; the goal is to make it possible to select, for example, a testing library, an <span class="caps">ORM</span>, and a Javascript library when you choose to generate a scaffold, and have the generated code use your preferred pieces.</p>
<p><a href="http://www.miloops.com/">Emilio Tagua</a> will be working on Active Relation. This is another refactoring of the ActiveRecord code, covering the query generation capabilities. With Active Relation as a separate component, Rails will be better positioned to move towards <span class="caps">ORM</span> agnosticism.</p>
<p>We&#8217;d like to thank all of the students and mentors who participated in the Summer of Code selection process &#8211; it was tough to get down to four projects, considering all the great proposals we had. In particular, we had six runners-up whose proposals were excellent: Carlos Kirkconnell, Florian Gross, Hector Gomez, Ian Ownbey, Luciano Panaro, and Daniel Luz. We&#8217;re looking forward to seeing what all of our students bring to Rails this summer, and hope not to lose touch with others who are also excited about the prospects for Rails 3.0.</p>