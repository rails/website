---
layout: post
title: "Active Record gets better every week"
categories: news
author: claudiob
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-04-24
---


Hi, it's [Claudio Baccigalupo](https://github.com/claudiob). Let's explore what happened this week in Ruby on Rails.

[Apply as a speaker for Rails World](https://rubyonrails.org/world/2026)  
Don't miss out on the opportunity to join 1,200+ Rails developers this year at the Palmer Center, Austin, TX. Corporate Support tickets are on sale now. General admission tickets will be released on May 12.

[How do you use Ruby on Rails?](https://railsdeveloper.com/survey)  
The 2026 Ruby on Rails Community Survey is open! Takes just a few minutes. Please fill out and share with your team!

[Bump required PostgreSQL version to 10.0](https://github.com/rails/rails/pull/55282)  
Until now Rails claimed support for PostgreSQL 9.3, which is incompatible with PostgreSQL 18 (released in 2025).
The pg gem v1.6 already raised its minimum required PostgreSQL. This change makes version 10 the minimum supported by Rails main.

[Let add_column raise if :null is true for PKs](https://github.com/rails/rails/pull/57204)  
Primary keys get a `NOT NULL` constraint unconditionally. In particular, `null: true` was being ignored, thus not doing what the user specified.
Now it will raise an error to let the user know the call is invalid.

[Optimize merging ActiveRecord::Relation extensions](https://github.com/rails/rails/pull/57199)  
Now calling [extending](https://edgeapi.rubyonrails.org/classes/ActiveRecord/QueryMethods.html#method-i-extending) on an Active Record relation can be twice as fast.

[Fix nested with_connection incorrectly clearing sticky lease set by lease_connection](https://github.com/rails/rails/pull/57207)  
When `lease_connection` is called to permanently lease a connection within a `with_connection` block, a subsequent nested `with_connection(prevent_permanent_checkout: true)` would incorrectly clear the sticky flag. 
This caused the outer `with_connection` block to release the connection on exit, even though it had been explicitly leased.

[Fix TTOU hanging Rails when ffmpeg is spawned for video previews](https://github.com/rails/rails/pull/57201)  
When generating video previews in ActiveStorage, Rails launches ffmpeg as a subprocess, which watches for keypresses (e.g. q to quit).
If Rails is run with its own process group (e.g. using overman), this causes the Rails process to receive a TTOU signal, which resulted in Rails hanging indefinitely.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-04-17%7D...main@%7B2026-04-24%7D)._
_We had [12 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260417-20260424) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
