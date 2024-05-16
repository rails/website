---
layout: post
title: "Rails console improvements, assertionless tests reporting and more!"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-05-03
---


Hi, it's [Greg](https://greg.molnar.io). Let's explore this week's changes in the Rails codebase.

[Build Rails console on top of IRB's latest official APIs](https://github.com/rails/rails/pull/51705)  
The Rails console is built on top of IRB, but due to the lack of an extension API, it was extending it with monkey patches. Since IRB received a lot of improvements and an extension API recently, this pull request changes the Rails console to be built on top of that. This will make the Rails helpers show up in the help message among others wins.

[Turn app:update into a command to add --force](https://github.com/rails/rails/pull/51690)  
This pull request changes the `app:update` task to be a Rails command, and then adds the `--force` flag to it, to allow running `bin/rails app:update` while accepting all the changes it makes.

[Fix count queries on `includes+references` for models with composite primary keys](https://github.com/rails/rails/pull/51655)  
Since SQLite and older MySQL do not support using `COUNT DISTINCT` with multiple columns, running a count query with composite primary keys caused an error. This pull request changes them to use a subquery.

[Allow assertionless tests to be reported](https://github.com/rails/rails/pull/51625)  
It is very easy to write a "false positive" broken test that actually tests nothing (or can become such in the future). A simple example:
```ruby
def test_active
  active_users = User.active.to_a
  active_users.each do |user|
    assert user.active?
  end
end
```

The assertion is only run if the scope returns at least one user. The change in this pull request allows to easily detect when such assertion is not run. 
With the following configuration, assertionless tests will be marked as failed and not silently pass.

```ruby
config.active_support.assertionless_tests_behavior = :raise # also available :ignore and :log
```

[Add support for recursive common table expressions in ActiveRecord](https://github.com/rails/rails/pull/51601)  
While Rails 7.1 has added support for writing Common Table Expressions(CTEs), this support does not extend to recursive CTEs.
This pull request adds a `QueryMethods#with_recursive` construct to enable recursive CTEs.

[Add a Date decoder to the PostgreSQL adapter ](https://github.com/rails/rails/pull/51483)  
This pull request adds a Date decoder to the PostgreSQL adapter to type cast dates at the connection level, so when a raw query is run, the columns will be cast to a date instead of a string. 
Before:
```ruby
ActiveRecord::Base.connection.select_value("select '2024-01-01'::date").class 
#=> String
```
After:
```ruby
ActiveRecord::Base.connection.select_value("select '2024-01-01'::date").class 
#=>  Date 
```

This change brings the PostgreSQL adapter to parity (for dates) with the Mysql2 adapter.

[Remove all deprecated code](https://github.com/rails/rails/pull/49624)  
All code deprecated in 7.1 is removed from the codebase in this pull request.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-04-26%7D...main@%7B2024-05-03%7D)._
_We had [30 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240426-20240503) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
