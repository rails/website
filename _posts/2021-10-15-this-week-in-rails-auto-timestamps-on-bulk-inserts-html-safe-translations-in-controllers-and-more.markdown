---
layout: post
title: "Auto timestamps on bulk inserts, HTML safe translations in controllers and more"
categories: news
author: morgoth85
published: true
date: 2021-10-15
---

Hey, [Wojtek](https://twitter.com/morgoth85) here with last week updates from the Ruby on Rails world.

### [Set timestamps on insert\_all/upsert\_all record creation](https://github.com/rails/rails/pull/43003)
The timestamps will be automatically set when using bulk insert/upsert. This behaviour can be disabled by the _record\_timestamps_ config on the model class.

### [Treat html suffix in controller translation](https://github.com/rails/rails/pull/43415)
When translation key ending with \__html_ is used it will be marked as HTML safe in the same way as in the views.

### [Add support for FILTER clause to Arel](https://github.com/rails/rails/pull/40491)
Can be used with PostgreSQL and SQlite databases to use [FILTER clause](https://modern-sql.com/feature/filter).

### [Better Action Text plain text output for nested lists](https://github.com/rails/rails/pull/37976)
Fixed an issue with how nested lists were displayed when converting to plain text.

### [Add support for custom CSRF strategies.](https://github.com/rails/rails/pull/43444)
Can be used via _protect\_from\_forgery with: CustomStrategy_ among built in options: _exception, reset\_session, null\_session_.

### [Clear secure password cache if password is set to nil](https://github.com/rails/rails/pull/43378)

    user.password = 'something'
    user.password = nil
    # before:
    user.password # => 'something'    
    # now:
    user.password # => nil  

[29 people](https://contributors.rubyonrails.org/contributors/in-time-window/20211010-20211015) contributed to Rails since the last time. All the changes can be checked [here](https://github.com/rails/rails/compare/@%7B2021-10-11%7D...main@%7B2021-10-15%7D). Until next week!
