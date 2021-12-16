---
layout: post
title: "Ruby 2.7.0, Rails 6.0.2.1 and more"
categories: news
author: morgoth85
published: true
date: 2019-12-27
---

Hello, this is&nbsp;[Wojtek](https://twitter.com/morgoth85)&nbsp;reporting on last month additions to Rails codebase.

### [Ruby 2.7.0 released](https://www.ruby-lang.org/en/news/2019/12/25/ruby-2-7-0-released)

The last minor version of Ruby 2.7 before 3.0 release in the next year. Rails codebase is constantly updated to support Ruby 2.7 without any warnings.

### [Rails 6.0.2 released](https://rubyonrails.org/2019/12/13/Rails-6-0-2-has-been-released)

Followed by security fix releases [5.2.4.1](https://rubyonrails.org/2019/12/18/Rails-5-2-4-1-has-been-released) and [6.0.2.1](https://rubyonrails.org/2019/12/18/Rails-6-0-2-1-has-been-released)

### [Track Active Storage variants in the database](https://github.com/rails/rails/pull/37901)

Optimization and bug fix by avoiding existence checks in the storage service.

### [Conditional values in Tag Builder](https://github.com/rails/rails/pull/37872)

Handy addition to clean up common use case with constructing class names when creating content tags.

### [Add class_names view helper](https://github.com/rails/rails/pull/37918)

As a follow-up to conditional values in _Tag Builder_, to ease even more constructing class names on views.

### [Deep merge of shared configuration in config_for method](https://github.com/rails/rails/pull/37913)

From now on _config\_for_&nbsp;will deeply merge shared configuration section with environment specific one.

[76 people](https://contributors.rubyonrails.org/contributors/in-time-window/20191202-20191227) contributed to Rails since last time. Check out [the detailed list of all changes](https://github.com/rails/rails/compare/master@%7B2019-12-02%7D...@%7B2019-12-27%7D).  
Happy new year!
