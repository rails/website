---
layout: post
title: "Validate URI scheme in Action Text and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-03-13
---


Hi, [Wojtek](https://x.com/morgoth85) here. Let’s quickly look at a few of this week’s fixes.

[Validate URI scheme in Action Text markdown link conversion](https://github.com/rails/rails/pull/56909)  
Add a `Rails::HTML::Sanitizer.allowed_uri?` check to *markdown_link*. When the URI scheme is disallowed, return the escaped title wrapped in escaped brackets (`\[title\]`) instead of emitting a link.

Example: `<action-text-attachment url="data:text/html,PAYLOAD">` previously produced `![Image](data:text/html,PAYLOAD)` in markdown output. Now it produces `\[Image\]`.

[Restore previous instrumenter after execute_or_skip](https://github.com/rails/rails/pull/56963)  
Fix by saving and restoring the previous instrumenter value around the *EventBuffer*'s lifetime. On background threads, this is a no-op (saves *nil*, restores *nil*). On the caller thread via *caller_runs*, it restores the real instrumenter and prevents contamination.

[Optimize generated Dockerfile build performance](https://github.com/rails/rails/pull/56967)  
Reduces number of docker build layers.

[Fix parsing SQLite virtual tables without parenthesis](https://github.com/rails/rails/pull/56970)  
Previously running *bin/rails db:migrate* with virtual tables crashed the schema dumper, which produced a broken *db/schema.rb* file.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-03-06%7D...main@%7B2026-03-13%7D)._  
_We had [14 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260306-20260313) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
