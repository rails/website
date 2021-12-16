---
layout: post
title: Merb gets merged into Rails 3!
categories: []
author: David
published: true
date: 2008-12-23 19:47:00.000000000 +00:00
---
<p>It&#8217;s christmas, baby, and do we have a present for you. We&#8217;re ending the bickering between Merb and Rails with a this bombshell: Merb is being merged into Rails 3!</p>
<p>We all realized that working together for a common good would be much more productive than duplicating things on each side of the fence. Merb and Rails already share so much in terms of design and sensibility that joining forces seemed like the obvious way to go. All we needed was to sit down for a chat and hash it out, so we did just that.</p>
<p>What this will mean in practice is that the Merb team is putting their efforts into bringing all of the key Merb ideas into Rails 3. Yehuda Katz will outright join <a href="https://rubyonrails.org/core">the Rails core team</a>, Matt Aimonetti will work on a new evangelism team, and Carl Lerche and Daniel Neighman (hassox) will be co-starring the effort to bring all this over. We&#8217;ve immortalized the merge with plaque page at <a href="https://rubyonrails.org/merb">rubyonrails.org/merb</a>.</p>
<p><b>What&#8217;s being brought over?</b><br/>
Some of the key ideas that they&#8217;ll be taking with them from Merb into Rails 3 are:</p>
<ul>
	<li>Rails core: Yes, Rails is a full-stack framework and will remain so, but there&#8217;s no reason we shouldn&#8217;t also make it possible to run with less than the full monty. Rails 3 will make it easy to run just a bare minimum and then allow you to opt in just the stuff you want, if that&#8217;s necessary for your particular situation. Think &#8220;rails myapp &#8212;core&#8221; (and &#8220;rails myapp &#8212;flat&#8221;).</li>
</ul>
<ul>
	<li>Performance optimizations: Merb has a lot of Rails pieces rewritten to be faster. We&#8217;ll be bringing all that good stuff over. We&#8217;ll also bend the architecture in the places where that&#8217;s necessary for a big yield. In short, Rails 3 will get all the performance attention that the Merb guys are known for.</li>
</ul>
<ul>
	<li>Framework agnosticism: Rails will always have a default answer to every question within the stack. If you don&#8217;t care about testing frameworks, you&#8217;ll get test/unit. If you don&#8217;t care about which <span class="caps">ORM</span>, you&#8217;ll get Active Record. But some people do care and want something else. Some people want RSpec for testing, others want to use Sequel or Data Mapper for <span class="caps">ORM</span>, others again prefer Haml for templating, and some might prefer jQuery for Ajax. All these people should feel like Rails is welcoming them with open arms. Yes, we&#8217;ll have a default, but we shouldn&#8217;t have any form of discrimination against alternatives.</li>
</ul>
<ul>
	<li>Rigorous <span class="caps">API</span>: Too many plugins break when Rails is updated because it&#8217;s not clear where they can safely hook into the internals and when they&#8217;re monkeypatching and should expect things to break. The Merb guys committed to a public <span class="caps">API</span> with tests to ensure that it wouldn&#8217;t break. They&#8217;ll bring over that line of thinking and give Rails 3 a tested and documented <span class="caps">API</span> for extensions that won&#8217;t break willy-nilly with upgrades.</li>
</ul>
<p><b>This is not a big bang rewrite</b><br/>
It&#8217;s important to understand, however, that this is not a &#8220;big bang&#8221; rewrite of Rails. We&#8217;re far beyond the time when we could just throw out everything and start over. This is going to be a progressive improvement of Rails that&#8217;ll carefully judge new initiatives on their impact on backwards compatibility as well as their general utility.</p>
<p>I&#8217;m sure there&#8217;ll be some parts of Rails 3 that are incompatible, but we&#8217;ll try to keep them to a minimum and make it really easy to convert a Rails 2.x application to Rails 3. The Merb guys will also be working hard on giving existing Merb users a manageable upgrade path to Rails 3. We&#8217;re working with lots of ideas including allowing existing Merb controllers to be mounted alongside new Rails 3 ones. We&#8217;ll see how it all plays out, but play out it will.</p>
<p>Also, the Merb guys aren&#8217;t just abandoning the existing Merb user base and their applications. They&#8217;ll still be doing bug fixes, security fixes, and work on easing the upgrade path to Rails 3. This will all progress in a nice, orderly fashion.</p>
<p><b>The timeline</b><br/>
Rails 2.3 is just around the corner. We hope to wrap up and release in January. It&#8217;s a blockbuster release packed with goodies to the tilt. But as soon as that&#8217;s done, all eyes will be on Rails 3.</p>
<p>The probably-overly-optimistic goal is to have at least a beta version ready for RailsConf 2009 in Las Vegas. Who knows if we&#8217;ll make it, but we&#8217;ll certainly have made tons of progress on it by then.</p>
<p>So all of these changes are pretty much effective immediately. We&#8217;ve already started the collaboration and we&#8217;ll be rolling out a bunch of public initiatives announcing the concrete elements of the work under the Rails 3 milestone very shortly.</p>
<p><b>No hard feelings, just kumbaja</b><br/>
This is quite a dramatic turn of events. We went from testy relations to coming together in not very long at all. But I&#8217;ve been incredibly positively surprised at how well everyone on both sides have been gelling behind the scenes. The more we talk, the more we realize that we want the same things. And in the few cases were we do care about something different, it&#8217;s usually complimentary.</p>
<p>I really hope that everyone within both communities will deal with this news as gracefully as the key contributors from both camps. Let&#8217;s just wipe the slate clean on anything that has gone before and cherish that we can now move forward in unity instead of as fractions of the same ideas.</p>
<p>Rails 3 is going to kick ass.</p>
<p><i>Also read what <a href="http://yehudakatz.com/2008/12/23/rails-and-merb-merge">Yehuda wrote about this</a> and <a href="http://splendificent.com/2008/12/the-merb-rails-merger-announcement-an-inside-opinion/">Carl Lerche</a> and <a href="http://brainspl.at/articles/2008/12/23/merb-is-rails">Ezra</a> and <a href="http://merbist.com/2008/12/23/rails-and-merb-merge/">Matt</a></i>.</p>