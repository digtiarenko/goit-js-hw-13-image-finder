import './style/styles.css';
import './templates/result.hbs';
import refs from './js/refs';
import apiService from './js/apiService';
import updateGalleryMarkup from './js/updateMarkUp';
import modal from './js/modal';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const searchQuery = event.currentTarget.elements.query.value;
  apiService.query = searchQuery;

  refs.galleryContainer.innerHTML = '';
  apiService.resetPage();

  refs.loadMoreBtn.classList.add('is-hidden');

  apiService.apiService().then(hits => {
    updateGalleryMarkup(hits);
    console.log(hits);
    if (hits.length !== 0) {
      refs.loadMoreBtn.classList.remove('is-hidden');
    }
  });
});

refs.loadMoreBtn.addEventListener('click', () => {
  apiService.apiService().then(hits => {
    updateGalleryMarkup(hits);

    window.scrollBy({
      top: 1000,
      behavior: 'smooth',
    });
  });
});

// Модалка

refs.galleryContainer.addEventListener('click', () => {
  if (event.target.nodeName === 'IMG') {
    modal();
  }
});
