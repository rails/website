---
layout: post
title: Rails 3.0.5 has been released!
categories:
- releases
author: spastorino
published: true
date: 2011-02-27 15:52:00.000000000 +00:00
---
<p>Aaron Patterson showed us some tenderlove this week by releasing Rails <a href="http://rubygems.org/gems/rails/versions/3.0.5">3.0.5</a>. Have a peek at what got updated.</p>
<h2>Bugs Fixed</h2>
<ul>
	<li>Fix when gzip returns a <span class="caps">UTF</span>-8 string on Ruby 1.9, when it is actually binary. <a href="https://github.com/rails/rails/commit/31690ea8b3420aea4ea4427e1599665d093c974f">commit</a></li>
</ul>
<ul>
	<li>Active Record limit values will not escape Arel <span class="caps">SQL</span> Literal nodes. <a href="https://github.com/rails/rails/commit/7530c5224c77202d62f44a26ae5036d1dc00f579">commit</a></li>
</ul>
<ul>
	<li>Relation#where calls will always produce <span class="caps">AND</span> statements regardless of how conditions hashes behaves (<a href="https://github.com/rails/rails/commit/41c35abed778a7a03e7a9c14009321cd6bc11c26">reverting 00693209ecc</a>).</li>
</ul>
<ul>
	<li>Observer callbacks will only be executed once when using <span class="caps">STI</span> classes in ActiveRecord. <a href="https://github.com/rails/rails/commit/ee491b064bff126a67600d694511986b8636d47b">commit</a></li>
</ul>
<h2>Deprecations Added:</h2>
<ul>
	<li>Deprecate Relation#&amp; alias for Relation#merge. <a href="https://github.com/rails/rails/commit/66003f596452aba927312c4218dfc8d408166d54">commit</a></li>
</ul>
<ul>
	<li>Deprecated support for interpolated association conditions with the<br />
   :conditions =&gt; &#8216;foo = #{bar}&#8217; syntax, and added the new interpolation syntax<br />
   which is :conditions =&gt; proc { &#8220;foo = #{bar}&#8221; }. <a href="https://github.com/rails/rails/commit/756e70cb4492ded56b72b1601da7d198eaf7b840">commit</a></li>
</ul>
<p>This is not a complete list of changes.  The complete list of changes can be<br />
found <a href="https://github.com/rails/rails/compare/v3.0.4...v3.0.5">here</a></p>
<h2>SHA1 Checksums:</h2>
<ul>
	<li>actionmailer-3.0.5.gem b25750c8126aa21db27d7b0ee829b2e94e525ebc</li>
</ul>
<ul>
	<li>actionpack-3.0.5.gem 0a6f7f9ac2960ff224c913877a2917e1bea80df3</li>
</ul>
<ul>
	<li>activemodel-3.0.5.gem 1556900a7afa1cdcdf4641edbcdd2c24f98bb2de</li>
</ul>
<ul>
	<li>activerecord-3.0.5.gem 33dd05d7362931564f6f15ea7130cc27a5fc09e8</li>
</ul>
<ul>
	<li>activeresource-3.0.5.gem 758f893cbb7ef945c857bf4ca044b94017bdc437</li>
</ul>
<ul>
	<li>activesupport-3.0.5.gem 195fa3f7fa044134703a655cdb906edb515286c4</li>
</ul>
<ul>
	<li>rails-3.0.5.gem 32322bf9952d76c5fa0054c8533c0c58609f40aa</li>
</ul>
<ul>
	<li>railties-3.0.5.gem 3dddf14736dec991c3dbbe2d89495613e72c19c7</li>
</ul>