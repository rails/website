---
layout: post
title: Database-agnostic schemas with migrations
categories: []
author: admin
published: true
date: 2005-09-27 07:45:09.000000000 +01:00
---
<pre><code>
ActiveRecord::Schema.define(:version =&gt; 8) do
  create_table "authors" do |t|
    t.column "name", :string
    t.column "ip", :string
    t.column "book_id", :integer
  end
 
  create_table "books" do |t|
    t.column "name", :string
    t.column "url_name", :string
    t.column "existing_page_titles", :text
    t.column "premiere", :integer, :limit =&gt; 1, :default =&gt; "0"
  end
 
  create_table "pages" do |t|
    t.column "title", :string
    t.column "book_id", :integer
    t.column "created_at", :datetime
    t.column "updated_at", :datetime
  end
 
  create_table "versions" do |t|
    t.column "page_id", :integer
    t.column "author_id", :integer
    t.column "created_at", :datetime
    t.column "body", :text
    t.column "book_id", :integer
  end
end
</pre><p></code></p>