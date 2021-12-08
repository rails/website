---
layout: post
title: '[SEC][ANN] Rails 3.0.20, and 2.3.16 have been released!'
category: releases
author: tenderlove
published: true
---

Hi everybody.

I'd like to announce that 3.0.20, and 2.3.16 have been released.  These releases contain one **extremely critical security fix** so please update **IMMEDIATELY**.

You can read about the security fix by following this link:

* [CVE-2013-0333](https://groups.google.com/forum/?fromgroups=#!topic/rubyonrails-security/1h2DR63ViGo)

In order to ease upgrading, the only major changes in each gem is the security fix.  To see the detailed changes for each version, follow the links below:

* [Changes in 3.0.20](https://github.com/rails/rails/compare/v3.0.19...v3.0.20)
* [Changes in 2.3.16](https://github.com/rails/rails/compare/v2.3.15...v2.3.16)

Thanks to the people who responsibly reported these security issues.

Please note that per our [maintenance policy](https://groups.google.com/forum/?fromgroups=#!topic/rubyonrails-security/G4TTUDDYbNA) this will be the last release for the 3.0.x series.

Here are the SHA-1 checksums for each gem:

### 3.0.20

```
[aaron@higgins dist]$ shasum *3.0.20*
c5b1a446d921dbd512a2d418c50f144b4540a657  actionmailer-3.0.20.gem
79ec243f6ec301b0a73ad45f89d4ea2335f90346  actionpack-3.0.20.gem
80c7d881ed64ed7a66f4d82b12c2b98b43f6fbde  activemodel-3.0.20.gem
d8fc6e02bf46f9b5f86c3a954932d67da211302b  activerecord-3.0.20.gem
e465e7d582c6d72c487d132e5fac3c3af4626353  activeresource-3.0.20.gem
5bc7b2f1ad70a2781c4a41a2f4eaa75b999750e4  activesupport-3.0.20.gem
ba9fb9dba41ce047feef11b4179cd9c3f81b2857  rails-3.0.20.gem
42b0025e4cb483d491a809b9d9deb6fd182c2a57  railties-3.0.20.gem
```

### 2.3.16

```
[aaron@higgins dist]$ shasum *2.3.16*
ab1a47a08d42352d9e8c276d28e6ed6990c23556  actionmailer-2.3.16.gem
f81ac75eb9edbb363a6d7bbe175a208e97ea3d4f  actionpack-2.3.16.gem
4ce36062f1f0b326b16e42b9fde5f1ab0610bffc  activerecord-2.3.16.gem
3698787f9ab8432f0c10268e22fbfcf682fa79cc  activeresource-2.3.16.gem
90490f62db73c4be9ed69d96592afa0b98e79738  activesupport-2.3.16.gem
239253159f9793e2372c83dcf9d0bd7bff343f7d  rails-2.3.16.gem
```

<3<3<3
