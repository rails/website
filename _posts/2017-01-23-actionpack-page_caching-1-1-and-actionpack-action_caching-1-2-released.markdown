---
layout: post
title: "New Action Pack caching gems released"
categories: news
author: pixeltrix
published: true
date: 2017-01-23
---

Hi everyone,

I'm happy to announce that new versions of the caching gems extracted from Rails 4.0 have been released.

## Action Pack Page Caching (v1.1.0)

### CHANGES since 1.0.2

* Support for Rails 5.0
* Support for setting `page_cache_directory` at the controller instance level
* Support for setting `page_cache_directory` using a proc, symbol or callable object

To see the full list of changes, [check out all the commits on GitHub][1].

**SHA-1**

If you'd like to verify that your gem is the same as the one I've uploaded, please use this SHA-1 hash.

```
$ shasum actionpack-page_caching-1.1.0.gem
b9626f7afeb1d69267d1fd6b7255a30be7c33d29  actionpack-page_caching-1.1.0.gem
```

## Action Pack Action Caching (v1.2.0)

### CHANGES since 1.1.1

* Support for Rails 5.0
* Respect `Accept` header when caching actions
* Standardise behavior of options `:layout` and `:cache_path` when passed a proc, symbol or callable object

To see the full list of changes, [check out all the commits on GitHub][2].

**SHA-1**

If you'd like to verify that your gem is the same as the one I've uploaded, please use this SHA-1 hash.

```
$ shasum actionpack-action_caching-1.2.0.gem
308c3acf35c0bdbf15e5c63b64aeda0ec817a269  actionpack-action_caching-1.2.0.gem
```

Many thanks to the numerous people who have contributed PRs and reported bugs.

[1]: https://github.com/rails/actionpack-page_caching/compare/v1.0.2...v1.1.0
[2]: https://github.com/rails/actionpack-action_caching/compare/v1.1.1...v1.2.0
