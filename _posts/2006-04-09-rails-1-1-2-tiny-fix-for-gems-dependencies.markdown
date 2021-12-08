---
layout: post
title: ! 'Rails 1.1.2: Tiny fix for gems dependencies'
categories:
- releases
author: David
published: true
date: 2006-04-09 22:12:11.000000000 +01:00
---
<p>The new gem version dependency system from Rails 1.1.1 needed a few tweaks to work properly and to stop throwing meaningless warnings. This tiny release makes up for that. To install:</p>
<ul><li><code>gem install rails</code></li>
<li><code>rake rails:update:configs</code> (to get the latest config/boot.rb)</li></ul>
<p>This release also signals our new commitment to do more tiny releases from the stable branch, which only gets bug fixes. So it will not be uncommon to see bi-weekly tiny releases in the 1.1.x series while we continue to add features to the forthcoming 1.2.0.</p>