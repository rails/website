---
layout: post
title: Multiple Ruby security vulnerabilities
categories:
- general
author: Jeremy Kemper
published: true
date: 2008-06-21 01:57:00.000000000 +01:00
---
<p>Drew Yao at Apple uncovered a handful of nasty security vulnerabilities affecting all current versions of Ruby. The details are still under wraps because an attacker can DoS you or possibly execute arbitrary code &#8212; holy crap! Better upgrade sooner than later.</p>
<p>According to the <a href="http://www.ruby-lang.org/en/news/2008/06/20/arbitrary-code-execution-vulnerabilities/">official Ruby security advisory</a>, the vulnerable Rubies are:</p>
<ul>
	<li>1.8.4 and earlier</li>
	<li>1.8.5-p230 and earlier</li>
	<li>1.8.6-p229 and earlier</li>
	<li>1.8.7-p21 and earlier</li>
</ul>
<p>Those of us running Ruby 1.8.4 or earlier must upgrade to 1.8.5 or later for a fix. Those on 1.8.5-7 can grab the latest patchlevel release for a fix.</p>
<p>(Please note: Ruby 1.8.7 breaks backward compatibility and is only compatible with Rails 2.1 and later, so don&#8217;t go overboard!)</p>