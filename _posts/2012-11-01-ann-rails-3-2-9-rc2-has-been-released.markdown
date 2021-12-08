---
layout: post
title: Rails 3.2.9.rc2 has been released!
categories: []
author: spastorino
published: true
---

Hi everyone,

Rails 3.2.9.rc2 has been released. If no regressions are found I will
release 3.2.9 final this Monday 5th. If you find a regression open an
issue on github and mention me on it, mail me or tweet me, whatever but
let me know :).

## CHANGES since 3.2.9.rc1

*Action Mailer*

*   No changes


*Action Pack*

*   Revert the `assert_template` fix to not pass with ever string that matches the template name.
    This added a regression since people were relying on this buggy behavior.
    This will introduce back #3849 but this stable release will be backward compatible.
    Fixes #8068.

    *Rafael Mendonça França*

*   Revert the rename of internal variable on ActionController::TemplateAssertions to prevent
    naming collisions. This added a regression related with shoulda-matchers, since it is
    expecting the [instance variable @layouts](https://github.com/thoughtbot/shoulda-matchers/blob/9e1188eea68c47d9a56ce6280e45027da6187ab1/lib/shoulda/matchers/action_controller/render_with_layout_matcher.rb#L74).
    This will introduce back #7459 but this stable release will be backward compatible.
    Fixes #8068.

    *Rafael Mendonça França*


*Active Model*

*   No changes


*Active Record*

*   Fix issue with collection associations calling first(n)/last(n) and attempting
    to set the inverse association when `:inverse_of` was used. Fixes #8087.

    *Carlos Antonio da Silva*

*   Fix ActiveRecord#update_column return value.

    *Aliaxandr*

*   Fix bug when Column is trying to type cast boolean values to integer.
    Fixes #8067.

    *Rafael Mendonça França*

*   Fix bug where `rake db:test:prepare` tries to load the structure.sql into development database.
    Fixes #8032.

    *Grace Liu + Rafael Mendonça França*

*   Fixed support for `DATABASE_URL` environment variable for rake db tasks. *Grace Liu*


*Active Resource*

*   No changes


*Active Support*

*   No changes


*Railties*

*   No changes

## SHA-1

* 3aaf1d1e6057177988b646b86650c5cb5bf0e16e  actionmailer-3.2.9.rc2.gem
* c2ff861876ed951a33c01caacf2c17301319c7b1  actionpack-3.2.9.rc2.gem
* 642da29371a877fda18fc69c51daa882429d609a  activemodel-3.2.9.rc2.gem
* f695caa3cac3b1d3f316bfd7d8f0ec69d61211ae  activerecord-3.2.9.rc2.gem
* baec057af0cf2a6146b000282b86cf6eb87989e2  activeresource-3.2.9.rc2.gem
* b15f9f13de730343448f35ed3b2f26af1ddd76e9  activesupport-3.2.9.rc2.gem
* 40b5e77a5123545b4e4b6c2e993a30cdb3a38bae  rails-3.2.9.rc2.gem
* 7921cbcd52302d31188537fb62fa5c75c2be5b2d  railties-3.2.9.rc2.gem

You can find a list of changes between v3.2.9.rc1 and v3.2.9.rc2 [here](https://github.com/rails/rails/compare/v3.2.9.rc1...v3.2.9.rc2)
and an exhaustive list of changes since v3.2.8 [here](https://github.com/rails/rails/compare/v3.2.8...v3.2.9.rc2).

Thanks to everyone!
