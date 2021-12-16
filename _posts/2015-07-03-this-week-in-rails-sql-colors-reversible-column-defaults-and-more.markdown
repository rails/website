---
layout: post
title: "This week in Rails: SQL colors, reversible column defaults and more!"
categories: news
author: kaspth
published: true
date: 2015-07-03 14:48:01 -0700
---

#### 

Hello? This is your captain [Kasper](https://twitter.com/kaspth) speaking.

We're just about ready to take to the skies for our weekly cruise through the news. I took a flight course once, and walked away from the crash in flying colors. If my instructor had made it out, I'm sure he would be proud too.

Look at us, we're already taking off - hey, is that light supposed to be blinking?

## Featured

### [This Week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/20150626-201507032100)

26 daring pilots brimmed the horizon with their commits this week. There were loops and barrel rolls galore - you should have been there! Oh, but you can. See the last item if you feel the need for speed (and contributing).

### [When SQL Output met Rainbows](https://github.com/rails/rails/pull/20607)

In Rails 5 you'll see your SQL has gotten a fresh coat of paint - several in fact. Now common SQL statements appear in color when sprouting up in your logs. Check the link for the color map.

### [`change\_column\_default` Gains Reversible Syntax](https://github.com/rails/rails/pull/20018)

Gone are the thrills of remembering past defaults, when you changed it for a column. Both `from` and `to` can be passed now: `change_column_default(:posts, :state, from: nil, to: "draft")`

If all your life's ROFLMAO'ing have left you with ass left to laugh off, you'll be ready to migrate and roll back on the floor laughing the remainder of your rear right off over this.

## Improved

### [Windows Users Needs the Latest Development Kit](https://github.com/rails/rails/pull/20734)

If you're a Windows user and witness to the horror of `rails new` failing with native gems not being able to be installed - rejoice! You need the latest [Development Kit](http://rubyinstaller.org/downloads) version, which our getting started guide will now tell you.

## Fixed

### [`where` with Association Names are Closer to 4.2](https://github.com/rails/rails/commit/6a6c4c459106e2d9b76dd1233133a2bf30866ab0)

To prevent ambiguity and potential collisions, association names in `where` are assumed to reference the table name.

### [`default\_render` Can Yield When Template is Missing](https://github.com/rails/rails/pull/20276)

When a Rails 5 controller action have no corresponding template, Rails renders `head :no_content`. Before libraries were hooking into the missing template exception being thrown. Now `default_render` takes a block and the hook is back.

## One More Thing™

### [Feel the need to contribute?](https://github.com/rails/rails/issues/created_by/dhh)

From time to time DHH opens issues on Rails about stuff he'd like implemented. As long as someone hasn't laid claim to it in the comments (or is assigned) it's yours to take a stab at.

## That's a wrap

That's all for This week in Rails. As always, there are many more changes than we have room to cover here, but feel free to [check them out yourself](https://github.com/rails/rails/compare/master@%7B2015-06-26%7D...@%7B2015-07-03%7D)!

Have you been thinking about writing for us, but you're scared of putting yourself out there? Don't worry, you can help our editors improve their writing with thoughtful critique and general grammar policing.

You up for that? Tell [Godfrey](mailto:godfreykfc@gmail.com) today.

