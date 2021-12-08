---
layout: post
title: ! 'Edge Rails: PATCH is the new primary HTTP method for updates'
categories:
- edge
author: fxn
published: true
date: 2012-02-26 01:54:00.000000000 +00:00
---
## What is PATCH?

The HTTP method PUT means resource _creation_ or _replacement_ at some given URL.

Think files, for example. If you upload a file to S3 at some URL, you want
either to create the file at that URL or replace an existing file if there's
one. That is PUT.

Now let's say a web application has an `Invoice` model with a `paid` flag that
indicates whether the invoice has been paid. How do you set that flag in a
RESTful way? Submitting `paid=1` via PUT to `/invoices/:id` does not conform to
HTTP semantics, because such request would not be sending a _complete representation_ of the invoice _for replacement_.

With the constraints of the methods GET, POST, PUT, DELETE, the traditional answer
is to define the paid flag of a given invoice to be a resource by itself. So,
you define a route to be able to PUT `paid=1` to `/invoices/:id/paid`. You have
to do that because PUT does not allow _partial updates_ to a resource.

Now let's think about ordinary edit forms in typical Ruby on Rails applications.
How many times are we sending a complete representation for replacement? Not
always, perhaps we could say that it is even rare in practice that you do so.
For example, the conventional `created_at` and `updated_at` timestamps normally
can't be set by end-users, though they are often considered to belong to the
representation of resources that map to records.

PUT in addition is an _idempotent_ method. You should be able to replay a request
as many times as you want and get the same resource, something that sometimes
is violated by conventional idioms for creating children resources using
nested attributes while updating a parent resource.

There's nothing theoretical preventing PUT from doing partial updates, but when
HTTP was being standarized the replacement semantics were already deployed.

Because of that, the [PATCH](http://www.rfc-editor.org/rfc/rfc5789.txt) method was defined in 1995 and standarized later.
PATCH is a method that is not safe,
nor idempotent, and allows _full and partial updates_ and _side-effects on other resources_.

In practice, as you see, PATCH suits everyday web programming way better than
PUT for updating resources. In Ruby on Rails it corresponds naturally to the way
we use `update_attributes` for updating records.

Thus, PATCH is going to be the primary method for updates in Rails 4.0.

## Routing

This is an important change, but we plan to do it in a way that is backwards
compatible.

When a resource is declared in _config/routes.rb_, for example,

    resources :users

the action in `UsersController` to update a user is still `update` in Rails 4.0.

PUT requests to `/users/:id` in Rails 4.0 get routed to `update` as they are
today. So, if you have an API that gets real PUT requests it is going to work.

In Rails 4.0, though, the router also routes PATCH requests to `/users/:id` to
the `update` action.

So, in Rails 4.0 both PUT and PATCH are routed to `update`.

## Forms

Forms of persisted resources:

    form_for @user

get "patch" in the hidden field "_method". The RFC is deliberately vague about
the way to represent changes in a PATCH request. Submitting a form is
perfectly valid, client and server must simply agree on the accepted ways
to update a resource.

Let me emphasize that the "_method" hack is a workaround for the limitations in
web browsers. As you probably know Rails routes real HTTP methods. That is, actual
PUT, DELETE, and now, PATCH requests are routed to their respective actions.

## General availability

PATCH requests are available in all places where the rest of the methods are
available today. There is a `patch` macro for the routes DSL, `:via` understands
the symbol `:patch`. Tests can issue PATCH requests, request objects respond to
`patch?`, etc. Please see the [original commit](https://github.com/rails/rails/commit/002713c64568114f3754799acc0723ea0d442f7a) for details (with an important
followup [here](https://github.com/rails/rails/commit/b7a094536de6fdeb428aa79d21f1e2128169f45e)).

## Will my web server understand PATCH?

Yes, it should. I have personally tried Apache, nginx, Phusion Passenger,
Unicorn, Thin, and WEBrick. They all understood PATCH requests out of the box.

Also, HTTP clients should be in general able to issue PATCH requests. For example
in curl(1) you'd execute:

    curl -d'user[name]=wadus' -X PATCH http://localhost:3000/users/1

## Credits

We would like to thank [David Lee](https://github.com/dlee) for this
contribution and endless patience to keep interested in this even [after months
of discussion](https://github.com/rails/rails/pull/505).

Also I would like to
highlight the quality of the patch itself. It is excellent: code, tests, all
docs revised, comments in code revised. Everything carefully and
thoroughly updated. [An exemplar patch](https://github.com/rails/rails/commit/002713c64568114f3754799acc0723ea0d442f7a).