---
layout: post
title: "Security improvements, reducing bytes and more!"
categories: news
author: p8
published: true
date: 2022-03-27
---

Hi, this is Petrik, bringing you the latest news from the Rails world.  
  
[**Reduce the output of Rails::Railtie#inspect to the classname**](https://github.com/rails/rails/pull/44495)  
Anytime _inspect_ was called on _Rails::Application_, it would output the very large application object. By reducing it to the classname, we also prevent leaking credentials.  
  
[**Remove body content from redirect responses**](https://github.com/rails/rails/pull/44554)

Modern browsers don't render the body content for redirects. The delivered bytes are therefore a small waste.  
  

[**Return the blob/blobs when #attach is able to save the record**](https://github.com/rails/rails/pull/44439)

Saving attachments to a record with the _attach_ method returns the blob or array of blobs that were attached to the record.  
  

[**Support password challenge via has\_secure\_password**](https://github.com/rails/rails/pull/43688)

This allows a password challenge to be implemented with the same ease as a password confirmation, re-using the same error handling logic in the view, as well as the controller.  
  
[**Generate Content Security Policy headers for non-HTML responses**](https://github.com/rails/rails/pull/44635)

The content security policy DSL would not generate headers for non-HTML responses, even if a configuration is explicitly provided. However, for example, [Mozilla Observatory](https://observatory.mozilla.org/faq/) recommends adding it for API responses as well.

  
[**Extend audio\_tag and video\_tag to accept Active Storage attachments**](https://github.com/rails/rails/pull/44085)

Now it's possible to write _video\_tag(user.video\_file)_ instead of _video\_tag(polymorphic\_path(user.video\_file))._

  
[**Add active\_record.destroy\_association\_async\_batch\_size configuration**](https://github.com/rails/rails/pull/44617)

This allows applications to specify the maximum number of records that will be destroyed in a single background job by the _dependent: :destroy\_async_ association option. If the number of dependent records is greater than this configuration, the records will be destroyed in multiple background jobs.

  
[**Auto-create user and grant privileges when creating mysql databases**](https://github.com/rails/rails/pull/44707)  
Creating the database user and granting privileges every time you need to set up Rails locally on a new computer can be tedious. This change adds it to the MySQL build rake task, using the _root_ user with no password.  
  
Since last time, [36 people](https://contributors.rubyonrails.org/contributors/in-time-window/20220212-20220222) contributed to Rails. As usual, there's too much changes to cover them but you can check out all of these [here](https://contributors.rubyonrails.org/contributors/in-time-window/20220212-20220221). Until next time!

