---
layout: post
title: 'Rails Versions 7.2.3.1, 8.0.4.1, and 8.1.2.1 have been released!'
categories: releases
author: jhawthorn
published: true
date: 2026-03-23 14:00:00 -08:00
---

Hi friends!

Rails Versions 7.2.3.1, 8.0.4.1, and 8.1.2.1 have been released!

These are security patches addressing 10 security issues:

* An issue where in development mode, an exception could be printed without escaping. This could affect a developer running a server locally and clicking a malicious URL.
* Multiple potential XSS vulnerabilities in Action Pack, Action View, and Active Support
* Two potential DoS vulnerabilities in Active Storage related to range requests
* Two potential DoS vulnerabilities in Active Support related to number formatting
* A potential path traversal and glob injection vulnerability in Active Storage DiskService
* Insufficient filtering of metadata in Active Storage direct uploads

We strongly recommend upgrading as soon as possible.

Older versions of Rails are unsupported, and users are recommended to upgrade to at least the 7.2 series. See our [maintenance policy](https://rubyonrails.org/maintenance) for details.

Here is a list of security issues that these releases address:

* [CVE-2026-33167 Possible XSS vulnerability in Action Pack debug exceptions](https://discuss.rubyonrails.org/t/cve-2026-33167-possible-xss-vulnerability-in-action-pack-debug-exceptions/90913)
* [CVE-2026-33168 Possible XSS vulnerability in Action View tag helpers](https://discuss.rubyonrails.org/t/cve-2026-33168-possible-xss-vulnerability-in-action-view-tag-helpers/90912)
* [CVE-2026-33169 Possible ReDoS vulnerability in number\_to\_delimited in Active Support](https://discuss.rubyonrails.org/t/cve-2026-33169-possible-redos-vulnerability-in-number-to-delimited-in-active-support/90911)
* [CVE-2026-33170 Possible XSS vulnerability in SafeBuffer#% in Active Support](https://discuss.rubyonrails.org/t/cve-2026-33170-possible-xss-vulnerability-in-safebuffer-in-active-support/90910)
* [CVE-2026-33173 Insufficient filtering of metadata in Active Storage direct uploads](https://discuss.rubyonrails.org/t/cve-2026-33173-insufficient-filtering-of-metadata-in-active-storage-direct-uploads/90909)
* [CVE-2026-33174 Possible DoS vulnerability in Active Storage proxy mode via Range requests](https://discuss.rubyonrails.org/t/cve-2026-33174-possible-dos-vulnerability-in-active-storage-proxy-mode-via-range-requests/90908)
* [CVE-2026-33176 Possible DoS vulnerability in Active Support number helpers](https://discuss.rubyonrails.org/t/cve-2026-33176-possible-dos-vulnerability-in-active-support-number-helpers/90907)
* [CVE-2026-33195 Possible path traversal in Active Storage DiskService](https://discuss.rubyonrails.org/t/cve-2026-33195-possible-path-traversal-in-active-storage-diskservice/90904)
* [CVE-2026-33202 Possible glob injection in Active Storage DiskService](https://discuss.rubyonrails.org/t/cve-2026-33202-possible-glob-injection-in-active-storage-diskservice/90903)
* [CVE-2026-33658 Possible DoS vulnerability in Active Storage proxy mode via multi-range requests](https://discuss.rubyonrails.org/t/cve-2026-33658-possible-dos-vulnerability-in-active-storage-proxy-mode-via-multi-range-requests/90906)

Cheers! We plan to follow up with a bugfix release for the 8.0 and 8.1 series soon!


## SHA-256

If you'd like to verify that your gems are the same as the ones we've uploaded,
please use these SHA-256 hashes.

```
11ebed516a43a0bb47346227a35ebae4d9427465a7c9eb197a03d5c8d283cb34  pkg/activesupport-7.2.3.1.gem
39e1869b85e7a0b64a8ccddf19f3fb0c44261b329785384bb88f878eab51c0d0  pkg/activemodel-7.2.3.1.gem
b89513e275da5b34183c5f2a497c154b02dcc7c811d399ab557e67e36170a05d  pkg/activerecord-7.2.3.1.gem
de19b86843391762ac24a6287c30fbba11cd475fa4d4b664924d5fb7a2f1ff7c  pkg/actionview-7.2.3.1.gem
b66afe7f937273270cb63f03bde7af7ba850017867766e8848d06d3e12e1e4ca  pkg/actionpack-7.2.3.1.gem
0bc4227ce371b82da119cd27ed91e0deb9b744bbfa266b86e4bd8d1e2a8f6ed8  pkg/activejob-7.2.3.1.gem
f578b6d5c5f81a20b6f6a796187698890c8348c041daa5e2e7cf7814ac520467  pkg/actionmailer-7.2.3.1.gem
d3bf40a3f4fc79a09709878f0e5c43a5e2d8e6607089f6b38f9472b8715eb33c  pkg/actioncable-7.2.3.1.gem
0b224ea42e6256d3e33768bdccad8e3c9110a5140fc9faf98bde8873dd5dffab  pkg/activestorage-7.2.3.1.gem
a4e73480c97ab2fff5a416f92c54b065b1a6564ea4a807d42e0b83a94d4ec541  pkg/actionmailbox-7.2.3.1.gem
5b1418f407ea347b98084a62b9b6caa1d3b1eb482d18dbbb69fad43f242843e3  pkg/actiontext-7.2.3.1.gem
aea3393ee10243ceedcbeccb45458a0d58b524b6d21bf32eff8b93853baae15a  pkg/railties-7.2.3.1.gem
96c0a0160081ef3f1e407438880f6194c6ec94cdf40c8f83fc7bb22c279eba94  pkg/rails-7.2.3.1.gem
```

```
822187e99ebca3e90bf03e6ccef5b57447592657f6b1676ccaaa25794ebfc7e6  pkg/activesupport-8.0.4.1.gem
1ee25e1241bfd48b2682fa14aadb399065dc4f045dc234422344c408b3394af5  pkg/activemodel-8.0.4.1.gem
182582af961c3877017477d1ff14bba7fabc634ba4e3f257da4d8aab963ae7bd  pkg/activerecord-8.0.4.1.gem
bdd726498c12174c4ba8fb489c630ea9bf2f4db1f09d59ec227f318d1ec78d80  pkg/actionview-8.0.4.1.gem
f1c8b3673340f8f478a083ae55c58ad6989455d7daad554ff64d70af36302c7d  pkg/actionpack-8.0.4.1.gem
1980d6241c9aeae112943de960bc8c41cf1c3741408c60709caed7a795976fb9  pkg/activejob-8.0.4.1.gem
90db7874504c7679dffeaa3ba0e8e824d0327898b59acbce221c735ea85e7d8f  pkg/actionmailer-8.0.4.1.gem
426f0cfa0e725cef4f6518ab24f7dd0290dded630fc39615f364fba9846f6c53  pkg/actioncable-8.0.4.1.gem
f2dcbe57643957922c9cbe676baef673a14003fcefd22174661599e74f20731e  pkg/activestorage-8.0.4.1.gem
604ec3836b79a383312cec2ca8d678695149b7d7de4c375d76b4535c034695c8  pkg/actionmailbox-8.0.4.1.gem
6abf7368f4dfe82290cfb9f18982174fb5632d9a5ebf5f2791332fbd4e4c250d  pkg/actiontext-8.0.4.1.gem
bdc4034d63f04f2bad26fbf9faa924701dba04f71fcdd746884ff0871a63818c  pkg/railties-8.0.4.1.gem
1de7e890f93925cabacb9be3a061a01bc86d686429152ccf7835206ab91b1795  pkg/rails-8.0.4.1.gem
```

```
beec20ced12ad569194554399449a6372fdab03061b8f48a9ed6ef9b7dc251b2  pkg/activesupport-8.1.2.1.gem
8f31a6f9c12fecb8e5a0fce8a8950cfd94f0d75829322935f99e8217a3e5f3c6  pkg/activemodel-8.1.2.1.gem
3f79140318ff6d23376f5d9b1b5b5e2c7d3cc8979dd71367e9a8394378ca630a  pkg/activerecord-8.1.2.1.gem
38daa7b87bca427e2967f139e5b7f0d1081271bdafd0e015d8ef97a006f570a6  pkg/actionview-8.1.2.1.gem
a6b69cd10ec4c8d978c8eee51206e34152b1c1be017e534236dbc89a3d00ffb8  pkg/actionpack-8.1.2.1.gem
c89c311d07fd358b76c581ed8fee87c5b4351fb44994f3389385c014d22182fe  pkg/activejob-8.1.2.1.gem
d7d62fbc2197f1a7006bb5af4c665edf999adf79ab6c10337c088d27e6622071  pkg/actionmailer-8.1.2.1.gem
a2f88cecce148b3fcb63d2e517d7694e119830a85baa7d6cf59e5453dcf32e8d  pkg/actioncable-8.1.2.1.gem
36794c9b8853ac9276b0386cb1f8973374d8e71e8a9666bb02e70f5b7c9c5391  pkg/activestorage-8.1.2.1.gem
c2e45c0c1e5687e35e050838c94a8aed0d954c56a32ea411d54cd848c338c54e  pkg/actionmailbox-8.1.2.1.gem
1e503ce600a6ab2e12a46f999959a7d8e2fdaff910ca01dcf3b968934b55d957  pkg/actiontext-8.1.2.1.gem
f4d902869541af4e5b5552d726062fa59ec0fd9078f7ab87720dbd93f22c43ee  pkg/railties-8.1.2.1.gem
93ebf1efc792c9bc47e9795259c920312d3920008dad3ae634b7a0457ffe0af8  pkg/rails-8.1.2.1.gem
```
