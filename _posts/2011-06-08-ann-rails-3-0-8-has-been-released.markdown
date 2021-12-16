---
layout: post
title: ! '[ANN] Rails 3.0.8 has been released!'
categories: []
author: aaronp
published: true
date: 2011-06-08 15:55:00.000000000 +01:00
---
# Security Issues!

This release contains fixes for possible XSS problems in your rails application.  It is unlikely that your application is vulnerable, but you should take precautions by updating your application.

For more information about the XSS issue that was fixed in this release, please [read this blog post](https://rubyonrails.org/2011/6/8/potential-xss-vulnerability-in-ruby-on-rails-applications).

## WELCOME!

Hi everyone!  I've released Rails version 3.0.8!

I know I told you I would release Rails 3.0.8 on June 2nd.  I may put many hearts in my emails, but I'm quite serious about sticking to announced deadlines.  The reason this release was delayed is due to the above security issue.  I needed to coordinate three different versions to be released simultaniously, and that delayed this release.

Sorry about that!  Barring "perfect storm" issues like this, I will keep you up to date on release dates as I know them.  :-)

## CHANGES

The big changes in this release are:

* Fixing Rake 0.9.x integration
* Fixing rubygems deprecation warnings
* Refactoring YAML support to work well with Psych and Syck
* Joins on polymorphic `has_one` associations are fixed

For an exaustive log of changes, please [see the commit list on github](https://github.com/rails/rails/compare/v3.0.7...v3.0.8), or the CHANGELOG for each project.