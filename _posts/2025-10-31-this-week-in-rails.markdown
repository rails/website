---
layout: post
title: "Summary report on CI run and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-10-31
---


Hi, [Wojtek](https://x.com/morgoth85) here. 🎃 Let's see if there are any spooky changes in Rails. 🎃

[New Rails Releases and End of Support Announcement](https://rubyonrails.org/2025/10/29/new-rails-releases-and-end-of-support-announcement)  
Versions 7.0.10, 7.1.6, 7.2.3, 8.0.4, and 8.1.1 have been released.
Rails 8.0 has received extended support.

[Add a summary report at the end of Continous Integration run](https://github.com/rails/rails/pull/56049)  
The *@results* ivar is changed to hold the step title in addition to the success boolean, and any multi-step *run* or *step* block will print the failed steps.
The output looks like:
```
❌ Continuous Integration failed in 0.02s
   ↳ Tests: Rails failed
   ↳ Tests: Engine failed
```

[Add algorithm option to has_secure_password](https://github.com/rails/rails/pull/56041)  
To use a different password hashing algorithm, one can now implement a class that responds to *algorithm_name*, *hash_password*, *verify_password*, *password_salt* and *validate*.

[Add callable support to allow_nil and allow_blank](https://github.com/rails/rails/pull/55309)  
Allow passing method name or proc to *allow_nil* and *allow_blank* in validations.

[Update shard swap prohibition to be more granular](https://github.com/rails/rails/pull/55927)  
In Rails v7.0.0, shard swapping prohibition was introduced as a global switch that applied to all databases.

For the use case of a multi-database application, the global prohibition is overly broad,
and so with this change the method *prohibit_shard_swapping* will scope the prohibition to the same connection class (i.e., *connection_specification_name*). This allows an application to prohibit shard swapping on a specific database while allowing it on all others.

[Disable SSL default config for out of the box Kamal deployments](https://github.com/rails/rails/pull/56010)  
Do not assume and force SSL in production by default when using Kamal, to allow for out of the box Kamal deployments.
It is still recommended to assume and force SSL in production as soon as you can.

[Updates to Active Record Encryption Guide](https://github.com/rails/rails/pull/55188)  
The new content can be read [here](https://edgeguides.rubyonrails.org/active_record_encryption.html).

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-10-24%7D...main@%7B2025-10-31%7D)._  
_We had [22 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20251024-20251031) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
