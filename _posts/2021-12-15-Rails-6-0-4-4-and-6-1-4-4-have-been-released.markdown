---
layout: post
title: 'Rails 6.0.4.4, and 6.1.4.4 have been released'
categories: releases
author: rafaelfranca
published: true
date: 2021-12-15 18:10:00 -05:00
---
Hi everyone again!!!  Rails versions 6.0.4.4, and 6.1.4.4, have been released!

This release wasn't a security release. There was a bug in the previous release such that requests in development with a
port number wouldn't be considered "authorized" requests. Requests to
"127.0.0.1:3000" and custom hosts should work in this new version.

I'm sorry about the inconvenience and I hope this upgrade is smooth.

Thanks everyone!

- Rafael

```
$ shasum *6.0.4.4*
ec84233bc33aca91429664efadf0376bedc9789a  actioncable-6.0.4.4.gem
5225bfdff98beb47659dd61fa630d6fb92f03922  actionmailbox-6.0.4.4.gem
de8a6fe37b4c1f0c8894356cf3165f34f10f2c69  actionmailer-6.0.4.4.gem
e5a078c62aa2678d74af8ab9d800fb2d239b4b9a  actionpack-6.0.4.4.gem
8970ed0ac2f081c19871bf58b84da207990a5d84  actiontext-6.0.4.4.gem
0d7e3c167e73f5af39441d80c8e0a4ba47f2ed88  actionview-6.0.4.4.gem
077efd3622665fc6cd988e65039ef3c0c2fae11b  activejob-6.0.4.4.gem
7d1c075df7a967a4ca9c244aa01eb9233f174edd  activemodel-6.0.4.4.gem
6103fcaf49f03fcce0fa8521eee064fafb5c6986  activerecord-6.0.4.4.gem
ab5f58814f6c06abe5382a7f12311480f3c12f29  activestorage-6.0.4.4.gem
b173feb0e4d1fc839957ddc08a3cb2ab8c81599d  activesupport-6.0.4.4.gem
cb71f8520cbf8f9af279763958d914d33809fefb  rails-6.0.4.4.gem
bb2314d8a22faededd21e5c83e5b4f971b0c5ab5  railties-6.0.4.4.gem
$ shasum *6.1.4.4*
e65e4d3f1aa18391d3bbf8e2af1f62cf36bc2f21  actioncable-6.1.4.4.gem
f541016fbce90a574f43c72f7942824ced3ea010  actionmailbox-6.1.4.4.gem
48cd92a9914a71d6ce9cbbe781fa87aaa719b1ec  actionmailer-6.1.4.4.gem
2f55e98da89ba4b563dd2dafedd49f5452cf5672  actionpack-6.1.4.4.gem
c302d7c74bdeaddea7a4fd6f634e65b1b5562879  actiontext-6.1.4.4.gem
a56c62d357167635afa77c04c6d5f04a7537e1f7  actionview-6.1.4.4.gem
c080d044f2f221346b61261644754f08e972130d  activejob-6.1.4.4.gem
ce2407cb4c27767d1e43bf016ac6431fa5c328ad  activemodel-6.1.4.4.gem
075dae004fce1ad9bf10ebe3e5f076eb57fa1245  activerecord-6.1.4.4.gem
da03b455467cd4aae18f482f52b03aae105afed6  activestorage-6.1.4.4.gem
40361c1f3c1e0e35644d36265800115eb5f012eb  activesupport-6.1.4.4.gem
2c7838f12627b3d2a8fa57b3d7d65cbc5ba0166f  rails-6.1.4.4.gem
f8e35739f8d0c4b4d20127ade2286e5f4bb546df  railties-6.1.4.4.gem
```