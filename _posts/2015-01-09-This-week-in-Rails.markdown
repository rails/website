---
layout: post
title: "This week in Rails: a new beginning"
categories: news
author: chancancode
published: true
date: 2015-01-09 18:00:00 -0800
---

Happy New Year, everyone!

It was only less than a year ago when I sent the [first issue][first-issue] of
[*This week in Rails*][subscribe] to a total of 14 recipients, discussing some
of the latest and greatest additions to the Rails codebase.

43 weeks later, this little hobby project has [evolved][backstory] into a true
community effort –- we have assembled an [amazing][kasper] [team][greg] of
[editors][washington] and other volunteers ([join us!][godfrey-email]), keeping
2000 subscribers in the loop and highlighting some key contributions to our
beloved web framework every week.

I am incredibly excited to announce that starting this week, we will be cross-
posting the content from the newsletter to the [Riding Rails blog][blog]. With
this, we hope to reach even more members of our wonderful community, increase
transparency, involve more of you in the decision-making processes and maybe
even inspire some future contributors!

I would like to thank my team at [Brewhouse][brewhouse] and [Goodbits][goodbits]
for supporting the project and getting it off the ground, as well as all the
volunteers who helped along the way. Of course, huge thank you to all of the
[Rails contributors][contributors] who did all the hard work! <3 <3 <3

Without further ado, here is the first 2015 issue of *This week in Rails*!

* * *

Welcome to _This week in Rails_, your weekly inside scoop of interesting commits, pull requests and more from [Rails](https://github.com/rails/rails).

Hi there this is [Washington](https://twitter.com/huoxito) again!

Hope you all had the most gorgeous holidays ever doing things you love the most. The newsletter team is back to work and you should receive your Rails weekly news as usual. Here are some of the latest and greatest improvements, fixes and releases during the break.

## Featured

### [Ruby 2.2.0 Released](https://www.ruby-lang.org/en/news/2014/12/25/ruby-2-2-0-released)

YAY! December 25th saw another important Ruby release. See the blog post for all the goodies in this new version and keep in mind Rails 5 will target Ruby 2.2+ exclusively. As of this week, Rails' master branch will only work on Ruby 2.2 or above.

### [Rails 4.0.13 and 4.1.9 have been released!](https://rubyonrails.org/2015/1/6/Rails-4-1-9-and-4-0-13-have-been-released)

4.0.13 is last planned release for the 4.0 release series, so you should migrate off it as soon as possible. From here on, the 4.1 (you can thank [Rafael](https://github.com/rafaelfranca)) and 4.2 release series will continue to receive regular bug fixes. Consult the [maintenance policy](http://guides.rubyonrails.org/maintenance_policy.html) for details.

### [This week's Rails Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/this-week)

Apparently holidays is no excuse for going to the beach all day long and having drinks away from computers. Rails community kept working hard during the break to keep improving the framework we appreciate so much. Thank you all!

## New Stuff

### [Halting callback chains by throwing :abort](https://github.com/rails/rails/pull/17227)

As of Rails 5 callback chains won't be halted by returning `false`. Instead you should explicitly `throw :abort`. This will help keep things consistent among all frameworks included in Rails and avoid accidental halting caused by unexpected `false` return values.

### [New date helper](https://github.com/rails/rails/pull/18335)

Working with days and weeks just got a bit easier. Keep in mind these new helpers `on_weekend?`, `next_weekday`, `prev_weekday`, `next_day`, `prev_day`. Perhaps you had even implemented them before yourself! Good thing Rails will have them out of the box now :)

### [`has_secure_token` in Active Record](https://github.com/rails/rails/pull/18217)

Rails will ship with a new Active Record macro for generating [base 58](https://github.com/rails/rails/pull/18347) tokens out of the box. There's probably a large amount of applications already using this feature. As of the next major release you won't need to add another dependency or implement it yourself.

## Fixed

### [More conventional filenames for mailers](https://github.com/rails/rails/pull/18074)

Mailer generators now appends the `_mailer` suffix in the filename just like controller and jobs generators.

### [Rails 5.0 deprecations clean up](https://github.com/rails/rails/pull/18325)

This week Rails got some more love with this major clean up (339 additions and 1,433 deletions) on its master branch. There's still some deprecations left though as the team figures how to best address them.

## One More Thing™

### [Automatic type casting deprecated in Arel](https://twitter.com/sgrif/status/548645759856300033)

Watch out library authors! Sean Griffin put a lot of effort into improving Arel extensibility. Please get in touch with him if you need APIs to help your use case. (See also these [follow-up](https://github.com/rails/arel/commit/6160bfbda1d1781c3b08a33ec4955f170e95be11) [commits](https://github.com/rails/rails/compare/266ff700011d...f916aa247bdd).)

## Wrapping up

That's all for _This week in Rails_. As always, there are more changes than we have room to cover here, but feel free to [check them out](https://github.com/rails/rails) yourself!

P.S. If you enjoyed this newsletter, why not [share it with your friends](http://rails-weekly.goodbits.io)? :) If you wish to be part of this project please don't hesitate to contact [Godfrey](mailto:godfrey@brewhouse.io) – there're a lot of ways you could help make this newsletter more awesome!

[first-issue]: http://us3.campaign-archive1.com/?u=2721e27ce456363785acc5405&id=d1b48a0b9d
[subscribe]: http://rails-weekly.goodbits.io
[backstory]: http://brewhouse.io/blog/2014/04/24/this-week-in-rails-the-backstory.html
[kasper]: https://twitter.com/kaspth
[greg]: https://twitter.com/gregmolnar
[washington]: https://twitter.com/huoxito
[godfrey-email]: mailto:godfrey@brewhouse.io
[blog]: https://rubyonrails.org
[brewhouse]: http://brewhouse.io
[goodbits]: http://goodbits.io
[contributors]: http://contributors.rubyonrails.org

