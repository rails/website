---
layout: post
title: '[ANN] Rails 4.2.1.rc4 and 4.1.10.rc4 have been released!'
categories: releases
author: rafaelfranca
published: true
date: 2015-03-12 18:41:06 -03:00
---

Hi everyone,

I am happy to announce that Rails 4.2.1.rc4 and 4.1.10.rc4 have been released.

There were found some regressions in the last release candidates so, following release process we are
releasing new release candidates.

If no regressions are found expect the final release this Tuesday, on March 17, 2015.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@rafaelfranca) on it, so that we can fix it before the final release.

## CHANGES since 4.1.9

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc4/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc4/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc4/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc4/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc4/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc4/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.1.10.rc4/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.1.9...v4.1.10.rc4).

## CHANGES since 4.2.0

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc4/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc4/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc4/actionview/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc4/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc4/activerecord/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc4/activesupport/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc4/activejob/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v4.2.1.rc4/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v4.2.0...v4.2.1.rc4).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 4.1.10.rc4:

```
$ shasum -a 256 *4.1.10.rc4*
93f9bccd7920d41af334bd41f908d4d01d036ee661530b1d7006087e649bff4e  actionmailer-4.1.10.rc4.gem
d614facc52b04032bb6d5a126c157250a8538928fc44fa7d5939ffe1c20abe41  actionpack-4.1.10.rc4.gem
481251461e4b323007a1e3672b136c9f69925f00efc658b1ce5bf3c42ee77151  actionview-4.1.10.rc4.gem
da5d4b4d640dbb8c114f3cb908883efe8873ada149860c2e54f88e53e8a231bc  activemodel-4.1.10.rc4.gem
e3abf43e7ab7e3d48f68dd043c01603d8017865595276203f909dc62c5503ad2  activerecord-4.1.10.rc4.gem
fff8f641190860b4d22b2197f186a280574c7eaba3f1e57e0289d4114a3ef54c  activesupport-4.1.10.rc4.gem
178baf8604ad8212cb76c6e36052031de4ed2fc03d9f63e470735c482e1164bd  rails-4.1.10.rc4.gem
8fe2da153ab8a4954a001d8b646dc4c441f3b4e275e5c9f1de124d180aace94d  railties-4.1.10.rc4.gem
```

Here are the checksums for 4.2.1.rc4:

```
$ shasum -a 256 *4.2.1.rc4*
5ab74d4319c41f4e0967d9b1f675cbcb98cae72f7ab5ef2c07c321092c66a708  actionmailer-4.2.1.rc4.gem
09933d78c9ed055d6fea82ee2557910cc0090efab3b7f4291cb2ca32bed6a907  actionpack-4.2.1.rc4.gem
7e56026b4822c1ab614b867e8304282464cb967150915eee52ae1bb891dc9306  actionview-4.2.1.rc4.gem
f8a4e712fb0960979147d051e15693b9e2c49b0527f2b88d0af26c577a038843  activejob-4.2.1.rc4.gem
79a587ecf7b10a9e7b3ad3aa15a8d6a4f934f118f554372aa755100ccafd7b06  activemodel-4.2.1.rc4.gem
19815873691a559d5a8142110dd7a1ad9519c9e40e609adc2cbea62c514fcb49  activerecord-4.2.1.rc4.gem
d62066327e4a7ecddfc8b6f43a996dbdc2de27eade12370ad16e5f58797ba9a8  activesupport-4.2.1.rc4.gem
67b780da327c1ff8efee6e6d41e1fd735e4fa8734bc34ae450bb587db34ff8ad  rails-4.2.1.rc4.gem
a0ab1d80c7cfaed985a9704b874df28fbc677fe2ab6041a2e2f77a6daeb4b299  railties-4.2.1.rc4.gem
```

I'd like to thank you all, every contributor who helped with this release.
