---
layout: post
title: "Active Job Continuations and more"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2025-05-30
---


Hi, [Wojtek](https://x.com/morgoth85) here. Let's see this week's news about Rails.

[Final RailsConf](https://rubyonrails.org/2025/5/29/final-railsconf)  
The last RailsConf (July 8 - 10, Philadelphia) will include a fireside chat with DHH, and talks or panel discussions with Rails team members Eileen Uchitelle (Core), Gannon McGibbon (Committers), Hartley McGuire (Issues), and Matheus Richard (Triage), as well as many more new and familiar faces. [Tickets are still available](https://railsconf.org/).

[Introduce Active Job Continuations](https://github.com/rails/rails/pull/55127)  
Allow jobs to the interrupted and resumed with Continuations.

A job can use Continuations by including the *ActiveJob::Continuable* concern. Continuations split jobs into steps. When the queuing system is shutting down jobs can be interrupted and their progress saved.

```ruby
class ProcessImportJob
  include ActiveJob::Continuable

  def perform(import_id)
    @import = Import.find(import_id)

    # block format
    step :initialize do
      @import.initialize
    end

    # step with cursor, the cursor is saved when the job is interrupted
    step :process do |step|
      @import.records.find_each(start: step.cursor) do |record|
        record.process
        step.advance! from: record.id
      end
    end

    # method format
    step :finalize

    private
      def finalize
        @import.finalize
      end
  end
end
```

[Remove unnecessary ruby-version input from GitHub Actions template](https://github.com/rails/rails/pull/55120)  
*.ruby-version* file is tried first by default by the *ruby/setup-ruby* action.

[Memoize successful reflection cache validation](https://github.com/rails/rails/pull/55115)  
Association reflections are objects that store metadata about an association.
Once an association has been defined, it is all set, the association cannot be mutated, and the reflection should not be mutated either.
This provides a performance improvement.

[rails-dom-testing v2.3.0 released](https://github.com/rails/rails-dom-testing/releases/tag/v2.3.0)  
It brings a handy new assertion `assert_not_dom` that can be used in app integration tests.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2025-05-23%7D...main@%7B2025-05-30%7D)._
_We had [10 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20250523-20250530) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
