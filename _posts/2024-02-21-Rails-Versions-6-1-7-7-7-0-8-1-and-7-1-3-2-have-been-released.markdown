---
layout: post
title: 'Rails Versions 6.1.7.7, 7.0.8.1, and 7.1.3.2 have been released!'
categories: releases
author: tenderlove
published: true
date: 2024-02-21 13:27:42 -08:00
---

Hi folks,

Rails versions 6.1.7.7, 7.0.8.1, and 7.1.3.2 have been released!

These are security releases, so please upgrade at your earliest convenience.

The 7.1.3.1 releases contained a small bug, so we released 7.1.3.2 with a bug fix, but it doesn't contain any other changes.

Here is a list of security issues that these releases address:

* [CVE-2024-26143 Possible XSS Vulnerability in Action Controller](https://discuss.rubyonrails.org/t/possible-xss-vulnerability-in-action-controller/84947), fixed in 7.1.3.1, 7.1.3.2, and 7.0.8.1
* [CVE-2024-26142 Possible ReDoS vulnerability in Accept header parsing in Action Dispatch](https://discuss.rubyonrails.org/t/possible-redos-vulnerability-in-accept-header-parsing-in-action-dispatch/84946), fixed in 7.1.3.1 and 7.1.3.2
* [CVE-2024-26144 Possible Sensitive Session Information Leak in Active Storage](https://discuss.rubyonrails.org/t/possible-sensitive-session-information-leak-in-active-storage/84945), fixed in 7.0.8.1 and 6.1.7.7 (does not impact Rails versions >= 7.1.0)

Additionally there have been new releases of Rack to address DoS vulnerabilities.

[CVE-2024-25126 Denial of Service Vulnerability in Rack Content-Type Parsing](https://discuss.rubyonrails.org/t/denial-of-service-vulnerability-in-rack-content-type-parsing/84941)
[CVE-2024-26141 Possible DoS Vulnerability with Range Header in Rack](https://discuss.rubyonrails.org/t/possible-dos-vulnerability-with-range-header-in-rack/84944)
[CVE-2024-26146 Possible Denial of Service Vulnerability in Rack Header Parsing](https://discuss.rubyonrails.org/t/possible-denial-of-service-vulnerability-in-rack-header-parsing/84942)

Here are the shasums for the released gems:

```
$ shasum *
fde325a53820f30abafc4bb4b347b0736628ea04  actioncable-6.1.7.7.gem
f6f7cf383f78ed8e08df218c34ddad9ced8d1273  actionmailbox-6.1.7.7.gem
20a64a0b1fe686e37be5eb9cab76570f2570ee36  actionmailer-6.1.7.7.gem
cbca1f87e850838155a7206d18813e89756ecaf3  actionpack-6.1.7.7.gem
256c10f7bb958b3238b421bcc525088eeeac89cb  actiontext-6.1.7.7.gem
e85974ee48b23a113d081408509e6747ed72827d  actionview-6.1.7.7.gem
62772d40e9936f2d8a0acc1c62062db0d60c6b16  activejob-6.1.7.7.gem
c198e520935690894782bce6ffdf12146e989a35  activemodel-6.1.7.7.gem
d75ec02999c524aac4554d32ad1b2ef5ff0d4a82  activerecord-6.1.7.7.gem
0d8b7639a9960cad7580753f9e4884e79b9bf29e  activestorage-6.1.7.7.gem
0425128486718960e4d03e2f77d402bd7128ad72  activesupport-6.1.7.7.gem
974b54eec71a35bbe54b17d7ba33a2faa36d18cc  rails-6.1.7.7.gem
309d9712e0fa0ead733d2bac2e19be67af47c70e  railties-6.1.7.7.gem

$ shasum *7.0.8*
2a750ca4a7fee4911bad13ecc5c278c19b167ba7  actioncable-7.0.8.1.gem
db5281a00c766de7e9ed8eec25e925f8936c6393  actionmailbox-7.0.8.1.gem
6120cf7f8e65f0b6a9995dd0b6bf474fde41c7cc  actionmailer-7.0.8.1.gem
baf14ff44dc1ec750762a623bbeec46b2bd75f96  actionpack-7.0.8.1.gem
308176ee3b26ae698d322829b5e5eb5793f866fd  actiontext-7.0.8.1.gem
a45c2cf000e48fa1c82bccd6c539c2c696ec5a88  actionview-7.0.8.1.gem
b524d5945b26da59fae0a9479f6b91bc3604f1d3  activejob-7.0.8.1.gem
6e8ac1b56560cd88c99969e90c4cd0a09c2d5e52  activemodel-7.0.8.1.gem
a6e56da9f79d257c1d177934e71c37330e2299e8  activerecord-7.0.8.1.gem
cafd8f2b3ab7e3518f31fda5415a2ba8ea950438  activestorage-7.0.8.1.gem
0ed4714f50af12eec79f4920be0a2904060f91dc  activesupport-7.0.8.1.gem
4bae873adc4c8f0a55f420cc760dfd6e654b5a5e  rails-7.0.8.1.gem
311ece40612800ba313297ed48864104f8cea3fc  railties-7.0.8.1.gem

$ shasum *7.1.3*
48acdf80911e36c28b1a4a41d35e0839b2012e18  actioncable-7.1.3.1.gem
2d7892180a9f634b5990936ef62bd235929e7aa4  actionmailbox-7.1.3.1.gem
ac5af97df307e8a2c9e18d25bad5cc0a6ab94601  actionmailer-7.1.3.1.gem
7acf5030984399294569c9c728f90ccf80605d72  actionpack-7.1.3.1.gem
cf9ce4ddd5f5dfb39acc4623b83219e6f23e583c  actiontext-7.1.3.1.gem
516bf01e9b9c6c22d00c638b080f3c7979441590  actionview-7.1.3.1.gem
87567827a03edc68b526b1c1985b3abd0446fe3d  activejob-7.1.3.1.gem
2e9e85525a7fcb600be0da047dd2ea2ce9758651  activemodel-7.1.3.1.gem
63fd22bd16674dfa2c82113faf93eb9edabaae40  activerecord-7.1.3.1.gem
ac0f3843a89cf2b2abf05e313e91dfac979bdff4  activestorage-7.1.3.1.gem
d9afe2694fd2f7bf454ef97284d7f4b7714d3ad5  activesupport-7.1.3.1.gem
915467fae49bf35ce6db031ebf95361548f18fed  rails-7.1.3.1.gem
b5acf92bf12b7471739d2eb1e77eeaa0dc6c46c0  railties-7.1.3.1.gem

$ shasum *7.1.3.2.gem
566f20dda50142697624a547661e7d29f773b93d  actioncable-7.1.3.2.gem
1a18a7e26f035079490943b0568a0bbd5ae0305d  actionmailbox-7.1.3.2.gem
3700b58d39fa68fd0ccdc8a520466bdda0f36c5e  actionmailer-7.1.3.2.gem
ab928d52a489011666e6b2803fe8a99010092c13  actionpack-7.1.3.2.gem
c4a2d6f87ee7d225325b73b81644e83f5cb34f78  actiontext-7.1.3.2.gem
4d9a3fdf4468a34c91462fbe5c7c82933a81ef59  actionview-7.1.3.2.gem
fe128d9c989724cb8f9cf3c8d28d4b131c6672cb  activejob-7.1.3.2.gem
f9d632bb56c8b0408908974ca864b61f3810ae57  activemodel-7.1.3.2.gem
147c1076781e5b4eb7b14e6665792b84e7e98dbc  activerecord-7.1.3.2.gem
57a5febb26107eeaccd565b38583050897fe8bce  activestorage-7.1.3.2.gem
aab6830abe8edc591279c96c4b3dfd02ed2a0de6  activesupport-7.1.3.2.gem
fa45e799c238f90978870daf632ba5295416ddbb  rails-7.1.3.2.gem
e03f4d8da3fecc6d659e75bc898bf20c7885b311  railties-7.1.3.2.gem
```

This is a reminder that the 6.1 series only receives critical security updates.
Users are encouraged to upgrade as soon as possible.

On a personal note, backporting fixes to Rails versions that old is not fun so please upgrade!

Have a good day!
