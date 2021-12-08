---
layout: post
title: Kwartz 2.0 brings more templating choice to Rails
categories:
- sightings
author: admin
published: true
date: 2005-04-30 06:38:54.000000000 +01:00
---
<p><a href="http://www.kuwata-lab.com/kwartz/">Kwartz</a> is a templating system for Ruby built on the concept of Independence of Presentation Logic, which bans loops, conditions, and similar constructs from the template files themselves. Instead that logic is added in a second pass based on ids in the original template.</p>
<p>With the latest 2.0 release, Kwartz is now available as a <a href="http://www.kuwata-lab.com/kwartz/users-guide.en.04.html#rails">templating option for Rails</a>. Makoto Kuwata used the hooks created by Jamis Buck to follow the conventions of instance-to-template variables and even allowed the use of helpers.</p>
<p>Another familiar template language for Ruby, Amrita, is also on the way with Rails integration. Rails will still only ship with ERb and Builder for the default options, but Kwartz and soon Amrita are getting very easy to inject as an alternative. Great work, guys!</p>