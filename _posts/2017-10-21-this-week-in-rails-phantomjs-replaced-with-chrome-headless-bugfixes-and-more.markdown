---
layout: post
title: "This Week in Rails: PhantomJS replaced with Chrome headless, bugfixes and more!"
categories: news
author: kirshatrov
published: true
date: 2017-10-21
---

Hi there! It's [Kir](https://twitter.com/kirshatrov), bringing you a new edition of This Week in Rails!

### [Replace PhantomJS with Selenium/Chrome headless](https://github.com/rails/rails/pull/30930)

PhantomJS has been abandoned. At the same time Chrome provides native support for headless mode that is now the recommended way.

### [Allow symbol list for ignored_columns](https://github.com/rails/rails/pull/30629/files)

This PR fixes a bug when assigning symbols to _ignored\_columns_ in Active Record was ignored. Now the accessor accepts both strings and symbols.

### [Fix ajax callbacks in UJS](https://github.com/rails/rails/pull/29127)

Previously, returning false from the _ajax:beforeSend_ callback didn't cancel the request as it was expected.

That's it for this now! As always, there isn't enough time to cover every change if you'd like check out the [full list of changes](https://github.com/rails/rails/compare/master@%7B2017-10-14%7D...@%7B2017-10-21%7D) yourself.
