---
layout: post
title: "Last call for Luminary nominations, SQLite3 full-text search and more!"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-08-30
---


Hi, it's [Greg](https://greg.molnar.io). Let's explore this week's changes in the Rails codebase.

[Last call for Rails Luminary nominations](https://rubyonrails.org/2024/8/2/nominations-open-for-2024-luminaries)  
If you know someone who has contributed to the Rails ecosystem and community with exceptional code, documentation, enthusiasm, or assistance, submit your nomination by September 2nd. 

[Fix Devcontainer generator with --dev option path error](https://github.com/rails/rails/pull/52705)  
This pull request has been created because the devcontainer generator with the `--dev` option failed (`rails g devcontainer --dev`)(the app generator worked just fine with the flag) due to a path issue.

[Strip encrypted file contents](https://github.com/rails/rails/pull/52695)  
If you accidentally add a newline to the end of an encrypted file (like Rails credentials), the content file will fail to decrypt. This is an easy mistake to introduce through your text editor or a git merge. This change will prevent that from happening by calling `strip` on the content. 

[Support custom environments on _bin/rails credentials:diff_](https://github.com/rails/rails/pull/52679)  
In some cases/workflows, it may be useful to have credential files that don't match an environment name (development, production, testing). This was already supported by all the `bin/rails credentials:*` tooling except `credentials:diff`, which shows the whole encrypted content of the file.

[Add support for SQLite3 full-text search and other virtual tables](https://github.com/rails/rails/pull/52354)  
SQLite3 full-text search and other virtual tables are now supported in Rails.
Previously, adding SQLite3 virtual tables messed up `schema.rb`, but with this change, virtual tables can safely be added using `create_virtual_table`.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-08-23%7D...main@%7B2024-08-30%7D)._
_We had [43 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240823-20240830) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
