---
layout: post
title: "Alternative text in attachments and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-09-11
---


Hi, [Wojtek](https://x.com/morgoth85) here. If you’re in Austin for Rails World, be sure to collect our newsletter stickers. See you there!

[Rails World Opening Keynote livestream](https://www.youtube.com/live/V9SxpJpHuus)  
For those who can't make it to Austin: Tune in live to watch the Rails World 2026 Opening Keynote where DHH will share what's new in Rails, what's coming up, and where Rails is headed in the future. 

Join from wherever you are in the world on Wednesday 23.09:
* 9:30 AM - Austin
* 7:30 AM - Pacific
* 10:30 AM - Eastern
* 3:30 PM - UK
* 4:30 PM - Central Europe
* 11:30 PM - Japan

[Active Support Core Extensions guide awaiting community review](https://github.com/rails/rails/pull/58670)  
Read, comment and suggest improvements if you have some free time.

[Add alternative text to Action Text attachments](https://github.com/rails/rails/pull/58337)  
Attachments now accept an *alt* attribute, exposed as *ActionText::Attachment#alt* and rendered as the image's alternative text.
It is independent of the caption, so an attachment may have either, both, or neither.
`ActionText::Attachment.from_attachable(blob, alt: "A racecar on a track")`

[Exclude generated error pages from language stats](https://github.com/rails/rails/pull/58693)  
The five error pages generated since Rails 8.0 total about 36 KB of HTML, more than the Ruby in a freshly generated application, so GitHub reported new Rails applications as HTML repositories.
Marking the pages as generated excludes them from language statistics.

[Fix docker-entrypoint check to support extra bin/rails server flags](https://github.com/rails/rails/pull/58675)  
Passing any additional flag to the server (e.g. *-b 0.0.0.0*, needed to bind to all interfaces under Docker / Podman) shifted *server* out of
position, so the check silently failed and the database was never prepared.

[Rewrite the Layouts and Rendering guide](https://github.com/rails/rails/pull/57152)  
It can be read already on the [Edge Guides](https://edgeguides.rubyonrails.org/layouts_and_rendering.html).

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-09-04%7D...main@%7B2026-09-11%7D)._  
_We had [24 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260904-20260911) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
