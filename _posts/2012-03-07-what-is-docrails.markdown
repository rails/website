---
layout: post
title: What is docrails?
categories: []
author: fxn
published: true
date: 2012-03-07 19:22:00.000000000 +00:00
---
Over the years I have seen some confusion about what is exactly
[docrails](https://github.com/lifo/docrails)
and how it relates to the documentation of Ruby on Rails.

This post explains everything you want to know about this aspect of the project.

## What is docrails?

[docrails](https://github.com/lifo/docrails) is a branch of Ruby on Rails with
_public write access_ where anyone can push _doc fixes_.

If you see a typo, you'd like to correct a factual error, complement some
existing documentation, add a useful example... before docrails existed you had
to open a pull request (or the equivalent in those days) and follow the ordinary
workflow to get it accepted. docrails allows you to clone the repo, edit, and
push. Done!

## ZOMG, that's awesome! Tell me more!

Changes to the code base need review before they are pushed. Each individual new
feature or bug fix needs the perspective and responsability of core team
members to take a decision about it.

Documentation fixes, though, are much more likely to be fine as they are. So,
docrails has a public write policy to ease the workflow for _contributors_.

All commits have to be reviewed anyway, so docrails needs the same effort from
Rails committers than going through pull requests, please everyone give big
props to [Vijay Dev](https://twitter.com/#!/vijay_dev) who is nowadays in charge
of this time consuming task.

The point of docrails is to provide a way to contribute to the Rails documentation
that is fast and easy for contributors.

## But wait, I am editing some separate thing?

docrails is a separate branch because it has a different access policy, but
_you are editing the actual Ruby on Rails documentation_.

Every few days, once all new commits are reviewed docrails is merged into
master, and master is merged into docrails. Also, very important edits may be
cherry-picked into stable branches at the discrection of who merges.

## What is allowed in docrails?

You can freely push changes to any RDoc, guides, and READMEs.

No code can be touched at all. That's a hard rule. No matter how insignificant,
not even a one character typo in a string literal.

CHANGELOGs cannot be edited either.

## Is docrails a documentation project?

No, Ruby on Rails has no documentation project. Treating documentation as a
separate aspect of the project would be similar to treating testing as an
external part of the project.

Documentation is an integral part of the development of Ruby on Rails.
Contributing a feature or bug fix means contributing its code, test coverage,
and documentation.

## I am preparing a pull request, should I document later via docrails?

No, docrails is meant only for quick doc fixes.

Pull requests should be complete: code, tests, and docs. If a pull request lacks
any of those in general it won't be accepted as is.

Also, updating docs does not only mean that you edit the RDoc next to the code
you are touching. Often the change needs grepping the project tree to find
instances of what the pull request is about, to update examples, revise
explanations affected by your change, or writing new documentation.

Tidbit: run `ack -a` to have guides included in the search.

## I made a doc fix, when is it going to be online?

Rails releases are a complete set. The documentation itself is part of the
release. The fix is going to be online in the [stable API](http://api.rubyonrails.org) or
[guides](http://guides.rubyonrails.org) websites when
the branch that contains the fix gets released.

Edits merged into master are always online in the [edge API](http://edgeapi.rubyonrails.org)
and [edge guides](http://edgeguides.rubyonrails.org),
which are regenerated after every push to master. Thus, edits done via docrails
are online in the edge docs website after the next docrails/master cross-merge.

## Can I open pull requests for documentation fixes in Ruby on Rails?

Absolutely. Specially if you are unsure about the fix. But if you feel confident
just push to docrails.

Please do not open pull requests in docrails.

Note that docrails has no issues tab. The reason is docrails is not a project,
as explained above, only a way to bypass pull requests. Documentation issues are
Ruby on Rails issues and belong to the Ruby on Rails project just as any other
kind of issue.

## Does Ruby on Rails has documenters?

No, documentation comes with each push to master. Everyone documents Rails.

The only exception is guide authors. Guide authors take the task to write an
entire new guide about a certain topic, and they are allowed to push early
drafts to docrails for convenience (only guides in the public index are
considered to be published).

That's for new guides. Once published, guides maintenance happens in master as
everything else.