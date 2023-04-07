---
layout: post
title: "A new conference, new Action Mailer callbacks and more!"
categories: news
author: Greg
published: true
date: 2023-04-07
---


Hi, it's [Greg](https://greg.molnar.io), bringing you the latest news about Ruby on Rails.

We have exciting news from the Rails Foundation! The first-ever Rails World Conference is coming! Join the community on October 5 & 6 in Amsterdam, Netherlands,  for keynotes, technical sessions, and all things Rails. A website with tickets and a CFP is coming soon!
You can read the announcement [here](https://rubyonrails.org/2023/4/6/rails-world-is-coming).

[Reset composite primary key in _#dup_](https://github.com/rails/rails/pull/47872)  
This pull request ensures that the composite primary key is reset when `#dup` is called on an instance of an `ActiveRecord::Base` subclass.
  
For example:
```ruby
class TravelRoute < ActiveRecord::Base
  self.primary_key = [:origin, :destination]
end

route = TravelRoute.new(origin: "NYC", destination: "LAX")
route.dup # => #<TravelRoute origin: nil, destination: nil>
```

[Ensure pre-7.1 migrations use legacy index names when using create_table](https://github.com/rails/rails/pull/47863)  
A follow-up to [47753](https://github.com/rails/rails/pull/47753) ensures the older versions of Active Record will use the legacy index names rather than the new truncated ones.
  

[Correctly dump check constraints for MySQL 8.0.16+](https://github.com/rails/rails/pull/47851)  
If you're using MySQL 8.0.16+ and your database contains a table with a check constraint, the first and last characters of the constraint will be stripped when dumping the schema. This makes it impossible to use check constraints in a MySQL 8.0 database with the :ruby schema format, because once they are dumped, they cannot be re-imported. 
The change in this pull request fixed the issue.


[Only default to select primary key when non-composite](https://github.com/rails/rails/pull/47836)  
Historically, when a relation is handled in the predicate builder has no selected values, it falls back to selecting the model's primary key. This tends to work well in single-column primary key cases. In composite key cases, this can lead to attempting to compare a single attribute to a list of attributes, which builds malformed SQL.
The check this pull request added prevents any code from attempting to do so, by raising in composite primary key cases when defaulting to primary key. For now, users can build these queries themselves. 

[Add _*_deliver_ callbacks for Action Mailer](https://github.com/rails/rails/pull/47630)  
This pull request adds deliver callbacks (e.g. `before_deliver`, `after_deliver`, `around_deliver`) to Action Mailer. The benefit is that it allows delivery observer/interceptor-like behaviors within the context of the instance of `ActionMailer::Base` rather than operating only on the Mail object.

[Active Job verbose logging](https://github.com/rails/rails/pull/47839)  
A `verbose_enqueue_logs` configuration option is added to Active Job to display the caller of background job enqueue in the log to help with debugging.
It is enabled in development only for new and upgraded applications. Not recommended for use in the production environment since it relies on Ruby's `Kernel#caller` which is fairly slow.

_There were a lot of documentation-related changes I didn't cover, you can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-03-31%7D...main@%7B2023-04-07%7D)._  
_We had [21 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230331-20230407) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
