---
layout: post
title: Meet our Google Summer of Code students and mentors!
categories:
- activism
author: Godfrey Chan
published: true
date: 2014-05-23 18:30:00.000000000 +00:00
---
Google has announced the [list of projects] that were accepted into the [Google Summer of Code (GSoC)] 2014 program.
I'm extremely excited and proud to announce that Rails has been granted eight project slots this year.
Here's what our students will be working on this summer and the mentors that they are working with:

### Unifying controller and integration tests

[Alan Guo Xiang Tan](https://github.com/tgxworld) will be working on [unifying controller and integration tests].
This would help to improve the performance of integration tests and encourage more full-sprecturm testing.

Joining him on this effort will be Rails committers [Matthew Draper](https://github.com/matthewd)
and [Yves Senn](https://github.com/senny).

### Long-running Ruby and Rails benchmark

[Bert Chang](https://github.com/lazywei) will be creating a set of [long-running benchmarks] for Ruby and Rails.
This will help both projects continuously monitor how their commits are impacting real-world performance, which
will help discover and respond to regressions much earlier in the development cycle.

He will be mentored by [Damien Mathieu](https://github.com/dmathieu), a longtime Rails contributor.

### Form models

[Petros Markou](https://github.com/m-Peter) will be exploring different API designs to help [reduce coupling]
between the view and model layer.

[Carlos Antonio da Silva](https://github.com/carlosantoniodasilva), a member of the Rails core team, will be
assisting him along this journey.

### Improving compatibility with other Ruby implementations

[Robin Dupret](https://github.com/robin850) will be getting the Rails test suite passing on alternative Ruby
implementations, such as [JRuby] and [Rubinius]. This work will help improve the compatibility of Rails on
these platforms.

[Ben Browning](https://github.com/bbrowning) (JRuby and Rails contributor),
[Vipul A M](https://github.com/vipulnsward) (Ruby and Rails contributor) and
[Federico Builes](https://github.com/febuiles) (Rubinius and Rubyspec contributor) will be joining forces to
help Robin with his project.

### A web-console in your error page

Last year, [Genadi Samokovarov](https://github.com/gsamokovarov) developed a web-based console in his GSoC project.
This year, [Ryan Dao](https://github.com/ryandao) will continue that effort and [integrate the web-console project]
into the error page you see in development mode.

Fittingly, [Genadi](https://github.com/gsamokovarov) himself will be mentoring the project along with core team
member [Guillermo Iguaran](https://github.com/guilleiguaran).

### Refactor URL generation and recognition code

[Ujjwal Thaakar](https://github.com/ujjwalt) will be [improving Rails' internals] by refactoring parts of the routing
code that are no longer necessary thanks to `Journey`.

He will be mentored by [Andrew White](https://github.com/pixeltrix), another member of the Rails core team.

### Security upgrades

[Xuchu Zhang](https://github.com/xuchu) will be picking up the task of [improving Rails' security defaults] and other
related features. This effort would help ensure that Rails remains secure out-of-the-box. Plans include implementing
support for the latest security features in modern browsers and auto-expiring cookie jars.

[Godfrey Chan](https://github.com/chancancode), a Rails committer,
and [Rafael Mendonça França](https://github.com/rafaelfranca), a core team member, will be mentoring Xuchu for this
project.

### Randomizing the Rails test suite

Last but not least, [Zuhao Wan](https://github.com/zuhao) will be eliminating any leakage of global states in our test
suite so that it can be [run in randomized order] without errors.

Rails committer [Yves Senn](https://github.com/senny) will be assisting him on this project.


## Towards a bright future

I don't know about you, but after seeing this list of amazing projects, I am genuinely getting very excited about the
bright future for Rails. By the end of this summer, not only would we gain a few great new features, but we are also
helping to nurture some new contributors in Rails and the wider OSS community, how great is that!

Finally, we'd like to thank every single student and mentor who participated in the Google Summer of Code selection
process. There were many great proposals and we're really excited to be able to work on so many of them this year.

<3 <3 <3 <3 <3

P.S. If you enjoyed this post, you should also check out GSoC's sister project – the [Rails Girls Summer of Code]
initiative, where another <del>seven</del> (Update: [15]!) awesome teams will be working on [some equally impressive projects] in our
ecosystem. Did I mention how incredibly excited I am about this summer?

[list of projects]: http://www.google-melange.com/gsoc/projects/list/google/gsoc2014
[Google Summer of Code (GSoC)]: https://developers.google.com/open-source/soc/
[unifying controller and integration tests]: https://github.com/rails/gsoc2014/wiki/Ideas#unify-controller-and-integration-tests
[long-running benchmarks]: https://github.com/rails/gsoc2014/wiki/Ideas#long-running-ruby-and-rails-benchmarks
[reduce coupling]: https://github.com/rails/gsoc2014/wiki/Ideas#add-form-models
[JRuby]: http://jruby.org/
[Rubinius]: http://rubini.us/
[integrate the web-console project]: https://github.com/rails/gsoc2014/wiki/Ideas#improve-the-error-page-and-integrate-the-web-console
[improving Rails' internals]: https://github.com/rails/gsoc2014/wiki/Ideas#refactor-ruby-on-rails-url-generation-and-recognition
[improving Rails' security defaults]: https://github.com/rails/gsoc2014/wiki/Ideas#improve-security-defaults
[run in randomized order]: https://github.com/rails/gsoc2014/wiki/Ideas#make-the-rails-test-suite-run-in-a-random-order
[Rails Girls Summer of Code]: http://railsgirlssummerofcode.org/
[some equally impressive projects]: http://railsgirlssummerofcode.org/blog/2014-05-07-meet-the-first-seven-teams-rgsoc-2014/
[15]: http://railsgirlssummerofcode.org/blog/almost-final-team-list/
