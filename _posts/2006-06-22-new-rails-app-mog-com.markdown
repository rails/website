---
layout: post
title: ! 'New Rails app: MOG.com'
categories:
- sightings
- launches
author: josh
published: true
date: 2006-06-22 04:57:00.000000000 +01:00
---
You may have seen [MOG](http://mog.com) mentioned on [BoingBoing](http://www.boingboing.net/2006/06/19/mog_social_networkin.html) or elsewhere earlier this week. It's the new social networking site that lets music lovers connect based on what they're into, keep a blog about their musical discoveries, and find new things to appreciate based on their friends' recommendations. It even has this MOG-O-MATIC plugin for iTunes so that it can figure out what you listen to without you having to tell it. Even if you don't have your music tagged.

That's all pretty cool, but for the readers of this blog, the really cool part is that MOG is written entirely in Ruby on Rails. The MOG software is the creation of Lucas Carlson, Dave Fayram, and Joshua Sierles. It's a nice piece of work, serving up 1.5M requests per day using Pound, Mongrel and memcached, and they are still tuning it for performance. The app also includes an XML-RPC interface used by the plugin (though Dave says now he thinks REST might have been a better way to go).

So tune your internet dial to [mog.com](http://mog.com) and take a listen...
