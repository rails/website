---
layout: post
title: How to get a patch into Rails
categories:
- edge
author: David
published: true
date: 2007-09-15 21:46:00.000000000 +01:00
---
<p>For a while, the patch queue was getting badly out of hand. The flood of new entries was simply too great to be reasonably managed by a small group of people. Too much got stuff got stale and their creators got disillusioned, understandably so. But for a while now, we&#8217;ve been running with a new policy on patches, which seems to be working a lot better for those who&#8217;ve been following it.</p>
<p>But I&#8217;m sensing that a fair number of people are not aware of those changes in policy, so I thought best to bring them up again here.</p>
<p><strong>Step 1: Raise the barriers of quality</strong></p>
<p>Part of the reason that the original patch queue got out of hand was due to the large number of patches coming in that lacked essential qualities of a good patch. They were either missing a good rationale (why am I doing this? what&#8217;s the benefits?), good test cases, or didn&#8217;t update the relevant documentation. To apply such a patch meant that this work had to be shouldered by someone else, usually the guy who wanted to apply the patch.</p>
<p>Now the barriers of quality are more apparent. Your patch will simply not be considered for inclusion before it has all those elements. It&#8217;ll live with the &#8220;unverified&#8221; keyword until you or someone else that cares especially deeply about the patch (like someone else having the same problem) gets the quality up to par. Then the patch moves on to step 2.</p>
<p><strong>Step 2: Get the community engaged to review your patch</strong></p>
<p>The last step before your patch is ready to be put in the queue for inclusion is to get community support round up. We now require that three different people must review your patch, apply it, run the tests, read your documentation, and like what it does and how it&#8217;s implemented. When they do, they&#8217;ll make a comment on the ticket with a &#8220;+1&#8221;.</p>
<p>Get three such +1s and you can tag your patch with the &#8220;verified&#8221; keyword. That&#8217;ll make the patch appear in <a href="http://dev.rubyonrails.org/report/12">Report #12: Verified Patches</a>, which is a bell telling the core team that you patch is baked and ready to be included (barring a final review).</p>
<p>The core team is trying to keep report #12 empty at all times. There shouldn&#8217;t be a big lag time between getting to &#8220;verified&#8221; and getting a final review of your patch, which will either send it back to unverified (because the implementation is deemed in need of work or because there&#8217;s some fundemental disagreement over whether or how this patch goes about its business) or it&#8217;ll be applied and available in edge.</p>
<p>So if you have a patch that you still care about sitting in the queue, dust it off, and put it through these two simple steps and you&#8217;ll be back on the road to glory. There are still no guarantees that your patch will receive immediate attention, but so far we&#8217;ve managed to keep report #12 moving very nicely. It&#8217;s all empty as of today!</p>
<p>The front page of http://dev.rubyonrails.org has been updated to reflect this policy.</p>