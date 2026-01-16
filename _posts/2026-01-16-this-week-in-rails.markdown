---
layout: post
title: "Error-aware retry_on, PostgreSQL type mappings, and more!"
categories: news
author: Emmanuel Hayford
og_image: assets/images/this-week-in-rails.png
published: true
date: 2026-01-16
---

Hi, it's [Emmanuel Hayford](https://hayford.dev/). Here's a look at the highlights from this week's updates to the Rails codebase.

[Allow retry_on wait procs to accept error as a second argument](https://github.com/rails/rails/pull/56601)
This PR adds support for `retry_on` wait procs to optionally receive the error as a second argument, enabling dynamic retry strategies based on error properties.

```ruby
class RemoteServiceJob < ActiveJob::Base
  retry_on CustomError, wait: ->(executions, error) { error.retry_after || executions * 2 }

  def perform
    # ...
  end
end
```

Procs with arity 0 or 1 continue to receive only the execution count, maintaining backwards compatibility.

[Make CSRF header-only protection compatible with local installs using HTTP](https://github.com/rails/rails/pull/56580)
This change allows requests with missing `Sec-Fetch-Site` headers if they happen over HTTP and the app is not configured to force SSL. The `Origin` check always happens in any case.

[Remove X-XSS-Protection from default headers](https://github.com/rails/rails/pull/56564)
The `X-XSS-Protection` header has been removed from the default headers as modern browsers no longer support it.

[Deprecate protect_from_forgery without explicit strategy](https://github.com/rails/rails/pull/56561)
When `protect_from_forgery` is called without arguments, it defaults to `:null_session`. However, when `config.action_controller.default_protect_from_forgery` is enabled, it uses `:exception`. This inconsistency is now deprecated to encourage explicit strategy declaration.

[Wrap setting ActionController::Live config in load hook](https://github.com/rails/rails/pull/56558)
This change wraps the `ActionController::Live` configuration setting in a load hook, ensuring proper initialization timing.

[Add PostgreSQLAdapter.register_type_mapping](https://github.com/rails/rails/pull/56496)
Gems adding types to PostgreSQL (like PostGIS or pgvector) previously had to monkey-patch the adapter. This PR adds a cleaner public interface for registering custom type mappings.

[Override inspect in Combined, Env & Encrypted Configurations](https://github.com/rails/rails/pull/56471)
Previously, inspecting configuration objects would expose all sensitive data including ENV variables and credentials. Now only key names are shown:

```ruby
# Before
Rails.app.creds
#<ActiveSupport::CombinedConfiguration:0x... @configurations=[... "SOME_SECRET" => "secret_value" ...]>

# After
Rails.app.creds
#<ActiveSupport::CombinedConfiguration:0x... keys=[:rails_env, :some_secret, :secret_key_base]>
```

[Memoize IAM client and set authorization to ADC for GCS Active Storage service](https://github.com/rails/rails/pull/56012)
This PR restores the previous behaviour where Application Default Credentials (ADC) is used when `iam: true` is set, while avoiding excessive ADC calls by memoizing the client. Calls are only made at instantiation time and when credentials expire.

[Make ActiveStorage::Service responsible for checksums](https://github.com/rails/rails/pull/54468)
S3, GCS, and Azure all support file integrity checksums beyond MD5, which cannot be used in FIPS-compliant environments. This PR moves checksum calculation to the storage service class, enabling support for additional algorithms like SHA256 for the S3 service, including direct uploads.

[Deprecate built-in ActiveJob backburner adapter](https://github.com/rails/rails/pull/53334)
As part of the ongoing cleanup of legacy adapters from Active Job, the built-in Backburner adapter has been deprecated.

_You can view the whole list of changes [here](https://github.com/rails/rails/compare/@%7B2026-01-02%7D...main@%7B2026-01-16%7D)._
_We had [36 contributors](https://contributors.rubyonrails.org/contributors/in-time-window/20260102-20260116) to the Rails codebase this past week!_

Until next time!

_[Subscribe](https://world.hey.com/this.week.in.rails) to get these updates mailed to you._
