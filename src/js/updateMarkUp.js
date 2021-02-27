import resultTmp from '../templates/result.hbs';
import refs from '../js/refs';

function updateGalleryMarkup(hits) {
  const markup = resultTmp(hits);
  refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateGalleryMarkup;
