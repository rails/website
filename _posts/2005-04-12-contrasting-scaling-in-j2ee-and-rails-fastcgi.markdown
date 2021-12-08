---
layout: post
title: Contrasting scaling in J2EE and Rails/FastCGI
categories:
- sightings
author: admin
published: true
date: 2005-04-12 02:57:18.000000000 +01:00
---
<p>Jon Tirsen has taken a closer look at the <a href="http://blogs.codehaus.org/people/tirsen/archives/001041_ruby_on_rails_and_fastcgi_scaling_using_processes_instead_of_threads.html">differences between the threaded scaling approach in J2EE and using Rails with FastCGI</a>. While the former requires object pools, induces thread-safety concerns, and other complications, the FastCGI approach remains dead simple from the application programmers perspective:</p>
<blockquote>This means that each process can pre-allocate one single database connection (for each database that it talks to). There are no issues of multi-threading as each process processes only one request at a time. No objects needs to be written to handle multi-threading, as there is just one single thread per process. Expensive resources doesn&#8217;t need to be allocated in pools and application code doesn&#8217;t need to return the resources once done with them. Complicated non-blocking IO solutions or muxer/demuxer architectures doesn&#8217;t need to be used. You can even allocate FastCGI processes on multiple physical nodes, effectively implementing a cluster. In high-security situations a double-firewall security architecture can be set up so that the web-server is protected by one and the back-end FastCGI servers are protected by an additional one.</blockquote>