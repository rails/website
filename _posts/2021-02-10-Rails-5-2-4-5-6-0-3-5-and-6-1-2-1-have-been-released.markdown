---
layout: post
title: 'Rails 5.2.4.5, 6.0.3.5 and 6.1.2.1 have been released'
categories: releases
author: rafaelfranca
published: true
date: 2021-02-10 21:43:28 +00:00
---
Hey everyone! Rails version 5.2.4.5, 6.0.3.5 and 6.1.2.1 have been released! Those version are
security releases and addresses two issues:

* [\[CVE-2021-22880\] Possible DoS Vulnerability in Active Record PostgreSQL adapter](https://discuss.rubyonrails.org/t/cve-2021-22880-possible-dos-vulnerability-in-active-record-postgresql-adapter/77129)
* [\[CVE-2021-22881\] Possible Open Redirect in Host Authorization Middleware](https://discuss.rubyonrails.org/t/cve-2021-22881-possible-open-redirect-in-host-authorization-middleware/77130)

Here are the checksums for the gems:

```
$ shasum -a 256 *-5.2.4.5.gem
729c0ef823966a42519924c9f663f8cc81264a75b022777fab32087352299de6  actioncable-5.2.4.5.gem
d73f50d0d32feba6e4170d1c03d877ce72c422d5beb2aad39853e1eb9bf0c5a7  actionmailer-5.2.4.5.gem
182e5328ab1dd9c7f60a473dac01c31dabbe04755019033449d1c16ce91c08b6  actionpack-5.2.4.5.gem
2c2129183e1999a8a8a47ad1125c129e6ee5ad76fa9500cc1f034251da4bae4f  actionview-5.2.4.5.gem
cacf79caf005bbec89a30a4af6494395b2bf281ddf1cb5ee78bee7b513d164d5  activejob-5.2.4.5.gem
f5fcbe15f3bf4390dbc7eb1e2c6a69aa793026a6149e29fec534cb69bb5c8461  activemodel-5.2.4.5.gem
cfc9e2831fac5068b6dbbcf98129a8ba3491ab214d48d7bc5e229faf4232afea  activerecord-5.2.4.5.gem
010152f9f09a9e654f38e1d7092fbb122d6ded58205692b7c40ebcbe8755238a  activestorage-5.2.4.5.gem
8c25759e6c5df1de673e9bfc35e42f4c5e021d47a8dde103a00f17f1467ee43a  activesupport-5.2.4.5.gem
cd4dd4b224e58a8bc03c3fb182fd748dda2f36abfae6ecd8db145a8c5da8fadb  rails-5.2.4.5.gem
cde5e0326b7f600ac4bed5e1c5fd0a57074ec4c98981e1173f98d4f91d978fe3  railties-5.2.4.5.gem
```

```
$ shasum -a 256 *-6.0.3.5.gem
57da7287cfca8f35007dd7ff317d01dbc862725b1a1799ed150be1d985682455  actioncable-6.0.3.5.gem
8ce0f2b94da995234df28a7cedd9551a6e9fc07b6d066c4a9a4a99e7744570ec  actionmailbox-6.0.3.5.gem
1b187024f960bda2d9d3261e1feb66dd1c38d38f30a7c32a5c8529c0c45d1663  actionmailer-6.0.3.5.gem
7680d8eaa6d62c095c2fc0b5dee6ac847248fa6ffe8de0c5cd3fc86444463683  actionpack-6.0.3.5.gem
3617c8fb6ebb4d6b5277971910c2ce66dba54d23e9ee3de6b8afdbb5b0010711  actiontext-6.0.3.5.gem
3b1c114de883190347b7f693025d627a3091dbc6c33ed9367a985812c6c5241b  actionview-6.0.3.5.gem
a50feb20997dd16901e15303ff0a7ec598c31918487a967a913107a0f1d24695  activejob-6.0.3.5.gem
7018b906bc9131180f19009e66e12329573589f62e3c5cab6a7b6032d5e8db07  activemodel-6.0.3.5.gem
684fb6b075c774a193f2253b6373df7b9f96b9d8a199c3f606fe04849c242d9f  activerecord-6.0.3.5.gem
4a28c519951fb768b9306baf11a31872217449b5b2da2e51d69812daaac0ce1f  activestorage-6.0.3.5.gem
74714fcffa24cda6bef4c66b84207a8ea037c2c1d34cc06c02816187df5d7f55  activesupport-6.0.3.5.gem
0a914868970c2f8cf3ca5e6e331337d630d8994a4bdbe62a919258fcb274fb05  rails-6.0.3.5.gem
273f83c9db727a652fb7921dd3e9fc62de7051faf8c7e9412f10a17661ec2a1d  railties-6.0.3.5.gem
```

```
$ shasum -a 256 *-6.1.2.1.gem
4267ad208cb8465879757d1f96e680325d803c8b73b9766bfb5cd598f35cb2a2  actioncable-6.1.2.1.gem
64485af94d4401b0f9db22316011eab5f5dbf85c914d209d91267ddc041824b9  actionmailbox-6.1.2.1.gem
e592f49d31ac3435a091997858b8acec13ef54d9dcc8167f7ba25fae327ab8db  actionmailer-6.1.2.1.gem
c25cb7dfe362a4d9c92e9a746810a6a9bf4db5c864785b681319b59e4c860ff3  actionpack-6.1.2.1.gem
c04664f9b6b52a0b8dd32dfac08290601b1ddf8a06e926ec0f57a5f9fb38bf26  actiontext-6.1.2.1.gem
93df05374f79cf3d23778c5131babed120b51dcceb2ec79e3efb55a09aed955d  actionview-6.1.2.1.gem
325373503de3ebd2a44d699fc0079d3e2909fb6549145066ad682906e9389023  activejob-6.1.2.1.gem
d19e1931217ed00fafe69fe98d9ee92d385f6a92ac7200a844a5f9b4c548a4ee  activemodel-6.1.2.1.gem
cab04eb203c17429dab1ddcaf8357865eb5e41dceb7ad1fdef69f815870934fa  activerecord-6.1.2.1.gem
5d4f2b696947d141ca98a132d94fc82115ed707c535c13a57db1e9c6e344ab13  activestorage-6.1.2.1.gem
7155b715636faa2970123501f2356d3dc7390dcd9f2f9cb455f91e5d5b4ee250  activesupport-6.1.2.1.gem
32409615eb41eb7719a82715c6d167757f18d9080a6ba7fa7fcf6e1b59f52112  rails-6.1.2.1.gem
fd8a3cd6753230bf51601aa308f04909033870fe3fc8fb0a3e6fb8dde2133ce1  railties-6.1.2.1.gem
```

Have a great day!

<3
