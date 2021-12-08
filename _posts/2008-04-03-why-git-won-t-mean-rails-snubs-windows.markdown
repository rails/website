---
layout: post
title: Why Git won't mean Rails snubs Windows
categories: []
author: David
published: true
date: 2008-04-03 23:07:00.000000000 +01:00
---
<p>There seem to be some confusion over what the core development of Rails on Git will mean to Windows users. The simple answer is: Absolutely nothing. But let me give you a slightly more involved answer:</p>
<ul>
	<li>rake rails:freeze:edge will still work. We&#8217;ll make it use either zip or tar.gz files. It&#8217;ll actually be even better as it won&#8217;t even require a <span class="caps">SCM</span> to work.</li>
	<li>Tickets will still accept regular patches that you can create with any diff tool.</li>
</ul>
<p>So this will mean no difference to users of Rails and it&#8217;ll mean no difference to developers of Rails. What it will mean is that people who are interested in using Git (which again does come in a variety of flavors for Windows despite not being as well-supported as on nix) will get some value-added features in form of easier branching and the other Git goodies.</p>
<p>If you&#8217;re freaking out, calm down. Rails and the developers behind it have snubbed Windows far, far worse in the past :). The original release of the framework didn&#8217;t even run on Windows. This move to Git is not a snub.</p>