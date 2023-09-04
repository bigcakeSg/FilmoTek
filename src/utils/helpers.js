import axios from 'axios';

export const getMovieTitleByRegion = (movieTitles, region) =>
  movieTitles.find((movie) => movie.region === region)?.title.toString() || '';

export const duration = (seconds) => {
  const hours = Math.floor(+seconds / 3600);
  const minutes = Math.floor((+seconds % 3600) / 60);

  return `${hours}h${minutes < 10 ? 0 : ''}${minutes}`;
};

export const scrollTop = (elementId) => {
  const mainElement = document.getElementById(elementId);
  if (mainElement) mainElement.scrollTo(0, 0);
};

export const loadImageAsBlob = (imageUrl, id) => {
  return async () => {
    try {
      let blob = sessionStorage.getItem(id); // get the blob URL for this image URL (or null)
      let result = null;

      if (!blob) {
        result = await axios.get(imageUrl, { responseType: 'blob' });
        blob = URL.createObjectURL(result.data);
        sessionStorage.setItem(id, blob); // save in session storage
      }

      return blob;
    } catch (error) {
      console.log('ERROR');
      return null;
    }
  };
};

export const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, delay);
  };
};

export const normalizeTitle = (title) => {
  let normTitle = title;

  if (normTitle.indexOf('The ') === 0) normTitle = title.slice(4);
  if (normTitle.indexOf('A ') === 0) normTitle = title.slice(2);
  if (normTitle.indexOf('Le ') === 0) normTitle = title.slice(3);
  if (normTitle.indexOf('La ') === 0) normTitle = title.slice(3);
  if (normTitle.indexOf("L'") === 0) normTitle = title.slice(2);
  if (normTitle.indexOf('Les ') === 0) normTitle = title.slice(4);
  if (normTitle.indexOf('Un ') === 0) normTitle = title.slice(3);
  if (normTitle.indexOf('Une ') === 0) normTitle = title.slice(4);
  if (normTitle.indexOf("D'") === 0) normTitle = title.slice(2);
  if (normTitle.indexOf('Des ') === 0) normTitle = title.slice(4);

  return normTitle
    .toLowerCase()
    .replace(/\s/g, '')
    .replace(/[àáâãäå]/g, 'a')
    .replace(/æ/g, 'ae')
    .replace(/ç/g, 'c')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/ñ/g, 'n')
    .replace(/[òóôõö]/g, 'o')
    .replace(/œ/g, 'oe')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ýÿ]/g, 'y')
    .replace(/\W/g, '');
};
