---
layout: post
title: 'Rails 5.2.5, 6.0.3.6 and 6.1.3.1 have been released'
categories: releases
author: georgeclaghorn
published: true
date: 2021-03-26 18:24:00 +00:00
---

Hey everyone! Rails versions 5.2.5, 6.0.3.6 and 6.1.3.1 have been released. These versions upgrade
Active Storage’s [Marcel](https://github.com/rails/marcel) dependency to version 1.0.0.

Before 1.0.0, Marcel—which is distributed under the terms of the MIT License, like Rails—indirectly
depended on MIME type data released under the incompatible GNU General Public License. Marcel 1.0.0
instead directly packages MIME type data adapted from [Apache Tika](https://tika.apache.org),
released under the permissive and compatible Apache License 2.0.

Here are the gem checksums:

```
$ shasum -a 256 *-5.2.5.gem
3771ca29ee67914eda1b5de3d66a0c4bb0250bb244d76e8690dc5af2ff10e699  actioncable-5.2.5.gem
5f58ae625622b1e5d2bf96101527a99e380f270fe030e2477d462f5229a7d5c5  actionmailer-5.2.5.gem
15703d20c4a87c8145e78d36307d0c14fc6c9d838545f7c2d00c693a2d6b3cd5  actionpack-5.2.5.gem
5158c075313cede79d8229d817e802475a4c13efc5ab14b7b9ac525e17738cf6  actionview-5.2.5.gem
4c069412c5a76edf1c7883d991ed022d3601116cae5564f9cc15a7be08756502  activejob-5.2.5.gem
cb00207f343b7909cb1c941aadc03aa3f1f3e88c5860cc37710fb4ae170066ad  activemodel-5.2.5.gem
92f273af4904c37aa7c1168280353d46df5cf06e0a22733ff5b5b67e2a96f10f  activerecord-5.2.5.gem
0dbf83f484898049d9de88bf485967fb9d9b22d87f0852707e2ad1ce72c4069c  activestorage-5.2.5.gem
f257fc30343ee959ae8a5f7c632ec155b1f82bdf184efe71a0a9b402ecce3fae  activesupport-5.2.5.gem
4c14aa2558250f2dbb85d4a5c6046159ff7cf285b86c367d9dae3eabcd501adc  rails-5.2.5.gem
89aaedf132bf29419a7fccfc3cf1563153698f898364ea6c197b2176dbbf5a1c  railties-5.2.5.gem
```

```
$ shasum -a 256 *-6.0.3.6.gem
290f31df35234c011fd935fa58c38d21fbf28123c8813a1025fa60b7c8b88394  actioncable-6.0.3.6.gem
436f4954e663c214ae1c011dfd7b53ecab9d1a4dfeb4d9352d24f30f613ddd36  actionmailbox-6.0.3.6.gem
6e487e398276c2af9f451a105890ed552168d4a1ac53001e47e09c8e4fdadab2  actionmailer-6.0.3.6.gem
df8f06b949a5ac4b076bf59327fda2958ba330718c9add472af5726beb3b3683  actionpack-6.0.3.6.gem
5d174b50d91699ab6fc655d161fcfb0155b802d0ff3ea5ffc03aa4743fe9278e  actiontext-6.0.3.6.gem
e56bce415cffa2494d2e527cf44d886a4821ad103816dd0caefd2c9d75bf7846  actionview-6.0.3.6.gem
ecca43ddf86c454a882644495983d56cc2af8ed7e6bfc35be6b42a77a89fc9eb  activejob-6.0.3.6.gem
8db2cf0cfda5a28c2110725ec3a5ea65078cd80a53ddf05b1863ab59e1437896  activemodel-6.0.3.6.gem
7f13a2f1c085e0182d002ca10e584fd89f44acce897d2eb3abc4d7aab26070a8  activerecord-6.0.3.6.gem
c2281a5afa4ae5d89d9fd888cb186ed94cc4f61558b89cb53efbbc002c768dcb  activestorage-6.0.3.6.gem
ffec387149059506ea6623909c8c78f4bb25d9338491606fac5fb49bfa199a6a  activesupport-6.0.3.6.gem
790a078dad5832c6b93c460cd9f530f85cf3233a4306135713e97c9f30e9bc06  rails-6.0.3.6.gem
9935f0cbb7da1417ec45134b2b82518dd303a2d7bc832b5ac7dcccc6f4daa044  railties-6.0.3.6.gem
```

```
$ shasum -a 256 *-6.1.3.1.gem
0e9af083e8287ed67598f30ac0e9b6b19fda9ae8c6704540c3be9f78e0e02637  actioncable-6.1.3.1.gem
c442b2419cc0523355e77813800bde86f8649d1348e3b1fdb9bd2e1caac06c70  actionmailbox-6.1.3.1.gem
3186973422d29ea06c996e214b547ba292139e5302136261aaaa74f9d8344af3  actionmailer-6.1.3.1.gem
3f261656798bf6eb05826346aab6930e72b43d42721e85bac88eb05ad74c392f  actionpack-6.1.3.1.gem
abd6a9c82601632d94bb5a830b2da0f6387100b579433ab6607f9cc7fce9c711  actiontext-6.1.3.1.gem
2409c795c5c27631b854cbe5762828e657780a6f788d7024e7100211674c0054  actionview-6.1.3.1.gem
56f8db09344833b8bb426fbf76c91f795fb9340b4b42482c4dce794cb2635c7e  activejob-6.1.3.1.gem
b52bb9d4cff30e3084c10b88dff081e5e0ccbdee5446a56a78c5454892a41a85  activemodel-6.1.3.1.gem
af7acff9dbd71c974e1eb6c3059067e100d57e377db30e6135475669712c6acb  activerecord-6.1.3.1.gem
b7d056ec86d200adc7e288e345c743a17ada89afac8b2ba6ff350503e2d400a0  activestorage-6.1.3.1.gem
8c263a78c1278d621be523185788c1fcc0de78d9cf572b7b08c6feb3f2831350  activesupport-6.1.3.1.gem
68889774d4716a7817f32ad18eefd2a5737966539cde5308c0536ef784e786fa  rails-6.1.3.1.gem
ebe4ea356726f4422559607d20be580566cdac9f57027044a4c3a628759c6cd4  railties-6.1.3.1.gem
```

Have a great day!
