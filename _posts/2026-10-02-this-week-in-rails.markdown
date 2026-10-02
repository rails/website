---
layout: post
title: "Rails World recordings are online, new minimum Ruby version and more!"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-10-02
---


Hi, it's [Greg](https://greg.molnar.io). Let's explore this week's changes in the Rails codebase.

[The Rails World talk recordings are online](https://www.youtube.com/watch?v=vDjW_dRyKXY)  
Blazing fast, one week after the event, you can watch all the talks from Rails World on YouTube!

["Autoloading and Reloading" guide community review](https://github.com/rails/rails/pull/58861)  
The updated "Autoloading and Reloading" guide is ready for community review. Please have a loook and give feedback.

[Bump minimum Ruby version to 3.3.5](https://github.com/rails/rails/pull/58908)  
This commit bumps the minimum Ruby version to 3.3.5 so the WeakKeyMap polyfill can be removed, which would allow using non-Thread/Fiber/etc. as keys, and enable a refactor to prevent iterating over every connection pool.

[Remove support for dynamic controller/action in routes](https://github.com/rails/rails/pull/58893)  
A route may no longer read the controller or the action out of the URL:

```ruby
get ":controller(/:action(/:id))"
```
A route that contains dynamic controller and action will raise an `ArgumentError`. This has been deprecated since Rails 5.0, so it's time to go!
You should rewrite your routes like this:
```ruby
get "photos", to: "photos#index"
get "photos/:id", to: "photos#show"
```

[Fix error matching for validations using except_on](https://github.com/rails/rails/pull/58876)  
This pull request adds `:except_on` to `ActiveModel::Error::CALLBACKS_OPTIONS`, alongside `:on`. This makes the existing filtering logic treat it consistently with the other validation callback options.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-09-25%7D...main@%7B2026-10-02%7D)._  
_We had [34 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260925-20261002) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
