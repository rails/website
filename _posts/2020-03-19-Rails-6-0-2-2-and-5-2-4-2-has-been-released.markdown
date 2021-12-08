---
layout: post
title: 'Rails 6.0.2.2 and 5.2.4.2 have been released!'
categories: releases
author: tenderlove
published: true
date: 2020-03-19 10:03:21 -0700
---

### Update

I accidentally posted the wrong shas for the 5.2.4.2 release in the original
version of this post.  I've updated the post to reflect the correct information.

Hi everyone,

HAPPY THURSDAY EVERYONE!!!!

I am pleased to announce that Rails 6.0.2.2 and 5.2.4.2 have been released.
This release contains a security fix for CVE-2020-5267.  You can find out more about the 
issue [here](https://groups.google.com/forum/#!topic/rubyonrails-security/55reWMM_Pg8).

For ease of upgrade, these releases only contain one patch which addresses the
security issue.

If you would like to see the full list of changes, you can check out all of the
commits on GitHub.

* [Here are all the changes for 6.0.2.2.](https://github.com/rails/rails/compare/v6.0.2.1...v6.0.2.2)
* [Here are all the changes for 5.2.4.2.](https://github.com/rails/rails/compare/v5.2.4.1...v5.2.4.2)

## SHA-256

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-256 hashes.

Here are the checksums for 6.0.2.2:

```
b2170b2b670e9f3d8a355a7ad78dabe996b7290c3e1a0390cc8782fabd1a93cd  actioncable-6.0.2.2.gem
c5f6d4bb2b083de45c547089addb351c01bb6c29c8789f447bca19f34f05223e  actionmailbox-6.0.2.2.gem
baf2a7d294b0f5cff209f754e877eeebb9263115c3f91bf91255733beb9df84f  actionmailer-6.0.2.2.gem
58c0f04386b014e5d4a8a1c1a48a9a67f3fb38243a3be74d7201dc18d68de25c  actionpack-6.0.2.2.gem
872fb41b79794eaa9d1007e4b2e73cfa031ab2a47e5ee8cdae362518d917fed9  actiontext-6.0.2.2.gem
5e43aae3f0f6961d5dd85002147cccf2dbadfe88f41725d874a1b42e76bd7117  actionview-6.0.2.2.gem
7ed215efd26e335d8ce56dbf141b735548e33bf6cf9e953f22558e370d4b3fe3  activejob-6.0.2.2.gem
35559978a7641c85d47709c7c3b75fcc456b1ec882631ffeba82e8a4e12f99cd  activemodel-6.0.2.2.gem
4c6aae2cfa9d19ac9901c3b2514fb1c3ccd82b61839f2b52d6711edc00013c80  activerecord-6.0.2.2.gem
818c65056c5e58df009bdd89fef099e3b4abcd99f4836360713b646dfb60715e  activestorage-6.0.2.2.gem
8b73152669af7b8e3840e16052d6d951620e07c63bfc650bae88e5b86643a9d5  activesupport-6.0.2.2.gem
4b789dc6d942e133032485169aa30553482b528ffea5dd52a3bab853fca0c822  rails-6.0.2.2.gem
5b9d0d0a814ce9f5061aabd24d31e7bcc6864f6fa16565c1b3d9dc646c6b9ab1  railties-6.0.2.2.gem
```

Here are the checksums for 5.2.4.2:

```
$ shasum -a 256 *-5.2.4.2.gem
bbb8c0cd649eabec75a86f7750e264f0e20335cfadb1c6901427d9401af28b60  actioncable-5.2.4.2.gem
bf2c0b60db93a6e7a86483f791ce631564ec0182270851ae83bd72e4bdb2e24d  actionmailer-5.2.4.2.gem
5df1b1a9e70f959a9b00087bef01893dc4c2fc15a8d040a827daf6844d4c34f0  actionpack-5.2.4.2.gem
97227c123908b84fface498ed50d755c12408037440380ee4b8b9a208cafe33a  actionview-5.2.4.2.gem
71df9fd6b723b1bb97e71329179ac1e2b5f8173ec6de5dd33937639e135a5be3  activejob-5.2.4.2.gem
b109119b3de473ebb24c4a85fcf9462ee052b83d647cd00c922ed609c06e8e49  activemodel-5.2.4.2.gem
e5d6db49d48018bf54133f6155a635e4de69f73dbbef6cb8cc79223604cc58f9  activerecord-5.2.4.2.gem
49a3b1c7cfe3fddb409df595b372d1077cf67536c4a3ba635e642676c2fda1b4  activestorage-5.2.4.2.gem
8c3ae3df5b08b49b6b5d9c5028da1a1e582f1243b7362dbb9736f65ede492378  activesupport-5.2.4.2.gem
44ab2836290ef259ed12fc6a24c1e62e317a534b79c37c0d1a8ec7ef893513f5  rails-5.2.4.2.gem
26b44b3d6c650d64ea2496c3328b9092efef5101ed953a660a93e2d643b359dc  railties-5.2.4.2.gem
```

Thanks to Jesse Campos for reporting this issue!

Have a good day!
