---
layout: post
title: "Rails guides facelift, two new official gems and more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-03-22
---


Hey everyone, Happy Weekend!  
[Vipul](https://www.saeloun.com/team/vipul) here with the latest updates for This Week in Rails. Let's dive in.

[Rails guides gets a facelift](https://rubyonrails.org/2024/3/20/rails-guides-get-a-facelift)   
Rails guides has a received a big design update!  
Check out the [Edge Guides](https://edgeguides.rubyonrails.org/) to see these changes.
If you find a bug or wish to submit a suggestion, you can open a discussion on [GitHub](https://github.com/rails/rails/discussions).

[Two new official gems](https://twitter.com/dhh/status/1770590629149786189)  
[Solid Queue](https://github.com/rails/solid_queue), a DB-based queuing backend for Active Job, has graduated to an official [Rails gem](https://twitter.com/dhh/status/1770590629149786189).

[Same](https://twitter.com/dhh/status/1770590866492809229) for [Mission Control — Jobs](https://github.com/rails/mission_control-jobs), 
which provides a Rails-based frontend to Active Job adapters. 
It currently supports Resque and Solid Queue.

[Don't enqueue jobs to process a preview image if no variant requires it](https://github.com/rails/rails/pull/51351)  
This PR fixes the issue where previewable attachments that don't specify any variants, or no variants that require pre-processing, 
were still attempting to queue a job to process the preview image anyways.

[Eliminate remaining uses of lease_connection inside Active Record](https://github.com/rails/rails/pull/51353)  
As part of moving towards adding a [new `config.active_record.permanent_connection_checkout` setting](https://github.com/rails/rails/pull/51349), 
this change eliminates the remaining uses of `lease_connection` inside Active Record API. 

[Do not build View Watcher until the first updated? check](https://github.com/rails/rails/pull/51308)  
Currently initialization of every `Rails::Engine` leads to the creation of a new View watcher when the engine prepends its paths.
This contributes to the time it takes to perform the first cold request on a lazy loaded application.
This change delays the initialization of the View watcher until its first usage to only have one initialization of the watcher.

[Allow primary_key: association option to be composite ](https://github.com/rails/rails/pull/51345)  
Association's `primary_key` can be composite when derived from associated class's `primary_key` or `query_constraints`. 
Rails dint allow setting this explicitly even though it was already capable of supporting it.

This commit allows `primary_key` association option to be an array to support this behavior.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-03-16%7D...main@%7B2024-03-22%7D)._  
_We had [14 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240316-20240322) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
