---
layout: post
title: Rails 3.2.22, 4.1.11 and 4.2.2 have been released and more
categories: releases
author: rafaelfranca
published: true
date: 2015-06-16 14:02:42 -03:00
---

Hi everyone!

Rails 3.2.22, 4.1.11 and 4.2.2 have been released, along with web console and jquery-rails plugins
and Rack 1.5.4 and 1.6.2.

These releases contain security fixes, so please upgrade as soon as possible!

The security fixes for 4.1.11 and 4.2.2 are:

* [CVE-2015-3226](https://groups.google.com/d/msg/rubyonrails-security/7VlB_pck3hU/3QZrGIaQW6cJ)
* [CVE-2015-3227](https://groups.google.com/d/msg/rubyonrails-security/bahr2JLnxvk/x4EocXnHPp8J)

In order to make upgrading as smooth as possible, we've only included commits directly related
to each security issue.

The security fix for 3.2.22 is:

* [CVE-2015-3227](https://groups.google.com/d/msg/rubyonrails-security/bahr2JLnxvk/x4EocXnHPp8J)

Differently from the Rails 4 releases, Rails 3.2.22 includes all the commits from the 3-2-stable
branch. This mean that now Rails 3.2 supports Ruby 2.2.

The commits for 3.2.22 can be found [here](https://github.com/rails/rails/compare/v3.2.21...v3.2.22),
the commits for 4.1.11 can be found [here](https://github.com/rails/rails/compare/v4.1.10...v4.1.11),
and the commits for 4.2.2 can be found [here](https://github.com/rails/rails/compare/v4.2.1...v4.2.2).

### Web Console

We are also releasing Web Console 2.1.3 that contains the fix for the following issue:

* [CVE-2015-3224](https://groups.google.com/d/msg/rubyonrails-security/lzmz9_ijUFw/HBMPi4zp5NAJ)

The commits can be found [here](https://github.com/rails/web-console/compare/v2.1.2...v2.1.3).

### jquery-ujs and jquery-rails

We are also releasing jquery-ujs 1.0.4 and jquery-rails 3.1.3 and 4.0.4 that includes fix for the
following issue:

* [CVE-2015-1840](https://groups.google.com/d/msg/rubyonrails-security/XIZPbobuwaY/fqnzzpuOlA4J)

The commits for jquery-rails 3.1.3 can be found [here](https://github.com/rails/jquery-rails/compare/v3.1.2...v3.1.3),
the commits for jquery-rails 4.0.4 can be found [here](https://github.com/rails/jquery-rails/compare/v4.0.3...v4.0.4),
and the commits for jquery-ujs 1.0.4 can be found [here](https://github.com/rails/jquery-ujs/compare/v1.0.3...v1.0.4).

### Rack

Rack 1.5.4 and Rack 1.6.2 have also been released, which include fixes for the
following issue:

* [CVE-2015-3225](https://groups.google.com/d/msg/rubyonrails-security/gcUbICUmKMc/qiCotVZwXrMJ)

The commits for rack 1.5.4 can be found [here](https://github.com/rack/rack/compare/1.5.3...1.5.4),
and the commits for rack 1.6.2 can be found [here](https://github.com/rack/rack/compare/1.6.1...1.6.2).

## SHA-1

Here are the checksums for Rails 3.2.22:

```
$ shasum *3.2.22*
cc56be2f49baeeccc0da87b740f23d0ac7bd2d24  actionmailer-3.2.22.gem
d20fd24d9049fad99ea5405a265ca7c9690af378  actionpack-3.2.22.gem
0454b4bd49a1a423e1ef6231a5cb510ca48e0cb8  activemodel-3.2.22.gem
d9e51980eb4892089a29531c1fea69cabe9511e4  activerecord-3.2.22.gem
3754c63826f09b6b10bd0ca749646f76fbe195c6  activeresource-3.2.22.gem
4da01bbf6e03326c24c261c3d65a8c0b563f8663  activesupport-3.2.22.gem
0386d4d55b52d1348e024cb237e3b81126ce6c46  rails-3.2.22.gem
56575ff805b432be10fa79080c25c790947999f2  railties-3.2.22.gem
```

Here are the checksums for Rails 4.1.11:

```
$ shasum *4.1.11*
154856eb9c940e8fb5c999b08c748ce82e8a1197  actionmailer-4.1.11.gem
fa9a8271d8c19af89f8cf46c9a5bfd0b3ece1226  actionpack-4.1.11.gem
340678573b91ad305b9c2b07844d0628dbcf6a8d  actionview-4.1.11.gem
c56dc176a7ac0690d4f59472f28b36a664221d5c  activemodel-4.1.11.gem
711334da9e88d8d2606b4e12df115b093fb3a1b1  activerecord-4.1.11.gem
b714633af191481332797ed09f62fdd784363fb1  activesupport-4.1.11.gem
9fc1c823457ffe51cc6f52de2960035149621e15  rails-4.1.11.gem
1640674035171d0eb36ff91da9ea8d86f2137261  railties-4.1.11.gem
```

Here are the checksums for Rails 4.2.2:

```
$ shasum *4.2.2*
a093bdd43d732416f02b1cc39edc4f839b27cc69  actionmailer-4.2.2.gem
51dc701f026f3a84a779287459996f36023877f9  actionpack-4.2.2.gem
6ae3231fa1e6bbd07b4d1bf7b124654b39f3e048  actionview-4.2.2.gem
16e607a30b41d000bae2e848c11ef472264a5d94  activejob-4.2.2.gem
e667fb6dee998be2d1d01086467fa3fe2ca58dff  activemodel-4.2.2.gem
394cc4d39e8c84c2aed5b25c352cd6b2903ab686  activerecord-4.2.2.gem
b4b91de89a8c6f223bed5c01a7e578956d4a2bf7  activesupport-4.2.2.gem
a9e286e6799bde99e1449706854b910b5c466302  rails-4.2.2.gem
dd46d7f599fb883c1d3fd6b5ec8fcfd61628b869  railties-4.2.2.gem
```

Here is the checksum for Web Console 2.1.3:

```
$ shasum web-console-2.1.3*
60aed82466891904d7348583d67ec7dabce3a176  web-console-2.1.3.gem
```

Here are the checksums for jquery-rails 3.1.3 and 4.0.4:

```
$ shasum jquery-rails*.gem
691b6ec57ee08f8ef80bae3e8c09a4442d2f7d5c  jquery-rails-3.1.3.gem
159b4127ebbaba708cbed2921d1d1b00134ee834  jquery-rails-4.0.4.gem

```

Here are the checksums for Rack 1.5.4 and 1.6.2:

```
$ shasum rack-*.gem
d71ea9c90d7ef2a0787722f233da8fcbfb5e55d5  rack-1.5.4.gem
85d34dbf068cda5cf36432984da8ccf81c3d1be5  rack-1.6.2.gem
```
