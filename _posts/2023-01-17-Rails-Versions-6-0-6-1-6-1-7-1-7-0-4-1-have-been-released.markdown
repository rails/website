---
layout: post
title: 'Rails Versions 7.0.4.1, 6.1.7.1, and 6.0.6.1 have been released!'
categories: releases
author: jhawthorn
published: true
date: 2023-01-17
---

Hello! Hot off the press Rails Versions 7.0.4.1, 6.1.7.1, and 6.0.6.1 have been released to address some security vulnerabilities.

You can read about them in our posts to the security announcement forum:

* [[CVE-2023-22797] Possible Open Redirect Vulnerability in Action Pack](https://discuss.rubyonrails.org/t/cve-2023-22797-possible-open-redirect-vulnerability-in-action-pack/82120/1)
* [[CVE-2022-44566] Possible Denial of Service Vulnerability in ActiveRecord’s PostgreSQL](https://discuss.rubyonrails.org/t/cve-2022-44566-possible-denial-of-service-vulnerability-in-activerecords-postgresql-adapter/82119/1)
* [[CVE-2023-22795] Possible ReDoS based DoS vulnerability in Action Dispatch](https://discuss.rubyonrails.org/t/cve-2023-22795-possible-redos-based-dos-vulnerability-in-action-dispatch/82118/1)
* [[CVE-2023-22794] SQL Injection Vulnerability via ActiveRecord comments](https://discuss.rubyonrails.org/t/cve-2023-22794-sql-injection-vulnerability-via-activerecord-comments/82117/1)
* [[CVE-2023-22796] Possible ReDoS based DoS vulnerability in Active Support’s underscore](https://discuss.rubyonrails.org/t/cve-2023-22796-possible-redos-based-dos-vulnerability-in-active-supports-underscore/82116/1)
* [[CVE-2023-22792] Possible ReDoS based DoS vulnerability in Action Dispatch](https://discuss.rubyonrails.org/t/cve-2023-22792-possible-redos-based-dos-vulnerability-in-action-dispatch/82115/1)

In accordance with our [maintenance policy](https://guides.rubyonrails.org/maintenance_policy.html#security-issues), only the 7.0 and 6.1 series are receiving security updates and 6.0 for severe issues. Users on older versions are encouraged to update as soon as possible.

Below are the shas for the released versions:

```
$ shasum *-6.0*
ace1418ec3418d1395ba0bf276d7062b37ead714  actioncable-6.0.6.1.gem
8566f54fed8bfbb08c7c75c1950ce30e9063b690  actionmailbox-6.0.6.1.gem
4e6379768a69f62a97e19445aeeab1f2264a5722  actionmailer-6.0.6.1.gem
28b358b8ff8fa863131039a63d960148904b1bcd  actionpack-6.0.6.1.gem
2040ebbd348e99aff8caab672b65dadfdf8aecc2  actiontext-6.0.6.1.gem
90bccbd4b3ca89f258d12944e71e88d434dae8dc  actionview-6.0.6.1.gem
9ee11ab0cbd975d507bbd43205c712deb548c9f0  activejob-6.0.6.1.gem
6d2b102c872c1e3632732d15144b6818af42f3c4  activemodel-6.0.6.1.gem
52c922a17b14d940aa2f327c10fbee6f816e5562  activerecord-6.0.6.1.gem
cd15769db1f160176b1e3a9908be947526b04cf7  activestorage-6.0.6.1.gem
3a8e316700b696c9c405d84491715dcd5e446fef  activesupport-6.0.6.1.gem
c5d98e34903925a3c173c194dac6c4028d6da7c4  rails-6.0.6.1.gem
7ee88120e98bc5772bfd3a19c9a4c9d106077a81  railties-6.0.6.1.gem
```

```
$ shasum *-6.1*
c3860102067a79fc1a4b87025f24e61f5da1682d  actioncable-6.1.7.1.gem
736c05b5bd94190b078cb215858edcfbe2ca8bba  actionmailbox-6.1.7.1.gem
62d5f995f22c2d29ea0f54d5fd9421f1be38c0c0  actionmailer-6.1.7.1.gem
f3d500202af1e0e9650d54e4f973c5e2698d7f14  actionpack-6.1.7.1.gem
fed612f06d0a0a7fdc7950faddf69958bbae5d45  actiontext-6.1.7.1.gem
cc0817332efcc1fb0ed6fae65d7b3eb2162ba795  actionview-6.1.7.1.gem
4e925bbd0081c8dd7da4bc999ef7c1dd38a8a32b  activejob-6.1.7.1.gem
f0ed251f304ee70beb318aa74d8156ccb84c0a94  activemodel-6.1.7.1.gem
8b029c6867632c7634bd30c6067fb787f9d6ebbc  activerecord-6.1.7.1.gem
c6192a61072a749a6dd645f84fad87e4276dfbfc  activestorage-6.1.7.1.gem
8676ec637fcc86b1f1f9920ccbbc0fe89ab3c0de  activesupport-6.1.7.1.gem
9af3a273c91a2d8376b11fcff95c96c8c5d2db5f  rails-6.1.7.1.gem
ee8adf39c02038ba6d4869e7273f94e83ee1c259  railties-6.1.7.1.gem
```

```
$ shasum *-7.0*
2f881144c9d082d53b483934b5c8831c7e1ab109  actioncable-7.0.4.1.gem
7a873cf37843e18109f750d8643b83d54c419b35  actionmailbox-7.0.4.1.gem
4d397b2fc54a087bd418fe15e5ab1dab8c9bdd69  actionmailer-7.0.4.1.gem
cdddcd9816f5c6df271d5c3294971cfab99c5ff2  actionpack-7.0.4.1.gem
07cd0ef083473052e01fe6b97d0672361ebb7177  actiontext-7.0.4.1.gem
c8c58242356695a2b37af7a325e4a134125aa459  actionview-7.0.4.1.gem
f0b0b1a5dd7f7ab453708c4ef5b82f6c336200f9  activejob-7.0.4.1.gem
83e689e9006e774c48f4bf87cb524acfae7dd842  activemodel-7.0.4.1.gem
1ebd82ebf59563a032b31eadbd8c2df80f61ae0c  activerecord-7.0.4.1.gem
7f5545895027e15a8d43cb09732b8fc7ae98eb4a  activestorage-7.0.4.1.gem
9e96800123ee302a4011683a0f0eaa00bf1f638c  activesupport-7.0.4.1.gem
c6607eeb8b8e0a22d0287fd59910f84536514a57  rails-7.0.4.1.gem
a11d35b0ca2131e07a532f21a1e6d9c26dfde06e  railties-7.0.4.1.gem
```

If you run in to any issues, please sure to let us know in the issue tracker.

Thank you!
