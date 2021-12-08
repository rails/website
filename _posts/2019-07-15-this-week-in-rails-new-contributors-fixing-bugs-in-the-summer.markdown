---
layout: post
title: "New contributors fixing bugs in the summer"
categories: news
author: dodecadaniel
published: true
date: 2019-07-15
---

Hey all! This is [Daniel](https://twitter.com/dodecadaniel) from Brooklyn, NY bringing you the latest news in Rails.

### [Add database_exists? method to connection adapters](https://github.com/rails/rails/pull/36471)

The database_exists? method does what you might think—it checks whether a database exists. This will help in resolving some inconsistencies between SQLite and the other database adapters.

### [Share column and table names between connections](https://github.com/rails/rails/pull/36637)

Sharing is a beautiful thing. Since connection instances are likely to share table and column names, we can store them on the class instead of on each instance. Isn't that nice?

### [Fix query cache when using shared connections](https://github.com/rails/rails/pull/36618)

Congratulations to Heinrich on their first commit to Rails!

### [Fix bug when combining `order` with `exist?`](https://github.com/rails/rails/pull/36647)

Congratulations to Takayuki on their first commit to Rails!

[21 people](https://contributors.rubyonrails.org/contributors/in-time-window/20190707-20190714) contributed to Rails in the last week. Want to see your name on that list? Check out the list of [issues](https://github.com/rails/rails/issues) here.  
  
Be well!
