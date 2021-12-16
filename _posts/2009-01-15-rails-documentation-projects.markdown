---
layout: post
title: Rails Documentation Projects
categories:
- activism
author: Mike Gunderloy
published: true
date: 2009-01-15 09:58:00.000000000 +00:00
---
<p><img src="/assets/2009/1/15/book.png" align="left" style="padding:5px;" /> With the recent revitalization of the <a href="http://groups.google.com/group/rubyonrails-wiki">Rails Wiki</a> project, we&#8217;re seeing people ask how the various pieces of Rails documentation fit together. I thought it might be useful to lay out how the Rails Activists see everything fitting together as we move forward.</p>
<p>Rails is a large and mature framework, with a lot of functionality &#8211; and with the Merb merger, there will be even more to learn in the future. As such, it presents challenges for developers at all levels trying to understand how to use Rails effectively. There are many resources to help with the learning process, including commercial books and magazines, screencasts and podcasts, tutorials, blog entries, and training courses. But there is also a series of official written documentation projects.</p>
<p>There&#8217;s no such thing as one-size-fits-all documentation. Different developers bring different skill sets, backgrounds, and levels of professional maturity to learning Rails. There are at least four levels of official documentation, overlapping but serving different needs:</p>
<ul>
	<li>Inline documentation, with comments within the code itself (that you can see by running <code>rake doc:rails</code> within any Rails project).</li>
	<li><a href="http://guides.rubyonrails.org/">Rails Guides</a></li>
	<li>Rails Book (a new project for Rails 3.0)</li>
	<li>Rails wiki</li>
</ul>
<p>Although at first glance there appears to be substantial overlap, our feeling is that the each of these projects occupies a distinct (and valuable) niche.</p>
<h2>RDoc</h2>
<ul>
	<li>Provides immediate help for syntax questions</li>
	<li>Maintained by the actual core developers and generally up-to-date</li>
</ul>
<h2>Rails Guides:</h2>
<ul>
	<li>Provides focused &#8220;how to&#8221; help for particular problem domains</li>
	<li>Target the mid-level developer, possibly with Rails experience</li>
	<li>Have a large amount of existing high-quality material</li>
	<li>Are already being continuously revised to track changes in edge Rails</li>
	<li>Can include version-specific tutorial code samples</li>
	<li>Can be delivered as a part of core Rails to provide &#8220;guidance at your fingertips&#8221; for new developers</li>
</ul>
<h2>Rails Book:</h2>
<ul>
	<li>Provides high-level architectural guidance and overview of how the pieces fit together</li>
	<li>Digs into the philosophy of the &#8220;Rails Ways&#8221;, so readers can understand why the framework works the way it does</li>
	<li>Targets the developer new to Rails or those wanting to go from the &#8220;trees&#8221; to the &#8220;forest&#8221; view</li>
	<li>Offers help in conceptualizing Rails and choosing between alternative modules (ORMs, routing DSLs, etc.) in the Rails 3 timeframe</li>
	<li>Can draw on the Merb experience in simultaneous translation and pulling in contributions from many writers</li>
	<li>Largely version independent</li>
	<li>Gives a structured path through end-to-end documentation in a way that standalone Guides do not</li>
</ul>
<h2>Rails Wiki</h2>
<ul>
	<li>Community-driven documentation that can respond rapidly to new software and new questions</li>
	<li>A good repository to links to external information</li>
	<li>Potentially a showcase for Rails itself in the underlying software</li>
	<li>A place to put the accumulated community knowledge, even the pieces that are not often needed</li>
</ul>
<p>It&#8217;s important to note that we don&#8217;t see these four projects as entirely separate efforts that have no interaction with one another. In particular, it seems likely that the Book will link to the Guides for those seeking additional detail, while the Guides will link to the Book for those seeking additional high-level guidance. We also anticipate that the wiki will point readers to both Guides and Book (as well as to other sources of information).</p>
<p>So, what can <em>you</em> do to get involved? If you&#8217;re a writer, translator, or editor, any of these documentation projects would love to have your help:</p>
<ul>
	<li>To contribute to the RDoc, write a Rails patch with good comments or check out the <a href="https://rubyonrails.org/2008/5/2/help-improve-rails-documentation-on-git-branch">docrails</a> project.</li>
	<li>To help the Rails Guides, get in touch with <a href="mailto:pratiknaik@gmail.com">Pratik Naik</a> or <a href="mailto:mikeg1@larkfarm.com">Mike Gunderloy</a>, or drop by the #docrails channel on <span class="caps">IRC</span> freenode.</li>
	<li>To get involved with the Rails Book, contact <a href="mailto:mattaimonetti@gmail.com">Matt Aimonetti</a>.</li>
	<li>To add to the Rails Wiki, join the <a href="http://groups.google.com/group/rubyonrails-wiki">rubyonrails-wiki</a> group.</li>
</ul>