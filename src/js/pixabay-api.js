import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',

  params: {
    key: '23727869-9ab5af5c09b745cc02503bdaa',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  },
});

export function getImage(userInput) {
  return instance
    .get('', { params: { q: userInput } })
    .then(res => res.data.hits)

    .catch(err => {
      console.log(err);
    });
}

// key — твій унікальний ключ доступу до API.
// q — слово для пошуку. Те, що буде вводити користувач.
// image_type — тип зображення. Потрібні тільки фотографії, тому постав значення photo.
// orientation — орієнтація фотографії. Постав значення horizontal.
// safesearch — фільтр за віком. Постав значення true.

// hits - Antwort von der Pixabay API - das JSON - Objekt.
// Jedes Element in der hits - Liste ist ein Bildobjekt mit verschiedenen Eigenschaften,
// wie z.B.der URL des Bildes, dem Titel, der Bildgröße und vielem mehr.

// export function getImage(userInput) {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const params = {
//     q: userInput,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//     API_KEY: '23727869-9ab5af5c09b745cc02503bdaa',
//   };

//   return axios.get(BASE_URL, { params });
// }
