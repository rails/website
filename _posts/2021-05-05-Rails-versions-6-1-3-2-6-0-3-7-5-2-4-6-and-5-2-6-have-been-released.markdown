---
layout: post
title: 'Rails versions 6.1.3.2, 6.0.3.7, 5.2.4.6, and 5.2.6 have been released!'
categories: releases
author: tenderlove
published: true
date: 2021-05-05 10:16:05 -07:00
---

Hi everyone!  Rails versions 6.1.3.2, 6.0.3.7, 5.2.4.6, and 5.2.6 have been released!

These releases contain important security fixes, so please update when you can!
Here is a list of the issues fixed:

* [\[CVE-2021-22902\] Possible Denial of Service vulnerability in Action Dispatch](https://discuss.rubyonrails.org/t/cve-2021-22902-possible-denial-of-service-vulnerability-in-action-dispatch/77866)
* [\[CVE-2021-22903\] Possible Open Redirect Vulnerability in Action Pack](https://discuss.rubyonrails.org/t/cve-2021-22903-possible-open-redirect-vulnerability-in-action-pack/77867)
* [\[CVE-2021-22885\] Possible Information Disclosure / Unintended Method Execution in Action Pack](https://discuss.rubyonrails.org/t/cve-2021-22885-possible-information-disclosure-unintended-method-execution-in-action-pack/77868)
* [\[CVE-2021-22904\] Possible DoS Vulnerability in Action Controller Token Authentication](https://discuss.rubyonrails.org/t/cve-2021-22904-possible-dos-vulnerability-in-action-controller-token-authentication/77869)

Here are the checksums for the gems:

```
$ shasum -a 256 *-6.1.3.2.gem
0792e3dde6f85d2fec45dd048b0fc84b6ecec94f5011bf44c210f278c2522697  actioncable-6.1.3.2.gem
a58f9360bd724cfa5c69f428fb4f720727a028221cc34eeca3bce0e5521f39e0  actionmailbox-6.1.3.2.gem
978b37c0defc62f07e664880b5f323ff4b4238e0b3f5d9a87668c5f7a7570ddb  actionmailer-6.1.3.2.gem
a5165a3eaaaf9ee1652d645d5fddcf5a4b08b7a3e8c8d2bdb284ae4769d9aff1  actionpack-6.1.3.2.gem
0787918e22bb621b55a3d569258c22e0365450120e47b3486dc1f3742d9bd9fd  actiontext-6.1.3.2.gem
56fb0011ed74b19915c4068c0778d737ea9bbadc7ecd7461502c6b379e58cde4  actionview-6.1.3.2.gem
b8f7949f79e583e69077e995fc084ed6c505012a7011f7faa41d7606d5ca005d  activejob-6.1.3.2.gem
5459410a49855d18b89ecf2d509cb74924e37559a01a991b41d9fb4c201cedbe  activemodel-6.1.3.2.gem
c8400e75c1caa43aefcc6dd1d21c427030f4190ee606931ff8f97da12a46e539  activerecord-6.1.3.2.gem
0f4319e41fb01cc6c12f0bf7cd97a8dc79771fc1f6d308da3a246294c79c7769  activestorage-6.1.3.2.gem
d9074834deca6676aabd432f16c392e991eca1f675cbcefc38671a0a7d6b5db3  activesupport-6.1.3.2.gem
36680669c708bec0a4fb3cdcbae65df62fd99a2a94b0b1f60732ad8322bd963a  rails-6.1.3.2.gem
027763dc9f2b24f085ed3684b6b3fc49f6c872e5844736ff80fb18d250be219f  railties-6.1.3.2.gem
```

```
$ shasum -a 256 *-6.0.3.7.gem
baf4fb13204f1f62de0b7fced46a18908293b641f38669a12329f05c3f13bbe8  actioncable-6.0.3.7.gem
7271aa107cdaf6dff603cba8581c06e83f978ea4d3d43106a35fbf35028415de  actionmailbox-6.0.3.7.gem
2fc1d2af0d6306e372870e0177c5c5d5fb373c32b3a178234c9df68865e651a4  actionmailer-6.0.3.7.gem
32479c62b269c96fa511277b850d81711a32b12796d2654f026032ffe48961ab  actionpack-6.0.3.7.gem
016aa2df7f0ad70deee31357497fcf43d91bc134b146eeb158e9896f2fc142cd  actiontext-6.0.3.7.gem
e51ef8dd5e2096870beff4dd148fa798d810d4f25673ec9a47f083fe32e2a0c3  actionview-6.0.3.7.gem
727c6eb841061fdde7090f6992c3c9bf30c3eacb4235e4935e930d8bb77ca93b  activejob-6.0.3.7.gem
f1aceff039036d032b39b0b9a60b382e59aefd31ce5ad919c274e0142ed55ff7  activemodel-6.0.3.7.gem
515f9e1fb3de980c1932e302b3fd4e403e6271fa5bd9155760225e920dcfa179  activerecord-6.0.3.7.gem
e468a989cd6bae0db81199ea89cfaabe2553fc2bf6e2138239095939289116fa  activestorage-6.0.3.7.gem
5f0c107e6d3a12e1e7348505d1a56f26c8cd8fc8dd5d75bd83bfa8eb894ee030  activesupport-6.0.3.7.gem
41e295498229ae1134c052b2529df7835bd5639b92e54a30979b4b0d45601a6f  rails-6.0.3.7.gem
82a3c056b4cc6efda8901db119647bf3a60963e7cbea7cddc9da22e680416161  railties-6.0.3.7.gem
```

```
$ shasum -a 256 *-5.2.4.6.gem
711ff7d3b3ccb43905a8badf9fdabef08fafd91ab6999dd9109f72f109db091c  actioncable-5.2.4.6.gem
6b56dbb880c3045d3827a1a409570ff86253474c2328581670885621d74cf3b8  actionmailer-5.2.4.6.gem
4e7bbbfe532e249c2a978211437640a15c6495bf0e8a6b51de950600d51911a8  actionpack-5.2.4.6.gem
e8bc310867b528a87bc1a78f81049d3f20c876d005f49d73b0d9d3adf9d58936  actionview-5.2.4.6.gem
01c6b9f10b3df6037b9c13d034caf32a88dc0cfc015120ecb59fc342fa61a391  activejob-5.2.4.6.gem
753322f7b88e0284ff01ce55a419f44139f3fe98ed19025036eea26b5444a0e1  activemodel-5.2.4.6.gem
e6484d9401102074091c5579e4a0fb9bb396691ad91e07b69e3b2a7fc416b987  activerecord-5.2.4.6.gem
18a4bff2ccf88a7c3a81dc659d6f55090be7777f4af9f78dc7f67a5b72265249  activestorage-5.2.4.6.gem
6a9301038fd96877eb5a7f942eb128bb1de1a9e50976af713802862747283ab9  activesupport-5.2.4.6.gem
cb1369b8e341092cc154ef9ebb9b3a57801366ec32506d5166b9b2a6530eda7d  rails-5.2.4.6.gem
b0c16fe7cabadca0cc466b6d8573773aa178f394a16de0aa227fe60c0c1a381d  railties-5.2.4.6.gem
```

```
$ shasum -a 256 *-5.2.6.gem
d523ec54bac8d37f587838aa5c502b87e6900c96fbc3b51dffc029f83845e7e8  actioncable-5.2.6.gem
8ddac9dd54bd1f78a50682662a964a109daf9c26575e6bd2ed15c39929b19b3f  actionmailer-5.2.6.gem
1e8c541046f3f8e40cdfe7894a4c5f1da7b910630a82bd97b4cf0b870aa15d2c  actionpack-5.2.6.gem
ef2f9ca0ab876e890d5508da547bef6e7248f16e89c42bd35510d33b4510c819  actionview-5.2.6.gem
cdf6435547ede7d2a7390f0e92f703421984e2794cb8b7086c8ce8f5d7ecbbb1  activejob-5.2.6.gem
467f960c0d787a825e21687619d131acbcbaf645add91c5b34b5a1fc2d9b48e4  activemodel-5.2.6.gem
ecbb022ce4b00c95323ce3bd8eedbd4d98e88497efb6d0c637b4f60759b41817  activerecord-5.2.6.gem
d45ddb05fa5f341482fd1ebacf3d898362d2f300d9f7116e1ac3138d0353df72  activestorage-5.2.6.gem
7249ee13859fc99ed2c833048674fd28c11605c679f1c65035190a2219e9cbef  activesupport-5.2.6.gem
ccdef9f57c2c0f67faae9d5b6d155f5e61b033f944499ea09d6383e6626d27dc  rails-5.2.6.gem
93202a5b7a3bf0344182271da0352b02cef7317a0a4de8ebba0f8eb0bb3b4967  railties-5.2.6.gem
```

Have a great day! 😬

-Aaron ❤️
