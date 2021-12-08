---
layout: post
title: Remember CRC Cards?
categories:
- general
- tools
author: josh
published: true
date: 2006-06-14 00:14:00.000000000 +01:00
---
In 1988, Ward Cunningham (yes, _that_ Ward Cunningham) came up with an idea to use index cards as a tool for object-oriented design. I was working for Kent Beck at Apple at the time, so I got to hear Ward describe his idea over speakerphone in Kent's office. Ward and Kent presented a [paper](http://c2.com/doc/oopsla89/paper.html) on [CRC cards](http://c2.com/cgi/wiki?CrcCard) at the OOPSLA conference the next year, and suddenly they were all the rage. Some companies even printed up branded CRC cards, which still makes me laugh.

Take an index card. (3x5 or 4x6 are good sizes, but any larger than that and they become too unwieldy to move around.) Write the name of a _class_ across the top. Draw a vertical line separating the rest of the card into uneven halves - the left half should take up about 2/3 of the width. On the left side write the _responsibilities_ of the class. On the right side write the objects or classes of objects that objects of this class _collaborate_ with. That's the basics right there. Once you have cards representing several classes, you can arrange the cards to explore object interactions and discover new responsibilities and collaborations.

While CRC cards can be used solo, where they really shine are during collaborative design. It's easy for one person to move a card around to show others what they mean. Since cards move independently, two people can be writing on different cards at the same time. It makes for a lightweight yet effective group design process. It's also a decent way to describe a design.

CRC cards also play well with the Rails mindset where constraints are empowering. Cards are small, so you can't write so much on them that they become too complex to understand. Limited space keeps you focused on the important stuff. And since cards are easy to make, they are also easy to throw away - no investment equals no pain. Don't like what's on a card? Just tear it up and start over.

A good way to start with CRC cards is to use them to document an existing design. That way you don't have to deal with creating a design while learning a new tool at the same time. Then you might use them to modify or expand the design for existing software. Once you are warmed up with them you can take them for a spin on a brand new design.

My brief explanation hardly does the topic justice. Read Ward and Kent's [paper](http://c2.com/doc/oopsla89/paper.html), explore the [original wiki](http://c2.com/cgi/wiki) for [CRC card](http://c2.com/cgi/wiki?CrcCard) articles, and of course google around for yet more information.