---
layout: post
title: ! '[ANN] Rails 3.0.9 has been released!'
categories: []
author: aaronp
published: true
date: 2011-06-16 10:27:00.000000000 +01:00
---
Hi everybody!

Rails 3.0.9 has been released!  Since I am at Nordic Ruby, I will deem this Nordic Ruby Edition. ;-)

The main boogs fixed in this release are problems dealing with modifications of SafeBuffers.

`gem install rails` or update your Gemfile and `bundle update` while it's hot!

## CHANGES

The major changes in this release of Rails are bug fixes surrounding modifications to SafeBuffer strings.  We had places that were modifying SafeBuffers and those places raised exceptions after the security fixes in the 3.0.8 release.

We've since updated those code paths, and now we have this nice release for you today!

Please check the CHANGELOG files in each section on github for more details.

For an exhaustive list of the commits in this release, please see [github](https://github.com/rails/rails/compare/v3.0.8...v3.0.9).

## Gem checksums

SHA-1:

* fb8f3c0b6c866dbad05ec33baf2af7e851f9d745  actionmailer-3.0.9.gem
* 9bc2c05463962320d0497bb2e30f4ffa66ed4f79  actionpack-3.0.9.gem
* 2c1004747a22f756722cf95605398bf9ba6244ed  activemodel-3.0.9.gem
* 285759d41c79460a3f49d26d8a0b3f8c9279e868  activerecord-3.0.9.gem
* 28f2b296525caeca1341467b5f1bbb90de88aaa7  activesupport-3.0.9.gem
* 09d52fdcbeefba31dd267d3d7484332ec30f7539  rails-3.0.9.gem
* 8b46dbeddb56e2e4b4ebfb5312fe81eb865a47e7  railties-3.0.9.gem

Please enjoy this release of Rails!

<3 <3 <3
