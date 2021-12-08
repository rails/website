---
layout: post
title: "This week in Rails: Speedy Integration Tests, Enum Queries and more!"
categories: news
author: kaspth
published: true
date: 2015-02-13 17:00:00 -0800
---

Dearest darling, reindeer-eyed reader

Hither summoned is [Kasper](https://twitter.com/kaspth), Duke of Friendly Ghosts, to bring forth thy worthy commits and Pull Requests of [Rails](https://github.com/rails/rails) as subscribed.

Thusly commences our journey on this Friday the 13th - Ok, I'm sick of writing like that.

## Featured

### [This Week's Contributors](http://contributors.rubyonrails.org/contributors/in-time-window/this-week)

A round of applause goes to this weeks contributors from all of us at this virtual news desk. We editors did a full on spit take when realizing a whopping 28 people contributed. Nothing seals that memory quite like the scalding coffee on our thighs.

### [Integration Tests Only 12% Slower than Controller Tests](https://github.com/rails/rails/commit/0acd4a57768fc3c7e758f9f4b26563797f43e7ef)

You may have thought Speed was just a movie. But we're feeling it this week as our world got rocked with a refactoring bringing integrations' speed closer to functionals. Stay at the edge of your seats for the [sequel](https://twitter.com/tenderlove/status/566043497866616832).

## Improved

### [Make enums queryable by label](https://github.com/rails/rails/commit/c51f9b61ce1e167f5f58f07441adcfa117694301)

After an [amazing refactoring job](https://github.com/rails/rails/commit/70ac072976c8cc6f013f0df3777e54ccae3f4f8c) on Active Record internals that took many months, this change was easy. Enums can now be queried by their labels. `Post.where(status: Post.statuses[:draft])` is out in favor of `Post.where(status: :draft)`.

### [`fresh_when` and `stale?` accepts a collection](https://github.com/rails/rails/pull/18374)

They say that `stale?` is everyone's best friend. It will be by you until you get to `fresh_when`. Even if you need help when a collection seems impassable. Look around, [you dingus](https://www.youtube.com/watch?v=cHL62JmVku4#t=33s), your best friends are adaptable.

There's usage examples on the Pull Request.

### [`find_in_batches` got an `end_at` option](https://github.com/rails/rails/pull/12257)

Sometimes you gotta know when the fun oughta stop. Sadly `find_in_batches` and `find_each` would keep going like the party animals they are. Or were, as both matured this week with a new `end_at` option. But they're still keeping it plenty rad in their parents basement if anybody asks.

## One More Thing™

### [Kasper Timm Hansen is an issues team member](https://github.com/kaspth)

Kasper first impressed us when he shipped his 2013 Rails GSoC project in 2014. In his spare time he writes a newsletter called This Week in Rails. In fact he wrote this very issue. Aw shucks, I thought there was something familiar about me and I!

## Wrapping up

This was a weird one, right? Hopefully of the glorious kind.

That's all for _This week in Rails_. As always, there are more changes than we have room to cover here, but feel free to [check them out](https://github.com/rails/rails/commits/master) yourself!

P.S. If you enjoyed this newsletter, why not [share it with your friends](https://rails-weekly.ongoodbits.com)? :) If you wish to be part of this project please don't hesitate to contact [Godfrey](mailto:godfrey@brewhouse.io) – there're a lot of ways you could help make this newsletter more awesome!

