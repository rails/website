---
layout: post
title: "Happy New Year! Ruby 2.5, bugfixes, and more!"
categories: news
author: imtayadeway
published: true
date: 2018-01-08
---

Happy New Year, Rubyists on Rails! This is [Tim](https://twitter.com/imtayadeway) here bringing you all the latest in Rails from the Holiday and New Year period. We hope you got to unwind during this time of year (if that is your thing) and are well rested for all that 2018 has to bring. Rails, on the other hand, saw a flurry of activity including many, many bug fixes. So, without further ado.....

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20171217-20180106)

Since our last issue, 36 people gave the gift of Pull Request 🎁 to Rails. 6 of those contributed for the very first time! A big thank you to everyone who contributed during a time that is typically reserved for performing upgrades and fixes to extended family members' devices.

### [Ruby 2.5.0 added to Rails CI matrix](https://github.com/rails/rails/pull/31570)

Ruby 2.5.0 was released on December 25 2017, bringing many exciting changes. Rails has been confirmed to work with this new Ruby as it has been officially added to its testing matrix.

### [RailsConf 2018 CFP is now open](https://cfp.rubycentral.org/events/railsconf2018)

RailsConf is calling for proposals for its 2018 conference which will be held in Pittsburgh. The deadline is January 19th, so now's the time to get that proposal in!



### [Add bulk ALTER support for PostgreSQL](https://github.com/rails/rails/pull/31331)

Bulk ALTER support has existed for MySQL's adapter for many years. This change adds support for the PostgreSQL adapter, meaning that multiple column changes can now be aggregated into a single statement.



### [Add support for combined MiniMagick transformations](https://github.com/rails/rails/pull/31544)

This change added support for MiniMagick's [combine\_options](http://www.rubydoc.info/github/minimagick/minimagick#Combine_options), allowing Active Storage to apply changes like center-weighted cropping that combine multiple options into a single step.

### [Fix infinity value in PostgreSQL range type](https://github.com/rails/rails/pull/31617)

This fixed an issue whereby an infinity value would not be serialized correctly in a PostgreSQL range type column.



### [Fix foreign key replacement in inverse association](https://github.com/rails/rails/pull/31575)

This fixes an issue where foreign keys would not get updated correctly when an object changed the target of its `belongs_to` relationship.



### [Force :attachment as content disposition for some content types](https://github.com/rails/rails/pull/31639)

The default behavior for `ActiveStorage::Blob#service_url` is to use an `:inline` value for `disposition`. There are certain distinct content types, however, for which this does not make sense. This change identifies those cases and prevents them from inheriting this default behavior.



### [Fix validation callbacks on multiple contexts](https://github.com/rails/rails/pull/31483)

This fixed an issue where callbacks would not fire correctly when multiple contexts were passed to `valid?` , `save` , etc..



### [Support added for multiple encodings in String#blank?](https://github.com/rails/rails/pull/31049)

Previously, if you called `String#blank?` on, for example, an UTF-16LE-encoded string, it would raise an `Encoding::CompatibilityError` exception. It will now return the right thing!



### [Fix assert_changes to always assert on change](https://github.com/rails/rails/pull/31011)

If you had called `assert_changes` with a `to` argument, you may have been surprised to find that it was sufficient to match only the resultant value for it to pass, even if nothing changed. This revision fixes that by failing in the event that nothing changed, as would be expected.



### [Consistently raise MissingAttributeError for missing attributes](https://github.com/rails/rails/pull/29018)

Normally if you `select` a subset of a record's attributes and then try to reference an unselected attribute, you will get a `MissingAttributeError`. However, if you then `save`'d the record and called that same attribute, you may be surprised to get `nil` instead. This revision fixes that by always raising an error.



That's it for this week! Even though this was a bumper issue, there were as always many, many more changes I wanted to talk about that I could not list. But you can check them all out [here](https://github.com/rails/rails/compare/master@%7B2017-12-17%7D...@%7B2018-01-06%7D)! Until next time....
