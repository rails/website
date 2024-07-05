---
layout: post
title: "Configurable compressor for encryption, Rack 3 streaming and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-07-05
---


Hi, [Wojtek](https://x.com/morgoth85) here. See the short list of changes from this past week.

[Add compressor option to Active Record encryption](https://github.com/rails/rails/pull/51735)  
*ActiveRecord::Encryption::Encryptor* now supports a *:compressor* option to customize the compression algorithm used.
The default compressor is *Zlib* (as it was before).

[Utilize Rack 3 streaming](https://github.com/rails/rails/pull/52094)  
Rack 3 introduced several features to enhance how streaming responses are handled, which Rails now benefits from.

[Prefer ETag header over Last-Modified for cached responses](https://github.com/rails/rails/pull/52274)  
Add *config.action_dispatch.strict_freshness* configuration.
When set to *true*, the *ETag* header takes precedence over the *Last-Modified* header when both are present, as specified by the [RFC 7232, section 6](https://www.rfc-editor.org/rfc/rfc7232#section-6).
Defaults to *false* to maintain compatibility with previous versions of Rails, but is enabled as part of Rails 8.0 defaults.

[Enhance Action View form helpers guide](https://github.com/rails/rails/pull/51936)  
With an ongoing effort to improve the Rails guides, another excellent update that can be previewed on [the edge guides page](https://edgeguides.rubyonrails.org/form_helpers.html) was made.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-06-28%7D...main@%7B2024-07-05%7D)._
_We had [17 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240628-20240705) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
