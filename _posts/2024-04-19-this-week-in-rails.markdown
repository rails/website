---
layout: post
title: "ActiveRecord::Base#pluck accepts hash values, devcontainers improvements and more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-04-19
---

Hey everyone, Happy Friday! I hope you get some time to unwind and relax going into the weekend 😎

[Vipul](https://www.saeloun.com/team/vipul) here with the latest updates for This Week in Rails. Let's dive in.

[Allow ActiveRecord::Base#pluck to accept hash values](https://github.com/rails/rails/pull/51565)  
This change adds support for  `ActiveRecord::Base#pluck` to accept hash values. 

```ruby
# Before
Post.joins(:comments).pluck("posts.id", "comments.id", "comments.body")

# After
Post.joins(:comments).pluck(posts: [:id], comments: [:id, :body])
```

The same applies to `.pick`, which is implemented using `.pluck`.

[Fix child association loading in :n_plus_one_only mode](https://github.com/rails/rails/pull/48785)     
Strict loading in `:n_plus_one_only` mode is designed to prevent performance issues when deeply traversing associations. 
It allows `Person.find(1).posts`, but not `Person.find(1).posts.map(&:category)`. 
This fix avoids the surprise that occurs when `person.posts.first` eagerly loads the whole association rather than allowing the user to manage the child association.

```ruby
person = Person.find(1)
person.strict_loading!(mode: :n_plus_one_only)

# Before
person.posts.first
# SELECT * FROM posts WHERE person_id = 1; -- non-deterministic order

# After
person.posts.first # this is 1+1, not N+1
# SELECT * FROM posts WHERE person_id = 1 ORDER BY id LIMIT 1;
```

[Add save_and_open_page helper to IntegrationTest](https://github.com/rails/rails/pull/49267)    
`save_and_open_page` is a capybara helper that lets developers inspect the status of the page at any given point in their tests.
This change adds `save_and_open_page` helper support to allow using them from within system tests.

[Change devcontainer.json to forward used ports for the project](https://github.com/rails/rails/pull/51588)  
Currently the generated `devcontainer.json` file does not forward the ports required for the project, so we might need to manually change it in order to access the project when running via `devcontainer`.
This PR adds the required forwarding for the project by default.

[Add node and yarn to devcontainer when creating a project with Javascript](https://github.com/rails/rails/pull/51520)  
Currently when creating a rails project with javascript (--javascript=esbuild for example) neither node or yarn are added to the devcontainer. 
This change adds both when needed.

[Fix typo in Feature Policy for idle-detection](https://github.com/rails/rails/pull/51563)  
This change fixes a small typo in feature policy [`idle-detection`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy/idle-detection) and not `idle_detection` which was leading to this policy not being applied before.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-04-13%7D...main@%7B2024-04-19%7D)._  
_We had [17 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240413-20240419) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
