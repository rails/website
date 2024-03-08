---
layout: post
title: "Illustrator file preview, deprecations and more!"
categories: news
author: Greg
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-03-08
---


Hi, it's [Greg](https://greg.molnar.io). Let's explore this week's changes in the Rails codebase.

[Feedback for structuring the Active Record Query Guide](https://github.com/rails/rails/issues/51262)   
The Active Record Querying Guide is getting restructured and the team working on it requests feedback from the community.

[Rails World CFP closes in 2 weeks](https://sessionize.com/rails-world)   
2 more weeks left to submit your talk to Rails World 2024!

[Railties: configure sanitizer vendor in 7.1 defaults more robustly](https://github.com/rails/rails/pull/51267)  
In apps where rails-html-sanitizer was not eagerly loaded, the sanitizer default could end up being `Rails::HTML4::Sanitizer` when it should be set to `Rails::HTML5::Sanitizer`. This change `require`s rails-html-sanitizer immediately before it's needed, and avoids the possibly-incorrect assumption that `Rails::HTML::Sanitizer` is already defined.

[Illustrator .ai files are previewable as PDFs](https://github.com/rails/rails/p_posts/2024-03-08-this-week-in-rails.markdownull/51235)   
This happened to work with Marcel 1.0.2 and earlier since magic byte sniffing sees that Illustrator files are PDFs internally, causing these files to be treated as `application/pdf` despite having a declared content type of `application/illustrator` and an `.ai` file extension. Marcel 1.0.3 corrected this to the more specific `application/illustrator` subtype of `application/pdf`, but the MuPDF previewer only accepts the parent `application/pdf` type.
This pull request changes it to accept PDF and any child types allows the previewer to explicitly work with Illustrator files again, which was only a happy accident previously.
Another pull request made [illustrator files previewable with Poppler as well](https://github.com/rails/rails/pull/51236)

[Deprecate _ActiveRecord::Base.connection_ and _ConnectionPool#connection_](https://github.com/rails/rails/pull/51230)   
This pull request deprecates `ActiveRecord::Base.connection` and `ActiveRecord::ConnectionAdapters::ConnectionPool#connection` in favor of `.lease_connection`. The method has been renamed as `lease_connection` to better reflect that the returned connection will be held for the duration of the request or job. `ActiveRecord::Base.connection`'s deprecation is a soft deprecation, no warnings will be issued and there is no current plan to remove the method.

[Add _dirties_ option to _Model.uncached_](https://github.com/rails/rails/pull/51204)  
This pull request adds a `dirties` option to `ActiveRecord::Base.uncached` and `ActiveRecord::ConnectionAdapters::ConnectionPool#uncached`. When set to `true` (the default), writes will clear all query caches belonging to the current thread. When set to `false`, writes to the affected connection pool will not clear any query cache.
This is needed by Solid Cache so that cache writes do not clear query caches.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-03-01%7D...main@%7B2024-03-08%7D)._
_We had [16 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240301-20240308) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
