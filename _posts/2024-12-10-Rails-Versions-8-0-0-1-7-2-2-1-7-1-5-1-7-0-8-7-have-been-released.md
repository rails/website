---
layout: post
title: 'Rails Versions 7.0.8.7, 7.1.5.1, 7.2.2.1, and 8.0.0.1 have been released!'
categories: releases
author: jhawthorn
published: true
date: 2024-12-10 14:45:00 -08:00
---

Hi everyone!

Rails Versions 7.0.8.7, 7.1.5.1, 7.2.2.1, and 8.0.0.1 have been released!

These are security patches addressing one new issue where using the
`content_security_policy` helper with untrusted user input could lead to a
bypass of the browser Content Security Policy.

We think this usage will be rare, and the default configuration is not
vulnerable, but advise upgrading.

Older versions of Rails are unsupported, and users are recommended to upgrade
to at least the 7.0 series, which will be receiveing security updates until
April. See our [maintenance policy](https://rubyonrails.org/maintenance) for details.

Here is a list of security issues that these releases address:

* [CVE-2024-54133 Possible Content Security Policy bypass in Action Dispatch](https://discuss.rubyonrails.org/t/cve-2024-54133-possible-content-security-policy-bypass-in-action-dispatch/88178)
* Bump vendored version of the Trix editor in Action Text to address [CVE-2024-53847](https://github.com/basecamp/trix/security/advisories/GHSA-6vx4-v2jw-qwqh)

There is one known compatibility issue in the new version of Trix related to
custom HTML tags and attributes, users depending on that functionality should
be cautious. I anticipate making another Rails release soon to update the
vendored Trix once a new version is available.

Cheers!


## SHA-256

If you'd like to verify that your gems are the same as the ones we've uploaded,
please use these SHA-256 hashes.


```
4034513841df2fd09dbbf38f37c1a00fc6c841122a8714e5d6916b8d6ce2f162  actioncable-7.0.8.7.gem
940eeaa3d8e85dcd9fc6069e39571e13c5a4bdb0db52c7ab96d14da81d6ac1c2  actionmailbox-7.0.8.7.gem
8be8f9a2f8774af89822bc92e1ab6df10b3a2be59c75486a34e86a1f10d88d14  actionmailer-7.0.8.7.gem
40e6b1d687904a4fd2285d1fa3aad3d9a9d9ba8fd8858dd0faa9f4673c3f5e2c  actionpack-7.0.8.7.gem
cb75d2db97d5b2c8caccdc0f643541df36c2c53f076a2d49b226f971d8d528a0  actiontext-7.0.8.7.gem
be975bc9c61903fe5da80a97c345271159033bcbba63988c7f27b6b8b98f7fed  actionview-7.0.8.7.gem
eff4db3aeaee34863a47570089d11d5577ed0ea42b1475dc9be6a413be182a20  activejob-7.0.8.7.gem
f13b04bb055c1e85b965ce40b0a2e671b8d97835083597bc7fbc04cde0f40a83  activemodel-7.0.8.7.gem
f94fc8510e58a18e462c5ee8862c9be75e2bfad0688e8d022b86a6e05df2a45a  activerecord-7.0.8.7.gem
ca411e73733a50983f44b0945bfd0612313beb3a8f914cd3a88e4fcd99399ef5  activestorage-7.0.8.7.gem
df4702375de924aae81709c831605317c5417f0bd9e502a0373ff84a067204ff  activesupport-7.0.8.7.gem
5e67ed4dd915746349bfb8c7ae2f531d3a36eb68fbe2f60ede02a0500715cded  rails-7.0.8.7.gem
1ab985280b02bc4b176d36e1011148db600b763c646e3de88c02a665d864505f  railties-7.0.8.7.gem
```

```
764637b5b2d97b94e412d562c177bfd16b0fd769d55c98846362f5263e8aaa0d  actioncable-7.1.5.1.gem
c3c20589fe43e6fa88bba2d76a6f9805ffdd02531f4a9a4af8197d59f5a5360a  actionmailbox-7.1.5.1.gem
b213d6d880b23b093ccfef3b4f87a3d27e4666442f71b5b634b2d19e19a49759  actionmailer-7.1.5.1.gem
2bc263d9f43f16cc3b3360f59659ab11f140577602f371f1a968e2672b38d718  actionpack-7.1.5.1.gem
b8e261cfad5bc6a78b3f15be5e7c7f32190041b3dc6f027a3a353b4392d2f7ec  actiontext-7.1.5.1.gem
8c559a213501798e29b50b5341a643a70bbf6fa0aa2abaf571d0efc59dc4f6aa  actionview-7.1.5.1.gem
7633376c857f4c491d06b5a7f5d86d9f07afc595398354a3f1abe80eb7e35767  activejob-7.1.5.1.gem
74727466854a7fbdfe8f2702ca3112b23877500d4926bf7e02e921ad542191f1  activemodel-7.1.5.1.gem
f40ad1609bf33b9ba5bdc4e16d80a77b1517153234ceb413d31d635d7b91f1e3  activerecord-7.1.5.1.gem
ae6b8b076858c666eaad6f896d786b67654235e861e24a83f61f1cc97b43ff63  activestorage-7.1.5.1.gem
9f0c482e473b9868cb3dfe3e9db549a3bd2302c02e4f595a5caac144a8c7cfb8  activesupport-7.1.5.1.gem
05aea2ed7b6392b41ce0fc11455de118455025a431b6ea334a7ac2b101608804  rails-7.1.5.1.gem
0be15562e2ded4efdc1b6c30f884b6d838c9ba49573dde042334b752b043e2fb  railties-7.1.5.1.gem
```

```
5b3b885075a80767d63cbf2b586cbf82466a241675b7985233f957abb01bffb4  actioncable-7.2.2.1.gem
896a47c2520f4507c75dde67c6ea1f5eec3a041fe7bfbf3568c4e0149a080e25  actionmailbox-7.2.2.1.gem
b02ae523c32c8ad762d4db941e76f3c108c106030132247ee7a7b8c86bc7b21f  actionmailer-7.2.2.1.gem
17b2160a7bcbd5a569d06b1ae54a4bb5ccc7ba0815d73ff5768100a79dc1f734  actionpack-7.2.2.1.gem
f369cee41a6674b697bf9257d917a3dce575a2c89935af437b432d6737a3f0d6  actiontext-7.2.2.1.gem
69fc880cf3d8b1baf21b048cf7bb68f1eef08760ff8104d7d60a6a1be8b359a5  actionview-7.2.2.1.gem
f2f95a8573b394aa4f7c24843f0c4a6065c073a5c64d6f15ecd98d98c2c23e5b  activejob-7.2.2.1.gem
8398861f9ee2c4671a8357ab39e9b38a045fd656f6685a3dd5890c2419dbfdaf  activemodel-7.2.2.1.gem
79a31f71c32d5138717c2104e0ff105f5d82922247c85bdca144f2720e67fab9  activerecord-7.2.2.1.gem
b4ec35ff94d4d6656ee6952ce439c3f80e249552d49fd2d3996ee53880c5525f  activestorage-7.2.2.1.gem
842bcbf8a92977f80fb4750661a237cf5dd4fdd442066b3c35e88afb488647f5  activesupport-7.2.2.1.gem
aedb1604b40f4e43b5e8066e5a1aa34dae02c33aa9669b21fd4497d0f8c9bb40  rails-7.2.2.1.gem
e3f11bf116dd6d0d874522843ccc70ec0f89fbfed3e9c2ee48a4778cd042fe1f  railties-7.2.2.1.gem
```

```
cfe444bcd1e22efe8130989ba73e0c8086606fde1d2f0043babb33e3ed2f0118  actioncable-8.0.0.1.gem
a776880786fdbc20c3ceef6e52003a327de34abc668ce3edf8d6aae043f15346  actionmailbox-8.0.0.1.gem
152f1502f3e8725c97e12ad9d6354bd3995ebac913392639c35df11e3e6e78fd  actionmailer-8.0.0.1.gem
0a31046e0a9b39f28898eaca465843b7146adf781bd85bd60efd812eb17fff0e  actionpack-8.0.0.1.gem
3d2e656556aed2e14fa0c6e54e7f7af1376b6bd2b49bfebd3312f6ef87fdb0e7  actiontext-8.0.0.1.gem
39bd66e6b75eee9a7aa9d5902f092cf9834a7f46aecf5463b53ebe8d069e0379  actionview-8.0.0.1.gem
f95af88f460f4d77e008532fa1d70820c5a0bdf6a6e0e52a297d476564eff44e  activejob-8.0.0.1.gem
aba84f3bf9d382ce0074defd6da8dfe20957c1d98aeed5172e3c42882455e1ec  activemodel-8.0.0.1.gem
23f20decbcbc4ffd3ddaf5000d0f07cf8bca5972203f0fdf4ba651e3b6080dee  activerecord-8.0.0.1.gem
9687fe2eea60c9868d60f1dd56b2e3f0fa7e709629cbcdb4eae8a28b36d9e0b6  activestorage-8.0.0.1.gem
8d4df7918f51533bf6269e2a7d18f5bce929a2a380d41473b6bd6b04161ab251  activesupport-8.0.0.1.gem
67d612af8bb25a285359dc0bfc40deb2060a7511dcad7f3d9deee3c83c440dd1  rails-8.0.0.1.gem
64261d06f39115f49e378160e4ef98903fbf14b14944a764d45e5fe2600186c6  railties-8.0.0.1.gem
```
