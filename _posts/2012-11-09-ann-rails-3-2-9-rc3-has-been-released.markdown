---
layout: post
title: Rails 3.2.9.rc3 has been released!
categories: []
author: spastorino
published: true
---

Hi everyone,

Rails 3.2.9.rc3 has been released. If no regressions are found I will
release 3.2.9 final this Monday 12th. If you find a regression open an
issue on github and mention me on it, mail me or tweet me, whatever but
let me know :).

## CHANGES since 3.2.9.rc2

*Action Mailer*

*   No changes


*Action Pack*

*   Lock sprockets to 2.2.x
    REASON: We had some pending fixes in sprockets and sass-rails to make possible to use sprockets version > 2.2. We will do a more conservative sprockets upgrade for this release.
    In a next release we can relax the dependency again.
    See #8099 for more information.

    *Guillermo Iguaran*

*   Clear url helpers when reloading routes.

    *Santiago Pastorino*

*   Revert the shorthand routes scoped with `:module` option fix
    This added a regression since it is changing the URL mapping.
    This makes the stable release backward compatible.

    *Rafael Mendonça França*


*Active Model*

*   No changes


*Active Record*

*   No changes


*Active Resource*

*   No changes


*Active Support*

*   No changes


*Railties*

*   Revert "Respect children paths filter settings"
    This reverts commit 53778ec2d716f860646fd43957fd53c8db4da2fe.
    Closes #8146

    *Santiago Pastorino*


## SHA-1

* e830dbe5d93f6ea6ed8e32ac75e5c5a5dd4bd0fa  actionmailer-3.2.9.rc3.gem
* f50456d082164447d149540a144515877cd714b2  actionpack-3.2.9.rc3.gem
* 60eca0f399779799e8ea7a8be6b68f3101fe5fe4  activemodel-3.2.9.rc3.gem
* 0cfec8581690d4a6072c686464ddd66e80ac094e  activerecord-3.2.9.rc3.gem
* 5414975de41a1dfbb6dbd9cd74b53969c63f2e96  activeresource-3.2.9.rc3.gem
* e67293cf746f315cc631155c28d3891a3532bb74  activesupport-3.2.9.rc3.gem
* 8e62b4db1249024bbb1ea3a87fee701a0cfa5674  rails-3.2.9.rc3.gem
* 6b4365046903bcd60c99f81bd48cccd1b3faae39  railties-3.2.9.rc3.gem

You can find a list of changes between v3.2.9.rc2 and v3.2.9.rc3 [here](https://github.com/rails/rails/compare/v3.2.9.rc2...v3.2.9.rc3)
and an exhaustive list of changes since v3.2.8 [here](https://github.com/rails/rails/compare/v3.2.8...v3.2.9.rc3).

Thanks to everyone!
