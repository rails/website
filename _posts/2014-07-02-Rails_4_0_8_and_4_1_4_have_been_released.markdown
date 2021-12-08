---
layout: post
title: Rails 4.0.8 and 4.1.4 have been released!
categories: releases
author: rafaelfranca
published: true
date: 2014-07-02 16:55:03 -03:00
---

Hi everyone!

Rails 4.0.8 and 4.1.4 have been released!

The security patches introduced a regression on the PostgreSQL Range feature.
This regression was only introduced to Rails 4.x. Rails 3.2 users are not impacted.

the commits for 4.0.8 can be found [here](https://github.com/rails/rails/compare/v4.0.7...v4.0.8),
and the commits for 4.1.4 can be found [here](https://github.com/rails/rails/compare/v4.1.3...v4.1.4).

Here are the checksums for 4.0.8:

```
$ shasum *4.0.8*
1214de9fa493f5a23c87f7a7c2f1af84f67b60b6  actionmailer-4.0.8.gem
342aa07585b9b4b32ba37c8baf6fe93c53619ad6  actionpack-4.0.8.gem
b40e3b1bbd744b868f74c26e1088d73c9e7d7297  activemodel-4.0.8.gem
b1e28bdad10f21ed8af8b3b8b5e70f0110d19dff  activerecord-4.0.8.gem
1d3d2a767478aee5be22db197b2ec06cdaede10a  activesupport-4.0.8.gem
dbfa6c723191bf61d1c2d3f9809259f419956a74  rails-4.0.8.gem
f22a0677d9151d1f31d109b1c0687b53e06a94f7  railties-4.0.8.gem
```

Here are the checksums for 4.1.4:

```
$ shasum *4.1.4*
5e6426134003a55e0f43ff371521f6d66c8881b7  actionmailer-4.1.4.gem
79e84be29d961ef2c175cb5258b1d8c78ad6460f  actionpack-4.1.4.gem
8ba89c7399b81e2727402806176de0db397732eb  actionview-4.1.4.gem
9edc0b4e5c709ad11517a9f40ba50ee93e97e59b  activemodel-4.1.4.gem
23851340221e38717a7159ebcd2eb398e8ebeacd  activerecord-4.1.4.gem
388bd214252b34d22ec8bd1ca2445d7b53cd39bb  activesupport-4.1.4.gem
0e050607bb8581dc756c5184a5920de9708398f1  rails-4.1.4.gem
e1a75ea7161db14c953fce1e399c4e20b2eaa364  railties-4.1.4.gem
```

<3<3<3<3
