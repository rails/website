---
layout: post
title: Git tag for 3.1.2 release
categories:
- releases
author: jonleighton
published: true
date: 2011-11-18 16:23:00.000000000 +00:00
---
Unfortunately I accidentally pushed an incorrect v3.1.2 tag yesterday. I immediately recognised that it was wrong, so quickly deleted it and pushed the correct tag. I thought that this would not be a problem for anyone who was not pulling the rails repository at that exact moment.

It turns out I was wrong. If you have a rails repository clone that existed before the 3.1.2 release, in order to get the v3.1.2 tag into your repository, you will need to do:

`git fetch origin tag v3.1.2`

I am very sorry for the inconvenience.