# The Ruby on Rails Website

This repository generates what goes on the <https://rubyonrails.org> website.

## Contributions

If you notice spelling mistakes, or the latest version marker being out of sync, please do submit a pull request.

We do not, however, take pull requests for updating the list of highlighted Rails applications.

## Development

1. `bundle install`
2. `bundle exec jekyll serve --livereload`
3. Go to `http://localhost:4000/`

> [!NOTE]
> The Jekyll redirect plugin is broken in development, so if you experience a redirect loop on any page (alternating between URLs with and without a trailing `/`), disable `- jekyll-redirect-from` in `_config.yml` and the page will load. Note that the server won't distinguish between `/docs/` and `/docs`, so if you get a 404, try adding or removing the trailing `/`. Please don't commit this change during development.
