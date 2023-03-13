---
layout: post
title: 'Rails 7.0.4.3 and 6.1.7.3 have been released!'
categories: releases
author: jhawthorn
published: true
date: 2023-03-13
---

With apologies to those starting daylight savings time this week, we are
pleased to announce the release of Rails 7.0.4.3 and 6.1.7.3. These two
security release include fixes for two potential XSS vulnerabilities.

While these vulnerabilities are not considered high-risk, we still recommend
that all Rails users upgrade to this latest version as soon as possible.

Once again the 6.0 series now only receives updates for serious
vulnerabilities. We'd encourage users on that release to upgrade to a fully
supported version.

Below are the shas for the released versions:


```
$ shasum *-7.0.4.3*
ad394e33d5d5c7448ad9a370929f8aa310ad1479  actioncable-7.0.4.3.gem
12d773dde8a8a6dc2657afd7910af1cec491253d  actionmailbox-7.0.4.3.gem
e2712822297240d0ddcc2704817cc2c99782b76f  actionmailer-7.0.4.3.gem
9507d628de8ec1003e5e9319341045d4b70b976d  actionpack-7.0.4.3.gem
46387b939e041e616e70833c1d9e362534d5aef7  actiontext-7.0.4.3.gem
20c94e73d9faab5fa916309d3fdf24e505c02402  actionview-7.0.4.3.gem
85edb625a966ff92f5740c24e33bbb00add583d5  activejob-7.0.4.3.gem
d62f79fc9f6cdc16288431412d95fd46dad48350  activemodel-7.0.4.3.gem
9d04128c9ad4b72d551ed86aef37c4b152249e14  activerecord-7.0.4.3.gem
48a5e1729c3215daefa26566ffa4ba8c5a8d7362  activestorage-7.0.4.3.gem
71424328120f883f13f98b3e3467edd155fab3d5  activesupport-7.0.4.3.gem
f5580feffc2628ed953ee625fc534012d031b04d  rails-7.0.4.3.gem
c9ba095c0cf5d3e0e96e365f0851a7b908780c48  railties-7.0.4.3.gem
```

```
$ shasum *-6.1.7.3*
ecb025b7a442d335a130dc4a302e169258dcc703  actioncable-6.1.7.3.gem
0786e52b0ab03ea94051876b072da6415adc2c8b  actionmailbox-6.1.7.3.gem
5bcf3072429981857a4aac3e8ceef65691de32e7  actionmailer-6.1.7.3.gem
2ddfc5608ae3ecf8d3e367f151f1ca6600661356  actionpack-6.1.7.3.gem
bb97269c40b188a305e299afb5f2bc4744d6f836  actiontext-6.1.7.3.gem
6d98eb075d535496ba1772dff29145b00c7e5b5c  actionview-6.1.7.3.gem
7552a6fcb3c5941e086aaee304082a650ce20a65  activejob-6.1.7.3.gem
ae8f9d38c581f6d563982e1bc8a326f8bd7444be  activemodel-6.1.7.3.gem
7bc46d91795d8887c1c9d85082a87eaab6fe0c79  activerecord-6.1.7.3.gem
b1a543e106b76467c41a4b11bb24982a11886dc1  activestorage-6.1.7.3.gem
364e6d354cc6785a78be8d93bfec49c471873aee  activesupport-6.1.7.3.gem
cebb096eac916bfbd0e694dd311167b3a4d7ffc6  rails-6.1.7.3.gem
23a0e417e2a132e3e60eafc4c95cdbc592b279da  railties-6.1.7.3.gem
```

If you run in to any further issues, please sure to let us know in the issue tracker.

Thank you!
