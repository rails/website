---
layout: post
title: 'Rails Versions 6.1.7.10, 7.0.8.6, 7.1.4.2, and 7.2.1.2 have been released!'
categories: releases
author: jhawthorn
published: true
date: 2024-10-23 15:40:00 -07:00
---

Hello again!

Rails Versions 6.1.7.10, 7.0.8.6, 7.1.4.2, and 7.2.1.2 have been released!

These address a single bug in last week's security releases in the `block_format` helper.

Compared to [last week's releases (6.1.7.9, 7.0.8.5, 7.1.4.1, and
7.2.1.1)](https://rubyonrails.org/2024/10/15/Rails-Versions-7-0-8-5-7-1-4-1-and-7-2-1-1-have-been-released)
there are no additional security fixes or implications to these fixed release
so please feel free to upgrade when it's convenient. We're making this fixed
release to ensure everyone can confidently upgrade to a patched version.

Once again the upcoming 8.0.0 series including beta and release candidate are not affected.

Thanks!


## SHA-256

If you'd like to verify that your gems are the same as the ones we've uploaded,
please use these SHA-256 hashes.

```
3f8e1f787a7bfbf765959ba509ef70af8293b35cb864078919365a12bf33d470  pkg/activesupport-6.1.7.10.gem
562d9b1d0597f450437ec7cd6540b13f3e074cce5c7b237ac76e7435a15d4b8c  pkg/activemodel-6.1.7.10.gem
db1719ef443a5437badcaa1d0fb5da7db985988fb69cc37085ca6bcc569fb31a  pkg/activerecord-6.1.7.10.gem
23b7a38c696eecea244d2fe1c74317e703ab24f32bf3b0ba271d3862ab07bcc2  pkg/actionview-6.1.7.10.gem
7dd526e14b21db61c8b46d45261cf859cb86d430dd4ea4feff1c873099f5d56e  pkg/actionpack-6.1.7.10.gem
f1100c58aed04566cdff937cf36d7cacd414534fe4947e8399b072d90aae16cc  pkg/activejob-6.1.7.10.gem
2dd345e41786856e6efea24cc77589d054a9e83e2a73beaceff87c6ea8c5dfdb  pkg/actionmailer-6.1.7.10.gem
d00c50a2a778b8fee40c6e0a2b1871f360d098f3a0ed9fc43d0d14f8fcb05928  pkg/actioncable-6.1.7.10.gem
5b3ae2ffd02565413b1a36705ddc56a9855307076497f0dfb1dbe679a635d4dc  pkg/activestorage-6.1.7.10.gem
e95397559b95314e30334f10824be0de30c467e3020c76b3ad1c2a70089bc6a5  pkg/actionmailbox-6.1.7.10.gem
c0dedd58640533bba02a4f75988c6a043a4606be1aab99bc2b887e53976e4be4  pkg/actiontext-6.1.7.10.gem
de6e7a18a16a172c741020dac2e06c068a6a40bd493a4ec5244303171d6e5f0b  pkg/railties-6.1.7.10.gem
809692b3ec91fe1407b160e65203ef41c0b19b27bc5b836a515d6f4b969188d1  pkg/rails-6.1.7.10.gem
```

```
41b69384f1578ef0b34d73b73215d6df12e4d30bf49e3c7e01aa49a53d03423e  pkg/activesupport-7.0.8.6.gem
35d2c776a89773e339664893c012ec218934e19b646ebabbc8972c2da1fadab8  pkg/activemodel-7.0.8.6.gem
ee2a4cc131ea73c31af05d3eccf26901b365c64251d9fd1ba9da7298980c1a93  pkg/activerecord-7.0.8.6.gem
2c15e4139a87aa96910afb24717d93fdb4f407c078580ace2a5885d5c2e9393e  pkg/actionview-7.0.8.6.gem
b648e5d21270cc4ba47f37067ec791d68d0454e4df6b18000b659d7325a1dca7  pkg/actionpack-7.0.8.6.gem
7c79d5e3d37708e0ece41726134b6544f272f27c1efd75815c85aa9e3a076c3d  pkg/activejob-7.0.8.6.gem
e3f058a5e378e72b8a90577aaa325f23e1d718b437fe9430411eb0324ba8f71d  pkg/actionmailer-7.0.8.6.gem
f48b0ff8414dfbb2b38e639bf49e86677dfd1b16580ce9e0a3ffa1bb4c0a4057  pkg/actioncable-7.0.8.6.gem
6ea7c01d22aac82457155d19a72aafb5d5fa49b79bc852b8e0b0d5c3aac5dbda  pkg/activestorage-7.0.8.6.gem
8f9deed46e38fc97d86d34e9552ffd5aae81491b139f8df91ef2616ab5628857  pkg/actionmailbox-7.0.8.6.gem
262c19dffa2a5136f0852ee8ba2838c07113851444e5d3ccc77159624e120bc9  pkg/actiontext-7.0.8.6.gem
0ff07181e40d5e001ec2ee8e1db5af501d874e08133016f1230790807a0496b9  pkg/railties-7.0.8.6.gem
315fc5cf374425f00a6816d270a9061821038fa1ce993531ede4c014a8a782e8  pkg/rails-7.0.8.6.gem
```

```
821705c3ffd375d4a85bcba8b4e94f44b7117b73bdcfd8cdc44c00b96c65f920  pkg/activesupport-7.1.4.2.gem
1e591404197fb71a47bf1cd3579794131c629dd23c95b629b46df261587e5cc4  pkg/activemodel-7.1.4.2.gem
e9821c610adf329ad050b133f8e3a14d94421a3f195d58466c0f647e6a9416f1  pkg/activerecord-7.1.4.2.gem
f9e2f4c8be9de72e4f6ec50194d59052798925dbdf0cb274da9a7249e8bda645  pkg/actionview-7.1.4.2.gem
3179f100ee4ddb28bfc4c896de9974dbb0ad177cc72ac726a28d8549be2a79b9  pkg/actionpack-7.1.4.2.gem
61d8628c37de4a55903c6a8b4f02598e0ae20d95565ff6b7dfe9888648c4c793  pkg/activejob-7.1.4.2.gem
f5fe514a35034b7ccf34010bfe5f558dc3e22c7936be9b9b660f14dfd00f3c9e  pkg/actionmailer-7.1.4.2.gem
4235bd313a88a7ac594505247d3563603d4baaf080f5877c8bdf0af2f28354a3  pkg/actioncable-7.1.4.2.gem
6835f8be3e67a8185017fea8ef2c9c48cec015cea537b5ca412da26da84579a2  pkg/activestorage-7.1.4.2.gem
8e5c3ea53177588a63cb333602ac0bbdd0f9e380bece15ff889e22aa1da960dd  pkg/actionmailbox-7.1.4.2.gem
aa39ed36e522bd25346776a33224cbb946c3a547e95e0667c9d58a1f75db7f0a  pkg/actiontext-7.1.4.2.gem
8b2b7fbf29baffb052a263c958ac12442776ed28ee426b3e517f4e17439d7a89  pkg/railties-7.1.4.2.gem
6100b88adcd277f69b02a35a54459846bcb1214401688ca9beb49d468b88c130  pkg/rails-7.1.4.2.gem
```

```
6c3f6ad50c4e52ce39d67aeda38f99e1372eca8b295987d072c19460ebce4cb1  pkg/activesupport-7.2.1.2.gem
054006d842a823f74aa7d5da01579d20ec9b12ef57da4206d9e3b49b2ae1e0d6  pkg/activemodel-7.2.1.2.gem
42fd5ecf011d5a370a3d6a806bc41c375f079daee2a3d94f0ebf33826570ab05  pkg/activerecord-7.2.1.2.gem
39dbf4e337f89a1487ff8205eef9c4b85f949264a17c9f8fb3e8dc4b8bfed91f  pkg/actionview-7.2.1.2.gem
2cdae7965fdcec985da2adf14ba04966728567f0a651913c20a649f73ba47b1e  pkg/actionpack-7.2.1.2.gem
d8d4f4c8b4abe1f698c4170ec23c6fe05e544e3a2d017605517201a6e2c9e5a4  pkg/activejob-7.2.1.2.gem
eec37bc3961636ad10e1fff528ef8446088ab102c87cb9e55379f773c80048f9  pkg/actionmailer-7.2.1.2.gem
8b115abe6f85785a126dd8b22568739404edd2df3a6c46caadaf71be4303b290  pkg/actioncable-7.2.1.2.gem
b952f42dbab3b113af0a77a4d04a105be382df5e813556142fd10907e819a545  pkg/activestorage-7.2.1.2.gem
8507fb44266e849536d128b51b53f67d35fb716c71568828c510a684b42df56d  pkg/actionmailbox-7.2.1.2.gem
1e35181c36e143e5100df9f9280b043c3e9729983eacba9d6d6325b859094393  pkg/actiontext-7.2.1.2.gem
8b6fc1700ee182fa4e1299cb89bdd61b1423d9a68f2d350679e1686abef058c5  pkg/railties-7.2.1.2.gem
141678f76af259c71e14692f290a43b60efb63b339f56e802b48a40bd1f707ec  pkg/rails-7.2.1.2.gem
```
