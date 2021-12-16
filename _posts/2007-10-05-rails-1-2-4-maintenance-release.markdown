---
layout: post
title: ! 'Rails 1.2.4: Maintenance release'
categories:
- releases
author: David
published: true
date: 2007-10-05 04:38:00.000000000 +01:00
---
<p>This release contains additional deprecation notices, security fixes and some minor performance improvements.  All users of 1.2.3 are advised to upgrade.</p>
<p><strong>Deprecation Notices</strong></p>
<p>If you intend to upgrade to 2.0 you should run your tests to and fix any errors that are displayed.  The warnings will become errors with the release of 2.0.</p>
<p>If you&#8217;re using RESTful routing, pay special attention to the changes to route generation and recognition.  The previous use of the semicolon in URLs has been replaced with a regular /.  For instance /person/1;edit has become /person/1/edit.  This change was made as several libraries, including mongrel, mistakenly treated semi-colons as query string seperators and some browsers and http libraries misbehaved.</p>
<p>Your old ;-based URLs will be continued to be recognized, though. They&#8217;re just no longer generated.</p>
<p><strong>Security Enhancements</strong></p>
<p>1.2.4 fixes several potential security issues:</p>
<ul>
	<li>Session fixation attacks are mitigated by removing support for <span class="caps">URL</span>-based sessions</li>
	<li>Changed the <span class="caps">JSON</span> encoding algorithms to avoid otential <span class="caps">XSS</span> issues when using ActiveRecord::Base#to_json</li>
	<li>Potential Security and performance problems with XmlSimple have been fixed by disabling certain dangerous options by default.</li>
</ul>
<p>Upgrade with the standard gem install rails command. Rails 1.2.4 serves as a drop-in replacement for 1.2.3.</p>
<p><strong>Update:</strong> please see the latest <a href="https://rubyonrails.org/2007/10/12/rails-1-2-5-maintenance-release">1.2.5 stable release</a></p>