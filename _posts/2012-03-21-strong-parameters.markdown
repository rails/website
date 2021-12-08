---
layout: post
title: "Strong parameters: Dealing with mass assignment in the controller instead of the model"
categories: []
author: dhh
published: true
date: 2012-03-21 22:00:00.000000000 +00:00
---
We're exploring a new way to deal with mass-assignment protection in Rails. Or actually, it's not really a new way, it's more of an extraction of established practice with some vinegar mixed in for when you forget. This new approach is going to be a part of Rails 4.0 by default, but we'd like your help in testing and forming it well in advance of that release.

### Strong parameters

This new approach is an extraction of the [slice pattern][1] and we're calling the plugin for it [strong_parameters][2] (already available [as a gem][3] as well). The basic idea is to move mass-assignment protection out of the model and into the controller where it belongs. 

The whole point of the controller is to control the flow between user and application, including authentication, authorization, and as part of that access control. We should never have put mass-assignment protection into the model, and many people stopped doing so long ago with a move to the slice pattern or a variation there of. It's time to extract that pattern and bring it to the people.

### Example

    class PeopleController < ActionController::Base
      # This will raise an ActiveModel::ForbiddenAttributes exception because it's using mass assignment
      # without an explicit permit step.
      def create
        Person.create(params[:person])
      end
  
      # This will pass with flying colors as long as there's a person key in the parameters, otherwise
      # it'll raise a ActionController::MissingParameter exception, which will get caught by 
      # ActionController::Base and turned into that 400 Bad Request reply.
      def update
        redirect_to current_account.people.find(params[:id]).tap do |person|
          person.update_attributes!(person_params)
        end
      end
  
      private
        # Using a private method to encapsulate the permissible parameters is just a good pattern
        # since you'll be able to reuse the same permit list between create and update. Also, you
        # can specialize this method with per-user checking of permissible attributes.
        def person_params
          params.required(:person).permit(:name, :age)
        end
    end

We're still fiddling with the API, but it's good enough to use now and I've replaced our own slice pattern in the new Basecamp with the strong parameters' approach of permit.

### More work to be done

We're still working on a tidy way to deal with nested parameters, but there's a design ready for implementation, so it shouldn't be far off. In addition, Yehuda is going to work on form signing that'll alleviate the need to manually declare the permitted parameters in the standard HTML form case (you'll still need to use manually permit parameters for APIs and other clients).

But this is good enough to be useful now. The plugin is currently only fully compatible with rails/3-2-stable rev [275ee0dc7b][4] and forward as well as rails/master rev [b49a7ddce1][5] and forward because of a testing issue with wrapped parameters (if you're not using wrapped parameters for your json API, you can use the plugin with any version of Rails 3.2).

[1]: https://gist.github.com/1975644
[2]: https://github.com/rails/strong_parameters
[3]: http://rubygems.org/gems/strong_parameters
[4]: https://github.com/rails/rails/commit/275ee0dc7b
[5]: https://github.com/rails/rails/commit/b49a7ddce1
