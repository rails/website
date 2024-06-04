---
layout: post
title: 'Rails Versions 6.1.7.8, 7.0.8.4, 7.1.3.4, and 7.2.0.beta2 have been released!'
categories: releases
author: tenderlove
published: true
date: 2024-06-04 10:30:42 -07:00
---

Hi everyone!

Rails Versions 6.1.7.8, 7.0.8.4, 7.1.3.4, and 7.2.0.beta2 have been released!

These are security releases, so please upgrade at your earliest convenience.

Here is a list of security issues that these releases address:

* [CVE-2024-32464 ActionText ContentAttachment’s can Contain Unsanitized HTML](https://discuss.rubyonrails.org/t/cve-2024-32464-actiontext-contentattachments-can-contain-unsanitized-html/85949)
* [CVE-2024-28103 Permissions-Policy is Only Served on HTML Content-Type](https://discuss.rubyonrails.org/t/cve-2024-28103-permissions-policy-is-only-served-on-html-content-type/85948)

Here are the shasums for the released gems:

```
11292f721ae2414534de6c04c34a2c356fde0de0  actioncable-6.1.7.8.gem
2eac49b6424ced0227f026fd15178abed2dd6882  activerecord-6.1.7.8.gem
3b2cb8ee31fdeb303d769d751031482c31d68ae6  railties-6.1.7.8.gem
4ea9c7a2a8d4a7522ebe0f9a01d01cc0d07e0aee  actiontext-6.1.7.8.gem
57971117d1c6b4983b467cd7a5d1c7b9900816ca  actionmailer-6.1.7.8.gem
5b7a48bbc599b62cfa995fcbf19709b6878dd80b  rails-6.1.7.8.gem
60e67b26bfd0368711ea3ae79658c2893a834729  activesupport-6.1.7.8.gem
65343c4f1a642bf5c851dcfd3e8d474e15284106  actionmailbox-6.1.7.8.gem
8cde6dde2e94135b40cfd13ceabf6c18dd63aefc  activejob-6.1.7.8.gem
bd991c7148cd28c1331a064d2075d228e5a50b8d  actionview-6.1.7.8.gem
be3161e3b9e887111b574c6fc499ace36e2cd1ba  activemodel-6.1.7.8.gem
d8e0c5b254297b170bc1ab0e67433797bab80bd9  actionpack-6.1.7.8.gem
f98d82d680a94bbb6a1e3298a33cd0a3de85888b  activestorage-6.1.7.8.gem
```

```
1d6420b32e4289f287c2a83f9633488f8e3bd274  activestorage-7.0.8.4.gem
373857bcd9df9837987905af207cbf6069d8b8d5  actionpack-7.0.8.4.gem
404022a5b8a2d727594cd892deda70582edc3346  railties-7.0.8.4.gem
4239cbde52efd832e1188b8d7ade4da9bd7763a2  actioncable-7.0.8.4.gem
952c861d88b1bf83d75ba836c5ec16976c62adc7  rails-7.0.8.4.gem
954de6662ebce3679fcf7761c7fbb8431f5b8670  actionview-7.0.8.4.gem
a64711dfdc7b1df8d0de6fcc70e7d35cea413d55  activesupport-7.0.8.4.gem
aee5af413ef20f7a3c86e2a662770d75dde0ac0f  actionmailer-7.0.8.4.gem
b27c95a833bf6b623489e9889a8e54a6ef8c01db  activerecord-7.0.8.4.gem
c2221c95322bf40ccf4e3dd0a378859b7de12b74  activejob-7.0.8.4.gem
d07781448737ec5e4ab1e6292b883877934df862  activemodel-7.0.8.4.gem
e04c5fbb0c203f625971ec02435fe4f536c3441b  actiontext-7.0.8.4.gem
e2611a9e05fdbe258bd1c05c21d6479d9fbc22e9  actionmailbox-7.0.8.4.gem
```

```
0fc35739594a70b8188cdc7280682a20a83e6702  activestorage-7.1.3.4.gem
3226f115f188a116d9cc9aa7518dfe5ff28f0eeb  activesupport-7.1.3.4.gem
43e55f5becd33181c03504b81020db060f7bcc2d  rails-7.1.3.4.gem
4f4ec515e5a16c5f97a7bffc59ca9e6ca5f62bf9  activejob-7.1.3.4.gem
504291cbe7598396eb196f71515010bcf22de24e  actiontext-7.1.3.4.gem
61fddc0555c33f2bbebd12c1890e6a9ae3c672e5  activerecord-7.1.3.4.gem
66d42885b6ad7c35cfcbf5713dd24c71cb00c678  actioncable-7.1.3.4.gem
68c2343ef992061430d0fea3ca1695c06352d972  railties-7.1.3.4.gem
740e656537668daf497da7ad727bdf872916edcd  actionpack-7.1.3.4.gem
abdd8f47b4b8043532698d298d9c9a9f7f97fae2  actionmailbox-7.1.3.4.gem
ac64a0836d6264555d86299ee193ef9f4d993123  actionview-7.1.3.4.gem
b45f375e5c414dc3a785f059d1f59ad34afc2c8c  actionmailer-7.1.3.4.gem
f2f998b37a4691a14a949d92924a2120b9a8d5ad  activemodel-7.1.3.4.gem
```

```
1e7b022f657f796d90eb2c9eb772161fe6a9f5ea  actionpack-7.2.0.beta2.gem
29c6eea9e607a17ee619b16b67b16387e68ae726  actionview-7.2.0.beta2.gem
6a6273c331c58de6e2d20c2186c101e8bb44a94e  railties-7.2.0.beta2.gem
71f573d53aa0715b0c67a8b13043721fe3df189b  actionmailer-7.2.0.beta2.gem
71f6ef9b7d144d03b442823accfec629e86338e9  activemodel-7.2.0.beta2.gem
7629a041722ef66dbb73c1e2af12d8131efaaa23  actiontext-7.2.0.beta2.gem
7a316dcfb1cb946a517bce3fc4bf57f071694477  actionmailbox-7.2.0.beta2.gem
89837ecbaf84e53c4b06b70a6535427112fb43d7  activerecord-7.2.0.beta2.gem
a18e7f9d728e25235d0dfed1d581d793f8bc61ec  activesupport-7.2.0.beta2.gem
ae50a57be7d2afa79f883beae6be7d0e8ddfaf68  actioncable-7.2.0.beta2.gem
b3f199d2774f9119d65622a08ff906d4a781bfdc  activejob-7.2.0.beta2.gem
c46c3140b2712d1a69739d8989288e32d1f37504  activestorage-7.2.0.beta2.gem
c819c740d88ddd1381e680bd4fa22470a65d7ed6  rails-7.2.0.beta2.gem
```

Have a good day!
