---
layout: post
title: '[SEC][ANN] Rails 3.2.12, 3.1.11, and 2.3.17 have been released!'
category: releases
author: tenderlove
published: true
---
Hi everybody.

I'd like to announce that Rails 3.2.12, 3.1.11, and 2.3.17 have been released.

3.2.12 and 3.1.11 contain one security fix, and 2.3.17 contains two security fixes.  It is recommended that you update immediately.

You can read about the security fixes by following these links:

* [CVE-2013-0276](https://groups.google.com/forum/?fromgroups=#!topic/rubyonrails-security/AFBKNY7VSH8)
* [CVE-2013-0277](https://groups.google.com/forum/?fromgroups=#!topic/rubyonrails-security/KtmwSbEpzrU)

Please note that today a new JSON gem was released, and it also contains an important security fix.  You should update the JSON gem as soon as possible.  You can read about the security issue in the JSON gem here:

* [CVE-2013-0269](https://groups.google.com/forum/?fromgroups=#!topic/rubyonrails-security/4_YvCpLzL58)

In order to ease upgrading, the only major changes in each gem is the security fix.  To see the detailed changes for each version, follow the links below:

* [Changes in 3.2.12](https://github.com/rails/rails/compare/v3.2.11...v3.2.12)
* [Changes in 3.1.11](https://github.com/rails/rails/compare/v3.1.10...v3.1.11)
* [Changes in 2.3.17](https://github.com/rails/rails/compare/v2.3.16...v2.3.17)

Thanks to the people who responsibly reported these security issues.

Please note that per our [maintenance policy](https://groups.google.com/forum/?fromgroups=#!topic/rubyonrails-security/G4TTUDDYbNA) there will be no 3.0.x version released.

Here are the SHA-1 checksums for each gem:

## Rails 3.2.12

```
[aaron@higgins dist]$ shasum *3.2.*
5627c6d044cc52876128459d960f8805006b5f97  actionmailer-3.2.12.gem
336f76c045b6bcbd204831897131182cff82ddf8  actionpack-3.2.12.gem
89bec5d68861ad5d79ca776ef5d6df7c1cfc2b11  activemodel-3.2.12.gem
7d4327c54900f45c60947a63350e865843e193ef  activerecord-3.2.12.gem
4b8ed4190f98a85b800ee7893bae5afd1bee0874  activeresource-3.2.12.gem
c9e44eed288140f556e6543b93fc45f8dd57a415  activesupport-3.2.12.gem
24b3b4633d7f131e61e50decc3aa11590941c6e2  rails-3.2.12.gem
a84262f1968e83141d290c034b20a28d38886d10  railties-3.2.12.gem
```

## Rails 3.1.11

```
[aaron@higgins dist]$ shasum *3.1.*
d80816e69614c1f0d96cb7d0f4a38bfdc8d84ff5  actionmailer-3.1.11.gem
f65cea0682b6051869d4125f7b441a7c6f59fcbe  actionpack-3.1.11.gem
549ec2b67d4332b38cef1620b23e00e50e0774e6  activemodel-3.1.11.gem
3d342764b7ba3bae05190f15bcb35d401cd8121e  activerecord-3.1.11.gem
19bd70bad6c4e4a555127a7738e71ac4829e6f61  activeresource-3.1.11.gem
7267b2f87bea5bd285f5d1bfe49bb2ba19df7c94  activesupport-3.1.11.gem
ca57e1243451385689343dbe2bb42e23058284df  rails-3.1.11.gem
48cc801bdb7c31c4b6939235a60ef3e5008f5dbb  railties-3.1.11.gem
```

## Rails 2.3.17

```
[aaron@higgins dist]$ shasum *2.3.*
5df1fe13db46ac10dec8bb607ef515881dcf09c5  actionmailer-2.3.17.gem
d1165517a185ae73ca8a4ac89549e695a23fedfa  actionpack-2.3.17.gem
b24ff71e46b798d7c38504531cb7622955d9a20c  activerecord-2.3.17.gem
9cc2a7bd60a959dcba099425954a1b9c53235ce5  activeresource-2.3.17.gem
4ccc935fdc4d7ede78a1c376453ecb502e48b7ed  activesupport-2.3.17.gem
9613a97cb726f00de59ad6d0f901f7434f9c4733  rails-2.3.17.gem
```

<3<3<3
