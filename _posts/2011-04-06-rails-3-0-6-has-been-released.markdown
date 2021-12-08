---
layout: post
title: Rails 3.0.6 has been released!
categories: []
author: aaronp
published: true
date: 2011-04-06 00:30:00.000000000 +01:00
---
Hi everybody!  Rails 3.0.6 has been released!

Let's get the serious business out of the way first:

## Rails 3.0.6 contains an important security fix!  Please upgrade!

Rails versions 3.0.x prior to 3.0.6 contain an XSS vulnerability.  The
vulnerability manifests itself via the `auto_link` method.  The `auto_link`
method will automatically mark input strings as "html safe" even if the input
is from an unknown origin.

For example:

    <%= auto_link(params[:content]) %>

If the "content" parameter contains malicious javascript, that script will be
rendered without being escaped.

## How can I protect myself?

* Upgrade to Rails 3.0.6, then content passed to `auto_link` will be
  automatically escaped for you.

* If you cannot upgrade Rails, then apply the patch found [here](https://github.com/rails/rails/commit/61ee3449674c591747db95f9b3472c5c3bd9e84d).
  Then `auto_link` content will be escaped for you.

* If you cannot upgrade Rails, or apply the patch, then change your calls to
  `auto_link` to call sanitize like so:

     <%= sanitize(auto_link(params[:content])) %>

  If you trust the input, then change to this

     <%= raw(auto_link(params[:content])) %>

## Credits

Thanks go to Torben Schulz for reporting this issue!

## SERIOUS BUSINESS COMPLETE ##

After two release candidates, we we we so excited to announce the release of
Rails version 3.0.6!  I want to thank everyone that tried out the release
candidates and reported their feedback!  I hope that we can continue soliciting
feedback from the public before releasing final versions.

## LOL CHANGES!!!!

For changes in a particular package, please view the CHANGELOG in each
particular project on [github](https://github.com/rails/rails/tree/3-0-6).  Even better, you can check the
[compare view](https://github.com/rails/rails/compare/v3.0.5...v3.0.6).

Changes of note are:

* The above security fix in ActionPack
  61ee3449674c591747db95f9b3472c5c3bd9e84d

* Un-deprecating the `reorder` method in ActiveRecord
  235a4142aa3fee73faa0f01e267a2b4254cea8ce

* A backport of "cheaper attributes reads" in ActiveRecord
  86acbf1cc050c8fa8c74a10c735e467fb6fd7df8

* Correctling handling `before_type_cast` on timezone aware attributes
  0823bbd757f3654a08d300e27873758da606f06a

* Escaping binary data in sqlite3 inserts
  7222786c15eacbd432b2bce9798d3f3459f7e05f

* Fixing schema support for the mysql adapter
  eb1eac93151c1d45c3ef292d99bfcf74799185ea

This change list IS NOT exhaustive.  They are just some of my favorites!  For
the complete list *please* see the CHANGELOG files or view the diff on github.

## GEM CHECKSUMS

If you totally want to make sure that you've got the right gems, here are my
shasums before I pushed the gems!

#### shasum *
* fc7b0503bdf99d1ec08dc0dcee3677ca1dd29f0f  actionmailer-3.0.6.gem
* e8fbefd5b0a46408dd557331700ea514a4c199ab  actionpack-3.0.6.gem
* 8509520744ecd8e6712158311a16ba4782b454e2  activemodel-3.0.6.gem
* 3b392e811ba342a5bf430d89cf4f060d119aba64  activerecord-3.0.6.gem
* 9eea440bdf885e857ebfb5ff8e31119f76a18a4e  activeresource-3.0.6.gem
* 175ba6286f7802edeeaab30f900d87a38f516728  activesupport-3.0.6.gem
* ebeea3c1f03db3309ea9a6640e1767ab144ff567  rails-3.0.6.gem
* 61e24f94ea87fc58175b2067f7f6a3a8c468bfe0  railties-3.0.6.gem


## IN CLOSING

Thank you for waiting for me to finish vacation before I released this!  I hope
that everyone enjoys this bugfix release of Rails.  Next time I'll try not to
vacation so much! ;-)

<3 <3 <3 <3 <3