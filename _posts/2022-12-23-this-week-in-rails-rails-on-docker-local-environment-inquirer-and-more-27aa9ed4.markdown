---
layout: post
title: "Rails on Docker, local? environment inquirer and more! "
categories: news
author: gregmolnar
published: true
date: 2022-12-23
---

Hi there, this is [Greg](https://greg.molnar.io), bringing you the latest changes in Rails!

 [Only include all\_queries default scopes on reload](https://github.com/rails/rails/pull/46742)
This pull request changes the current behaviour on reload, which applies all the default scopes, if any are marked as _all\_queries: true_. The correct behaviour is to only apply _all\_queries: true_ default scopes on reload.

[Allow assets:precompile to be run in a production build step without passing in RAILS\_MASTER\_KEY
](https://github.com/rails/rails/pull/46760)When compiling assets in production as part of an image build step, it's inconvenient to have to pass in the real _RAILS\_MASTER\_KEY_. So allow passing in a dummy secret\_key\_base, just like we do in development and test, via _ENV["SECRET\_KEY\_BASE\_DUMMY"] = 1_. This will not give access to any of the real credentials or message verifiers, but allow the build step to complete, since it typically does not need it anyway.

[Avoid unnecessary replacements in action text when the replacement node is unchanged](https://github.com/rails/rails/pull/46751)
This is a performance improvement for the case where the replacement logic is based on some condition, and it returns the same unchanged node. And example and a benchmark can be found on the pull request.

[Docked Rails CLI](https://github.com/rails/docked)
Setting up Rails for the first time with all the dependencies necessary can be daunting for beginners. Docked Rails CLI uses a Docker image to make it much easier, requiring only Docker to be installed.&nbsp;


[Add default Dockerfiles](https://github.com/rails/rails/pull/46762)
This pull request adds Docker files by default to new apps: _Dockerfile_, _.dockerignore_, _bin/docker-entrypoint_. These files can be skipped with _--skip-docker_. They're intended as a starting point for a production deploy of the application. Not intended for development (use the above mentioned Docked Rails for that). You can see more details about using it on the pull request.

[Add Message{Encryptors,Verifiers}#transitional](https://github.com/rails/rails/pull/46755)

This commit adds a _transitional_ attribute to _ActiveSupport::MessageEncryptors_ and _ActiveSupport::MessageVerifiers_. Setting it to true will swap the first two rotations when building a message encryptor/verifier.&nbsp;

This can be useful when performing a rolling deploy of an application, wherein servers that have not yet been updated must still be able to verify messages from updated servers.&nbsp;


[Add Rails.env.local?](https://github.com/rails/rails/pull/46786)
This pull requests adds a shorthand for _Rails.env.development? || Rails.env.test?._

[Add support for pattern argument to _ActiveRecord::Relation#none?/#any?/#one?_](https://github.com/rails/rails/pull/46728)
The Enumerable versions of the [#none?](https://ruby-doc.org/core-2.7.0/Enumerable.html#method-i-none-3F), [#any?](https://ruby-doc.org/core-2.7.0/Enumerable.html#method-i-any-3F), and [#one?](https://ruby-doc.org/core-2.7.0/Enumerable.html#method-i-one-3F) predicate methods each take an optional pattern argument instead of a block, but the _ActiveRecord::Relation_ versions didn't before this change.

[23 people](https://contributors.rubyonrails.org/contributors/in-time-window/20221216-202201223) contributed to Rails this past week! Merry Christmas and see you next week with our yearly special



<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
