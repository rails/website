---
layout: post
title: 'Rails 5.0.0.beta1.1, 4.2.5.1, 4.1.14.1, 3.2.22.1, and rails-html-sanitizer 1.0.3 have been released!'
categories: releases
author: tenderlove
published: true
date: 2016-01-25 11:52:43 -08:00
---
Hello everyone and happy Monday!

Rails 5.0.0.beta1.1, 4.2.5.1, 4.1.14.1, and 3.2.22.1 have been released!  These contain the following important security fixes, and it is recommended that users upgrade as soon as possible:

* [CVE-2015-7576 Timing attack vulnerability in basic authentication in Action Controller.](https://groups.google.com/d/msg/rubyonrails-security/ANv0HDHEC3k/mt7wNGxbFQAJ)
* [CVE-2016-0751 Possible Object Leak and Denial of Service attack in Action Pack](https://groups.google.com/d/msg/rubyonrails-security/9oLY_FCzvoc/w9oI9XxbFQAJ)
* [CVE-2015-7577 Nested attributes rejection proc bypass in Active Record.](https://groups.google.com/d/msg/rubyonrails-security/cawsWcQ6c8g/tegZtYdbFQAJ)
* [CVE-2016-0752 Possible Information Leak Vulnerability in Action View](https://groups.google.com/d/msg/rubyonrails-security/335P1DcLG00/OfB9_LhbFQAJ)
* [CVE-2016-0753 Possible Input Validation Circumvention in Active Model](https://groups.google.com/d/msg/rubyonrails-security/6jQVC1geukQ/8oYETcxbFQAJ)
* [CVE-2015-7581 Object leak vulnerability for wildcard controller routes in Action Pack](https://groups.google.com/d/msg/rubyonrails-security/dthJ5wL69JE/YzPnFelbFQAJ)

For ease of upgrading, these Rails releases only contain patches pertaining to the security fixes.  The released versions can be found in the usual locations, and you can find a list of changes on GitHub:

* [Changes in 5.0.0.beta1.1](https://github.com/rails/rails/compare/v5.0.0.beta1...v5.0.0.beta1.1)
* [Changes in 4.2.5.1](https://github.com/rails/rails/compare/v4.2.5...v4.2.5.1)
* [Changes in 4.1.14.1](https://github.com/rails/rails/compare/v4.1.14...v4.1.14.1)
* [Changes in 3.2.22.1](https://github.com/rails/rails/compare/v3.2.22...v3.2.22.1)

rails-html-sanitizer version 1.0.3 has been released, and it contains the following important security fixes:

* [CVE-2015-7578 Possible XSS vulnerability in rails-html-sanitizer](https://groups.google.com/d/msg/rubyonrails-security/uh--W4TDwmI/JbvSRpdbFQAJ)
* [CVE-2015-7579 XSS vulnerability in rails-html-sanitizer](https://groups.google.com/d/msg/rubyonrails-security/OU9ugTZcbjc/PjEP46pbFQAJ)
* [CVE-2015-7580 Possible XSS vulnerability in rails-html-sanitizer](https://groups.google.com/d/msg/rubyonrails-security/uh--W4TDwmI/m_CVZtdbFQAJ)

In Rails 4.2, the HTML sanitizer was inadvertently made much more permissive than in 4.1.

In order to maintain our "secure by default" policy, rectifying this has forced us to make a backwards-incompatible change to the sanitizer.

If you use the sanitizer in 4.2, you will need to verify that the more restrictive filter still permits all the tags you need to allow. If it doesn't, you can add additional tags to the whitelist.

We've done our best to minimize any impact to your applications, but if you run in to any issues, please [file a ticket](https://github.com/rails/rails/issues) and we'll do our best to help!

Again, as always, if you run in to any bugs, please file them on the Rails issue tracker which is located [here](https://github.com/rails/rails/issues).  If you run in to security issues, please follow the reporting process which can be found [here](https://rubyonrails.org/security).

Please have a happy Monday! <3<3<3

P.S.

Here are checksums for the released gems:

```
[aaron@TC release]$ shasum *-5.0*
ab66244a0982e78502f6a80763509ac2d44b6cbd  actioncable-5.0.0.beta1.1.gem
47d8065ff0d6cfda2a5ccd85cffcd20144ea3555  actionmailer-5.0.0.beta1.1.gem
b358da8e683c6f15c03623f79abae8a6e0af2519  actionpack-5.0.0.beta1.1.gem
cc2e392c216c19736b9bbdd38066fc93384d7b4b  actionview-5.0.0.beta1.1.gem
fdbb7d5c251bde51dd669b4003096cc68a1cae1b  activejob-5.0.0.beta1.1.gem
b15cd7b0d9b434b140674ff52e0cbdeb9e71b887  activemodel-5.0.0.beta1.1.gem
414e46249b1cb8076b50b6515a8d61ef7e1a6cb7  activerecord-5.0.0.beta1.1.gem
e02309dd676f9959b6065ee04662430042b6ebc6  activesupport-5.0.0.beta1.1.gem
5f4b04e885781c639ff98857f4c85ffaeba934ef  rails-5.0.0.beta1.1.gem
dc72e0c60c86800612048f093543e183afb85ecc  railties-5.0.0.beta1.1.gem
[aaron@TC release]$ shasum *-4.2*
1d811a70a882be3f2e41932e5f90997d6dc63bf0  actionmailer-4.2.5.1.gem
800fec0a382e3642d500c5dd42e6b8b4c9ebe75e  actionpack-4.2.5.1.gem
201df102af6af1ac0efbe1a6c3c0f5c11fca58f9  actionview-4.2.5.1.gem
543413c4066e20db128888ba21c253b7b33d4e87  activejob-4.2.5.1.gem
1a845d38be3add3d52006d0b81a7e5ef28160c30  activemodel-4.2.5.1.gem
9ceffa7cf0d0f83d75768d5387fcba5c0b35102e  activerecord-4.2.5.1.gem
9cdf9da5f93f2ab83e4bbbf569e1f48bd6b8d713  activesupport-4.2.5.1.gem
e53fbe562bea0fd5ccd2a46730d4d2f802e79ee7  rails-4.2.5.1.gem
e9b8efe89c901b5f590c1560d82dac2b41d409f4  railties-4.2.5.1.gem
[aaron@TC release]$ shasum *-4.1*
f7df30256e1f3fa13659ec1f310200ad9fcfdead  actionmailer-4.1.14.1.gem
9333184fffbfbefe6cedfb2cf13d9a6e546f0d86  actionpack-4.1.14.1.gem
d4aa63a687959aaa2c33bed6985b4817b2f104d0  actionview-4.1.14.1.gem
f70164d1240eed8eab9a2f1e559aae336a0b228a  activemodel-4.1.14.1.gem
94c1475aa3350db98440c5332b699bec366bc22e  activerecord-4.1.14.1.gem
08b6adf299220cf404974d2bd5fcf5f72993c0c8  activesupport-4.1.14.1.gem
0f7995d9aded79e1e1e9269fecd8981c83dfded3  rails-4.1.14.1.gem
91a956ef86cc297ebee65e862ee6f9b840bbaf91  railties-4.1.14.1.gem
[aaron@TC release]$ shasum *-3.2*
f8a07a9ac582ef33b0112e79d606ef04aefbd2d3  actionmailer-3.2.22.1.gem
a26eb1752f625997fc87ab861312a056937c0276  actionpack-3.2.22.1.gem
6d4a6d976a3a07651dae211eefe447edea4d3263  activemodel-3.2.22.1.gem
9669c73665acd7cb0b67eaa84d4784252478e7f8  activerecord-3.2.22.1.gem
e1267d756271ef66022a83725b26762e758071f9  activeresource-3.2.22.1.gem
5a1daf97cf4dd4333a61c4a1209b97a8f22f083d  activesupport-3.2.22.1.gem
b5b624c8365b7061274642a2038935d06191ca8b  rails-3.2.22.1.gem
af2827bff9a94f733c98b2f88b3efe00cb22af79  railties-3.2.22.1.gem
[aaron@TC release]$ shasum *-1.0*
9c84dca57b521ff92fbdceba1de959db539e4c19  rails-html-sanitizer-1.0.3.gem
```
