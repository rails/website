---
layout: post
title: Rails premieres on GitHub
categories:
- edge
author: David
published: true
date: 2008-04-11 13:45:00.000000000 +01:00
---
<p><a href="http://github.com">GitHub</a> has now officially launched and Rails is right there at the premiere. The Rails repository now lives at <a href="http://github.com/rails/rails">rails/rails</a> and you can check it out with:</p>
git clone git://github.com/rails/rails.git
<p>If you don&#8217;t have git, or don&#8217;t enjoy running it on your platform, you need not fear. We&#8217;ve set up an automated task to produce a zip file of Rails Edge that&#8217;ll be kept up to date all the time: <a href="http://dev.rubyonrails.org/archives/rails_edge.zip">http://dev.rubyonrails.org/archives/rails_edge.zip</a>. This is also what we&#8217;ve made the <a href="http://github.com/rails/rails/commit/4b17082107aced980fc4b511028ee763247bc5ab">new rake rails:freeze:edge</a> use.</p>
<p>This also means that development on the Subversion repository has stopped and will no longer be kept up to date. We&#8217;ll keep the Subversion repository around for some time for people to transition off svn:externals, though. But if you want the latest edge, you&#8217;ll have to use either git or the new zip files.</p>
<p>We&#8217;ll also soon go live with our new ticket management system, which will be running on a new version of <a href="http://lighthouseapp.com/">Lighthouse</a>. When that happens, the Trac installation will follow the Subversion repository into legacy. We&#8217;ll still keep it around so we can work through all the patches and tickets that are there, but everything new will happen on the Lighthouse setup.</p>
<p>We hope you&#8217;ll enjoy this upgrade to the Rails collaboration infrastructure. We&#8217;re really looking forward to the onslaught of marvelous patches that the Git lords have promised us will flow from the mountain now.</p>