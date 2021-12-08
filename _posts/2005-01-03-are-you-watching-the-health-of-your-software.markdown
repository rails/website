---
layout: post
title: Are you watching the health of your software?
categories:
- sightings
author: admin
published: true
date: 2005-01-03 18:20:48.000000000 +00:00
---
<p>Kent Beck has probably been more responsible for the uptake of automated testing amongst the general developer population than any other figure over the last five years. One of the reasons is that he&#8217;s such a great speaker and writer that you can&#8217;t help but paying attention. Another, of course, is that automated testing is naturally a Good Thing to do, so it shouldn&#8217;t be such a hard sell.</p>
<p>Anyway, as the second edition of his <a href="http://www.amazon.com/exec/obidos/tg/detail/-/0321278658/102-1921480-9684140?v=glance">Extreme Programming Explained</a> is hitting the street, Kent has broadened his focus from just testing to the concept of <i>software health</i>. It&#8217;s not just about passing the tests today, it&#8217;s about being in a position that allows you to pass the test tomorrow too.</p>
<p>He talks at length about this and other great metaphors in an <a href="http://www.itconversations.com/">IT Conversations</a> recording called <a href="http://www.itconversations.com/shows/detail301.html">Developer Testing</a>. It&#8217;s about one hour of Kent&#8217;s thoughts. For free. So what are you waiting for?</p>
<p>When you come back, all energized with a strong desire to improve the health of your software, do check out Steve Kellock&#8217;s <a href="http://manuals.rubyonrails.com/read/book/5">A Guide to Testing the Rails</a>. Rails is uniquely supportive of getting your test game on with the least amount of configuration or even learning. For all the controllers and models generated, you already have test suites waiting for test cases to enter. And running <code>rake</code> will execute the whole lot of them.</p>
<p>If you do need a bit more assistance in exactly how you should do testing, and especially unit testing, I can heartily recommend the <a href="http://www.pragmaticprogrammer.com/starter_kit/ut/index.html">Pragmatic Unit Testing</a> book by Andy Hunt and Dave Thomas. It&#8217;s available in both a Java and C# flavor, but don&#8217;t let that scare you off, pretty much all of the meaningful lessons apply directly to any environment. Combined with Steve&#8217;s guide, you should be all set.</p>
<p>As a rule of thumb, you want your <code>rake stats</code> to report that you have a 1:1 ration between code and tests.</p>