---
layout: post
title: "🔎 This Week in Rails: Much investigations, such bug fixes! 🔍"
categories: news
author: prathamesh
published: true
date: 2016-07-29
---

This is detective&nbsp; 🕵&nbsp; [Prathamesh](https://twitter.com/_cha1tanya) reporting from the secret chambers of Rails.

We were busy investigating many&nbsp; 🐛🐛🐛🐛🐛&nbsp; this week and I am happy to announce that we have successfully solved many mysterious cases 💪

## Featured

### [Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20160723-20160729)

Great 🔍 work by 22 detectives who solved mysterious cases this week. Also welcome to 4 new&nbsp; 🕵&nbsp; in our growing list of contributors!

### [Ruby/Rails applications not vulnerable to HTTProxy security issue](https://blog.phusion.nl/2016/07/21/web-applications-on-phusion-passenger-are-not-vulnerable-to-httpoxy)

The [Phusion](http://www.phusion.nl) team found out that Ruby, Rails and Rack applications are not affected by the recent security issue related to HTTProxy. Great&nbsp; 🕵&nbsp; investigation!

## Fixed

### [Use already loaded records in the finder methods](https://github.com/rails/rails/pull/25941)

If the records of the finder queries are already loaded, then Rails will use them instead of querying again.

### [Correctly return associated\_table when associated\_with? is true](https://github.com/rails/rails/pull/25767)

This fixes an issue related to _has and belongs to many associations_ failing when the association name and table name are the same.

### [Remove circular join references in join\_dependency](https://github.com/rails/rails/pull/25702)

This fixes a _stack level too deep_ crash when a circular join on the same table is used with the current scope.

### [Correct the behavior of virtual attributes on models loaded from the database](https://github.com/rails/rails/commit/f0ddf87e4bfcfcb861b0a9dca32edb733668bd30)

Before this change, virtual attributes not backed by the database would throw an error unless explicitly initialized. This change fixes it and also cleans up the implementation for virtual attributes.&nbsp;

## Improved

### [Reset rack.input when the environment is scrubbed for the next request](https://github.com/rails/rails/pull/25965)

Before this change, parameters sent via _post_ requests would leak across requests in the Action Controller tests. This change prevents that by cleaning _rack.input_ at the end of the request scrubbing.

### [Changed partial rendering to allow collections which don't implement to\_ary](https://github.com/rails/rails/pull/25912)

This change allows collections which do not implement _to\_ary_ also to be used for rendering partials. It allows instances of _Enumerator_ or _Enumerable_ to be used for rendering partials.

## Wrapping Up

That's it from This Week in Rails! There were many other great contributions and investigations too numerous to list here, but feel free to [check them out](https://github.com/rails/rails/compare/master@%7B2016-07-23%7D...@%7B2016-07-29%7D)!

Until next week!&nbsp; 🕵 🔍 💪
