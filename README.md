# The Ruby on Rails Website

This repository generates what goes on the <https://rubyonrails.org> website.

## Contributions

If you notice spelling mistakes, or the latest version marker being out of sync, please do submit a pull request.

We do not, however, take pull requests for updating the list of highlighted Rails applications.

## Development

1. `bundle install`
2. `bundle exec jekyll serve --livereload`
3. Go to `http://localhost:4000/`

Note for local dev: The Jekyll redirect plugin is broken, so if you experience a redirect loop on any given page alternating between a string ending with and without a `/`, disable `- jekyll-redirect-from` in `_config.yml` and the page will load. The server will not be able to tell `/docs/` from `/docs` so if you experience a 404, remove or add the trailing `/`. Please be sure to NOT commit this change during your development work.