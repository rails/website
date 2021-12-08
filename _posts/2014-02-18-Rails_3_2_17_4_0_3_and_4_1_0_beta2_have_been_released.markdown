---
layout: post
title: Rails 3.2.17, 4.0.3 and 4.1.0.beta2 have been released!
categories: releases
author: rafaelfranca
published: true
date: 2014-02-18 16:17:03 -03:00
---

Hi everyone!

Rails 3.2.17, 4.0.3 and 4.1.0.beta2 have been released!

These three releases contain important security fixes, so please upgrade as soon
as possible! In order to make upgrading as smooth as possible, we've only
included commits directly related to each security issue.

The security fixes in 3.2.17 are:

* [CVE-2014-0081](https://groups.google.com/forum/#!topic/rubyonrails-security/tfp6gZCtzr4)
* [CVE-2014-0082](https://groups.google.com/forum/#!topic/rubyonrails-security/LMxO_3_eCuc)

The security fixes in 4.0.3 are:

* [CVE-2014-0080](https://groups.google.com/forum/#!topic/rubyonrails-security/Wu96YkTUR6s)
* [CVE-2014-0081](https://groups.google.com/forum/#!topic/rubyonrails-security/tfp6gZCtzr4)

The security fixes in 4.1.0.beta2 are:

* [CVE-2014-0080](https://groups.google.com/forum/#!topic/rubyonrails-security/Wu96YkTUR6s)
* [CVE-2014-0081](https://groups.google.com/forum/#!topic/rubyonrails-security/tfp6gZCtzr4)

The commits for 3.2.17 can be found [here](https://github.com/rails/rails/compare/v3.2.16...v3.2.17),
the commits for 4.0.3 can be found [here](https://github.com/rails/rails/compare/v4.0.2...v4.0.3),
and the commits for 4.1.0.beta2 can be found [here](https://github.com/rails/rails/compare/v4.1.0.beta1...v4.1.0.beta2).

Here are the checksums for 3.2.17:

```
$ shasum *3.2.17*
f935f62c77648ceeea622c745fb675c00bae1762  actionmailer-3.2.17.gem
c97fc5302175bf85047598303ff5955e62b6ec94  actionpack-3.2.17.gem
73bfa7ba3cf5db06d7dd904d01a364794c26d74b  activemodel-3.2.17.gem
23c0dc657f6eee4c399e7fa3194670a7fb53d0b7  activerecord-3.2.17.gem
0408aec45047c3a487d157cca6776fab482a257e  activeresource-3.2.17.gem
f82805677b48a63678a10516bb190b9018621295  activesupport-3.2.17.gem
dd3dad311e390b57683c9e5367e5b86d468603d9  rails-3.2.17.gem
b1ce101f057562972852841de94f39dd54662ebd  railties-3.2.17.gem
```

Here are the checksums for 4.0.3:

```
$ shasum *4.0.3*
23a518945d69748894089be0c0248ac37a53a43a  actionmailer-4.0.3.gem
ea6ed1a6217025114781a82b1a47764b5f208efc  actionpack-4.0.3.gem
f7eebfc01692e433d154b711d7d46dfdb6c952b3  activemodel-4.0.3.gem
2f2d4e466869590a0c05df027b53440fc031a519  activerecord-4.0.3.gem
201700ba04716383dfd170e9fea05dda9f991cba  activesupport-4.0.3.gem
a26d1ecd1d61c18672e29668018dc89c37d371c1  rails-4.0.3.gem
984b1f914e64301f058b3ae49802b1d20f4d29ff  railties-4.0.3.gem
```

Here are the checksums for 4.1.0.beta2:

```
$ shasum *4.1.0.beta2*
b75b973e6bbbd547067e5c3b95948fa124110f65  actionmailer-4.1.0.beta2.gem
7450f3c6e4e8fecd570e738935999de60fb5419d  actionpack-4.1.0.beta2.gem
4c26f942e171f370bbe3bd48432709aabeae4b0e  actionview-4.1.0.beta2.gem
f2296128d08078c7d56e56e679ef0fefef256ed1  activemodel-4.1.0.beta2.gem
46ba3ebac34c19b060c7168365e3dedbc80f0332  activerecord-4.1.0.beta2.gem
46e048380d4c6d371d723676fad42c8710c6b4c1  activesupport-4.1.0.beta2.gem
e97fc5cd39c8480e9f2f94a4499c8553dd744aa0  rails-4.1.0.beta2.gem
0ad46ba736bfdf4b970199d8739974ef3c3c0cab  railties-4.1.0.beta2.gem
```

Happy Tuesday! <3<3<3<3
