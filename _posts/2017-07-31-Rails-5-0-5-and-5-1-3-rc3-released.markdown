---
layout: post
title: 'Rails 5.0.5 and 5.1.3.rc3 released'
categories:
author: kaspth
published: true
date: 2017-07-31 21:15:03 +02:00
---
Hi everyone,

I am happy to announce that Rails 5.0.5 and 5.1.3.rc3 have been released.

If no regressions are found for 5.1.3.rc3, expect the final release on Thursday, August 3, 2017.
If you find one, please open an [issue on GitHub](https://github.com/rails/rails/issues/new)
and mention me (@kaspth) on it, so that we can fix it before the final release.

## CHANGES since 5.0.4

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v5.0.5/actioncable/CHANGELOG.md)  
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v5.0.5/actionmailer/CHANGELOG.md)  
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v5.0.5/actionpack/CHANGELOG.md)  
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v5.0.5/actionview/CHANGELOG.md)  
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v5.0.5/activejob/CHANGELOG.md)  
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v5.0.5/activemodel/CHANGELOG.md)  
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v5.0.5/activerecord/CHANGELOG.md)  
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v5.0.5/activesupport/CHANGELOG.md)  
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v5.0.5/railties/CHANGELOG.md)  

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v5.0.4...v5.0.5).

## CHANGES since 5.1.2

To view the changes for each gem, please read the changelogs on GitHub:

* [Action Cable CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc3/actioncable/CHANGELOG.md)  
* [Action Mailer CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc3/actionmailer/CHANGELOG.md)  
* [Action Pack CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc3/actionpack/CHANGELOG.md)  
* [Action View CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc3/actionview/CHANGELOG.md)  
* [Active Job CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc3/activejob/CHANGELOG.md)  
* [Active Model CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc3/activemodel/CHANGELOG.md)  
* [Active Record CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc3/activerecord/CHANGELOG.md)  
* [Active Support CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc3/activesupport/CHANGELOG.md)  
* [Railties CHANGELOG](https://github.com/rails/rails/blob/v5.1.3.rc3/railties/CHANGELOG.md)  

*Full listing*

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v5.1.2...v5.1.3.rc3).

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 5.0.5:

```
$ shasum -a 256 *-5.0.5.gem
479efb52e6b6fedfcafcd3530be24dc7b9829dd41e0f5a37212ed4d67146f51b  actioncable-5.0.5.gem
c48a93381dde7206fd2cb0ddc00a922021fcdf6bce35c262bd357c7922a63fb7  actionmailer-5.0.5.gem
2202866aded8d787efb4c3a7e6d4f55262ac4f2acfe92c097855a9afc8229f37  actionpack-5.0.5.gem
cb4d2928b63f29931a6d05adde78bcf7dac83bf79a05911547068af2da765a6b  actionview-5.0.5.gem
af79fc954e9ddece35ef4975b9a244b2bb48a76e17a19c0dff7233fc75852877  activejob-5.0.5.gem
e6b8fc4ffb6ab748b28e5a234d1d2f3e49689b0655166e188014a582b50cdee2  activemodel-5.0.5.gem
89651a138aaf0755d2a9db7cda3e914e93f86b4504bcb31b41fb379e2dde28de  activerecord-5.0.5.gem
00c714979fffa05846a2d044f24f9569a5ae471b2e20c73fdf3172f1d81edfb1  activesupport-5.0.5.gem
15e2c25872e5dc2069b0d7bf4535eb4887e77d49166ccfba5871a904c18957b1  rails-5.0.5.gem
5b1cb323c3fa70ff5801f58fbb9688a8231a4cc0414d3c97d0ad0a5bc94fbefb  railties-5.0.5.gem
```

Here are the checksums for 5.1.3.rc3:

```
$ shasum -a 256 *-5.1.3.rc3.gem
f1b9758a78543bb27f65946a65a94e803140787b781f24983c696d89315685ea  actioncable-5.1.3.rc3.gem
8c57af610a7bac0cd91c0b09a0df2f66575ddb20204342b98d28bd6d051578b0  actionmailer-5.1.3.rc3.gem
9e69dcef628dbe12b5937a368e55ac79b71b38261d4187465200352d5278572d  actionpack-5.1.3.rc3.gem
d93ac77d4d6d2fa468a7407fda4088c9ca975aa00e78c18dd2b71e398af3b3dd  actionview-5.1.3.rc3.gem
2d0410f1a279b27e4bacddca4a8bc1f88c0e8c18429751370be8d41fb630cba9  activejob-5.1.3.rc3.gem
987567e336267497cb9222e4e689f58bfd06e9829071ae32d65b9a291fb0e8b3  activemodel-5.1.3.rc3.gem
159c9d330cec1ac9a92c9e0c68f0f088b4273f0ba163c3159f4a7369d9948229  activerecord-5.1.3.rc3.gem
6d4320c2e93e9f6239438cf7886b1111956b5d72cb5a7026402fa29021ae571f  activesupport-5.1.3.rc3.gem
f3551c5eec9649bc225552e0ed8ecee6dac9f4f97ca13e78bf018e36385852e8  rails-5.1.3.rc3.gem
59669b8098787c077b76642804a1543cdca8fabafabad7bbce74622508f79a3d  railties-5.1.3.rc3.gem
```

As always, huge thanks to the many contributors who helped with this release.
