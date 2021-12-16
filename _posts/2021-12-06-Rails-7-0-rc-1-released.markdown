---
layout: post
title: 'Rails 7.0 RC1: New JavaScript Answers, At-Work Encryption, Query Origin Logging, Zeitwerk Exclusively'
categories: releases
author: dhh
published: true
date: 2021-12-06 18:00:00 +01:00
---
We're almost ready to declare Rails 7 done! The feedback since [the first alpha release](https://rubyonrails.org/2021/9/15/Rails-7-0-alpha-1-released) has been wonderful, we've eliminated a slew of issues, and we've seen Basecamp, HEY, GitHub, and Shopify all run in production on this alpha series. So we now feel so confident that this is nearly ready that we're skipping straight from alpha to release candidate. This is RC1.

Please help us do the final testing of all this new stuff so we can ensure a solid final release of Rails 7 this year!

## All New Answers On The Front-End

After almost five years with [Webpacker](https://github.com/rails/webpacker) as our default answer to writing modern JavaScript in Rails, [it's time to move on](https://www.youtube.com/watch?v=PtxZvFnL2i0). Advancements in browser support for ES6/ESM, widespread adoption of HTTP/2, and [the exciting new standard for import maps](https://github.com/rails/importmap-rails) has [paved the way](https://world.hey.com/dhh/modern-web-apps-without-javascript-bundling-or-transpiling-a20f2755) for [a no-Node approach to JavaScript in Rails 7](https://world.hey.com/dhh/rails-7-will-have-three-great-answers-to-javascript-in-2021-8d68191b) – [without giving up on npm packages](https://github.com/rails/importmap-rails#using-node-modules-via-javascript-cdns).

Together with the replacement of Turbolinks and Rails UJS by the [Hotwire](https://hotwired.dev) combination of [Stimulus](https://stimulus.hotwired.dev) and [Turbo](https://turbo.hotwired.dev), we now have the most complete in-the-box front-end setup for writing great Rails applications ever. Without needing thousands of node dependencies in `node_modules`, fighting with bundler configurations, or any of the other challenges common with JavaScript development.

At the same time, we've also [dramatically improved the integration](https://www.youtube.com/watch?v=JsNtLiph87Y) between Rails and JavaScript + CSS bundlers for those who need that. Through two new companion gems that can be triggered via rails new [--javascript [bundler]](https://github.com/rails/jsbundling-rails) and [--css [bundler]](https://github.com/rails/cssbundling-rails), you get easy access to starting a new application or changing one that starts with import maps to use [esbuild](https://github.com/evanw/esbuild), [rollup.js](https://rollupjs.org/guide/en), [Webpack](https://webpack.js.org), [Tailwind CSS](https://tailwindcss.com), [PostCSS](https://postcss.org), [Dart Sass](https://sass-lang.com/dart-sass), and [Bootstrap](https://getbootstrap.com).

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

There are [over seven hundred commits](https://github.com/rails/rails/compare/v7.0.0.alpha2...7-0-stable) that have gone into this release candidate since we released the alpha three months ago. We hope to get this work in the hands of everyone before Christmas this year 🎄🎁❤️.