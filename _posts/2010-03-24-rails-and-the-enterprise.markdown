---
layout: post
title: Rails and the Enterprise
categories:
- activism
author: Matt Aimonetti
published: true
date: 2010-03-24 18:00:00.000000000 +00:00
---
<p>If you have been in the Rails community for a little while, you have more than likely noticed the love/hate relationship that is entertained by the community vis-à-vis the Enterprise.
Some people hate the enterprise and publicly tell it to go f*ck itself (<a title="Obie Fernandez - Fuck the Enterprise" href="http://blip.tv/file/2733212" target="_blank">49:39</a>), on the other hand, these same people are also <a href="http://blog.obiefernandez.com/content/2008/03/big-name-compan.html" target="_blank">proud to mention</a> that some major players in the industry use Ruby and Rails.</p>
<p>The truth is that even though Ruby and Rails could still be more Enterprise ready, it is already a great combo that <strong>big corporations can start using today</strong>, and lots of then already do! Let's look at the state of Rails and the Enterprise.</p>


<h2>So where are we at?</h2>
<ul>
	<li>First things first, Rails was not designed for the enterprise or for the enterprise's needs. It was extracted from a successful startup project and has grown with the contribution of people using Rails daily. But Rails is also based on Ruby which became very popular and started to be used in different places, including NASA, for instance.</li>
</ul>
<ul>
	<li><a href="http://37signals.com/" target="_blank">37signals</a> still does NOT need "Enterprise features" and therefore don't expect any 37signals engineers to write an Oracle Adapter or a SOAP layer for ActiveResource and push for their adoption.</li>
</ul>
<ul>
	<li>Rails is far more than a framework used by 37signals. It is an Open Source project with code being contributed daily by people on other projects. Most of the code does not directly benefit 37signals.</li>
</ul>
<ul>
	<li> The Enterprise is evolving: economic crisis, a new generation of developers, new management, insane deadlines. Ruby and Rails have quickly become very attractive for the Enterprise and having big companies acting as startups is often something a lot of managers dream of. As a matter of fact, here is a quote from Sony Computer Entertainment America's President &amp; CEO, Jack Tretton: "Be like a multi-billion dollar company on the outside, and act like a startup on the inside". This change has taken a while because the Enterprise is a big mammoth (or insert another of your favorite gigantic, slow-starting animal here), but it's happening. </li>
</ul>
<ul>
	<li> Communication with/in big companies is not as straight forward as when dealing with startups who need/thrive for the outside attention and who don't have all the red tape of a PR department, etc. Here is a simple example: <a href="http://merbist.com/2010/02/02/how-and-why-i-joined-the-suit-people/">I work</a> for <a href="http://scea.com" target="_blank">Sony Playstation</a>. My job description mentioned <a href="http://code.google.com/p/redis/" target="_blank">Redis</a>, <a href="http://www.mongodb.org/display/DOCS/Home" target="_blank">MongoDB</a>, <a href="http://wiki.github.com/eventmachine/eventmachine/" target="_blank">EventMachine</a> and many other technologies I did not know Sony was using in production. I did not realize that my default production stack would be built on Ruby 1.9. Communicating when you're a part of a big company is more challenging than when you are a team of 5 engineers working on a cool project, and therefore a lot of people don't know what technologies are being used by Company X or Company Y.
<br/>
  </li>
</ul>
<ul>
	<li>Rails is used by lots of big companies. It might not be obvious and you might have to look at the job offers but people like AT&amp;T, Sony and many others are always looking for talented Ruby developers. And, even though Java and .NET are still ruling the Enterprise kingdom, dynamic languages are slowly but surely catching up. Rubyists are climbing the social ladder and are now in positions to push the language they love. <br/></li>
</ul>
<h2>Understanding the Enterprise's needs</h2>
It's kind of hard to define "the Enterprise's needs", however I can testify that the needs and requirements of a so called "Enterprise app" are slightly different than those encountered when you work on a startup app.

What the Enterprise needs/wants:
<ul>
	<li> reliability</li>
	<li> support</li>
	<li> performance</li>
	<li> advantage over the competition</li>
	<li> integration and transition path</li>
</ul>

<h2>Reliability</h2>

<p>I think that it was proven many many times that Rails scales and can be very reliable as long as you know what you are doing. We are not talking anymore about a buzz framework that just got realized and that cool kids play with but rather, a stable platform used by some of the most popular web applications out there.</p>

<h2>Support</h2>

<p>This point is something the Rails community can be proud of. We have lots of forums, blogs, books, local meetings, conferences... Yes, Rails is OpenSource and you can't buy yearly support from the core team but you will find all the help you need out there. (If you can't, feel free to contact me and I'll direct you to people who can help, and if you are new to Rails, take a look at <a href="http://railsbridge.org/" target="_blank">http://railsbridge.org/</a>)</p>

<h2>Performance</h2>

<p>Based on my own experience, the level of performance we have using Ruby and Rails is more than enough for the Enterprise world. This is especially true with Ruby 1.9 greatly improving performance and Rails3 optimizations.
If you really need part of your code to run as fast as C code, writing a C extension for Ruby is actually quite easy and will solve your speed issues.</p>

<h2>Advantage over the competition</h2>

<p>Rails comes with certain ways to do things, conventions that will get you up and running in much less time.
Ruby as a language is natural, intuitive and easy to maintain. By choosing the right tools for your project, you will definitely be able to get more done in less time and increase your business value faster. Let's not forget the strong value of testing in the community that will push your team to write tested code and more than likely improve the overall code quality of your products.</p>

<h2>Integration and transition path</h2>

<p>This is probably the part that is the most challenging when you live in the Enterprise and look into using Ruby &amp; Rails.
I was recently talking to someone from Google who used to do a lot of Ruby before joining the Mountain View-based company. We were talking about how he loves Ruby but had such a hard time integrating with existing Enterprise solutions. He mentioned how he got frustrated by the lack of great XML tools, bad/complicated SOAP libraries and a few others I can't remember. The truth is that when my friend was using Ruby this all was true. REXML and soap4r are useful but might not perform that well. Luckily as the community has grown, new tools have come up and today <a href="http://nokogiri.org/" target="_blank">Nokogiri</a> (developed and maintained by AT&amp;T engineer's <a href="http://tenderlovemaking.com/" target="_blank">Aaron Patterson</a>) can easily be used instead of REXML and many libraries are known to be better than soap4r such as <a href="http://github.com/rubiii/savon" target="_blank">savon</a>, <a href="http://github.com/unwire/handsoap/" target="_blank">handsoap</a> and others.
The other good news is that major IT companies such as <a href="http://macruby.org" target="_blank">Apple</a>, <a href="http://ironruby.net/" target="_blank">Microsoft</a> and <a href="http://jruby.org/" target="_blank">Sun(RIP)</a> have adopted Ruby and you can now write your code in Ruby and use native libraries from other languages such as <a href="http://jruby.org/" target="_blank">Java</a>, <a href="http://ironruby.net/" target="_blank">.NET</a> or <a href="http://macruby.org" target="_blank">Objective-C</a>.
The transition path can be done smoothly without having to commit to a total rewrite.</p>

<p>Database-wise, Oracle is still a viable option for Rails developers thanks to the <a href="http://github.com/rsim/oracle-enhanced" target="_blank">Oracle ActiveRecord adapter</a> (by R.Simanovskis). Note that your DBA might curse you for not doing optimized queries using bind variables and all the Oracle Magic spells, in which case you can use <a href="http://sequel.rubyforge.org/" target="_blank">Sequel</a>, a great ORM supporting Oracle, and some of its unique features.</p>

<p>Deployment-wise, you can deploy on IIS, Tomcat, Glassfish, Apache, Nginx, or almost anything mainstream you are already using. Using <a title="Phusion Passenger" href="http://www.modrails.com/" target="_blank">Passenger</a>, deployment is as easy as deploying a PHP app <em>and</em> you also get a series of great tools such as <a href="http://www.capify.org/" target="_blank">Capistrano</a>, <a href="http://rubyhitsquad.com/Vlad_the_Deployer.html" target="_blank">Vlad</a> etc...</p>

<p>So basically, thanks to passionate Rubyists working 'for the man' such as Aaron Patterson, Raimonds Simanovskis and others, using Ruby in the Enterprise is much much easier. Ruby and Rails were not initially designed with the Enterprise in mind but with time, the integration has become smoother and both parties can now enjoy reciprocal benefits.</p>