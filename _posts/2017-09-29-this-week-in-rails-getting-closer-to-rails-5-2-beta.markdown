---
layout: post
title: "This Week in Rails: getting closer to Rails 5.2 beta"
categories: news
author: claudio
published: true
date: 2017-09-29
---

Hi there! It's [Claudio](https://www.meetup.com/laruby) from sunny Los Angeles. Step by step we are getting closer to the first beta of Rails 5.2. Check out the changes that occurred in Ra-Ra-Rails-land last week.

### [Rails 4.2.10 released](https://rubyonrails.org/2017/9/27/Rails-4-2-10-released)

Unless more regressions are found this will likely be the last release for Rails 4.2.




### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20170923-20170929)

28 people contributed to Rails the past week! If you'd like to join them, why not check out the list of [open issues](https://github.com/rails/rails/issues)?

### [Preview PDFs and videos](https://github.com/rails/rails/pull/30667)

If you use Active Storage, you can now easily provide image previews for PDF files and videos!

### [Add Key Rotation to MessageEncryptor and MessageVerifier and simplify the Cookies middleware](https://github.com/rails/rails/pull/29716)

This PR introduces ActiveSupport::KeyRotator which provides an interface for easily rotating between different encryption ciphers or message digests, salts, and secrets.

### [Implement change_table_comment and change_column_comment for MySQL](https://github.com/rails/rails/pull/30677)

The two methods were only implemented for PostgreSQL.

### [Ensure HWIA#transform_keys returns HWIA](https://github.com/rails/rails/pull/30728)

Makes #transform\_keys coherent with other methods of HashWithIndifferentAccess such as #transform\_values, #select and #reject.

### [Treat Set as an Array in Relation#where](https://github.com/rails/rails/commit/9cf7e3494f)

You can now safely use Set in your Active Record query, e.g.:&nbsp;

    User.where(id: Set.new([1, 2]))


Feel free to check out the [full list of changes](https://github.com/rails/rails/compare/master@%7B2017-09-23%7D...@%7B2017-09-29%7D).

Thanks to the 28 people contributed to Rails last week. If you'd like to join them, check out the list of [open issues](https://github.com/rails/rails/issues).
