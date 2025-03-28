---
layout: company
name: makandra
intro: |
  makandra is a Rails consultancy based in Germany. Since 2009, it has delivered over 200 custom web applications across the full software lifecycle — from requirements and UI/UX to development, operations, and maintenance. Clients range from small businesses to global enterprises. Notable projects include Siemens SiESTA (cybersecurity testing), JustClaims (air passenger claims), Audi MediaCenter (press hub), GREENZERO (LCA platform), JUUUPORT (online youth counseling), and Studyflix (video learning platform).

  makandra often maintains applications long-term — some since 2010 are still in active use. From this commitment emerged Rails LTS, a service providing security patches for legacy Rails versions, compatible with modern Ruby. On the infrastructure side, a dedicated DevOps team hosts and manages Rails apps on makandra-owned hardware in a German data center.
logo: /assets/images/logo-makandra.svg
exturl: https://makandra.de
company_type: Private
founded_date: 2009
headquarters: "**Augsburg, Germany**"
employees_range: "50-75"
rails_engineers_range: "25-50"
rails_usage: |
  Around 95% of customer applications developed by makandra are built using Ruby on Rails. In addition, makandra maintains a significant number of internal Rails applications that support daily operations — including tools for CVE tracking, project management, billing, hot desking, lunch booking, secret sharing, knowledge management, private LLM chat, and more.

  Technology choices
  * Most applications follow a monolithic architecture, structured through heavy namespacing.
  * For a consultancy, tests are essential to ensure continuity and preserve knowledge over decades of iteration. makandra mostly uses RSpec, with some islands of Minitest. Great effort has gone into making system tests work reliably — the internally developed capybara-lockstep gem has proven very effective in reducing test flakiness.
  * PostgreSQL is the default for everything: relational data, full-text search, and job queues. Only when the limits of PostgreSQL are reached does makandra adopt more specialized tools such as Redis or Elasticsearch.
  * Frontend: In the 2010s, makandra adopted AngularJS to replace jQuery-based code. When Angular 2 was introduced as a rewrite, a retrospective showed mixed results: some apps benefited from SPAs, but many suffered from complexity, dependencies, and boilerplate. This led makandra to revisit progressive enhancement. makandra developed Unpoly, a framework that simplifies AJAX and DOM work. Inspired by Turbolinks and unobtrusive JavaScript, Unpoly is now used in most projects. That said, makandra remains pragmatic: React or modern Angular are used when needed, but the default remains a server-rendered majestic monolith.
  * Deployment: Most applications are deployed on Linux VMs using Capistrano. Since developer machines and production servers both run Ubuntu LTS, there is usually no strong need for containerization. The in-house hosting platform OpsComplete provides Rails-specific automation for provisioning and deployment.

  Recruiting

  Recruiting Ruby developers has historically been a challenge, especially in a smaller city like Augsburg. makandra addressed this by creating a trainee program where university graduates learn Ruby on Rails and related technologies over a nine-month period before joining client projects. Combined with a strong culture of mentorship and continuous learning, this program has helped build a large team of experienced engineers over the years.

pull_quote: "Joining the Rails Foundation was a huge milestone for us and shows that we are fully behind Ruby on Rails. We are proud to be part of this community and we are determined to do our part to further develop and strengthen the framework."
quote_author: "Thomas Eisenbarth"
quote_title: "makandra CEO and Founder"
member_status: "In 2024, Company became a **contributing member** of the Rails Foundation."
github_contributions:
  - name: "rails"
    url: "https://github.com/rails/rails"
community: |
  [Item to link](https://www.com) - Description of contribution
case_study_blurb: "Check out the case study of how company delivers incredible value to its customers with Rails"
case_study_url: /docs/case-studies/company
---


