---
layout: post
title: 'Rails 4.2.11.1, 5.0.7.2, 5.1.6.2, 5.2.2.1, and 6.0.0.beta3 have been released!'
categories: releases
author: eileencodes
published: true
date: 2019-03-13 08:49:00 -05:00
---

Hello everyone!

Rails 4.2.11.1, 5.0.7.2, 5.1.6.2, 5.2.2.1, and 6.0.0.beta3 have been released! These contain the following important security fixes. It is recommended that users upgrade as soon as possible:

* [CVE-2019-5418 File Content Disclosure in Action View](https://groups.google.com/forum/#!topic/rubyonrails-security/pFRKI96Sm8Q)
* [CVE-2019-5419 Denial of Service Vulnerability in Action View](https://groups.google.com/forum/#!topic/rubyonrails-security/GN7w9fFAQeI)

Rails 5.2.2.1 and 6.0.0.beta3 also contain the following fix:

* [CVE-2019-5420 Possible Remote Code Execution Exploit in Rails Development Mode](https://groups.google.com/forum/#!topic/rubyonrails-security/IsQKvDqZdKw)

The released versions can be found in the usual locations, and you can find a list of changes on GitHub:

* [Changes in 4.2.11.1](https://github.com/rails/rails/compare/v4.2.11...v4.2.11.1)
* [Changes in 5.0.7.2](https://github.com/rails/rails/compare/v5.0.7.1...v5.0.7.2)
* [Changes in 5.1.6.2](https://github.com/rails/rails/compare/v5.1.6.1...v5.1.6.2)
* [Changes in 5.2.2.1](https://github.com/rails/rails/compare/v5.2.2...v5.2.2.1)
* [Changes in 6.0.0.beta3](https://github.com/rails/rails/compare/v6.0.0.beta2...v6.0.0.beta3)

If you're not able to upgrade immediately workarounds have been provided on the advisory pages in the Google Rails Security Group.

We've done our best to minimize any impact to your applications, but if you run in to any issues, please
[file a ticket](https://github.com/rails/rails/issues) and we'll do our best to help!

If you run in to security issues, please follow the reporting process which can be found
[here](https://rubyonrails.org/security).

## SHA-256

If you'd like to verify that your gem is the same as the one we've uploaded,
please use these SHA-256 hashes.

```
$ shasum -a 256 *4.2.11.1.gem*
5ec3df89a6796f18006198b95e6849ea736bc6170da0daf7d8cec9e388a49ca3  actionmailer-4.2.11.1.gem
50f296dfd8cfbb071fa1008c5157ed22871dbe0ddddc4cc1ec9c1235a66eb466  actionpack-4.2.11.1.gem
373d6065baf091996e0d6d36b99080ceeee323038fcf218ff39f2e839195fb74  actionview-4.2.11.1.gem
b21e40e0c147fc24c939fa1b4b1e3677ffae22b9c125a881ba587a6d7260c14b  activejob-4.2.11.1.gem
63d898086a8d2d0a493ebb4d8c9376c6f9d3dfe846f7aa1f70615a6e5a063db0  activemodel-4.2.11.1.gem
b7e0744484c8a9fe2c123657cfb5bbf678657555eeeeacf0d449ff0f228f3d1e  activerecord-4.2.11.1.gem
264782453d1912cf99f80b6bbf3f2e0e0592874e740e2c66f4dbad02903a78ed  activesupport-4.2.11.1.gem
b4b6536187eab61696358d851e043d60be3fc8313da67815467bb4968a8e9bfb  rails-4.2.11.1.gem
35b430dfd63028401c19dbfe4b319bebd59ea0b5a6b818d85731aa9a7e104eae  railties-4.2.11.1.gem
```

```
$ shasum -a 256 *5.0.7.2.gem*
525621c9bde0e729e566e9ebdaf23945cf0cc0b11e731f3f74c7d4d839e97b01  actioncable-5.0.7.2.gem
f5e616088e556244bf6cf6e6236e9a7bbef0d2bd2627b97c19c53096130b4756  actionmailer-5.0.7.2.gem
3ad093d8fcc08163b4ce38136b933c4c38c4973c872b155023fec11523a35eed  actionpack-5.0.7.2.gem
1c52732589d776ba01590233b44c33f679ec62c9bada89ebed3755066eb00823  actionview-5.0.7.2.gem
d122d5414f485713eabd4e5e866b1a238b1179ec5fd33d81cb2c5f6d751ce9df  activejob-5.0.7.2.gem
395d43d408239936668f04cab80bc64b50b08e414fe866664e1bf717e265aaca  activemodel-5.0.7.2.gem
8eb57c48689536545e08b87a6b45b5d2b30a19f1cc06d2772aad9694083ae11a  activerecord-5.0.7.2.gem
bc336a970b5d1c2c2e9e1494afd6ff585680dbab6f12d95acd17ee1be8d6de09  activesupport-5.0.7.2.gem
3ce2eac8fa58ce138e3e2a2fa9b544c8f43128e0c24d0a1d8d751b3a515bb82a  rails-5.0.7.2.gem
4dc24c2dbe4b89ce7c2975cbdb601fcb868de3f1992c00629991033a86059c18  railties-5.0.7.2.gem
```

```
$ shasum -a 256 *5.1.6.2.gem*
381b8945ed2bf7aea3e56be8ec6265a9db0e6443d5d1be169484b91ba3041926  actioncable-5.1.6.2.gem
e1c30d19963b365db87daf122620dc9cb006938f0f6d3ac28e0f2da511fd1b6c  actionmailer-5.1.6.2.gem
56c17b7a665a8b1ac816d7ed9fda5d36e605fc4951b0b9455bf464f2ba34d08c  actionpack-5.1.6.2.gem
127da709aa88c749c3723b7fc3b02bbaf22767f1114d4910cc626eba6027e7e5  actionview-5.1.6.2.gem
d6511d6cdf23920bfa1b0062966d5a2468cc8ee705b921e2ef0547bee541c9ac  activejob-5.1.6.2.gem
b324ff341f2410a509e655000206b521fed43ff295de2589eb5eeed18d931985  activemodel-5.1.6.2.gem
3f45f3bbdaf0e6583853393adac564457def668fc26023093e061dc6b977eebd  activerecord-5.1.6.2.gem
ed88feb866ad705e79cd5ca6c8f3dd39d8571df02abf0d10b34889576c93bb4f  activesupport-5.1.6.2.gem
8e721f8e6c7ea0dfd6dbf7fe215f2c40b1de5d104b6cf5d1e1313dc02be640e9  rails-5.1.6.2.gem
a385a8620eb3a5f11c2ac2c2d50cc2dba268dfc0e26b07a566b03a2dbff17ddf  railties-5.1.6.2.gem
```

```
$ shasum -a 256 *5.2.2.1.gem*
4125771d4a3c6fb9a38d1617eae08abdb2a0418c2f23d8f891bfa1f3736d15ca  actioncable-5.2.2.1.gem
622e4fae71442c5d7df7e77eeb932f17c27093055a737d4a7a5b4e0d407c4c47  actionmailer-5.2.2.1.gem
8a223ad2f06e51ee624993589b77dc4401645bb3bda3faa5ab04758cf39cab4d  actionpack-5.2.2.1.gem
3f9c1868cd07708bddec82a83f8091d48e6f529bb4c7c25167e428f50aeef278  actionview-5.2.2.1.gem
b8271b919108a743bbd79d6da3d3ee9bcdd7529294175eaf7a16d26caf984251  activejob-5.2.2.1.gem
55d56bcaefcff47d85bfac98d40e57d5ac0b923575abb5fdd0dd6a064f381381  activemodel-5.2.2.1.gem
e21d5ff1f2a0f79aa446e84563978f628c42caf1db7b4804c43e585bf28bb600  activerecord-5.2.2.1.gem
4664ace24b43227a42d943cfc8aae59dbe79091ee70cf7be257b4553e50fd8bf  activestorage-5.2.2.1.gem
d0a7b92b46e34de7cca05ed74d9659b205f91a0a7fda9f2ea5a3f53ae00b2a81  activesupport-5.2.2.1.gem
e45c26eff3d7bdfa989ab884754f25d4a274b4b6324df9d9a4a7168cc32ccbe0  rails-5.2.2.1.gem
44b2cfe87f78cb3069362a15c8c3b49ff5a02ea01d60dd2685e1112a9e01e938  railties-5.2.2.1.gem
```

```
$ shasum -a 256 *6.0.0.beta3.gem*
749a4eed1702e463fef97b2dfa0aed961b6a13931f50ac92bcc176b98bb5159e  actioncable-6.0.0.beta3.gem
b7c4936ffa9697a5d6ea397a28d1f67f3847aebe76a8fa717c61f8ee81d3efcc  actionmailbox-6.0.0.beta3.gem
be8af2a7d9af39f4ee0252b5104204c6b36d7d2ca0ac0bdc0063230c247e711a  actionmailer-6.0.0.beta3.gem
7d070d5853f19c685d22a790d6be919356727a281ab2b30c8104c30dc5e045f4  actionpack-6.0.0.beta3.gem
faf1f28e70a9faf04ac2077fb4e2f518ac76a29e8e1c487f3d9658118553eaf0  actiontext-6.0.0.beta3.gem
91c72834addba79ff315c56f2924ee1a8fba99db45c65ccd0406e4b611d7b1a4  actionview-6.0.0.beta3.gem
c8f76f01156bc6542d17e116b4c9971f969f663badacd2e0cf036baaff796ae9  activejob-6.0.0.beta3.gem
3bc73125ba7105391779ee41e929a7d2b989a733efe86c84594654ae26a7e95a  activemodel-6.0.0.beta3.gem
d31e3c6ae3207dd27bc4fed178dd43c592b1a3d42f3df3f0780abbb27e8ea3f1  activerecord-6.0.0.beta3.gem
d4a743473431153c4f502409bb8d9dc57d9252687f85a94a932772eed6f0f95d  activestorage-6.0.0.beta3.gem
7193da2b92e4f9da95e4cfa2a878911cb420f535343613df0398dfe60ff9c868  activesupport-6.0.0.beta3.gem
b08df88e745edaca9b38162e115bc14935bbf6749eaf4809745c9679d7816c07  rails-6.0.0.beta3.gem
24aa0b8df380fc847ae0eb4d951eeb3b4f9d388aff84eab5f7a43c477c423c95  railties-6.0.0.beta3.gem
```
