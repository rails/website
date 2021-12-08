---
layout: post
title: Rails 3.2.0.rc2 has been released!
categories:
- releases
author: spastorino
published: true
date: 2012-01-04 21:01:00.000000000 +00:00
---
Hi everyone,

Rails 3.2.0.rc2 has been released!

## What to update in your apps

* Update your Gemfile to depend on rails ~> 3.2.0.rc2
* Update your Gemfile to depend on sass-rails ~> 3.2.3
* Start moving any remaining Rails 2.3-style `vendor/plugins/*`. These are finally deprecated!

Extract your vendor/plugins to their own gems and bundle them in your Gemfile. If they're tiny, not worthy of the own gem, fold it into your app as `lib/myplugin/*` and `config/initializers/myplugin.rb`.


## Changes since RC1

*Action Mailer*

* No changes


*Action Pack*

*   Add font_path helper method **Santiago Pastorino**

*   Depends on rack ~> 1.4.0 **Santiago Pastorino**

*   Add :gzip option to `caches_page`. The default option can be configured globally using `page_cache_compression` **Andrey Sitnik**


*Active Model*

* No changes


*Active Record*

* No changes


*Active Resource*

* No changes


*Active Support*

*   ActiveSupport::Base64 is deprecated in favor of ::Base64. **Sergey Nartimov**


*Railties*

*   Rails 2.3-style plugins in vendor/plugins are deprecated and will be removed in Rails 4.0. Move them out of vendor/plugins and bundle them in your Gemfile, or fold them in to your app as lib/myplugin/* and config/initializers/myplugin.rb. **Santiago Pastorino**

*   Guides are available as a single .mobi for the Kindle and free Kindle readers apps. **Michael Pearson & Xavier Noria**

*   Allow scaffold/model/migration generators to accept a "index" and "uniq" modifiers, as in: "tracking_id:integer:uniq" in order to generate (unique) indexes. Some types also accept custom options, for instance, you can specify the precision and scale for decimals as "price:decimal{7,2}". **Dmitrii Samoilov**


## Gem checksums

* MD5 (actionmailer-3.2.0.rc2.gem) = 118c83b2cddaa935d1de7534cfb6c810
* MD5 (actionpack-3.2.0.rc2.gem) = 6b18851bc26d5c8958672f27adda05ca
* MD5 (activemodel-3.2.0.rc2.gem) = d82f4eed949dcff17f8bf2aed806679a
* MD5 (activerecord-3.2.0.rc2.gem) = d07806fd5fc464f960200d20ceb2193a
* MD5 (activeresource-3.2.0.rc2.gem) = f51af240ff4623b0b6f8a4293ffa50dc
* MD5 (activesupport-3.2.0.rc2.gem) = 01380240c12e0380c9e61c97dd45f2f1
* MD5 (rails-3.2.0.rc2.gem) = 134f923f7d821f514abf6bdf4af62ca7
* MD5 (railties-3.2.0.rc2.gem) = 4b3ac0f9c5da16b90a1875e8199253d2

You can find an exhaustive list of changes on [github](https://github.com/rails/rails/compare/v3.2.0.rc1...v3.2.0.rc2). Along with the [closed issues marked for v3.2.0](https://github.com/rails/rails/issues?milestone=3&state=closed).

You can also see issues [we haven't closed yet](https://github.com/rails/rails/issues?milestone=3&state=open).

Thanks to everyone!