---
layout: post
title: "Minimal apps, reply_to address, rotate secrets, podman support"
categories: news
author: claudiob
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-01-31
---


Hi, it's [Claudio Baccigalupo](https://github.com/claudiob).
Let's explore this week’s changes in the Rails codebase.

[Extend --minimal option](https://github.com/rails/rails/pull/54313)  
`rails new --minimal` allows to create a basic Rails app, but recent additions to Rails were still included.
Moving forward, this option will also skip Brakeman, CI, Docker, Kamal, Rubocop, Solid trifecta, and Thruster.

[Add reply_to_address to Mail::Message](https://github.com/rails/rails/pull/53513)  
When using Action Mailer you can now specify a `reply_to:` email address in addition to the `to:` recipient.

[Load the routes in the console when calling app](https://github.com/rails/rails/pull/54380)  
Have you ever needed to see what route helpers are available inside an IRB session?
Moving forward they will be loaded in the `app` IRB helper.

```sh
$ bin/rails c
$ > app.root_path # => "/"
```

[Fix rotate(on_rotation:)](https://github.com/rails/rails/pull/54371)  
`MessageVerifier` and `MessageEncryptor` were intended to accept an `on_rotation` callback but that wasn't the case.
This PR fixes the behavior.

[Accept on_rotation argument in find_signed](https://github.com/rails/rails/pull/54373)  
Building on the previous change, `find_signed` and `find_signed!` now accept an `on_rotation` callback.
This callback is triggered whenever the `signed_id_verifier` uses rotated secret keys, making it valuable for monitoring and tracking purposes.

[Make the devcontainer script work with podman](https://github.com/rails/rails/pull/54378)  
[podman](https://podman.io/) is an alternative to Docker. 
If you have it installed, the devcontainer script will use it, otherwise it will fall back to Docker.

[Fix Active Record instrumentation to be thread safe](https://github.com/rails/rails/pull/54344)  
When using Active Record async feature, the instrumentation was not thread safe.
With the right race condition, instrumentation subscriptions would never fire up.

[Fix inverting rename_enum_value options](https://github.com/rails/rails/pull/54394)  
Did you know that you can rename an `enum` in your migrations using [rename_enum_value](https://edgeapi.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/PostgreSQLAdapter.html#method-i-rename_enum_value)?
This commit fixes a bug so the `:from` and `:to` options are parsed correctly.

[Fix routes being cleared when using reload_routes!](https://github.com/rails/rails/pull/54306)  
Calling `Rails.application.reload_routes!` will now load all the routes without resetting them if they were already loaded.


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-01-24%7D...main@%7B2025-01-31%7D)._
_We had [23 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250124-20250131) to the Rails codebase this past week!_

Until next time!
