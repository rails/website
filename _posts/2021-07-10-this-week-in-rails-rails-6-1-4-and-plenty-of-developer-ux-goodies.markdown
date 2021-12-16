---
layout: post
title: "Rails 6.1.4 and plenty of developer UX goodies"
categories: news
author: zzak
published: true
date: 2021-07-10
---

Hi, [zzak](https://github.com/zzak) again with the changes from the last week in Rails.

### [Rails 6.1.4 was released](https://rubyonrails.org/2021/6/24/Rails-6-1-4-has-been-released)

This release includes many bug fixes so be sure to upgrade! You can read the full summary of changes [here](https://github.com/rails/rails/releases/tag/v6.1.4).

### [Deleting an item from the Middleware stack should raise if the item is not found](https://github.com/rails/rails/pull/42655)

A bug was fixed when trying to remove a non-existent middleware off the stack.

### [Generators should raise an error if an attribute has an invalid index](https://github.com/rails/rails/pull/42694)

An error is now raised in bin/rails when trying to generate a model with a misspelled "index" attribute.

### [config_for accepts root shared as an array](https://github.com/rails/rails/pull/42707)

A bug was fixed when using config\_for with a shared config that is defined as an array.

### [Handle error when file does not exist at filepath](https://github.com/rails/rails/pull/41283)

A more helpful error message is given when using `render: file` for a non-existent absolute path.

### [Handle paths with spaces when editing credentials](https://github.com/rails/rails/pull/42728)

This issue identifies a bug with trying to use `bin/rails credentials:edit` on Windows.

### [Truncate more ActionCable broadcast messages to 300 chars](https://github.com/rails/rails/pull/42726)

This PR is a follow-up to an older PR that tried to cut down on ActionCable logging noise in development.

### [Verify foreign keys after loading fixtures](https://github.com/rails/rails/pull/42674)

This PR introduces a new feature where referential integrity is applied to associations when loading fixtures.  
  
It only works for SQLite and Postgres for now, if anyone has idea how to make this work in MySQL.

[20 people](https://contributors.rubyonrails.org/contributors/in-time-window/20210703-20210710) contributed to Rails since last time. All the changes can be checked [here](https://github.com/rails/rails/compare/@%7B2021-07-03%7D...main@%7B2021-07-10%7D)[.](https://github.com/rails/rails/compare/@%7B2021-06-27%7D...main@%7B2021-07-02%7D) Until next week!
