---
layout: post
title: Using SQLite3 with Rails
categories:
- general
author: jamis
published: true
date: 2007-01-29 21:09:00.000000000 +00:00
---
<p>If you are using <a href="http://www.sqlite.org">SQLite3</a> with a Rails application, make sure you are using SQLite3 3.3.7 or earlier. Versions after 3.3.7 incompatibly changed the way in which default values are stored, making it so that current versions of Rails get into quoting issues and problems with columns with <span class="caps">NULL</span> defaults.</p>
<p>The source code for version 3.3.7 may be downloaded here: <a href="http://www.sqlite.org/sqlite-3.3.7.tar.gz">sqlite-3.3.7.tar.gz</a>. Likewise, a pre-compiled binary for Windows is available here: <a href="http://www.sqlite.org/sqlite-3_3_12.zip">sqlite-3_3_7.zip</a>.</p>
<p>I&#8217;ve got a ticket open on the SQLite3 trac about this (<a href="http://www.sqlite.org/cvstrac/tktview?tn=2203">right here</a> ); hopefully this will be recognized as an unacceptable change for a point release and will be reverted.</p>