---
layout: post
title: "This week in Rails: benchmark anywhere, bugfixes and more!"
categories: news
author: gregmolnar
published: true
date: 2020-12-20
---

Hi there, it is [Greg](https://twitter.com/gregmolnar), bringing you the latest news about Rails!

### [Rails 6.1 released! Horizontal Sharding, Multi-DB Improvements, Strict Loading, Destroy Associations in Background, Error Objects, and more!](https://rubyonrails.org/2020/12/9/Rails-6-1-0-release)

Rails 6.1 has been released and wow does it have a lot of great stuff! The changes include improvements to multiple databases, adding support for destroying associations in jobs instead of in-memory, turning errors into objects, and so much more.

### [Add benchmark method that can be called from anywhere](https://github.com/rails/rails/pull/40734)

This PR includes the existing _ActiveSupport::Benchmarkable_ into the _Rails_ module, to make it accessible from anywhere (background jobs etc).

### [Add config.action_view.image_loading](https://github.com/rails/rails/pull/38452)

Browser native support for lazy loading images is now a part of the official HTML standard and this PR adds _Rails.application.config.action\_view.image\_loading_ to configure sitewide default for the _loading_ html attribute to enable lazy loading sitewide without changing code.

### [Add config.action_view.image_decoding](https://github.com/rails/rails/pull/40839)

Another _image\_tag_ change, which introduces&nbsp;_Rails.application.config.action\_view.image\_decoding_ to configure the default value of the image\_tag :decoding option.

### [Better handling of negative elements in enum](https://github.com/rails/rails/pull/40679)

Rails gives a warning if an enum method uses the _not\__ prefix as it might conflict with negative scopes. The initial implementation warned even when there was no actual conflict and this change improves that and only warns about negative enums if a positive form that would cause conflicts exists.

### [Do not use submit_tag auto-disabling when disable_with is set to false](https://github.com/rails/rails/pull/40168)

If we have _data: { disable\_with: false }_ then auto-disabling is turned off, but if we set _automatically\_disable\_submit\_tag_ to false it changes the behaviour of _disable\_with_ in an unexpected way,&nbsp; so explicit usage of _disable\_with: false_ starts to enable auto-disabling with false as the value of a disabled button.  
With this change auto-disabling is turned off if we have explicit _disable\_with: false_ no matter what is set in _automatically\_disable\_submit\_tag_.

### [Ignore strict loading violations on instances loaded through fixtures](https://github.com/rails/rails/pull/40792)

Rails 6.1 added _strict\_loading\_by\_default&nbsp;_but that causes issues with the fixtures as they are lazy loaded. To get around it, this change ignores the strict loading flag when the fixtures are loaded.

### [Fix S3 multipart uploads when threshold is larger than the file uploaded](https://github.com/rails/rails/pull/40793)

A bug happened when the file being uploaded to S3 is smaller than the configured multipart threshold, but this PR fixed it.

### [Allow reload to be default_scoped](https://github.com/rails/rails/pull/40805)

_reload_ was not default\_scoped by default because you could be creating a record that does not match your default scope and therefore reload wouldn't find the record. However, in the case of sharding an application you may want reload to  
support default\_scope because you'll always have the correct scope  
set.&nbsp;

### [Change default queue name of all the internal jobs to be the job adapter's](https://github.com/rails/rails/pull/40766)

Before this change you needed to configure your job processor to handle all of Rails' internal job queues, but not anymore!

### [Handle nil translation key](https://github.com/rails/rails/pull/40788)

In Rails 6.0, the translate helper always returned _nil_ when given a _nil_ key, but in Rails 6.1, the translate helper always raised an _I18n::ArgumentError_ when given a _nil_ key. This PR fixes the translate helper to mirror the _I18n.translate_ behaviour when given a _nil_ key, with and without a default.  
  


[45 people](https://contributors.rubyonrails.org/contributors/in-time-window/20201204-20201218) contributed to Rails in the past 2 weeks. Check out the [open issues](https://github.com/rails/rails/issues) if you want to be one if them next time!. Until next week!
