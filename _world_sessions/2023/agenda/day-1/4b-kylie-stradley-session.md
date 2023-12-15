---
layout: world/2023/session
title: Everything We Learned While Implementing ActiveRecord::Encryption
redirect_from: world/agenda/day-1/4b-kylie-stradley-session
speaker: kylie-stradley.md
time: 11:45 - 12:15
location: Track 2
running_order: 6
---

GitHub encrypts your data at rest, as well as specific sensitive database columns. What you may not know is we recently replaced our in-house db column encryption strategy with ActiveRecord::Encryption, in place. While we were able to complete this transition seamlessly for GitHub’s developers, the process was not quite seamless for our team and some of our customers.

Learn why despite making all these mistakes we feel the migration was worth it to our team, GitHub developers and most importantly, GitHub customers.
