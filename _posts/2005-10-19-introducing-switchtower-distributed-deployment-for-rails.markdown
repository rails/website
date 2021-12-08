---
layout: post
title: ! 'Introducing SwitchTower: Distributed deployment for Rails'
categories:
- releases
author: admin
published: true
date: 2005-10-19 16:52:21.000000000 +01:00
---
<p>SwitchTower is a utility for executing commands in parallel on multiple machines. It lets you (among many other things) deploy distributed applications with a single command.</p>
<p>When your application is young you may be deploying it to a single machine, which runs the web server, app server, and database all together. In this situation, deploying manually is not unbearably painful. But as your application grows you may find yourself needing to deploy your application to two web servers, four app servers, and two database servers, atomically. This is where SwitchTower steps in as a pain-killer.</p>
<p><strong>Getting Started</strong></p>
<p>Suppose you have an existing Rails application that you want to deploy to a cluster of machines. SwitchTower attempts to make the entire process as painless as possible:</p>
<ul>
	<li>Install SwitchTower. This is as simple as <code>gem install switchtower</code>.</li>
	<li>Decorate your application with the necessary SwitchTower files. Just do <code>switchtower --apply-to /path/to/your/app</code>.</li>
	<li>Tell SwitchTower where your application code sits and what machines it should deploy to. Just edit <code>config/deploy.rb</code> and fill in the blanks.</li>
	<li>Set up your machines so they are ready to receive your application. It&#8217;s as easy as <code>rake remote_exec ACTION=setup</code>.</li>
	<li>Lastly, deploy your application! Just type <code>rake deploy</code> and let the good times roll.</li>
</ul>
<p><strong>Other Capabilities</strong></p>
<p>In addition to simply moving your application to the various boxes, SwitchTower attempts to make the task of maintaining your deployment simpler. Suppose something goes wrong while checking out your code&#8212;SwitchTower will detect that and roll back the change, <em>on all deployed machines</em>. This means it is much harder to wind up with your application out of sync on the various boxes.</p>
<p>Other things SwitchTower can do, out of the box:</p>
<ul>
	<li>Database migrations on your production database</li>
	<li>Enable/disable the web interface (only works with Apache currently)</li>
	<li>Restart your application on the application servers</li>
</ul>
<p>SwitchTower also makes it very simple to override and extend the standard tasks, and to write your own. The tasks use a simple language similar to Rake that allows you to automate many different tasks.</p>
<p><strong>More Information</strong></p>
<p>Want to know more about SwitchTower? There&#8217;s an entire user manual full of useful tidbits at http://manuals.rubyonrails.com/read/book/17.</p>