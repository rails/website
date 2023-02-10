---
layout: post
title: "Week 05: Spring is here?"
categories: news
author: zzak
published: true
date: 2023-02-03
---

**Hi, it's [zzak](https://github.com/zzak), happy 節分!** I'm *very* excited for spring, this winter has been tough!  
Let's get into this week's changes in the Rails codebase.
  

[Use infinitive form for all task descriptions verbs](https://github.com/rails/rails/pull/47215)  
All the common rails commands and some extended commands use the infinitive form for the verb in the description:
"Generate ...", "Start ...", "Run ...", instead of "Generate**s** ...", "Start**s** ...", "Run**s** ...".
This changes the remaining tasks to use the infinitive form for the verb as well, for consistency.
  

[ActiveRecord::QueryLogs: handle invalid encoding](https://github.com/rails/rails/pull/47214)  
It can sometimes happen that _sql_ is encoded in UTF-8 but contains some invalid binary data of some sort.
When this happens _strip_ ends up raising an _EncodingError_.
  

[Run _test:prepare_ unless exact tests are specified](https://github.com/rails/rails/pull/47210)  
This PR changes _bin/rails test_ to always run _test:prepare_ unless exact tests are specified via path arguments (e.g. _bin/rails test path/to/test.rb_) or a name pattern (e.g. _bin/rails test -n test_foo_).
  

[Deprecate AbstractController::Helpers::MissingHelperError](https://github.com/rails/rails/pull/47199)  
This error used to be a wrapper for a _LoadError_ raised when _require_dependency_ was used to load helpers for controllers.
Since Zeitwerk does not use _require_dependency_, the only usage of this error was removed.
  

[Deprecate ActionDispatch::IllegalStateError](https://github.com/rails/rails/pull/47091)  
This error was intended to be a guard to prevent mutating response headers after the response was already sent.
However, it didn't really fulfill this purpose and was removed to make way for Rack 3 support.
  

**A mountain of CLI and help command fixes**  
[Jonathan Hefner](https://github.com/jonathanhefner) contributed a bunch
of great patches for the Rails CLI.
Including the help text for [secrets](https://github.com/rails/rails/pull/47237),
[encrypted](https://github.com/rails/rails/pull/47236), and
[credentials](https://github.com/rails/rails/pull/47235) commands.
Lastly, all [base](https://github.com/rails/rails/pull/47234)
and [bare namespaced](https://github.com/rails/rails/pull/47211) commands were improved,
and ["Did you mean?"](https://github.com/rails/rails/pull/47208) was added for unrecognized commands!


_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2023-01-27%7D...main@%7B2023-02-03%7D)._  
_We had [24 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20230127-20230203) to the Rails codebase this past week!_

Until next time!  

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
