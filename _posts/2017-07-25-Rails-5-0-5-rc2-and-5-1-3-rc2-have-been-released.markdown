---
layout: post
title: 'Rails 5.0.5.rc2 and 5.1.3.rc2 have been released'
categories: releases
author: kaspth
published: true
date: 2017-07-25 22:26:35 +02:00
---

Hi everyone,

I am happy to announce that Rails 5.0.5.rc2 and 5.1.3.rc2 have been released.

If no regressions are found, expect the final release on Monday, July 31, 2017.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@kaspth) on it, so that we can fix it before the final release.

## CHANGES since 5.0.4

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v5.0.5.rc2/actioncable/CHANGELOG.md)  
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v5.0.5.rc2/actionmailer/CHANGELOG.md)  
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v5.0.5.rc2/actionpack/CHANGELOG.md)  
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v5.0.5.rc2/actionview/CHANGELOG.md)  
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v5.0.5.rc2/activejob/CHANGELOG.md)  
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v5.0.5.rc2/activemodel/CHANGELOG.md)  
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v5.0.5.rc2/activerecord/CHANGELOG.md)  
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v5.0.5.rc2/activesupport/CHANGELOG.md)  
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v5.0.5.rc2/railties/CHANGELOG.md)  

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v5.0.4...v5.0.5.rc2).

## CHANGES since 5.1.2

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc2/actioncable/CHANGELOG.md)  
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc2/actionmailer/CHANGELOG.md)  
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc2/actionpack/CHANGELOG.md)  
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc2/actionview/CHANGELOG.md)  
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc2/activejob/CHANGELOG.md)  
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc2/activemodel/CHANGELOG.md)  
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc2/activerecord/CHANGELOG.md)  
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc2/activesupport/CHANGELOG.md)  
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc2/railties/CHANGELOG.md)  

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v5.1.2...v5.1.3.rc2).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 5.0.5.rc2:

```
$ shasum -a 256 *-5.0.5.rc2.gem
dfcbee8aca863312a170b1075d9a740cfaf60c68d9a4351e23d2783dd63450a1  actioncable-5.0.5.rc2.gem
c2f6615b14485b4c7b5a9b37712087cd90af5fd3ad0fec470ff3c08660dcfce2  actionmailer-5.0.5.rc2.gem
650abc83a3e475169ae8c52b366bb73f358533b0611f53bec102ff3676a94855  actionpack-5.0.5.rc2.gem
fd83b598a5e1a76d379f373bd6788e238517f01a1589e99295f5fa67be9e24b0  actionview-5.0.5.rc2.gem
0ec63149a7f9d8316e37337a151700d34db07b6cf3b326548e54370db2a15779  activejob-5.0.5.rc2.gem
31a3248f20cd0c8c466e68c50bace354dad56033412d6404c2cfd27aad892bac  activemodel-5.0.5.rc2.gem
c558ce4d2011a5729d647cc83d19878745a4d1472a2b526f8ba1b54efd4eda98  activerecord-5.0.5.rc2.gem
73d8d516919c22d27f4d16a241cf7e41ddd152c23d2a6317a62e032ae064b36d  activesupport-5.0.5.rc2.gem
35792281ba2c7af605f2b17453856dd6ee64649d94545e8501ec91db111a6451  rails-5.0.5.rc2.gem
46111198cde865ba3512a828342fe35810671661fbc58b3f8ae5c749e1372239  railties-5.0.5.rc2.gem
```

Here are the checksums for 5.1.3.rc2:

```
$ shasum -a 256 *-5.1.3.rc2.gem
f2a510b5f274e7cdb9f18dbab316fe1fa703ba91af5e031fe807355633728b3b  actioncable-5.1.3.rc2.gem
303c71c3f8d792f07523fb7bb3afb366dd46293fdccfccaf8491f2db00dc93aa  actionmailer-5.1.3.rc2.gem
d86ac0ffd0dc12cde3ce332b8e4be53b16a8b7b3591c76c75657d114fa26a6fb  actionpack-5.1.3.rc2.gem
f6666a49474da4261c0bc00e9301e46075fe2c6453cf96033f5f3fa05397ceb5  actionview-5.1.3.rc2.gem
61d969886d73f1bf16a06c268dabdc890cc68c7c67c531743e81573e3f3acadd  activejob-5.1.3.rc2.gem
051f8d9fe6811bc8c3be0fc4630db8c740f5d57e3f3a605ca43e02a4790559f8  activemodel-5.1.3.rc2.gem
9e5671a03f0f6f7c3d1eea4c3320e2ae2c9e614add1d2c086e6ee3efcff56cda  activerecord-5.1.3.rc2.gem
7f953d0e72f934fc6c7b1a2dfd4f2e2c96910b3891c550a8fed682ee8c303722  activesupport-5.1.3.rc2.gem
d7ea7b6ee2ad1881f44bec83af5183dad6a52fed6ba7d25430bdab5f2394d067  rails-5.1.3.rc2.gem
2a95a264a470d65b6aa109ddbfcc451f6cd7c1235cbde9c458c19168773d432d  railties-5.1.3.rc2.gem
```

As always, huge thanks to the many contributors who helped with this release.
