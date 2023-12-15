---
layout: world/2023/session
title: Propshaft and the Modern Asset Pipeline
redirect_from: world/agenda/day-1/9b-breno-gazzola-session
speaker: breno-gazzola.md
time: 15:45 - 16:15
location: Track 2
running_order: 17
---

Rails 7 brought with it an overhauled asset pipeline that delivered a default “no-Node” approach to front end and improved support for modern bundlers like esbuild.

This is great for developers as we are constantly searching for ways to make the development process more pleasant and to deliver better user experiences.

However, the introduction of multiple gems that seem to have overlapping features has left many of you confused about how to take advantage of everything that Rails 7 has to offer.

You want to make sure that when you create your next app, or update an existing one, you are making the correct choice and will not have to go back and redo a large part of your frontend.

I’m a contributor to some of these gems and deployed most of them to production and I can tell you it’s actually simpler than it looks. It all comes down to a single decision.

But to make that decision we have to understand what makes the new asset pipeline so different from the previous one.
