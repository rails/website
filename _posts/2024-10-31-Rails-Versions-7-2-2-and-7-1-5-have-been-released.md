---
layout: post
title: 'Rails Versions 7.1.5 and 7.2.2 have been released!'
categories: releases
author: jhawthorn
published: true
date: 2024-10-31 01:40:00
---

Hi friends!

I'm happy to announce that Rails 7.1.5 and 7.2.2 have been released. These are regular bugfix releases.

This is likely to be the last set of bug fixes for the 7.1 series, which will continue receiving security patches [until October 1, 2025](https://rubyonrails.org/maintenance#security). 7.2 will continue to receive bug fix releases like this [until August 9, 2025](https://rubyonrails.org/maintenance#bug-fixes) followed by another year of security patches.

For those excited for Rails 8.0, we also published a second release candidate yesterday: 8.0.0.rc2. Thanks to everyone who helped us with testing the beta and first release candidate ❤️.

## CHANGES since 7.1.4

To see a summary of changes, please read the release on GitHub:

[7.1.5 CHANGELOG](https://github.com/rails/rails/releases/tag/v7.1.5)
To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v7.1.5/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v7.1.5/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v7.1.5/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v7.1.5/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v7.1.5/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v7.1.5/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v7.1.5/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v7.1.5/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v7.1.5/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v7.1.5/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v7.1.5/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v7.1.5/railties/CHANGELOG.md)


*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v7.1.4...v7.1.5).

## CHANGES since 7.2.1

To see a summary of changes, please read the release on GitHub:

[7.2.2 CHANGELOG](https://github.com/rails/rails/releases/tag/v7.2.2)
To view the changes for each gem, please read the changelogs on GitHub:
* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v7.2.2/actioncable/CHANGELOG.md)
* [Action Mailbox CHANGELOG](https://github.com/rails/rails/blob/v7.2.2/actionmailbox/CHANGELOG.md)
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v7.2.2/actionmailer/CHANGELOG.md)
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v7.2.2/actionpack/CHANGELOG.md)
* [Action Text CHANGELOG](https://github.com/rails/rails/blob/v7.2.2/actiontext/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v7.2.2/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v7.2.2/activejob/CHANGELOG.md)
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v7.2.2/activemodel/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v7.2.2/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v7.2.2/activestorage/CHANGELOG.md)
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v7.2.2/activesupport/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v7.2.2/railties/CHANGELOG.md)


*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v7.2.1...v7.2.2).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 7.1.5:

```
2a67502824e4ce0cd3f30671dc7ebdb2200707b69b36d07d803cbbb968332b4b  pkg/activesupport-7.1.5.gem
dd95c77495a9e63e9c32f03a79085145504b799a7a1645bdf7faf61f10e09814  pkg/activemodel-7.1.5.gem
a319c632365fb966b21c55db91d91c71db24da3891f96cab68eb7ab0080e2669  pkg/activerecord-7.1.5.gem
c1c84e7a431acdacc2dc321cf926a5f9606e42e21fb042a40dc43d4896bf2658  pkg/actionview-7.1.5.gem
e352ddf88d334dc02178a476905cff675b0fb05fd316904589c8083a9fb58e40  pkg/actionpack-7.1.5.gem
7ed4f43577c6ed840d662936f82fdd6b9e26011a9a62b9e2f2324691b925b2d8  pkg/activejob-7.1.5.gem
91b5d7bc03c14c940a5a85df9d48246fb3e9eae77b04eadb83f890be4ae602ad  pkg/actionmailer-7.1.5.gem
3d818fd712595d55e28d94b0067a32a64aaad36a55b64e282a97fa67fa3824f2  pkg/actioncable-7.1.5.gem
cf561be5bc3f2d8683dd2c24c3ceba51bd58da424a54a77f59bdd1dcbc338ef5  pkg/activestorage-7.1.5.gem
593b36f6e597f0053b11a7c2e86d9e69b2ee1d007f81394fccb5bbc4c815b31a  pkg/actionmailbox-7.1.5.gem
be560b01b8e11dd622bbc2992de3c6e8aacbaf31fb28b91544895a6b39281a9a  pkg/actiontext-7.1.5.gem
4a0c436a1d5a6c7b22e823dd0abf87bda57ccf9af6051cc56f5204fd77615902  pkg/railties-7.1.5.gem
9105d8c40f00afb3bc2ce64ee9d8cc2d9ccddd7dc8d5ca4260b763fd34b57138  pkg/rails-7.1.5.gem
```

Here are the checksums for 7.2.2:

```
436360924cf758dfa9d60ab22a8afe6da8babf6f1286d4087f0a9c576bf8328a  pkg/activesupport-7.2.2.gem
46e8f06585d96615c4d99814067ad736c079e1fc9782feb4e3411e2362ee539c  pkg/activemodel-7.2.2.gem
135954424b33093a0c77b4d6c27f3c055dfc2aaab762e2e9ba88134c2d071aeb  pkg/activerecord-7.2.2.gem
e95da1f3d0e211a5817be1254e87622db898ea5e9975fb92cd01cde661f51776  pkg/actionview-7.2.2.gem
c948965f3e2917acd3eb2548f06dd98778790d8dff995cc493c82226bbe59295  pkg/actionpack-7.2.2.gem
704e5f6166a33bc122387525ad12d5ab387d44ad25cdce0fd23574b3dbed2a14  pkg/activejob-7.2.2.gem
1cfe0e50ec5fb43ff580e3d251ecbebd19dbaad64dc033e80668aff04831d961  pkg/actionmailer-7.2.2.gem
5355e87023207318c0b25c7ea90d2a6e76aacd782a78e9aaad47e7119c8cb94b  pkg/actioncable-7.2.2.gem
2448162d87a874586515a15caae224b17c4693459e321d68ab54914de94b630e  pkg/activestorage-7.2.2.gem
91df37614f57854a4f18278ab4b1340b8e689c65d7397a735887f523ccfaa5d6  pkg/actionmailbox-7.2.2.gem
d58c5ab47501ea2b6eed48a520eb647f446a749109cecec0512c6416b683ecc5  pkg/actiontext-7.2.2.gem
e8fd3dd1f0e1ff7f6f3d8e5305b0a8476a35cd840d7031f467e1a7d08efbf57c  pkg/railties-7.2.2.gem
bf9d8847b70d2b84717b7b41d2e266cf268b8bf70ad0683a84cfd1657c1b8dd7  pkg/rails-7.2.2.gem
```

As always, huge thanks to the many contributors who helped with this release.

