---
layout: post
title: 'Rails 6.0.4.1 and 6.1.4.1 have been released'
categories:
author: tenderlove
published: true
date: 2021-08-19 09:40:25 -07:00
---
Hi everyone!  Rails versions 6.0.4.1 and 6.1.4.1 have been released!

These releases contain important security fixes, so please update when you can!
This release just contains one security fix which you can read about here:

* [\[CVE-2021-22942\] Possible Open Redirect in Host Authorization Middleware](https://discuss.rubyonrails.org/t/cve-2021-22942-possible-open-redirect-in-host-authorization-middleware/78722)

Here are the checksums for the gems:

```
$ shasum -a 256 *-6.0.4.1.gem 
390edd2a66448c4ba8686c11514be45264e995304cd05095d5bc5e55126e68ef  actioncable-6.0.4.1.gem
7ea740274387f1b955a6f23288baac88c3e6eb8543a98d825efec9105b850b61  actionmailbox-6.0.4.1.gem
357e32b4a17ce9e85f068d90f9ca841cab7f8c37d667cd3ddcc5330e01aeb1db  actionmailer-6.0.4.1.gem
6fa124867dabefa977f64f30005ed918a71fe6d745b1bb6f0fbd05bef2767a03  actionpack-6.0.4.1.gem
9466887c902c791b7b716b6d5169d9f02487cb0ac8bea54fe6e37b7d2e19df03  actiontext-6.0.4.1.gem
ffdde2003358f64a14d8687b3d7bc30c0566f1b74cfe82848c9b99609f5800a8  actionview-6.0.4.1.gem
71744dc6d49a89c64124ce660b48528a1783f508384112f532c1ced009998d64  activejob-6.0.4.1.gem
3753fb5dfd6d7152ceaec361fea4aee2da7f43cc0004718c16b282d139aae5c8  activemodel-6.0.4.1.gem
a0e4e861767c5b38252dbfd040b0f786a80d8794e021fb0f32e75065f71a066c  activerecord-6.0.4.1.gem
a5d08d6ce17cadae0977ab9b3629334076343575d0f20438093b3574c82cd0bc  activestorage-6.0.4.1.gem
33093c89f35db3200d3cb161252e95322e6fd8f46419e98ac712a5d01445913f  activesupport-6.0.4.1.gem
62f6b50573e2afc305575f580ed72783512874464726d8e52fe8c10b981d1ee0  rails-6.0.4.1.gem
e4743f2aaa895962f94c1d6777daffff3fb578818a1544d58e5a40a76d27856c  railties-6.0.4.1.gem
```

```
$ shasum -a 256 *-6.1.4.1.gem 
5d7cca7aefeee6ea95003f32786196749c9b6c92f8a96937fda066156d2d9846  actioncable-6.1.4.1.gem
06e39f90ad0da00acf860265188c438b74fa96aa69990216652508cda56d5f99  actionmailbox-6.1.4.1.gem
229525238eeba137d9ecdc6c331fac07c76a2305ea66f102642f16a6043d4003  actionmailer-6.1.4.1.gem
2a5e0af9f561e8b7f27b1f4088a3d6d4283ec7eaa283f0db345ecb152dd6fe75  actionpack-6.1.4.1.gem
02953e65adb6805e0279ffaf44f4faceb4e89adc038d0ed7b73b018831f18e54  actiontext-6.1.4.1.gem
7f08294f1f0e39ea9db211bafedbded068223abf54659581ce440c3a0b8bc4f9  actionview-6.1.4.1.gem
169e7cf2d9ecad34db8199c2da577e853c6a65523c9cd9177b3d2b3e4104ece0  activejob-6.1.4.1.gem
032f5bbe1fc88aa2fb4db97807026c01fe1a41571672d01f2d0b454b49553d9a  activemodel-6.1.4.1.gem
4a22709593cf8e164939286bc1635efcd87378244ad17e87becb1f7324dd8fb1  activerecord-6.1.4.1.gem
716fdda141aa3a9c027f59d0effb08cbf5291fad1df82d50e9e4e1edd2ff769e  activestorage-6.1.4.1.gem
44b781877c2189aa15ca5451e2d310dcedfd16c01df1106f68a91b82990cfda5  activesupport-6.1.4.1.gem
7f5dd7a71046aedb6859eb4288b31b738fb8544bd9fb27574085b58cbaa8a9f8  rails-6.1.4.1.gem
7e03a6b27a1ab455e9d9c52b6dfb1cae34065ea04382272e19da63860ca897cf  railties-6.1.4.1.gem
```

Have a great day! 😬

-Aaron ❤️
