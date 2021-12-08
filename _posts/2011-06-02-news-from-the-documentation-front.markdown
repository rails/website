---
layout: post
title: News from the Documentation Front
categories:
- documentation
author: fxn
published: true
date: 2011-06-02 20:47:00.000000000 +01:00
---
## New Configuration Guide

Rails 3.1 will come with a new comprehensive guide about configuring Rails applications written by Ryan Bigg ([@ryanbigg](https://twitter.com/ryanbigg)). The current draft is already [available in the edge guides](http://edgeguides.rubyonrails.org/configuring.html).

## Rails Documentation Team

The documentation team, which was created some three years ago and consisted of Pratik Naik ([@lifo](https://twitter.com/lifo)), Mike Gunderloy ([@MikeG1](https://twitter.com/MikeG1)), and me, played a key role at bootstrapping docrails. Together with lots of API contributors and guides authors. Kudos to Pratik and Mike, their effort was outstanding and gave a definitive push to this aspect of the project.

After all these years, documentation maintenance happens regularly in master. Because of that, we are no longer going to have a separate documentation team. The same way we do not have a separate testing team. Tests and docs are an integral part of Ruby on Rails and complete patches have or should have proper tests and docs coverage.

## Rails Guides Reviewers

Reviewing guides needs a special profile and dedication that has its own standards and pace. There's going to be a team of guides reviewers that will take care of new material. I am very glad to announce that Vijay Dev ([@vijay_dev](https://twitter.com/vijay_dev)) is going to be the first member of this team. Vijay has done an awesome work in docrails in the last months. Welcome aboard :).

## Next Steps

The Rails documentation has improved a lot in the last years, it has more content, and it has better editorial quality. But there's still a lot to do. Here are some ideas to work on:

* A new documentation generator that evaluates the source tree and introspects to generate the API, mixed with a parser to extract documentation snippets.

* Methods in the API have a link that toggles the visibility of their source code. Wouldn't it be awesome if there was a toggler that disclosed their tests?

* Test coverage for the guides.

* What about a gorgeus template design?

If you'd like to hack on any of them please go ahead!
