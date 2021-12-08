---
layout: post
title: "Schema dump fix and database task creation improvements!"
categories: news
author: gregmolnar
published: true
date: 2019-07-06
---

Hi there. This is [Greg](https://twitter.com/gregmolnar) bringing you latest news from the Rails world. We had a quiet week, so I won't take long.

### [Fix schema dumping for enum and set columns in MySQL](https://github.com/rails/rails/pull/36604)

With this change Active Record will use the _sql\_type_ rather than _type,_ in the database dump for _enum_ and _set_ columns to make sure they use the correct type.

### [Warn if database tasks can't be created](https://github.com/rails/rails/pull/36560)

With this change, Rails loads the initial database.yml once, and warns if it can't create tasks. This is important for multiple databases, where the tasks are created for every database, but to create those Rails needs to read the list from database.yml.

[9 people](https://contributors.rubyonrails.org/contributors/in-time-window/20190701-20190706) contributed to Rails in the last week, if you want to be one of them, check out the list of [issues](https://github.com/rails/rails/issues) here.

Until next time!
