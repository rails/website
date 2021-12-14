---
layout: post
title: 'Rails 6.0.4.2, 6.1.4.2, and 7.0.0.rc2 have been released'
categories:
author: tenderlove
published: true
date: 2021-12-14 12:33:56 -08:00
---
Hi everyone!!!  Rails versions 6.0.4.2, 6.1.4.2, and 7.0.0.rc2 have been released!

These releases contain important security fixes, so please update when you can!
This release just contains one security fix which you can read about here:

* [\[CVE-2021-44528\] Possible Open Redirect in Host Authorization Middleware](https://discuss.rubyonrails.org/t/possible-open-redirect-in-host-authorization-middleware/79505)

Here are the checksums for the gems:

```
$ shasum -a 256 *-6.0.4.2.gem
724b4f42fd285a8c10208ee97b3ec3f64c061adfc1d9220c1c4d721ae6138085  actioncable-6.0.4.2.gem
1f003fb2c4cdf1add64163bf8c2c189683d485107caa46505f23263164276d2c  actionmailbox-6.0.4.2.gem
4b422ce5ecbd0c964acd8b9188029156d89eb5302ac59124dbeb55d45ddb8374  actionmailer-6.0.4.2.gem
9e0dfdabf581939dc16716d76000403abf8a22e10aa7d74b29396645eb7f9fb1  actionpack-6.0.4.2.gem
57629bacd1725f2547ffe912eeeefc2d0d9584b641c6391a3d9d43312daa659e  actiontext-6.0.4.2.gem
41f7bba25316191db00bbea4cb3984889a0244c4a43f9b30f0e152541ad146d0  actionview-6.0.4.2.gem
0b76e61a51e71a5f5318010c5a1caa04d3fc65ae893bcaee6de8157cd8073c0a  activejob-6.0.4.2.gem
6440236f1b9ba5b62b1d8d7f93743274fc578f48237bb394f9416f57de994bf3  activemodel-6.0.4.2.gem
9e4be2ddf078e8b3e4cec73c92705999c0b1e7ac63307978b546ab2b73a6b243  activerecord-6.0.4.2.gem
287b90ab0f74ca4fa59e3a32d848a67383430ae585567b786b8352584f8b2a5e  activestorage-6.0.4.2.gem
11457565ef30fbe774d6831704433d1fb7dd831e646e1459b61e7958cfb12de2  activesupport-6.0.4.2.gem
0b23a2522d0d06ec67934a125fce3699a8011467c2e32cc73bf456bb41b2d03b  rails-6.0.4.2.gem
3934798edd59cc0d35f7b303a33ec39f86a3acf64ebc8d155ecaad1c4b319dda  railties-6.0.4.2.gem
$ shasum -a 256 *-6.1.4.2.gem
0f5dee41ef7f250bd429f9d57def85aed4ac165d08510e339d5a672e17bb28d1  actioncable-6.1.4.2.gem
d54f21e788f554fddbfbd516f8a60bacfbd99a99c0855a3441b9652d4a668d99  actionmailbox-6.1.4.2.gem
b8280667ac641a24b84cd12bc20795dc30bfc8a2f28891b660dd473f9d5afb7e  actionmailer-6.1.4.2.gem
d2c04fc1c740c8bfaaa87829e96afae13d6a0ab1cfb9d377a7920cb9ca2c29dc  actionpack-6.1.4.2.gem
141750842a26303ad6eca6cbbe3de5187af262144af1e688d80a3de60f167614  actiontext-6.1.4.2.gem
9974904658bc70a4d7df866f2ce8e5dfc9ce3f289eb744463343e836ead51959  actionview-6.1.4.2.gem
6f2b26ac281e79c5996ab89d4b3abca323a029e739b0fb7f48f9662d8eb1eacd  activejob-6.1.4.2.gem
a78478f2d4007b6aff718915334063862800774c4ab364f85d37cb8ab91f72d1  activemodel-6.1.4.2.gem
3b5f5632a5effef7a883932fd7bd46f71c4afaa67ba80406887aa4eb1cf46868  activerecord-6.1.4.2.gem
2b7bea63f61673a55e520a4359869cbc0e8ae756566c3852a0e24f22bee24693  activestorage-6.1.4.2.gem
5ee9aa692bf207235c2d472d2db42add5f57465c900af2e769d68c0746e1500e  activesupport-6.1.4.2.gem
5487dd29b87302e883a6542e2b4a7460905bab3082717cf60c513651b443c825  rails-6.1.4.2.gem
dfb09ec05b8ed6ba08aa78e4a6b3a2a34746faf43c91ed4fcca81e2f443e011f  railties-6.1.4.2.gem
$ shasum -a 256 *-7.0.0.*.gem
ef2ec63796568e260c987c1876477e61085cefa6d4d80d703dfd6a14173347f1  actioncable-7.0.0.rc2.gem
1c8123865f4d787f733678830ca3def1a4d78d16b93537c79a2338ee8c388a59  actionmailbox-7.0.0.rc2.gem
7bcbd120b2b228bb132e75b426f1a25f1eb0128b1699c0d3aed4d778d468e910  actionmailer-7.0.0.rc2.gem
aee74a133b81e4206d1decbd4048782a3d00af523c2dcb05ee955c7d0a9012dd  actionpack-7.0.0.rc2.gem
2ede732512ebe766b060e652f4b5398bfd6fb85e97d13c9996fd850744b8f5dc  actiontext-7.0.0.rc2.gem
71b11d524d81bf573f46bb9eb48898f7e73bd582b6924c2abb6bf0d2c2fd4b8f  actionview-7.0.0.rc2.gem
4fa95f49755b8e09006ffc727e14fa1c095d3673bbced1f207baa97c2cea3dba  activejob-7.0.0.rc2.gem
195b3f8673e99421316842ac957a8b527b5472d595496224b94edad68bd0c60e  activemodel-7.0.0.rc2.gem
3c843bd5701407523ab7e6107b816f51e53c11e928528888a0e029b38e21c0c7  activerecord-7.0.0.rc2.gem
1878f01ff8d39579bf6c328843b713f79155a228b86f620f74ed9eb9efad7a59  activestorage-7.0.0.rc2.gem
4529f7c09b818842e122a9332cc0001407e8ac7a2923c7c43efbf9b69344d688  activesupport-7.0.0.rc2.gem
aae062d30add20779437e11ef9c22cf8ab76c685f0fbcfac477519b8fc76e207  rails-7.0.0.rc2.gem
9d5857b62c923d37bd4aec19480f7c6ef9c8241ace6ff8ccb467cb342969b300  railties-7.0.0.rc2.gem
```

Have a great day! 😬

-Aaron ❤️