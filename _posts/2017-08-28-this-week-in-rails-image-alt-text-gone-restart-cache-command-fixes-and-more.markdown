---
layout: post
title: "Image alt text gone, restart/cache command fixes and more!"
categories: news
author: vipulnsward
published: true
date: 2017-08-28
---

Hello everyone!   
This is [Vipul](https://www.bigbinary.com/team/vipul) from Rainy Pune ☔ , cozying up with a ☕, bringing you a recap of the changes&nbsp; that made it to Rails this week.   
If you too want to contribute to Rails, head over to the [issues](https://github.com/rails/rails/issues) to help us out!

### [Do not generate default alt text in image tags](https://github.com/rails/rails/commit/9a74c7b99bf0ac901f86bb38372a68e157cf9c73)

Previously Rails auto-generated alt text for an image from the file name if it was not provided with an `image_tag`.
This generation could be distracting and fatiguing for screen reader users if not considered properly.  
  
After this change, if authors leave images without alt text, Rails will not pre fill it anymore, leaving screen readers to prompt authors to fix the issue.

### [Prevent extra "SET time zone" in configure_connection](https://github.com/rails/rails/pull/28413)

Previously Rails would end up setting database connection timezone twice, once if passed via configuration in `configure_connection` and secondly while setting default timezone.  
  
This change removes setting timezone on database twice if timezone is already passed via configuration variables.

### [Add TransactionTimeout for MySQL error code 1205](https://github.com/rails/rails/pull/30360)

This PR adds TransactionTimeout error to the MySQL adapter, which handles the error:   
`Lock wait timeout exceeded; try restarting transaction (MySQL error 1205)`
  


### [Encode Content-Disposition filenames according to RFC 2231  in Active Storage ](https://github.com/rails/rails/commit/63395aba5a96cf7f915ac97c2ac1c42f58a9a850)

Before this change, urls for files with non-english names would create issues in Active Storage.  
  
This change fixes encoding `Content-Disposition` for filenames to RFC 2231, to fix this issue.

### [Cookie expiry enforced server-side for signed/encrypted cookies](https://github.com/rails/rails/pull/30121)

For signed/encrypted cookies with ``:expires` like

```ruby  
cookies.signed[:user_name] = { value: "bob", expires: 2.hours }
```  
  
Rails now embeds the expiry within the written cookie payload. This way Rails isn't reliant on clients to honor the expiry, but can verify it independently server-side.

### [Make `restart` and `dev:cache` tasks work when customizing pid file path](https://github.com/rails/rails/commit/2904ee23bfc1a442b801f0d35e8e49d51a6d47b6)

Previously `rails dev:cache` failed to restart the Rails server when it was started with a custom pid file path.   
With this change, restart no longer fails for a custom pid file and successfully restarts Rails server on `dev:cache` changes.

### [Fix `can't modify frozen String` error in `display_image` ](https://github.com/rails/rails/commit/1fe777ef778ee8de88094cef2ff85363648ade51)

This change does a quick fix for an error with `display_image` in System tests, which is used for screenshots, that used to raise an error when trying to modify a frozen string.

### [Fixes :inverse_of association option not working with eager_loading ](https://github.com/rails/rails/commit/1a723c65bbe91ad969b67416233d20eff6d2a46a)

Previously calling an `eager_load` on `:inverse_of` association failed.
This was a regression from Rails 5.1 release.&nbsp;  
  
This change, fixes the regression.

That's all for this week! Feel free to check the full [list of commits](https://github.com/rails/rails/compare/master@%7B2017-08-20%7D...@%7B2017-08-26%7D) if you are interested. Until next week!
