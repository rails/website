---
layout: post
title: '[ANN] Rails 3.2.13.rc1 has been released!'
category: releases
author: steveklabnik 
published: true
---

Hey everyone! I am pumped to announce that Rails 3.2.13.rc1 has been released!
If no regressions are found I will release 3.2.13 final in two weeks, on March
13, 2013. If you find one, please [Open an Issue on
GitHub](https://github.com/rails/rails/issues/new) so that I can fix it before
the final release.

This is a bugfix release, with 287 commits. There is one big thing that is
technically a fix but is sort of a feature: Ruby 2.0 support. Big thanks to
Prem Sichanugrist for putting that together! Please give your applications a
try on Ruby 2.0 and let me know how that goes.

## CHANGES since 3.2.12

*Action Mailer*

No changes.

*Action Pack*

*   Determine the controller#action from only the matched path when using the
    shorthand syntax. Previously the complete path was used, which led
    to problems with nesting (scopes and namespaces).
    Fixes #7554.
    Backport #9361.

    Example:

        # this will route to questions#new
        scope ':locale' do
          get 'questions/new'
        end

    *Yves Senn*

*   Fix `assert_template` with `render :stream => true`.
    Fix #1743.
    Backport #5288.

    *Sergey Nartimov*

*   Eagerly populate the http method loookup cache so local project inflections do
    not interfere with use of underscore method ( and we don't need locks )

    *Aditya Sanghi*

*   `BestStandardsSupport` no longer duplicates `X-UA-Compatible` values on
    each request to prevent header size from blowing up.

    *Edward Anderson*

*   Fixed JSON params parsing regression for non-object JSON content.

    *Dylan Smith*

*   Prevent unnecessary asset compilation when using `javascript_include_tag` on
    files with non-standard extensions.

    *Noah Silas*

*   Fixes issue where duplicate assets can be required with sprockets.

    *Jeremy Jackson*

*   Bump `rack` dependency to 1.4.3, eliminate `Rack::File` headers deprecation warning.

    *Sam Ruby + Carlos Antonio da Silva*

*   Do not append second slash to `root_url` when using `trailing_slash: true`

    Fix #8700.
    Backport #8701.

    Example:
        # before
        root_url # => http://test.host//

        # after
        root_url # => http://test.host/

    *Yves Senn*

*   Fix a bug in `content_tag_for` that prevents it for work without a block.

    *Jasl*

*   Clear url helper methods when routes are reloaded by removing the methods
    explicitly rather than just clearing the module because it didn't work
    properly and could be the source of a memory leak.

    *Andrew White*

*   Fix a bug in `ActionDispatch::Request#raw_post` that caused `env['rack.input']`
    to be read but not rewound.

    *Matt Venables*

*   More descriptive error messages when calling `render :partial` with
    an invalid `:layout` argument.

    Fixes #8376.

        render :partial => 'partial', :layout => true
        # results in ActionView::MissingTemplate: Missing partial /true

    *Yves Senn*

*   Accept symbols as `#send_data` :disposition value. [Backport #8329] *Elia Schito*

*   Add i18n scope to `distance_of_time_in_words`. [Backport #7997] *Steve Klabnik*

*   Fix side effect of `url_for` changing the `:controller` string option. [Backport #6003]
    Before:

        controller = '/projects'
        url_for :controller => controller, :action => 'status'

        puts controller #=> 'projects'

    After

        puts controller #=> '/projects'

    *Nikita Beloglazov + Andrew White*

*   Introduce `ActionView::Template::Handlers::ERB.escape_whitelist`. This is a list
    of mime types where template text is not html escaped by default. It prevents `Jack & Joe`
    from rendering as `Jack &amp; Joe` for the whitelisted mime types. The default whitelist
    contains text/plain. Fix #7976 [Backport #8235]

    *Joost Baaij*

*   `BestStandardsSupport` middleware now appends it's `X-UA-Compatible` value to app's
    returned value if any. Fix #8086 [Backport #8093]

    *Nikita Afanasenko*

*   prevent double slashes in engine urls when `Rails.application.default_url_options[:trailing_slash] = true` is set
    Fix #7842

    *Yves Senn*

*   Fix input name when `:multiple => true` and `:index` are set.

    Before:

        check_box("post", "comment_ids", { :multiple => true, :index => "foo" }, 1)
        #=> <input name=\"post[foo][comment_ids]\" type=\"hidden\" value=\"0\" /><input id=\"post_foo_comment_ids_1\" name=\"post[foo][comment_ids]\" type=\"checkbox\" value=\"1\" />

    After:

        check_box("post", "comment_ids", { :multiple => true, :index => "foo" }, 1)
        #=> <input name=\"post[foo][comment_ids][]\" type=\"hidden\" value=\"0\" /><input id=\"post_foo_comment_ids_1\" name=\"post[foo][comment_ids][]\" type=\"checkbox\" value=\"1\" />

    Fix #8108

    *Daniel Fox, Grant Hutchins & Trace Wax*

*Active Model*

*   Specify type of singular association during serialization *Steve Klabnik*

*Active Record*

*   Reverted 921a296a3390192a71abeec6d9a035cc6d1865c8, 'Quote numeric values
    compared to string columns.' This caused several regressions.

    *Steve Klabnik*

*   Fix overriding of attributes by default_scope on `ActiveRecord::Base#dup`.

    *Hiroshige UMINO*

*   Fix issue with overriding Active Record reader methods with a composed object
    and using that attribute as the scope of a `uniqueness_of` validation.
    Backport #7072.

    *Peter Brown*

*   Sqlite now preserves custom primary keys when copying or altering tables.
    Fixes #9367.
    Backport #2312.

    *Sean Scally + Yves Senn*

*   Preloading `has_many :through` associations with conditions won't
    cache the `:through` association. This will prevent invalid
    subsets to be cached.
    Fixes #8423.
    Backport #9252.

    Example:

        class User
          has_many :posts
          has_many :recent_comments, -> { where('created_at > ?', 1.week.ago) }, :through => :posts
        end

        a_user = User.includes(:recent_comments).first

        # this is preloaded
        a_user.recent_comments

        # fetching the recent_comments through the posts association won't preload it.
        a_user.posts

    *Yves Senn*

*   Fix handling of dirty time zone aware attributes

    Previously, when `time_zone_aware_attributes` were enabled, after
    changing a datetime or timestamp attribute and then changing it back
    to the original value, `changed_attributes` still tracked the
    attribute as changed. This caused `[attribute]_changed?` and
    `changed?` methods to return true incorrectly.

    Example:

        in_time_zone 'Paris' do
          order = Order.new
          original_time = Time.local(2012, 10, 10)
          order.shipped_at = original_time
          order.save
          order.changed? # => false

          # changing value
          order.shipped_at = Time.local(2013, 1, 1)
          order.changed? # => true

          # reverting to original value
          order.shipped_at = original_time
          order.changed? # => false, used to return true
        end

    Backport of #9073
    Fixes #8898

    *Lilibeth De La Cruz*

*   Fix counter cache columns not updated when replacing `has_many :through`
    associations.
    Backport #8400.
    Fix #7630.

    *Matthew Robertson*

*   Don't update `column_defaults` when calling destructive methods on column with default value.
    Backport c517602.
    Fix #6115.

    *Piotr Sarnacki + Aleksey Magusev + Alan Daud*

*   When `#count` is used in conjunction with `#uniq` we perform `count(:distinct => true)`.
    Fix #6865.

    Example:

      relation.uniq.count # => SELECT COUNT(DISTINCT *)

    *Yves Senn + Kaspar Schiess*

*   Fix `ActiveRecord::Relation#pluck` when columns or tables are reserved words.
    Backport #7536.
    Fix #8968.

    *Ian Lesperance + Yves Senn + Kaspar Schiess*

*   Don't run explain on slow queries for database adapters that don't support it.
    Backport #6197.

    *Blake Smith*

*   Revert round usec when comparing timestamp attributes in the dirty tracking.
    Fixes #8460.

    *Andrew White*

*   Revert creation of through association models when using `collection=[]`
    on a `has_many :through` association from an unsaved model.
    Fix #7661, #8269.

    *Ernie Miller*

*   Fix undefined method `to_i` when calling `new` on a scope that uses an
    Array; Fix FloatDomainError when setting integer column to NaN.
    Fixes #8718, #8734, #8757.

    *Jason Stirk + Tristan Harward*

*   Serialized attributes can be serialized in integer columns.
    Fix #8575.

    *Rafael Mendonça França*

*   Keep index names when using `alter_table` with sqlite3.
    Fix #3489.
    Backport #8522.

    *Yves Senn*

*   Recognize migrations placed in directories containing numbers and 'rb'.
    Fix #8492.
    Backport of #8500.

    *Yves Senn*

*   Add `ActiveRecord::Base.cache_timestamp_format` class attribute to control
    the format of the timestamp value in the cache key.
    This allows users to improve the precision of the cache key.
    Fixes #8195.

    *Rafael Mendonça França*

*   Add `:nsec` date format. This can be used to improve the precision of cache key.
    Please note that this format only works with Ruby 1.9, Ruby 1.8 will ignore it completely.

    *Jamie Gaskins*

*   Unscope `update_column(s)` query to ignore default scope.

    When applying `default_scope` to a class with a where clause, using
    `update_column(s)` could generate a query that would not properly update
    the record due to the where clause from the `default_scope` being applied
    to the update query.

        class User < ActiveRecord::Base
          default_scope where(active: true)
        end

        user = User.first
        user.active = false
        user.save!

        user.update_column(:active, true) # => false

    In this situation we want to skip the default_scope clause and just
    update the record based on the primary key. With this change:

        user.update_column(:active, true) # => true

    Backport of #8436 fix.

    *Carlos Antonio da Silva*

*   Fix performance problem with primary_key method in PostgreSQL adapter when having many schemas.
    Uses pg_constraint table instead of pg_depend table which has many records in general.
    Fix #8414

    *kennyj*

*   Do not instantiate intermediate Active Record objects when eager loading.
    These records caused `after_find` to run more than expected.
    Fix #3313
    Backport of #8403

    *Yves Senn*

*   Fix `pluck` to work with joins. Backport of #4942.

    *Carlos Antonio da Silva*

*   Fix a problem with `translate_exception` method in a non English environment.
    Backport of #6397.

    *kennyj*

*   Fix dirty attribute checks for TimeZoneConversion with nil and blank
    datetime attributes. Setting a nil datetime to a blank string should not
    result in a change being flagged.
    Fixes #8310.
    Backport of #8311.

    *Alisdair McDiarmid*

*   Prevent mass assignment to the type column of polymorphic associations when using `build`.
    Fixes #8265.
    Backport of #8291.

    *Yves Senn*

*   When running migrations on Postgresql, the `:limit` option for `binary` and `text` columns is
    silently dropped.
    Previously, these migrations caused sql exceptions, because Postgresql doesn't support limits
    on these types.

    *Victor Costan*

*   `#pluck` can be used on a relation with `select` clause.
    Fixes #7551.
    Backport of #8176.

    Example:

        Topic.select([:approved, :id]).order(:id).pluck(:id)

    *Yves Senn*

*   Use `nil?` instead of `blank?` to check whether dynamic finder with a bang
    should raise RecordNotFound.
    Fixes #7238.

    *Nikita Afanasenko*

*   Fix deleting from a HABTM join table upon destroying an object of a model
    with optimistic locking enabled.
    Fixes #5332.

    *Nick Rogers*

*   Use query cache/uncache when using ENV["DATABASE_URL"].
    Fixes #6951.
    Backport of #8074.

    *kennyj*

*   Do not create useless database transaction when building `has_one` association.

    Example:

        User.has_one :profile
        User.new.build_profile

    Backport of #8154.

    *Bogdan Gusiev*

*   `AR::Base#attributes_before_type_cast` now returns unserialized values for serialized attributes.

    *Nikita Afanasenko*

*   Fix issue that raises `NameError` when overriding the `accepts_nested_attributes` in child classes.

    Before:

        class Shared::Person < ActiveRecord::Base
          has_one :address

          accepts_nested_attributes :address, :reject_if => :all_blank
        end

        class Person < Shared::Person
          accepts_nested_attributes :address
        end

        Person
        #=> NameError: method `address_attributes=' not defined in Person

    After:

        Person
        #=> Person(id: integer, ...)

    Fixes #8131.

    *Gabriel Sobrinho, Ricardo Henrique*

*Active Resource*

No changes.

*Active Support*

*   Fix DateTime comparison with DateTime::Infinity object.

    *Dan Kubb*

*   Remove surrogate unicode character encoding from ActiveSupport::JSON.encode
    The encoding scheme was broken for unicode characters outside the basic
    multilingual plane; since json is assumed to be UTF-8, and we already force the
    encoding to UTF-8 simply pass through the un-encoded characters.

    *Brett Carter*

*   Fix mocha v0.13.0 compatibility. *James Mead*

*   `#as_json` isolates options when encoding a hash. [Backport #8185]
    Fix #8182

    *Yves Senn*

*   Handle the possible Permission Denied errors atomic.rb might trigger due to
    its chown and chmod calls. [Backport #8027]

    *Daniele Sluijters*

*Railties*

No changes.

*Full listing* 

To see the full list of changes, [check out all the commits on
GitHub](https://github.com/rails/rails/compare/v3.2.12...v3.2.13.rc1).

## SHA-1

If you'd like to verify that your gem is the same as the one I've uploaded,
please use these SHA-1 hashes:

* `6a33c2d10abb5512499addb675df658e179f2e79`  actionmailer-3.2.13.rc1.gem
* `11d8303470698c5b0ac68f187a15093c07383c89`  actionpack-3.2.13.rc1.gem
* `a72dafd8b1e3372cc4dda9015b93bf5509b25baa`  activemodel-3.2.13.rc1.gem
* `3c6463ab11658b5ab0fe6a4ad06eb52968ef4492`  activerecord-3.2.13.rc1.gem
* `06cec200b95dc1f64614cd03432e9ab06742a865`  activeresource-3.2.13.rc1.gem
* `5ff59cacae5295baf30a6fb8fb656037f22af3c2`  activesupport-3.2.13.rc1.gem
* `facf4549445922d9dc2a836283ae928fa52df4f8`  rails-3.2.13.rc1.gem
* `55e44f621efbf531d9ccade6d27259f7dabae167`  railties-3.2.13.rc1.gem

<3<3<3

