---
layout: post
title: Rails is moving from SVN to Git
categories:
- edge
author: David
published: true
date: 2008-04-02 21:39:00.000000000 +01:00
---
<p>We&#8217;ve been preparing for Rails to move the official source repository from Subversion to <a href="http://git.or.cz/">Git</a> for some time now and it seems that it&#8217;ll happen over the next week or so. The premiere will happen alongside the official launch of <a href="http://github.com/">Github</a>.</p>
<p>The move will also mean that we&#8217;re going to be switching ticket tracking to <a href="http://www.lighthouseapp.com">Lighthouse</a>. So now both our repository and ticket tracking will be powered by Rails applications, which is a nice bonus treat.</p>
<p>When the move happens, we&#8217;ll freeze the existing Subversion repository and the Trac installation. Both will live on for a long time to come, but will be entirely deprecated. This means that your existing svn:externals will not break, but if you want the latest edge, you&#8217;ll have to get it from the new git repository.</p>
<p>So now is a great time to learn more about Git in anticipation of this move. I recommend starting with the <a href="http://git.or.cz/course/svn.html">Git for SVN&#8217;ers crash course</a>.</p>