import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImage } from './js/pixabay-api';
import { renderGallery } from './js/render-functions.js';

const iziToastOptions = {
  messageColor: '#FAFAFB',
  messageSize: '16px',
  backgroundColor: '#EF4040',
  transitionIn: 'bounceInLeft',
  position: 'topRight',
  displayMode: 'replace',
  closeOnClick: true,
};

export const refs = {
  form: document.querySelector('.form'),
  btn: document.querySelector('.form-button'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const userInput = e.target.elements.image.value.trim();

  refs.gallery.innerHTML =
    '<p class ="loader-text">Wait, the image is loaded</p><span class="loader"></span>';

  getImage(userInput)
    .then(images => {
      if (!userInput || images.length === 0) {
        iziToast.show({
          ...iziToastOptions,
          message: 'No images found. Try a different search term!',
        });
        refs.gallery.innerHTML = '';
        return;
      }
      renderGallery(images);
    })
    .catch(err => {
      iziToast.show({
        ...iziToastOptions,
        message: 'Oops! Something went wrong. Please try again later.',
      });
      console.log(err);
    });
});

// ! ==========================================================
// import { imagesTemplate } from './js/render-functions.js';

// const lightbox = new SimpleLightbox('.gallery a', {
//   captions: true,
//   captionsData: 'alt',
//   captionDelay: 250,
//   overlayOpacity: 0.8,
// });

// getImage(userInput)
//   .then(images => {
//     if (!userInput || images.length === 0) {
//       iziToast.show({
//         ...iziToastOptions,
//         message: 'No images found. Try a different search term!',
//       });
//       return;
//     }
//     const markup = imagesTemplate(images);
//     refs.gallery.innerHTML = markup;
//     lightbox.refresh();
//   })
// .catch(e => {
//   console.log('Error images:', err);
// });
// });
