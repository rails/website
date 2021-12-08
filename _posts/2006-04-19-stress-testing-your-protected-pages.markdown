---
layout: post
title: Stress testing your protected pages
categories:
- tricks
- tools
author: rick
published: true
date: 2006-04-19 20:13:00.000000000 +01:00
---
<p>David came up with a quick tip for anyone stress testing protected pages with a stateless tester, such as siege.</p>
<ol>
	<li>Log in with your browser</li>
	<li>View the cookies and find the session id (Firefox has a handy cookie search tool)</li>
	<li>Prepend the queries with ?<em>_session_id=YOURSESSIONID</em></li>
</ol>
<p>Now, any requests made will be as though they came from your account.</p>
<p>Do you have any other handy tips for stress testing your Rails applications?</p>