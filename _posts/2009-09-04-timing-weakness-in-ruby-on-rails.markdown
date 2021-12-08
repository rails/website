---
layout: post
title: Timing Weakness in Ruby on Rails
categories: []
author: michael
published: true
date: 2009-09-04 05:47:00.000000000 +01:00
---
<p>There is a weakness in the code Ruby on Rails uses to verify message<br />
digests in the cookie store.  Because it uses a non-constant time algorithm to<br />
verify the signatures an attacker may be able to determine when a forged<br />
signature is partially correct.  By repeating this process they may be able to successfully forge a digest.</p>
<pre>
Versions Affected:  2.1.0 and *all* subsequent versions.
Fixed Versions:     2.3.4, 2.2.3
</pre>
<h4>Impact</h4>
<p>Due to issues like network latency, non-deterministic GC runs and other<br />
issues it is unlikely that this attack could be exploited in the wild<br />
within a reasonable timeframe.  However users should still upgrade as<br />
soon as possible to remove the weakness.</p>
<h4>Releases</h4>
<p>The 2.3.4 and 2.2.3 releases will be made available shortly and will contain fixes for this issue amongst others.</p>
<h4>Patches</h4>
<p>In order to provide the fixes for users who are running unsupported<br />
releases, or are unable to upgrade at present we have provided patches<br />
against all affected stable release branches.</p>
<p>The patches are in a format suitable for git-am and consist a single<br />
changeset which implements</p>
<ul>
	<li><a href="/assets/2009/9/4/2-2-timing-weakness.patch">2-2-timing-weakness.patch &#8211; Patch for 2.2 series</a></li>
	<li><a href="/assets/2009/9/4/2-3-timing-weakness.patch">2-3-timing-weakness.patch &#8211; Patch for 2.3 series</a></li>
</ul>
<h4>Credits</h4>
<p>Thanks to Coda Hale for reporting the bug to us, and helping us with the fixes.</p>