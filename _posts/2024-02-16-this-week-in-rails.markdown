---
layout: post
title: "Rails World CFP, ActiveRecord::Base.with_connection, devcontainer and puma-dev support and more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-02-16
---


Hi! [Vipul](https://www.saeloun.com/team/vipul) here with the latest updates for This Week in Rails!

[Rails World CFP](https://rubyonrails.org/2024/2/5/rails-world-2024-cfp-is-open)  
Call for Papers is now open for The Rails World 2024 conference that will be held in Toronto, Canada this year.
The CFP will remain open until 21st March.
Head over [here](https://sessionize.com/rails-world/) to submit your proposal!  

[Generate devcontainer files by default](https://github.com/rails/rails/pull/50914)   
This change generates a `.devcontainer` folder and its contents when creating a new app.
The `.devcontainer` folder includes everything needed to [boot the app and do development in a remote container](https://containers.dev/).
These files can be skipped using the `--skip-devcontainer` option.

[Add `ActiveRecord::Base.with_connection` as a shortcut for leasing a connection for a short duration](https://github.com/rails/rails/pull/51083)  
This change adds `ActiveRecord::Base.with_connection` as a shortcut for leasing a connection for a short duration.
The leased connection is yielded, and for the duration of the block, any call to `ActiveRecord::Base.connection` will yield that same connection.
This is useful to perform a few database operations without causing a connection to be leased for the entire duration of the request or job.

[Support encrypting binary columns](https://github.com/rails/rails/pull/50920)  
Previously encrypting binary columns with the `ActiveRecord::Encryption::MessageSerializer` incidentally worked for MySQL and SQLite, but not PostgreSQL.
This change adds proper support now for encrypting binary columns types.


[Suggest puma-dev configuration in bin/setup ](https://github.com/rails/rails/pull/51088)   
Rails now suggest [puma-dev](https://github.com/puma/puma-dev) as the golden path for developing multiple Rails applications locally, if you're not using Docker.
`bin/setup` has now been updated to suggest how to get that setup.

[Add .test to default allowed host in development mode](https://github.com/rails/rails/pull/51087)   
Continuing on support for [puma-dev](https://github.com/puma/puma-dev) this change adds ".test" as a default allowed host in development to ensure a smooth setup.



_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-02-10%7D...main@%7B2024-02-16%7D)._  
_We had [30 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240110-20240116) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
