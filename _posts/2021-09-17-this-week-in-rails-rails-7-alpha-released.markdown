---
layout: post
title: "Rails 7 alpha released"
categories: news
author: morgoth85
published: true
date: 2021-09-17
---

Hi, [Wojtek](https://twitter.com/morgoth85) here with more new Rails 7 changes.

### [Rails 7.0 alpha released](https://rubyonrails.org/2021/9/15/Rails-7-0-alpha-1-released)

The new Rails frontend approach and all the other new goodies can already be checked in this release.

### [Introduce ActiveModel::API](https://github.com/rails/rails/pull/43223)

Make _ActiveModel::API_ the minimum API to talk with Action Pack and Action View. This will allow adding more functionality to _ActiveModel::Model_.

### [Add support for generated columns in PostgreSQL](https://github.com/rails/rails/pull/41856)

Generated columns are supported since version 12.0 of PostgreSQL. This adds  
&nbsp;support of those to the Active Record PostgreSQL adapter.

### [Generate less initializers in new/upgraded Rails apps](https://github.com/rails/rails/pull/42538)

Removed configurations are set by the default Rails configuration and can be still changed when needed.

### [Use correct precision when touching updated_at column in upsert ](https://github.com/rails/rails/pull/42993)

_CURRENT\_TIMESTAMP_ provides differing precision depending on the database,  
 and not all databases support explicitly specifying additional precision. Instead, delegate to the new _connection.high\_precision\_current\_timestamp_  
 for the SQL to produce a high precision timestamp on the current database.

[13 people](https://contributors.rubyonrails.org/contributors/in-time-window/20210913-20210917) contributed to Rails since last time. All the changes can be checked [here](https://github.com/rails/rails/compare/@%7B2021-09-13%7D...main@%7B2021-09-17%7D). Until next week!
