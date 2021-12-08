---
layout: post
title: A gentle reminder about pluralizations
categories:
- documentation
- tricks
author: josh
published: true
date: 2006-05-17 19:55:00.000000000 +01:00
---
Watching the [RSS feed](http://dev.rubyonrails.org/timeline?milestone=on&ticket=on&changeset=on&wiki=on&max=50&daysback=90&format=rss) from the Ruby on Rails trac is a great way to keep up on what's happening in Rails development. If you're doing any development on the Ruby on Rails project it's required reading. Even if you just are using Rails for a web app, it's useful to keep up on what bugs people are reporting.

Lately I've noticed a slew of bugs being opened against the Inflector, the class in Rails that transforms words from one form to another: singular to plural, classname to tablename, etc. The bugs all complain that Inflector is getting a pluralization or singularization wrong. But this isn't a bug in Inflector, it is just an inherent limitation of how it works. But fear not, there is a better solution than opening a bug against the Inflector.

I guess this has been a constant thing over the history of Rails, but since it's still going on, it deserves a rehash.