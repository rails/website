---
layout: post
title: "Add non-null modifier for migrations, default script folder and generator, sessions generator and much more!"
categories: news
author: vipulnsward
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-07-19
---

Hey everyone, Happy Friday! 
[Vipul](https://www.saeloun.com/team/vipul) here with the latest updates for This Week in Rails. Let's dive in.

[Add a basic sessions generator](https://github.com/rails/rails/pull/52328)  
This change adds a new sessions generator to give a basic start to an authentication system using database-tracked sessions.

```bash
# Generate with...
bin/rails generate session

# Generated files
app/models/current.rb
app/models/user.rb
app/models/session.rb
app/controllers/sessions_controller.rb
app/views/sessions/new.html.erb
db/migrate/xxxxxxx_create_users.rb
db/migrate/xxxxxxx_create_sessions.rb
```

[Add script folder and generator](https://github.com/rails/rails/pull/52335)  
This Pull Request adds a new `script` default folder to hold one-off or general purpose
scripts, such as data migration scripts, cleanup scripts, etc.

The new script generator allows us to create such scripts:

```ruby
rails generate script my_script
```

We can also specify a folder, when generating scripts:

```ruby
rails generate script cleanup/my_script
```

We can then run the generated scripts using:

```ruby
ruby script/my_script.rb
```

[Remove channels from default app/ structure](https://github.com/rails/rails/pull/52344)    
Now that Hotwire is the default in Rails, this change drops the `channels` folder from default `app/` structure. 
The folder still gets created when using the `channel` generator if needed.

[Drop default permissions policy initializer](https://github.com/rails/rails/pull/52341)  
This change drops the rarely used default `permissions_policy` configuration files. 
The configuration can be added back as needed referring to the documentation of `permissions_policy` instead.  

[Add not-null modifier to migrations](https://github.com/rails/rails/pull/52327)  
This change adds a not-null modifier to migrations, which we can now specify using a `!` after column types:

```bash
# Generating with...
bin/rails generate migration CreateUsers email_address:string!:uniq password_digest:string!

# Produces:
class CreateUsers < ActiveRecord::Migration[8.0]
  def change
    create_table :users do |t|
      t.string :email_address, null: false
      t.string :password_digest, null: false
      t.timestamps
    end
    add_index :users, :email_address, unique: true
  end
end
```

[Raise specific exception when a connection is not defined](https://github.com/rails/rails/pull/52298)  
This change makes it easier to provide programmatic access to details about requested shard/role.
The new `ConnectionNotDefined` exception provides connection name, shard and role accessors indicating the details of the connection that was requested.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-07-13%7D...main@%7B2024-07-19%7D)._  
_We had [20 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240713-20240719) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
