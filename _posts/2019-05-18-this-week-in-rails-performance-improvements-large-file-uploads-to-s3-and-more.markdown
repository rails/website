---
layout: post
title: "Performance improvements, large file uploads to S3 and more!"
categories: news
author: gregmolnar
published: true
date: 2019-05-18
---

Hello fellow Rubyist!  
  
This is [Greg](https://twitter.com/gregmolnar), bringing the latest news about the Rails framework!

### [Fill a Trix editor easily in system tests](https://github.com/rails/rails/pull/35885)

_ActionDispatch::SystemTestCase#fill\_in\_rich\_text\_area_&nbsp; can&nbsp; locate and fill a Trix editor with the given HTML in your system tests.

### [ActiveRecord#respond_to? performance improvements](https://github.com/rails/rails/pull/34197)

The changes introduced by this pull request made _ActiveRecord#respond\_to?_&nbsp; 1.5x faster and it also no longer allocates strings.  
  


### [Permit uploading files larger than 5 GB to S3](https://github.com/rails/rails/pull/35931)

If you are using S3 with Active Storage, now you can upload large files and the services will transparently switch to streaming.

### [HashWithIndifferentAccess#initialize performance improvement](https://github.com/rails/rails/pull/34642)

With this change, a quite expensive _to\_hash_&nbsp;call is bypassed in the constructor if we are already dealing with a hash.  
  


### [Expose mailbox_for method in ApplicationMailbox](https://github.com/rails/rails/pull/36181)

Rails 6 is bringing Action Mailbox and with this change, it will be possible to check which mailbox an email is routed to without processing it.

[40 people](https://contributors.rubyonrails.org/contributors/in-time-window/20190410-20190417) contributed to Rails in the last week. If you want to be part of that, check out the list of [open issues](https://github.com/rails/rails/issues).  
  
Until next time!
