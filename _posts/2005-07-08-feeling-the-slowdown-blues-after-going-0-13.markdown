---
layout: post
title: Feeling the slowdown blues after going 0.13?
categories:
- general
author: admin
published: true
date: 2005-07-08 18:57:21.000000000 +01:00
---
<p>It&#8217;s somewhat ironic that we heralded Rails 0.13 as being a great move forward for the performance of Rails and then half the threads on the mailing list is about &#8220;Rails is sLOOOW!&#8221;. We&#8217;ve found the problems, though.</p>
<p>The first was with the MySQL/Ruby bindings, which called GC.start whenever MySQL#free was called. And we just put in MySQL#free in 0.13 to improve things after each select of rows. This caused the garbage collector to run every time you selected something. Doh!</p>
<p>The C-bindings didn&#8217;t have this problem, so it wasn&#8217;t discovered by the core team right away, and that was posed as the solution on the mailing list. Unfortunately, it&#8217;s not necessarily trivial to compile native bindings on all platforms (notably Windows), so having fast Ruby bindings was indeed important. They&#8217;re fast again, but if you upgraded to the C-bindings you can be happy that you&#8217;re even faster.</p>
<p>The second problem was that we plugged a big memory leak in development mode, but doing so caused a total of 8 runs through the so-called ObjectSpace after each action (basically iterating over all objects in the interpreter 8 times, eeks!). On big applications this could take a while. On Basecamp it took 2 seconds. After the fix went in where we just traverse the ObjectSpace once, it&#8217;s down to a comfortable 0.2 seconds (which is about 0.17 faster than it even was before the memory leak fix!).</p>
<p>Thus, Rails 0.13.1 is near forth coming. As in this weekend. If you cannot wait, and we certainly won&#8217;t blame you, there are new beta gems that consist purely of bug fixes. Upgrade with <code>gem install rails --source http://gems.rubyonrails.org --include-dependencies</code>.</p>