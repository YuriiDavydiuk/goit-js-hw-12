import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const loadMore = document.querySelector('.js-load-more');

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;

form.addEventListener('submit', handleSubmit);
loadMore.addEventListener('click', onLoadMore);

async function handleSubmit(event) {
  event.preventDefault();

  const inputValue = event.target.elements['search-text'].value.trim();

  if (!inputValue) {
    iziToast.error({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  currentQuery = inputValue;
  currentPage = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
    checkEndOfCollection();
  } catch (error) {
    iziToast.error({
      message: error.message,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
  event.target.reset();
}

async function onLoadMore() {
  currentPage += 1;
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    createGallery(data.hits);
    smoothScroll();
    checkEndOfCollection();
  } catch (error) {
    iziToast.error({
      message: error.message,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

function checkEndOfCollection() {
  const loadedCount = currentPage * 15;

  if (loadedCount >= totalHits) {
    hideLoadMoreButton();
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
  } else {
    showLoadMoreButton();
  }
}

function smoothScroll() {
  const card = document.querySelector('.gallery-item');

  if (!card) return;
  const cardHeight = card.getBoundingClientRect().height;
  window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
}
