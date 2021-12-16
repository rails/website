---
layout: post
title: "Google Summer of Code 2015: Wrapping Up"
categories:
- activism
author: Federico Builes
published: true
date: 2015-09-25 15:00:00 -07:00
---

This year marked our fourth participation in [Google's Summer of
Code](https://developers.google.com/open-source/gsoc) (GSoC). In this post we'd like to tell you a bit
about this year's projects:

## Asset Source Maps ([Andrei Istratii](https://github.com/Andreis13))
Andrei has added support for several types of [Source
Maps](https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Use_a_source_map) to
Sprockets 4. With Source Maps users can see a readable version of their code inside Developer
Tools (Javascript, CSS, etc.) after it's been minified or compiled. Check out Andrei's
[sprockets](https://github.com/rails/sprockets/commits?author=Andreis13) and
[sass-rails](https://github.com/rails/sass-rails/commits?author=Andreis13) contributions to find out more about
the project status.

## Test Failure Prediction ([Genki Sugimoto](https://github.com/genki-s))

Inspired by [Aaron Patterson's ideas on
testing](http://tenderlovemaking.com/2015/02/13/predicting-test-failues.html), Genki Sugimoto
created a testing library called [ttnt](https://github.com/Genki-S/ttnt). It tells you
which tests are relevant to a particular commit inside your application, giving you the option of
skipping full test-suite runs.

## Web Console ([Hiroyuki Sano](https://github.com/sh19910711))

The [Rails Web Console](https://github.com/rails/web-console) helps Rails developers debug
running applications inside the browser. This project was created in 2013 by
Genadi Samokovarov as part of that year's GSoC. In 2015 Hiroyuki Sano improved it by
creating a [browser extension](https://github.com/rails/web-console/pull/151) so you can use the
console inside the Developer Tools.

## Performance Enhancements for the Asset Pipeline ([Martha De Luque](https://github.com/malida))

Martha focused on finding and addressing performance issues inside
our asset generation pipeline. With her work we now have support for [faster asset compilation
libraries](https://github.com/rails/sprockets/pull/80), and thanks to her benchmarks we now know
where to focus future optimization efforts.

## Evented File System Monitoring ([Puneet Agarwal](https://github.com/puneet24))

Rails monitors application files when running in development mode, if any change
is detected the application code is reloaded on the next request. Currently Rails walks the
application tree to detect said changes,
[Puneet's contribution](https://github.com/rails/rails/pull/20785) implements an
alternative using native operating system events.

## Refactoring Rails Cookie Internals ([Siddharth Bhatore](https://github.com/sbhatore))

Siddharth worked on [laying the infrastructure](https://github.com/rails/rails/pull/20856) for a more robust implementation of cookies in Rails. Some of his changes
include support for [JSON Web Encryption
(JWE)](https://tools.ietf.org/html/draft-ietf-jose-json-web-encryption) and [JSON Web Signatures
(JWS)](https://tools.ietf.org/html/draft-ietf-jose-json-web-signature-41). With these changes in
place we can add cool features like cookie purposes and coherent expiration.


## Wrapping Up

We want to thank all the students and mentors involved in this year's Summer of Code, we hope it was
a good experience for everyone. We also want to thank Google for supporting the projects, and [José
Valim](http://plataformatec.com.br/crafting-rails-applications), [Pat
Shaughnessy](http://patshaughnessy.net/ruby-under-a-microscope) and [O'Reilly
Media](http://www.oreilly.com) for helping out with learning resources for our students.

See you next year!
