---
layout: post
title: Use params, not @params
categories:
- documentation
- tricks
author: marcel
published: true
date: 2006-04-25 04:30:00.000000000 +01:00
---
<p>I still frequently see people in the <code>#rubyonrails</code> channel using <code>@params</code> in their code. For a while now <code>@params</code> has been deprecated in favor of simply <code>params</code>. For those who just skim these blog posts:</p>
<h1>Use <code>params</code>, not <code>@params</code></h1>
<p>Why? When you use the <code>params</code> method, it allows for the implementation details of the parameter hash to be changed without breaking existing code. If the implementation of <code>params</code> changed you wouldn&#8217;t have to change your code at all because the single point of access for the parameters would just remain the <code>params</code> method. So, the details of what is happening behind the scenes don&#8217;t matter. If, though, you use the <code>@params</code> instance variable directly, you&#8217;ve broken encapsulation and consequently the ability for the implementation to be easily modified. Methods can be refactored, but instance variables can&#8217;t. Today the <code>params</code> method just wraps the <code>@params</code> instance variable, so still using <code>@params</code> works, but that&#8217;s not guaranteed to always remain the case.</p>
<p>Same goes for <code>request</code>, <code>response</code>, <code>session</code>, <code>headers</code>, <code>template</code>, <code>cookies</code> and <code>flash</code>.</p>
<p>Basically, a good rule of thumb here is don&#8217;t use an instance variable in your controller or view unless <em>you</em> created that instance variable.</p>
<p>Even the old <code>@content_for_layout</code> in the layout is deprecated in favor of just using <code>yield</code> in its place. Also <code>content_for('some_fragment')</code> is now accessed with <code>yield :some_fragment</code> rather than <code>@content_for_some_fragment</code>.</p>