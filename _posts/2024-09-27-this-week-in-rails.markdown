---
layout: post
title: "Rails 8 beta, DHH keynote, fresh error pages, and more!"
categories: news
author: zzak
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-09-27
---


Hi, it's [zzak](https://github.com/zzak). Let's jump into This Week in Rails!

[Rails 8.0 beta 1 has been released!](https://github.com/rails/rails/releases/tag/v8.0.0.beta1)  
The first beta of Rails 8 is out! While the release notes are getting ready, have a look at the changes and give it a go.

[DHH keynote from Rails World](https://www.youtube.com/watch?v=-cEn_83zRFw)  
The first talk recording from Rails World is up, and David goes over everything that went into Rails 8 and beyond.

[Tidy up the error pages](https://github.com/rails/rails/pull/53045)  
The error pages built into Rails have been updated, here's a preview of the new look:
<img width="1512" alt="Screenshot 2024-09-26 at 10 46 56 AM" src="https://github.com/user-attachments/assets/225dbc1f-309e-4f31-9da7-106f7d312424">

[Drop support to Ruby 3.1](https://github.com/rails/rails/pull/53041)  
Rails 8 will require Ruby 3.2.0 or newer.

[Add TaggedLogging#logger constructor for more pleasant logging interface](https://github.com/rails/rails/pull/52994)  
This updates the default logger in production to use `ActiveSupport::TaggedLogging.logger(STDOUT)`.

[Make Active Model Serialization "read_attribute_for_serialization" public](https://github.com/rails/rails/pull/53042)  
Since this method was already mentioned in the public documentation, the team decided it's worth making it public and document the behavior.

[Set error code to 1 if generator could not be found](https://github.com/rails/rails/pull/53028)  
This change updates the exit code when running `bin/rails generate` with an invalid generator.

```bash
# Before
bin/rails generate does_not_exist
echo $?
0

# After
bin/rails generate does_not_exist
echo $?
1
```

[Update generated application.css with Propshaft](https://github.com/rails/rails/pull/53021)  
Now that Propshaft is the only asset pipeline, we no longer need these `= require` directives in the generated application.css file.

[Revert inferring inverse_of for Delegated types](https://github.com/rails/rails/pull/53016)  
Automatically inferring `:inverse_of` is incompatible with records that do not declare inverse associations.  
The team decided to revert this change to unblock the release of Rails 8.



_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-09-20%7D...main@%7B2024-09-27%7D)._
_We had [27 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240920-20240927) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
