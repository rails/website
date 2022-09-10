---
layout: post
title: "Rack 3 and Rails 7.0.4, 6.1.7, and 6.0.6 releases, ActionDispatch::Cookies, etc"
categories: news
author: CHANGELOG.md
published: true
date: 2022-09-10
---

👋🏾... This is [Emmanuel](https://manny.codes/). I've got some Rails updates for you.  
  
[Rack 3.0 has shipped](https://github.com/rack/rack/blob/3.0.0/CHANGELOG.md)  
A major version of Rack has shipped, and as expected, there are breaking changes but with lots of improvements and an [upgrade guide](https://github.com/rack/rack/blob/main/UPGRADE-GUIDE.md). There's also a [changelog](https://github.com/rack/rack/blob/main/CHANGELOG.md) of the beta versions and release candidates leading up to the release.  
   
[Rails 7.0.4, 6.1.7, and 6.0.6 have been released  
](https://rubyonrails.org/2022/9/9/Rails-7-0-4-6-1-7-6-0-6-have-been-released)These are mostly bugfixes with various enhancements, compatibility fixes, and performance improvements.  
  
[Fix bug in connection handler methods using all pools](https://github.com/rails/rails/pull/45924)  
_active\_connections?_, _clear\_active\_connections!_, _clear\_reloadable\_connections!_, _clear\_all\_connections!_, and _flush\_idle\_connections!_ now operate on all pools by default. Previously they would default to using the _current\_role_ or _:writing_ role unless specified.  
  
[Add :locals to ActionView rendering instrumentation](https://github.com/rails/rails/pull/45977)  
Action View render instrumentation now reports _:locals_. _ActiveSupport::Notifications_ will now capture _:locals_ in addition to _:identifier_ and _:layout._  
  
[Add ability to run only before/around/after callbacks in run\_callbacks  
](https://github.com/rails/rails/pull/45952)This PR makes it possible to use _run\_callbacks_ without the need to run all callbacks. You can now choose specific callbacks to run.  
  
[ActionDispatch::Cookies JSON deserializer discards Marshal dumps](https://github.com/rails/rails/pull/45956)  
If an application reads a Marshall dump, _JSON::ParserError_ is raised without clearing cookies when the cookies serializer is set to JSON. This PR fixes that.  
  
[35 people](https://contributors.rubyonrails.org/contributors/in-time-window/20220902-20220910) contributed to Rails in the last 8 days.  
  
That's it. Допобачення!

