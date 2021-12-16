---
layout: post
title: 'Rails 7.0: Fulfilling a vision'
categories: releases
author: dhh
published: true
date: 2021-12-15 15:17:00 -08:00
---

This version of Rails has been years in the conceptual making. It's the fulfillment of a vision to present a truly full-stack approach to web development that tackles both the front- and back-end challenges with equal vigor. An omakase menu that includes everything from the aperitif to the dessert.

This vision wasn't possible even just a few years ago. We simply didn't have the core technologies in place. But with advancements in browser support for ES6/ESM, widespread adoption of HTTP/2, and [the exciting new standard for import maps](https://github.com/rails/importmap-rails), it's finally possible. Rails 7 takes advantage of all of these advances to deliver [a no-Node default approach to the front end](https://world.hey.com/dhh/modern-web-apps-without-javascript-bundling-or-transpiling-a20f2755) – without sacrificing either access to [npm packages](https://github.com/rails/importmap-rails#using-npm-packages-via-javascript-cdns) or modern JavaScript in the process.

[Hotwire](https://hotwired.dev)'s combination of [Turbo](https://turbo.hotwired.dev) and [Stimulus](https://stimulus.hotwired.dev) deliver all the tools needed to produce fantastic user experiences that leave little to nothing on the table in contrast to single-page applications – at a fraction of the complexity. It's the default choice for new Rails apps, replacing the far more limited options of Turbolinks and Rails UJS.

While most Rails applications won't need a dependency on Node given these defaults, we've still managed to also dramatically improve the integration story for those who do in Rails 7. 

Gone is the tightly-coupled embrace of Webpack with Webpacker, and instead is [a loosely-coupled embrace of any JavaScript bundler](https://www.youtube.com/watch?v=PtxZvFnL2i0) you might prefer. Whether you like [esbuild](https://github.com/evanw/esbuild) (and who doesn't these days!) or [rollup.js](https://rollupjs.org/guide/en) or even [Webpack](https://webpack.js.org), you'll be able to use any of them through the new [jsbundling-rails](https://github.com/rails/jsbundling-rails) integration that can be pre-configured for new apps with `--javascript esbuild`.

The same approach is taken with CSS bundlers that rely on Node. With Rails 7, all they need to be able to produce is a compiled application.css file, and they'll integrate perfectly. From [Tailwind CSS](https://tailwindcss.com) to [Bootstrap](https://getbootstrap.com), from [Dart-powered Sass](https://sass-lang.com/dart-sass) to [PostCSS](https://postcss.org). If you're willing to accept the complexity of a Node dependency, you can pre-configure your new Rails app to use any of them with `--css bootstrap` and it'll use [cssbundling-rails](https://github.com/rails/cssbundling-rails). (And exclusively for Tailwind, we even have a version that works without the Node dependency as well!)

These are the [best default choices](https://world.hey.com/dhh/rails-7-will-have-three-great-answers-to-javascript-in-2021-8d68191b) we've ever had for front-end development in Rails. The default path without Node is dramatically simpler, surprisingly capable, and skating to where the puck of future front-end development is likely to go anyway. The alternate path of integration with Node is lighter, less prescriptive, and less brittle than ever before.

But of course, this is not all! While Rails 7's big idea is the reformation of the front-end answers, there's plenty of additional progress to celebrate as well. Like our [brand new website](https://rubyonrails.org)! Created together with Basecamp designer Sean Mitchell. The new look has also been applied to the boot screen for new apps. And I've recorded a new demo video to show off the framework properly.

And here are some of the many other new features and improvements:

## At-Work Encryption With Active Record

Extracted from [HEY](https://hey.com/security), we've added [encrypted attributes to Active Record](https://github.com/rails/rails/pull/41659), so your application can offer at-work encryption in addition to the traditional at-rest and in-transit coverage. 

As an immediate practical benefit, encrypting sensitive attributes adds an additional security layer. For example, if an attacker gained access to your database, a snapshot of it, or your application logs, they wouldn't be able to make sense of the encrypted information. And even without thinking about malicious actors, checking application logs for legit reasons shouldn't expose personal information from customers either.

But more importantly, by using Active Record Encryption, you define what constitutes sensitive information in your application at the code level. This enables controlling how this information is accessed and building services around it. As examples, think about auditable Rails consoles that protect encrypted data or check the built-in system to filter controller params automatically.

Checkout the [full guide on how to use encrypted attributes](https://edgeguides.rubyonrails.org/active_record_encryption.html).

## Trace Query Origins With Marginalia-Style Tagging

Almost a decade ago, [Marginalia was extracted from Basecamp](https://signalvnoise.com/posts/3130-tech-note-mysql-query-comments-in-rails) to trace query origins with SQL comment tagging. Now this external gem has been [upstreamed into Active Record as QueryLogs](https://github.com/rails/rails/pull/42240).

## Asynchronous Query Loading

When you have a controller action that needs to load two unrelated queries, you can now do it concurrently through [Relation#load_async](https://github.com/rails/rails/pull/41372). If you have three complex queries that each take 100ms, you'd have to spend 300ms executing them one by one before. Now you can run them in parallel, spending only a total of 100ms on the set.

## Zeitwerk Exclusively

Autoloading in Rails is one of those magical quality of life realities that it's easy to just take for granted. The trusty old `const_missing` approach which came with a range of quirks and missing features has finally been replaced exclusively with the [Zeitwerk code loader](https://github.com/fxn/zeitwerk#introduction). There are a few upgrade gotchas to be aware of, especially for older applications, but with this [upgrade guide](https://guides.rubyonrails.org/upgrading_ruby_on_rails.html#autoloading) you should be on your way in no time

## A Few Other Highlights

- [Spring](https://github.com/rails/spring) is no longer on by default, as faster computers have made it less relevant on anything but the largest applications.
- [ActionController::Live#send_stream](https://github.com/rails/rails/pull/41488) makes it easy to stream files that are being generated on-the-fly in controller actions.
- Parallelized testing will now compare your CPU core count to your test count and [scale the parallelization accordingly](https://github.com/rails/rails/pull/42761).
- Active Storage now uses the faster and more secure `libvips` as its [default variant processor](https://edgeguides.rubyonrails.org/upgrading_ruby_on_rails.html#activestorage-variant-processor-changed-to-vips).

## From All Of Us To All Of You

There are [over four thousand commits](https://github.com/rails/rails/compare/v6.1.4.1...7-0-stable) that have gone into Rails 7 since we released version 6.1 last year. This is the work of hundreds of contributors, many of them first timers. They join the [more than six thousand contributors](https://contributors.rubyonrails.org) that have made changes to the Rails code base over the years!

All of this work has been thoroughly vetted by thousands of applications through the development phase, and big-hitter apps like [Shopify](https://www.shopify.com), [GitHub](https://github.com), [Basecamp](https://basecamp.com), and [HEY](https://hey.com) are all running this final version or something close to it in production!

It's an incredible time to be involved with Ruby on Rails. The biggest apps built on the framework are [setting new records of reach and scale](https://twitter.com/ShopifyEng/status/1465806691543531525) all the time. The hiring contest for the best Rails developers is more fierce than ever. The influx of new contributors continue to push the framework forward [every week](https://world.hey.com/this.week.in.rails).

We hope you enjoy the ride!
