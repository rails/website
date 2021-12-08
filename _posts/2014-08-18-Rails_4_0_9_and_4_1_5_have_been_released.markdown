---
layout: post
title: Rails 4.0.9 and 4.1.5 have been released!
categories: releases
author: rafaelfranca
published: true
date: 2014-08-18 14:16:03 -03:00
---

Hi everyone!

Rails 4.0.9 and 4.1.5 have been released!

These two releases contain a security fix, so please upgrade as soon
as possible! In order to make upgrading as smooth as possible, we've only
included commits directly related to each security issue.

The security fix for 4.0.9 and 4.1.5 is:

* [CVE-2014-3514](https://groups.google.com/d/msg/rubyonrails-security/M4chq5Sb540/CC1Fh0Y_NWwJ)

the commits for 4.0.9 can be found [here](https://github.com/rails/rails/compare/v4.0.8...v4.0.9),
and the commits for 4.1.5 can be found [here](https://github.com/rails/rails/compare/v4.1.4...v4.1.5).

Here are the checksums for 4.0.9:

```
$ shasum *4.0.9*
2034a17791be885e8e4e6211c26447614c830e62  actionmailer-4.0.9.gem
00b13c7dfe94af6ede24c6c1652ff4bc2aee9ef8  actionpack-4.0.9.gem
0a16de437de79128846d5a5fc73a0a0d6ebe369e  activemodel-4.0.9.gem
3d1884dff4fa64267d7c840dbaaac3eafc6fc0a9  activerecord-4.0.9.gem
eb27657cf79c4c13f7b4c4f7aa69a8a171f4e68c  activesupport-4.0.9.gem
2bdba9c61f8860d1883ed5803591dc603b7312fb  rails-4.0.9.gem
f90c7f3104d9d63992d53331990e33c1d832e7c0  railties-4.0.9.gem
```

Here are the checksums for 4.1.5:

```
$ shasum *4.1.5*
798edeca54bb9ca1ba91b7669fccb4d2bb41f404  actionmailer-4.1.5.gem
2354a982938658cfafd6097a406ac43facb80c70  actionpack-4.1.5.gem
eb71ffc6ea7537d6066483b6ff5d1edf51f0c344  actionview-4.1.5.gem
15a24e5a1e9191541cc7b24bc1f74e3a0293cf97  activemodel-4.1.5.gem
27cd6cc6a3b52eb5966171e5959b0505f411e8ce  activerecord-4.1.5.gem
44a53eac3e7851c2311cce42f63c966ea05b5552  activesupport-4.1.5.gem
7fa52337ec2b659abfb5b5678125ba0d3b5cbce7  rails-4.1.5.gem
6ffdb1e19734460ded12f9a66f8390ea071f6727  railties-4.1.5.gem
```

<3<3<3<3
