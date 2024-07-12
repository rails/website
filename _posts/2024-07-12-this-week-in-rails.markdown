---
layout: post
title: "New Rails beta release, immutable option in http_cache_forever and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-07-12
---


Hi, [Wojtek](https://x.com/morgoth85) here again. See another short list of changes from this past week.

[Rails 7.2.0.beta3 have been released](https://github.com/rails/rails/releases/tag/v7.2.0.beta3)  
With 91 commits since the last beta 2 version.

[Make http_cache_forever use immutable option](https://github.com/rails/rails/pull/52283)  
The [immutable: true option was added to expires_in](https://github.com/rails/rails/pull/52197) in last week.
This change sets `immutable: true` option for `http_cache_forever` which additionally affects proxied Active Storage files.

[Do not watch for translation changes from gems](https://github.com/rails/rails/pull/52271)  
Optimizes the load time for I18n initialization by restricting I18n load paths passed to the file watcher to only those within the applications directory.
Previously, the watcher would grab all of the available locales, including those in gems which do not require a watcher because they don't change. 

[Fix duplicate callback execution when child autosaves parent association](https://github.com/rails/rails/pull/49847)  
Before, persisting a new child record with a new associated parent record would run validation and save callbacks twice.
Now, these callbacks are only executed once as expected.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-07-05%7D...main@%7B2024-07-12%7D)._
_We had [19 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240705-20240712) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
