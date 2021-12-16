---
layout: post
title: "Security fixes, bulk insert and upsert, seeds replanting"
categories: news
author: morgoth85
published: true
date: 2019-03-15
---

Hello. This is [Wojtek](https://twitter.com/morgoth85) here bringing you the exciting updates from Rails.

### [Security fix releases of Rails](https://rubyonrails.org/2019/3/13/Rails-4-2-5-1-5-1-6-2-have-been-released)

Rails 4.2.11.1, 5.0.7.2, 5.1.6.2, 5.2.2.1, and 6.0.0.beta3 have been released containing important security fixes. Note that with 6.0 release only Rails 6.x.y and Rails 5.2.x are guaranteed to receive both major and minor security fixes by Rails core.

### [Active Record adds "insert_all" and "upsert_all" methods](https://github.com/rails/rails/pull/35077)

It's now possible to insert many records at once within one SQL statement. You can check summary of this feature in Josef's [blog post](https://medium.com/@retrorubies/upcoming-rails-6-bulk-insert-upsert-feature-2d642419557d).

### [Rails command "db:seed:replant" added](https://github.com/rails/rails/pull/34779)

Bring back clean state of database seeds with this simple command without redoing the database structure.

### [Active Support adds Enumerable "including" method](https://github.com/rails/rails/commit/bfaa3091c3c32b5980a614ef0f7b39cbf83f6db3)

Self-explained by an example:
```
[ 1, 2, 3 ].including(4, 5) => [ 1, 2, 3, 4, 5 ]
```
For parity, method `without` was renamed to `excluding`.

[54 people](https://contributors.rubyonrails.org/contributors/in-time-window/20190303-20190315) contributed to Rails in the last 2 weeks. You can see the [full list of changes here](https://github.com/rails/rails/compare/master@%7B2019-03-03%7D...@%7B2019-03-15%7D).  

Until next time!
