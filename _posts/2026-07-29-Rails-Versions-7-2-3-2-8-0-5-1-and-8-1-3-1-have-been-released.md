---
layout: post
title: 'Rails Versions 7.2.3.2, 8.0.5.1, and 8.1.3.1 have been released!'
categories: releases
author: rafaelfranca
published: true
date: 2026-07-29 15:00:00 -05:00
---

Hi friends!

Rails Versions 7.2.3.2, 8.0.5.1, and 8.1.3.1 have been released!

These are security patches addressing 1 security issues:

* A possible arbitrary file read and remote code execution in Active Storage variant processing

We strongly recommend upgrading as soon as possible.

Older versions of Rails are unsupported, and users are recommended to upgrade to at least the 7.2 series. See our [maintenance policy](https://rubyonrails.org/maintenance) for details.

Here is more information about the security issue that these releases address:

* [CVE-2026-66066 Possible arbitrary file read and remote code execution in Active Storage variant processing](https://discuss.rubyonrails.org/t/cve-2026-66066-possible-arbitrary-file-read-and-remote-code-execution-in-active-storage-variant-processing/91432#p-267668-impact-1)


## SHA-256

If you'd like to verify that your gems are the same as the ones we've uploaded,
please use these SHA-256 hashes.

```
ddc90d11dd88086d78ace03407fe3c2a3f5c8853c3c3046313db5ed823ef3312  pkg/activesupport-7.2.3.2.gem
3777c67cd8dd1560f30387523013dacb370a0a1cf532037410887819e4416927  pkg/activemodel-7.2.3.2.gem
e62d24ba7e5f820d24ed122eb9225491b0aaa8398778783b400067c3467285c7  pkg/activerecord-7.2.3.2.gem
42bfd966040c93271dfa9f3243d73c40aa0228108696f956e1f287f3b02edc01  pkg/actionview-7.2.3.2.gem
c1fbb1c4df0f2473ee064ab1412fc2a44c2c2ef337924c5ba3c7998c8529652b  pkg/actionpack-7.2.3.2.gem
b83fa070898911823f0c4cb8c0d1d25dabb5d00f18379d5b4fe01b84e173a93a  pkg/activejob-7.2.3.2.gem
45a6c326872867cdb28d2960d236c3c8fa4ff1198e9bc7ece4ddc3810b67b759  pkg/actionmailer-7.2.3.2.gem
04ffd91519942bae45f443bfc166308e6eb17870870cdfc1ca36bc95273c6b57  pkg/actioncable-7.2.3.2.gem
863cb4b21b83505555be2addb939fefb856ab05f6c6d24bab00d6f1a7e4edbfc  pkg/activestorage-7.2.3.2.gem
d19f6e98c5b630c391e14ce1a830f199f249bf3fd6208392f92d232a7a6d8ca5  pkg/actionmailbox-7.2.3.2.gem
19ab7e2a07ab976a5456a9aa98b93e1b899a7729b931ca1e9e01a3e8bd33f0b0  pkg/actiontext-7.2.3.2.gem
f626c6dfcc00a9f85b139619cfac4a648934c93e36fe5b9242184b9f45ffc29e  pkg/railties-7.2.3.2.gem
279290679f9005b0f79514f953a2af613f95de7baa94cbd87744c09122c1113c  pkg/rails-7.2.3.2.gem
```

```
329a4280c4fbcfcf338ae2cb9df28b0b14527929dba105e10b3604516d998710  pkg/activesupport-8.0.5.1.gem
559be32aa9c40db7a3ee0aef926d4508a9ebd22f96f7276c11326d21a7dff4a4  pkg/activemodel-8.0.5.1.gem
9252968fce404d75eb17092498a440d472167f2f8deee32b4658d6552b1eeea7  pkg/activerecord-8.0.5.1.gem
472a108b9cc2295c4ac3ff09b028045e619875801f48c556f0085210b9cb1440  pkg/actionview-8.0.5.1.gem
a5595c9d824d68884ddc4d3965ab78c897760d3752e190df7efe897371caa1eb  pkg/actionpack-8.0.5.1.gem
142407a21b6c3cbc6ddd92ca111ac18ea5c40298eb94d81845cd897a072a6880  pkg/activejob-8.0.5.1.gem
c3d2b3f96e1989ea25f51699786a97fcb2536eb7abfc2a667cb8f2376ec08403  pkg/actionmailer-8.0.5.1.gem
5adb700c605a7ef7628f87dc7a6da20cd5f0ceac782a59055c864ea51a77d7c7  pkg/actioncable-8.0.5.1.gem
239742932b2fdcf0ead175e0889dbd385a36da2168fd7bde023aaad88ef745f2  pkg/activestorage-8.0.5.1.gem
f8b72eadf53b3e285df8f2d1f6533012abf5a0a001180abe436aea3139eeaed6  pkg/actionmailbox-8.0.5.1.gem
370e90d35feb4313fc18ccef658776427d5bdd13126f266933b828a77e2125b2  pkg/actiontext-8.0.5.1.gem
da1958e1d9dab04691a2f8721b3ff7fab323715d37f103c19972dedfd644d5c7  pkg/railties-8.0.5.1.gem
c91cefbf38881876ddbe67b5e0246eb985d27d60c6bb1cd7034b4261de0ba495  pkg/rails-8.0.5.1.gem
```

```
85458765f25ea48b9019c46b6bb3fa5683197bf4280d9f06710a6e8d7a831376  pkg/activesupport-8.1.3.1.gem
99cc02ce2faec371d14440949d85787ebd23a907c9baef0a9d4bcd4d21888f88  pkg/activemodel-8.1.3.1.gem
0a2fb6c28f4938f6b013a3a549bec0a7e37d535f3dc8990e804bcc3258c0403b  pkg/activerecord-8.1.3.1.gem
2da68b8414c47b43bfbed1ce69c5afe1c04f78c267aacb5660a4cab5ca12cfb6  pkg/actionview-8.1.3.1.gem
974cb7154548e81f470b1b0f247b99cb38e87825899dca58610596e2817723d0  pkg/actionpack-8.1.3.1.gem
1c8dd275df930df40deecffec63d913a550a33fd94bd298f69721dd96939954a  pkg/activejob-8.1.3.1.gem
88ea441b28ff02a0c6c006468892642a3d9942affce9d294e81a74504aa5c43c  pkg/actionmailer-8.1.3.1.gem
e318528295c878a3efdfe25f0f2267c80cb7a76eba41bb5f64d44aa380a3d91b  pkg/actioncable-8.1.3.1.gem
f555254f387b1cffa499d2fd3115d12635eadc5b15206a8534316a67036163ef  pkg/activestorage-8.1.3.1.gem
5f704972097d843ade8e435e93694a1dac732b926df1717aceba1f3840082b1c  pkg/actionmailbox-8.1.3.1.gem
5da729d833d1a29cddb1eee938878e55e503d2613e00e735f5daf58c2ba98af2  pkg/actiontext-8.1.3.1.gem
2388a232579a00cefea4487de66c8553c3408c1300abdc6cf1799d86ffb04487  pkg/railties-8.1.3.1.gem
ccd11a36bfc171bf9c66d585d14c0ece91c0c9dde840aae60c0118d6f5c9c52a  pkg/rails-8.1.3.1.gem
```
