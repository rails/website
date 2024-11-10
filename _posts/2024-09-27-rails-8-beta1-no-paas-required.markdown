---
layout: post
title: 'Rails 8.0 Beta 1: No PaaS Required'
categories: releases
author: dhh
published: true
date: 2024-09-27 5:30:00 -07:00
---

Deploying modern web apps -- with all the provisions needed to be fast and secure while easily updateable -- has become so hard that many developers don't dare do it without a PaaS (platform-as-a-service). But that's ridiculous. Nobody should have to pay orders of magnitude more for basic computing just to make deployment friendly and usable. That's a job for open source, and Rails is ready to solve it.

That was the premise of my [keynote here at Rails World](https://www.youtube.com/watch?v=-cEn_83zRFw), and it's the mission for Rails 8. So we are thrilled to release the first beta release of this new version in celebration with Rails World here in Toronto.

Despite being a beta release, the vast majority of everything that's included has already been thoroughly battle-tested. Rails is uniquely blessed to have huge applications like [Shopify](https://shopify.com) and [GitHub](https://github.com), along with plenty of other apps of all sizes, run right on the bleeding edge of the framework to ensure that issues are caught early.

Furthermore, all the new deployment tools, as well as Solid Cache and Solid Queue, have been driving [our cloud exit at 37signals](https://basecamp.com/cloud-exit) for over 18 months in applications like Basecamp and HEY.

Still, there's always going to be some issues with new stuff, and we'd be grateful if you'd help us find it by upgrading your applications to Rails 8 ahead of the final release. Let's make this release as SOLID as can be!

Here're all the major new bits in box:

## Enter Kamal 2 + Thruster

Rails 8 comes preconfigured with [Kamal 2](https://kamal-deploy.org) for deploying your application anywhere. Whether to a cloud VM or your own hardware. Kamal takes a fresh Linux box and turns it into an application or accessory server with just a single "kamal setup" command. All it needs is the IP addresses for a set of servers with your SSH key deposited, and you'll be ready to go into production in under two minutes.

Kamal can do this so easily because Rails already comes with a highly efficient and tuned [Dockerfile](https://github.com/rails/rails/blob/main/railties/lib/rails/generators/rails/app/templates/Dockerfile.tt) for turning your application into a production-ready container image out of the box. All you need to bring is your own container registry account, like Docker Hub or GitHub, for storing the images.

In Rails 8, this Dockerfile has been upgraded to include a new proxy called [Thruster](https://github.com/basecamp/thruster), which sits in front of the Puma web server to provide X-Sendfile acceleration, asset caching, and asset compression. This means there's no need to put an Nginx or any other web server in front. The default Rails container is ready to accept traffic from the internet immediately.

Kamal 2 also includes a proxy, this time a bespoke unit called [Kamal Proxy](https://github.com/basecamp/kamal-proxy) to replace the generic Traefik option it used at launch. This proxy provides super fast zero-downtime deploys, automated SSL certificates via Let's Encrypt, and support for multiple applications on a single server without any complicated configuration.

Together with a revised strategy for handling secrets (featuring built-in integration for 1password, Bitwarden, and LastPass) and a new aliases feature to get commands like "kamal console" to start a remote Rails console session, it provides a complete package for handling not just the deployment but the operation of your application in production.

Kamal 2 was lead by Donal McBreen and Kamal Proxy + Thruster was created by Kevin McConnell, both from [37signals](https://37signals.com).

## A Solid Reduction of Dependencies

Part of making Rails easier to deploy is to cut down on the number of accessory services required to get going. In the past, Rails needed either MySQL or PostgreSQL as well as Redis to take full advantage of all its features, like jobs, caching, and WebSockets. Now all of it can be done with SQLite thanks to a trifecta of new database-backed adapters named Solid Cable, Solid Cache, and Solid Queue.

These adapters are all created from the same premise: Disks have gotten fast enough that we don't need RAM for as many tasks. This allows us to reap the simplification benefits of SSD and NVMe drives being orders of magnitude faster than good-old spinning rust. 

### Solid Cable

[Solid Cable](https://github.com/rails/solid_cable) replaces the need for Redis to act as the pubsub server to relay WebSocket messages from the application to clients connected to different processes. It uses fast polling, but it's still almost as quick as Redis, when run through the same server on SQLite. Beyond plenty fast enough for most applications. As a bonus, Solid Cable retains the messages sent in the database for a day by default, which may ease debugging of tricky live update issues.

Solid Cable has been created by Nick Pezza from [Working Not Working](https://workingnotworking.com/).

### Solid Cache

[Solid Cache](https://github.com/rails/solid_cache) replaces the need for either Redis or Memcached for storing HTML fragment caches in particular. In addition to getting rid of the accessory service dependency, it also allows for a vastly larger and cheaper cache thanks to its use of disk storage rather than RAM storage. This means your cache can live longer and cover even more requests out the plank of the 95th or 99th percentile. Additionally, this cache can be encrypted _and_ managed by an explicit retention limit (like 30 or 60 days). Making it easier to live up to modern privacy policies and expectations.

Solid Cache has been in production at Basecamp for well over a year where it stores 10 terabytes of data, enables a full 60-day retention window, and cut the P95 render times in half after it's introduction.

Solid Cache was created by Donal McBreen from 37signals.

### Solid Queue

[Solid Queue](https://github.com/rails/solid_queue) replaces the need for not just Redis, but also a separate job-running framework, like Resque, Delayed Job, or Sidekiq, for most people. For high-performance installations, it's built on the new `FOR UPDATE SKIP LOCKED` mechanism first introduced in PostgreSQL 9.5, but now also available in MySQL 8.0 and beyond. For more modest needs, it also works with SQLite, which makes it ideal for that no-dependency path to the first HELLO WORLD dopamine hit you get from seeing your work in production right away.

Solid Queue can either run as a puma plugin, which is the default on a single-server installation, or by using the new `bin/jobs` command for starting a dedicated dispatcher. It's possible to run multiple dispatchers dealing with dedicated queues according to bespoke performance tuning all with a flexible configuration scheme that asks for no tweaking out of the box, but gives you all the dials once you need it.

It has virtually all the features you could want from a modern job queuing system. Including robust concurrency controls, failure retries and alerting, recurring job scheduling, and so much more. In HEY, it replaced no less than 6(!) different Resque gems, as the one integrated solution.

Solid Queue has been meticulously developed within the pressures of a real production environment over the last 18 months, and today it's running 20 million jobs per day for HEY alone at 37signals. 

Solid Queue was created by Rosa Gutiérrez from 37signals.

## Getting SQLite ready for production

On top of the trifecta of Solid adapters that makes it possible for SQLite to power Action Cable, Rails.cache, and Active Job, a bunch of work has gone into making the SQLite adapter and Ruby driver suitable for real production use in Rails 8.

At 37signals, we're building a growing suite of apps that use SQLite in production with [ONCE](https://once.com/). There are now thousands of installations of both [Campfire](https://once.com/campfire) and [Writebook](https://once.com/writebook) running in the wild that all run SQLite. This has meant a lot of real-world pressure on ensuring that Rails (and Ruby) is working that wonderful file-based database as well as it can be. Through proper defaults like WAL and IMMEDIATE mode. Special thanks to Stephen Margheim for [a slew of such improvements](https://github.com/rails/rails/pulls?q=is%3Apr+author%3Afractaledmind) and Mike Dalessio for [solving a last-minute SQLite file corruption issue](https://github.com/sparklemotion/SQLite3-ruby/pull/558) in the Ruby driver.

## Replacing Sprockets with Propshaft

But Rails 8 is not just about the better deployment story and database-backed adapters. We're also making Propshaft the new default asset pipeline. Propshaft is a dividend from the mission to focus on #NOBUILD as the default path in Rails 7 (and offloading more complicated JavaScript setups to bun/esbuild/vite/etc). As the [new asset pipeline](https://world.hey.com/dhh/introducing-propshaft-ee60f4f6) it replaces the old Sprockets system, which hails from all the way back in 2009. A time before JavaScript transpilers and build pipelines as we know them today existed. And long, long before we could imagine browsers with stellar JavaScript implementations, import maps, and no constraints from many small files thanks to HTTP/2.

It's a great example of the need to occasionally pull a fresh sheet of paper and consider a familiar problem from first principles again. And it turns out, [in our new #NOBUILD world](https://world.hey.com/dhh/once-1-is-entirely-nobuild-for-the-front-end-ce56f6d7), the asset pipeline only needs to do two primary things: Provide a load path for assets and stamp them with digests to allow for far-future expiry. That's basically it. Sprockets did a million other things than that, many of them in a way that had long since fallen out of favor, and from a state of disrepair that had few contributors willing or able to help remedy it.

So we thank Sprockets for 15 years of service, but the future of the asset pipeline in Rails is called Propshaft. And it's now the default for all Rails 8 applications, though we'll continue to support Sprockets for existing applications.

Propshaft was created by David Heinemeier Hansson, from 37signals, and Breno Gazzola, from [FestaLab](https://festalab.com.br/).

## Generating the authentication basics

Finally, making it easier to go to production also means we ought to make it easy to be secure. Rails has been assembling high-level abstractions for the key components of an excellent authentication system for a long time to bring that ease. We've had `has_secure_password` since Rails 5, but also recently introduced `generates_token_for :password_reset` along with `authenticate_by` in Rails 7.1. Now, with Rails 8, we're putting all the pieces together in a complete authentication system generator, which creates an excellent starting point for a session-based, password-resettable, metadata-tracking authentication system.

Just run `bin/rails generate authentication` and you'll get basic models for `Session` and `User`, together with a `PasswordsMailer`, `SessionsController`, and an `Authentication` concern. All you have to bring yourself is a user sign-up flow (since those are usually bespoke to each application). No need to fear rolling your own authentication setup with these basics provided (or, heaven forbid, paying a vendor for it!).

## And everything else

Rails 8 is dropping just a few months after [Rails 7.2](https://rubyonrails.org/2024/8/10/Rails-7-2-0-has-been-released), but on top of all these incredible new tools presented above, also includes a wealth of fixes and improvements. Rails has never been firing harder on all cylinders than what we're doing at the moment. It's an incredible time to be involved with the framework and an excellent moment to hop on our train for the first time. Whether you're into #NOBUILD or #NOPAAS or simply attracted to the mission of compressing complexity in general, you'll be right at home with a community of passionate builders who value beautiful code as much as they do productivity.
