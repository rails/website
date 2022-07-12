---
layout: post
title: 'Rails Versions 7.0.3.1, 6.1.6.1, 6.0.5.1, and 5.2.8.1 have been released!'
categories: releases
author: tenderlove
published: true
date: 2022-07-12 10:52:28 -07:00
---
Hi everyone!!!  Rails Versions 7.0.3.1, 6.1.6.1, 6.0.5.1, and 5.2.8.1 have been released!

Yes, these are security releases and I think you should update.  The releases have been made from the last release tag, and they only contain one security update.  That said, this update may be a bit intrusive and require configuration, so I highly encourage you to [read the security announcement](https://discuss.rubyonrails.org/t/cve-2022-32224-possible-rce-escalation-bug-with-serialized-columns-in-active-record/81017).

This release addresses CVE-2022-32224.  You can read more about this issue [on our forum](https://discuss.rubyonrails.org/t/cve-2022-32224-possible-rce-escalation-bug-with-serialized-columns-in-active-record/81017), and I highly encourage you to do so.  This particular issue impacts applications that use serialized attributes on Active Record models.  If you application uses serialized attributes, please check the announcement.

Here are the shas for the released versions:

```
$ shasum *5.2.8*
63ad23409ea27bb7bc844c4fb98b24440f980d07  actioncable-5.2.8.1.gem
ac19eee149a3e624d2f92ca43094b50044e48506  actionmailer-5.2.8.1.gem
921bcae4aa882e628770dfa3ff116d930be5f6b1  actionpack-5.2.8.1.gem
12f89d81352db1d5de3e13540f6bdf5bda5306e7  actionview-5.2.8.1.gem
691bda5149a20fb8b23b8a3f7a3a4d19a6b3785c  activejob-5.2.8.1.gem
e564c197ebf47a87db05f2e39899e1b241ba54ed  activemodel-5.2.8.1.gem
625d711978e02dcb7f54f8cde31721cb53f093e6  activerecord-5.2.8.1.gem
2a0b659b00af6d00101e3a34d2098d01644e912f  activestorage-5.2.8.1.gem
4048d87435ab847408bb2e8bf1ea78b353303655  activesupport-5.2.8.1.gem
2064dff8e26ccab43ad23aae89c5220ed2659de5  rails-5.2.8.1.gem
5d2b35ceac6d1ca10754f7ebfd7374b8f4b1b1c0  railties-5.2.8.1.gem
```

```
$ shasum *6.0.5*
2abf0cf990a30ff9abe8ac869a3026532c0afbb9  actioncable-6.0.5.1.gem
a1926d00b48aa193199a114e02897a2858f4e5c1  actionmailbox-6.0.5.1.gem
3e706398e96a561b24f0a3aa65e0f88ae602db00  actionmailer-6.0.5.1.gem
a512b8dc50c8e70c1185892208ab887e2e4984bd  actionpack-6.0.5.1.gem
d5afe5ab1bdccf17d0ab5092a3e7a81e891e1968  actiontext-6.0.5.1.gem
6d9f67ea563c56d1fbe3c75c9675b7d951dc85e9  actionview-6.0.5.1.gem
c3404ce336c65f88d5ac2f82917a5b4a4d26ea37  activejob-6.0.5.1.gem
3d2a06cb3b88828a4bd33fcdb8a31f1fa91c0fdd  activemodel-6.0.5.1.gem
7eefc7eb5bcbef49d4e4cb2b8acdfa33d345a5b4  activerecord-6.0.5.1.gem
339e8a071644c555a1b2cd6c0fce6520f54188b3  activestorage-6.0.5.1.gem
503a02786b29cea084af99095f185c5cc9ae5342  activesupport-6.0.5.1.gem
450c85df386bb4a04963a5c25a499a2689af73de  rails-6.0.5.1.gem
89db4c63f6012c75bc9660005e0e08095eae7ea5  railties-6.0.5.1.gem
```

```
$ shasum *6.1.6*
1afbff202685e54f584c212876cf57cd3cfc0bc7  actioncable-6.1.6.1.gem
cea65684445185a66313fc3453d91f74ac0c17c4  actionmailbox-6.1.6.1.gem
f767c55a8b1e65b1f15f964a56f7c2923c6c7653  actionmailer-6.1.6.1.gem
46492c393378148986e9611ad78997f96f1ac4e1  actionpack-6.1.6.1.gem
2e1aac8d27bb297ff972d49ee8029e3b1fc7d799  actiontext-6.1.6.1.gem
84ab0b901d10795bb38f14053aae4a88a9e3f246  actionview-6.1.6.1.gem
1c6c096b590bf660d0efd0db41273ef67f964190  activejob-6.1.6.1.gem
65a17d4f825e0a98d322818804d599dd3c57c6ce  activemodel-6.1.6.1.gem
03dc378c3b1ea7ecadd6b185f5262b42a68ee511  activerecord-6.1.6.1.gem
77c303368414f65a6f2e04f4e126317ed0ef8fa4  activestorage-6.1.6.1.gem
167655efdc36b21800c70949d401e82f22c5565f  activesupport-6.1.6.1.gem
c9891b18c87792ea67867be536caeb2d77bc65dc  rails-6.1.6.1.gem
73716e27dc927792377a3a8f3a1c2de5a87a2e04  railties-6.1.6.1.gem
```

```
$ shasum *7.0.3*
860dbeffffa8b7e706d9e8701f5d5f50b0c9fa94  actioncable-7.0.3.1.gem
8d3a3d7275325c5693d7335238dc3a295888f144  actionmailbox-7.0.3.1.gem
316ae68661c0a47efe824486f81c487e0092fb2d  actionmailer-7.0.3.1.gem
5ae1c93c72abc7abc4462a1c2b5f74987e05bea7  actionpack-7.0.3.1.gem
0f727714ff9a2cc31eae96eaec0f53c51eb77f11  actiontext-7.0.3.1.gem
c6c8a9c332af8f5c358c19f6a563828a07a79640  actionview-7.0.3.1.gem
d492380fd3d1c7f107dc445153dffa10ad69221f  activejob-7.0.3.1.gem
e13f754517fd8aed92954d82db05512cf8d4ffa7  activemodel-7.0.3.1.gem
fcb0aeb8c3d2a3e1a0d55d2befffb0b516e6f323  activerecord-7.0.3.1.gem
4fe9e74696a3a80e51f3590b8bad75c7248a6dcd  activestorage-7.0.3.1.gem
6d894abe9849249813486654fe979f467435f05d  activesupport-7.0.3.1.gem
1b3ba0b9b61d45c496408c9549cd2f6c5368502c  rails-7.0.3.1.gem
98520454eac79902a8f783256fbe40dfa86fbd39  railties-7.0.3.1.gem
```

Have a great day! 🥰
