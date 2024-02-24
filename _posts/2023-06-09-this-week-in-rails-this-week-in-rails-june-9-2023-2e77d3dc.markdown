---
layout: post
title: " This Week In Rails - June 9, 2023"
categories: news
author: Emmanuel Hayford
published: true
date: 2023-06-09
---

Hi! [Emmanuel](https://twitter.com/siaw23) here writing from a train to Katowice! There have been quite a few developments in the Rails codebase over the last few weeks! Let's take a look at some of them, shall we?

[Create a class level #with\_routing helper](https://github.com/rails/rails/pull/48407)
The _with\_routing_ helper can now be called at the class level. When called at this level, the routes will be set up before each test and reset after every test. For example:


    class RoutingTest < ActionController::TestCase
          with_routing do |routes|
            routes.draw do
              resources :articles
              resources :authors
            end
          end
          def test_articles_route
            assert_routing("/articles", controller: "articles", action: "index")
          end
           def test_authors_route
            assert_routing("/authors", controller: "authors", action: "index")
          end
        end


[Allow composite primary key to be derived from schema](https://github.com/rails/rails/pull/47633)
When launching an application with a schema that incorporates composite primary keys, there will no longer be a warning issued, and the _ActiveRecord::Base#primary\_key_ value will not be set to _nil_ anymore.


For instance, consider a table named _travel\_routes_ and a corresponding _TravelRoute_ model. In this case, the _TravelRoute.primary\_key_ value will be automatically derived as _["origin", "destination"]_, as demonstrated in the following example:


    create_table :travel_routes, primary_key: [:origin, :destination], force: true do |t|
         t.string :origin
         t.string :destination
       end
       class TravelRoute < ActiveRecord::Base; end



[Store connection\_pool in database-related exceptions](https://github.com/rails/rails/pull/48295)
When exceptions are raised from an adapter, it is beneficial to include the _connection\_pool_ as it offers additional context. This context includes information about the connection that triggered the exception, as well as details regarding the role and shard involved.

[Add engine draw\_paths to app](https://github.com/rails/rails/pull/48388)
By adding the engine's draw paths to the application route set, the application gains the capability to access and utilize route files defined within engine paths.

[Improve quoted parameters in mime types](https://github.com/rails/rails/pull/48397)
The _Mime::Type_ now offers support for handling types with parameters, ensuring proper handling of quotes. During the parsing of the accept header, the parameters preceding the 'q' parameter are retained, and if a matching mime-type is found, it is utilized accordingly. To maintain the existing functionality, a fallback mechanism has been implemented to search for the media-type without the parameters.

[Support batching using composite primary keys and multiple column ordering](https://github.com/rails/rails/pull/48268)
The _find\_each_, _find\_in\_batches_, and _in\_batches_ methods now offer support for multiple column ordering. When these methods are used on a table with composite primary keys, it is possible to specify ascending or descending order for each individual key. Example:


    Person.find_each(order: [:desc, :asc]) do |person|
          person.party_all_night!
        end


That's it for today. In the past seven days, we had the privilege of witnessing the [contributions of 30](https://contributors.rubyonrails.org/contributors/in-time-window/20230602-20230609) amazing individuals to the Rails framework!

Talk to you in the next one!

Your weekly inside scoop of interesting commits, pull requests and more from [**Rails**](https://github.com/rails/rails).

<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
