---
layout: post
title: "Defaults to \"main\" branch name, new webpacker guide and improved strict loading"
categories: news
author: morgoth85
published: true
date: 2021-01-24
---

Hi, [Wojtek](https://twitter.com/morgoth85) here with the summary of changes from the last days.

### [Renamed master branch to main in the Rails repository](https://github.com/rails/rails/commit/077c66d5d6ef3a6f1cc54e4a431bfa5ea6831b97)

As [mentioned by DHH](https://twitter.com/dhh/status/1350091751789375490) and [performed by Rafael França](https://twitter.com/rafaelfranca/status/1350183929060483074) the default branch for most of the Rails git repositories is now called "main".

### [Webpacker added to edge guides](https://github.com/rails/rails/pull/40817)

The detailed guide how to use _webpack_ build system with Rails via _webpacker_ gem. You can read it on [edge guides](https://edgeguides.rubyonrails.org/webpacker.html).

### [Opting out of strict loading on a per-record base](https://github.com/rails/rails/pull/41181)

This is useful when [strict loading](https://github.com/rails/rails/pull/37400) is enabled application wide or on the model level.

### [Improved strict loading violation error message](https://github.com/rails/rails/pull/41114)

This change updates the error message to include both the class and the association name which makes it clear what exactly failed.

[39 people](https://contributors.rubyonrails.org/contributors/in-time-window/20210111-20210122) contributed to Rails since last time. Check out the [open issues](https://github.com/rails/rails/issues) to get involved and help out. Until next week!
