---
layout: post
title: "This Week in Rails: New credentials configuration, bugfixes and more!"
categories: news
author: GregMolnar
published: true
date: 2017-09-23
---

Hi there! It's [Greg](https://twitter.com/GregMolnar), bringing you a double-edition of This Week in Rails!

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20170910-20170922)

28 people contributed to Rails the past two weeks! If you'd like to join them, why not check out the list of [open issues](https://github.com/rails/rails/issues)?

### [Rails 4.2.10.rc1 released](https://rubyonrails.org/2017/9/20/Rails-4-2-10-rc1-released)

Although Rails 4.2 is not officially supported anymore, this release fixes some regressions introduced by the previous one. If no new regressions found, the final should be released mid next week.

### [Introducing config/credentials.yml.enc ](https://github.com/rails/rails/pull/30067)

Rails 5.2 will introduce a new credentials configuration file to store encrypted data like API keys and the secret key base. This will eventually replace Rails.application.secrets and the encrypted secrets introduced in Rails 5.1.

### [Add with_attached_* scope](https://github.com/rails/rails/pull/30629/files)

To avoid N+1 queries when using Active Storage, this PR added _with\_attached\_\* scope_ to the _has\_one\_attached_ macro.

### [ActiveRecord::Associations::Preloader memoization improvement](https://github.com/rails/rails/pull/30564)

With this change the association pre-loader became slightly faster.

### [Implement change_table_comment and change_column_comment for MySQL](https://github.com/rails/rails/pull/30677)

_change\_table\_comment_ and _change\_column\_comment_ are implemented for the MySQL adapter as well now.

### [Fix Active Storage direct upload in Firefox](https://github.com/rails/rails/pull/30568)

Direct upload in Firefox was not working because it can’t handle click events on _input[type=submit]_, but this PR fixed the problem.

### [Capybara puma server configuration fix](https://github.com/rails/rails/pull/30638)

This PR fixes an issue when the config/puma.rb configuration is loaded for system tests.

That's it for this now! As always, there isn't enough time to cover every change if you'd like check out the [full list of changes](https://github.com/rails/rails/compare/master@%7B2017-09-09%7D...@%7B2017-09-22%7D) yourself.
