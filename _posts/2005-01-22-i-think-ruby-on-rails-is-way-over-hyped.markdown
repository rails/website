---
layout: post
title: ! '"I think Ruby on Rails is way over hyped"'
categories:
- sightings
author: admin
published: true
date: 2005-01-22 00:20:16.000000000 +00:00
---
<p><a href="http://www.lightbody.net/~plightbo/">Patrick Lightbody</a> is on the steering committee of the Java web-framework <a href="http://www.opensymphony.com/webwork/">WebWork</a> and <a href="http://www.lightbody.net/~plightbo/archives/000144.html">not at all happy</a> about all the attention Ruby on Rails is gaining. Apparently, it&#8217;s all terribly undeserving as Rails surely &#8220;doesn&#8217;t scale&#8221; to applications with &#8220;thousands of concurrent users and/or hundreds of thousands of gigabytes&#8221;, right?</p>
<p>Of course, Patrick doesn&#8217;t bother to back up his charge besides asserting that &#8220;anyone&#8230; knows that a <span class="caps">CRUD</span> framework just doesn&#8217;t cut it&#8221;. Interesting. Rails follows a similar approach to scaling as do Yahoo and LiveJournal. Share Nothing. Push concurrency into the database and the memcache. I hear that approach is working rather well on LJ&#8217;s 100 machine park handling 5+ million dynamic requests per day.</p>
<p>But why bother addressing the specifics when you can just assert the somewhat cryptic &#8220;Mapping web UI directly to the DB never scales&#8221;. What does this mean exactly? Does Patrick think that the only UI you can do in Rails is a scaffolded one? Oy, talk about forming ill-informed opinions.</p>
<p>If any of these vague, hand-waving assertions should have failed to convince you, then of course, we can always rely on our good friend complexity!</p>
<blockquote><i>Form processing, payroll, etc probably work very well with RoR. But trying to implement Spoke using RoR would be impossible &mdash; the schema is just too complex.</i></blockquote>
<p>I&#8217;m sure it&#8217;s too complex, Patrick. Can&#8217;t beat an expert at his own game. But since you&#8217;re interested in learning more about marketing your open source wares, you might start by dropping the <span class="caps">FUD</span> tactics. They leave such nasty stains of ignorance and bitterness.</p>
<p>Brian McCallister offers a <a href="http://kasparov.skife.org/blog/src/fear-driven-development.html">similar rejection</a> of Patrick&#8217;s fear mongering:</p>
<blockquote><i>It is scary (<span class="caps">FEAR</span> <span class="caps">FEAR</span>) to see opinions formed, and backed with vitriol, by fear that something different than what they are doing works better. Something you don&#8217;t know that approaches the same problems as something you do know does not make the first thing bad. It does not justify lashing out at it saying &#8220;it is just [foo] and sucks so bad compared to [bar] and can never [scale|perform|manage|eat] enough to be used for [serious|difficult|real] things.&#8221; Possibly this is true, but reacting that way out of fear certainly does not make it so.</i></blockquote>
<p>Now back to our mega-scala-enterprisy-serious-real-complex-important work. Nothing to see here, move along.</p>