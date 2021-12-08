---
layout: post
title: What's with this DoubleRenderError?
categories:
- tricks
author: admin
published: true
date: 2005-07-08 19:08:05.000000000 +01:00
---
<p>Another haunting feature of 0.13 is the DoubleRenderError. Jamis explains it purpose:</p>
<blockquote> In order to understand why the DoubleRenderError was necessary, you need to understand something about the render and redirect_to methods that may surprise you. Many programmers expect a call to render or redirect_to to immediately cease execution of their action and return the result back to the browser. This is not the case in Rails. Unless you explicitly return after rendering or redirecting, your action will continue on its merry way as if nothing had happened.</blockquote>
<p>Go <a href="http://jamis.jamisbuck.org/articles/2005/07/08/rails-tip-of-the-day">read the full thing</a> and you&#8217;ll go &#8220;ahhhh, thank heavens for DoubleRenderError!&#8221;.</p>