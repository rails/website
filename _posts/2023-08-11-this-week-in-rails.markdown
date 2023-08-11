---
layout: post
title: "A new release, Action Mailer preview empty states, bugfixes and more!"
categories: news
author: gregmolnar
published: true
date: 2023-08-11
---


Hi, it's [Greg](https://greg.molnar.io), bringing you the latest changes in the Rails codebase.

[Introducing the Rails Luminary Awards: Nominations Now Open](https://rubyonrails.org/2023/8/8/introducing-rails-luminaries)  
Starting at Rails World in October, the Rails Foundation will establish a new tradition of celebrating Rails Luminaries- people who've contributed to the Rails ecosystem and community with exceptional code, documentation, enthusiasm, or assistance, thereby helping others do more, learn more, or be inspired.  
You can submit your 2023 Rails Luminary nomination [here](https://app.todohelpers.com/forms/f217db04-3b7d-4d20-9df7-75a5ec3acc3c).

[Rails 7.0.7 has been released](https://rubyonrails.org/2023/8/10/Rails-7-0-7-has-been-released)  
There is a new minor release for Rails 7 with minor fixes and improvements.

[Removes Webpacker from the guides index page](https://github.com/rails/rails/pull/48897)  
As a follow-up to the deprecation of Webpacker, it is removed from the Rails Guides in this pull request.

[Action Mailer Preview empty states](https://github.com/rails/rails/pull/48888)  
When an application defines mailers without any corresponding previews, requests to `GET /rails/mailers` return a page with a blank `<body>` element.  
Similarly, when an ActionMailer::Preview subclass is defined, but doesn't declare any actions, the response contains a mostly empty page.  
This pull request renders empty-state messaging for both scenarios, and links to the Action Mailer Basics guides.

[Fix NoMethodError when request Content-Type is blank.](https://github.com/rails/rails/pull/48887)  
This pull request changes the mime type lookup to use the safe navigation operator on the call to `rstrip` to handle the case when a client makes a request with a blank Content-Type header.

[Adds _Arel::FactoryMethods#cast(node, type)_](https://github.com/rails/rails/pull/48873)  
`CAST(field as type)` is a widely supported SQL function. This pull request adds native Arel support for this named function with a `cast(field, type)` helper. Example of usage:

```
Product.arel_table.cast(product_table[:position], "integer")
# produces: CAST("products"."position" as integer)
```

[Rename _fixture_file_upload_ method to _file_fixture_upload_](https://github.com/rails/rails/pull/48857)  
This pull request renames the `fixture_file_upload` method to `file_fixture_upload` to match the order of words in `file_fixture` and `file_fixture_path`.  
To preserve backward compatibility, it declares a `fixture_file_upload` alias to be preserved into the future.

[Active Storage mirror uploads should be asynchronous](https://github.com/rails/rails/pull/48718)    
When you define a Mirror service in `storage.yml` , the upload to the mirror actually happens inline, instead of using `ActiveStorage::MirrorJob`.  
This slows down any uploads to the service, because it is performed `n` times (`n` being the number of mirrors), inline, instead of using the `ActiveStorage::MirrorJob`.  
This pull request changes this behavior to only upload the file to the primary service synchronously and then enqueue a job to upload the file to the mirrors asynchronously.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-08-04%7D...main@%7B2023-08-11%7D)._
_We had [22 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230804-20230811) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
