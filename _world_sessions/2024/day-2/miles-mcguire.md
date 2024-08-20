---
layout: world/2024/session
title: Making the best of a bad situation - Lessons from one of Intercom’s most painful outages
speaker: miles-mcguire.md # name of md speaker file
time: 13:00 - 13:30
location: Track 1
running_order: 6
---
	
On 22 Feb 2024 Intercom had one of its most painful outages in recent memory. The root cause? A 32-bit foreign key referencing a 64-bit primary key.

We’ll take a look at what happened, why it happened, and what we did to ensure it didn’t happen again, including some changes you can make to your own Rails apps to help make sure you don’t make the same mistakes.
