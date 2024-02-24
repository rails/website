---
layout: post
title: "Rails security releases, Improved generator option handling and more..."
categories: news
author: Emmanuel Hayford
published: true
date: 2022-07-15
---

Hi! [Emmanuel](https://twitter.com/siaw23) here with updates from Rails over the last week.

[Rails Versions 7.0.3.1, 6.1.6.1, 6.0.5.1, and 5.2.8.1 have been released!](https://discuss.rubyonrails.org/t/cve-2022-32224-possible-rce-escalation-bug-with-serialized-columns-in-active-record/81017)
A few days ago Rails released versions 7.0.3.1, 6.1.6.1, 6.0.5.1, and 5.2.8.1. These are security updates that impact applications that use serialised attributes on Active Record models. These updates, identified by CVE-2022-32224 cover a possible escalation to RCE when using YAML serialised columns in Active Record.

[Allow opting out of the SameSite cookie](https://github.com/rails/rails/pull/45501)
You can now opt out of using _SameSite_ on your cookies by passing _same\_site: nil_.

[Improve generator implied option handling](https://github.com/rails/rails/pull/45520)
_AppGenerator_ and _PluginGenerator_ implied options have gotten some improvements: Implied options will now be reported in your shell. Conflicting options will raise an error. Meta options and _--no-\*_ options are reported with more precision.

[Add Formatting Full Messages with I18n section in ActiveRecordValidations guides](https://github.com/rails/rails/pull/45470)
Rails Guides received some love. There's now a section on the Active Record Validations guides to demonstrate how full validation messages can be formatted with the help of I18n.

[Add --parent option to job generator to specify parent class of job](https://github.com/rails/rails/pull/45528)
There's now a superclass option in the job generator. It's possible to do _bin/rails g job process\_payment --parent=payment\_job_ to get _class ProcessPaymentJob \< PaymentJob; end_.

[Add include\_seconds option to datetime\_local\_field](https://github.com/rails/rails/pull/45188)
According to [input elements of type time](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time#time_value_format) browsers render time differently if you format time without the seconds bit. This PR adds an option to omit the seconds part of formatted time with _include\_seconds: false_.

[Add timestamptz as a time zone aware type for PostgreSQL](https://github.com/rails/rails/pull/44601)
Previously, support for the _timestamptz_ type on the Postgres adapter was added, this caused issues in some cases where the newly-added _timestamptz_ was not considered timezone-aware attribute. This PR fixes the issue for Postgres users.

[Common Table Expression support added "out-of-the-box](https://github.com/rails/rails/pull/37944)
You can now build sophisticated queries with Common Table Expressions using the _.with_ query method on models. The _.with_ allows the usage of Active Record relations without the need to manually build _Arel::Nodes::As_ nodes.

[Add ActiveRecord::Base::generates\_token\_for](https://github.com/rails/rails/pull/44189)
With this PR, _signed\_id_ is relieved of token generation. Token generation is now directly associated with a record allowing record state to be tracked easily.

[Add quarter to date/time](https://github.com/rails/rails/pull/45009)
_DateAndTime::Calculations_ gets a new method, _quarter_, that returns the quarter of the receiver's calendar year. Here are some examples: _Date.new(2010, 12, 25).quarter # =\> 4_ and _Date.new(2010, 4, 12).quarter&nbsp; # =\> 2_.

[32 people contributed to Rails](https://contributors.rubyonrails.org/contributors/in-time-window/20220704-20220715) since the last time. Until next time!

