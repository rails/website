---
layout: post
title: "The Rails Foundation update, perform_all_later in AJ and more"
categories: news
author: Wojtek
published: true
date: 2023-02-24
---

Hi, it's [Wojtek](https://twitter.com/morgoth85). Let's dig into this week's changes and announcements.
 
[Amanda Perino as new executive director for The Rails Foundation](https://rubyonrails.org/2023/2/20/amanda-perino-is-our-executive-director)  
Please welcome [Amanda](https://www.linkedin.com/in/amandabrookeperino/) to the job of leading the mission to improve the documentation, education, marketing, and events in the Rails ecosystem.

[Add ActiveJob.perform_all_later to enqueue multiple jobs at once](https://github.com/rails/rails/pull/46603)  
This adds the ability to bulk enqueue jobs, without running callbacks.
This can greatly reduce the number of round-trips to the queue datastore. For queue adapters that do not implement the new `enqueue_all` method, we fall back to enqueuing jobs individually.

[Allow to define the default column serializer](https://github.com/rails/rails/pull/47463)  
YAML has quite a bit of footguns, as such it's desirable to be able to substitute it for something else or even simply to force users to define a serializer explicitly for every serialized columns.
The follow-up pull request [drops the default](https://github.com/rails/rails/pull/47422) for new applications.

[Allow mailer classes to customize the deliver_later queue name](https://github.com/rails/rails/pull/47408)  
The `deliver_later_queue_name` was already configurable on `ActionMailer::Base`, however the value was inherited by all the mailer subclasses. From now on it can be customized per single mailer.

[Allow 3-tier shared config in database.yml](https://github.com/rails/rails/pull/47431)  
Previously, the shared config hash would be merged with all database configurations defined in database.yml.

[Add config.hosts and config.host_authorization to new app templates](https://github.com/rails/rails/pull/47447)  
Rails has a default "/up" endpoint to help load balancers and uptime monitors. DNS rebindings sometimes get in the way of it. Suggesting settings for both `hosts` and` host_authorization` helps to reduce this friction.

[Remove Copyright years](https://github.com/rails/rails/pull/47467)  
They are not serving any real purpose so no need to update it every year from now on.

[Add "Rails Application Templates" to guides index](https://github.com/rails/rails/pull/47455)  
Still needs some final polishing, but can already be accessed on [Edge Guides Page](https://edgeguides.rubyonrails.org/rails_application_templates.html)

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-02-17%7D...main@%7B2023-02-24%7D)._  
_We had [25 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230217-20230224) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
