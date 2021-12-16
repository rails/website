---
layout: post
title: 'Rails 4.2.11, 5.0.7.1, 5.1.6.1 and 5.2.1.1 have been released!'
categories: releases
author: rafaelfranca
published: true
date: 2018-11-27 16:20:00 -05:00
---
Hello everyone and happy Tuesday!

Rails 4.2.11, 5.0.7.1, 5.1.6.1 and 5.2.1.1 have been released! These contain the following important security fixes,
and it is recommended that users upgrade as soon as possible:

* [CVE-2018-16476 Broken Access Control vulnerability in Active Job](https://groups.google.com/d/msg/rubyonrails-security/FL4dSdzr2zw/zjKVhF4qBAAJ)

RAils 5.2.1.1 also includes the following security fix:

* [CVE-2018-16477 Bypass vulnerability in Active Storage](https://groups.google.com/d/msg/rubyonrails-security/3KQRnXDIuLg/mByx5KkqBAAJ)

The released versions can be found in the usual locations, and you can find a list of changes on GitHub:

* [Changes in 4.2.11](https://github.com/rails/rails/compare/v4.2.10...v4.2.11)
* [Changes in 5.0.7.1](https://github.com/rails/rails/compare/v5.0.7...v5.0.7.1)
* [Changes in 5.1.6.1](https://github.com/rails/rails/compare/v5.1.6...v5.1.6.1)
* [Changes in 5.2.1.1](https://github.com/rails/rails/compare/v5.2.1...v5.2.1.1)

We've done our best to minimize any impact to your applications, but if you run in to any issues, please
[file a ticket](https://github.com/rails/rails/issues) and we'll do our best to help!

Again, as always, if you run in to any bugs, please file them on the Rails issue tracker which is located
[here](https://github.com/rails/rails/issues).
If you run in to security issues, please follow the reporting process which can be found
[here](https://rubyonrails.org/security).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

```
$ shasum -a 256 *4.2.11.gem*
951c7ddd998b25f51ac01e3da5b552acb4341af325bb744b6d1b567fa0a6737e  actionmailer-4.2.11.gem
f97004512791f29220b08e0fb3394fa6235049d48a043f490552bee3078db38f  actionpack-4.2.11.gem
8bb47c377295f91a685afb993d78d5a628b3afa04739047bd71af6fe3ac07c27  actionview-4.2.11.gem
d35b4027c2a07f6637a480db50da7576dc11239c59cb66b805e253e284d0d88b  activejob-4.2.11.gem
b89604b0252e1b5eea47de4c5e3ff4b3d713c3c5ab3802c87a37b0e296da5885  activemodel-4.2.11.gem
258e61c64256c024d703d90d259dd183b526a10083eda518c94b2bcb52a880eb  activerecord-4.2.11.gem
c49aa608ef07ae6164211b4208292386947c58b925aeb3157a746f587911195f  activesupport-4.2.11.gem
dd12ffea8f548accec41ae1ef6add3cf9f1e00275744f92da60a713a0b0d1766  rails-4.2.11.gem
2186005ddf9e48fcbc98bb37c8bf127d0681826938cb053c896e03dde717a327  railties-4.2.11.gem
```

```
$ shasum -a 256 *5.0.7.1.gem*
2befb790e89ca0573f2f25d7458aee45aff694a4a9b3ee2049ec7b13a8628390  actioncable-5.0.7.1.gem
1556a928f279ede0a98b41f5bd44b641d5a966acf50e93916619048a9e2fef1c  actionmailer-5.0.7.1.gem
3cd3bd78fd02ab186da87b8c331dda4dc74904a5aa40b2d834347c65037fc3fe  actionpack-5.0.7.1.gem
41258b51f5ac18bc55e77442eb93bde161781fbff7c45d913a0bfb45530e7f14  actionview-5.0.7.1.gem
9b1e8f49b09d3aa28c0c7ad3eae0bf7deecbc03c557d49fd4c49159ff0d53971  activejob-5.0.7.1.gem
0ce4d73d02392f835b11c138dc61af36388663fc9636313d055d90621f4500c5  activemodel-5.0.7.1.gem
8c1cd39637c8810d8fac7948a9dacf06075e6007b39400d48f34abb4db3e6ae3  activerecord-5.0.7.1.gem
eba9b4423a433535f7ddf320a0d1590695a24b69b9525bea5f32fe3d2babb609  activesupport-5.0.7.1.gem
3ce11ed1acf1eea4b4b35b4516251e81a5cbbd889227432b232409cb9c658a2e  rails-5.0.7.1.gem
d92aaa635282faad3feb3aab75ea34587f05f142dc65e02044b253e56414d0b1  railties-5.0.7.1.gem
```

```
$ shasum -a 256 *5.1.6.1.gem*
3f011a9732531f6e00f213910a66b5d1ec5f9c8cd0b208c32ed9a014008e517f  actioncable-5.1.6.1.gem
e89c2f24e1fb82b16927c9c7140a09d405e54d35ebb964c4a199843683559d29  actionmailer-5.1.6.1.gem
3e3875f18e1548e413f5a48d695e6e77646f5b687d9d4e149c75285c1ece26a7  actionpack-5.1.6.1.gem
5783dc24973b15cb33e48341b268c6b3ad2e5750f536d36eb9d489274846dc1c  actionview-5.1.6.1.gem
8875a51226f5a4f75ba2be209c0b801bae602d1f9471db495b0a67f10e8158e7  activejob-5.1.6.1.gem
00ccdcd6003c11640e813d8511ad7362ad823e0db95637bf2239f1e1196489d8  activemodel-5.1.6.1.gem
4946ae8a770d9a58fecfa16791769dff6e837c8e8970a04b9c2854d584580947  activerecord-5.1.6.1.gem
fa78e56360106d5e508818a4f0b5d234ea1f2183c755134b6276aba1101c3831  activesupport-5.1.6.1.gem
f64f110ff439f10616e87e35dee23aeb0932e77869c64b3e2239b1332db5c863  rails-5.1.6.1.gem
ac32ff49acd522522bbb87cc69d37a448e6e856b72bccee098c80a0d565d2640  railties-5.1.6.1.gem
```

```
$ shasum -a 256 *5.2.1.1.gem*
8dc3251fb9dc898a693243d0f5488ef5bbfaefc92c2fd744db4554b0b739ce9c  actioncable-5.2.1.1.gem
f932baa262e1309ee0a4b5784e63a91cc9808a68fa3475f4469718c80d6a9d5f  actionmailer-5.2.1.1.gem
731c5a5b31811d530623f4bf35aade7a9bc7b76da72a006a4eedd2359efb62b3  actionpack-5.2.1.1.gem
9c449f59f03890dceb8bb05f53c2b6b331a37180258a605e27e48982114feebb  actionview-5.2.1.1.gem
b9bbb83cc41e2bff53f6cc1f5a57c6edcefca0e63084621bcad43c6aca37edfc  activejob-5.2.1.1.gem
c2627b30d7be62d3849943e86e1df34d2275f75e4f478b550ce77d84c3f61a96  activemodel-5.2.1.1.gem
46b27c575c9e2c6810c2b9223f0034b54e9d061c2b8c72f3dd4226947debee58  activerecord-5.2.1.1.gem
451b837320e6c2da51974d1b844d120718c726b5e13e905b0ba83e2759991c92  activestorage-5.2.1.1.gem
6e055f81d0ec158475faed1bb4e00c8030b67ecc2b7aee83be24c995a5d1a1dc  activesupport-5.2.1.1.gem
b5e1fe216d108d6908e23aaaed563dcf8fae7ec92c4ea776607732785bad8f10  rails-5.2.1.1.gem
1030556e9bb07d192429659cbe5561339bbe845f9d78194a34bbc040653c7685  railties-5.2.1.1.gem
```
