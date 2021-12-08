---
layout: post
title: Dan Webb's Request Routing Plugin
categories:
- tools
- releases
author: josh
published: true
date: 2006-05-22 03:06:00.000000000 +01:00
---
Have you ever wanted to write Rails routes using a URL's subdomain? What about routing based on whether a request was HTTP vs HTTPS? Well, now you can. Recently Dan Webb released his "Request Routing Plugin":http://svn.vivabit.net/external/rubylibs/request_routing/README for public use. This plugin lets you create routing rules that use a whole slew of new properties: domain, subdomain, method, port, remote_ip, content_type, accepts, request_uri, and protocol.

You can obtain the plugin from Dan's subversion repository:

<pre><code>ruby script/plugin install \
   http://svn.vivabit.net/external/rubylibs/request_routing/</code></pre>