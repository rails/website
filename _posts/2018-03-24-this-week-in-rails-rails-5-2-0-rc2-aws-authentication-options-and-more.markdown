---
layout: post
title: "Rails 5.2.0.RC2, AWS authentication options and more"
categories: news
author: morgoth85
published: true
date: 2018-03-24
---

Hello fellow Rubyists, this is [Wojtek](https://twitter.com/morgoth85) bringing you the polished set of latest Rails news.  
We do like to "polish" things here in Poland ;-)

### [Rails 5.2.0.RC2 released](https://rubyonrails.org/2018/3/20/Rails-5-2-RC2)

Aiming for 5.2.0 final version to be released before the RailsConf in April. Help us test it, to have a solid and stable release.  
  


### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20180318-20180324)

Big thanks to 16 people who contributed to Rails this week! If you'd like to join them, check out the list of [open issues](https://github.com/rails/rails/issues).

### [Allow full use of the AWS S3 SDK authentication options](https://github.com/rails/rails/commit/c1600009b2bbb3b67db20ddb14fef34d4cfa82bc)

It's now possible to use environment variables and IAM roles to authenticate to AWS in Active Storage.

### [Support mysql2 gem version 0.5](https://github.com/rails/rails/commit/9f5477af93d18e9644903f89bce4ffde13cc376e)

New version of mysql2 gem brings some bugfixes and features but also some backward incompatibilites. Check them out in [changelog](https://github.com/brianmario/mysql2/releases/tag/0.5.0).

### [Memoize the result of calculating path to translation](https://github.com/rails/rails/commit/05eaa07627376626902bd7acde35406edf1bb2f2)

Speeds up usage of **I18n.translate**. Benchmark included in the comments.  
  


### [Use ASCII-8BIT paths in ActionDispatch::Static](https://github.com/rails/rails/commit/2ef145883348e92c9e6393ece9b6967e3a5a80c7)

Fixes encoding incompatibilites between Rack and Rails middlewares.  
  


### [Remove support for Qu gem from Active Job](https://github.com/rails/rails/commit/6ef720791d6532a107f4777edfe1d708b6b9c068)

Qu gem wasn't compatible since Rails 5.1. Development was stopped in 2014 and maintainers have confirmed its demise.  
  


There were many more changes to Rails' codebase, which you can check out [here](https://github.com/rails/rails/compare/master@%7B2018-03-18%7D...@%7B2018-03-24%7D).  
Until next week!
