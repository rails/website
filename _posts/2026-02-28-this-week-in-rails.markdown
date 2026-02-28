---
layout: post
title: "Action Text gets Markdown conversion, editor links in devcontainers, and more!"
categories: news
author: Emmanuel Hayford
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-02-28
---


Hey there, it's [Emmanuel Hayford](https://hayford.dev/). A fresh batch of Rails changes just dropped, let's get into it.

[Action Text `to_markdown` generates markdown links for blobs](https://github.com/rails/rails/pull/56894)  
When a rendering context is available, blob attachments now produce real markdown links (`![title](url)` for images, `[title](url)` for others) instead of plain-text placeholders.

[Add `to_markdown` to Action Text, mirroring `to_plain_text`](https://github.com/rails/rails/pull/56858)  
Introduces `to_markdown` across the Action Text stack (`Content`, `Fragment`, `RichText`, `Attachment`), converting rich text HTML into Markdown with support for inline formatting, block elements, lists, links, tables, and more. The underlying `BottomUpReducer` has been extracted into its own class for reuse by both plain-text and markdown conversion.

[Render MissingAttachable as "☒" in plain text](https://github.com/rails/rails/pull/56854)  
`MissingAttachable` now implements `attachable_plain_text_representation`, returning the same "☒" character used in its HTML partial instead of rendering nothing.

[Add `RAILS_HOST_APP_PATH` support for editor links in devcontainer/Docker environments](https://github.com/rails/rails/pull/56263)  
A new `RAILS_HOST_APP_PATH` environment variable lets Rails translate container file paths to host paths when generating editor URLs on error pages. This makes "open in editor" links work correctly in devcontainer and Docker setups.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-02-21%7D...main@%7B2026-02-28%7D)._
_We had [14 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260221-20260228) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
