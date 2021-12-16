---
layout: post
title: "docrails, back to the roots"
category: documentation
author: fxn
published: true
date: 2013-06-14 18:10:00 +01:00
---

## A bit of history

docrails is a branch of Ruby on Rails thought for quick doc fixes that gets cross-merged with master regularly, please have a look at [_What is docrails?_](https://rubyonrails.org/2012/3/7/what-is-docrails) for more on docrails.

When Pratik Naik created docrails back in 2008, he offered commit bit to anyone interested ([this is the original announcement](https://groups.google.com/d/msg/rubyonrails-core/kvgiFB3zwhc/if29QQ1G53EJ)). Let me express my admiration for this idea. You know, in open source the commit bit is seen as the precious treasure only given to a few, and Pratik goes and puts this upside down to encourage contributions to the documentation. Genius!

And it went even further. GitHub was very kind to flip a private backend flag for docrails that enabled public write access, you didn't even have to ask for commit bit, you could clone and push without asking for permission.

The idea proved to work, trust people and you'll get trust back. Tons of people, including yours truly, have been able to contribute and improve the API and the guides with a workflow that is trivial compared to the friction of pull requests. Is about the same effort for Rails committers, patches have to be equally reviewed, but much less for contributors, which is fantastic.

## Back to the roots

GitHub had to change their infrastructure recently and they needed to get rid of that hackish flag (only used by three projects). We are very grateful to them for providing it all this time. Thanks guys!

With the flag out now we are back to the roots. docrails is now owned by the Rails organization and has thus moved from [lifo/docrails](https://github.com/lifo/docrails) to [rails/docrails](https://github.com/rails/docrails). You can either ask for commit bit if you'd like to contribute to docrails regularly (please contact anyone from the core team), or else propose documentation changes to Rails itself via pull requests to [rails/rails](https://github.com/rails/rails).

Please, do not open pull requests in docrails, documentation belongs to Rails and is maintained and evolved alongside the source code, the purpose of docrails is precisely to give you a way to bypass pull requests altogether.
