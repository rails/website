---
layout: post
title: "Nested attributes for delegated types, improved performances and more!"
categories: news
author: robin850
published: true
date: 2021-11-07
---

Hey! [Robin](https://github.com/robin850) here with the latest news from the Ruby on Rails world.  
  
[Support accepts\_nested\_attributes\_for for delegated types](https://github.com/rails/rails/pull/41717)  
Rails 6.1 introduced delegated types to ease handling some polymorphic relationships. This pull request makes using `accepts_nested_attributes_for` on such types a piece of cake.  
  
[Use nested queries doing UPDATE with GROUP BY and HAVING on MySQL](https://github.com/rails/rails/pull/43465)  
Since MySQL doesn't support `UPDATE` with `GROUP BY` and `HAVING` clauses, this patch fixes such scenario to rely on a sub-query. A [similar patch](https://github.com/rails/rails/pull/43580) has been merged to deal with `DELETE` queries.  
  
[Raise a specific error on unsafe redirects](https://github.com/rails/rails/commit/c3758a71af949db849d5b7f176677653e4e4fae9)  
Rails 7.0 prevents redirects to other hosts than the current one unless you explicitly ask it to. In case of unsafe redirects, an `ArgumentError` was raised. Now, the error is more specific, allowing you to rely on a `rescue_from` block to deal with such cases.  
  
[Add `url_from` to check if an URL is internal](https://github.com/rails/rails/pull/43327)  
In line with the previous patch, a new `url_from` method is available in controllers to check whether an URL is internal or not, simplifying the way to provide an alternative in case it is not.  
  
[Improved Active Job test helpers error messages](https://github.com/rails/rails/pull/43554)  
This is the kind of little changes that make life easier. The error messages of `assert_enqueued_with` and `assert_performed_with` have been improved to ease debugging when the assertion failed. Happy testing!  
  
 [Optimize `ActiveSupport::CurrentAttributes` method generation](https://github.com/rails/rails/pull/43584)  
It's always lovely to see performance optimizations. This patch is about method generation of classes inheriting from `ActiveSupport::CurrentAttributes`. The trick here is to generate the code as a string rather than relying on a closure.  
  
[13 people](https://contributors.rubyonrails.org/contributors/in-time-window/20211101-20211106) contributed to Rails since last time. All the changes can be checked [here](https://github.com/rails/rails/compare/@%7B2021-11-01%7D...main@%7B2021-11-06%7D). Until next week!

