---
layout: post
title: "Improved assert_redirected_to, improved error messages and more!"
categories: news
author: gregmolnar
published: true
date: 2022-09-23
---

Hi, this is [Greg](https://twitter.com/gregmolnar), bringing you the latest changes in the Rails framework.

[Allow specifying the HTTP status code in assert\_redirected\_to](https://github.com/rails/rails/pull/46057)
Before this change, _assert\_redirect\_to_ asserted any _3XX_ response, but with this change, it is possible to assert a specific response code, like _301_.

[Allow passing classes to dom\_id](https://github.com/rails/rails/pull/46068)
Allowing _dom\_id_ to receive a Ruby class, instead of an instance of a class, makes it behave like _dom\_class_, and besides saving a few keystrokes, it saves memory too, because Ruby doesn't need to instantiate an entire object with all its callbacks and such.

 [Improve error messages on bin/setup
](https://github.com/rails/rails/pull/46064)Changing _bin/setup_ to use _system(..., exception: true)_ gives more information when a command fails, and makes debugging easier.

[Allow to pass --force to db:system:change
](https://github.com/rails/rails/pull/46086)_db:system:change_ always prompts to confirm the overwriting of _database.yml_, but now there is a _--force_ option to skip the confirmation prompt.

[Turbo 7.2.0 was released](https://github.com/hotwired/turbo/releases/tag/v7.2.0)
There is a new release for Turbo, which is also available via _turbo-rails 1.3.0_. You can read the list of changes on the link above.

We had [24](https://contributors.rubyonrails.org/contributors/in-time-window/20220917-20220923) contributors to Rails this week! If you want to be part of that, checkout the [issues list](https://github.com/rails/rails/issues)!
Until next time!&nbsp;

<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
