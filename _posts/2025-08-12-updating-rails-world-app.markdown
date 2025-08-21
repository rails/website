---
layout: post
title: "Upgrading the Rails World App for 2025"
categories: news, foundation
author: The Rails Foundation
published: true
date: 2025-08-12
---


Last year, we launched the official Rails World conference app, an open-source event app built in collaboration with [Telos Labs](https://www.teloslabs.co) to help attendees connect and up to date. (You can read more about the original build [here](https://www.teloslabs.co/rails-world-conference-app) and [here](https://rubyonrails.org/2024/8/1/building-the-rails-world-app-with-telos-labs).)

From the beginning, this was a project for the community, not just Rails World. So it’s been fun to see [**Tropical on Rails**](https://www.tropicalonrails.com/en/%20) and [**Baltic Ruby**](https://balticruby.org/) also use the app for their events this year. That’s exactly what we hoped for when we made it open source. ❤️

This year, we asked **Bram Janssen**, a junior developer in the community, to take the lead on upgrading the app in collaboration with Telos Labs, getting it production-ready for this year's event.

Under the hood, the event app uses a modern, vanilla Rails stack, relying on default features like **Hotwire**, **Solid Queue** for background jobs, **SQLite3**, **Import Maps**, and **Kamal 2** for deployment. It also uses **Tailwind CSS** for styling, **Avo** for admin, **AppSignal** for monitoring, **Mailpace** for email, and **AWS S3** for file storage.

But a lot has changed in Rails since last year's release: **Rails 8** and **Hotwire Native** were both announced just weeks after the app first shipped. So, it was time for an upgrade.

**What’s new for 2025?**

**Upgraded from Rails 7.2 to Rails 8**  
The app now runs on the latest version of Rails, benefiting from all the framework improvements and updated defaults launched last year.

**Native app support via Hotwire Native**  
We now have native iOS and Android apps, powered by the same Rails backend. They're live in the App Store and Google Play, thanks to Hotwire Native.

**Coming soon**:

* Dark mode (feature in review)  
* Offline support (in progress)

And there’s still some work to do before Rails World. If anyone wants to help, check out the [Issue board](https://github.com/orgs/TelosLabs/projects/6/views/1). If there’s a feature or issue you’d like to work on, feel free to jump in.

Thanks to **Bram**, **Telos Labs**, **Tropical on Rails**, and **Baltic Ruby** for making this such a fun, ongoing community collab.

We’ll be rolling out the upgraded app to Rails World attendees soon, so attendees should check their inboxes tomorrow.
