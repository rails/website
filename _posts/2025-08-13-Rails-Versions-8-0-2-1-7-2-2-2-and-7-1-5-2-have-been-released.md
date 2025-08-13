---
layout: post
title: 'Rails Versions 7.1.5.2, 7.2.2.2, and 8.0.2.1 have been released!'
categories: releases
author: jhawthorn
published: true
date: 2025-08-13 14:00:00 -08:00
---

Hi friends!

Rails Versions 7.1.5.2, 7.2.2.2, and 8.0.2.1 have been released!

These are security patches addressing two security issues:

* An issue in Active Storage where transformation methods could potentially be unsafe, allowing for command injection vulnerabilities in image processing.
* An ANSI escape injection vulnerability in Active Record logging that could affect log output.

The Active Storage vulnerability is not exploitable under the default configuration, and under most terminals the ANSI escape injection will have minimal impact.
However we recommend upgrading as soon as possible.

Older versions of Rails are unsupported, and users are recommended to upgrade to at least the 7.1 series. See our [maintenance policy](https://rubyonrails.org/maintenance) for details.

Here is a list of security issues that these releases address:

* [CVE-2025-24293 Active Storage allowed transformation methods potentially unsafe](https://discuss.rubyonrails.org/t/cve-2025-24293-active-storage-allowed-transformation-methods-potentially-unsafe/89670)
* [CVE-2025-55193 ANSI escape injection in Active Record logging](https://discuss.rubyonrails.org/t/cve-2025-55193-ansi-escape-injection-in-active-record-logging/89669)

Cheers!


## SHA-256

If you'd like to verify that your gems are the same as the ones we've uploaded,
please use these SHA-256 hashes.


```
900031b9c8acbfea604977addcbfe990ba8f36e1059e9d448df520bbead36ed1  pkg/activesupport-7.1.5.2.gem
4fb6a56a8614ee820c218563fcdebcf0d7b16ab153b81ecd2ed91877cf4ac8b5  pkg/activemodel-7.1.5.2.gem
923da72b2da727fd2868bfa2a536db6facf71d67064889a4fb16ff323da99d2a  pkg/activerecord-7.1.5.2.gem
4fc916ac7eac631e228955207b1730935a7944a4d87d45a32cc40e977d5ca1c9  pkg/actionview-7.1.5.2.gem
a7bfedc8aaeb260778a358870120321a3146954497be465d534722c8c0d644fd  pkg/actionpack-7.1.5.2.gem
afb662a5c5cda81e34fe6b09089cdf4084aabc27c6aedbd58ba4c1bef7bd804e  pkg/activejob-7.1.5.2.gem
7a5c5fec1eb1bc64e97dcb73d38f17f27df30d5118f7eeb60e575ec10a9e860b  pkg/actionmailer-7.1.5.2.gem
79dd467dab2351110fe1fc69e25cee0110bf11f0b9f30165b945b574eebd5e37  pkg/actioncable-7.1.5.2.gem
ed9acb147cea135f9e00efd984a7b8ed670b15bc6e434956931b8deecec17c98  pkg/activestorage-7.1.5.2.gem
192b1dc102fe2b917cfc829a9944f6b08fd3237d10cf166498f7927857dcac4e  pkg/actionmailbox-7.1.5.2.gem
505678e4611762cb68e9c05bc5776ce5977415beed2fbabdd0ed110c63390207  pkg/actiontext-7.1.5.2.gem
af0ac89f0bfbb957c9fd12cc5a5561248b95b8df938758bfb553d6e916a9d621  pkg/railties-7.1.5.2.gem
a292087202c5babf4f4c39a8c37afda732117c481c619986ae1559446e927546  pkg/rails-7.1.5.2.gem
```

```
c54e84bb3d9027f1f372fb8f68203538fcfe0d5ff42801774c03974daa15bef0  pkg/activesupport-7.2.2.2.gem
6898b91af028d725729f65d8e0f6ccfef5993e085ed70d5b93c42ba1bf7384dd  pkg/activemodel-7.2.2.2.gem
e6b1e1499018f1c3ffd9f7828a8560588da1f5bd85dc2b7a95e49c5467cda800  pkg/activerecord-7.2.2.2.gem
5bf67e9716fbd159f09cbc8cf87f4813d3e8725f0197a7321910e9dc8c165b07  pkg/actionview-7.2.2.2.gem
ccd2f96ffb378060dd02e86318bca3faae1ecf483603a525fabfd84197c86a6e  pkg/actionpack-7.2.2.2.gem
e706383862084022d531eee64f74ac4b5fd751f160a7138d3a3c1018b2facb55  pkg/activejob-7.2.2.2.gem
d37c8ab094f3b73c3fbcbbf41d2e31fc15b607178569a58057ed878c2063a6e6  pkg/actionmailer-7.2.2.2.gem
3d957adc9d1d2ddb5ac8ed8791dc35b273c722f2dca2644f415bd24ba64c7425  pkg/actioncable-7.2.2.2.gem
0b28d0c191b03162e83d3bf6875c3692ab48abd1e371bb0b428136dd8509ae66  pkg/activestorage-7.2.2.2.gem
7f784a3685a877ca0937bf28f989bbafbffd0f3966d724e41bf9319f881487ef  pkg/actionmailbox-7.2.2.2.gem
8e80623cf206f077f4b671846ba74b0cb154b2a306a6569d3c4b3deb22e2b701  pkg/actiontext-7.2.2.2.gem
457506d29b7be2c5644b5bd4740edaf42bcefa52b50f9bed519a9b10ec9069e0  pkg/railties-7.2.2.2.gem
f38ff86c5e6905e5d30a762575f92ddad5b60346f5acfc282b0e22dbb36eca97  pkg/rails-7.2.2.2.gem
```

```
0405a76fd1ca989975d9ae00d46a4d3979bdf3817482d846b63affa84bd561c6  pkg/activesupport-8.0.2.1.gem
17bab6cdb86531844113df22f864480a89a276bf0318246e628f99e0ac077ec4  pkg/activemodel-8.0.2.1.gem
a6556e7bdd53f3889d18d2aa3a7ff115fd6c5e1463dd06f97fb88d06b58c6df1  pkg/activerecord-8.0.2.1.gem
2ea6d20ccb0b7b84a221a940ac06853ce99235e4ecb4947815839c7c5ecbf347  pkg/actionview-8.0.2.1.gem
61e7e11a31dbe5152ca57221788bdca42ef302c4cc53b4c8993d68dce8982b0a  pkg/actionpack-8.0.2.1.gem
d6e5f2da07ec8efac13a38af1752416770dc74e95783f7b252506d707aa32b89  pkg/activejob-8.0.2.1.gem
0de14d8d04541eab130858cb2f0697266be42de1afe1104bc43d7998137ddb9c  pkg/actionmailer-8.0.2.1.gem
6f1cb20db39fba28a93569e8d5dab42b2749d7ddd4baebb5bbecd4217e49d6a2  pkg/actioncable-8.0.2.1.gem
43bb3d9e115471e201e6a66813810c1d15b607a321f29d62efdf9d90ffaf76f8  pkg/activestorage-8.0.2.1.gem
8ea8c6e31e448961c06fc1d6282775b32aff1c009f232d4564e07e54850a6cad  pkg/actionmailbox-8.0.2.1.gem
0cc4b3b5cfb9d915c6697b05b013dad7f4eaf074d9989700b6a0a55cf620d6b8  pkg/actiontext-8.0.2.1.gem
54e40e1771fc2878f572d5a4e076cddb057ba8d4d471f8b7d9bfc61bc1301d4c  pkg/railties-8.0.2.1.gem
13ab95615569e74e364384b346b1d83e4795dbde83d9edf584e8768e8049b3ac  pkg/rails-8.0.2.1.gem
```
