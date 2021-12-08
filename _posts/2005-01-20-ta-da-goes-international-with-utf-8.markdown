---
layout: post
title: Ta-da goes international with UTF-8
categories: []
author: admin
published: true
date: 2005-01-20 11:51:24.000000000 +00:00
---
<p>One of the simplest ways to make your application more welcoming to non-English speakers is to allow them the right of the native language. Before <span class="caps">UTF</span>-8 that was a huge mess of encoding types, but now all it takes is one line. One single meta setting and you can allow for:</p>
<p><img src="http://web.rubyonrails.com/pictures/tadalistsutf8.png" alt="" /></p>
<p>The magic string is:</p>
<code>&lt;meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /&gt;</code>