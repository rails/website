---
layout: post
title: "Dart Sass for Rails, Fiber-aware connection pool and more!"
categories: news
author: robin850 
published: true
date: 2022-02-05
---

Hi, this is Greg and Robin, bringing you the latest news from the Rails world.  
  
[**Dart Sass for Rails**](https://github.com/rails/dartsass-rails)  
As Ruby Sass has been deprecated a long time ago and since Webpacker has been retired, a new gem that wraps the standalone executable version of the Dart version of Sass has been released and makes it easy to use Sass stylesheets with Rails 7.  
  
[**Add ActiveSupport::TestCase#stub\_const**](https://github.com/rails/rails/pull/44294)  
As some sort of syntax sugar, a new _#stub\_const_ method has been added to easily change the value of a constant for the duration of a block, silencing warnings. The implementation is not thread-safe if you have parallel testing enabled though.  
  
[**Improve error message using #associated with no reflection**](https://github.com/rails/rails/pull/44227)  
Using _where.associated_ with a missing association used to raise a cryptic error message; this has now been improved with a much clearer message.  
  
[**Optimize Object#instance\_values**](https://github.com/rails/rails/pull/44258)  
The performance of _as\_json_&nbsp; have been improved by using _Array#to\_h_ instead of _Hash::[]_ and freezing the strings so _Hash#[]_ doesn't have to dup them. [Another patch](https://github.com/rails/rails/pull/44257) has also been merged to reduce the number of allocations done calling this method.  
  
[**Improve ActiveModel::Name#human performance**](https://github.com/rails/rails/pull/44299)  
Other performance improvements have been made on model name translation when a translation is missing. The trick here is pretty simple: caching. [Another patch](https://github.com/rails/rails/pull/44300) that improves performances on _#human\_attribute\_name_ has been merged as well.  
  
[**Expand documentation on bi-directional associations**](https://github.com/rails/rails/pull/44222)  
As we are continuously learning, we might forget how it felt when we begun. This pull request improves documentation on bi-directional associations with some concrete examples that might be useful for new learners. Lovely!  
  
 [**Make ActiveRecord::ConnectionPool Fiber-safe**](https://github.com/rails/rails/pull/44219)  
Last but not least, the Active Record connection pool is now fiber-safe. It now honors the value of your _config.active\_support.isolation\_level_ to either rely on threads or fibers. This should give you better throughput on fiber-oriented servers like Falcon.  
  
Since last time, [38 people](https://contributors.rubyonrails.org/contributors/in-time-window/20220121-20220205) contributed to Rails. As usual, there's too much changes to cover them but you can check out all of these [here](https://github.com/rails/rails/compare/main@%7B2022-01-21%7D...main@%7B2022-02-05%7D). Until next time!  
  

