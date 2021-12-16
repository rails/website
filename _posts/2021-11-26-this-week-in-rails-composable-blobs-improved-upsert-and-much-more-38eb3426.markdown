---
layout: post
title: "Composable blobs, improved upsert and much more!"
categories: news
author: morgoth85
published: true
date: 2021-11-26
---

Hey, [Wojtek](https://twitter.com/morgoth85) here with recent additions to Rails. All of them today for FREE, for you.  
Thank you [all the contributors](https://contributors.rubyonrails.org/contributors) for making Rails. Those from one-time to day by day committers.  
  

[**Add compose method to Active Storage Blob**](https://github.com/rails/rails/pull/41544)  
Concatenating multiple blobs is now possible.  
  
[**Support custom metadata on Active Storage**](https://github.com/rails/rails/pull/43294)  
Setting custom metadata on blobs are now persisted to remote storage.  
  
[**Allow to configure the list of columns to update in upsert\_all**](https://github.com/rails/rails/pull/43470)  
Before, you could only customize the update SQL sentence via _:on\_duplicate_. There is now a new option _:update\_only_ that lets you provide a list of columns to update in case of conflict.  
  
[**Expose role/shard on pool/connection**](https://github.com/rails/rails/pull/43696)  
It can be useful to know what the role and shard of the connection or pool is. Previously there was no way to find the role or shard other than asking _connected\_to?._  
  
[**Allow a fallback value to be returned from Rails.error.handle**](https://github.com/rails/rails/pull/43716)  
The passed fallback will be returned in case the code inside the _handle_ block raises an error.  
[Improved later](https://github.com/rails/rails/pull/43719) to make a fallback option to be a callable.

  

[**Add existence method to Pathname**](https://github.com/rails/rails/pull/43726)  
Shorthand for code like:

    Rails.root.join('file').exist? && Rails.root.join('file').read

to:

    Rails.root.join('file').existence&.read

  
[**Change default X-XSS-Protection header to '0'**](https://github.com/rails/rails/pull/41769)

This header has been deprecated and the XSS auditor it triggered has been removed from all major modern browsers (in favour of Content Security Policy) that implemented this header to begin with.  
  
[**Deprecate PerThreadRegistry**](https://github.com/rails/rails/pull/43673)  
This module has been soft deprecated for a long time, but since it was used internally it wasn't throwing deprecation warnings. Now it is. Apps should use _Module#thread\_mattr\_accessor_ instead.

  

[26 people](https://contributors.rubyonrails.org/contributors/in-time-window/20211121-20211126) contributed to Rails since the last time. All the changes can be checked [here](https://github.com/rails/rails/compare/@%7B2021-11-21%7D...main@%7B2021-11-26%7D). Until next week!

