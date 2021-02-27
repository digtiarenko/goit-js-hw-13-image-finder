import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/src/styles/main.scss';

function modal() {
  const largeURL = event.target.dataset.url;
  //   console.log(`Ссылка`, largeURL);
  const ImageInstance = basicLightbox.create(`<img src = "${largeURL}">`);
  ImageInstance.show();
}

export default modal;
