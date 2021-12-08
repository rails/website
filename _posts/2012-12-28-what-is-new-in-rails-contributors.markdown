---
layout: post
title: What Is New in Rails Contributors
category: praise
author: fxn
published: true
---

## What is Rails Contributors?

[Rails Contributors](http://contributors.rubyonrails.org) is a website that keeps track of all contributions made to the Ruby on Rails code base.

The application tries hard to give credit as accurately as possible, which is something you cannot do with `git log`. For example, according to Git the author of [this commit](https://github.com/rails/rails/commit/ef91cddb48d1fa8d1a34e8e5ac68fe9eb56c160f) is "@schneems and @mattt", but you do not want to credit "@schneems and @mattt" right? Rails Contributors automatically splits the string, applies [mappings](https://github.com/fxn/rails-contributors/blob/master/app/models/names_manager.rb), and gives credit both to Richard Schneeman, and Mattt Thompson.

Known typos, emails, and handles are associated to a canonical name to have everything aggregated per contributor rather than scattered in several unrelated listings. Heuristics also capture contributors from commit messages, and even from CHANGELOGs in the diff of commits imported from Subversion.

The purpose of all this work is to give credit, provide visibility to your contributions to Rails, and last but not least, to say thank you.

## What Is New?

A new version of the website has just been published, changes are:

* More mappings: the application knows about [more mappings and false positives](https://github.com/fxn/rails-contributors/blob/master/app/models/names_manager.rb).

* New page for releases: There is a [new shiny page for releases](http://contributors.rubyonrails.org/releases) where you can see who contributed what in any of them. The breakdown is approximate for old releases, since all we have from Subversion is the Git history. Commits are classified with `git rev-list`.

* Better Unicode handling: Some names with non-ASCII characters came up from Git using different UTF8 byte representations. The application applies now NFC normalization thoroughly to address that.

* Robust commit import: about one thousand commits were missing in the previous version because they were unreachable from the branch tips due to rarities in the git history. The commit importer is now more aggressive looking for commits.

* Credit for Rails core in Subversion commits: Rails used Subversion in about its first four years. Subversion does not distinguish author and committer, you only have the committer. If the application determines that the author is not the committer using its heuristics, the committer now gets also credited. This is fair with what happens nowadays, where the committer gets credited by his work on a pull request via the merge commit.

* Internal changes: A lot of work has no external visibility indeed, you know. We migrated from [grit](https://github.com/mojombo/grit) to [rugged](https://github.com/libgit2/rugged), and there were significant refactors and speedups.

Enjoy!
