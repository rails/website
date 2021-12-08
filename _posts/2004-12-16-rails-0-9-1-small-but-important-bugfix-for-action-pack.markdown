---
layout: post
title: ! 'Rails 0.9.1: Small, but important bugfix for Action Pack'
categories: []
author: admin
published: true
date: 2004-12-16 15:17:59.000000000 +00:00
---
<p>Fixed a bug that would cause an Application Controller to require itself three times and hence cause filters to be run three times. Evl tried to tell me before release of 0.9, but I wouldn’t listen. Silly me.</p>