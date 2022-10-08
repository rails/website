---
layout: post
title: "Handling reconnects in Action Cable, no more Coffeescript and a new guide."
categories: news
author: petrik
published: true
date: 2022-09-17
---

Hi, this is [Petrik](https://twitter.com/four54) with this week's Rails updates and some Hotwire news.


[Add exclude? method to ActionController::Parameters](https://github.com/rails/rails/pull/45887)

_exclude?_ returns _true_ if the given key is not present in the parameters. It is the inverse of _include?._
Adding this method keeps things a little more consistent with a Hash.


    params = ActionController::Parameters.new(id: 1)
    params.exclude?(:name) # => true
    params.exclude?(:id) # => false



[Add ability to handle reconnects with the connected callback](https://github.com/rails/rails/pull/45738)

If a subscriber misses some messages when the connection is lost, this allows them to handle reconnects with the _connected()_ callback.


    consumer.subscriptions.create("ExampleChannel", {
      connected({reconnected}) {
        if (reconnected) {
          ...
        }
        else {
          ...
        }
      }
    });



[Add Puma to an engine's Gemfile](https://github.com/rails/rails/pull/45950)

With the [removal](https://github.com/ruby/ruby/pull/3729)of WEBrick from the Ruby standard library, the dummy application in an engine would not start. Adding Puma to the Gemfile makes sure it works out-of-the-box.


[Add ssl-mode option to dbconsole command and MySQLDatabaseTasks](https://github.com/rails/rails/pull/46008)

For MySQL, verifying the identity of the database server requires setting the ssl-mode option to VERIFY\_CA or VERIFY\_IDENTITY. This option was previously ignored for the dbconsole command and database tasks like creating a database.


[Convert rails-ujs to ES2015 modules](https://github.com/rails/rails/pull/45546)

The rails-ujs code base was the only Coffeescript left in the Rails code base. It has now been migrated to use ES2015 modules and Rollup instead.


[Add the Error Reporter Guide](https://github.com/rails/rails/pull/45946)
In Rails 7.0 an [error reporter](https://github.com/rails/rails/pull/43625) interface was introduced. It provides a generic interface to report errors, with an adapter API to allow using the service of your choice.
It now has its own guide!


Rails had [23 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20220910-20220917) since last week.

In the Hotwire world there was a new release for Turbo this week:&nbsp; [v7.2.0-rc.2](https://github.com/hotwired/turbo/releases/tag/v7.2.0-rc.2).

That's it for this week!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
