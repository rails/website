---
layout: post
title: ! 'Rails 1.1.4: Security fix without breakage'
categories:
- releases
author: David
published: true
date: 2006-06-30 14:18:00.000000000 +01:00
---
<p>The security fix from <a href="https://rubyonrails.org/2006/6/27/rails-1-1-3-security-fix-and-minor-fixes">Rails 1.1.3</a> might have closed the hole, but it also caused breakage for people with controllers in modules. We&#8217;ve fixed that now, so Rails 1.1.4 should work for any application that also ran under 1.1.2. We apologize for the problem with 1.1.3 and encourage everyone running 1.1.x to upgrade as soon as possible to this release.</p>
<p>Note: Edge Rails was never affected by this security issue as it includes a rewritten routes module. So if you&#8217;re running on the latest edge, you don&#8217;t need to worry about upgrading.</p>