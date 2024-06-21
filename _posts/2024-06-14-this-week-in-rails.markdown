---
layout: post
title: "New transaction event, bugfixes and more!"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-06-14
---


Hi, it's [Greg](https://greg.molnar.io). Let's explore this week's changes in the Rails codebase.

[Only sanitize _content_ attribute when present in attachments](https://github.com/rails/rails/pull/52093)  
A recent security fix introduced sanitizing the `content` attribute
of `ActionText::Attachable::ContentAttachment`. As a side effect it always
sets the attribute, even when it's missing, causing Trix to not show
the image preview. This pull request fixes that issue. 

[Bring back _puma.rb_ to target of _app:update_](https://github.com/rails/rails/pull/52086)  
Because Rails has improved `puma.rb` in the past a few times, `rails app:update`
will update the file in the future releases.

[Define the a _start_transaction.active_record_ event](https://github.com/rails/rails/pull/52080)  
With this change, a new `start_transaction.active_record` event will be emitted
when a transaction has been started. This event complements
`transaction.active_record`, which is triggered when they finish.

[Add _filter_ option on _in_order_of_](https://github.com/rails/rails/pull/51761)  
This pull request adds a `filter` option to `in_order_of` in Active Record to
prioritize certain values in the sorting without filtering the results by these
values. The same change was done to Enumerable as well in
[52072](https://github.com/rails/rails/pull/52072).

[Add an internal route for bin/rails notes](https://github.com/rails/rails/pull/49240)  
This pull request adds an internal route `rails/info/notes` to display the same
information you would get from running `bin/rails notes` so we can check the
notes on UI.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-06-07%7D...main@%7B2024-06-14%7D)._
_We had [37 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240607-20240614) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
