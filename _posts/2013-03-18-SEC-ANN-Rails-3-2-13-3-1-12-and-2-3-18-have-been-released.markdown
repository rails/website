---
layout: post
title: '[SEC] [ANN] Rails 3.2.13, 3.1.12, and 2.3.18 have been released!'
category: releases
author: tenderlove
published: true
---
Hi everyone!

Rails versions 3.2.13, 3.1.12, and 2.3.18 have been released.  These releases contain important security fixes.  It is recommended users upgrade as soon as possible.

Please check out these links for the security fixes:

* [CVE-2013-1854 Symbol DoS vulnerability in Active Record](https://groups.google.com/forum/#!topic/ruby-security-ann/o0Dsdk2WrQ0)
* [CVE-2013-1855 XSS vulnerability in sanitize_css in Action Pack](https://groups.google.com/forum/?fromgroups=#!topic/rubyonrails-security/4_QHo4BqnN8)
* [CVE-2013-1856 XML Parsing Vulnerability affecting JRuby users](https://groups.google.com/forum/?fromgroups=#!topic/rubyonrails-security/KZwsQbYsOiI)
* [CVE-2013-1857 XSS Vulnerability in the `sanitize` helper of Ruby on Rails](https://groups.google.com/forum/?fromgroups=#!topic/rubyonrails-security/zAAU7vGTPvI)

All versions of Rails are impacted by one or more of these security issues, but per our [maintenance policy](https://groups.google.com/forum/?fromgroups=#!topic/rubyonrails-security/G4TTUDDYbNA), only versions 3.2.13, 3.1.12, and 2.3.18 have been released.  You can find patches for older versions on each stable branch on GitHub:

* [Rails 3-0-stable](https://github.com/rails/rails/tree/3-0-stable)

as well as with the security advisories.

For other changes in each particular release, please see the CHANGELOG corresponding to that version.  For all commits in each release, please follow the links below:

* [Changes in 3.2.13](https://github.com/rails/rails/compare/v3.2.12...v3.2.13)
* [Changes in 3.1.12](https://github.com/rails/rails/compare/v3.1.11...v3.1.12)
* [Changes in 2.3.18](https://github.com/rails/rails/compare/v2.3.17...v2.3.18)

Here are the checksums for the released gems:

### 3.2.13

```
[aaron@higgins dist]$ shasum *3.2.13.gem
72b14536f1717121e8b2a5aa5a06c6194e02c87c  actionmailer-3.2.13.gem
a21166f7c364ff7825bf83f9757c33cc44fa0c00  actionpack-3.2.13.gem
9fa309dee3f87a53764db3aaefe3bbf6f9724ad2  activemodel-3.2.13.gem
469f6b4456d7fa1bf0336d488ad5878a6842e2da  activerecord-3.2.13.gem
0c89382354ffc5b4438ed37434b50d7cbc71d569  activeresource-3.2.13.gem
cdf230b698b28ae1cffb325ecbb9e219645ed68b  activesupport-3.2.13.gem
3785dc8d2af1521baddf2d90b67a9b61b2b31604  rails-3.2.13.gem
ff0607812bead596492272e4a4306ae3e950bdf4  railties-3.2.13.gem
```

### 3.1.12

```
[aaron@higgins dist]$ shasum *3.1.12.gem
b3f0ecee33032416170263508ccfb33d5dd65eef  actionmailer-3.1.12.gem
426fcf3f5d4e29ae6bf21f536a97d90d02bf73bb  actionpack-3.1.12.gem
2b01ba8bd85d67ded372f3908b694c1fa1ccb041  activemodel-3.1.12.gem
a3afc58fe3f7448ba09cdacb2046c9e10e474cb4  activerecord-3.1.12.gem
d3402193c0820f016b492162547194f942c96c1a  activeresource-3.1.12.gem
e25ed2f7e055d38b1bed482faf8b563a6b7e3899  activesupport-3.1.12.gem
75c2f85ed1e09d2bd1baa3efab5f097cdaef2a6b  rails-3.1.12.gem
618c5beb85124fbedfe41a72424079700f7a1d2c  railties-3.1.12.gem
```

### 2.3.18

```
[aaron@higgins dist]$ shasum *2.3.18.gem
09e361c4c96104303abad5faa4aec72ebe7c19d1  actionmailer-2.3.18.gem
deca0d8352858f734479b54162269e334faada21  actionpack-2.3.18.gem
e385b4b2e863592f9f06ca3248a67a18ea8c7e6c  activerecord-2.3.18.gem
ff4fb4a62c4d4007a6c596edf8f7055147948e60  activeresource-2.3.18.gem
1b9102fa31a47cf66b0c2583c99b707544d42054  activesupport-2.3.18.gem
f4aff07dce1db10ad6145e358344671cc482de70  rails-2.3.18.gem
```

Happy Monday!

<3<3<3
