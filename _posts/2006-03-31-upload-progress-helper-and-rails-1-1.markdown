---
layout: post
title: Upload Progress Helper and Rails 1.1
categories:
- releases
author: michael
published: true
date: 2006-03-31 05:20:00.000000000 +01:00
---
<p>One of the casualties of the <a href="http://weblog.rubyonrails.com/articles/2006/03/28/rails-1-1-rjs-active-record-respond_to-integration-tests-and-500-other-things">1.1 release</a>  was the experimental <a href="http://sean.treadway.info/demo/upload/">upload progress helper</a>.   Unfortunately it didn&#8217;t work on all the platforms we support and it was a source of numerous bug reports.   After talking with Sean, we decided to remove it from rails&#8217; core.</p>
<p>For those of you who were using it,  the code was extracted to a <a href="http://dev.rubyonrails.org/browser/plugins/upload_progress">rails plugin</a>.   To install it just run the following command and everything will be back where you need it.</p>
./script/plugin install upload_progress