/**
 * loadMorePosts.js
 *
 * This script enhances the blog pagination functionality by dynamically loading
 * more posts when the "See more posts" button is clicked, without refreshing the page.
 * It fetches the next page of posts via AJAX and appends them to the existing list.
 * Additionally, it updates the URL to reflect the current page state using the History API.
 *
 */

document.addEventListener('DOMContentLoaded', function () {
  const loadMoreLink = document.getElementById('loadMorePosts');

  if (loadMoreLink) {
    loadMoreLink.addEventListener('click', function (event) {
      event.preventDefault();

      const nextPage = this.getAttribute('href');

      fetch(nextPage)
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(data, 'text/html');
          const newPostsContainer = doc.querySelector('#blogPosts');
          const newNextPageLink = doc.querySelector('#loadMorePosts');

          // Check if newPostsContainer exists
          if (newPostsContainer) {
            const newPosts = newPostsContainer.innerHTML;

            // Append new posts
            document
              .getElementById('blogPosts')
              .insertAdjacentHTML('beforeend', newPosts);
          } else {
            throw new Error('New posts container not found.');
          }

          // Update the URL using history.pushState
          history.pushState(
            null,
            '',
            nextPage.endsWith('/') ? nextPage : nextPage + '/'
          );

          // Update next page link or remove it if no more pages
          if (newNextPageLink) {
            this.setAttribute('href', newNextPageLink.getAttribute('href'));
          } else {
            this.remove();
          }
        })
        .catch((error) => console.error('Error loading more posts:', error));
    });
  }

  // Treat back/forward navigation as a page reload to fetch the correct page w/ 10 posts
  window.addEventListener('popstate', function () {
    window.location = window.location.href;
  });
});
