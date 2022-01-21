---
layout: post
title: "Rails 7.0.1, Webpacker retirement and more"
categories: news
author: morgoth85
published: true
date: 2022-01-21
---

Hi, [Wojtek](https://twitter.com/morgoth85) here introducing you to this year changes in the Rails.  
  
[**Released Rails 7.0.1**](https://rubyonrails.org/2022/1/6/Rails-7-0-1-has-been-released)  
The Ruby 3.1 is fully supported with this release. It also contains few bug fixes and documentation improvements.  
  
[**Retirement of Webpacker**](https://mobile.twitter.com/rails/status/1483772667756957699)  
Only security issues will be considered and there will be no version 6 release of Webpacker. There is a [switching guide to jsbundling-rails](https://github.com/rails/jsbundling-rails/blob/main/docs/switch_from_webpacker.md) ready.  
Thank you to everyone who've contributed to Webpacker over the last five-plus years!  
  
 [**Autoloaded paths are no longer in load path**](https://github.com/rails/rails/pull/44133)  
Starting from Rails 7.1, all paths managed by the autoloader will no longer be added to _$LOAD\_PATH_.  
This means it won't be possible to load them with a manual _require_ call, the class or module can be referenced instead.  
  
[**Added update\_attributes! to Active Record**](https://github.com/rails/rails/pull/44141)  
Similar to _update\_attribute_, but raises _ActiveRecord::RecordNotSaved_ when a _before\_\*_ callback throws _:abort_.  
  
[61 people](https://contributors.rubyonrails.org/contributors/in-time-window/20220101-20220121) contributed to Rails since the last time. All the changes can be checked [here](https://github.com/rails/rails/compare/@%7B2022-01-01%7D...main@%7B2022-01-21%7D). Until next week!

