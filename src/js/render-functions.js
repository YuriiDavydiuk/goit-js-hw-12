import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const list = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.js-load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(img => {
      return `<li class="gallery-item">
          <a href="${img.largeImageURL}">
            <img
              src="${img.webformatURL}"
              alt="${img.tags}"
            />
          </a>
          <div class="info">
            <p><b>Likes</b> ${img.likes}</p>
            <p><b>Views</b> ${img.views}</p>
            <p><b>Comments</b> ${img.comments}</p>
            <p><b>Downloads</b> ${img.downloads}</p>
          </div>
        </li>
      `;
    })
    .join('');

  list.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  list.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('is-visible');
}
export function hideLoader() {
  loader.classList.remove('is-visible');
}

export function showLoadMoreButton() {
  loadMore.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  loadMore.classList.add('is-hidden');
}
