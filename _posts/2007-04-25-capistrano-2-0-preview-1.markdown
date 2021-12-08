---
layout: post
title: Capistrano 2.0 Preview 1
categories:
- releases
author: jamis
published: true
date: 2007-04-25 04:58:00.000000000 +01:00
---
<p>Capistrano 2.0 Preview 1 is now available for installing and testing:</p>
<pre>gem install -s http://gems.rubyonrails.com capistrano</pre>
<p>(It&#8217;ll show up as version 1.99.0; the 1.99.x series will be used as the preview releases for 2.0)</p>
<p>For those of you late to the party, Capistrano is a utility for executing remote commands in parallel on multiple remote servers. It is ideal for system administration, and for deploying web applications.</p>
<p>Note, though, that this release is not entirely backwards compatible with Capistrano 1.x, so you may need to massage your recipes a little to make them work smoothly under the new version. In order to make the upgrade process as smooth as possible, I&#8217;ve begun compiling a few documents to point out new features, gotchas, and upgrade paths:</p>
<blockquote>
<a href="http://www.capify.org/upgrade">http://www.capify.org/upgrade</a>
</blockquote>
<p>Like Capistrano 2.0, the new <a href="http://www.capify.org">www.capify.org</a> website is still a bit rough in spots, and will see more documentation appearing over the next few weeks. If you have any feedback for either Capistrano 2.0 or the website, please join us on the <a href="http://groups.google.com/group/capistrano">Capistrano mailing list</a> and make your voice heard!</p>