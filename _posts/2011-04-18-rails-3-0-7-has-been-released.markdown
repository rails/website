---
layout: post
title: Rails 3.0.7 has been released!
categories: []
author: aaronp
published: true
date: 2011-04-18 21:41:00.000000000 +01:00
---
Hello everyone!  I've released Rails version 3.0.7!

I want to say thanks to Santiago for handling the release candidate gems.  He's
on vacation, so I get to do the real thing.

The main change in this release is to fix a performance regression in
ActiveRecord that was introduced in version 3.0.6.

# Changes

For a web friendly view, check out the compare view
[on github](https://github.com/rails/rails/compare/v3.0.6...v3.0.7).

For those that want the TL;DR of the commits, here are the pertinant CHANGELOG
entries for each project:

## activesupport
* `Hash.from_xml` no longer loses attributes on tags containing only whitespace
  [André Arko]

## activerecord
* Destroying records via nested attributes works independent of `reject_if`
  LH #6006 [Durran Jordan]
* Delegate any? and many? to Model.scoped for consistency [Andrew White]
* Quote the ORDER BY clause in batched finds - fixes #6620 [Andrew White]
* Change exists? so records are not instantiated - fixes #6127. This prevents
  `after_find` and `after_initialize` callbacks being triggered when checking
  for record existence.
  [Andrew White]
* Fix performance bug with attribute accessors which only occurred on
  Ruby 1.8.7, and ensure we cache type-casted values when the column returned
  from the db contains non-standard chars.
  [Jon Leighton]
* Fix a performance regression introduced here
  86acbf1cc050c8fa8c74a10c735e467fb6fd7df8
  related to `read_attribute` method [Stian Grytøyr]

## actionmailer
* remove AM delegating `register_observer` and `register_interceptor` to Mail
  [Josh Kalderimis]


# Checksums

Just in case!

    $ shasum *
    6b96ed6cf0717e7e40b7ef9b39a70814d3928250  actionmailer-3.0.7.gem
    c28009b6ce47c60553027c1ddd9c9bd2aacb2c82  actionpack-3.0.7.gem
    6ee5ca84b460fff55e7dd825fc966cfbc4b36070  activemodel-3.0.7.gem
    25ff07f49129ccd405c95047b41e6717e95f9471  activerecord-3.0.7.gem
    a4adde3ad82017d8925e99733d1cd288b1474c39  activeresource-3.0.7.gem
    d1a0192fd9da869caee79be66a5915633eda291f  activesupport-3.0.7.gem
    04aa110f50d2ea9b8434526faff57ab2e249495e  rails-3.0.7.gem
    9430747274afa4fac2c37ae05a39f9cb79680e16  railties-3.0.7.gem

Have a great week everyone!

<3 <3 <3 <3 <3
