---
layout: post
title: ! 'Rails 1.2 RC1: New in ActiveRecord'
categories:
- releases
author: josh
published: true
date: 2006-11-26 16:19:00.000000000 +00:00
---
Here are some of the smaller yet notable features in the Rails 1.2 release of ActiveRecord made since the 1.1 release. (compiled by [Josh Susser](http://blog.hasmanythrough.com)).

# Finding
**Added simple hash conditions to #find** that will just convert a hash to an equality/AND-based condition string. Example:

    Person.find(:all, :conditions => { :last_name => "Catlin", :status => 1 })

...is the same as:

    Person.find(:all, :conditions => [ "last_name = ? and status = ?", "Catlin", 1 ])

This makes it easier to pass in the options from a form or otherwise outside.

**Added `find_or_initialize_by_X`** which works like `find_or_create_by_X` but doesn't save the newly instantiated record.

Records and arrays of records are bound as quoted ids.

    Foo.find(:all, :conditions => ['bar_id IN (?)', bars])
    Foo.find(:first, :conditions => ['bar_id = ?', bar])


# Associations

**Allow `:uniq => true` with `has_many :through` associations**.  This is equivalent to doing a SELECT DISTINCT in SQL, but it is done in Ruby code instead.

**Add records to `has_many :through` using <<, push, and concat** by creating the join model record. Raise if base or associate are new records since both ids are required to create the association. #build raises an error since you can't associate an unsaved record. #create! takes an attributes hash and creates both the associated record and its join model record in a transaction.

For example:

    # before:
    post.taggings.create!(:tag => Tag.find_by_name('finally')
    # after:
    post.tags << Tag.find_by_name('finally')

And:

    # before:
    transaction { post.taggings.create!(:tag => Tag.create!(:name => 'general')) }
    # after:
    post.tags.create! :name => 'general'

**Add #delete support** to `has_many :through` associations.

**`has_one` supports the :dependent options** :destroy, :delete, and :nullify.


# Misc
**Support for row-level locking**, using either the :lock finder option or the #lock! method.  See ActiveRecord::Locking::Pessimistic docs for details.

    # Obtain an exclusive lock on person 1 so we can safely increment visits.
    Person.transaction do
      # SELECT * FROM people WHERE id=1 FOR UPDATE
      person = Person.find(1, :lock => true)
      person.visits += 1
      person.save!
    end