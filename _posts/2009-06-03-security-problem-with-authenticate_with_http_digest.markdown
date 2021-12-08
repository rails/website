---
layout: post
title: Security Problem with authenticate_with_http_digest
categories: []
author: michael
published: true
date: 2009-06-03 23:07:00.000000000 +01:00
---
<p>A security problem has been reported with the digest authentication code in Ruby on Rails.  This vulnerability can allow users to bypass your password protection.  This vulnerability has been publicly disclosed on several websites, users are advised to take the mitigating steps described below immediately.</p>
<p>The issue comes from the handling of the block passed to <ins>authenticate_or_request_with_http_digest</ins>.  This block must return the user&#8217;s password in the clear, or a sha1 hash of the user&#8217;s password.  Unfortunately the documentation was unclear on this and the examples cited would return <strong>nil</strong> if the user was not found.  The correct behaviour if the user doesn&#8217;t exist is to return <strong>false</strong>.</p>
<p>If the return value was nil, rails proceeded to verify this value against the provided password.  Because of this an attacker can provide an invalid username and no password and authentication will succeed.</p>
<h2>Fixed Versions</h2>
<p>We have altered the behaviour of the relevant code to make <ins>nil</ins> an authentication failure.  This fix has been pushed to 2-3-stable and will be present in 2.3.3 due to be released in the next few days.  All versions of edge rails after commit <a href="http://github.com/rails/rails/commit/1ad57cfe2fbda58439e4b7f84008ad23bc68e8b0">1ad57cfe2fbda58439e4b7f84008ad23bc68e8b0</a> contain the fix.</p>
<h2>Steps to Protect your application.</h2>
<p>Users can protect themselves without upgrading by simply ensuring that their authentication blocks never return nil.  To take an example from the documentation:</p>
authenticate_or_request_with_http_digest(<span class="caps">REALM</span>) do |username|
<span class="caps">USERS</span>[username]
end
<p>Should instead be something like:</p>
authenticate_or_request_with_http_digest(<span class="caps">REALM</span>) do |username|
<span class="caps">USERS</span>[username] || false
end
<h2>Disclosure Notes</h2>
<p>Due to communication difficulties and a mis-understanding between the reporter and the security team.  This vulnerability has been publicly disclosed on several websites, users are advised to update their applications immediately.  Steps are being taken to ensure that the security email is more reliable in the future.  We regret the nature of this disclosure and will endeavor to ensure it doesn&#8217;t happen again in the future.</p>