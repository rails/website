---
layout: post
title: ! 'SwitchTower: Automating Application Deployment'
categories: []
author: admin
published: true
date: 2005-08-22 04:23:52.000000000 +01:00
---
<p>As the 37signals applications have scaled up to run on multiple servers, we needed a better way to manage the deployment phase. We wanted to automate that all six servers got the newest version, that the database server ran the migrations, that the FastCGI processes were restarted on the application servers, and possibly that the web servers showed a &#8220;down for maintenance screen&#8221;.</p>
<p>SwitchTower is the extraction of that need and its going to be a new part of Rails in the next release. It&#8217;s the work of Jamis Buck and you can preview it right now by playing with the beta gems/subversion trunk.</p>
<p>You won&#8217;t even be going in blind-folded. Jamis has already created an <a href="http://manuals.rubyonrails.com/read/book/17">incredibly extensive manual</a> that teaches you all about how to use SwitchTower. Get on the band-wagon and reduce your deployment pains to &#8220;rake deploy&#8221;.</p>