---
layout: post
title: Rails 3.2.19, 4.0.7 and 4.1.3 have been released!
categories: releases
author: rafaelfranca
published: true
date: 2014-07-02 14:13:03 -03:00
---

Hi everyone!

Rails 3.2.19, 4.0.7 and 4.1.3 have been released!

These three releases contain important security fixes, so please upgrade as soon
as possible! In order to make upgrading as smooth as possible, we've only
included commits directly related to each security issue.

The security fix for 3.2.19 is:

* [CVE-2014-3482](https://groups.google.com/d/msg/rubyonrails-security/wDxePLJGZdI/WP7EasCJTA4J)

The security fix for 4.0.7 and 4.1.3 is:

* [CVE-2014-3483](https://groups.google.com/d/msg/rubyonrails-security/wDxePLJGZdI/WP7EasCJTA4J)

The commits for 3.2.19 can be found [here](https://github.com/rails/rails/compare/v3.2.18...v3.2.19),
the commits for 4.0.7 can be found [here](https://github.com/rails/rails/compare/v4.0.6...v4.0.7),
and the commits for 4.1.3 can be found [here](https://github.com/rails/rails/compare/v4.1.2...v4.1.3).

Here are the checksums for 3.2.19:

```
$ shasum *3.2.19*
18420c276ad514b31e393a8a3e54717e66d1b671  actionmailer-3.2.19.gem
44285b467d5c89d6fcc7ccb0d75e18371373a097  actionpack-3.2.19.gem
44ee59f4024aeaac88cb558e337c67968be96531  activemodel-3.2.19.gem
88a7417694abfbb4e8e9eafd4bdcc1d09d609a76  activerecord-3.2.19.gem
32399ca83e5a4241bd14bd16c3042b1a0bd40277  activeresource-3.2.19.gem
6d392def38721f93fa9b4511d53aeaa44eb0fb47  activesupport-3.2.19.gem
486b22ec6e8ec0a20b4c3e3b4d4c0c12fc762c8d  rails-3.2.19.gem
fc104dc2bbd549e6d5cc9b40e95e321d19bb9d86  railties-3.2.19.gem
```

Here are the checksums for 4.0.7:

```
$ shasum *4.0.7*
92398e29b1b39578eb0814fce6ab5eb0b4aa4080  actionmailer-4.0.7.gem
6da21c3793a9d83a8d2c88f9718e3e0679aaf316  actionpack-4.0.7.gem
a7885a5b2a3ae24389bd4037350a49ec6a4baec7  activemodel-4.0.7.gem
126ce8ddd290458577f878152faea8b4a65b14b5  activerecord-4.0.7.gem
efbc0b6ef05b6235955c1d890b7c53ea019d2499  activesupport-4.0.7.gem
9589f7f5141ec688ed1f8e7ac8f7429b06d098ef  rails-4.0.7.gem
e4078a44393d0af71e9ecb2c69ad57654f34db8f  railties-4.0.7.gem
```

Here are the checksums for 4.1.3:

```
$ shasum *4.1.3*
23b3bdabaa0932ea0b85e36eeb7a05141a26d523  actionmailer-4.1.3.gem
16555cb09c737f7ed371f7b6bab3ecf3f0e3bfe2  actionpack-4.1.3.gem
699eabc22ac45ca264d31556892d9034c3b4da53  actionview-4.1.3.gem
5a2b351d1c570f746f6df606d5281e92758329ea  activemodel-4.1.3.gem
4db00d654d9006bb569f6c9842eb4ea3d84d4546  activerecord-4.1.3.gem
453dae978b865f6589bf61973f93ed5166cbc5fc  activesupport-4.1.3.gem
7e9d4371abb345ac2a0f2765cc514657a115540a  rails-4.1.3.gem
3999875c0d656b60a309dbfeb897310f4ee2879b  railties-4.1.3.gem
```

<3<3<3<3
