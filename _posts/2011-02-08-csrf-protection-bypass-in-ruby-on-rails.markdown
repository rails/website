---
layout: post
title: CSRF Protection Bypass in Ruby on Rails
categories: []
author: michael
published: true
date: 2011-02-08 22:53:00.000000000 +00:00
---
<p>There is a vulnerability in Ruby on Rails which could allow an attacker to circumvent the <a href="http://guides.rubyonrails.org/security.html#cross-site-request-forgery-csrf"><span class="caps">CSRF</span> protection</a> provided.  This vulnerability has been assigned the <span class="caps">CVE</span> Identifier <span class="caps">CVE</span>-2011-0447.</p>
<ul>
	<li>Versions Affected:  2.1.0 and above</li>
	<li>Not affected:       Applications which don&#8217;t use the built in <span class="caps">CSRF</span> protection.</li>
	<li>Fixed Versions:     3.0.4, 2.3.11</li>
</ul>
<h2>Impact</h2>
<p>Certain combinations of browser plugins and <span class="caps">HTTP</span> redirects can be used to trick the user&#8217;s browser into making cross-domain requests which include arbitrary <span class="caps">HTTP</span> headers specified by the attacker.  An attacker can utilise this to spoof ajax and <span class="caps">API</span> requests and bypass the built in <a href="http://guides.rubyonrails.org/security.html#cross-site-request-forgery-csrf"><span class="caps">CSRF</span> protection</a> and successfully attack an application.  All users running an affected release should upgrade or apply the patches immediately.</p>
<h2>Releases</h2>
<p>The 3.0.4 and 2.3.11 releases are <a href="https://rubyonrails.org/2011/2/8/new-releases-2-3-11-and-3-0-4">available at the normal locations</a>.</p>
<h2>Upgrade Process</h2>
<p>There are two major changes in this fix,  the behaviour when <span class="caps">CSRF</span> protection fails has changed and the token will now be required for <strong>all</strong> non-<span class="caps">GET</span> requests.</p>
<p>After applying this patch failed <span class="caps">CSRF</span> requests will no longer generate <span class="caps">HTTP</span> 500 errors, instead the session will be reset.  Users can override this behaviour by overriding <ins>handle_unverified_request</ins> in their own controllers.</p>
<p>Users must still take care that users cannot be auto logged in via non-session data.  For example, an application using filters to implement &#8216;remember me&#8217; functionality must either remove those cookies in their <ins>handle_unverified_request</ins> handlers or ensure that the remember me code is only executed on <span class="caps">GET</span> requests.  A custom handler which removes the remember_me cookie would look like:</p>
def handle_unverified_request
super # call the default behaviour which resets the session
cookies.delete(:remember_me) # remove the auto login cookie so the fraudulent request is rejected.
end
<p>There are two steps to ensuring that your application sends the <span class="caps">CSRF</span> Token with every ajax request.  Providing the token in a meta tag,  then ensuring your javascript reads those values and provides them with each request.  The first step involves you including the <ins>csrf_meta_tag</ins> helper somewhere in your application&#8217;s layout.  Rails 3 applications likely already include this helper, however it has now been backported to the 2.3.x series.  An example of its use would be something like this in application.html.erb:</p>
&lt;%= javascript_include_tag :defaults %&gt;
&lt;%= csrf_meta_tag %&gt;
<p>In addition to altering the templates, an application&#8217;s javascript must be changed to send the token with Ajax requests.  Rails 3 applications can just update their rails.js file using <ins>rake rails:update</ins>, 2.x applications which don&#8217;t use the built-in ajax view helpers will need to add a framework-specific snippet to their application.js.  Examples of those snippets are available:</p>
<ul>
	<li><a href="/assets/2011/2/8/prototype-snippet.js">prototype-snippet.js</a> &#8211; Prototype script which includes the csrf token in every Ajax request</li>
	<li><a href="/assets/2011/2/8/jquery-snippet.js">jquery-snippet.js</a> &#8211; JQuery script which includes the csrf token in every Ajax request.</li>
</ul>
<h2>Workarounds</h2>
<p>There are no feasible workarounds for this vulnerability.</p>
<h2>Patches</h2>
<p>To aid users who aren&#8217;t able to upgrade immediately we have provided patches for the two supported release series.  They are in git-am format, 3-0-csrf.patch includes two changesets, the others consist of a single changeset.</p>
<ul>
	<li><a href="/assets/2011/2/8/2-3-csrf.patch">2-3-csrf.patch</a> &#8211; Patch for 2.3 series</li>
	<li><a href="/assets/2011/2/8/3-0-csrf.patch">3-0-csrf.patch</a> &#8211; Patch for 3.0 series</li>
</ul>
<p>Given the severity of the problem we are also providing backported fixes to the 2.2 and 2.1 series. There will be no gem releases for these versions but the stable branches in git will be updated.</p>
<ul>
	<li><a href="/assets/2011/2/8/2-2-csrf.patch">2-2-csrf.patch</a> &#8211; Patch for 2.2 series</li>
	<li><a href="/assets/2011/2/8/2-1-csrf.patch">2-1-csrf.patch</a> &#8211; Patch for 2.1 series</li>
</ul>
<p>Please note that only the 2.3.x and 3.0.x series are supported at present.  Users of earlier unsupported releases are advised to upgrade as soon as possible as we cannot guarantee continued security fixes indefinitely.</p>
<h2>Credits</h2>
<p>Thanks to Felix Gröbert of the Google Security Team for reporting the vulnerability to us and working with us to ensure that the fix didn&#8217;t introduce any new issues.  Thanks also to the Shopify development team for their assistance in verifying the fix and the upgrade process.  The original vulnerability has been reported to vendors by <a href="kuza55@gmail.com">kuza55</a></p>