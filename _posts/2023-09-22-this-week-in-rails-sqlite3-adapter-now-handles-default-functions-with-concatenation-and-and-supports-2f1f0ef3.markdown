---
layout: post
title: "SQLite3 adapter now handles default functions with concatenation and supports supports_insert_returning?"
categories: news
author: Emmanuel Hayford
published: true
date: 2023-09-22
---

[Default retry strategy uses polynomial backoff instead of exponential backoff](https://github.com/rails/rails/pull/49292)
This modifies the _wait_ option's name to provide a more explicit indication that jobs will undergo retry attempts using polynomial backoff. It also ensures that the previous, legacy name remains functional to maintain backward compatibility.

[SQLite3 adapter handles default functions with concatenation](https://github.com/rails/rails/pull/49287)
This PR verifies that the SQLite3 adapter effectively manages default functions involving the _||_ concatenation operator.

[Add SQLite3 support for supports\_insert\_returning?](https://github.com/rails/rails/pull/49290)
The SQLite3 adapter has been updated to include support for _supports\_insert\_returning?_. By fully implementing this contract, the SQLite3 adapter now provides compatibility for auto-populated columns and custom primary keys.

[Add documentation for locals: and local\_assigns](https://github.com/rails/rails/pull/49294)
This adds extensive documentation for _locals:_ and _local\_assigns_. Worth the read.

[Improve strict\_loading documentation](https://github.com/rails/rails/pull/49329)
Still on documentation, _strict\_loading_&nbsp; now has examples to clarify its usage with singular associations.

[34 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230915-20230922) graced Rails with contributions this past week.

That'd be it for today, take care.
[Emmanuel](https://twitter.com/siaw23)

Your weekly inside scoop of interesting commits, pull requests and more from [**Rails**](https://github.com/rails/rails).

<p><i><a href="https://world.hey.com/this.week.in.rails">Subscribe</a> to get these updates mailed to you.</i></p>
