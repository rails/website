---
layout: post
title: 'Rails 4.2.11.3 has been released'
categories: releases
author: pixeltrix
published: true
date: 2020-05-16 10:54:19 +01:00
---

Due to an unfortunate oversight, Rails 4.2.11.2 has a [missing constant error][2]. To address this Rails 4.2.11.3 has been released.

The original announcement for [CVE-2020-8163][1] has a follow-up message with an updated patch if you’re unable to use the gems.

Here are the shas:

```
$ sha256sum *-4.2.11.3.gem
229cd7da59bd26faf3e9d67a8285150e6eba6f63e077392b68d93b02a06cfd34  actionmailer-4.2.11.3.gem
67e84b5fcde0b2d885987a444646fb4d741926fd565565a336e73c5153e7a5a4  actionpack-4.2.11.3.gem
3be3f1ab60f518415da2fab994eac7d4ad869ea6b89762b7c1a9922e0756963e  actionview-4.2.11.3.gem
cab80c01aa01e0856c506c9a1fc7e492ca5e93c45ac917f9ea3671f8c77016ae  activejob-4.2.11.3.gem
97b94190b4a2c1ccfaa9727a445d2b157dac8378959c37df3b51a0aafb3967fc  activemodel-4.2.11.3.gem
cd6c8445c0b4ee3c89ec382149c0e7d44148d179092f69d8ec333be1fc4efcba  activerecord-4.2.11.3.gem
515015c5b8c7b35af33f5911c14248b06438c25fda60905965ba8d3c2237e372  activesupport-4.2.11.3.gem
7502ee83259abce924803052e34f3a9d072b01050e41e2ae94a22ddfd16d9686  rails-4.2.11.3.gem
f33ac1fc4e3dff3f35369caaf7ca21ace876637fabba9d05e512bfc06379c789  railties-4.2.11.3.gem
```

Apologies to anyone affected by this error.

[1]: https://groups.google.com/forum/#!topic/rubyonrails-security/hWuKcHyoKh0
[2]: https://github.com/rails/rails/issues/39301
