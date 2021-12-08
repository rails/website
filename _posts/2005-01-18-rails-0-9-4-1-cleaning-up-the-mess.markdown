---
layout: post
title: ! 'Rails 0.9.4.1: Cleaning up the mess'
categories:
- releases
author: admin
published: true
date: 2005-01-18 14:44:38.000000000 +00:00
---
<p>Seems like the 0.9.4 release required a public launch in order to find the last snags. No game, no pain, or something. The changes are:</p>
<p><strong>Action Mailer</strong></p>
<ul>
	<li>Fixed sending of emails to use Tmail#from not the deprecated Tmail#from_address</li>
</ul>
<p><strong>Action Pack</strong></p>
<ul>
	<li>Fixed bug in page caching that prevented it from working at all</li>
</ul>
<ul>
	<li>Fixed a bug where cookies wouldn&#8217;t be set if a symbol was used instead of a string as the key</li>
</ul>
<ul>
	<li>Added assert_cookie_equal to assert the contents of a named cookie</li>
</ul>
<p><strong>Active Record</strong></p>
<ul>
	<li>Fixed that the belongs_to and has_one proxy would fail a test like &#8216;if project.manager&#8217; &#8212; this unfortunately also means that you can&#8217;t call methods like project.manager.build unless there already is a manager on the project #492 [Tim Bates]</li>
</ul>
<ul>
	<li>Fixed that the Ruby/MySQL adapter wouldn&#8217;t connect if the password was empty #503 [Pelle]</li>
</ul>
<p><strong>Rails</strong></p>
<ul>
	<li>Added 5-second timeout to WordNet alternatives on creating reserved-word models #501 [Marcel Molina]</li>
</ul>
<ul>
	<li>Fixed binding of caller #496 [Alexey]</li>
</ul>
<p>&#8230;you may need to use &#8220;gem install rails&#8221;, and not just &#8220;gem update&#8221;, to install the latest version.</p>