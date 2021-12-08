---
layout: post
title: ! 'Bla-bla List: Cloning a Rails app in RIFE'
categories:
- sightings
author: admin
published: true
date: 2005-03-19 14:43:05.000000000 +00:00
---
<p>Geert Bevin gets an A+ for trying, no doubt about that. In an attempt to hold the fort for Java as the troops are deserting left and right, Geert went away for a few months to <a href="http://rifers.org/blogs/gbevin/2005/3/18/blabla_tada_in_java">contemplate and implement Bla-bla List</a>. A more or less functional clone of <a href="http://www.tadalist.com">Ta-da List</a> done in Laszlo and <span class="caps">RIFE</span> (a Java web framework).</p>
<p>With the introduction of Bla-bla, Geert was even so kind as to point out a few security and usability issues with Ta-da, which was promptly resolved. Even kinder, he has put up a <a href="https://svn.rifers.org/blablalist/trunk">Subversion repository</a> with the full source.</p>
<p>I gave it a glance and decided to share a few snippets from Ta-da (which unlike Bla-bla is not open source) to show the difference in how the two implementations deal with the core action: checking off todo items.</p>
<p><a href="http://www.rubyonrails.com/media/images/blahblah_vs_tada.png"><img src="http://www.rubyonrails.com/media/images/blahblah_vs_tada.png" width="550" border="1" /></a></p>
<p>While no comparison between two different implementations is going to be perfect, this is as close as it gets. What surprised me the most was the lack of a real domain model. Apparently, the model in Blabla is just a bunch of data containers while the logic is in a service/controller layer. Ouch. I sure don&#8217;t hope that procedural excuse for an object-oriented system is par for course with <span class="caps">RIFE</span>.</p>
<p>Regardless, this was surely good fun. Geert put a lot of effort into it and a pat on the back for that. Whether this implementation is going to lure any of the deserters back into the camp is more doubtful, though.</p>
<p><i>P.S.: Geert&#8217;s posting includes a doomsday warning that data will be lost on Ta-da if your session expires. That was true for about half an hour, but has since been resolved.</i></p>