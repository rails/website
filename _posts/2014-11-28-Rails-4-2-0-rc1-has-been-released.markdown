---
layout: post
title: '[ANN] Rails 4.2.0.rc1 has been released!'
category: releases
author: chancancode
published: true
date: 2014-11-28 10:00:00 -08:00
---

Happy Black Friday everyone!

The Rails team is very excited to announce that [the first Release Candidate of Rails 4.2.0][gem]
has been released today. For an overview of all the major changes, please refer
to the [release notes][release-notes].

We would like to thank everyone who have assisted our team in testing the beta
and smoothing out all the rough edges. During the beta period, we have logged
[over 1500 commits by over 60 contributors][commits] and [over 100 tickets and pull requests][tickets]
on GitHub.

In particular, thanks to contributors who have assisted in testing the release
in their Real World™ applications, we have identified and addressed a number of
performance issues since the last beta release.

With the release candidate out the door, we are now much closer to the final
release of 4.2.0. Please consider testing this release with your applications if
you haven't already – you can read the [upgrade guide][upgrade-guide] for
detailed instructions. If you found any problems while upgrading, please report
them to our [issue tracker][tracker] and/or notify the authors of the relevant
gems and plugins.

Thank you all again, this release would not be possible without your help!

## One More Thing™

The release of the first RC for the 4.2.0 series also marks the [beginning of Rails 5 development][beginning].
The [4-2-stable][4-2-stable] branch has been created today and all changes on
the master branch will be targeted for Rails 5.0 and backported according to our
[maintenance policy][maintenance-policy]. Read more about the [grand plans for Rails 5][rails-5]!

[gem]: http://rubygems.org/gems/rails/versions/4.2.0.rc1
[commits]: https://github.com/rails/rails/compare/v4.2.0.beta1...v4.2.0.rc1
[tickets]: https://github.com/rails/rails/issues?q=milestone%3A4.2.0
[tracker]: https://github.com/rails/rails/issues
[release-notes]: http://edgeguides.rubyonrails.org/4_2_release_notes.html
[upgrade-guide]: http://edgeguides.rubyonrails.org/upgrading_ruby_on_rails.html
[beginning]: https://github.com/rails/rails/commit/f25ad07f5ade46eb978fa82658463232d0247c65
[4-2-stable]: https://github.com/rails/rails/tree/4-2-stable
[maintenance-policy]: http://edgeguides.rubyonrails.org/maintenance_policy.html
[rails-5]: https://rubyonrails.org/2014/8/20/Rails-4-2-beta1/#maintenance-consequences-and-rails-5-0