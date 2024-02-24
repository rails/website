---
layout: post
title: "A week dedicated to composite primary keys 😎"
categories: news
author: Emmanuel Hayford
published: true
date: 2023-04-14
---

Saluton! That's Esperanto for "Hello!" 😜... [Emmanuel Hayford](https://hayford.dev/) here, let's see what's new in Rails as we gear up for **Composite Primary Keys (CPKs)** support.

But first, here's a fine opportunity for junior Ruby on Rails developers: As part of [preparations for the upcoming Rails World conference in Amsterdam, Netherlands](https://rubyonrails.org/2023/4/13/attention-junior-devs-want-to-build-the-rails-world-website) this year, The Rails Foundation is presenting an opportunity to junior Ruby on Rails developers. Paired with a mentor, the goal is for the junior developer to build a website to host the event!

[Support deleting records from associations for CPK](https://github.com/rails/rails/pull/47928)
This PR improves the behaviour around deleting records from associations in composite contexts. Previously, an _ArgumentError_ would raise if one attempted to delete records from associations in composite contexts.

[Ensure that ids_writer and ids_reader are working for CPK](https://github.com/rails/rails/pull/47925)
The latest update to _ids_writer_ addresses an issue with handling composite primary keys. Previously, the writer was able to handle a CPK model associated with a non-CPK model without any errors. However, when it came to a CPK model associated with another CPK model, the writer produced incorrect IDs. This PR fixes the issue.

[Support batching using composite primary keys](https://github.com/rails/rails/pull/47901)
Batching was previously limited to tables with simple primary keys, but it can now be used with tables that have composite primary keys.

[Rewrite Asset Pipeline guide for Rails 7](https://github.com/rails/rails/pull/47899)
This PR was created to update the asset pipeline guide, which had become outdated in several ways. It didn't mention some important updates, such as the **importmaps-rails** gem that is now the default solution for JavaScript.

This update is one that's long due.

The guide on Sprockets was also outdated as it was written before Sprockets 4.0, which introduced the _manifest.js_ file, and some of its parts were no longer relevant. Furthermore, the guide failed to mention several useful gems, including **jsbundling-rails** , **cssbundling-rails** , **dartsass-rails** , and **tailwindcss-rails**.

This PR aims to bring the guide up-to-date with the latest changes in Rails and highlight the best practices for managing assets.

We had&nbsp; [29 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230407-20230414) in the last seven days.

See you next week!

Your weekly inside scoop of interesting commits, pull requests and more from [**Rails**](https://github.com/rails/rails).

<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
