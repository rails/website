---
layout: post
title: All about Rails Trac keywords
categories:
- documentation
author: josh
published: true
date: 2006-06-02 17:25:00.000000000 +01:00
---
Keywords in the Rails Trac get used in two ways. The first is a standard tagging system, where users tag tickets with whatever keywords they think describe the topic of the ticket. To give you an idea of what people use this type of tag for, here are the 25 most commonly used ones:

> postgresql, performance, ajax, test, routes, sqlserver, activerecord, mysql, rake, documentation, form, prototype, generator, fixtures, error, helper, migration, patch, scaffold, webrick, oracle, adapter, session, has_many, tested, inflector, date.

Using keywords as tags is fine, but by no means required. It may make it easier for someone to find your ticket if they encounter a similar issue, but it's not a big deal if you don't use any tags at all.

The second way keywords are used is to help manage how tickets are processed. As of this writing there are 20 standard reports in the Rails Trac, and nine of them filter tickets based on specific keywords. A couple of the reports are only used during a push towards a release. One is being used for managing documentation updates. And six are about the life-cycle and categorization of patches. Those six are the ones that are interesting to us here.

A patch is just a ticket that has .diff file attached that contains a bug-fix or enhancement of some sort. The summary line for patch tickets should always start with the text **[PATCH]**. You don't need to use a **patch** keyword - it's redundant and no one pays attention to it. There are just five keywords that are used to manage patches during regular (non-push) development:

> verified, unverified, needy, risky, tiny

Here's how to use these keywords on your patch: _Don't_. You should not use _any_ of these keywords when creating a patch ticket. They are used by the core team to indicate the processing state of a patch, and if you add the keywords yourself it can confuse matters and might make it harder for someone to sort out what to do with the patch.

As I'm sure you're curious (or you wouldn't be reading this article), here's a summary of what the keywords are used for. Verified and unverified indicate whether someone from the core team (or designated helper) has checked out the patch to see if it operates as claimed, tests pass, etc. Needy, risky, and tiny indicate the patch's potential impact to stability and if extra work might be involved in getting it working. Full explanations can be found on the [report pages](http://dev.rubyonrails.org/report) in Trac. Look at reports [3](http://dev.rubyonrails.org/report/3), [4](http://dev.rubyonrails.org/report/4), [11](http://dev.rubyonrails.org/report/11), [12](http://dev.rubyonrails.org/report/12), [16](http://dev.rubyonrails.org/report/16) and [17](http://dev.rubyonrails.org/report/17), if you really want to know.

There isn't a rigid process the core team uses to process patch submissions. The patch life-cycle reports get used sometimes, and other times people just watch the Trac RSS feed for new patches. Marcel Molina Jr says, "I use the reports but not religiously. I use them once-in-a-whilely. On the occasion when I do, though, it is appreciated and allows me to quickly process a lot of tickets." So if you want your patch to be processed quickly, it's probably best to leave off the five patch-state keywords and let the core team use them without confusion.