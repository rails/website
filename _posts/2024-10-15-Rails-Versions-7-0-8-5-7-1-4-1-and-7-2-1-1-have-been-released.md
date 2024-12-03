---
layout: post
title: 'Rails Versions 6.1.7.9, 7.0.8.5, 7.1.4.1, and 7.2.1.1 have been released!'
categories: releases
author: jhawthorn
published: true
date: 2024-10-15 14:45:00 -07:00
---

Hi everyone!

Rails Versions 6.1.7.9, 7.0.8.5, 7.1.4.1, and 7.2.1.1 have been released!

These are security patches addressing 4 possible ReDoS (Regular expression
Denial of Service) attacks. All of these only affect Ruby versions below 3.2 so
we urge users on older versions of Ruby to upgrade to these new Rails versions
at their earliest convenience.

Additionally we strongly recommend users upgrade to Ruby 3.2 or greater, to
take advantage of the improved ReDoS mitigations in newer versions.

Ruby 3.1 is approaching it's end of life for security support from Ruby
upstream and is the only maintained version of Ruby still vulnerable to these
attacks. Going forward we plan to continue to address these but will do so in
our public issue tracker like normal performance bugs.

Rails 6.1 had an anticipated end of maintenance earlier this month, but as we
transition to our [new maintenance
policy](https://rubyonrails.org/2024/10/15/new-maintenance-policy-and-eol-annouments)
we've cut an additional release: 6.1.7.9.

Rails 8.0.0.beta1 and newer are unaffected as they require Ruby 3.2

Here is a list of security issues that these releases address:

* [CVE-2024-47887 Possible ReDoS vulnerability in HTTP Token authentication in Action Controller](https://discuss.rubyonrails.org/t/cve-2024-47887-possible-redos-vulnerability-in-http-token-authentication-in-action-controller/87698)
* [CVE-2024-41128 Possible ReDoS vulnerability in query parameter filtering in Action Dispatch](https://discuss.rubyonrails.org/t/cve-2024-41128-possible-redos-vulnerability-in-query-parameter-filtering-in-action-dispatch/87699)
* [CVE-2024-47888 Possible ReDoS vulnerability in `plain_text_for_blockquote_node` in Action Text](https://discuss.rubyonrails.org/t/cve-2024-47888-possible-redos-vulnerability-in-plain-text-for-blockquote-node-in-action-text/87696)
* [CVE-2024-47889 Possible ReDoS vulnerability in `block_format` in Action Mailer](https://discuss.rubyonrails.org/t/cve-2024-47889-possible-redos-vulnerability-in-block-format-in-action-mailer/87695)

Cheers!


## SHA-256

If you'd like to verify that your gems are the same as the ones we've uploaded,
please use these SHA-256 hashes.

```
781b544fb0ad93ee776d6297761c9d97006cd4a7a954644942ae7e515be79f7c  actioncable-6.1.7.9.gem
b076c125ee3a51d3a72d8f36eb14999ff0f444f61c8ba9b7dc39f701769324d4  actionmailbox-6.1.7.9.gem
fb7526d8d3c02c3ba61a6b3815a3c25d99dee0cc6cc78af5328e603e24730ecc  actionmailer-6.1.7.9.gem
cf7cb714158c63334f401130192525c0ffddb8cf931f49ed1fcf04e0535a29cb  actionpack-6.1.7.9.gem
eab1ff58a618039341ae0053314b25786acf8522a44cbd89d49d54698f9c2780  actiontext-6.1.7.9.gem
2ff4e4debc62b6712d4cce2a67c018d20ff1b4553e4bd0b36aaf78460fcf785e  actionview-6.1.7.9.gem
609b996aa6be9de1bff779147a475a7cd9fc0347350509f5124cb8fc6d2962e3  activejob-6.1.7.9.gem
7771a0cd5aa97eed8f34e757cd50a484f4f2d41d30be20c23ecdc0bf9916b918  activemodel-6.1.7.9.gem
5090f230aadccba15adcabebbcdc43cee7a449eb2bdf4fc97aaa2e21d2e68347  activerecord-6.1.7.9.gem
01bd3cc251428a58ba192634212eb1cdfc6b762e45e273835de3440d823607f3  activestorage-6.1.7.9.gem
3cb0a0a845b3edd949e4c30312b8f57a07ea04e9e122b38e2799d55130ba3bd4  activesupport-6.1.7.9.gem
fb854f657f8a76ad3b3bc31ebfde02e6728192779be383770c5170799db17b5d  rails-6.1.7.9.gem
0bd9a07322808826adff32e01e6ac65e02d9b0382106ed00c7a3e295c0071222  railties-6.1.7.9.gem
```

```
bfd8563ef4cdd819c715105cf63b0580a62b9af26824cad63301109e929183cb  actioncable-7.0.8.5.gem
d26ad07b191e2a89b8e82bea36ee4d7bef8607034e636b6c4691e47c00f66afe  actionmailbox-7.0.8.5.gem
934cd16654317f326eef1da401dc2201e7c9ef545df7bcadf470e4b6d26f12c1  actionmailer-7.0.8.5.gem
e212ae908b01d2c503a67757c49a0a7c3bcb0b3278ab5931d020f852557b8882  actionpack-7.0.8.5.gem
8e393f34fc4a520de353fde07e4cfd6525d08488207fe3415be8884ec60286b2  actiontext-7.0.8.5.gem
40282eaac83adf0a335e050f203dfdd31fdd20fb6e88700536cde65a625e8325  actionview-7.0.8.5.gem
9ddadf9bb0e8e06a40bf0d52b28e7ff5d8b8a2bc6eb5df93c8c4024f3ac74e8b  activejob-7.0.8.5.gem
0e0ef595d86111be1c251faf3ffb2e51e258cfa6eda418d3f22e96e116de08b3  activemodel-7.0.8.5.gem
fa7819eb168c2f62ecc4454e0f5cab5c2ee62aa84f3f1042ce9141a1b0d96df6  activerecord-7.0.8.5.gem
99c352f703a7038eb347e9a8eb2773a14dbee7a7f89486fd443fdd26c45c65b3  activestorage-7.0.8.5.gem
a0a62638405feff85965acbb14946acacfe011363f0de4e89f73ffc9d10f8ea1  activesupport-7.0.8.5.gem
b1c4104a9869b9e86702ab41c8407db65e91b325ae33524a72388dd4d08501df  rails-7.0.8.5.gem
73c25761110e64bbcee73b524f36d6e4ae237ed80b9d63769813873c8f6a04c4  railties-7.0.8.5.gem
```

```
9d03c105ca7d088c2d3814a6c6c33e83efe31c0c4ac80ff3cd97773e4d2fcbd5  actioncable-7.1.4.1.gem
53d23141bf650d2b810617b9fb44edea83f9e292fd4949fcff675646309325fd  actionmailbox-7.1.4.1.gem
d977b4acd66dea2e86c5c1691609ae8ab388d87e6ba1ea962119e80fae7369c0  actionmailer-7.1.4.1.gem
5d3b2ef4bdad04970c7351b8f4c8428a2d443260d90d7b1ec316475328562dd7  actionpack-7.1.4.1.gem
0d9c7e17a4c0a03feb56252db340c969aa070e2ed622ccc386e06f4b15065f19  actiontext-7.1.4.1.gem
522c3153435a17c1757e61698746e9100328665a02ea9b33694f9b69fab9f90b  actionview-7.1.4.1.gem
d437d262964f9e9d1164caae9032f2f722b6640f55ce60de9a7c459d251911e4  activejob-7.1.4.1.gem
f48237b40183f3629e4b98ae962edc4c2faa228fe2927268e14e7f318272edb6  activemodel-7.1.4.1.gem
c14d6a345a422b65dcd9000e47ae90042da6a857a7022641855ad0758f029db3  activerecord-7.1.4.1.gem
c82a6ba87582f3e6c2cf70bc7e0fa49ccbcec0bccf5aef246ae3a9615126fc1f  activestorage-7.1.4.1.gem
80e3739389ec469d3f768386b10107e9ab7ec45d308c439d6f51b3c3f731615c  activesupport-7.1.4.1.gem
4a9e8955c812c930f074e083375b99860989f61da47a0734b7abf9d0baaa4739  rails-7.1.4.1.gem
5d8073d489f9d8394f02b2cfe68583d22d2dac3ce395a5c72dbf7548e385f17a  railties-7.1.4.1.gem
```

```
56a57b5a3615cabe754d6cf6ad4ab7a2aa10209638a94b56598311c411869980  actioncable-7.2.1.1.gem
839f3b406f049a9dafd8e00695282025e2e1d9d7caafc852fd6156609d262346  actionmailbox-7.2.1.1.gem
95aeb7eb76dc0a90917c7a3a7ad3e01464a43bf81d6c51022045ae4c7fdc627b  actionmailer-7.2.1.1.gem
a7c1654012de62713252459eb15f3918f7aa119d906a15f74e76a0ed4e8e5bc7  actionpack-7.2.1.1.gem
66675be781ea2a75c1958698c4083742608696e1116a9935602a6caba90305d5  actiontext-7.2.1.1.gem
a0136e499a54eb394d97a9fc6960a2b2920ddd55911f94b09cbe7b9295cd90c9  actionview-7.2.1.1.gem
27cd7e7c52a1355d90761212b32614249a0ea0164bccec1fb5a15ef26e47da28  activejob-7.2.1.1.gem
315d5d2e3d3a5f850a9bea0a69d175bdbf3c5a06a98014006dde73dc83dc4603  activemodel-7.2.1.1.gem
c124a4e4ddfa93e7f198bfdb464dcb8cc5908c89e9c22ec4248ec52ce719aa6b  activerecord-7.2.1.1.gem
f699a54809413424c7aafcb7a0fa4a2ea56366e0e92603bc80d51168d5ac6bbb  activestorage-7.2.1.1.gem
bd4c1b0e5f758c8ccd16250f43b32925e33521e3c0d77c1574588f0d02f83bb2  activesupport-7.2.1.1.gem
79dbdb6feebf78c1172b643a273a4b1c6c8a18e101a4bb1c838be611a3cdcae7  rails-7.2.1.1.gem
16ac9ddd079b8e8c4c3386234512c301ab7a302bce3cbe0560ac44cec7d88453  railties-7.2.1.1.gem
```
