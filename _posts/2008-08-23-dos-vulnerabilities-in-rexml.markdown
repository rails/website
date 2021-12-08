---
layout: post
title: DoS Vulnerabilities in REXML
categories: []
author: michael
published: true
date: 2008-08-23 08:15:00.000000000 +01:00
---
<p>The ruby-security team have published <a href="http://www.ruby-lang.org/en/news/2008/08/23/dos-vulnerability-in-rexml/">an advisory about a DoS bug affecting <span class="caps">REXML</span> users</a>.  Almost all rails applications will be affected by this vulnerability and you&#8217;re strongly advised to take the mitigating steps recommended in the advisory.  If you&#8217;re not sure whether your application could be affected, you should upgrade.</p>
<p>The announcement contains details describing the monkeypatch solution, but to summarise:</p>
<h2>Versions 1.2.6 and earlier</h2>
<ol>
	<li>Copy the <a href="http://www.ruby-lang.org/security/20080823rexml/rexml-expansion-fix.rb">fix file</a> into RAILS_ROOT/lib</li>
	<li>Require the file from environment.rb<br />
  require &#8216;rexml-expansion-fix&#8217;</li>
</ol>
<h2>Versions 2.0.0 and later</h2>
<p>Copy the <a href="http://www.ruby-lang.org/security/20080823rexml/rexml-expansion-fix.rb">fix file</a> into RAILS_ROOT/config/initializers, it will be required automatically.</p>
<p>This fix is also available as a gem, to install it run:</p>
gem install rexml-expansion-fix
<p>Then add require &#8216;rexml-expansion-fix&#8217; to your environment.rb file.  The manual fix and the gem are identical, if you have applied one you do not need to apply the other.</p>