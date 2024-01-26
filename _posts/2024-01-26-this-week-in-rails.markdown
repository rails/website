---
layout: post
title: "Customized console prompt and bugfixes"
categories: news
author: Wojtek
og_image: assets/images/this-week-in-rails.png
published: true
date: 2024-01-26
---


Hi, [Wojtek](https://twitter.com/morgoth85) from this side with a short set of changes in the Rails codebase.

[Add customized prompt for Rails console](https://github.com/rails/rails/pull/50796)  
Rails console now indicates the current Rails environment with the name and color (red for production).

[Fix rotation detection for HDR videos](https://github.com/rails/rails/pull/50854)  
This fix removes the positional reference on *side_data* and explicitly searches for the "Display Matrix" property to retrieve the rotation angle.

[Consistently raise an ArgumentError when passing an invalid argument to a nested attributes association writer](https://github.com/rails/rails/pull/50804)  
 Previously, this would only raise on collection associations and produce a generic error on singular associations. Now, it will raise on both collection and singular associations.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2024-01-19%7D...main@%7B2024-01-26%7D)._
_We had [23 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20240119-20240126) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
