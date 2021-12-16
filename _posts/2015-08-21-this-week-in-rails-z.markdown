---
layout: post
title: "🚂 This week in Rails 🚂: Learn How These 37 Rails Contributors Improved The Entire Framework In Just One Week"
categories: news
author: chancancode
published: true
date: 2015-08-21 16:18:10 -0700
---

Good News Everyone, _This Week In Rails_ has been acquired by BuzzFeed!

Just kidding. This is [Godfrey](https://twitter.com/chancancode) here. It's been a while since I get to write one of these myself and I'm very happy to be back. Without further ado, let's dive right into it!

## ✨ Featured ✨

### [❤️ Code of Conduct](https://rubyonrails.org/conduct)

The Rails team is committed to fostering a welcoming community for everyone. With [the help of our community](https://github.com/rails/rails/pull/21292), we have added an official Code of Conduct for the project this week.

### [😱 37 Programmers Contributed To Rails And You Won't Believe What Happened Next](http://contributors.rubyonrails.org/contributors/in-time-window/20150815-201508212000)

Well, their pull requests were merged and they are immortalized on the Rails Contributors website. And oh, everyone please send a warm welcome to the 10 first-time contributors this week!

## 📦 Releases 📦

### [📢 Sprockets Has Hit Version 3.3.3, What Does That Really Mean For The Rest Of Us?](https://github.com/rails/sprockets/releases/tag/v3.3.3)

According to [@schneems](https://twitter.com/schneems/status/634838940747300864) who is responsible for the release, this is supposed to fix an issue for those of you "who share a cache in different directories between deploys", which includes Heroku deployments.

## 💎 New Stuff 💎

### [💾 MySQL Finally Gets A Native JSON Data Type – But Is It Too Late To Save California?](https://github.com/rails/rails/pull/21110)

MySQL has recently added a native JSON data type (perhaps inspired by its more popular cousin, PostgreSQL). Thanks to this patch, you will be ready to take advantage of that feature in Rails 5.

## 👌 Fixed 👌

### [🎂 The One Weird Trick That Lets You Write To Files Atomically](https://github.com/rails/rails/pull/16245)

Concurrency is hard, but Rails might have finally cracked the nut. You might not know that Active Support offers a way to write to a file atomically with `File.atomic_write`.

Even if you have heard about it, you probably didn't realize there is a subtle race condition in its implementation. Anyway, with this patch landing on master, those bugs will soon be behind us and we can all just sit back and enjoy the convenience it provides.

## 👍 Improved 👍

### [🚨 Nobody Likes To Do Repeated Work – Here Is A Cache They Won't Tell You About](https://github.com/rails/rails/commit/ec9c6d5846a4048c131aae70c2d338d8a3896086)

It turns out that things do not run twice as fast when you double-cache them. Who would have thought? (I wish we all wrote great commit messages like this by the way!)

### [✂️ Testing Is Important, But Has Rails Gone Too Far?](https://github.com/rails/rails/pull/21106)

Along those same lines, it turns out that testing the same thing twice doesn't provide much value either.

## 🙈 Wrapping Up 🙈

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-08-15%7D...@%7B2015-08-21%7D)!

Have you been thinking about writing for us, but you're scared of putting yourself out there? Don't worry, you can help our editors improve their writing with thoughtful critique and general grammar policing.

You up for that? Tell [Godfrey](mailto:godfreykfc@gmail.com) today.

