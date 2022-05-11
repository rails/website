---
layout: post
title: 'Rails 7.0.3, 6.1.6, 6.0.5, and 5.2.8 have been released!'
categories: releases
author: eileencodes
published: true
date: 2022-05-09 09:49:00 -05:00
---

Hi everyone,

I am happy to announce that Rails 7.0.3, 6.1.6, 6.0.5, and 5.2.8 have been released. This
is a bugfix release that includes a fix for when applications are using Vue.js, Alpine.js and
`content_tag` which was broken in the last security release.

Note that 5.2 will reach end of life in June 2022, so this is likely the final release of that version.
We recommend upgrading to a newer version as soon as possible.

## CHANGELOGS

Only gems with changes in the CHANGELOGs are listed below. All include a bugfix
for [rails#45014](https://github.com/rails/rails/issues/45014) and [rails#44972](https://github.com/rails/rails/issues/44972).

To see a summary of changes, please read the release on GitHub:

* [7.0.3 CHANGELOG](https://github.com/rails/rails/releases/tag/v7.0.3)
* [6.1.6 CHANGELOG](https://github.com/rails/rails/releases/tag/v6.1.6)
* [6.0.5 CHANGELOG](https://github.com/rails/rails/releases/tag/v6.0.5)
* [5.2.8 CHANGELOG](https://github.com/rails/rails/releases/tag/v5.2.8)

### 7.0.3

* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v7.0.3/actionpack/CHANGELOG.md)
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v7.0.3/actionview/CHANGELOG.md)
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v7.0.3/activejob/CHANGELOG.md)
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v7.0.3/activerecord/CHANGELOG.md)
* [Active Storage CHANGELOG](https://github.com/rails/rails/blob/v7.0.3/activestorage/CHANGELOG.md)
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v7.0.3/railties/CHANGELOG.md)

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v7.0.2...v7.0.3).

### 6.0.5

* [Action View CHANGELOG](https://github.com/rails/rails/blob/v6.0.5/actionview/CHANGELOG.md)

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

### Release Checksums

#### 7.0.3

```
$ shasum -a 256 *-7.0.3.gem
4d3cbbf83a2753c38f1396baa2506b34c4b2866ad68887f49040a50cc316696b  actioncable-7.0.3.gem
4312565138e1881913dea2f6ad93e0aaa5c04dda0667930cfe02f44f054fbd1b  actionmailbox-7.0.3.gem
2cdfc766dfdd94bdad9ecb97bbe60d49a74e71d1d7dd6bec06a62fc9cef78dd8  actionmailer-7.0.3.gem
1881155671b9ada792f6393d02455c1edf45966fd51cdb4c42bd831cf6667e95  actionpack-7.0.3.gem
35bcf4f8bd7c7d76d23255dc0f2843b6e3f75c536a0c3ddb57f5d2de59f9fb01  actiontext-7.0.3.gem
e153d795c1b6b1c2c52bd8802054959312173395998f8d3f19fe6cb01b574f77  actionview-7.0.3.gem
1380d9772a896e66d89fb56fbfa4777774c7450845a6efc2e567c7767182afc4  activejob-7.0.3.gem
f1556cc9426147de3ccaa635afcf097d3a39a5b42bf824f82b42efe14ce609d4  activemodel-7.0.3.gem
73b06c7137f92108f0fe17d0cde62713893329dba4b74d4b4b76fb54d84dd307  activerecord-7.0.3.gem
8a8f3cc3a3454be4f5f69b7bf38551c4c36cf65fa9bbf20f8bd405528a1e5455  activestorage-7.0.3.gem
3844ad8ee59b70e611494ac06405896ddc064f0f25bed7243193020591993781  activesupport-7.0.3.gem
7e0c3e1a97551eef4ae6d7e7fdb5109f72f6a451deab9a26fb6a6ab8ff82ae1d  rails-7.0.3.gem
a9a78271b0f0d0cd0a03ad7ca137f01ae6d84292fcfd19eacd1430d15040d8a8  railties-7.0.3.gem
```

#### 6.1.6

```
$ shasum -a 256 *-6.1.6.gem
ec31d409cf18049702b921b102c6a987d29ae50b5e842b8345de04ce0b9c1f5d  actioncable-6.1.6.gem
984fe9cfe2085b23fa3b50302162d41ad09d68b61d2de6b6fc09bc38e6c9a27c  actionmailbox-6.1.6.gem
8c071ea7839d96e9d905a8596f767b894ce82d88cbfe5e78b6014974339ccba0  actionmailer-6.1.6.gem
0b66ed4da3d90d2fdf04ed1d1830094ec3bfd2876eb134be7d1b934d005e54f1  actionpack-6.1.6.gem
0086bab75fb986ad432e6c3505e5ebcee8b717caa8807c07ebf9a36aed06db68  actiontext-6.1.6.gem
0382e8aa9d9d951d48d7131b9db88fb59dab901c12a86c5fc55f03b6ef812017  actionview-6.1.6.gem
05d06ab8a61a9705a967a10dfcf73f835eba1dee55f3d3b1d70dbcd57eee5b3e  activejob-6.1.6.gem
9dbea47c688b308cdc20dd488a67d6f773dac04c888626012e7d6f1643890ab8  activemodel-6.1.6.gem
77b5fe252d82d28b04861d96c770d524aa5f4db830f19dc70b57f958f7b4124e  activerecord-6.1.6.gem
0aca07b550ba982e83d7f5e42d43df37173c7ceeccd42e3cf3ee7d492400860f  activestorage-6.1.6.gem
dc4fdc4bb9076d6c26e67b6a00557909adac9adb0b65fcd0fa7b80da1ebf9f23  activesupport-6.1.6.gem
1f1dd2b3a0b91216f0ceb3d975ad33067ade51b0e9f13e97863239c1c0c09f1b  rails-6.1.6.gem
30108b3799fe711a9c5e86f35cb44666f4cd6cef42add02b53a16c417c95be99  railties-6.1.6.gem
```

#### 6.0.5

```
$ shasum -a 256 *-6.0.5.gem
1b62a33e849a392b144096ecc46582734905bb04ac143adcc4053c54722cacb9  actioncable-6.0.5.gem
75fdbf7aba13ffec77ef3c4aef7693dd799e51b636430a385a242e2732ab01d6  actionmailbox-6.0.5.gem
ad5fa84639df9dfd5218ad5015f4e357baa64e7d092d6b8f610788df474b3abe  actionmailer-6.0.5.gem
f5570617931cc3cc9829c22e27fbe069a21ae659fa5c45dbf6c8027475f00be2  actionpack-6.0.5.gem
8ca194737e39e4aaa148dde73a81ba48f05248c687acc423621d4da2407d4a57  actiontext-6.0.5.gem
5621385f40b7f665a6e90fe67cff94e2979794945a5bfeeda77be1b4071749a6  actionview-6.0.5.gem
86b3cb0f81c0f2a113b1dd56bd93989b119f5b525bbe239ff836a1dc66a110d7  activejob-6.0.5.gem
caf8745f7b6cff6d0d8ed95cd499b946339fbc1de8398c8518444181cd99d789  activemodel-6.0.5.gem
40af85141de32cfd97f1861b25634232359e4778fe0d759797f5f86079bb69bc  activerecord-6.0.5.gem
f08516164827c39b8fc51c2eeb575cc65e162d0c6a8e4ace981e9dcbee15cc77  activestorage-6.0.5.gem
0f5df9c171182e9430c57b9ce09b57aef8f1f5b166e4ee2b389a5874d004197b  activesupport-6.0.5.gem
e810af40d58ba99ca9fda7e446ed19e93da83da748224dd9277c4c2999556ed7  rails-6.0.5.gem
17d5ecb2991684a75663d2c52a74c527a3a0fc5a8261e42962d89b0ac991dde3  railties-6.0.5.gem
```

#### 5.2.8

```
$ shasum -a 256 *-5.2.8.gem
abfbc9446a510fa564fce9088657be2d7642b62a11f1a697f899b6c365d7ec5f  actioncable-5.2.8.gem
22d2cdb7bada54d4ebba1f42ebdc18a2ce217adb10833191bc3657c71b6f79a3  actionmailer-5.2.8.gem
f3cf500049082a54df630bf9a23d4f47caa589ba9039b920244e24618d9ad6ce  actionpack-5.2.8.gem
bde6e6e0811d34657769cb3155f2e88645913e4c1795c2a557932dd2d579cd7e  actionview-5.2.8.gem
2fe3e215699ee564e21417b755a0d0de77334b91f98bdff788bb5247892feb4f  activejob-5.2.8.gem
266f73e8ed84354692f763cb15922601418a13650476e2348381918ee8d4d7ac  activemodel-5.2.8.gem
0a4ceb49c86eed3370b908d9ad6b4111c635fb2a7ccdfbf28ec10af0ca8e111d  activerecord-5.2.8.gem
9c7cfe93d5ccd19271918962b9331fb3a054536e12d0f110f7265b22d37bddf6  activestorage-5.2.8.gem
0270a49c397ce4b66c7f19506ed702ef345bbaf9951a03c36681c527fb85db2a  activesupport-5.2.8.gem
8910529ca26e845b7d0e4448f844f07f0b929b29c8d733f1217e914aa3f80421  rails-5.2.8.gem
0c42b69e113316238e94c85412603a26923c22400760d81178026f2845adf594  railties-5.2.8.gem
```

Thanks to everyone who made changes in this release and reported bugs in the last one.

- Eileen (eileencodes)
